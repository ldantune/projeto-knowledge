// .eslintrc.js
module.exports = {
  env: {
    node: true, // Isso permite que o ESLint reconheça variáveis do Node.js, como 'module'
    es2021: true, // Isso ativa as funcionalidades do ES6+
  },
  parserOptions: {
    ecmaVersion: 12, // ou 2021
    sourceType: "module", // para usar a sintaxe ES Module
  },
  extends: ["eslint:recommended", "plugin:vue/essential"],
  rules: {
    // suas regras customizadas
  },
};
