import axios from 'axios';
import url from '../core/soduUrl';
import Book from '../model/book'
import source from '../core/source'
import analysis from '../core/htmlAnalyse'

const iconv = require('iconv-lite');
const moment = require('moment')
const resultCode = require('../api/api-resultCode');
const searchSources = [source.source.bqg]

function getBooks(html) {
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
            book.newestCatalogName = match[4].replace(/【.*?】/, '')
            book.updatePageUrl = match[1]
            book.updateTime = moment(match[5], 'YYYY/MM/DD hh:mm:ss').format('YYYY/MM/DD hh:mm')
            book.lyWeb = '搜索引擎'
            books.push(book)
        })
        return books
    } catch (error) {
        return null
    }
}

function getThirdSearchResult(html, sourceItem) {
    let books = analysis.getSearchResult(html, sourceItem.searchReg, sourceItem.host)
}


async function getSearchResult(para) {


    let buffer =  iconv.encode(para,'gbk')
    let  tempPara = '';

    buffer.forEach(b => {
        tempPara += '%' + b.toString(16)
    })
    console.log(tempPara);

    let uri = url.getSearchUrl(para)
    try {
        // let requests = searchSources.map((element) => {
        //     return axios.get(element.search + para)
        // });

        let requests = []
        requests.push(axios.get(uri))

        searchSources.forEach(item => {
            requests.push(axios({
                method: 'get',
                url: item.search + tempPara,
                responseType: 'arraybuffer',
                transformResponse: [function (data) {
                    var str = iconv.decode(data, 'GBK')
                    return str
                }]
            }))
        })
        var results = await axios.all(requests)
        let books = getBooks(results[0].data)
        for (let i = 1; i < results.length; i++) {
            let sourceItem = searchSources[i - 1]
            let temp = analysis.getSearchResult(results[i].data, sourceItem)
            if (temp && temp.length > 0) {
                books = books.concat(temp)
            }
        }
       
        if (books) {
            let result = resultCode.createResult(resultCode.success, books)
            return result
        } else {
            throw new Error('未获取到搜索结果')
        }
    } catch (e) {
        let result = resultCode.createResult(resultCode.faild, e.message)
        return result
    }
}

module.exports = {
    getSearchResult
}