export default {
    computed: {
        content: {
            get() {
                return this.$store.getters.dumpbucket_getContent;
            },

            set(value: string) {
                this.$store.dispatch('dumpbucket_setContent', value);
            },
        },
    },

    methods: {

        dump(options: any) {

            this.$store.dispatch('dumpbucket_setContent', '');
        },

        didContentUpdate() {

            this.$emit('content_update');
        },
    },
};
