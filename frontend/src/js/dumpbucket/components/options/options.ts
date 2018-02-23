export default {

    computed: {

        saveToLocal: {
            get() {
                return this.$store.getters.getSaveToLocal;
            },

            set() {
                this.$store.dispatch('toggleSaveToLocal');
            },
        },
    },
};
