import sourceHelper from '../model/source'
import Url from '../util/url'
import contentType from '../model/contentType'

let source = sourceHelper.source;

function getContent(html, url, bookid, type) {
    let uri = Url(url)
    let result = null
    let sourceItem = sourceHelper.getSource(uri.host)
    if (!sourceItem) {
        return null
    }
    if (type == contentType.content) {
        var content = getHtmlCommon(html, sourceItem.contentReg)
        var catalogUrl = getCatalogPageUrl(html, url, bookid)
        result = {
            content,
            catalogUrl
        }
    } else if (type == contentType.catalgs) {

    }
    return result;
}



function getHtmlCommon(html, regexStr) {
    try {
        let result = null;
        html = html.replace(/\r/g, '').replace(/\n/g, '');
        var match = html.match(regexStr)
        if (match.length > 0) {
            result = replaceSymbel(match[0])
        }
        return result;
    } catch (ex) {
        console.log(ex);
        return null;
    }
}


function getCatalogPageUrl(html, url, bookid) {
    let result = url.substr(0, url.lastIndexOf('/') + 1)
    return result;
}

function replaceSymbel(html) {
    html = html.replace(/<br.*?\/>/g, "\n");
    html = html.replace(/<script.*?<\/script>/g, "");
    html = html.replace(/&nbsp;/g, " ");
    html = html.replace(/<p.*?>/g, "\n");
    html = html.replace(/<.*?>/g, "");
    html = html.replace(/&lt;\/script&gt;/g, "");
    html = html.replace(/&lt;\/div&gt;/g, "");
    html = html.replace(/\n\n/g, "\n");
    html = html.replace(/　/g, "");
    html = html.replace(/ /g, "");
    html = html.replace(/\n/g, '\n　　');
    html = html.replace('八一中文网启用新网址Www.81xsw.Com', '');

    return '　　' + html;
}

module.exports = {
    getContent
}