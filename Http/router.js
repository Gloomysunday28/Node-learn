const routes = {
  routes: {},
  get: function(pathname, req, res) {
    this.routes[pathname] = (req, res) => {
      res.write('foo')
      res.end()
    }
    this.routes[pathname](req, res)
  }
}

const router = function(path, req, res) {
  routes.get(path, req, res)
}

module.exports = router