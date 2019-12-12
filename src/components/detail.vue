<template>
    <div class="container">
    <!-- Main Food Top List-->
        <!-- <transition name="detailchange" mode="out-in"> -->
            <div v-if="nowpage==='logo'" class="row" key="main">
                <div class="foodbox col-md-3 col-sm-3">
                    <div class="innerfoodbox" @click="fooddetailinfo=true">
                        <div>
                            <img src="../assets/진라면컵매운맛.jpg" width="100%">
                            <div style="float:right">1ST</div>
                        </div>
                        <h4 class="textgreen">ITEM 1</h4>
                        <span>Description<br></span>
                        <span class="textgrey">NONGSIM</span>
                    </div>
                </div>
                <div class="foodbox col-md-3 col-sm-3">
                    <div class="innerfoodbox" @click="fooddetailinfo=true">
                        <div>
                            <img src="../assets/진라면컵매운맛.jpg" width="100%">
                            <div style="float:right">2ND</div>
                        </div>
                        <h4 class="textgreen">ITEM 1</h4>
                        <span>Description<br></span>
                        <span class="textgrey">dd</span>
                    </div>
                </div>
                <div class="foodbox col-md-3 col-sm-3">
                    <div class="innerfoodbox" @click="fooddetailinfo=true">
                        <div>
                            <img src="../assets/진라면컵매운맛.jpg" width="100%">
                            <div style="float:right">3RD</div>
                        </div>
                        <h4 class="textgreen">ITEM 1</h4>
                        <span>Description<br></span>
                        <span class="textgrey">dd</span>
                    </div>
                </div>
                <div class="foodbox col-md-3 col-sm-3">
                    <div class="innerfoodbox" @click="fooddetailinfo=true">
                        <div>
                            <img src="../assets/진라면컵매운맛.jpg" width="100%">
                            <div style="float:right">[AD]</div>
                        </div>
                        <h4 class="textgreen">ITEM 1</h4>
                        <span>Description<br></span>
                        <span class="textgrey">dd</span>
                    </div>
                </div>
            </div>

            <!-- foodlist -->
            <!-- <div v-if="!(nowpage==='logo')" class="row" key="notice">
                <div class="innerfoodbox" @click="fooddetailinfo=true">
                    <div class="col-md-3 col-sm-3">
                        <img src="../assets/진라면컵매운맛.jpg" width="100%">
                    </div>
                    <div class="col-md-9 col-sm-9">
                        <h4 class="textgreen">ITEM 1</h4>
                        <span>Description<br></span>
                        <span class="textgrey">dd</span>
                    </div>
                </div>
            </div> -->

        <!-- </transition> -->
    </div>
</template>

<script>
    export default {
        data(){
            return{
                nowpage: 'logo'
            }
        }
    }
</script>

<style>

</style>