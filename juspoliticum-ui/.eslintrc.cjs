module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'plugin:astro/recommended',
    'airbnb-base'
  ],
  overrides: [
    {
      files: ['*.cjs', '*.astro', '*.js'],
      rules: { semi: ['error', 'never'], 'comma-dangle': ['error', 'never'] }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['vue'],
  rules: {}
}
