<template>
  <div>
    <h1 class="title">Foreign Exchange Calculator</h1>
    <section>
      <input-field v-model="input" />
    </section>
    <section>
      <ul>
        <li v-for="currency in []">

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
  }
})
</script>

<style>
section {
  margin-bottom: 30px;
}
</style>
