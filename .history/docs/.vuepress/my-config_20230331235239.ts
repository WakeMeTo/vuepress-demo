import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  lang: 'zh-CN',
  title: '你好， VuePress ！',
  description: '这是我的第一个 VuePress 站点',
  //排除指定的
  pagePatterns:['**/*.md', '!.vuepress', '!node_modules','!MyBlog/*.md'],
})