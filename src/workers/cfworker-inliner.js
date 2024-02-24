// worker.js

addEventListener('fetch', (event) => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const response = await fetch(url.toString(), request)

  return new HTMLRewriter().on('link[rel="stylesheet"]', new cssInline('href')).transform(response)
}

async function fetchCSS(url) {
  const response = await fetch(url)
  return response.text()
}

class cssInline {
  constructor(attributeName) {
    this.attributeName = attributeName
  }

  async element(element) {
    const attribute = element.getAttribute(this.attributeName)
    if (attribute) {
      const styles = await fetchCSS(attribute)
      element.replace(`<style>${styles}</style>`, {
        html: true,
      })
    }
  }
}
