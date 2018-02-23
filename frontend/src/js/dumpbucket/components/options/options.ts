export default {

    computed: {

        saveToLocal: {
            get() {
                return this.$store.getters.dumpbucket_getSaveToLocal;
            },

            set() {
                this.$store.dispatch('toggleSaveToLocal');
            },
        },
    },
};
