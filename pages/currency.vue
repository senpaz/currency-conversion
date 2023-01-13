<template >
  <div :class="$style.block">
    <div class="flex container flex-col pt-[30px]">
      <h1 class="text-primary font-bold mb-5 xl:mb-10 leading-[1] text-20 md:text-26 2xl:text-34 ">Курс рубля</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[20px] xl:gap-[30px] mb-4 md:mb-8 xl:mb-10" :class="$style['block__cards']">
          <div class="w-auto bg-gray rounded-2xl py-[25px] px-[25px] md:py-10 2xl:px-[30px] hover:shadow-md duration-300 cursor-pointer" v-for="(valute,idx) in allValutes" :key="idx" >
          <div class="mb-6 md:mb-8 w-[50px] h-[50px] xl:w-[60px] xl:h-[60px] 2xl:w-[70px] 2xl:h-[70px]" :class="$style.icon"><svgicon name="svg-money" class="svg-money"></svgicon></div>
          <h4 class="text-17 md:text-18 xl:text-20 text-primary font-bold mb-5">{{valute?.CharCode}}</h4>
          <p class="text-14 xl:text-15 2xl:text-16 text-text-gray-950 mb-[25px] md:mb-[30px]"> {{valute?.Name}}</p>
          <ul>
            <li class="flex text-text-gray-900 items-center text-14 xl:text-15 2xl:text-16 leading-[18px] 2xl:leading-[20px] mb-[15px] md:mb-[20px] last:mb-0 font-medium">
              <span :class="$style['icon-circle']" class="mr-2.5"></span> Номинал: {{valute?.Nominal}}
            </li>
            <li class="flex text-text-gray-900 items-center text-14 xl:text-15 2xl:text-16 leading-[18px] 2xl:leading-[20px] mb-[15px] md:mb-[20px] last:mb-0 font-medium">
              <span :class="$style['icon-circle']" class="mr-2.5"></span> Курс: {{(valute?.Value).toFixed(2)}} ₽
            </li>
          </ul>
        </div>
      </div>
      <div class="flex flex-col  md:flex-row md:items-center bg-gray rounded-2xl py-[35px] px-[30px] text-16 md:text-18 xl:text-20 font-bold text-primary mb-[80px]">
        <div :class="$style['icon__footer']" class="w-[40px] h-[40px] xl:w-[40px] xl:h-[40px] 2xl:w-[50px] 2xl:h-[50px] md:mr-8 mb-7 md:mb-0"><svgicon class=" svg-i " name="svg-i"></svgicon></div>
        <div>Телефон: <a href="tel:8 (800) 888-90-28">8 (800) 888-90-28</a>, <a href="mailto:email: info@example.ru">email: info@example.ru</a>.</div>
      </div>
    </div>
  </div>
</template>

<script>
import '@/components/svg-icons'
import { mapGetters } from 'vuex'
export default {
  name: "currency",
  computed: {
    ...mapGetters('currencies', ['getCurrencies']),
    allValutes(){
      if (this.getCurrencies) {
        const valutes = this.getCurrencies?.Valute
        if (valutes) {
          return Object.entries(valutes).map(e => e[1])
        }
      }
      return []
    }
  }
}
</script>

<style module lang="scss">
.icon{
  //width: 70px;
  //height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  border: 3px solid #0F4471;
  border-radius: 0 15px ;
}
.icon__footer{
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid #0F4471;
  :global(.svg-i){
    color: #0F4471 !important;
  }
  border-radius:  0 15px ;
}
.icon-circle{
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 2px solid #E02025;
  display: block;
  flex: 0 0 10px;
}
.block{
  &__cards{
    & > div:nth-child(even) {
      .icon{
        border: 3px solid #E02025;
      }
      :global(.svg-money){
        color: #E02025;
      }
    }
  }
}

</style>
