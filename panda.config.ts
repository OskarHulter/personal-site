import { defineConfig } from "@pandacss/dev"

import { card } from './public/card.recipe'
import button from './public/button.recipe'


export default defineConfig({
  // Whether to use css reset
  preflight: true,

  staticCss: {
    // the css properties you want to generate
    css: [],
    // the recipes you want to generate
  },
  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],
  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      recipes: {
        button,
        card
      }
    }
  },
  // The output directory for your css system
  outdir: "styled-system",
})
