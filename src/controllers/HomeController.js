export default new (class HomeController {
  async index(req, res) {
    res.send("home/index");
  }
})();
