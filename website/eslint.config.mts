import { defineConfig } from "eslint/config";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);

// ESM packages
import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";

// CJS plugins
const reactPlugin = require("eslint-plugin-react");
const docusaurusPlugin = require("@docusaurus/eslint-plugin");

export default defineConfig([
  {
    // Global ignores
    ignores: [
      "**/node_modules/**",
      "**/build/**",
      "**/.docusaurus/**",
      "**/.git/**",
      "**/.svn/**",
      "**/.hg/**",
      "**/*.svg",
      "**/pnpm-lock.yaml",
    ],
  },

  // Base JS rules
  js.configs.recommended,

  // Docusaurus and browser globals
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: { "@docusaurus": docusaurusPlugin },
    rules: docusaurusPlugin.configs.recommended.rules,
    languageOptions: { globals: globals.browser },
    settings: { react: { version: "detect" } },
  },

  // TypeScript preset
  ...tseslint.configs.recommended,

  // React preset
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat["jsx-runtime"],

  // CommonJS override
  {
    files: ["babel.config.cjs"],
    languageOptions: {
      sourceType: "commonjs",
      globals: globals.node,
    },
  },

  // Final override block
  {
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
    },
  },
]);
