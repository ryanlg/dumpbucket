import Vue from 'vue';
import axios from 'axios';
import { dumpbucket } from 'src/js';

import Config from '@config';

import 'assets/style/normalize.css'; // Normalize.css
import 'assets/style/global.scss'; // Global styles

export default {
    name: 'App',
    components: {
        dumpbucket,
    },
};
