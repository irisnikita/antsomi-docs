// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Antsomi Application Team Documentation',
  tagline:
    'Provides detailed information on how to effectively use the Antsomi platform.',
  url: 'https://irisnikita.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'irisnikita', // Usually your GitHub org/user name.
  projectName: 'antsomi-docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          lastVersion: 'current',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        appId: 'N5TQWTCS8U',
        apiKey: '241fa6c672f6e6dd684b82005614160b',
        indexName: 'antsomi-vercel',
        contextualSearch: true,
        externalUrlRegex: 'external\\.com|domain\\.com',
      },
      navbar: {
        // title: "API Docs",
        logo: {
          alt: 'Antsomi Logo',
          src: 'https://st-media-template.antsomi.com/upload/2024/01/19/21b86dbb-4f98-4f88-89bd-edae0880e5a2.png',
        },
        hideOnScroll: false,
        items: [
          // {
          //   label: "API Docs",
          //   position: "left",
          //   to: "docs/Authentication/over-view",
          // },
          { to: 'blog', label: 'Blog', position: 'right' },
          { to: 'docs/tips/custom-snippets', label: 'Tips', position: 'right' },
          {
            to: 'docs/conventions/team-rules',
            label: 'Team Rules (Beta)',
            position: 'right',
          },
          {
            label: 'Workflow',
            position: 'left',
            to: 'docs/workflow/over-view',
          },
          {
            label: 'Coding Style Guide',
            position: 'left',
            to: 'docs/coding-style-guide/over-view',
          },
          {
            label: 'Conventions',
            position: 'left',
            items: [
              {
                label: 'Conventional Commits',
                to: 'docs/conventions/conventional-commits/over-view',
              },
              {
                label: 'Git Branching Naming Convention',
                to: 'docs/conventions/git-branch-naming-convention/over-view',
              },
            ],
          },
          {
            label: 'Packages',
            position: 'left',
            items: [
              {
                label: '@antscorp/eslint-config-antsomi',
                to: 'docs/packages/eslint-config-antsomi/introduction',
              },
              {
                label: '@antscorp/antsomi-locales',
                to: 'docs/packages/antsomi-locales/introduction',
              },
              {
                label: '@antscorp/antsomi-hooks',
                to: 'docs/packages/antsomi-hooks/introduction',
              },
              {
                label: '@antscorp/antsomi-utils',
                to: 'docs/packages/antsomi-utils/introduction',
              },
            ],
          },
          {
            label: 'Components Docs',
            position: 'left',
            items: [
              {
                href: 'https://antsomi-ui.vercel.app/',
                label: 'Antsomi UI',
                'aria-label': 'Antsomi UI',
              },
              {
                href: 'https://antsomi-charts.vercel.app/',
                label: 'Antsomi Charts',
                'aria-label': 'Antsomi Charts',
              },
              {
                href: 'https://antsomi-cdp-components.vercel.app/',
                label: 'Antsomi CDP Components',
                'aria-label': 'Antsomi CDP Components',
              },
            ],
          },
        ],
      },
      footer: {
        copyright: `Copyright © ${new Date().getFullYear()} Antsomi.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

  plugins: [
    'docusaurus-plugin-sass',
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 80,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
        disableInDev: false,
      },
    ],
    async function myPlugin(context, options) {
      return {
        name: 'docusaurus-tailwindcss',
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require('tailwindcss'))
          postcssOptions.plugins.push(require('autoprefixer'))
          return postcssOptions
        },
      }
    },
  ],
}

module.exports = config
