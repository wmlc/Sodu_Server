const source = {
    sodu: {
        type: 0,
        host: 'sodu',
        disc: '搜索引擎'
    },
    snwx: {
        type: 1,
        host: 'www.snwx8.com',
        disc: '少年文学'
    },
    dhzw: {
        type: 1,
        host: 'www.dhzw.org',
        disc: '大海中文'
    },
    aszw: {
        type: 1,
        host: 'www.aszw.org',
        disc: '爱上中文'
    },
    qdsw: {
        type: 1,
        host: 'www.7dsw.com',
        disc: '7度书屋'
    },
    ylg: {
        type: 1,
        host: 'www.yunlaige.com',
        disc: '云来阁'
    },
    ggxs: {
        type: 1,
        host: 'www.55xs.com',
        disc: '古古小说网'
    },
    fyxs: {
        type: 1,
        host: 'www.baoliny.com',
        disc: '风云小说网'
    },
    djzw: {
        type: 1,
        host: 'dijiuzww.com',
        disc: '第九中文网'
    },
    sqs: {
        type: 1,
        host: 'www.sqsxs.com',
        disc: '手牵手小说'
    },
    fhj: {
        type: 1,
        host: 'www.fenghuaju.cc',
        disc: '风华居'
    },
    myg: {
        type: 1,
        host: 'www.muyuge.com',
        disc: '木鱼哥'
    },
    lwxs: {
        type: 1,
        host: 'www.lwtxt.net',
        disc: '乐文小说网'
    },
    zyjxs: {
        type: 1,
        host: 'www.zhuoyaju.com',
        disc: '卓雅居小说网'
    },
    byxsw: {
        type: 1,
        host: 'www.81xsw.com',
        disc: '八一小说网'
    },
    dsb: {
        type: 1,
        host: 'www.dashubao.cc',
        disc: '大书包小说网'
    },
    pldwx: {
        type: 1,
        host: 'piaoliudi.com',
        disc: '漂流地文学'
    },
    qlwx: {
        type: 1,
        host: 'www.76wx.com',
        disc: '齐鲁文学'
    },
    ylb: {
        type: 1,
        host: 'www.prwx.com',
        disc: '一流吧'
    },
    lax: {
        type: 1,
        host: 'www.aileleba.com',
        disc: '乐安宣书网'
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

module.exports = {
    source,
    check
}