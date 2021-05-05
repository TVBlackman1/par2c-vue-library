<template>
    <div class="child2">{{counter}}</div>
</template>

<script>
    import ChildMixin from "@/mixins/ChildMixin";

    export default {
        name: "Child2",
        data() {
            return {
                counter: 0
            }
        },
        created() {
            this.p2cAddFunction(this.sub)
        },
        methods: {
            sub() {
                this.counter--
            }
        },
        mixins: [ChildMixin],
    }
</script>

<style scoped>
    .child2 {
        width: 40px;
        height: 50px;
        background-color: #502c30;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 22px;
        border-radius: 10px;
        cursor: pointer;

    }
</style>