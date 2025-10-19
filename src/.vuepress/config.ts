import {defineUserConfig, UserConfig} from 'vuepress';
import theme from './theme.js';
import {searchPlugin} from '@vuepress/plugin-search';


const vitePressConfigs: UserConfig = {
    base: '/',

    lang: 'en-US',
    title: 'Documentation',
    description: 'All the documentation you need to get started with Lyttle Development',
    theme,
};

export default defineUserConfig(vitePressConfigs);
