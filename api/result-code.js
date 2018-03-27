const success = {
    code: 0,
    msg: '获取数据成功'
}

const faild = {
    code: -1,
    msg: '获取数据失败'
}

function createResult(status, data) {
    let obj = {}
    obj = Object.assign(obj, status, {
        data: data
    })
    return obj
}
module.exports = {
    success,
    faild,
    createResult
}