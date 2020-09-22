<template>
  <div>
    <h1 class="title">Foreign Exchange Calculator</h1>
    <section>
      <input-field v-model="input" />
    </section>
    <section>
      <ul>
        <li v-for="currency in favouriteCurrencies">
          <label class="label">{{ currency }}</label>
          <p>{{ calculatedValueFor(currency)</p>
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
    return { input: 0 }
  },
  computed: {
    favouriteCurrencies () {
      // make me work!
      return []
    }
  },
  methods: {
    calculatedValueFor (currency: string) {
      // make me work too!
    }
  }
})
</script>

<style>
section {
  margin-bottom: 30px;
}
</style>
