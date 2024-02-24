import { defineRecipe } from '@pandacss/dev'

export default defineRecipe({
  className: 'card',
  base: { color: 'white' },
  variants: {
    size: {
      small: { fontSize: '14px' },
      large: { fontSize: '18px' }
    }
  },
  staticCss: [{ size: ['*'] }]
})
