<template>
<div>
    <ul>
        <li @click="gone">Hottest</li>
        <li>Best Drips</li>
        <li>Athletics</li>
        <li>Revenge body</li>
        <li>Rich Kids</li>
        <li>Pool Champ</li>

    </ul>
</div>
</template>

<script>
export default {
    data(){
        return {

        }
    }, 
    methods: {
        gone(){
            this.$router.push({ path: '/hot', replace: true })
        }

    }, 
    computed: {

    },
}
</script>
<style scoped>
ul {
    display: flex;
    flex-direction: column;

    list-style-type: none;
}
li {
    background-color: grey;
    margin-top: 2px;
    height: 3rem;
}
</style>