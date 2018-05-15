const source = {
    sodu: {
        type: 0,
        host: 'sodu',
        disc: '搜索引擎'
    },
    snwx: {
        type: 1,
        host: 'www.snwx8.com',
        disc: '少年文学',
        contentReg: /<div id=\"BookText\">.*?<\/div>/
    },
    dhzw: {
        type: 1,
        host: 'www.dhzw.org',
        disc: '大海中文',
        contentReg: /<div id=\"BookText\">.*?<\/div>/
    },
    aszw: {
        type: 1,
        host: 'www.aszw.org',
        disc: '爱上中文',
        contentReg: /<div id=\"contents\".*?<\/div>/
    },
    qdsw: {
        type: 1,
        host: 'www.7dsw.com',
        disc: '7度书屋',
        contentReg: /<div id=\"BookText\">.*?<\/div>/
    },
    ylg: {
        type: 1,
        host: 'www.yunlaige.com',
        disc: '云来阁',
        contentReg: /<div id=\"content\">.*?<div class=\"bottomlink tc\">/
    },
    ggxs: {
        type: 1,
        host: 'www.55xs.com',
        disc: '古古小说网',
        contentReg: /<dd id=\"contents\".*?<\/dd>/
    },
    fyxs: {
        type: 1,
        host: 'www.baoliny.com',
        disc: '风云小说网',
        contentReg: /<div id=\"?content\"?.*?<\/div>/
    },
    djzw: {
        type: 1,
        host: 'dijiuzww.com',
        disc: '第九中文网',
        contentReg: /<div id=\"?content\"?.*?<\/div>/
    },
    sqs: {
        type: 1,
        host: 'www.sqsxs.com',
        disc: '手牵手小说',
        contentReg: /<div id=\"content\">.*?<\/div>/
    },
    fhj: {
        type: 1,
        host: 'www.fenghuaju.cc',
        disc: '风华居',
        contentReg: /<div id=\"BookText\">.*?<\/div>/
    },
    myg: {
        type: 1,
        host: 'www.muyuge.com',
        disc: '木鱼哥',
        contentReg: /<p class=\"vote\">.*?<\/div>/
    },
    lwxs: {
        type: 1,
        host: 'www.lwtxt.net',
        disc: '乐文小说网',
        contentReg: /<div id=\"txtright\">.*?<span id=\"endtips\">/
    },
    zyjxs: {
        type: 1,
        host: 'www.zhuoyaju.com',
        disc: '卓雅居小说网',
        contentReg: /<div id=\"?content\"?.*?<\/div>/
    },
    byxsw: {
        type: 1,
        host: 'www.81xsw.com',
        disc: '八一小说网',
        contentReg: /<div id=\"?content\"?[\s\S]*?<\/div>/
    },
    dsb: {
        type: 1,
        host: 'www.dashubao.cc',
        disc: '大书包小说网',
        contentReg: /<div class=\"hr101\">.*?<span id=\"endtips\">/
    },
    pldwx: {
        type: 1,
        host: 'piaoliudi.com',
        disc: '漂流地文学',
        contentReg: /<div id=\"BookText\">.*?<\/div>/
    },
    qlwx: {
        type: 1,
        host: 'www.76wx.com',
        disc: '齐鲁文学',
        contentReg: /<div id=\"content\">.*?<\/div>/
    },
    ylb: {
        type: 1,
        host: 'www.prwx.com',
        disc: '一流吧',
        contentReg: /<\/tr><\/table>.*?<br\/>.*?<center>/
    },
    lax: {
        type: 1,
        host: 'www.aileleba.com',
        disc: '乐安宣书网',
        contentReg: /<div id="content"[\s\S]*?<\/div>/
    }

}

function check(host) {
    for (var key in source) {
        if (source[key].host == host) {
            return true
        }
    }
    return false
}

function getSource(host) {
    let result = null;
    for (var key in source) {
        if (source[key].host == host) {
            result = source[key]
            break;
        }
    }
    return result
}

module.exports = {
    source,
    check,
    getSource
}