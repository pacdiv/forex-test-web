<template>
  <div>
    <label class="label" for="input-value">Input Value</label>
    <div class="field has-addons">
      <p class="control">
        <span class="select">
          <select>
            <option :key="cur" v-for="(_, cur) in currencies" :value="cur">{{ cur }}</option>
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
    value: {
      type: Number,
      default: 0
    }
  },
  computed: {
    model: {
      get () { return this.value },
      set (val) { this.$emit('input', val) }
    },
    currencies () {
      return this.$store.state.currencies
    }
  }
}
</script>
