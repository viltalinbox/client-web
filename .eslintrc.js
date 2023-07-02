module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
    settings: {
        react: {
            version: 'detect',
        },
    },
    rules: {
        'no-console': 'warn',
        'no-unused-vars': 'warn',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
    env: {
        browser: true,
        node: true,
    },
};
