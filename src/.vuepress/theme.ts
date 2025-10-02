import {hopeTheme} from 'vuepress-theme-hope';

import navbar from './navbar.js';

export default hopeTheme({
    hostname: 'https://docs.lyttledevelopment.com',

    logo: '/logo.svg',

    repo: 'Lyttle-Development/Documentation',

    docsDir: 'docs',

    // navbar
    navbar,

    sidebar: {
        '/minecraft/': 'structure',
        '/test/': 'structure',
    },

    footer: 'Lyttle Development Documentation',

    displayFooter: true,

    metaLocales: {
        editLink: 'Edit this page on GitHub',
    },

    // These features are enabled for demo, only preserve features you need here
    markdown: {
        align: true,
        attrs: true,
        codeTabs: true,
        component: true,
        demo: false,
        figure: true,
        gfm: true,
        imgLazyload: true,
        imgSize: true,
        include: true,
        mark: true,
        plantuml: true,
        spoiler: true,
        stylize: [
            {
                matcher: 'Recommended',
                replacer: ({tag}) => {
                    if (tag === 'em')
                        return {
                            tag: 'Badge',
                            attrs: {type: 'tip'},
                            content: 'Recommended',
                        };
                },
            },
        ],
        sub: true,
        sup: true,
        tabs: true,
        tasklist: true,
        vPre: true,
    },

    plugins: {
        catalog: false,
        components: {
            components: ['Badge', 'VPCard'],
        },
        icon: {
            prefix: 'fa6-solid:',
        },
    },
});
