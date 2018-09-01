var app = new Vue({
    el: '#app',
    data: {
        now: ''
    },
    methods: {
        onClick: function () {
            this.now = new Date().toLocaleString();
        }
    }
})