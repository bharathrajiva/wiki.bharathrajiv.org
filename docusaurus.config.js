// @ts-check
const { themes: prismThemes } = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Bharath Rajiv Wiki',
  tagline:
    "Bharath Rajiv A's engineering wiki for systems, AI, infrastructure, edge hardware, and architecture thinking.",
  favicon: 'img/favicon.svg',

  url: 'https://wiki.bharathrajiv.org',
  baseUrl: '/',

  organizationName: 'bharathrajiva',
  projectName: 'wiki.bharathrajiv.org',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
          editUrl: 'https://github.com/bharathrajiva/wiki.bharathrajiv.org/edit/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/light-site-logo.png',
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: '',
        logo: {
          alt: 'Bharath Rajiv Wiki Logo',
          src: 'img/dark-site-logo.png',
          srcDark: 'img/light-site-logo.png',
        },
        items: [
          {
            href: 'https://github.com/bharathrajiva',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://www.linkedin.com/in/bharathrajiv',
            label: 'LinkedIn',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Bharath Rajiv A.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

module.exports = config;
