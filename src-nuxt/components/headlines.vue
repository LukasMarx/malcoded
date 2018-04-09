<template>
    <div class="container">
        <div class="frame" v-bind:style="{ borderColor: color}">
            <div class="inner-container">
                <div class="element" v-on:click="onClick(headline.id)" v-for="headline in headlines" :key="headline.id">
                    {{headline.name}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['headlines', 'color'],
    methods: {
        onClick(id) {
            this.$emit('headline-click', id);
        }
    }
};
</script>

<style scoped>
.container {
    position: -webkit-sticky;
    position: sticky;
    top: 70px;
    font-size: smaller;
}

.frame {
    border-left: 4px solid #c40030;
}

.inner-container {
    padding-left: 8px;
}

.element {
    cursor: pointer;
    margin: 8px;
}
</style>
