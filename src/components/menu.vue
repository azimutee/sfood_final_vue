<template>
    <div>
      <!-- Video Background -->
      <transition name="whiteback">
         <video v-if="!whiteback" autoplay muted loop id="myVideo">
            <source src="../assets/back3.mp4" type="video/mp4">
         </video>
      </transition>

      <!-- Login Background -->
      <transition name="loginwindow">
         <div v-if="loginwindow" class="loginwindowblackback" @click="loginwindow=false">
         </div>
      </transition>

      <!-- Login Window -->
      <transition name="loginwindow">
         <div v-if="loginwindow" class="loginwindow">
            <div class="loginwindowleft">
               <h1>Login</h1>
               <form>
                  <label class="textgrey" for="">ID</label><br>
                  <input type="text" class="logininputbox"><br>
                  <label class="textgrey" for="">PASSWORD</label><br>
                  <input type="password" class="logininputbox">
                  <br>
                  <button value="LOGIN" class="buttons">LOGIN</button>
                  <button value="SUBMIT" class="buttons">SUBMIT</button>
               </form>
            </div>
            <div class="loginwindowright">
            </div>
         </div>
      </transition>

      <!-- FOOD DETAIL -->
      <transition name="loginwindow">
         <div class="fooddetailinfo" v-if="fooddetailinfo" @click="fooddetailinfo=false">
            <div class="container">
               <h3>자세히보기</h3>
               <div class="floatleft">
                  <img src="../assets/진라면컵매운맛.jpg" width="100px" height="100px">
               </div>

               <div class="floatleft fooddetaildesc">
                  <h4 class="textgreen">ITEM 1</h4>
                  <span>Description<br></span>
                  <span class="textgrey">NONGSIM</span>
               </div>
            </div>

            <div class="container">
               <h3>제품 영양성분 정보</h3>
               <div>
                  차트영역
               </div>
               <div>
                  <table>
                     <tr>
                        <td>하하</td>
                     </tr>
                  </table>
               </div>
            </div>

            <div class="similar">
               <h6>Similar Food</h6>
               <table class="similarlist">
                  <tr>
                     <td><img src="../assets//진라면컵매운맛.jpg" alt="" width="100px" height="100px"></td>
                  </tr>
                  <tr>
                     <td><img src="../assets/진라면컵매운맛.jpg" alt="" width="100px" height="100px"></td>
                  </tr>
                  <tr>
                     <td><img src="../assets/진라면컵매운맛.jpg" alt="" width="100px" height="100px"></td>
                  </tr>
                  <tr>
                     <td><img src="../assets/진라면컵매운맛.jpg" alt="" width="100px" height="100px"></td>
                  </tr>
                  <tr>
                     <td><img src="../assets/진라면컵매운맛.jpg" alt="" width="100px" height="100px"></td>
                  </tr>
               </table>
            </div>
         </div>
      </transition>

      <!-- Main외 창 전환 -->
      <transition name="whiteback">
         <div v-if="!whiteback" class="back">
         </div>
      </transition>

      <transition name="whiteback">
         <div v-if="whiteback" class="menuwhiteback">
         </div>
      </transition>

      <transition name="headertitlechange" mode="out-in">
         <div v-if="whiteback" class="headerback">
         </div>
      </transition>

      <div class="container">
         <!-- Menu -->
         <transition name="menucolorchange" mode="out-in">
            <div v-if="nowpage==='logo'" class="mainheader" key="logo">
               <div class="floatleft headermenu textgreen">
                  <span @click="nowpage='logo';whiteback=false"><b>SAFEFOOD</b></span>
               </div>
               <div class="floatleft headermenu">
                  <span @click="nowpage='NOTICE';whiteback=true">NOTICE</span>
               </div>
               <div class="floatleft headermenu">
                  <span @click="nowpage='FOODLIST';whiteback=true">FOODLIST</span>
               </div>
               <div class="floatleft headermenu">
                  <span @click="nowpage='MY EAT';whiteback=true">MY EAT</span>
               </div>
               <div class="floatright headermenu">
                  <span @click="loginwindow=true">LOGIN</span>
               </div>
               <div v-if="whiteback" class="floatright headermenu">
                  <input id="headersearchbox" type="text" placeholder="INPUT">
                  <span class="glyphicon glyphicon-search"></span>
               </div>
            </div>

            <div v-if="!(nowpage==='logo')" class="mainheader" key="other">
               <div class="floatleft headermenu2 textgreen">
                  <span @click="nowpage='logo';whiteback=false"><b>SAFEFOOD</b></span>
               </div>
               <div class="floatleft headermenu2">
                  <span @click="nowpage='NOTICE';whiteback=true">NOTICE</span>
               </div>
               <div class="floatleft headermenu2">
                  <span @click="nowpage='FOODLIST';whiteback=true">FOODLIST</span>
               </div>
               <div class="floatleft headermenu2">
                  <span @click="nowpage='MY EAT';whiteback=true">MY EAT</span>
               </div>
               <div class="floatright headermenu2">
                  <span @click="loginwindow=true">LOGIN</span>
               </div>
               <div v-if="whiteback" class="floatright headermenu2">
                  <input id="headersearchbox" type="text" placeholder="INPUT">
                  <span class="glyphicon glyphicon-search"></span>
               </div>

               <transition name="headerbackchange" mode="out-in">
                  <div v-if="nowpage==='NOTICE'" class="container headertitle" key="notice">
                     <h1>{{nowpage}}</h1>
                     <h3>새로운 소식을 알려드립니다</H3>
                  </div>
                  <div v-if="nowpage==='FOODLIST'" class="container headertitle" key="foodlist">
                     <h1>{{nowpage}}</h1>
                     <h3>음식 정보들을 확인하세요</H3>
                  </div>
                  <div v-if="nowpage==='MY EAT'" class="container headertitle" key="myeat">
                     <h1>{{nowpage}}</h1>
                     <h3>고객님이 섭취한 음식의 정보를 보여드립니다</H3>
                  </div>
               </transition>
            </div>
         </transition>

         <!-- Main Title -->
         <div class="title">
            <h1>SAFEFOOD</h1>
            <h2>WHAT WE PROVIDE, FOOD FOR HEALTH</h2>
         </div>

         <div id="mainsearch">
            <transition name="whiteback">
               <div v-if="!whiteback">
                  <input id="mainsearchbox" type="text" placeholder="FOOD">
               </div>
            </transition>
         </div>

      </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                menushow: true,
                whiteback: false,
                loginwindow: false,
                fooddetailinfo: false,
                nowpage: "logo"
            }
        },
        methods: {
            showLogin() {
                console.log("LoginShow");
                this.loginwindow = true;
            }
        },
    }
</script>

<style>

</style>