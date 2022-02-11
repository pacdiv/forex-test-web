<template>
  <div>
    <label class="label" for="input-value">Input Value</label>
    <div class="field has-addons">
      <p class="control">
        <span class="select">
          <select v-model="currency" @change="onCurrencyChange">
            <option :key="cur" v-for="cur in currencies" :value="cur">{{ cur }}</option>
          </select>
        </span>
      </p>
      <p class="control">
        <input class="input" type="number" id="input-value" v-model.number="model" />
      </p>
    </div>
  </div>
</template>

<script lang="js">
import Vue from 'vue'
export default {
  props: {
    defaultCurrency: {
      value: String,
      default: 'EUR'
    },
    value: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      currency: this.defaultCurrency
    }
  },
  computed: {
    model: {
      get () { return this.value.toFixed(2) },
      set (val) { this.$emit('input', val) }
    },
    currencies () {
      return Object.keys(this.$store.state.currencies)
    }
  },
  methods: {
    onCurrencyChange() {
      this.$emit('currencyChange', this.currency)
    }
  },
}
</script>
