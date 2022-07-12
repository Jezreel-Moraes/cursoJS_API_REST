"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Student = require('../models/Student'); var _Student2 = _interopRequireDefault(_Student);
var _Photo = require('../models/Photo'); var _Photo2 = _interopRequireDefault(_Photo);

exports. default = new (class StudentController {
  async create(req, res) {
    try {
      const student = await _Student2.default.create(req.body);
      return res.json(student);
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }

  async index(req, res) {
    try {
      const students = await _Student2.default.findAll({
        attributes: [
          "id",
          "name",
          "last_name",
          "email",
          "age",
          "weight",
          "height",
        ],
        order: [
          ["id", "DESC"],
          [_Photo2.default, "id", "DESC"],
        ],
        include: {
          model: _Photo2.default,
          attributes: ["url", "filename"],
        },
      });
      return res.json(students);
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ["Bad ID"],
        });
      }

      const student = await _Student2.default.findByPk(id, {
        attributes: [
          "id",
          "name",
          "last_name",
          "email",
          "age",
          "weight",
          "height",
        ],
        order: [
          ["id", "DESC"],
          [_Photo2.default, "id", "DESC"],
        ],
        include: {
          model: _Photo2.default,
          attributes: ["url", "filename"],
        },
      });
      if (!student) {
        return res.status(400).json({
          errors: ["Student not exists"],
        });
      }

      return res.json(student);
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ["Bad ID"],
        });
      }

      const student = await _Student2.default.findByPk(id);
      if (!student) {
        return res.status(400).json({
          errors: ["Student not exists"],
        });
      }

      student.update(req.body);

      return res.json(student);
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ["Bad ID"],
        });
      }

      const student = await _Student2.default.findByPk(id);
      if (!student) {
        return res.status(400).json({
          errors: ["Student not exists"],
        });
      }

      student.destroy();

      return res.json({
        deleted: true,
      });
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }
})();
