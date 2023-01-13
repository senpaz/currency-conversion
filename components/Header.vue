<template>
  <div :class="$style.header" class="bg-gray">
    <div class="container">
      <nav>
        <ul class="flex">
          <li v-for="(item, idx) of menu" :key="idx" class="mr-8 last:mr-0">
            <nuxt-link :to="item.path" exact active-class="!text-text-gray-700" class="text-12 font-medium text-text-gray-500 py-4 block" >
              {{ item.title }}
            </nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data: () => ({
    menu: [
      { title: 'Калькулятор', path: '/' },
      { title: 'Курс рубля', path: '/currency' }
    ]
  })
}
</script>

<style module lang="scss">
.header{
}
</style>
