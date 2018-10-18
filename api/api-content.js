import axios from 'axios';
import url from '../core/soduUrl'
import analysis from '../core/htmlAnalyse'
import contentType from '../model/contentType'
const iconv = require('iconv-lite');
const resultCode = require('../api/api-resultCode');

// var rootCas = require('ssl-root-cas/latest').create();
// var https = require('https');
// https.globalAgent.options.ca = rootCas;
// // axios.agent = rootCas;
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
async function getContent(params) {
    try {
        let result = await axios({
            method: 'get',
            url: params.url,
            responseType: 'arraybuffer',
            rejectUnauthorized: false,
            transformResponse: [function (data) {
                var str = iconv.decode(data, 'GBK')
                return str
            }]
        })
        var content = analysis.getContent(result.data, params.url, params.id, contentType.content)
        let value = resultCode.createResult(resultCode.success, content)
        return value
    } catch (e) {
        console.log(e);
        let value = resultCode.createResult(resultCode.faild, e.message)
        return value
    }
}

function getCatalogPageUrl(params) {
    var url = analysis.getContent(null, params.url, params.id, contentType.catalogPageUrl)
    return url;
}

async function getCatalogs(params) {
    let url = params.isDirct == '1' ? params.url : getCatalogPageUrl(params)
    try {
        var result = await axios({
            method: 'get',
            url: url,
            responseType: 'arraybuffer',
            transformResponse: [function (data) {
                var str = iconv.decode(data, 'GBK')
                return str
            }]
        })
        console.log(result);
        var catalogs = analysis.getContent(result.data, url, params.id, contentType.catalgs)
        let value = resultCode.createResult(resultCode.success, catalogs)
        return value
    } catch (e) {
        let value = resultCode.createResult(resultCode.faild, e.message)
        return value
    }
}

module.exports = {
    getContent,
    getCatalogs
}