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
        <div class="d-flex flex-grow-1">
            <div class="left d-none d-md-block col-md-5 px-lg-5 " id="remove-block">
                <div class="d-flex flex-column    px-3 px-sm-5">
                    <div class="wrapper d-flex col-7  mx-auto px-4 mb-4" >
                        <v-emoji class="emoji"/>
                    </div>
                    <div class="description col-10 mx-auto text-center px-4">
                        <h1 class="text-title__main text-fs__64 my-4 text-white">Цветик</h1>
                        <p class="text  text-white mb-5">Значимость этих проблем настолько очевидна, что новая модель организационной
                           деятельности влечет за собой процесс внедрения и модернизации существенных финансовых и административных
                           условий.
                        </p>
                        <v-button
                            @click_button="showupload()"
                            :title="'КОЛОРИЗОВАТЬ'"
                            :large="true"
                           :main="true"
                           :border="true"/>
                    </div>
                </div>
            </div>        
            <v-button 
                class="remove-block button  my-4"
                :title="'КОЛОРИЗОВАТЬ'"
                :large="true"
                :main="true"
                :border="true"
            />
           <div class=" right flex-grow-1  col-12 col-md-7 pb-md-5" >
                <div class="owl-wrapper pb-md-5 ">
                    <div class="owl-carousel owl-theme">
                        
                    </div>
                
                </div>
            </div> 
        </div>
    </div>
</template>
<script>
import vEmoji from '@/components/v-emoji.vue';
export default{
    name:'examplePage',
    components:{
        vEmoji,
        },
    data(){
return{
    text:'example'
}
    },
    methods:{
        showupload() {
            console.log("колоризация")
            this.$emit("showupload")
        },
    }
}

</script>
<style scoped lang="scss">

@import "../styles/variables.scss";
.owl {
    &-stage-outer {

        filter: drop-shadow(8px 0px 15px #5948FF);
    }
    &-nav{
        margin: 0;
        padding: 0 100px;
        width: 100%;
        display: flex;
        justify-content: flex-end;
        position: absolute;
        top: 50%;
        opacity: 50%;
        z-index: 2;
        font-size: 200px;
        line-height: 0;
        transform: translateY(-50%);
        
    }
    &-theme .owl-nav .owl-prev{
        display: none;
    }

    &-wrapper{
        position:relative;
    }
    &-carousel{
        img{
            filter: grayscale(1);
            height: calc( 100vh - 180px );
        }
        &.active{
            
                img{
                filter: grayscale(0);
            }
            
            .owl-nav{
                justify-content: space-between;
            }
            .owl-prev{
                
                display: block;

            }

        }
    }
   
    
}

#remove-block{
    &~.remove-block.button{
        position: absolute;
        bottom: 0px;
        left: 50%;
        transform: translateX(-50%) scale(0);
        
        }
    
    &.show-block{
        transition: all 0.5s ease ;
        &~.remove-block.button{
            
            transition: all 0.5s ease;
            transition-delay: 0.5s;
            transform:translateX(-50%) scale(0);
            
            }
        .emoji{
            
            transition: all 1s ease;
            transition-delay: 0.6s;
            transform: scale(1);
        }
        .description-text{
            
            transition: all 1s ease;
            transition-delay: 0.6s;
            opacity: 1;
        }
        .button{
            
            transition: all 1s ease;
            transition-delay: 0.6s;
            transform: scaleX(1);
        }
    }
    &.remove-block{
        
        transition: all 0.5s ease ;
    transition-delay: 0.5s;
        width: 0px;
        padding: 0!important;
        &~.remove-block.button{
            
            transition: all 0.5s ease;
            transition-delay: 1s;
            transform:translateX(-50%) scale(1);
            
            }
        .emoji{
            transition-delay: 0s;
            transition: all 0.5s ease;
            transform: scale(0);
        }
        .description-text{
            transition-delay: 0s;
            transition: all 0.5s ease;
            opacity: 0;
        }
        .button{
            transition-delay: 0s;
            transition: all 0.5s ease;
            transform: scale(0);
        }
     }
}

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
        width: 60vw;
        background:$main ;
        position:absolute;
        top: 0;
        right:0;
        @media (max-width:$md) {
            width: 100vw;
        }
    }
}
.description{
    z-index: 1;
}
@media (min-width:$md) {
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
}
.fade-enter-active {
    .background{
        .rectangle{
            animation: rectangle 0.5s  ease;
            animation-delay: 1s;
        }
    }
    .description{
        animation: description 0.5s  ease;
            animation-delay: 1s;
    }
    
}
}

@keyframes rectangle{
    from{
        width: 50vw;
    }
    to{
        width: 60vw;
    }
}


</style>