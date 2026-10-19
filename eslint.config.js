import js from "@eslint/js";
import globals from "globals";
import eslintConfigPrettier from "eslint-config-prettier";
import jsdoc from "eslint-plugin-jsdoc";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import unicorn from "eslint-plugin-unicorn";
import tseslint from "typescript-eslint";
import { fileURLToPath } from "node:url";
import { defineConfig, globalIgnores } from "eslint/config";

const PROJECT_DIRECTORY = fileURLToPath(new URL(".", import.meta.url));

const SOURCE_FILES = ["src/**/*.{ts,tsx}"];

const MAX_FILE_LINES = 500;
const MAX_FUNCTION_LINES = 60;
const MAX_CYCLOMATIC_COMPLEXITY = 8;
const MAX_NESTING_DEPTH = 3;
const MAX_NESTED_CALLBACKS = 3;
const MAX_FUNCTION_STATEMENTS = 15;
const MAX_FUNCTION_PARAMETERS = 4;

const IGNORED_MAGIC_NUMBERS = [-1, 0, 1];

const DOCUMENTATION_WITHOUT_ACCENTS = "^[^áéíóúÁÉÍÓÚüÜñÑ¿¡]*$";

/**
 * @description Configures TypeScript, React, documentation and code quality.
 * @author Steveen Cues
 * @version 2.0.0
 */
export default defineConfig([
  globalIgnores(["dist/**", "coverage/**", "node_modules/**", "*.tsbuildinfo"]),

  {
    files: SOURCE_FILES,

    extends: [
      js.configs.recommended,
      tseslint.configs.recommendedTypeChecked,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
      eslintConfigPrettier,
    ],

    languageOptions: {
      globals: globals.browser,

      parserOptions: {
        project: "./tsconfig.app.json",
        tsconfigRootDir: PROJECT_DIRECTORY,
      },
    },

    plugins: {
      jsdoc,
      unicorn,
    },

    rules: {
      /*
       * General JavaScript quality.
       */
      "no-console": [
        "error",
        {
          allow: ["warn", "error"],
        },
      ],

      "no-debugger": "error",
      "no-alert": "error",
      "no-eval": "error",
      "no-implied-eval": "error",
      "no-constant-condition": "error",
      "no-unreachable": "error",
      "no-else-return": "error",
      "no-lonely-if": "error",
      "no-nested-ternary": "error",
      "no-unneeded-ternary": "error",
      "no-param-reassign": "error",
      "no-return-await": "off",

      /*
       * Cyclomatic complexity and function size.
       */
      complexity: ["error", MAX_CYCLOMATIC_COMPLEXITY],

      "max-depth": ["error", MAX_NESTING_DEPTH],

      "max-nested-callbacks": ["error", MAX_NESTED_CALLBACKS],

      "max-statements": ["error", MAX_FUNCTION_STATEMENTS],

      "max-params": ["error", MAX_FUNCTION_PARAMETERS],

      "max-lines": [
        "error",
        {
          max: MAX_FILE_LINES,
          skipBlankLines: false,
          skipComments: false,
        },
      ],

      "max-lines-per-function": [
        "error",
        {
          max: MAX_FUNCTION_LINES,
          skipBlankLines: true,
          skipComments: true,
        },
      ],

      /*
       * TypeScript strictness.
       */
      "@typescript-eslint/no-explicit-any": "error",

      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          args: "all",
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrors: "all",
          caughtErrorsIgnorePattern: "^_",
          ignoreRestSiblings: true,
        },
      ],

      "@typescript-eslint/explicit-function-return-type": "error",

      "@typescript-eslint/explicit-module-boundary-types": "error",

      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          prefer: "type-imports",
          fixStyle: "separate-type-imports",
        },
      ],

      "@typescript-eslint/consistent-type-definitions": ["error", "interface"],

      "@typescript-eslint/consistent-type-assertions": [
        "error",
        {
          assertionStyle: "never",
        },
      ],

      "@typescript-eslint/no-non-null-assertion": "error",

      "@typescript-eslint/no-unnecessary-condition": "error",

      "@typescript-eslint/no-unnecessary-type-assertion": "error",

      "@typescript-eslint/strict-boolean-expressions": "error",

      "@typescript-eslint/switch-exhaustiveness-check": "error",

      "@typescript-eslint/no-floating-promises": "error",

      "@typescript-eslint/no-misused-promises": "error",

      "@typescript-eslint/no-deprecated": "error",

      /*
       * Magic numbers.
       * Disable the core rule and use the TypeScript-aware extension.
       */
      "no-magic-numbers": "off",

      "@typescript-eslint/no-magic-numbers": [
        "error",
        {
          ignore: IGNORED_MAGIC_NUMBERS,
          ignoreArrayIndexes: true,
          ignoreDefaultValues: false,
          enforceConst: true,
          detectObjects: true,
          ignoreEnums: false,
          ignoreNumericLiteralTypes: false,
          ignoreReadonlyClassProperties: false,
          ignoreTypeIndexes: true,
        },
      ],

      /*
       * Import restrictions.
       */
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["@libs", "@libs/*"],
              message:
                "Use a specific alias: @domain, @aplicacion, @infraestructura, @components, @assets or @styles.",
            },
          ],
        },
      ],

      /*
       * JSDoc requirements.
       */
      "jsdoc/require-jsdoc": [
        "error",
        {
          publicOnly: true,

          require: {
            ArrowFunctionExpression: true,
            ClassDeclaration: true,
            FunctionDeclaration: true,
            FunctionExpression: true,
            MethodDefinition: true,
          },

          contexts: ["TSInterfaceDeclaration", "TSTypeAliasDeclaration"],
        },
      ],

      "jsdoc/require-description": [
        "error",
        {
          descriptionStyle: "tag",
        },
      ],

      "jsdoc/require-param-description": "error",

      "jsdoc/require-returns-description": "error",

      "jsdoc/check-param-names": "error",

      "jsdoc/check-tag-names": "error",

      "jsdoc/match-description": [
        "error",
        {
          contexts: ["any"],
          matchDescription: DOCUMENTATION_WITHOUT_ACCENTS,

          tags: {
            description: true,
            summary: true,
            param: true,
            returns: true,
            throws: true,
            example: true,
            deprecated: true,
            remarks: true,
            see: true,
            todo: true,
          },

          message: "Write documentation without Spanish accent marks.",
        },
      ],

      /*
       * Unicorn: additional maintainability rules.
       */
      "unicorn/consistent-function-scoping": "error",

      "unicorn/no-for-each": "error",

      "unicorn/prefer-includes": "error",

      "unicorn/prefer-string-starts-ends-with": "error",

      "unicorn/prefer-number-properties": "error",

      "unicorn/no-useless-undefined": "error",
    },
  },
]);
