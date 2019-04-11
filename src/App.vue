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
    import HeaderComponent from './layout/HeaderComponent.vue';
    import FooterComponent from './layout/FooterComponent.vue';

    export default {
        components: {
            HeaderComponent,
            FooterComponent
        },
    }
</script>

<!--
<script>
  import Traveldiary from './components/Traveldiary.vue';

  export default {
    name: 'app',
    components: {
      Traveldiary
    }
  }
</script>
-->