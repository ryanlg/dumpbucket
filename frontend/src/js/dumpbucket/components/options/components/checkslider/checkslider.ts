export default {

    data() {

        return {

            checked: this.value,
        };
    },

    props: ['value'],

    methods: {

        setChecked(event: any) {
            this.checked = !this.checked;
            this.$emit('input', event.target.checked);
        },
    },
};
