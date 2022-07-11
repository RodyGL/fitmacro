module.exports = {
  root: true,
  extends: ['fitmacro'],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  env: {
    node: true,
  },
};
