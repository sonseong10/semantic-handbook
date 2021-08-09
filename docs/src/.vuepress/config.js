module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "Static Handbook",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: "test",

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["link", { rel: "manifest", href: "/manifest.json" }],
    ["meta", { name: "theme-color", content: "#603cba" }],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/images/favicon-32x32.png"
      }
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/images/favicon-16x16.png"
      }
    ],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" }
    ],
    ["link", { rel: "apple-touch-icon", href: "/images/apple-touch-icon.png" }],
    [
      "link",
      {
        rel: "mask-icon",
        href: "/images/android-chrome-256x256.png",
        color: "#603cba"
      }
    ],
    ["meta", { name: "msapplication-TileColor", content: "#603cba" }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: "",
    editLinks: false,
    docsDir: "",
    editLinkText: "",
    lastUpdated: false,
    nav: [
      {
        text: "📖 HTML",
        link: "/html/"
      },
      {
        text: "🎨 CSS",
        link: "/css/"
      },
      {
        text: "💻 Github",
        link: "https://github.com/sonseong10"
      }
    ],
    sidebar: {
      "/html/": [
        {
          title: "HTML",
          collapsable: false,
          children: ["", "using-vue"]
        }
      ]
    }
  }

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  // plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"]
}
