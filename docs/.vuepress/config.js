module.exports = {
    title: '阿森的博客',
    description: "Rome wasn't built in one day.",
    head: [
        // 增加一个自定义的 favicon(网页标签的图标)
        // 这里的 '/' 指向 docs/.vuepress/public 文件目录 
        // 即 docs/.vuepress/public/img/geass-bg.ico
        ['link', { rel: 'icon', href: '' }], 
    ],
    //base: '/dist/', 
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    //自动生成菜单//
    plugins: ['autobar'],//npm install -D boboidream/vuepress-bar
    themeConfig: {
        nav: [
            { text: '主页', link: '/' },
            //{ text: 'C#', link: '/csharp/' },
            //   { text: 'Sql Server', link: 'sqlserver/' },
            //   { text: '随笔', link: 'essay/' },         
        ]
    }
}