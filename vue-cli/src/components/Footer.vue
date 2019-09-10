<template>
    <div>
        <p>{{ myname }}</p>
        <p>{{ area.city }}</p>
        <button @click="changeName">Change</button>
    </div>
</template>
<script>
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
    }
    }
}
</script>