const FOLDERS = [
  "models",
  "entities",
  "dtos",
//   "controllers",
//   "services",
  "query",
  "interface",
//   "module",
  "rest",
];
const NUMBER_FOLDER = {
  MODELS: 0,
  ENTITY: 1,
  DTO: 2,
  QUERY: 3,
  INTERFACE: 4,
  REST: 5,
  CONTROLLER: 6,
  SERVICE: 7,
  MODULE: 8,
};

const MODELS_NAME = {
  model: "Model",
  entity: "Entity",
  service: "Service",
  controller: "Controller",
  dto: "Dto",
  repository: "Repository",
  module: "Module",
};
const ORMS = {
  typeorm: "TYPEORM",
  sequelize: "SEQUELIZE",
};
const DATABASE = {
  POSTGRES: "postgres",
  MYSQL: "mysql",
};
module.exports = {
  FOLDERS,
  NUMBER_FOLDER,
  MODELS_NAME,
  ORMS,
  DATABASE
};
