import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  methods:{
    changeName(name){
        this.$emit('changeName', name);
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
