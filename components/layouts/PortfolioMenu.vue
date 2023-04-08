<template>
  <div :class="{ hiden__burger: hidenburger }" class="header__link">
    <nav class="ul__menu2">
      <ul class="ul__menu">
        <!-- <li><NuxtLink to="/">Home</NuxtLink></li> -->

       
        <!-- $emit('ops') событие на свертывание бургер меню -->
        <li>
          <NuxtLink
            to="/"
            class="i0"
            @click.prevent="
              scroll = 'home';
              $emit('ops');
            "
          >
            Home
          </NuxtLink>
        </li>
        <!-- <li><NuxtLink to="/"> <button class="i1" @click.prevent=" scroll='kub1';$emit('ops')">-a-</button></NuxtLink></li> -->
        <li>
          <NuxtLink
            to="/"
            @click.prevent="
              scroll = 'kub2';
              $emit('ops');
            "
            >About</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            to="/"
            @click.prevent="
              scroll = 'kub3';
               $emit('ops');
            "
            >Skills</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            to="/"
            @click.prevent="
              scroll = 'kub4';
               $emit('ops');
            "
            >Portfolio</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            to="/"
            @click.prevent="
              scroll = 'kub5';
               $emit('ops');
            "
            >Contacts</NuxtLink
          >
        </li>
        <!-- <div @click="hideActions = !hideActions">
          <p class="menu_text">Other</p>
          <ul
            ref="userActions"
            :class="{ hiden_ul: hideActions }"
            class="section"
          >
            <li style="z-index: 4">
              <NuxtLink to="/slider">Slider</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/category/catsvgExemple.vue">SvgExemple</NuxtLink>
            </li>
            
          </ul>
        </div> -->
        <!-- <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/contacts">Contacts</NuxtLink></li> -->
      </ul>
    </nav>
    <!-- <strong>{{ hidenburger }}</strong> -->
  </div>
</template>

<script  lang="ts">
import { onClickOutside } from "@vueuse/core";
import { useScrolling } from "~/composables/useScroll";
export default {
  props: {
    hidenburger: {
      type: Boolean,
    },
  },
  setup() {
    const hideActions = ref(true);
    const userActions = ref(null);
    const scroll = useScrolling();
    function passId(yy: string) {
      console.log("!!!tt " + yy);
      scroll.value = yy;
    }
    onClickOutside(userActions, () => (hideActions.value = true));
    return {
      scroll,
      hideActions,
      userActions,
      passId,
    };
  },
};
</script>
<style scoped lang="scss">
.ul__menu {
  list-style: none;
  display: flex;
  position: static;
  & :hover {
    color: rgb(153 108 59);
  }
}
.menu_text,
.ul__menu li a{
  font-size: 20px;
  margin: 0px 10px;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
  color:rgb(153 108 59);
  // &.router-link-exact-active {
  // color:  rgb(51 88 10); 
  &:hover {
    color:rgb(153 156 59);
  }
}
// }
.menu_text:after {
  content: " \25BC";
  color: #4a88b5;
  font-size: 15px;
}
.section {
  // position: absolute;
  // background-image: url("/src/img/336.jpg");
 // top: 115px;
  padding-inline-start: 5px;
  // left: 80px;
  list-style: none;
  & li :hover {
    color: rgb(86, 150, 106);
  }
  & li a {
    font-weight: bold;
    text-decoration: none;
    // background-color: rgb(34, 84, 128);
  }
}
.ul__menu2 {
  list-style: none;
  display: block;
  flex-direction: column;
}
.hiden_ul {
  display: none;
}
.header__link {
  display: flex;
  // background-color: aqua;
}
// .router-link-exact-active {
//   color: green;
// }
@media (max-width: 787px) {
  .hiden__burger {
    display: none;
  }
  .menu_text:after {
    content: " \25BA";
    // font-size: 15px;
  }
  .ul__menu {
    display: flex;
    flex-direction: column;
    padding-left: 10px;
    // background-color: gray;
  }
  .section {
    background-image: none;
    position: absolute;
    left: 120px;
    // top: 106px;
    bottom: 10px;
    padding-inline-start: 0px;
  }
}
</style>