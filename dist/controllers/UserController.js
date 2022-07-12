"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

exports. default = new (class UserController {
  async create(req, res) {
    try {
      console.log(req.body);
      const newUser = await _User2.default.create(req.body);
      console.log(newUser);
      const { id, name, email } = newUser;

      return res.json({ id, name, email });
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }

  async index(req, res) {
    try {
      const users = await _User2.default.findAll({
        attributes: ["id", "name", "email"],
      });

      return res.json(users);
    } catch (error) {
      return res.json(null);
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      const user = await _User2.default.findByPk(id, {
        attributes: ["id", "name", "email"],
      });

      return user
        ? res.json(user)
        : res.status(400).json({
            errors: ["User not exists"],
          });
    } catch (error) {
      return res.json(null);
    }
  }

  async update(req, res) {
    try {
      const user = await _User2.default.findByPk(req.user.id);
      if (!user) {
        res.status(400).json({
          errors: ["User not exists"],
        });
      }

      const newUser = await user.update(req.body);
      const { id, name, email } = newUser;
      return res.json({ id, name, email });
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      // const { id } = req.body;
      // if (!id) {
      //   return res.status(400).json({
      //     errors: ["ID não enviado"],
      //   });
      // }

      const user = await _User2.default.findByPk(req.user.id);
      if (!user) {
        res.status(400).json({
          errors: ["User not exists"],
        });
      }

      await user.destroy();
      return res.json(null);
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }
})();
