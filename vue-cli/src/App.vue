<template>
  <div>
<button>Show Header</button>
<button>Show Servers</button>
<button>Show Footer</button>
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
      selectedComponent: ''
      
    }
  },
  methods:{
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
