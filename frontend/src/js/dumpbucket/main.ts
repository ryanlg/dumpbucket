import { default as textbox } from './components/textbox';
import { default as submitButton } from './components/submitbutton';
import { default as options } from './components/options';

import config from '@config';

export default {

    components: {
        textbox,
        options,
        'submit-button': submitButton,
    },

    methods: {

        dump() {

            // handle everything in store
            this.$store.dispatch('dumpbucket_dump');
        },

        trySave() {
            
            this.$store.dispatch('dumpbucket_persist_checked');
        },
    },

    created() {

        this.$store.dispatch('dumpbucket_load');
        window.addEventListener('beforeunload', this.trySave);
    },
};
