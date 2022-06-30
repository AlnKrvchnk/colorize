<template>
    <div class="root  d-flex flex-column min-vh-100 background-main__light " >
        <div class="background position-fixed h-100 w-100">
            <div class="circl"></div>
            <div class="rectangle"></div>
        </div>
       <div class="wrapper px-lg-5 ">
            <div class="navbar d-flex justify-content-between w-100  p-3 py-sm-4 px-sm-4  z-index-top">
                <span></span>
                <ul class="nav list-unstyled  d-flex my-0">
                    <li class="nav-item my-sm-2  text text-fs__14 mx-3 mx-sm-4">
                        <router-link :to="{name:'signIn' }">
                            <v-button
                                :title="'Вход'"
                                :small="true"
                                :transparent="true"/>
                        </router-link>
                    </li>
                    <li class="nav-item my-sm-2  text text-fs__14   mx-sm-4">
                        <router-link :to="{name:'signUp' }">
                            <v-button
                            :title="'Регистрация'"
                            :small="true"
                            :dark="true"/>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
        <div class="wrapper d-grid flex-grow-1 px-lg-5 ">
            <div class="d-flex   px-3 px-sm-5">
                <div class="left m-auto w-auto left col-12 col-md-6 ">
                    <div class="main__title   position-relative mb-5">
                        <h1 class="text-title__main  adaptive-sm text-center text-white animate-title cursor-default">Цветик</h1>
                        <h2 class="text text-fs__14  text-white    cursor-default position-absolute"
                            style="transform: translate(170%, -680%);"> Привет, я</h2>
                        <h3 class="text-comment text-fs__12 text-light text-white  cursor-default position-absolute"
                            style="transform: translate(43%, -325%);">твой помощник в колоризации фотографий</h3>
                    </div>
                    <div class="buttons  d-flex justify-content-between">
                        <router-link :to="{name:'example' }">
                            <v-button
                            :title="'Посмотреть примеры'"
                            :large="true"
                            :transparent="true"/>
                        </router-link>
                        <v-button
                        @click_button="showupload()"
                        :title="'КОЛОРИЗОВАТЬ'"
                        :large="true"
                        :main="true"
                        :border="true"/>
                    </div>
                </div>
                <div class="right d-none d-md-flex  col-md-6 px-4">
                    <div class="wrapper w-50 m-auto">
                        <v-emoji class="emoji"/>
                    </div>
                </div>
            
            </div>
        </div>
    </div>
</template>


<script>
import vEmoji from '@/components/v-emoji.vue';


export default{
  
    name:'homePage',
    components:{
        vEmoji,
        },
       
    methods: {
     showupload() {
         console.log("rjkjhbpfwbz")
            this.$emit("showupload")
        },
    }
}


</script>

<style scoped lang="scss"> 
@import '../styles/variables.scss';
.fade-enter-active {

    .main__title{
    animation: main__title 1s  ease;
        animation-delay: 1s;
    }

    .buttons{
    animation: buttons 1s  ease;
        animation-delay: 1s;
    }
    .background {
        .circl{
            animation:circl 1s  ease;
            animation-delay: 1s;
        }
        .rectangle{
           animation: rectangle 1s  ease;
            animation-delay: 1s;
        }
    }
}

.fade-leave-active{ 
    .main__title{
        transform: translateY(-100%);
        opacity:0;
        transition: transform 0.3s ease, opacity  0.3s ease; ;
        transition-delay:0.1s ;
    }

    .buttons{
        transform: translateY(100%);
        opacity:0;
        transition: transform 0.3s ease, opacity  0.3s ease; ;
        transition-delay:0.1s ;
    }

    .background {
        .circl{
            border-radius: 0;
            transition: border-radius 0.5s ease;
            transition-delay:0.5s ;
        }
        .rectangle{
            width: 50vw;
            transition: width 0.5s ease;
            transition-delay:0.5s ;
        }
    }
}



.background{
    overflow: hidden;
    position:fixed
}
.circl{
    height: 200vh;
    width: 200vh;
    background:$main__dark ;
    position:absolute;
    top: -1vh;
    left:-90vh;
    border-radius: 50%;
}
.rectangle{
    height: 100vh;
    width: 30vw;
    background:$main ;
    position:absolute;
    top: 0;
    right:0;
    @media (max-width:$md) {
        width: 100vw;
    }
}
a{
    z-index: 1;
}


@keyframes main__title{
    0%{transform: translateY(-100%);
    opacity: 0;}
    60%{transform: translateY(-100%);
    opacity:0}
    100%{transform: translateY(0);
    opacity: 1;}
}

@keyframes buttons{
    0%{transform: translateY(100%);
    opacity: 0;}
    60%{transform: translateY(100%);
    opacity:0}
    100%{transform: translateY(0);
    opacity: 1;}
}
@keyframes circl{
    0%{transform:scale(0)}
    100%{transform:scale(1)}
}
@keyframes rectangle{
    from{width:100vw}
}


  </style>
