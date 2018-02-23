import { default as textbox } from './components/textbox';
import { default as submitButton } from './components/submitbutton';
import { default as options } from './components/options';

export default {

    components: {
        textbox,
        options,
        'submit-button': submitButton,
    },

    methods: {

        dump() {

            this.$refs.textbox.dump();
        },
    },
};
