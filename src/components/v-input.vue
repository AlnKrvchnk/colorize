<template>
    <div class="w-100 mt-2 mb-4">
        <input 
            class="input"
            @input="input()"
            v-model.trim="input_text"
            :id="id"
            :type="type" 
            :placeholder="placeholder">
            <!-- <label :for="id" class="text-comment text-fs__16 text-ls__25 text-white"><a class="button-transparent">{{label}}</a></label> -->
    </div>
</template>
<script>

export default{
    
    name:'v-input',
    data(){
        return{
            input_text:'',
        }
        
    },
    methods:{
        input(){
            this.$emit('input', 
            {text:this.input_text,
            input_id:this.id})
        }
    },

   
    props:{
       
        placeholder:{
            type:String,
            default:''
        },
        type:{
            type:String,
            default:'text',
        },
        id:{
            type:String,
            default:'input',
        },
        label:{
            type:String,
            default:''
        }

        
    }
}
</script>
<style lang="scss">
@import '@/styles/variables.scss';
.error{
    &>input.input{
        border: 2px solid $white ;
        border-radius: 23px;
        box-sizing: border-box;

        
    }}
    
.input {
    &:not(#checkbox){
        width: 100%;
    }
    transition: background-color .3s ease;
    &::placeholder {
        color: $white;
    }
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    letter-spacing: 0.25em;
    height: 46px;
    border-radius: 23px;
    padding:8px 16px;
    border: 1px solid transparent;
    background: transparent;
    outline: none;
    color:$white;

    &:hover,
    &.hover {
        border-bottom: 1px solid $white;
        border-radius: 0;
    }

    &:active,
    &.active,
    &:focus,
    &.focus {
        background: $main__dark;
        border: 1px solid transparent;
        border-radius: 23px;
    }
    
    &[type=checkbox] {
        
        opacity: 0;
        position: absolute;

        &+label {
            cursor: pointer;
            padding-left: 30px;
            position: relative;

            &::after {
                content: "";
                border-radius: 0;
                height: 18px;
                width: 18px;
                border: solid white 2px;
                background-color: transparent;
                display: inline;
                position: absolute;
                left: 0;
                top: 0;
            }
        }

        &:checked,
        &.checked {

            &+label::before {
                content: "";
                height: 12px;
                width: 12px;
                top: 3px;
                left: 3px;
                border: solid transparent 2px;
                position: absolute;
                background-color: white;


            }

        }
    }
}
</style>