import axios from 'axios';
import url from '../api/url';
import util from '../util/htmlAnalyse'

const resultCode = require('../api/result-code');

async function getContent(params) {
    try {
        var result = await axios({
            method: 'get',
            url: params.url
        })
        var content = util.getContent(result.data)
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