<template>
  <div class="portfolio__item">
    <h1>Skills</h1>
    <p>- - -</p>
    <div class="skill_container">
      <div class="skill_box">
        <div class="bg-div">
          <span class="fa front"></span>
        </div>
        <div class="title2"><strong>Front-End</strong></div>
        <hr width="80%" class="pgray" />
        <span class="title3"><i> HTML5, SCSS, Json, Git </i></span>
      </div>
      <!-- <br /> -->
      <div class="skill_box">
        <div class="bg-div">
          <span class="fa larg"></span>
        </div>
        <div class="title2"><strong>Language</strong></div>
        <hr width="80%" class="pgray" />
        <span class="title3"><i> Javascript, TypeScript </i></span>
      </div>
      <!-- <br /> -->
     
      <div class="skill_box">
        <div class="bg-div">
          <span class="fa web"></span>
        </div>
        <div class="title2"><strong>Web technologies</strong></div>
        <hr width="80%" class="pgray" />
        <span class="title3"><i> Vue, Nuxt, Node </i></span>
      </div>
      <!-- <br /> -->
      <div class="skill_box">
        <div class="bg-div">
          <span class="fa database"></span>
        </div>
        <div class="title2"><strong>Databases</strong></div>
        <hr width="80%" class="pgray" />
        <span class="title3"><i> MySQL, Prisma </i></span>
      </div>
    </div>
    <!-- <br /> -->
  </div>
  <!-- <hr /> -->
</template>

<style lang="scss" scoped>
.skill_container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.skill_box {
  // border: 1px solid gray;
  display: flex;
  flex-direction: column;
  margin: 15px;
  max-width: 250px;
  padding: 5px 10px;
  & .title2,
  .title3 {
    text-align: center;
    font-size: 1.3em;
    & i {
      font-weight: 500;
    }
  }
}

.bg-div {
  position: relative;
  display: block;
  text-align: center;
  & span {
    &::after {
      font-size: 30px;
      font-weight: 500;
    }
  }
  & .larg::after {
    content: "\f121";
  }
  & .front::after {
    content: "\f1b3";
  }
  & .web {
    &::before {
      right: 10px;
      position: absolute;
      content: "\f121";
      font-size: 15px;
      font-weight: 500;
      left: 10px;
    }
    &::after {
      content: "\f108";
    }
  }
  & .database::after {
    content: "\f1c0";
  }
}
</style>