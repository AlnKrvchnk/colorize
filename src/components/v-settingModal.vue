<template>
    <div class="root modal" tabindex="-1" v-if="show">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class=" text-title">Профиль</h5>
        <button @click="closeModal" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body p-0">
          <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
        Имя {{name}}
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
          <v-input
            @input="get_inputText"
            :id="'name'"
            :placeholder="'Введите новое имя'"
            :type="'text'"
            />
      </div>
    </div>
  </div>
  <div class="accordion-item">
   <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSecond" aria-expanded="false" aria-controls="collapseOne">
        Почта {{email}}
      </button>
    </h2>
    <div id="collapseSecond" class="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
          <v-input
            @input="get_inputText"
            :id="'email'"
            :placeholder="'Введите новую почту'"
            :type="'text'"
            />
      </div>
    </div>
  </div>
    <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button colapse" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThird" aria-expanded="false" aria-controls="collapseThird">
        Пароль 
      </button>
    </h2>
    <div id="collapseThird" class="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
          <v-input
            @input="get_inputText"
            :id="'password'"
            :placeholder="'Введите старый пароль'"
            :type="'password'"
            />
            <v-input
            @input="get_inputText"
            :id="'password'"
            :placeholder="'Введите новый пароль'"
            :type="'password'"
            />
            <v-input
            @input="get_inputText"
            :id="'password'"
            :placeholder="'Повторите пароль'"
            :type="'password'"
            />
      </div>
    </div>
  </div>
</div>
      </div>
      <div class="modal-footer">
        <v-button
            @click_button="closeModal"
            :title="'Отмена'"
            :small="true"
            :transparent="true"/>
        <v-button
            :title="'Сохранить'"
            :small="true"
            :dark="true"/>
      </div>
    </div>
  </div>
</div>
</template>

<script>

export default{
  
    name:'uploadModal',
        data () {
    return {
    name:this.$store.getters.getUser.username,
    email:this.$store.getters.getUser.email,
    show:false
    }
  },
  methods: {
    closeModal(){
      this.show=false
    }
  },

    
    
}
</script>

<style scoped lang="scss">
@import '../styles/variables.scss';
 .modal{
     
     &-dialog{
     max-width: 50vw;
     min-width: 50vw;
     }
    display: flex;
    align-items: center;
    &-footer{
        background: $main;
    }
    &-content{

        border:none;
        border-radius: 25px;
        overflow: hidden;
        
    }
    
 }
 .accordion{

 &-body{
     background: $main;
 }
 &-button{
     &:hover{
         color:$main
     }
     &:focus {
    z-index: 3;
    border-color: none;
    outline: 0;
    box-shadow: none;
}
    &::after{
         flex-shrink: 0;
    width: auto;
    height: auto; 
    margin-left: auto;
    content: "Изменить";
    background-image: none;
    transition: transform 0.2s ease-in-out
 }
 &:not(.collapsed)
 {
     background: none;;
     color: $main__dark;
     &::after {
   transform: none;
}
}
}}

</style>