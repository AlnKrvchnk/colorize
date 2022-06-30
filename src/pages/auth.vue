<template>
    <div class="root d-flex flex-column min-vh-100 background-main__light ">
        <div class="background position-fixed h-100 w-100">
            <div class="circl"></div>
            <div class="rectangle"></div>
        </div>
       <div class="wrapper px-lg-5 ">
            <div class="navbar d-flex justify-content-between w-100  p-3 py-sm-4 px-sm-4  z-index-top">
                <span></span>

                <ul class="nav list-unstyled  d-flex my-0">
                    <li class="nav-item my-sm-2  text text-fs__14 mx-3 mx-sm-4">
                    
                    <router-link :to="{name:'example' }"><v-button
                        :title="'Посмотреть примеры'"
                        :small="true"
                        :transparent="true"/></router-link>
                    </li>
                    <li class="nav-item my-sm-2  text text-fs__14   mx-sm-4">
                        <v-button
                        @click_button="showupload()"
                        :title="'Колоризовать'"
                        :small="true"
                        :dark="true"
                        />
                    </li>
                </ul>
            </div>
        </div>
        <div class="wrapper px-lg-5 ">
            <div class="d-flex flex-grow-1 position-relative  px-3 px-sm-5 ">
                <div class=" left d-none d-md-flex flex-column  col-md-5 px-4">
                    <div class="wrapper d-flex col-6 h-50 mx-auto">
                        <v-emoji/>
                    </div>
                    <div class="description col-8 mx-auto text-center">
                        <h1 class="text-title__main text-fs__64 my-4 text-white">Цветик</h1>
                        <p class="text  text-white">Это сервис для преобразования фото с помощью нейросетей новый виток в колоризации, помогающий любому желающему, без необходимых навыков и не тратя много времени, получить желаемый результат. </p>
                    </div>

                </div>
                <span class="col-1"></span>
                <div class=" right  col-12 col-md-6 ">
                    <v-signUp class="sign-form" ref="signUp" @signIn="sign_in" @load="load()"  @loaded="loaded()"/>
                    <v-signIn class="sign-form" ref="signIn" @signUp="sign_up" @load="load()"  @loaded="loaded()"/>
                </div>

            </div>
        </div>
        
    </div>
</template>
<script>

import vEmoji from '@/components/v-emoji.vue';
import vSignUp from '@/components/signUp.vue';
import vSignIn from '@/components/signIn.vue';

export default{

    name:'authPage',

    components:{
        vSignUp,
        vEmoji,
        vSignIn,
        
        },
  
    data(){
        return{
         
        }
    },
    
    methods:{
        set_sign(){
        if(this.$route.name=='signUp'){
            this.sign_up()
            
        }else{
            this.sign_in()
        }},
      
        sign_in(){
            this.$refs.signUp.show=false
            this.$refs.signIn.show=true

        },
        sign_up(){
            this.$refs.signIn.show=false
            this.$refs.signUp.show=true
        },
       
    
        load(){
            this.$emit("load")
        },
        loaded(){
            this.$emit("loaded")
        },
        showupload() {
            this.$emit("showupload")
        },

       
    },
    mounted(){
    this.set_sign()
    },
}
</script>
<style scoped lang="scss">
@import '../styles/variables.scss';
.background{
    overflow: hidden;
    position:fixed;
    .circl{
        height: 200vh;
        width: 200vh;
        background:$main__dark ;
        position:absolute;
        top: 0;
        left:-90vh;
        border-radius: 0;
    }
    .rectangle{
        height: 100vh;
        width: 50vw;
        background:$main ;
        position:absolute;
        top: 0;
        right:0;
        box-shadow: -30px 4px 30px rgba(0, 0, 0, 0.2);
        @media (max-width:$md) {
            width: 100vw;
        }
    }
}
.fade-leave-active {
    .background{
        
        .rectangle{
            width: 100vw;
            transition: width 0.9s ease;
            animation-delay: 0.5s;
        }
    }
    .description{
        transform:scale(0);
        transition: transform 0.5s ease;
    }
    .sign-form{
        transform:translateY(100%);
        opacity: 0;
        transition: transform 0.5s ease,opacity 0.5s ease ;
    }


}
.fade-enter-active {
    .background{
        .rectangle{
            animation: rectangle 0.5s  ease;
            animation-delay: 1s;
        }
    }
    .description{
        animation: description 1s  ease;
            animation-delay: 1s;
    }
    .sign-form{
         animation: sign-form 0.3s  ease;
            animation-delay: 1s;
    }
}

@keyframes sign-form{
    from{
       opacity: 0;
    }
    to{
        opacity: 1;
    }
}
@keyframes rectangle{
    from{
        box-shadow: 30px 4px 30px rgba(0, 0, 0, 0.2);
    }
    to{
        box-shadow: -30px 4px 30px rgba(0, 0, 0, 0.2);
    }
}

</style>