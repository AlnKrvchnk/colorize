<template>  
   <button 
   @click="$emit('click_button')"
   class="button"
   :id="id"
   :class="className"
   ><span>{{title}}</span></button>
</template>


<script>

export default{
    name:'v-button',
    props:{
        id:{
            type:String,
            default:'button'
        },
        title:{
            type:String,
            default:''
        },
        large:{
            type:Boolean,
            default:false

        },
        small:{
            type:Boolean,
            default:false

        },
        border:{
            type:Boolean,
            default:false
        },
        main:{
            type:Boolean,
            default:false
        },
        transparent:{
            type:Boolean,
            default:false
        },
        dark:{
            type:Boolean,
            default:false
        }

    },
    computed:{
        className(){
            return {
                'button-large':this.large,
                'button-small':this.small,
                'button-border':this.border,
                'button-main':this.main,
                'button-transparent':this.transparent,
                'button-dark':this.dark,

            }
        
}
    },
    
}


</script>

<style lang="scss">
@import '../styles/variables.scss';
.loadbutton{
    right: 20px;
    position: absolute;
    bottom: 20px;

}
.button {
z-index:1;
    vertical-align: sub;
    width: fit-content;
    border: none;
    transition:all .3s ease;
    color:$white;
    &-large{
        height: 46px;
        padding: 0 20px;
        border-radius: 23px;
        font-family: 'Roboto Mono';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        letter-spacing: 0.1em;
    }
    &-small{
        height: 24px;
        padding: 0 16px;
        border-radius: 15px;
        font-family: 'Mulish';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;

    }
    
    &-transparent{
        background: none;
        border: none;
       
        &:hover,&.hover,&:active,&.active {
            text-underline-position: under;
            text-decoration: underline;
        }

    }

   &-dark{
            background: $main__dark;
            &:hover,&.hover,&:active,&.active {
                background: $main__dark2;
            }
        }

    &-main {
        
        background-color: $main;
        border: 1px solid rgba(255, 255, 255, 0);
        &:hover,&.hover,&:active,&.active {
            border: 1px solid rgba(255, 255, 255, 1);
        }

    }
    &-border{
        border: 2px solid rgba(255, 255, 255, 1);
        &:hover,&.hover,&:active,&.active {
           border: 2px solid rgba(255, 255, 255, 0);
        }
    }

}


</style>
