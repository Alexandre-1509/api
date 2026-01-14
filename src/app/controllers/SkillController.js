import SkillService from "../services/SkillService.js";

class SkillController {
  async store(req, res) {
    try {
      const { nome, categoria } = req.body;

      const { skill } = await SkillService.registerSkill(nome, categoria);

      return res.status(201).json(skill);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async index(req, res) {
    try {
      const { skills } = await SkillService.listSkills();

      return res.status(200).json(skills);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const data = req.body;

      const { skill } = await SkillService.updateSkill(id, data);

      return res.status(200).json({ skill });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      const skill = await SkillService.deleteSkill(id);

      return res.status(200).json(skill);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export default new SkillController();
