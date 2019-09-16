<template>
    <div>
        {{ name }}
    </div>
</template>
<script>
import { eventBus } from '../main';

export default {
    props:{
        name:{
            type: String,
            default: 'Max'
        },
        area:{
            type: Object,
            default: function () {
                return { city : 'Seoul'};
            }
        }
    },
    data(){
        return {
            myname : this.name
        }
    },
    methods: {
    changeName() {
        this.myname = 'Danbi';
        this.$emit('changeName',this.myname);
        eventBus.changeName(this.myname);
    }
    }
}
</script>