import globals from "globals";

import path from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import pluginJs from "@eslint/js";

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({baseDirectory: __dirname, recommendedConfig: pluginJs.configs.recommended});

export default [
  {files: ["/src/**/*.js"], languageOptions: {sourceType: "commonjs"}},
  {ignores: ["**/dist/**/*.js", "**/eslint.config.mjs"]},
  {languageOptions: { globals: globals.browser }},
  ...compat.extends("airbnb-base"),
  {
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn",
      // Add more rules as needed
    }
  }
];
