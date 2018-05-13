import axios from 'axios';
import url from '../api/soduUrl';
import util from '../util/htmlAnalyse'
import contentType from '../model/contentType'
const iconv = require('iconv-lite');
const resultCode = require('../api/result-code');

async function getContent(params) {
    try {
        var result = await axios({
            method: 'get',
            url: params.url,
            responseType: 'arraybuffer',
            transformResponse: [function(data) {
                var str = iconv.decode(data, 'GBK')
                return str
            }]
        })
        var content = util.getContent(result.data, params.url, params.id, contentType.content)
        let result = resultCode.createResult(resultCode.success, content)
        return result
    } catch (e) {
        let result = resultCode.createResult(resultCode.faild, e.message)
        return result
    }
}

module.exports = {
    getContent
}