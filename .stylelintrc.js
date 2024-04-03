module.exports = {
  extends: ["stylelint-config-standard"],

  rules: {
    "declaration-no-important": true,

    "color-named": "never",

    "color-no-invalid-hex": true,

    "color-hex-alpha": "never",

    "no-descending-specificity": [true, { ignore: ["selectors-within-list"] }],

    "value-keyword-case": "lower",

    "unit-allowed-list": ["px", "%", "deg", "vw", "vh", "ms", "em", "rem"],

    "alpha-value-notation": ["percentage", { exceptProperties: ["opacity"] }],

    "font-weight-notation": "numeric",
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: ["tailwind", "apply", "variants", "responsive", "screen"],
      },
    ],
    "custom-property-empty-line-before": null,
  },
}
