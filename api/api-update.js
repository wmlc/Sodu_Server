import axios from 'axios';
import url from '../api/url';
import Book from '../model/book'
var moment = require('moment')
const resultCode = require('../api/result-code');

function getUpdateBooks(html) {
    try {
        let str = html
        let books = []
        let bookReg = /<a href=.*?加入书架<\/a>.[\s\S]*?left;"><a.*?a>.[\s\S]*?left.*?<\/div>/g
        let listReg = /<a href="(.[\S\s]*?)".*?>.*?addToFav\((.[\S\s]*?), '(.[\S\s]*?)'.[\S\s]*?<a.[\S\s]*?>(.[\S\s]*?)<\/a>.[\S\s]*?width:88.*>(.[\S\s]*?)<\/div>/

        let matches = str.match(bookReg)
        let book
        matches.forEach(element => {
            var match = element.match(listReg)
            book = new Book()
            book.bookId = match[2]
            book.bookName = match[3]
            book.newestCatalogName = match[4]
            book.updatePageUrl = match[1]
            book.updateTime = moment(match[5], 'YYYY/MM/DD hh:mm:ss').format('YYYY/MM/DD hh:mm')
            books.push(book)
        })
        return books
    } catch (error) {
        return null
    }
}


async function getLastUpdate() {
    let uri = url.getLastUpdateUrl()
    try {
        var result = await axios({
            method: 'get',
            url: uri
        })
        var books = getUpdateBooks(result.data)
        if (books) {
            let result = resultCode.createResult(resultCode.success, books)
            return result
        } else {
            throw new Error('未获取到最近更新列表')
        }
    } catch (e) {
        let result = resultCode.createResult(resultCode.faild, e.message)
        return result
    }
}

module.exports = { getLastUpdate }