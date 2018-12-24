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
        contentReg: /<div id=\"BookText\">.*?<\/div>/,
        catalogReges: {
            catalogAreaRegex: /<div id=\"list\">.*?<\/div>/,
            catalogItemRegex: /<dd><a href=\".*?<\/a><\/dd>/g,
            catalogItemDetailRegex: /href=\"(.*?)\">(.*?)<\/a>/,
            introRegex: /<div class=\"intro\">.*?<br \/>(.*?)<\/br>/,
            coverRegex: /<div id=\"fmimg\">.*?<img.*?src=\"(.*?)\".*?>/,
            authorRegex: /<i>作者：(.*?)<\/i>/,
            addPre: true
        }
    },
    dhzw: {
        type: 1,
        host: 'www.dhzw.org',
        disc: '大海中文',
        contentReg: /<div id=\"BookText\">.*?<\/div>/,
        catalogReges: {
            catalogAreaRegex: /<div id=\"list\">.*?<\/div>/,
            catalogItemRegex: /<dd><a href=\"(.*?)\".*?>(.*?)<\/a><\/dd>/g,
            catalogItemDetailRegex: /<dd><a href=\"(.*?)\".*?>(.*?)<\/a><\/dd>/,
            introRegex: /<div class=\"intro\">.*?<br \/>(.*?)<\/br>/,
            coverRegex: /<div id=\"fmimg\">.*?<img.*?src=\"(.*?)\".*?>/,
            authorRegex: /<i>作者：(.*?)<\/i>/,
            addPre: true
        }
    },
    aszw: {
        type: 1,
        host: 'www.aszw.org',
        disc: '爱上中文',
        contentReg: /<div id=\"contents\".*?<\/div>/,
        catalogReges: {
            catalogAreaRegex: /<head>.*?<\/html>/,
            catalogItemRegex: /<td class=\"L\".*?href=\"(.*?)\".*?>(.*?)<\/a><\/td>/g,
            catalogItemDetailRegex: /<td class=\"L\".*?href=\"(.*?)\".*?>(.*?)<\/a><\/td>/,
            introRegex: /<div class=\"js\">.*?<\/strong>(.*?)<\/br>/,
            coverRegex: /<div class=\"pic\">.*?<img.*?src=\"(.*?)\".*?>/,
            authorRegex: /<i>作者：(.*?)<\/i>/,
            addPre: true
        }
    },
    qdsw: {
        type: 1,
        host: 'www.7dsw.com',
        disc: '7度书屋',
        contentReg: /<div id=\"BookText\">.*?<\/div>/,
        catalogReges: {
            catalogAreaRegex: /<div id=\"list\">.*?<\/div>/,
            catalogItemRegex: /<dd><a href=\"(.*?)\".*?>(.*?)<\/a><\/dd>/g,
            catalogItemDetailRegex: /<dd><a href=\"(.*?)\".*?>(.*?)<\/a><\/dd>/,
            introRegex: /<div class=\"intro\">.*?<br \/>(.*?)<\/br>/,
            coverRegex: /<div id=\"fmimg\">.*?<img.*?src=\"(.*?)\".*?>/,
            authorRegex: /<i>作者：(.*?)<\/i>/,
            addPre: true
        }
    },
    ylg: {
        type: 1,
        host: 'www.yunlaige.com',
        disc: '云来阁',
        contentReg: /<div id=\"content\">.*?<div class=\"bottomlink tc\">/,
        catalogReges: {
            catalogAreaRegex: /<table.*?<\/table>/,
            catalogItemRegex: /<a href=\"(.*?)\">(.*?)<\/a>/g,
            catalogItemDetailRegex: /<a href=\"(.*?)\">(.*?)<\/a>/,
            introRegex: /<meta property=\"og:description\" content=\"(.*?)\"\/>/,
            coverRegex: /<meta property=\"og:image\" content=\"(.*?)\"\/>/,
            authorRegex: /<meta property=\"og:novel:author\" content=\"(.*?)\"\/>/,
            addPre: true
        }
    },
    ggxs: {
        type: 1,
        host: 'www.liushuba.com',
        disc: '古古小说网',
        contentReg: /<dd id=\"contents\".*?<\/dd>/,
        catalogReges: {
            catalogAreaRegex: /<table.*?class=\"list\">.*?<\/table>/,
            catalogItemRegex: /<td><a href=\"(.*?)\".*?>(.*?)<\/a><\/td>/g,
            catalogItemDetailRegex: /<td><a href=\"(.*?)\".*?>(.*?)<\/a><\/td>/,
            introRegex: /<div class=\"msgarea\">.*?<br \/><p>(.*?)<\/p>/,
            coverRegex: /<div class=\"img1\"><img src=\"(.*?)\".*?<\/div>/,
            authorRegex: /<a href=\"\/modules\/article\/authorarticle.php\\?author=.*?>(.*?)<\/a>/,
            addPre: true
        }
    },
    fyxs: {
        type: 1,
        host: 'www.baoliny.com',
        disc: '风云小说网',
        contentReg: /<div id=\"?content\"?.*?<\/div>/,
        catalogReges: {
            catalogAreaRegex: /<div class=\"readerListShow\".*?<\/div>/,
            catalogItemRegex: /<td.*?href=\"(.*?)\".*?>(.*?)<\/a><\/td>/g,
            catalogItemDetailRegex: /<td.*?href=\"(.*?)\".*?>(.*?)<\/a><\/td>/,
            introRegex: /<p align=\"center\">.*?<p>(.*?)<\/p>/,
            coverRegex: '',
            authorRegex: /②作者(.*?)所写/,
            addPre: false
        }
    },
    djzw: {
        type: 1,
        host: 'dijiuzww.com',
        disc: '第九中文网',
        contentReg: /<div id=\"?content\"?.*?<\/div>/,
        catalogReges: {
            catalogAreaRegex: /正文<\/dt>.*?<\/div>/,
            catalogItemRegex: /<dd><a href=\"\/(.*?)\">(.*?)<\/a><\/dd>/g,
            catalogItemDetailRegex: /<dd><a href=\"\/(.*?)\">(.*?)<\/a><\/dd>/,
            introRegex: /<div id=\"intro\">(.*?)<\/p>/,
            coverRegex: '',
            authorRegex: /<p>作者：(.*?)<\/p>/,
            addPre: true
        }
    },
    sqs: {
        type: 1,
        host: 'www.sqsxs.com',
        disc: '手牵手小说',
        contentReg: /<div id=\"content\">.*?<\/div>/,
        catalogReges: {
            catalogAreaRegex: /<div id=\"list\">.*?<\/div>/,
            catalogItemRegex: /<dd><a href=\"(.*?)\".*?>(.*?)<\/a><\/a><\/dd>/g,
            catalogItemDetailRegex: /<dd><a href=\"(.*?)\".*?>(.*?)<\/a><\/a><\/dd>/,
            introRegex: /<div id=\"intro\">(.*?)<\/div>/,
            coverRegex: /<div id=\"fmimg\">.*?<img.*?src=\"(.*?)\".*?>/,
            authorRegex: /<meta property=\"og:novel:author\" content=\"(.*?)\"\/>/,
            addPre: true
        }
    },
    fhj: {
        type: 1,
        host: 'www.fenghuaju.cc',
        disc: '风华居',
        contentReg: /<div id=\"BookText\">.*?<\/div>/,
        catalogReges: {
            catalogAreaRegex: /正文<\/dt>.*?<\/div>/,
            catalogItemRegex: /<dd><a href=\"(.*?)\">(.*?)<\/a><\/dd>/g,
            catalogItemDetailRegex: /<dd><a href=\"(.*?)\">(.*?)<\/a><\/dd>/,
            introRegex: /<div id=\"intro\">(.*?)<\/div>/,
            coverRegex: /<div id=\"fmimg\"><img.*?src=\"(.*?)\".*?>/,
            authorRegex: /<p>作&nbsp;&nbsp;&nbsp;&nbsp;者：(.*?)<\/p>/,
            addPre: true,
            imgPre: true
        }
    },
    myg: {
        type: 1,
        host: 'www.muyuge.com',
        disc: '木鱼哥',
        contentReg: /<p class=\"vote\">.*?<\/div>/,
        catalogReges: {
            catalogAreaRegex: /<div id=\"list\">.*?<\/div>/,
            catalogItemRegex: /<li><a href=\"(.*?)\".*?>(.*?)<\/a><\/li>/g,
            catalogItemDetailRegex: /<li><a href=\"(.*?)\".*?>(.*?)<\/a><\/li>/,
            introRegex: /<p class=\"infos\">(.*?)<\/p>/,
            coverRegex: /<div id=\"fmimg\">.*?<img.*?src=\"(.*?)\".*?>/,
            authorRegex: /<\/h1>&nbsp;&nbsp;&nbsp;&nbsp;(.*?)\/著<\/div>/,
            addPre: true,
        }
    },
    lwxs: {
        type: 1,
        host: 'www.lwtxt.net',
        disc: '乐文小说网',
        contentReg: /<div id=\"txtright\">.*?<span id=\"endtips\">/,
        catalogReges: {
            catalogAreaRegex: /<h2 class=\"bookTitle\">.*?<div id=\"uyan_frame\">/,
            catalogItemRegex: /<a href=\"(.*?)\">(.*?)<\/a>/g,
            catalogItemDetailRegex: /<a href=\"(.*?)\">(.*?)<\/a>/,
            introRegex: /<div class=\"reBook borderF\">(.*?)<\/div>/,
            coverRegex: /<div style=\"width:600px; padding:5px\">.*?<img.*?src=\"(.*?)\".*?>/,
            authorRegex: /<p>作者：(.*?)&nbsp;&nbsp;&nbsp;<\/p>/,
            addPre: true,
        }
    },
    zyjxs: {
        type: 1,
        host: 'www.zhuoyaju.com',
        disc: '卓雅居小说网',
        contentReg: /<div id=\"?content\"?.*?<\/div>/,
        catalogReges: {
            catalogAreaRegex: /正文<\/dt>.*?<\/div>/,
            catalogItemRegex: /<dd><a href=\"\/(.*?)\">(.*?)<\/a><\/dd>/g,
            catalogItemDetailRegex: /<dd><a href=\"\/(.*?)\">(.*?)<\/a><\/dd>/,
            introRegex: /<div id=\"intro\">(.*?)<\/p>/,
            coverRegex: '',
            authorRegex: /<p>作&nbsp;&nbsp;&nbsp;&nbsp;者：(.*?)<\/p>/,
            addPre: true,
        }
    },
    // byxsw: {
    //     type: 1,
    //     host: 'www.81xsw.com',
    //     disc: '八一小说网',
    //     contentReg: /<div id=\"?content\"?[\s\S]*?<\/div>/,
    //     catalogReges: {
    //         catalogAreaRegex: /<div id=\"list\">.*?<\/div>/,
    //         catalogItemRegex: /<dd><a href=\"(.*?)\">(.*?)<\/a><\/dd>/g,
    //         catalogItemDetailRegex: /<dd><a href=\"(.*?)\">(.*?)<\/a><\/dd>/,
    //         introRegex: /<div id=\"intro\">(.*?)<\/div>/,
    //         coverRegex: /<div id=\"fmimg\"><img.*?src=\"(.*?)\".*?\/>/,
    //         authorRegex: /<p>作&nbsp;&nbsp;&nbsp;&nbsp;者：(.*?)<\/p>/,
    //         addPre: true,
    //         imgPre: true
    //     }
    // },
    dsb: {
        type: 1,
        host: 'www.dashubao.cc',
        disc: '大书包小说网',
        contentReg: /<div class=\"hr101\">.*?<span id=\"endtips\">/,
        catalogReges: {
            catalogAreaRegex: /<h2 class=\"bookTitle\">.*?<div class=\"footer\"> /,
            catalogItemRegex: /<a href=\"(.*?)\">(.*?)<\/a>/g,
            catalogItemDetailRegex: /<a href=\"(.*?)\">(.*?)<\/a>/,
            introRegex: /<div class=\"reBook borderF\">(.*?)<\/div>/,
            coverRegex: /<div style=\"width:600px; padding:5px\">.*?<img.*?src=\"(.*?)\".*?>/,
            authorRegex: /<p>作者：(.*?)&nbsp;&nbsp;&nbsp;<\/p>/,
            addPre: true,
        }
    },
    // qlwx: {
    //     type: 1,
    //     host: 'www.76wx.com',
    //     disc: '齐鲁文学',
    //     contentReg: /<div id=\"content\">.*?<\/div>/,
    //     catalogReges: {
    //         catalogAreaRegex: /<dl>.*?<\/dl>/,
    //         catalogItemRegex: /<dd><a href=\"(.*?)\">(.*?)<\/a><\/dd>/g,
    //         catalogItemDetailRegex: /<dd><a href=\"(.*?)\">(.*?)<\/a><\/dd>/,
    //         introRegex: /<div id=\"intro\">(.*?)<\/div/,
    //         coverRegex: /<div id=\"fmimg\">.*?<img.*?src=\"(.*?)\".*?\/>/,
    //         authorRegex: /<p>作.*?者：(.*?)<\/p>/,
    //         addPre: true,
    //         imgPre: true,
    //     }
    // },
    ylb: {
        type: 1,
        host: 'www.prwx.com',
        disc: '一流吧',
        contentReg: /<\/tr><\/table>.*?<br\/>.*?<center>/,
        catalogReges: {
            catalogAreaRegex: /<div class=\"list\">正文[\s\S]*?<div class=\"bottom\">/,
            catalogItemRegex: /<a href.*?<\/a>/g,
            catalogItemDetailRegex: /href=\"(.*?)\">(.*?)<\/a>/,
            introRegex: '',
            coverRegex: '',
            authorRegex: /<div class=\"list\">作者：(.*?)&nbsp; &nbsp;<a/,
        }
    },
    lax: {
        type: 1,
        host: 'www.aileleba.com',
        disc: '乐安宣书网',
        contentReg: /<div id="content"[\s\S]*?<\/div>/,
        catalogReges: {
            catalogAreaRegex: /<ul class="chapters">.*?<\/ul>/,
            catalogItemRegex: /<a href.*?<\/a>/g,
            catalogItemDetailRegex: /href=\"(.*?)\">(.*?)<\/a>/,
            introRegex: /<meta property="og:description".*?content=\"(.*?)\"\/>/,
            coverRegex: /<meta property="og:image".*?content=\"(.*?)\"\/>/,
            authorRegex: /<meta property="og:novel:author".*?content=\"(.*?)\"\/>/,
        }
    },
    bqg: {
        type: 1,
        host: 'www.biquge5.com',
        search: (key)=> {
            return  'http://www.biquge5.com/so?searchkey=' + key
        },
        disc: '笔趣阁',
        searchReg:/<div class="result">[\S\s]*?href="(.*?)"[\s\S]*?>(.*?)<span>(.*?)小说[\s\S]*?com\/(.*?)\/[\s\S]*?<\/span><\/div>/g,
        searchReg2:/<div class="result">[\S\s]*?href="(.*?)"[\s\S]*?>(.*?)<span>(.*?)小说[\s\S]*?com\/(.*?)\/[\s\S]*?<\/span><\/div>/,
        contentReg: /<div id="content"[\s\S]*?<\/div>/,
        catalogReges: {
            catalogAreaRegex: /<ul class="_chapter">.*?<\/ul>/,
            catalogItemRegex: /<a href.*?<\/a>/g,
            catalogItemDetailRegex: /href=\"(.*?)\">(.*?)<\/a>/,
            introRegex: /<div id="intro">(.*?)<\/div>/,
            coverRegex: /<div id="fmimg">.*?src=\"(.*?)\"/,
            authorRegex: /<p>作者：(.*?)<\/p>/,
        }
    },
    psw: {
        type: 1,
        host: 'www.vodtw.com',
        search: (key)=> { 
           return `https://www.vodtw.com/Book/Search.aspx?SearchKey=${key}&SearchClass=1`
        },
        disc: '品书网',
        searchReg:/<div id="CListTitle">[\s\S]*?CListText[\s\S]*?<\/div>/g,
        searchReg2:/<div id="CListTitle">[\s\S]*?href="(.*?)"[\s\S]*?<b>(.*?)<\/b>[\s\S]*?target.*>(.*?)<\/a>[\s\S]*?CListText[\s\S]*?<\/div>/,
        contentReg: /<div id="content"[\s\S]*?<\/div>/,
        catalogReges: {
            catalogAreaRegex: /<ul class="_chapter">.*?<\/ul>/,
            catalogItemRegex: /<a href.*?<\/a>/g,
            catalogItemDetailRegex: /href=\"(.*?)\">(.*?)<\/a>/,
            introRegex: /<div id="intro">(.*?)<\/div>/,
            coverRegex: /<div id="fmimg">.*?src=\"(.*?)\"/,
            authorRegex: /<p>作者：(.*?)<\/p>/,
        }
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