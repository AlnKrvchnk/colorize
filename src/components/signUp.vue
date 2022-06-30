<template>
    <form class="wrapper col-8 my-4 mx-auto d-flex flex-column " @submit.prevent="checkForm" v-if="show">
        <h1 class="text-white text-ls__2 text-title__main text-fs__36 text-medium mb-4 ps-md-3">Регистрация</h1>
         <div class="position-relative me-3 mb-2">
           <span v-if="error" class="ms-3 w-100 text-comment text-fs__12  text-white position-absolute">Пароль или логин неверный!</span>
       <span v-if="v$.form.username.$dirty && v$.form.username.required.$invalid" class="text-end w-100 text-comment text-fs__12  text-white position-absolute">Обязательное поле!</span>  
       </div>
        <v-input
             :class="[v$.form.username.$dirty && v$.form.username.$errors!=0 ? 'error': 'noerror']"
            @input="get_inputText"
            :id="'username'"
            :placeholder="'Имя'"
            :type="'text'"
            />
        <div class="position-relative me-3 mb-2">
       <span v-if="v$.form.email.$dirty && v$.form.email.required.$invalid" class="text-end w-100 text-comment text-fs__12  text-white position-absolute">Обязательное поле!</span>  
       <span v-else-if="v$.form.email.$dirty && v$.form.email.email.$invalid" class="text-end w-100 text-comment text-fs__12  text-white position-absolute">E-mail неверный!</span>  
      
       </div>
        <v-input
          :class="[v$.form.email.$dirty && v$.form.email.$errors!=0 ? 'error': 'noerror']"
            @input="get_inputText"
            :id="'email'"
            :placeholder="'Почта'"
            :type="'email'"
            />
          <div class="position-relative me-3 mb-2">
       <span v-if="v$.form.password.$dirty && v$.form.password.required.$invalid" class="text-end w-100 text-comment text-fs__12  text-white position-absolute">Обязательное поле!</span>  
       <span v-else-if="v$.form.password.$dirty && v$.form.password.minLength.$invalid" class="text-end w-100 text-comment text-fs__12  text-white position-absolute">Пароль должен быть более 8 символов!</span>  
      
       </div>
        <v-input
             :class="[v$.form.password.$dirty && v$.form.password.$errors!=0 ? 'error': 'noerror']"
           @input="get_inputText"
            :id="'password'"
            :placeholder="'Пароль'"
            :type="'password'"
            />
            <div class="position-relative me-3 mb-2">
        
       <span v-if="v$.form.repeat_password.$dirty && v$.form.repeat_password.check_repeat_password.$invalid" class="text-end w-100 text-comment text-fs__12  text-white position-absolute">Неверно!</span>  
      
       </div> 
        <v-input
             :class="[v$.form.repeat_password.$dirty && v$.form.repeat_password.check_repeat_password.$invalid ? 'error': 'noerror']"
           @input="get_inputText"
            :id="'repeat_password'"
            :placeholder="'Повторите пароль'"
            :type="'password'"
            />
        <!-- <v-input
            class="my-4"
            :id="'checkbox'"
            :type="'checkbox'"
            :label="'Согласен(а) с правилами'"
            /> -->

        <div class="buttons text-center my-2 mx-3">
            <v-button class="my-4 w-100"
                :id="'register'"
               @click_button="checkSignUp()"
                :title="'Регистрироваться'"
                :large="true"
                :dark="true"/>   
            <v-button
                @click_button="sign_in()"
                :id="'login'"
                :title="'У меня уже есть аккаунт'"
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

    name:'signUp',

    data(){
        return{
            repeat_password_error:false,
            error:false,
            show: true,
            form:{
                username:'TestUser',
                email:'email@email.com',
                password:'12345678',
                repeat_password:'',
                errors:'',
            }
        }
    },

    validations(){
        return{
            form:{
                username:{ 
                    required, 
                    },

                email:{
                    required,
                    email
                    }, 

                password:{ 
                    required, 
                    minLength:minLength(8)
                    },

                repeat_password:{
                    check_repeat_password(){
                        return this.form.password==this.form.repeat_password
                    },
                },
            
            }
        }
    },

    methods:{
        sign_in(){
            this.$emit('signIn')
        },
        get_inputText(data){
            if(data.input_id=='username'){
                this.v$.form.username.$touch()
                this.form.username=data.text
            }
            else if(data.input_id=='password'){
                this.v$.form.password.$touch()
                this.form.password=data.text
            }
            else if(data.input_id=='email'){
                this.v$.form.email.$touch()
                this.form.email=data.text
            }else if(data.input_id=='repeat_password'){
                this.v$.form.repeat_password.$touch()
                this.form.repeat_password=data.text
            }
            this.error=false
        },
    //     async getToken(){
    //         try{
    //         const data=(await this.$api.auth.signIn({
    //                             username:this.form.username,
    //                             password: this.form.password,
    //                         })).data
                
    //             localStorage.setItem('token',data['access'])
    //             console.log(data)
    //             this.$store.dispatch('setUser',data)
    //             }

    //             catch(error){
    //                 console.log(error.response.data)
    //             }
            
    //     },
    // async sendData(){
    //         try{
    //             const data=(await this.$api.auth.signUp({
    //                             username:this.form.username,
    //                             password: this.form.password,
    //                             email: this.form.email
    //                         })).data
    //             console.log(data)
    //             this.getToken()
    //             this.$emit("loaded")
    //             this.$router.push({name:'user'})
    //         }
    //         catch(error){
    //             this.error=true
    //             console.log(error.response.data)
    //             this.$emit("loaded")
    //         }
            
    //     },


        checkSignUp(){
            this.v$.form.$touch()
            if(!this.v$.form.$error){
                this.$emit("load")
                // this.sendData()

            }
        },
    }
}


</script>