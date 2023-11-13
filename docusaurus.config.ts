import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Redacean',
  tagline: '',
  favicon: 'img/favicon.ico',
  url: 'https://www.redacean.com',
  baseUrl: '/',
  organizationName: 'redacean',
  projectName: 'website',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/redacean/website/issues/new',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/redacean/website/issues/new',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    //image: '',
    navbar: {
      title: 'Redacean',
      logo: {
        alt: 'Redacean Logo',
        src: 'img/redacean-logo.svg',
      },
      items: [
        {
	  to: '/blog',
	  label: 'Blog',
	  position: 'left'
	},
        {
          type: 'docSidebar',
          sidebarId: 'notesSidebar',
          position: 'left',
          label: 'Notes',
        },
        {
          type: 'docSidebar',
          sidebarId: 'ctfWriteupsSidebar',
          position: 'left',
          label: 'CTF Writeups',
        },
        {
	  to: '/about',
	  label: 'About',
	  position: 'right'
	},
	{
	  href: 'https://github.com/redacean/website',
	  label: 'GitHub',
	  position: 'right',
	},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Socials',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/nbayle',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/redacean',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/users/1081617669649862666',
            },
	    {
              label: 'YouTube',
              href: 'https://www.youtube.com/@redacean'
            },
            {
              label: 'Twitch',
              href: 'https://www.twitch.tv/redacean'
            },
            {
              label: 'Reddit',
              href: 'https://www.reddit.com/user/redacean'
            },
          ],
        },
        {
          title: 'CTF',
          items: [
            {
              label: 'Writeups',
              href: '/docs/ctf-writeups/',
            },
            {
              label: 'TryHackMe',
              href: 'https://tryhackme.com/p/redacean',
            },
            {
              label: 'HackTheBox Labs',
              href: 'https://app.hackthebox.com/users/1430943',
            },
            {
              label: 'CTF Time',
              href: 'https://ctftime.org/user/168119',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Redacean. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
