import js from "@eslint/js";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,cjs,mjs}"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "commonjs",
    },
    plugins: {
      import: (await import("eslint-plugin-import")).default,
    },
    rules: {
      "no-param-reassign": "off",
      camelcase: "off",
      "no-unused-vars": ["error", { argsIgnorePattern: "next" }],
      "max-len": ["error", { code: 80 }],
    },
    extends: ["airbnb-base"],
  },
]);
