import UserService from "../services/UserService.js";

class AuthController {
  async store(req, res) {
    try {
      const { email, password } = req.body;

      const { user, token } = await UserService.loginUser(email, password);

      return res.status(200).json({ user, token });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export default new AuthController();
