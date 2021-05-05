export default {
    props: ['p2cn'],
    methods: {
        p2cAddFunction(func) {
            this.addChild(this.p2cn, func)
        }
    },
    inject: ['addChild']

}