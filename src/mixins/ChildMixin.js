export default {
    props: ['p2cn'],
    data() {
        return {
            funcArrayIndexes: []
        }
    },
    beforeDestroy() {
        // array.splice(index, 1);
        // this.funcArrayIndexes.forEach((index, indexOfIndex, array => {
        //     array.splice(index, 1);
        // })
    },
    methods: {
        p2cAddFunction(func) {
            let index = this.addChild(this.p2cn, func)
            this.funcArrayIndexes.push(index)
        }
    },
    inject: ['addChild']

}