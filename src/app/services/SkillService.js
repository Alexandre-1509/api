import Skill from "./../models/Skill.js";

class SkillServie {
  async registerSkill(nome, categoria) {
    const skill = await Skill.create({
      nome,
      categoria,
    });

    return { skill };
  }

  async listSkills() {
    const skills = await Skill.findAll({
      attributes: ["id", "nome", "categoria"],
    });

    return { skills };
  }

  async updateSkill(id, data) {
    const skill = await Skill.findByPk(id);

    if (!skill) {
      throw new Error("Skill não encontrada");
    }

    await skill.update({
      ...data,
    });

    return { skill };
  }

  async deleteSkill(id) {
    const skill = await Skill.findByPk(id);

    if (!skill) {
      throw new Error("Skill não encontrada");
    }

    await skill.destroy();

    return `Skill ${skill.nome} deletada com sucesso!`;
  }
}

export default new SkillServie();
