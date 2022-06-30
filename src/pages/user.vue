<template>
    <div class="root d-flex flex-column min-vh-100 background-main__light ">
        <div class="background position-fixed h-100 w-100">
            <div class="rectangle"></div>
        </div>
        <div class="wrapper px-lg-5 w-100 position-fixed  z-index_1 ">
            <div class="navbar d-flex justify-content-between   px-sm-4 py-0  z-index-top">
                <span></span>
                <ul class="nav list-unstyled p-3 py-sm-4 d-flex my-0">
                        <li class="nav-item my-sm-2  text text-fs__14 mx-3 mx-sm-4">
                                <v-button
                                    @click_button="showSetting"
                                    :title="'Профиль'"
                                    :small="true"
                                    :transparent="true"/>
                        </li>
                        <li class="nav-item my-sm-2  text text-fs__14   mx-sm-4">
                            
                                <v-button
                                @click_button="logout"
                                :title="'Выйти'"
                                :small="true"
                                :dark="true"/>
                        </li>
                </ul>
            </div>
        </div>

        <div class=" flex-grow-1  my-5 py-5">
            <h1 class="px-sm-5 title text-title__main text-fs__36 text-ls__2 text-white"><span class="ps-sm-5"> Привет, <span class="name">{{username}}</span>!</span></h1>
            
            <div class="wrapper px-lg-5"><div class="account px-4 row row-cols-3">
                <div class="col"><div class="account-item" @click="showupload"></div></div>
                <li class="item col list-unstyled" v-for="(list) in imgUrl" :key="list">
                <div class="account-item" @click="zoomImg(list.photo)">
                    <!-- <img ref="imgimg" :src="'http://127.0.0.1:8000/'+list.photo" alt="" > -->
                    <span class="inform text-comment text-fs__12 color-white"><span>{{list.date}}</span><svg width="24" height="29" viewBox="0 0 24 29"  xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.6597 7.45663V0H1.46354C0.652496 0 0 0.586662 0 1.31588V26.7562C0 27.4854 0.652496 28.072 1.46354 28.072H21.9531C22.7642 28.072 23.4167 27.4854 23.4167 26.7562V8.77251H15.1233C14.3183 8.77251 13.6597 8.18037 13.6597 7.45663ZM18.3217 19.0451L12.4419 24.2922C12.0364 24.6546 11.3815 24.6546 10.976 24.2922L5.09617 19.0451C4.47722 18.493 4.9114 17.545 5.78221 17.545H9.75694V13.1588C9.75694 12.6741 10.1936 12.2815 10.7326 12.2815H12.684C13.2231 12.2815 13.6597 12.6741 13.6597 13.1588V17.545H17.6345C18.5053 17.545 18.9394 18.493 18.3217 19.0451ZM22.9898 5.75696L17.0198 0.383797C16.7454 0.13707 16.3734 0 15.9831 0H15.6111V7.01801H23.4167V6.68356C23.4167 6.33814 23.2642 6.00369 22.9898 5.75696Z" />
                    </svg>
                    </span>
                </div> 
                </li> 
        </div>
        <v-SettingModal ref="settigModal"/>
        <v-zoomImg ref="zoom"/>
        
    </div></div></div>
</template>
<script>

import vSettingModal from '@/components/v-settingModal.vue';
import vZoomImg from '@/components/v-zoomImg.vue';
export default{
  
    name:'homePage',
    data(){
        return{
            imgUrl:this.$store.getters.getPhoto,
            username:this.$store.getters.getUser.username
        }
    },
    components:{
        vSettingModal,
        vZoomImg},
        // beforeMount(){
        //     if (localStorage.getItem('photo')!=null){
        //     const all_image=JSON.parse(localStorage.getItem('photo'))
        //     for (var i=0; i<all_image.length;i++){
        //         console.log(all_image[i].photo)
        //         this.imgUrl.push({
        //             url:all_image[i].photo,
        //             date:all_image[i].date
                    
        //         })
        //     }}
        // },
        methods:{
            showupload() {
            this.$emit("showupload")
        },
       
            logout(){
                // this.$store.dispatch('deleteUser')
                // this.$api.auth.logout()
                localStorage.clear()
                sessionStorage.clear()
                this.$router.push({name:'home'})
            },
            zoomImg(img){
            this.$refs.zoom.img_src = img
            this.$refs.zoom.show = true
            
            },
            showSetting(){
                this.$refs.settigModal.show = true
            }
        }
}

</script>
<style scoped lang="scss">
@import '../styles/variables.scss';
.navbar{
    >.nav{
    background: $main;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;}
}
.z-index_1{
        z-index: 1;
    }
.title{
    width:fit-content;
    background: $main__dark;
    padding-top: 16px;
    padding-bottom: 16px;
}
.account{
    
    &-item{
     
        &:not(:nth-child(1)).active{
            transform: scale(1.5) ;
            box-shadow: 0px 0px 100px #000000;
            z-index: 1;

        }
        
        position: relative;
        cursor: pointer;
        aspect-ratio: 1 / 1;
        width: 100%;
        img{
            height: 100%;
            width: 100%;
            object-fit: cover;
            position: relative;
        }
        .inform{
            
            position: absolute;
            opacity: 0;
            right: 0;
            margin: 16px;
            bottom: 0;
            transform: translateY(100%);
            fill: $white;
            
        }
        
            &:hover,&.hover{
                transition: 0.3s box-shadow ease;
                box-shadow: 0px 0px 15px 4px rgba(0, 0, 0, 0.3);
                .inform{
                    >*{
                        vertical-align: bottom;
                    }
                    opacity: 1;
                    transform: translateY(0%);
                    transition: 0.3s all ease;
                    svg{
                        margin-left: 16px;
                        &:hover{
                            fill:$main;
                        }
                    }

                }

            

        }
    }
    &>*{
        padding:36px;
        position: relative;
    }
    &>:nth-child(1)>*{
        
        box-shadow: none;
        background: rgba($main,0);
        &:hover{
            transition: 0.3s all ease;
            background: rgba($main,0.3);
        }
        position: relative;
    width: 100%;
    height: 100%;
    display: block;
        
        &:before{
            
            content: "";
            position: absolute;
            height: 100%;
            width: 100%;
            background: url($icon+"plus.svg");
            background-repeat: no-repeat;
            background-position: center;
            

            


        }
    }
}
.background{
    overflow: hidden;
    position:fixed
}

.rectangle{
    height: 100vh;
    width: 0vw;
    background:$main ;
    position:absolute;
    top: 0;
    right:0;
}

.fade-leave-active {
    .background{
        z-index: 10;
        .rectangle{
            width: 100vw;
            transition: width 0.9s ease;
            animation-delay: 0.5s;
        }
    }
}
.fade-enter-active {
    .background{
        .rectangle{
            animation: rectangle 0.5s  ease;
            animation-delay: 1s;
        }
    }
}
@keyframes rectangle{
    from{
        width: 100wv;
    }
    to{
        width: 0wv;
    }
}
</style>