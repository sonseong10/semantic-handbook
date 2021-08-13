module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "Semantic Handbook",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: "HTML CSS Semantic Guidline ",
  // base: "/static-handbook/",
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
    smoothScroll: true,
    nav: [
      {
        text: "📖 HTML & CSS",
        link: "/guide"
      },
      {
        text: "🙋‍♂️ About",
        link: "/about/"
      },
      {
        text: "💻 Github",
        link: "https://github.com/sonseong10"
      }
    ],
    sidebar: [
      "/guide",
      {
        title: "HTML",
        collapsable: false,
        children: [
          "/html/what-is-html",
          "/html/tag-anatomy",
          "/html/doctype",
          "/html/headings-paragraph",
          "/html/emphasis",
          "/html/anchor",
          "/html/img",
          "/html/unorder-order-list",
          "/html/description-list",
          "/html/quotations",
          "/html/div-span",
          "/html/generic-section",
          "/html/form",
          "/html/graph",
          "/html/media",
          "/html/style-script",
          "/html/meta",
          "/html/etc"
        ]
      },
      {
        title: "CSS",
        collapsable: false,
        children: ["/css/what-is-css"]
      }
    ]
  }

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  // plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"]
}
