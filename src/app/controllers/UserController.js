import UserService from "./../services/UserService.js";

class UserController {
  async store(req, res) {
    try {
      const data = req.body;

      const { newUser } = await UserService.registerUser(data);

      return res.status(201).json(newUser);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async index(_req, res) {
    try {
      const { users } = await UserService.listUsers();

      return res.status(200).json(users);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async update(req, res) {
    try {
      const id = req.userId;
      const data = req.body;

      const { user } = await UserService.updateUser(id, data);

      return res.status(200).json(user);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async delete(req, res) {
    try {
      const id = req.userId;

      const { userDeleted } = await UserService.deleteUser(id);

      return res.status(200).json({ userDeleted });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async addNewSkill(req, res) {
    try {
      const userId = req.userId;
      const { skill_id, level, type } = req.body;

      const { skillAdded } = await UserService.addNewSkill(
        userId,
        skill_id,
        level,
        type
      );

      return res.status(201).json(skillAdded);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export default new UserController();
