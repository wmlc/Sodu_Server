 const api = require('../api/api-mulu')
 import axios from 'axios';
 import url from '../api/url';

 var router = express.Router();
 router.post('/', function(req, res) {
     var data = api.getUpdateChapter(0, url.sourceType.sodu).then(result => {
         res.send(result)
     });
 });

 // async function test() {
 //     // var result = await axios.get('http://www.soduso.com/go_110058079.aspx?t=C3064516A92364D466E404220243BBCE7EB7BB2A74E6736924BFAB00A95A332C155D180662A76FEF3DB606D69CA2D0C6CA34BAA5D05D2A89')
 //     var result = await axios.get('https://www.sqsxs.com/book/93/93863/30110503.html')
 //     return result
 // }
 // router.get('/test', function(req, res) {
 //     test().then(res => {
 //             console.log(res);
 //             console.log(res.request._headers.host);
 //         })
 //         // var data = rank.getRank(0, url.sourceType.sodu).then(result => {
 //         //     res.send(result)
 //         // });
 // });


 module.exports = router;