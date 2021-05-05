export default {
    methods: {
        addChildFunction(groupName, func) {
            if(this[groupName] === undefined) {
                this[groupName] = []
            }
            this[groupName].push(func)
        },
        p2cInvoke(groupName, ...args) {
            let ret = []
            this[groupName].forEach(func => {
                ret.push(func(...args))
            })
            return ret
        },
    },
    provide() {
        return {
            addChild: this.addChildFunction
        }
    },
}