module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
    },
    env: {
        browser: true,
        node: true,
        es6: true
    },
    extends: 'eslint:recommended',
    settings: {
        'html/html-extensions': ['.html', '.mpx'] // consider .html and .mpx files as HTML
    },
    plugins: ['html'],
    globals: {
        wx: true,
        getApp: true,
        App: true
    },
    rules: {
        'no-console': 0,
        'no-unused-vars': 0,
        'no-useless-escape ': 0,
        quotes: [
            2,
            'single',
            {
                avoidEscape: true,
                allowTemplateLiterals: true
            }
        ]
    }
};
