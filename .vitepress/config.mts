import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Rocket",
  description: "Modify your Minecraft server - without the weight of Java",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "../rocket.svg",

    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide/get-started" },
      { text: "Reference", link: "/reference" },
    ],

    sidebar: [
      {
        text: "Guide",
        items: [
          { text: "Get Started", link: "/guide/get-started" },
          { text: "The Rocket Command", link: "/guide/the-rocket-command" },
          { text: "Types and Enums", link: "/guide/types-and-enums" },
          { text: "Events", link: "/guide/events" },
          { text: "Commands", link: "/guide/commands" },
          { text: "Worlds", link: "/guide/worlds" },
          { text: "Blocks", link: "/guide/blocks" },
          { text: "Entities", link: "/guide/entities" },
          { text: "Items", link: "/guide/items" },
          { text: "Players", link: "/guide/players" },
          { text: "HTTP Requests", link: "/guide/http-requests" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/znci/rocket" },
      { icon: "discord", link: "https://discord.gg/keY4zJ9Xq9" },
      { icon: "twitter", link: "https://twitter.com/zncidev" },
    ],

    footer: {
      message: "Rocket is a community project, made with ❤️ by znci",
      copyright:
        "© 2025 znci. All rights reserved. Rocket is not affiliated with Mojang Studios.",
    },

    search: {
      provider: "local",
    },

    outline: [1, 4],
  },
});
