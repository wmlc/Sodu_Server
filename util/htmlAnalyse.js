import source from '../model/source'
import Url from '../util/url'


function getContent(html, url, bookid, type) {
    let uri = Url(url)
    let result = null
    switch (uri.host) {
        case source.byxsw.host:
            result = getHtmlCommon(html, /<div id=\"?content\"?[\s\S]*?<\/div>/)
            break;
        default:
            break;
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

function replaceSymbel(html) {
    html = html.replace(/<br.*?\/>/g, "\n");
    html = html.replace(/<script.*?<\/script>/g, "");
    html = html.replace(/&nbsp;/g, " ");
    html = html.replace(/<p.*?>/g, "\n");
    html = html.replace(/<.*?>/g, "");
    html = html.replace(/&lt;\/script&gt;/g, "");
    html = html.replace(/&lt;\/div&gt;/g, "");
    html = html.replace(/\n\n/g, "\n");
    html = html.replace("　　　　　　", "　　");
    html = html.replace(/\n/g, '\n    ');
    return html;
}

module.exports = {
    getContent
}