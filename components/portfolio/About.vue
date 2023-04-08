<template>
  <div class="portfolio__item">
    <h1>About Me.</h1>
    <p>- - -</p>
    <p>З 07/2021 року по сьогодні вивчаю Front-end та Back-end</p>
    <!-- <br /> -->

    <div class="spans2">
      <ul>
        <li><span> Vue.js</span></li>
        <li><span> Nuxt.js</span></li>
        <li><span> JavaScript</span></li>
        <li><span> TypeScript</span></li>
        <li><span> Node.js</span></li>
        <li><span> HTML5</span></li>
        <li><span>SCSS</span></li>
        <li><span> Git</span></li>
        <li><span>SQL</span></li>
        <li><span> Prisma</span></li>
      </ul>
    </div>

    <br />
    <p>- - -</p>
    <br />
    <p>З 09/2015р. до 06/2017р.</p>
    <p>Навчався основам HTML, JavaScript, CSS</p>
    <div class="spans">
      <ul>
        <!-- <li> <span>Autoit</span></li> -->
        <li> <span> HTML</span></li>
        <li><span> JavaScript</span></li>
        <li> <span>CSS</span></li>
      </ul>
  </div>
  </div>
  <!-- <hr /> -->
</template>

<style lang="scss" scoped>
// .spans{
//   display: flex;
//   flex-direction: column;
//   & b{
//    align-self: center;
//   }
// }

// b {
//   text-align: center;
// }
.portfolio__item {
  & ul li {
    margin-top: 20px;
    list-style-type: none;
  }
  & ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding-left: 5px;
    justify-content: center;
  }
  // & .spans {
  //   display: flex;
  //   flex-direction: row;
  //   & span{
  //     flex: 1 1 0;
  //   }
  // }
  //     display: flex;
  //     flex-direction: column;
  //     position: relative;
  //   align-self: center;
  //   max-width: 900px;

  //   & span:after {

  //     position:absolute;

  & span {
    background: rgb(73, 84, 72);
    border-radius: 25%;
    padding: 3px 6px;
    font-weight: bold;
    color: #aad7c8;
    margin: 6px;
    font-family: fangsong;
    text-align: center;
  }
}
</style>