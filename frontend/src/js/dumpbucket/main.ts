import { default as textbox } from './components/textbox';
import { default as submitButton } from './components/submitbutton';
import { default as options } from './components/options';

import config from '@config';
import * as SaveHelper from './util/SaveHelper';

export default {
    components: {
        textbox,
        options,
        'submit-button': submitButton,
    },

    methods: {

        dump() {
            if (this.$store.getters.dumpbucket_getSaveToLocal) {
                SaveHelper.save(this.$store.getters.dumpbucket_getContent);
            }
            this.$store.dispatch('dumpbucket_setContent', '');
        },

        trySaveToLoad() {

            console.log('hi');
            
            if (this.$store.getters.dumpbucket_getSaveToLocal) {
                SaveHelper.save(this.$store.getters.dumpbucket_getContent);
            }
        },
    },

    created() {

        this.$store.dispatch('dumpbucket_setContent', SaveHelper.load());
        window.addEventListener('beforeunload', this.trySaveToLoad);
    },
};
