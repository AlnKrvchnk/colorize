<template>
    <div class="root modal" tabindex="-1" v-if="show" @click.self="closeModal">
  <div class="modal-dialog">
    <div class="modal-content">
      
      <div class="modal-body">
            <img ref="imgimg" :src="img_src" alt="">
            <button 
                type="button"  
                @click="closeModal()" 
                class="btn-close remove" 
                data-bs-dismiss="modal" 
                aria-label="Close"></button></div></div>
      </div>
  </div>
</template>

<script>

export default{
        
    name:'zoomModal',
    components:{
        },
    data () {
    return {
      show: false,
      img_src:''
    }

  },
  methods: {
    closeModal(){
      this.show = false
    },
    
    
  },

    
    
}
</script>

<style scoped lang="scss">
@import '../styles/variables.scss';

 .modal{
     

       &-dialog{
     max-height: 70vh;
     width:100%;
     height: 100%;
     }
    display: flex;
    align-items: center;
    
   &-body{
       position:relative;
       padding:0;
       filter: drop-shadow(5px 5px 15px rgba(0, 0, 0, 0.3));
       >img{
           width: 100%;
       }
   }
 
    .remove{
         margin: 5px;
        position: absolute;
        top: 0px;
        right:0px;
        &:hover:before{
          content: "";
          display: block;
          position:absolute;
          top:0;
          right:0;
          width: 100%;
          height: 100%;
          background: rgba($color: #000000, $alpha: 0.2);
        }
    }

}
    
    
 
</style>