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

            this.$store.dispatch('dumpbucket_setEditable', false);

            const text = this.$refs.textbox.$el;
            const split = new SplitText(text);
            const chars = split.chars;
            const timeline = new gsap.TimelineMax();
            
            function random(min: number, max: number) {
                return (Math.random() * (max - min)) + min;
            }
            
            chars.sort(() => {return 0.5 - Math.random(); });
            const tweens = [] as gsap.TweenLite[];
            chars.forEach((v: any, i: any) => {
                tweens.push(gsap.TweenLite.to(v, 3, {
                    x: random(-500, 500),
                    y: random(-500, 500),
                    z: random(-500, 500),
                    scale: .1,
                }));
            });

            const delay = (chars.length > 200 ? 1 * (chars.length / 100) : 3) / (chars.length);
            timeline.add(tweens, '+=0', 'start', delay);
            const position = chars.length > 200 ? 0.1 / delay : 1;
            
            timeline.addCallback(this.fadeoutAll, '-=1');
            timeline.resume();

            // handle everything in store
            this.$store.dispatch('dumpbucket_dump');
        },

        fadeoutAll() {

            const dumpb = this.$refs.dumpbucket;
            
            gsap.TweenMax.to(dumpb, 2, { 
                opacity: 0,
                ease: gsap.Power3.easeOut,
            });
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
