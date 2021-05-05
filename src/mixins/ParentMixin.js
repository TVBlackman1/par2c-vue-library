export default {
    methods: {
        addChildFunction(groupName, func) {
            if(this[groupName] === undefined) {
                this[groupName] = []
            }
            this[groupName].push(func)
            return this[groupName].length - 1 // index of function in array
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