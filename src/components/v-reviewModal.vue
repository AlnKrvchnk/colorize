<template>
    <div class="root modal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class=" text-title">Профиль</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body p-0">
      <v-input
            @input="get_inputText"
            :id="'email'"
            :placeholder="'Введите имя'"
            :type="'text'"
            />
      <v-input
            @input="get_inputText"
            :id="'email'"
            :placeholder="'Введите почту'"
            :type="'text'"
            />


      </div>
      <div class="modal-footer">
        <v-button
            @click_button="clickButton"
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
    components:{},
        data () {
    return {
    name:'rrrr'
    }
  },
  methods: {
    
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

</style>