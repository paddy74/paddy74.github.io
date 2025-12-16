/** @type {import("stylelint").Config} */
export default {
  extends: ["stylelint-config-standard"],

  // Stylelint is only used for CSS files
  ignoreFiles: ["**/*", "!**/*.css", "**/build/**"],

  rules: {
    "selector-pseudo-class-no-unknown": [
      true,
      {
        // :global is a CSS modules feature to escape from class name hashing
        ignorePseudoClasses: ["global"],
      },
    ],
    "selector-class-pattern": null,
    "custom-property-empty-line-before": null,
    "selector-id-pattern": null,
    "declaration-empty-line-before": null,
    "comment-empty-line-before": null,
    "value-keyword-case": ["lower", { camelCaseSvgKeywords: true }],
  },
};
