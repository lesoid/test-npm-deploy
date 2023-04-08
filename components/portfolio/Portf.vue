<template>
    <div class="portfolio__item">
        <h1>Portfolio. </h1>
        <p>- - -</p>
        <!-- <span   style=" font-size: 1.2em;color: yellow">Все категории товаров без сортировки</span> -->
       
       <p>Використовував сервіс https://fakestoreapi.com/  за для бази товарів</p>
        <div class="portfolio__slider">
          <!-- :title="slide.title"   :content="slide.content"-->
    <vueper-slides
      ref="myVueperSlides"
      :fractions="true"
      :arrows="arrowsHiden"
      bullets-outside
    
      :slide-ratio="9 / 16"
    >
      <vueper-slide
        v-for="(slide, i) in slides"
        :key="i"
        :content="slide.content"
        :image="slide.image"
      
            >
      </vueper-slide>
    </vueper-slides>
    </div>
    </div>
    <!-- <hr> -->
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

export default {
  components: { VueperSlides, VueperSlide },
  data: () => ({
    pauseOnHover: true,
    autoPlaying: true,
    Playing: {},
    arrowsHiden: true,
    slides: [
      {
        title: "  Title Slide #0",
        //content: 'Slide 1 content.',
        image: "/src/screen/store-all.jpg",
       content: "Все категории товаров без сортировки",
        // content: 'Slide 3 content.',
      },
      {
        title: "  Title Slide #2",
        // content: 'Slide 3 content.',
        image: "/src/screen/woman.jpg",
        content: 'Woman filter',
      },
      {
        title: " Title Slide #1",
        // content: 'Slide 2 content.',
        image: "/src/screen/mans.jpg",
        content: ' Man filter',
        // content: 'Content, <span  " style=" font-size: 1.2em;color: yellow">why not?</span>',
      },
      {
        title: "Title Slide #4",
        //content: 'Slide 1 content.',
        image: "/src/screen/technics.jpg",
        content: 'Technics filter',
      },
      
      {
        title: "  Title Slide #3",
        content: "Content",
        // You can also provide a URL for the image.
        image: "/src/screen/juvil.jpg",
        content: 'Juvil filter',
        //link: 'https://www.maxrivephotography.com/index/C0000rU1RKCHdqwI/G0000X57AtIzuRX0/I0000Gvr9HqdtyXk'
      },
     
      {
        title: " Title Slide #5",
        // content: 'Slide 2 content.',
        image: "/src/screen/login.jpg",
        content: 'Працюе авторизація та реєстрація с SQL та localStorage',
      },
      {
        title: "Title Slide #6",
        // content: 'Slide 3 content.',
        image: "/src/screen/card.jpg",
        content: 'Кошик для товарів зберігається в SQL для кожного користувача',
      },
    ],
    
  }),
};
</script>




<style lang="scss" scoped>
.portfolio__item{
margin-top: 100px;
}
.portfolio__slider{
    flex-grow: 7;
    width: calc(75vw) ;
    // max-width: 750px;
} 


</style>
<style>
.vueperslide__title {
  color: rgb(162, 180, 52);
  font-size: 2em;
}
.vueperslide__content {
  color: #0f25cf;
  font-size: 1.3em;
  position: relative;
  background: #d49125;

}
/*Сдвигает Title Content в правый нижний угол*/ 
.vueperslide div {
  justify-content: flex-end !important ;
  align-items: center !important;
  padding-bottom: 20px;
}
</style>