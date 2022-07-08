import User from "../models/User";

export default new (class UserController {
  async create(req, res) {
    try {
      const newUser = await User.create(req.body);
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
      const users = await User.findAll({
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
      const user = await User.findByPk(id, {
        attributes: ["id", "name", "email"],
      });

      return user
        ? res.json(user)
        : res.status(400).json({
            errors: ["Usuário não existe"],
          });
    } catch (error) {
      return res.json(null);
    }
  }

  async update(req, res) {
    try {
      const user = await User.findByPk(req.user.id);
      if (!user) {
        res.status(400).json({
          errors: ["Usuário não existe"],
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

      const user = await User.findByPk(req.user.id);
      if (!user) {
        res.status(400).json({
          errors: ["Usuário não existe"],
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
