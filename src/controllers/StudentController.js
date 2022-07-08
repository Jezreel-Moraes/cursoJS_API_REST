import Student from "../models/Student";

export default new (class StudentController {
  async create(req, res) {
    try {
      const newStudent = await Student.create(req.body);
      return res.json(newStudent);
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }
})();
