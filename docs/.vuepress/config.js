module.exports = {
  title: "Semantic Handbook",
  description: "HTML CSS Semantic Guidline ",
  base: "/semantic-handbook/",

  head: [
    [
      "meta",
      { name: "viewport", content: "width=device-width, initial-scale=1" }
    ],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" }
    ],
    ["meta", { name: "theme-color", content: "#603cba" }],
    ["meta", { name: "msapplication-TileColor", content: "#603cba" }],
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["link", { rel: "manifest", href: "/manifest.json" }],
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

    ["link", { rel: "apple-touch-icon", href: "/images/apple-touch-icon.png" }],
    [
      "link",
      {
        rel: "mask-icon",
        href: "/images/android-chrome-256x256.png",
        color: "#603cba"
      }
    ]
  ],

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
        children: [
          "/css/what-is-css",
          "/css/basic",
          "/css/reset_normalize",
          "/css/boxmodel",
          "/css/bfc_bc",
          "/css/fix_float",
          "/css/layout",
          "/css/typography",
          "/css/state",
          "/css/interaction",
          "/css/media",
          "/css/em_rem",
          "/css/lint",
          "/css/browser"
        ]
      },
      {
        title: "Semantic",
        collapsable: false,
        children: [
          "/semantic/multiple-h1",
          "/semantic/aria-attribute.md",
          "/semantic/data-attribute.md",
          "/semantic/background-image.md",
          "/semantic/title-tip.md"
        ]
      }
    ]
  },

  plugins: [
    ["@vuepress/plugin-back-to-top"],
    [
      {
        "@vuepress/pwa": {
          serviceWorker: true,
          updatePopup: {
            message:
              "새 컨텐츠가 등록되었습니다. 새로고침 버튼을 눌러주세요 😄",
            buttonText: "새로고침"
          }
        }
      }
    ]
  ]
}
