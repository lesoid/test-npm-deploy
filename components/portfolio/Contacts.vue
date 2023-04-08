<template>
    <div class="portfolio__item">
        <h1>Contacts</h1>
        <p>- - -</p>
        <div  class="text-center">
            <div  class="my-3 ">
                <input  type="text" name="user_name" placeholder="name" class="pinput">
            </div>
            <div  class="my-3 ">
                <input  type="email" name="user_email" placeholder="email" class="pinput" >
            </div>
            <div  class="my-3 ">
                <textarea 
                name="message" placeholder="message" rows="4" class="pinput" style="transition-delay: 0.6s;">
            </textarea>
        </div>
        <button class="mt-1 ">
        Send
      </button></div>
    </div>
    <!-- <hr> -->
</template>

<style lang="scss" scoped>
.text-center{
 text-align: center;
 min-width: 350px;
//  border: 1px black solid;
}
.my-3{
   min-width: 90%;
    // border: 1px rgb(107, 104, 104) solid;
    // background-color: burlywood;
    // background-color: rgb(199, 209, 185);
//    margin-bottom: 16px;
//    border-radius: 30%;
    & .pinput{
    font-size: 18px;
    margin-bottom: 10px;
    outline: none;
    border: none;
    border-radius: 7px;
    padding: 10px;
    width: 90%;
    transition: all 1s;
    background-color: #b3b3cc;
    }
}
   


</style>