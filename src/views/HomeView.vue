<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button
@click="loadUserList"
    >ssss</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  data(){
    return {
      login:'',
      password:'',
    }

  },
  components: {
    HelloWorld
  },
  created (){

  },
  methods:
  {
    f(){
      console.log('sss')
    },
    async loadUserList(){
      const myHeaders = new Headers();
      const get= await fetch('http://127.0.0.1:8000/user',{
      method: 'POST', 
      headers: {
      'Content-Type': 'application/json'},
      mode: 'cors',
      cache: 'default',
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body:JSON.stringify({
        name: "TestUsersVue",
        password: "TEST",
        email: "alinakrvchnk@gmail.com"
      }),

      }
      )
      const json=await get.json()
      console.log('s'+JSON.stringify(json))
    }
    
  }

}
</script>
