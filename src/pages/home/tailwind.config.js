/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "cactus-tokens-primitive-green-green-700":
          "var(--cactus-tokens-primitive-green-green-700)",
        "cactus-tokens-primitive-neutral-neutral-900":
          "var(--cactus-tokens-primitive-neutral-neutral-900)",
        "cactus-tokens-primitive-olive-olive-300":
          "var(--cactus-tokens-primitive-olive-olive-300)",
        "cactus-tokens-primitive-olive-olive-50":
          "var(--cactus-tokens-primitive-olive-olive-50)",
        "cactus-tokens-primitive-olive-olive-500":
          "var(--cactus-tokens-primitive-olive-olive-500)",
        "cactus-tokens-semantic-color-on-surface":
          "var(--cactus-tokens-semantic-color-on-surface)",
        "cactus-tokens-semantic-color-primary-on-primary":
          "var(--cactus-tokens-semantic-color-primary-on-primary)",
        "cactus-tokens-semantic-color-primary-on-primary-container":
          "var(--cactus-tokens-semantic-color-primary-on-primary-container)",
        "cactus-tokens-semantic-color-primary-on-primary-fixed-variant":
          "var(--cactus-tokens-semantic-color-primary-on-primary-fixed-variant)",
        "cactus-tokens-semantic-color-primary-primary":
          "var(--cactus-tokens-semantic-color-primary-primary)",
        "cactus-tokens-semantic-color-primary-primary-container":
          "var(--cactus-tokens-semantic-color-primary-primary-container)",
      },
      fontFamily: {
        "cactus-body-large": "var(--cactus-body-large-font-family)",
        "cactus-body-medium": "var(--cactus-body-medium-font-family)",
        "cactus-button-medium": "var(--cactus-button-medium-font-family)",
        "cactus-button-xl": "var(--cactus-button-xl-font-family)",
        "cactus-display-large": "var(--cactus-display-large-font-family)",
        "cactus-display-medium": "var(--cactus-display-medium-font-family)",
        "cactus-display-medium-emphasis":
          "var(--cactus-display-medium-emphasis-font-family)",
        "cactus-display-small": "var(--cactus-display-small-font-family)",
        "cactus-heading-medium-emphasis":
          "var(--cactus-heading-medium-emphasis-font-family)",
        "cactus-heading-small": "var(--cactus-heading-small-font-family)",
        "cactus-label-large": "var(--cactus-label-large-font-family)",
        "cactus-label-small": "var(--cactus-label-small-font-family)",
        "cactus-title-large": "var(--cactus-title-large-font-family)",
        "cactus-title-medium-emphasis":
          "var(--cactus-title-medium-emphasis-font-family)",
      },
      boxShadow: {
        "cactus-elevation-light-02": "var(--cactus-elevation-light-02)",
      },
    },
  },
  plugins: [],
};
