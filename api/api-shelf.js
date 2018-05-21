import axios from 'axios';
import source from '../core/source';
import url from '../core/soduUrl';
import Uri from '../util/url';
import Catalog from '../model/catalog'
var moment = require('moment')
const resultCode = require('../api/api-resultCode');

function getCatalogs(html, bookid, bookName) {
    try {
        let str = html
        let list = []
        let catalogReg = /<div style="width:560px;float:left;"><a href=.*?chapterurl=.[\s\S]*?xt1">.*?<\/div>/g
        let listReg = /<div style="width:560px;float:left;"><a href=.*?chapterurl=(.*?)" alt="(.*?)".[\s\S]*?target="_blank">.[\s\S]*?tl">(.*?)<\/a>.[\s\S]*?xt1">(.*?)<\/div>/

        let matches = str.match(catalogReg)
        let temp
        matches.forEach(element => {
            var match = element.match(listReg)
            if (match) {
                let uri = Uri(match[1])
                if (source.check(uri.host)) {
                    temp = new Catalog()
                    temp.catalogUrl = match[1]
                    temp.bookId = bookid
                    temp.bookName = bookName
                    temp.catalogName = match[2].replace(/【.*？】/, '')
                    temp.lyWeb = match[3]
                    temp.updateTime = moment(match[4], 'YYYY/MM/DD hh:mm:ss').format('YYYY/MM/DD hh:mm')
                    list.push(temp)
                }
            }
        })
        return list
    } catch (error) {
        return null
    }
}

function getData(params) {

}


async function checkUpdate(list) {


    var arry = JSON.parse(list)

    let requests = arry.map((element) => {
        return axios.get(element.url)
    });

    var results = await axios.all(requests)

    let datas = results.map((item, index) => {
        return {
            data: item.data,
            id: arry[index].id
        }
    });

    console.log(datas);

    var temp = []

    for (var item in datas) {
        var list = getCatalogs(datas[item].data, datas[item].id)
        var catalog = list[0]
        temp.push(catalog)
    }

    console.log(temp);
    let value = resultCode.createResult(resultCode.success, temp)
    return value
}

module.exports = {
    checkUpdate
}