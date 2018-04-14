import Vue from 'vue';
import axios from 'axios';

import { dumpbucket, intro } from 'src/js';

import FullPage from 'vue-fullpage.js/src/FullPage.vue';
import 'fullpage.js';

import Config from '@config';

import 'assets/style/normalize.css'; // Normalize.css
import 'assets/style/global.scss'; // Global styles

export default {
    name: 'App',
    components: {
        dumpbucket,
        FullPage,
        intro,
    },

    data() {
        return {
          options: {
            css3: true,
            scrollingSpeed: 500,
            autoScrolling: true,
            fitToSection: true,
            fitToSectionDelay: 1000,
            scrollBar: false,
            easing: 'easeInOutCubic',
            easingcss3: 'ease',
            touchSensitivity: 15,
            normalScrollElementTouchThreshold: 5,
            bigSectionsDestination: null,

            verticalCentered: false,
            },
        };
    },
};
