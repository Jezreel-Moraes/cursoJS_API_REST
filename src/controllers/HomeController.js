export default new (class HomeController {
  index(req, res) {
    res.json({
      allRight: true,
    });
  }
})();
