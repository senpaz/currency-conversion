<template>
  <div :class="[$style['block'], wrapperClass]">
    <input
      v-bind="$attrs"
      :id="id"
      :type="type"
      :class="$style['input']"
      class="input w-full p-5 text-12 2xl:text-14 rounded-[5px] border border-[#DFDFDF] outline-none focus:border-primary duration-300 text-primary leading-[1] max-h-[50px]"
      :value="value"
      v-on="inputListeners"
    >
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    id: {
      type: String,
      default: ''
    },
    wrapperClass: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'text'
    },
  },
  computed: {
    inputListeners () {
      // eslint-disable-next-line vue/no-deprecated-dollar-listeners-api
      return Object.assign({}, this.$listeners, {
        input: (event) => {
          this.$emit('input', event.target.value)
        }
      })
    }
  }
}
</script>

<style lang="scss" module>
.block {
  position: relative;
}
</style>
