<template>
  <div>
    <h1 class="title">Foreign Exchange Calculator</h1>
    <section>
      <input-field
        v-model="input"
        default-currency="EUR"
        @currencyChange="onCurrencyChange"
      />
    </section>
    <section>
      <ul>
        <li v-for="currency in favouriteCurrencies" :key="currency">
          <p>
            <strong>{{ currency }}</strong> {{ calculatedValueFor(currency) }}
          </p>
        </li>
        <li>
          <nuxt-link class="button" to="/new">Add new currency</nuxt-link>
        </li>
      </ul>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      input: 0,
    }
  },
  mounted() {
    if (!this.$store.state.currencies.length)
      this.$store.dispatch('updateCurrencies')
  },
  computed: {
    favouriteCurrencies () {
      return this.$store.state.favouriteCurrencies
    }
  },
  methods: {
    calculatedValueFor (currency: string) {
      if (!this.input) return 0
      type currencyOptions = {
        [key: string]: number
      }
      const currencies: currencyOptions = this.$store.state.currencies
      return this.input * (currencies[currency] || 1)
    },
    onCurrencyChange(nextSelectedCurrency: string) {
      this.$store.dispatch('updateCurrencies', nextSelectedCurrency)
    }
  }
})
</script>

<style>
section {
  margin-bottom: 30px;
}

li {
  margin-bottom: 10px;
}
</style>
