<template>
    <div>
        <Header/>
        <Nuxt />
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  async created() {
    try {
      await this.getCurrency()
    } catch (error) {
      console.warn(error)
    }
  },
  methods: {
    ...mapActions('currencies', ["getCurrency"])
  },
}
</script>

<style lang="scss">
button,
input,
optgroup,
select,
textarea {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
}

html {
    font-size: 16px;
}

body {
    @apply font-roboto text-text-main;
    font-size: 1rem;
    overflow-x: hidden;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: transparent;
}

</style>
