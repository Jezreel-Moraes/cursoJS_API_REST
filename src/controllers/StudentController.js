import Student from "../models/Student";

export default new (class StudentController {
  async create(req, res) {
    try {
      const student = await Student.create(req.body);
      return res.json(student);
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }

  async index(req, res) {
    try {
      const students = await Student.findAll({
        attributes: [
          "id",
          "name",
          "last_name",
          "email",
          "age",
          "weight",
          "height",
        ],
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

      const student = await Student.findByPk(id);
      if (!student) {
        return res.status(400).json({
          errors: ["Student not exists"],
        });
      }

      return res.json(student);
    } catch (error) {
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

      const student = await Student.findByPk(id);
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

      const student = await Student.findByPk(id);
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
