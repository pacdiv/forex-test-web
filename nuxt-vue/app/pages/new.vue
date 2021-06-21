<template>
  <div>
    <h1 class="title">Add New Currency</h1>
    <ul>
      <li :key="currency" v-for="(_, currency) in currencies">
        <button  class="button" @click="saveCurrency">{{ currency }}</button>
      </li>
    </ul>
    <nuxt-link class="button" to="/">← Back</nuxt-link>
  </div>
</template>

<script>
export default {
  computed: {
    currencies () { return this.$store.state.currencies }
  },
  methods: {
    saveCurrency (curr) {
      // Make me work!
    },
  }
}
</script>

<style lang="scss" scoped>
ul {
  margin-bottom: 30px;
}
</style>
