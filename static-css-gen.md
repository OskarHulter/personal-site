Then you can build the library code and generate the static CSS file:

# build the library code
tsup src/index.tsx
 
# generate the static CSS file
panda cssgen --outfile dist/styles.css

Finally, don't forget to include the cascade layers as well in your app code:

App code

import { Button } from '@acme-org/design-system'
import './main.css'
 
export function App() {
  return <Button>Click me</Button>
}

main.css

@layer reset, base, tokens, recipes, utilities;
@import url('@acme-org/design-system/dist/styles.css');
 
/* Your own styles here */

This approach comes with a few downsides:

You can't customize the styles since the css is already generated

You might need add the prefix option to avoid className conflicts

import { defineConfig } from '@pandacss/dev'
 
export default defineConfig({
  //...
  prefix: 'acme'
})

You might have duplicate CSS classes when using multiple atomic css libraries
