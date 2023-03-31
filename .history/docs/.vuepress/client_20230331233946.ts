import { defineClientConfig, usePagesData } from '@vuepress/client'

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    const pagesData = usePagesData()
    Promise.all(Object.keys(pagesData.value).map(key => pagesData[key])).then(    
  
  },
  setup() {},
  rootComponents: [],
})