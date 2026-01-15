<h1>🔄SkillSwap</h1>
<p>O <strong>SkillSwap</strong> é uma plataforma colaborativa onde usuários podem trocar conhecimentos. O sistema permite que cada pessoa liste habilidades que deseja ensinar e habilidades que deseja aprender, criando uma rede de aprendizado mútuo</p>

<h3>🚀Tecnologias:</h3>
<p>Este projeto foi construido utilizando as seguintes tecnologias:</p>
<ul>
  <li><b>NodeJs</b> com <b>Express</b></li>
  <li><b>PostgreSQL</b> (Banco de dados para usuários e habilidades)</li>
  <li><b>Sequelize ORM</b> (Gerenciamento de migrations e relacionamentos N:M)</li>
  <li><b>MongoDB</b> & <b>Mongoose</b> (Armazenamento de logs de conexões e avaliações</li>
  <li><b>Yup</b> (Validação de esquemas de dados de entrada)</li>
  <li><b>JWT</b> (Autenticação e proteção de rotas)</li>
  <li><b>UUIDV4</b> (Indetificadores únicos para maior segurança)</li>
</ul>

<h3>🛠️Funcionalidades Principais</h3>
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
<h3>📊Estrutura do Banco de Dados</h3>
<p>O projeto utiliza um relacionamento <b>Many-to-Many</b> entre <i>Users</i> e <i>Skills</i> através de uma tabela pivot chamada <i>UserSkills</i></p>
<b>Campos extras na tabela pivot:</b>
<ul>
  <li>level: Iniciante, Intermediário, Avançado</li>
  <li>type: Ensinar, Aprender</li>
</ul>
