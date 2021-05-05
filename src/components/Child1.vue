<template>
    <div class="child1">{{counter}}</div>
</template>

<script>
    import ChildMixin from "@/mixins/ChildMixin";

    export default {
        name: "Child1",
        data() {
            return {
                counter: 0
            }
        },
        created() {
            this.p2cAddFunction(this.add)
            this.p2cAddFunction(this.add)
            this.p2cAddFunction(this.add)
            this.p2cAddFunction(this.add)
        },
        methods: {
            add(n = 1) {
                this.counter += n
            }
        },
        mixins: [ChildMixin],
    }
</script>

<style scoped>
    .child1 {
        width: 40px;
        height: 50px;
        background-color: #2c3e50;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 22px;
        border-radius: 10px;
        cursor: pointer;

    }
</style>