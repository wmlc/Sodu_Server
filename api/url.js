const sodu = {
    home: "http://www.sodu.cc",
    rank: "http://www.sodu.cc/top{{index}}.html",
    search: "http://www.sodu.cc/result.html?searchstr=",
    lastUpdate: 'http://www.sodu.cc/map.html'
}

function getHomeUrl() {
    return sodu.home
}

function getRankUrl(index) {
    return index == 0 ? sodu.rank.replace('{{index}}', '') : sodu.rank.replace('{{index}}', '_' + index)
}

function getSearchUrl(para) {
    return sodu.search + para
}

function getLastUpdateUrl(para) {
    return sodu.lastUpdate
}


module.exports = { getHomeUrl, getRankUrl, getSearchUrl, getLastUpdateUrl }