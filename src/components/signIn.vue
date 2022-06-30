<template>
    <form class="wrapper col-8 my-4 mx-auto d-flex flex-column " @submit.prevent="checkForm" v-if="show">
        <h1 class="title text-white text-ls__2 text-title__main text-fs__36 text-medium mb-5 ps-md-3">Авторизация</h1>
       <div class="position-relative me-3 mb-2">
           <span v-if="error" class="ms-3 w-100 text-comment text-fs__12  text-white position-absolute">Пароль или логин неверный!</span>
       <span v-if="v$.form.username.$dirty && v$.form.username.required.$invalid" class="text-end w-100 text-comment text-fs__12  text-white position-absolute">Обязательное поле!</span>  
       </div>
       <v-input
            :class="[v$.form.username.$dirty && v$.form.username.$errors!=0 ? 'error': 'noerror']"
            @input="set_inputText"
            :id="'username'"
            :placeholder="'Имя'"
            :type="'text'"
            />
            <div class="position-relative me-3 mb-2">
       <span v-if="v$.form.password.$dirty && v$.form.password.required.$invalid" class="text-end w-100 text-comment text-fs__12  text-white position-absolute">Обязательное поле!</span>  
       <span v-else-if="v$.form.password.$dirty && v$.form.password.minLength.$invalid" class="text-end w-100 text-comment text-fs__12  text-white position-absolute">Пароль должен быть более 8 символов!</span>  
      
       </div>
        <v-input
            :class="[v$.form.password.$dirty && v$.form.password.$errors!=0 ? 'error': 'noerror']"
            @input="set_inputText"
            :id="'password'"
            :placeholder="'Пароль'"
            :type="'password'"
            />
        <div class="buttons text-center my-4 mx-3">
            <v-button class="my-4 w-100"
                @click_button="checkSignIn()"
                :id="'signIn'"
                :title="'Войти'"
                :large="true"
                :dark="true"/>   
            <v-button
                @click_button="signUp()"
                :id="'signUp'"
                :title="'У меня еще нет аккаунта'"
                :small="true"
                :transparent="true"/>
        </div>
        
    </form>  
    
</template>
<script>
import useVuelidate from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'


export default{

    setup () {
        return { v$: useVuelidate() }
    },

    name:'signIn',
    

    data(){
        return{
            show: false,
            error:false,
            form:{
                username:'',
                password:'',
            }
        }
    },

    validations(){
        return{
            form:{
                username:{required}, 
                password:{ required, minLength:minLength(8)},
            }
        } 
    },
    

    methods:{
        signUp(){
            
            this.$emit('signUp')
        },
        set_inputText(data){
            if(data.input_id=='password'){
                this.v$.form.password.$touch()
                this.form.password=data.text
            }
            else if(data.input_id=='username'){
                this.v$.form.username.$touch()
                this.form.username=data.text
            }
            this.error=false
            

        },
        
        // async signIn(){
        //     try{
        //         const data=(await this.$api.auth.signIn({
        //                         username:this.form.username,
        //                         password: this.form.password,
        //                     })).data
        //         localStorage.setItem('username',data['username'])
        //         localStorage.setItem('email',this.form.email)
        //         localStorage.setItem('user_id',data['id'])
        //         localStorage.setItem('token',data['access'])
        //         this.$store.dispatch('setUser',data)
        //         this.getImg()
        //         this.$emit("loaded")
        //         this.$router.push({name:'user'})
                
        //     }
        //     catch(error){
        //         this.error=true
        //         console.log(error.response.data)
        //         this.$emit("loaded")
        //     }
            
        // },
        // async getImg(){
        //     try{
                
        //         const get= await fetch('http://127.0.0.1:8000/api/photo/',{
        //              method: 'GET', 
        //              headers:{
        //                  Authorization:"JWT "+localStorage.getItem('token')
        //              },
        //              mode: 'cors',
        //              cache: 'default',
        //              redirect: 'follow',
        //              referrerPolicy: 'no-referrer',
        //         })
        //         const json=await get.json()
        //         localStorage.setItem('photo',JSON.stringify(json))
        //         this.$store.dispatch('setPhoto',json)
                
        //     }catch(error){
        //         console.log(error.response.data)
        //     }
        // },
        checkSignIn(){
            this.v$.form.$touch()
            if(!this.v$.form.$error){
                this.$emit("load")
                this.$router.push({name:'user'})
                this.$emit("loaded")
            //    this.signIn()

            }
        },
    }
}


</script>

