export default {

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
