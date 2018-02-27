import { CheckSlider } from './components';

export default {

    components: {

        'check-slider': CheckSlider,
    },

    computed: {

        saveToLocal: {
            get() {
                return this.$store.getters.dumpbucket_getSaveToLocal;
            },

            set(value: boolean) {
                this.$store.dispatch('dumpbucket_setSaveToLocal', value);
            },
        },
    },
};
