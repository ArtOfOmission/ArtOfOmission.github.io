module.exports = {
    title: '陈彦森',
    description: '沧海一粟',
    head: [
        // 增加一个自定义的 favicon(网页标签的图标)
        // 这里的 '/' 指向 docs/.vuepress/public 文件目录 
        // 即 docs/.vuepress/public/img/geass-bg.ico
        ['link', { rel: 'icon', href: '' }], 
    ],
    //base: 'dist/', // 这是部署到github相关的配置
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    themeConfig: {
        nav: [
          { text: '主页', link: '/' },
          { text: 'C#', link: '/csharp/' },
          { text: 'Sql Server', link: '/sqlserver/' },
          { text: '随笔', link: '/essay/' },
          // 下拉列表的配置
            //   {
            //     text: 'Languages',
            //     items: [
            //       { text: 'Chinese', link: '/language/chinese' },
            //       { text: 'English', link: '/language/English' }
            //     ]
            //   }
        ]
    }
}