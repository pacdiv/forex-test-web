<template>
  <div>
    <h1 class="title">Add New Currency</h1>
    <ul>
      <li :key="currency" v-for="(currency) in currencies">
        <button class="button" @click="saveCurrency(currency)">{{ currency }}</button>
      </li>
    </ul>
    <nuxt-link class="button" to="/">← Back</nuxt-link>
  </div>
</template>

<script lang="ts">
export default {
  mounted() {
    if (!this.$store.state.currencies.length)
      this.$store.dispatch('updateCurrencies')
  },
  computed: {
    currencies () {
      const { favouriteCurrencies } = this.$store.state
      return Object
        .keys(this.$store.state.currencies)
        .filter((currencyKey) => !favouriteCurrencies.includes(currencyKey))
    }
  },
  methods: {
    saveCurrency (curr: string) {
      this.$store.dispatch('addFavouriteCurrency', curr)
    },
  }
}
</script>

<style lang="scss" scoped>
ul {
  margin-bottom: 30px;
}
li {
  margin-bottom: 8px;
}
</style>
