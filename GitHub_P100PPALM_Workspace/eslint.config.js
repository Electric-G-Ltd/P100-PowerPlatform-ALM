// ESLint flat config for v9+
import js from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

export default [
    {
        ignores: ["out/**", "dist/**", "jest.config.js"],
    },
    js.configs.recommended,
    {
        files: ["**/*.ts", "**/*.tsx"],
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                ecmaVersion: 2021,
                sourceType: "module",
            },
        },
        plugins: {
            "@typescript-eslint": tseslint,
        },
        rules: {
            semi: ["error", "always"],
            quotes: ["error", "double"],
        },
    },
];
