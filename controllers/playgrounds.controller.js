const Playground = require('../models/Playground.model')

module.exports.playgroundController = {
  postPlayground: async (req, res) => {
    try {
      const playground = await Playground.create({
        ...req.body
      });
      res.json(playground);
    } catch (e) {
      res.json(e);
    }
  }
}