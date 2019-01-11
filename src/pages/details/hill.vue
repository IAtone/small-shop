<template>
    <div>
        勇攀高峰: {{ getTotalPrice }}
    </div>
</template>
<script>
export default {
    name: "hill",
    data() {
        return {

        }
    },
    computed: {
        getTotalPrice() {
            return this.$store.getters.getTotalPrice;
        }
    }
}
</script>
<style scoped>

</style>
