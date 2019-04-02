<template>
    <div id="content-app">
        <HeaderComponent></HeaderComponent>
        <slot />
        <FooterComponent></FooterComponent>
    </div>
</template>

<script>
    import HeaderComponent from '../components/layout/HeaderComponent.vue';
    import FooterComponent from '../components/layout/FooterComponent.vue';

    export default {
        name: 'DefaultLayout',
        components: {
            HeaderComponent,
            FooterComponent,
        }
    }
</script>