import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";

const config: Config = {
  title: "Digital Portfolio",
  tagline: `
    Welcome to my personal digital portfolio!
    Here you will find my resume, technical reference documentation, and the occasional blog post.

    This site is currently under construction, so please find my latest information on LinkedIn at linkedin.com/in/patyx/.
    `,
  favicon: "img/favicon.ico",

  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  url: "https://work.youngweb.site", // production site url
  baseUrl: "/", // /<baseUrl> pathname under which the site is served

  // GitHub pages deployment config
  organizationName: "paddy74", // GitHub org/user name
  projectName: "paddy74.github.io", // repo name

  // html metadata
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  plugins: [
    require.resolve("docusaurus-lunr-search"),
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "portfolio",
        path: "portfolio",
        routeBasePath: "portfolio",
        sidebarPath: "./sidebars.ts",
      },
    ],
  ],

  onBrokenLinks: "throw",
  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: "warn",
    },
  },
  themes: ["@docusaurus/theme-mermaid"],

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          // id ommitted, default instance
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/paddy74/paddy74.github.io/tree/main/website/",
          path: "docs",
          routeBasePath: "docs",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          onInlineTags: "warn",
        },
        // blog: false, // disable the default blog
        blog: false /* {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          editUrl: "https://github.com/paddy74/paddy74.github.io/tree/main/website/",
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "ignore", // "warn",
        }, */,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Social card
    image: "img/pyoung-social-card.jpg",
    colorMode: {
      respectPrefersColorScheme: true,
    },

    navbar: {
      title: "Patrick Young",
      logo: {
        alt: "Site Logo",
        src: "img/logo.png",
      },
      items: [
        // Portfolio
        {
          docsPluginId: "portfolio",
          type: "docSidebar",
          sidebarId: "defaultSidebar",
          position: "left",
          label: "Portfolio",
        },
        // Documentation
        {
          type: "docSidebar",
          sidebarId: "defaultSidebar",
          position: "left",
          label: "Documentation",
        },
        // Blog
        //{ to: "/blog", label: "Blog", position: "left" },

        // Right navbar
        {
          href: "https://github.com/paddy74/paddy74.github.io",
          label: "GitHub",
          position: "right",
        },
      ],
    },

    footer: {
      style: "dark",
      links: [
        /* {
          title: "Learn",
          items: [
            {
              label: "Introduction",
              to: "/docs/intro",
            },
          ],
        }, */
        {
          title: "Links",
          items: [
            {
              label: "LinkedIn:// patyx",
              href: "https://www.linkedin.com/in/patyx/",
            },
            {
              label: "GitHub:// paddy74",
              href: "https://github.com/paddy74/",
            },
            {
              label: "Stack Overflow:// patyx",
              href: "https://stackoverflow.com/users/7706917/patyx",
            },
          ],
        },
        {
          title: "More",
          items: [
            /* { label: "Portfolio", to: "/portfolio/intro" },
            { label: "Documentation", to: "/docs/intro" },
            { label: "Blog", to: "/blog" }, */
            {
              label: "Built with Docusaurus",
              href: "https://docusaurus.io/",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Patrick Young.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
