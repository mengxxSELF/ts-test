const router = require('koa-router')()
const urllib = require('urllib')

router.get('/', function * (next) {
  try {
    yield this.render('index')
  } catch (error) {
    console.log(error)
  }
});

router.get('/data/:tar', function* (next) {
  let {tar} = this.params
  let url = `https://iactivity.blued.com/hd/2018-child/rank/${tar == 'left' ? 'host' : 'users'}/website`
  let result = yield urllib.request(url, {
    method: 'GET', 
    headers: {'Content-Type': 'application/json'}
    }
  )
  let { data } = result
  let { code, data: list } = JSON.parse(data)
  this.body = { data: list }
});

module.exports = router;
