import axios from 'axios';
import url from '../api/url';
import Book from '../model/catalog'

var iconv = require('iconv-lite');

function getMulus(html, type) {
    let str = html
    let list = []
    let bookSodu = /<div class="main-html".[\s\S]*?<div style="width:88px;float:left;">.[\s\S]*?<\/div>/g
    let bookSoduSo = /<a href="\/mulu_.*?>.[\s\S]*?<\/a><\/div><div style="width:482px;float:left;"><a href="\/mulu_.[\s\S]*?.html">.[\s\S]*?<\/a><\/div><div style="width:88px;float:left;" class='xt1'>.[\s\S]*?<\/div>/g
    let bookSoduTw = /<a href="Chapter\.aspx\?bid=.*?">.*?<\/a>.*?<a href=.*?class=xt1>.*?<\/div>/g
    let listSodu = /<a href="(.[\S\s]*?)".*?>.*?addToFav\((.[\S\s]*?), '(.[\S\s]*?)'.[\S\s]*?<a.[\S\s]*?>(.[\S\s]*?)<\/a>.[\S\s]*?88.*>(.[\S\s]*?)<\/div>/
    let listSoudSo = /<a .*?>(.[\s\S]*?)<\/a><\/div><div style="width:482px;float:left;"><a href="(\/mulu_(.[\s\S]*?).html)">(.[\s\S]*?)<\/a><\/div><div style="width:88px;float:left;" class='xt1'>(.[\s\S]*?)<\/div>/
    let listSoudTw = /<a href="(Chapter\.aspx\?bid=(.*?))">(.*?)<\/a>.*?<a href=.*?">(.*?)<\/a>.*?class=xt1>(.*?)<\/div>/

    let matches = str.match(type == url.sourceType.sodu ? bookreg1 : bookreg2)
    let item
    matches.forEach(element => {
        var match = element.match(type == url.sourceType.sodu ? listSodu : listSoudSo)
        catalog = new Catalog()
        catalog.ly = type
        if (type == url.sourceType.sodu) {
            item.bookId = type + match[2]
            item.bookName = match[3]
            item.newestCatalogName = match[4]
            item.updatePageUrl = match[1]
            item.updateTime = match[5]
        } else if (type == url.sourceType.soduso) {
            item.bookId = match[3]
            item.bookName = match[1]
            item.newestCatalogName = match[4]
            item.updatePageUrl = url.soduso.home + match[2]
            item.updateTime = match[5]
        }
        list.push(catalog)
    })
    return list
}


async function getUpdateChapter(updateUrl, type) {
    var result = await axios({
        method: 'get',
        url: updateUrl,
        responseType: 'arraybuffer',
        transformResponse: [function(data) {
            if (type == url.sourceType.soduso) {
                var str = iconv.decode(data, 'GBK')
                return str
            } else {
                var str = iconv.decode(data, 'utf-8')
                return str
            }
        }]
    })
    var catalogs = getMulus(result.data, type)
    return catalogs
}

module.exports = { getRank }