<script>
import { QuillRenderer } from './renderer.js';
import codeview from '~/components/codeview.vue';
import progressiveimage from '~/components/progressiveimage.vue';
import { v4 } from 'uuid';

export default {
    components: {
        codeview,
        progressiveimage
    },
    props: ['input', 'primaryColor'],
    render(createElement) {
        if (!this.input || !this.input.content) return null;
        const delta = JSON.parse(this.input.content);

        const elements = [];
        const headlines = [];
        const renderer = new QuillRenderer();
        const nodes = renderer.render(delta);
        nodes.forEach(node => {
            if (node.tag === 'codeview') {
                elements.push(
                    createElement(codeview, {
                        props: {
                            code: node.content,
                            title: node.attributes.src,
                            language: node.attributes.lang,
                            primaryColor: this.input.primaryColor
                        }
                    })
                );
            } else if (node.tag === 'img') {
                elements.push(
                    createElement(progressiveimage, {
                        props: {
                            src: node.attributes.src,
                            alt: node.attributes.alt
                        }
                    })
                );
            } else if (node.tag === 'h1' || node.tag === 'h2') {
                const id = v4();
                headlines.push({ name: node.content, id: id });
                if (!node.attributes) {
                    node.attributes = {};
                }
                node.attributes['id'] = id;
                const newElement = createElement(node.tag, {
                    domProps: { innerHTML: node.content },
                    class: node.class,
                    attrs: node.attributes
                });
                elements.push(newElement);
            } else if (node.tag === 'a') {
                const newElement = createElement(node.tag, {
                    domProps: { innerHTML: node.content },
                    class: node.class,
                    style: { color: this.input.primaryColor },
                    attrs: node.attributes
                });
                elements.push(newElement);
            } else {
                const newElement = createElement(node.tag, {
                    domProps: { innerHTML: node.content },
                    class: node.class,
                    attrs: node.attributes
                });

                elements.push(newElement);
            }
        });
        this.$emit('headlines', headlines);
        return createElement('div', elements);
    }
};
</script>
<style>

</style>

