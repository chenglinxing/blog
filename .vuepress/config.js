module.exports = {
  "title": "orange",
  "description": "Welcome to orange blog!",
  "dest": "public",
  "base":"/",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "vdoing",
  "archive": true,
  "themeConfig": {
    "nav": [
      {
        "text": "主页",
        "link": "/",
        "icon": "reco-home"
      },
      { text: '分类', link: '/categories/' },
      {
        "text": "归档",
        "link": "/archives/",
        "icon": "reco-date"
      },
      { text: '标签', link: '/tags/' },
      {
        "text": "关于",
        "icon": "reco-blog",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/chenglinxing",
            "icon": "icon-github"
          },
          {
            "text": "CSDN",
            "link": "https://blog.csdn.net/weixin_43937400?type=blog",
            "icon": "icon-csdn"
          }
        ]
      }
    ],
    "sidebar": {
      "/docs/theme-reco/": [
        "test",
      ]
    }, //侧边栏  后续可以仿UI库或需要侧边栏
    "type": "blog",

    "logo": "/avatar.jpg",// 导航栏logo
    "search": true,
    "searchMaxSuggestions": 10,// 搜索结果显示最大数
    "lastUpdated": '上次更新', // 开启更新时间，并配置前缀文字   string | boolean (取值为git提交时间)
    // "lastUpdated": "Last Updated",
    // "author": "orange",
    // "authorAvatar": "/avatar.jpg",
    // "record": "xxxx",
    // "startYear": "2021"
    // 博主信息 (显示在首页侧边栏)
    "blogger": {
      "avatar": '/avatar.jpg',
      "name": 'orange',
      "slogan": '记录，成为更好的自己',
    },
    // 社交图标 (显示于博主信息栏和页脚栏。内置图标：https://doc.xugaoyi.com/pages/a20ce8/#social)
    social: {
      // iconfontCssFile: '//at.alicdn.com/t/xxx.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自己添加。阿里图片库：https://www.iconfont.cn/
      icons: [
        {
          iconClass: 'icon-csdn',
          title: 'CSDN',
          link: 'https://blog.csdn.net/weixin_43937400?type=blog',
        },
        {
          iconClass: 'icon-github',
          title: 'GitHub',
          link: 'https://github.com/chenglinxing',
        },
        {
          iconClass: 'icon-erji',
          title: '听音乐',
          link: 'https://music.163.com/#/playlist?id=755597173',
        },
      ],
    },
  },
  "markdown": {
    "lineNumbers": true,//代码行号
  },
  plugins: [
    ['@vuepress-reco/comments', {
      solution: 'valine',
      options: {
        appId: 'OfS8r0dcGQ0LjDBadCLjakGu-gzGzoHsz',// your appId
        appKey: 'ULx5mCVXPsayzEBal7QqCj1z', // your appKey
      }
    }],//评论
    ["sakura", {//页面樱花插件
      num: 30, // 默认数量
      show: true,
      zIndex: 2,
      img: {
        replace: false, // false 默认图 true 换图 需要填写httpUrl地址
        httpUrl: 'http://www.zpzpup.com/assets/image/sakura.png' // 绝对路径
      }
    }]
  ]
}