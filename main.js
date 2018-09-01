Vue.component('hello-component', {
    template: '<p>Hello, Vue.js!</p>'
})

var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello, Vue.js!'
    }
})