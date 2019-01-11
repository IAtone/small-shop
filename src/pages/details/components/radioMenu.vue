<template>
    <div class="chooser-components">
        <ul class="chooser-list">
            <li v-for="(item, index) in radios" :key="index" :class="{active: index == nowIndex}" @click="choose(index)">
                {{ item.title }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "radiomenu",
    data() {
        return {
            nowIndex: 0
        }
    },
    props: {
        radios: {
            type: Array,
            default: function() {
                return 
            }
        }
    },
    methods: {
        choose(index) {
            this.nowIndex = index;
            this.$emit("radios", this.radios[this.nowIndex].value);
            this.$store.dispatch("updateOrder", ["radios", this.radios[this.nowIndex].value]);
        }
    }
}
</script>

<style scoped>
.chooser-component {
    position: relative;
    display: inline-block;
}
.chooser-list li {
    display: inline-block;
    border: 1px solid #e3e3e3;
    height: 25px;
    line-height: 25px;
    padding: 0 8px;
    margin-right: 5px;
    border-radius: 3px;
    text-align: center;
    cursor: pointer;
}
.chooser-list li.active {
    border-color: #4fc08d;
    background-color: #4fc084;
    color: #fff;
}
</style>

