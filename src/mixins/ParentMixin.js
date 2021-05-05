export default {
    methods: {
        addChildFunction(groupName, func) {
            if(this[groupName] === undefined) {
                this[groupName] = []
            }
            this[groupName].push(func)
        },
        p2cInvoke(groupName) {
            this[groupName].forEach(func => func())
        },
    },
    provide() {
        return {
            addChild: this.addChildFunction
        }
    },
}