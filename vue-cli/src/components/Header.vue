<template>
    <div>
        <slot></slot>
    </div>
</template>
<script>
import { eventBus } from '../main';
export default {
    data(){
        return {
            name : 'default header name'
        }
    },
    created(){
        eventBus.$on('changeName',(data) => {
            this.name = data;
        });
    }
}
</script>
