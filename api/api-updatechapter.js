import axios from 'axios';
import url from '../api/url';
import Catalog from '../model/catalog'
var moment = require('moment')
const resultCode = require('../api/result-code');

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
                temp = new Catalog()
                temp.bookId = bookid
                temp.bookName = bookName
                temp.catalogkName = match[2]
                temp.catalogUrl = match[1]
                temp.lyWeb = match[3]
                temp.updateTime = moment(match[4], 'YYYY/MM/DD hh:mm:ss').format('YYYY/MM/DD hh:mm')
                list.push(temp)
            }
        })
        return list
    } catch (error) {
        return null
    }
}


async function getUpdateChapters(bookid, bookName) {
    let uri = url.getUpdateChapterUrl(bookid)
    try {
        var result = await axios({
            method: 'get',
            url: uri
        })
        var books = getCatalogs(result.data, bookid, bookName)
        if (books) {
            let result = resultCode.createResult(resultCode.success, books)
            return result
        } else {
            throw new Error('未获取到章节列表')
        }
    } catch (e) {
        let result = resultCode.createResult(resultCode.faild, e.message)
        return result
    }
}

module.exports = { getUpdateChapters }