<template>
  <div id="app">
    <HeaderComponent></HeaderComponent>
    <div id="app-content">
      <router-view></router-view>
    </div>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
    import HeaderComponent from '../../test-traveldiary/src/layout/HeaderComponent.vue';
    import FooterComponent from '../../test-traveldiary/src/layout/FooterComponent.vue';

    export default {
        components: {
            HeaderComponent,
            FooterComponent
        },
    }
</script>
