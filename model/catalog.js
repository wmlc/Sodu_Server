import lodash from 'lodash'

class Catalog {
    constructor() {
        this.bookId = ''
        this.bookName = ''
        this.catalogkName = ''
        this.catalogUrl = ''
        this.catalogContent = ''
        this.lyWeb = ''
        this.updateTime = ''
    }

    clone() {
        return lodash.clone(this)
    }
}

module.exports = Catalog