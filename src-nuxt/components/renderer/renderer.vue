<script>
import { QuillRenderer } from './renderer.js';
import codeview from '~/components/codeview.vue';
import progressiveimage from '~/components/progressiveimage.vue';

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
        return createElement('div', elements);
    }
};
</script>
<style>

</style>

