import { default as textbox } from './components/textbox';
import { default as submitButton } from './components/submitbutton';
import { default as options } from './components/options';

const SplitText = require('src/util/SplitText.js'); // tslint:disable-line: variable-name
import * as gsap from 'gsap';
import config from '@config';

export default {

    components: {
        textbox,
        options,
        'submit-button': submitButton,
    },

    methods: {

        dump() {

            const text = this.$refs.textbox.$el;
            const split = new SplitText(text);
            const chars = split.chars;
            
            function random(min: number, max: number) {
                return (Math.random() * (max - min)) + min;
            }
            
            chars.sort(() => {return 0.5 - Math.random(); });
            chars.forEach((v: any, i: any) => {
                gsap.TweenMax.to(v, 3, {
                    opacity: 0,
                    x: random(-500, 500),
                    y: random(-500, 500),
                    z: random(-500, 500),
                    scale: .1,
                    delay: i * .05,
                });
            });            

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
