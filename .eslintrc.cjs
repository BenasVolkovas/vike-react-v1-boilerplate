module.exports = {
    root: true,
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react-hooks/recommended",
        "plugin:react/recommended",
        "plugin:prettier/recommended",
    ],
    plugins: ["react", "react-hooks", "@typescript-eslint", "prettier", "simple-import-sort"],
    parser: "@typescript-eslint/parser",
};
