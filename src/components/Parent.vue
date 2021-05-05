<template>
    <div class="container" @click="handleClick">
        <child1
                v-for="i in childCount"
                :key="i"
                p2cn="child1Name" />
        <child2
                v-for="i in childCount"
                :key="i+childCount"
                p2cn="child2Name" />
    </div>
</template>

<script>
    import ParentMixin from "@/mixins/ParentMixin";
    import Child1 from "@/components/Child1";
    import Child2 from "@/components/Child2";
    export default {
        name: "Parent",
        data() {
            return {
                childCount: 7
            }
        },
        methods: {
            handleClick() {
                this.p2cInvoke('child1Name')
                this.p2cInvoke('child2Name')
            }
        },
        components: {
            Child1,
            Child2
        },
        mixins: [ParentMixin]
    }
</script>

<style scoped>
.container {
    margin: auto;
    background-color: aquamarine;
    border-radius: 20px;
    height: 400px;
    width: 600px;
    display: grid;
    grid-template-columns: repeat(7, 50px);
    padding: 1.4em;
    box-sizing: border-box;
}
</style>