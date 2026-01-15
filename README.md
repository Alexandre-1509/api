<h1>SkillSwap</h1>
<p>O <strong>SkillSwap</strong> é uma plataforma colaborativa onde usuários podem trocar conhecimentos. O sistema permite que cada pessoa liste habilidades que deseja ensinar e habilidades que deseja aprender, criando uma rede de aprendizado mútuo</p>

<p>Este projeto foi construído utilizando as seguintes tecnologias:</p>
<ul>
  <li>NodeJs com express</li>
  <li>PostgreSQL (Banco de dados para usuários e habilidades)</li>
  <li>Sequelize ORM (Gerenciamento de migrations e relacionamentos N:M)</li>
  <li>MongoDB & Mongoose (Armazenamento de logs de conexões e avaliações</li>
  <li>Yup (Validação de esquemas de dados de entrada)</li>
  <li>JWT (Autenticação e proteção de rotas)</li>
  <li>UUIDV4 (Indetificadores únicos para maior segurança)</li>
</ul>

<h3>Funcionalidades Principais</h3>
<ul>
  <li> <b>Autenticação Segura:</b> Cadastro e login com hash de senhas e token JWT.</li>
  <li><b>Gestão de Habilidades (N:M):</b> Usuários podem se associar a múltiplas habilidades com campos extras (Nivel e Tipo - Ensinar/Aprender).</li>
  <li><b>Validação Rigorosa</b> Uso de middlewares globais com Yup para garantir a integridade dos dados antes de chegarem ao banco.</li>
  <li><b>Arquitetura Híbrida: * Postgres: Dados estruturados (Users, Skills).</li>
    <ul>
      <li><b>MongoDB:</b> Dados flexíveis e de alta escrita (Logs de troca e Reviews)</li>
    </ul>
    <li><b>Segurança de Dados:</b> Uso de UUIDs em vez de IDs sequenciais para evitar exposição da volumetria do banco via URL</li>
</ul>
