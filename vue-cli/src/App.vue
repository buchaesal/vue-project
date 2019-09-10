<template>
  <div>
    <p>{{ name }}</p>
<button @click="name='Sujin'">Change your name</button>
 <app-footer :name="name" @changeName="cng($event)"></app-footer>
 
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Servers from './components/Servers.vue';
import ServerDetails from './components/ServerDetails.vue';

export default {
  data: function(){
    return{
      name:'Sujin'
      
    }
  },
  methods:{
    cng(avg){
      alert(avg);
    }
  },
  components:{
    'app-header':Header,
    'app-servers':Servers,
    'app-server-details':ServerDetails,
    'app-footer':Footer
  }
}
</script>

<style>

</style>
