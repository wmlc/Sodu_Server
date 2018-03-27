import lodash from 'lodash'

class Catalog {
    constructor() {
        this.bookId = ''
        this.catalogkName = ''
        this.catalogUrl = ''
        this.catalogContent = ''
        this.lyWeb = ''
    }


    clone() {
        return lodash.clone(this)
    }
}

module.exports = Catalog