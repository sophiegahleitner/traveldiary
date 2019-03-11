<template>
    <div class="traveldiary">
        <Header></Header>
        <Diaries></Diaries>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from './Header.vue';
    import Diaries from './Diaries.vue';
    import Footer from './Footer.vue';

    export default {
        name: 'traveldiary',
        components: {
            Header,
            Diaries,
            Footer,
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: #42b983;
    }
</style>
