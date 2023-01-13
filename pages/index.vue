<template>
    <div :class="$style.block">
        <div class="container pt-[20px] md:pt-[25px] pt-[30px]">
          <h1 class="text-primary text-20 md:text-26 text-34 font-bold md:font-medium mb-[20px] xl:mb-10 leading-[1]">Валютный калькулятор</h1>
          <div class="flex flex-col align-top md:flex-row col-auto gap-[20px] md:gap-9 mb-5 xl:mb-6 2xl:mb-10" >
            <form class="flex-1 form" :class="$style['block__form']">
              <div>
                <label for="currency_one">
                  Валюта 1
                </label>
                <UiInputBase
                  keep-alive
                  id="currency_one"
                  v-model.lazy="form.currency_one"
                  :value="form.currency_one"
                  placeholder="Введите название или код"
                ></UiInputBase>
              </div>

              <div>
                <label for="currency_two">
                  Валюта 2
                </label>
                <UiInputBase
                  id="currency_two"
                  v-model.lazy="form.currency_two"
                  :value="form.currency_two"
                  placeholder="Введите название или код"
                ></UiInputBase>
              </div>

              <div>
                <label for="quantity">
                  Количество
                </label>

                <UiInputBase
                  id="quantity"
                  type="number"
                  v-model.lazy="form.quantity"
                  :value="form.quantity"
                  placeholder="Введите число"
                ></UiInputBase>
              </div>

              <div class="flex items-center bg-secondary rounded-2xl py-5 md:py-8 px-7 xl:px-8">
                <div class="flex items-center justify-center mr-5 md:mr-6 xl:mr-8 w-[42px] h-[42px] xl:w-[45px] xl:h-[45px] 2xl:w-[50px] 2xl:h-[50px]" :class="$style.icon"><svgicon name="svg-i" class="svg-i"></svgicon></div>
                <span class="text-14 md:text-16 xl:text-20 2xl:text-24 text-primary font-bold">Итого:
                  {{converted.val ? numberFormater(converted.val, converted.currency) : '...'}}
                </span>
              </div>
            </form>

            <div :class="$style['block__card']" class="flex-1 bg-secondary border border-[#DFE1F0] rounded-2xl py-6 xl:py-8 2xl:py-10 px-[15px] xl:px-[25] 2xl:px-[30px]">
              <h3 class=" text-13 xl:text-15 2xl:text-18 text-primary font-medium mb-[25px] xl:mb-[40px] 2xl:mb-[50px] uppercase">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor:</h3>
              <div class="flex flex-col md:flex-row md:gap-[20px]">
                <ul class="flex-1 mb-[30px] md:mb-0">
                  <li v-for="item of info?.list" :key="item?.id" class="flex items-center text-14 md:text-13 xl:text-14 2xl:text-18 leading-[22px] mb-[20px] last:mb-0 2xl:max-w-[250px]">
                    <span :class="$style['icon-circle']" class="mr-2.5"></span>{{item?.text}}
                  </li>
                </ul>
                <div class="md:max-w-[115px] xl:max-w-none flex-1 grid grid-cols-4 md:grid-cols-1 xl:grid-cols-2 grid-rows-1 md:grid-rows-4 xl:grid-rows-2 md:gap-y-[5px] xl:gap-y-2.5 gap-x-[8px] md:gap-x-[0px] xl:gap-x-[15px]" :class="$style['block__gallery']">
                  <div class=" min-h-[50px] md:min-h-[60px] 2xl:h-[146px]" v-for="item of info?.gallery" :key="item.alt"><img :src="item.img" :alt="item.alt"></div>
                </div>
              </div>
            </div>
          </div>

<!--          сократил паддинг чтоб на full hd экране не появлялась полоса прокрутки, учиытвая закладки браузера и поисковую строку -->
          <div class="flex flex-col md:flex-row bg-secondary rounded-2xl py-[25px] py-8 px-4 md:px-5 xl:px-8 2xl:px-12 items-center mb-10 md:mb-0">
            <div class="md:max-w-[352px] xl:max-w-[608px] 2xl:max-w-[750px] md:mr-14 mb-6 md:mb-0 text-center md:text-left">
              <h2 class="mb-[10px] text-16 md:text-18 xl:text-29 2xl:text-36 font-bold md:font-medium text-blue leading-[1]">Нужна помощь?</h2>
              <h2 class="mb-[10px] xl:mb-[20px] text-16 md:text-18 xl:text-29 2xl:text-36 font-bold md:font-medium text-blue leading-[1]">Мы поможем! Просто свяжитесь с нами.</h2>
              <p class="text-12 xl:text-13 2xl:text-16 text-text-main">Наши специалисты с радостью ответят на все ваши вопросы и дадут профессиональную консультацию по товарам.</p>
            </div>
            <div class="text-center">
              <a class="mb-[14px] xl:mb-[20px] text-26 xl:text-40 2xl:text-50 font-medium text-blue leading-[1] block" href="tel:8 (800) 888-90-28">8 (800) 888-90-28</a>
              <div class="mb-[20px] text-text-main text-14 xl:text-18 2xl:text-24">или</div>
              <a href="mailto:info@example.ru" class="text-blue text-18 md:text-20 xl:text-24 2xl:text-34 block leading-[1]">info@example.ru</a>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
import '@/components/svg-icons/svg-i'
import { mapGetters } from 'vuex'
export default {
  data: () => ({
    form: {
      currency_one: '',
      currency_two: '',
      quantity: ''
    },
    info: {
      gallery: [
        // eslint-disable-next-line no-undef
        {img: require('static/images/img-1.jpg'), alt: 'img-1'},
        // eslint-disable-next-line no-undef
        {img: require('static/images/img-2.jpg'), alt: 'img-2'},
        // eslint-disable-next-line no-undef
        {img: require('static/images/img-3.jpg'), alt: 'img-3'},
        // eslint-disable-next-line no-undef
        {img: require('static/images/img-4.png'), alt: 'img-4'},
      ],
      list: [
        {text: 'incididunt ut labore et dolore magna aliqua', id: 1},
        {text: 'incididunt ut labore et', id: 2},
        {text: 'incididunt ut labore et dolore', id: 3},
        {text: 'labore et dolore', id: 4},
        {text: 'incididunt ut', id: 5},
        {text: 'incididunt ut labore et dolore', id: 6},
        {text: 'incididunt ut labore', id: 7},
      ]
    },
  }),
  computed: {
    ...mapGetters('currencies', ['getCurrencies']),
    converted(){
      if (this.getCurrencies) {
        const valutes = this.getCurrencies?.Valute
        if (valutes) {
          let arrayOfObj = Object.entries(valutes).map(e => e[1])
          const valuteOne = arrayOfObj.find(val => val?.CharCode === this.form.currency_one)
          const valuteTwo = arrayOfObj.find(val => val?.CharCode === this.form.currency_two)
          //рубли
          if(['RUB', 'Рубли'].includes(this.form.currency_two) || ['RUB', 'Рубли'].includes(this.form.currency_one)) {
            if (valuteOne) {
              return (valuteOne.Value * this.form.quantity).toFixed(2)
            } else if (valuteTwo){
              return (valuteTwo.Value * this.form.quantity).toFixed(2)
            }
          }
          //остальные
          if (valuteOne?.Nominal < valuteTwo?.Nominal) {
            return {
              val: this.form.quantity * ((valuteOne?.Value / valuteOne?.Nominal) * (valuteTwo?.Nominal / valuteTwo?.Value)),
              currency: valuteTwo?.CharCode
            }
          } else if (valuteTwo?.Nominal === 1) {
            return {
              val: this.form.quantity * ((valuteTwo?.Nominal / valuteOne?.Nominal / valuteTwo?.Value) * valuteOne?.Value),
              currency: valuteTwo?.CharCode
            }
          } else {
            return {
              val: this.form.quantity * ((valuteOne?.Value / valuteOne?.Nominal) * (valuteTwo?.Nominal / valuteTwo?.Value)),
              currency: valuteTwo?.CharCode
            }
          }
        }
      }
      return 0
    }
  },
  methods: {
    numberFormater(val, currency) {
      return new Intl.NumberFormat('ru-RU', {
        currency,
        style: 'currency'
      }).format(val)
    }
  }
}
</script>

<style lang="scss" module>

.block {
    &__form{
      & > div:not(:last-child) {
        margin-bottom: 20px;
        @media (min-width: 768px) {
          margin-bottom: 30px;
        }
      }
      label{
        display: block;
        font-weight: 500;
        font-size: 14px;
        margin-bottom: 12px;
        @media (min-width: 768px) {
          margin-bottom: 14px;
        }
        @media (min-width: 1536px) {
          font-size: 16px;
        }
      }
    }
  .icon{
    //padding: 10px;
    border: 3px solid #E02025;
    border-radius: 0 15px ;
    //@media (min-width: 1280px) {
    //  padding: 12px;
    //}
  }
  &__card{
    box-shadow: 0px 0px 20px rgba(239, 239, 239, 0.5);
  }
  .icon-circle{
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 2px solid #E02025;
    display: block;
    flex: 0 0 10px;
  }
  &__gallery{
    overflow: hidden;
    @media (min-width: 1280px) {
      border-radius: 0 50px;
    }
    div {
      overflow: hidden;
      @media (max-width: 1300px) {
        border-radius: 0 15px;
        &:nth-child(even){
          border-radius: 15px 0;
        }
      }
    }
      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }
    }
  }

</style>
