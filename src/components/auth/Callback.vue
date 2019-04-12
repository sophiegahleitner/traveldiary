<template>
    <div class="callback">Redirecting ...</div>
</template>

<script>
    export default {
        name: 'callbackComponent',
        mounted() {
            this.$auth.handleAuthentication().then((data) => {
                this.$router.push({ name: 'profile' })
            })
        }
    }
</script>