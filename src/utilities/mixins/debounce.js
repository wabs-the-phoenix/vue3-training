export default {
    data() {
        return {
            timeOut: ""
        }
    },

    methods: {
        
        debounce(func, wait) {
            clearTimeout(this.timeOut);
            this.timeOut = setTimeout(func, wait);
        }
    }
}