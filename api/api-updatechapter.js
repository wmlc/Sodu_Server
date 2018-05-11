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
                temp.catalogName = match[2].replace(/【.*？】/, '')
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

function getTotalPage(html) {
    try {
        let str = html
        let page = 1
        let reg = /总计.*?个记录，共(.*?)页/
        let match = str.match(reg)
        if (match) {
            page = parseInt(match[1])
        }
        return page
    } catch (error) {
        return 1
    }
}

async function getUpdateChapters(bookid, bookName, index) {
    let uri = url.getUpdateChapterUrl(bookid, index)
    try {
        var result = await axios({
            method: 'get',
            url: uri
        })
        var list = getCatalogs(result.data, bookid, bookName)
        let page = getTotalPage(result.data)
        if (list) {
            let result = resultCode.createResult(resultCode.success, list)
            result.totalPage = page
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