import { defineClientConfig } from '@vuepress/client'

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    const pagesData = usePagesData()
    console.log();
    
  },
  setup() {},
  rootComponents: [],
})