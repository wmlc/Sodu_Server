import sourceHelper from '../model/source'
import Url from '../util/url'

let source = sourceHelper.source;

function getContent(html, url, bookid, type) {
    let uri = Url(url)
    let result = null
    switch (uri.host) {
        //少年文学
        case source.snwx.host:
            result = getHtmlCommon(html, /<div id=\"BookText\">.*?<\/div>/)
            break;
            //大海中文
        case source.dhzw.host:
            result = getHtmlCommon(html, /<div id=\"BookText\">.*?<\/div>/)
            break;
            //爱上中文
        case source.aszw.host:
            result = getHtmlCommon(html, /<div id=\"contents\".*?<\/div>/)
            break;
            //七度
        case source.qdsw.host:
            result = getHtmlCommon(html, /<div id=\"BookText\">.*?<\/div>/)
            break;
            //云来阁
        case source.ylg.host:
            result = getHtmlCommon(html, /<div id=\"content\">.*?<div class=\"bottomlink tc\">/)
            break;
            //古古小说网
        case source.ggxs.host:
            result = getHtmlCommon(html, /<dd id=\"contents\".*?<\/dd>/)
            break;
            //风云小说网
        case source.fyxs.host:
            result = getHtmlCommon(html, /<p id=\"?content\"?.*?<\/p>/)
            break;
            //第九中文网
        case source.djzw.host:
            result = getHtmlCommon(html, /<div id=\"?content\"?.*?<\/div>/)
            break;
            //手牵手小说
        case source.sqs.host:
            result = getHtmlCommon(html, /<div id=\"content\">.*?<\/div>/)
            break;
            //风华居
        case source.fhj.host:
            result = getHtmlCommon(html, /<div id=\"content\">.*?<\/div>/)
            break;
            //木鱼哥
        case source.myg.host:
            result = getHtmlCommon(html, /<p class=\"vote\">.*?<\/div>/)
            break;
            //乐文小说网
        case source.lwxs.host:
            result = getHtmlCommon(html, /<div id=\"txtright\">.*?<span id=\"endtips\">/)
            break;
            //卓雅居小说网
        case source.zyjxs.host:
            result = getHtmlCommon(html, /<div id=\"?content\"?.*?<\/div>/)
            break;
            //八一小说网
        case source.byxsw.host:
            result = getHtmlCommon(html, /<div id=\"?content\"?[\s\S]*?<\/div>/)
            break;
            //大书包小说网
        case source.dsb.host:
            result = getHtmlCommon(html, /<div class=\"hr101\">.*?<span id=\"endtips\">/)
            break;
            //漂流地文学
        case source.pldwx.host:
            result = getHtmlCommon(html, /<div id=\"BookText\">.*?<\/div>/)
            break;
            //齐鲁文学
        case source.qlwx.host:
            result = getHtmlCommon(html, /<div id=\"content\">.*?<\/div>/)
            break;
            //一流吧
        case source.ylb.host:
            result = getHtmlCommon(html, /<\/tr><\/table>.*?<br\/>.*?<center>/)
            break;
            //乐安宣书网
        case source.lax.host:
            result = getHtmlCommon(html, /<div id="content"[\s\S]*?<\/div>/)
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
    html = html.replace(/　/g, "");
    html = html.replace(/ /g, "");
    html = html.replace(/\n/g, '\n　　');
    html = html.replace('八一中文网启用新网址Www.81xsw.Com', '');

    return '　　' + html;
}

module.exports = {
    getContent
}