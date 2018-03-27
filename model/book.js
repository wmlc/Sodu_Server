 import lodash from 'lodash'

 class Book {
     constructor() {
         this.type = 0
         this.id = ''
         this.bookName = ''
         this.bookId = ''
         this.newestCatalogName = ''
         this.newestCatalogUrl = ''

         this.lastReadCatalogName = ''
         this.lastReadCatalogUrl = ''

         this.updateTime = ''

         this.author = ''
         this.cover = ''
         this.description = ''
         this.lyWeb = ''

         this.updatePageUrl = ''

         this.hasNew = false
         this.IsHistory = false

         this.cataloglist = []
     }


     clone() {
         return lodash.clone(this)
     }
 }

 module.exports = Book