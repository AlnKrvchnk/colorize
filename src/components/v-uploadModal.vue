<template>
    <div class="root modal" tabindex="-1" v-if="show" @click.self="closeModal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class=" text-title">Загрузите изображение</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="closeModal"></button>
      </div>
      <div class="modal-body">
        <div class="select__wrapper">
        <input class="select" ref="imgInput" type="file" accept="image/*" id="select__input"  @change="uploadImg($event)">
        <label for="select__input" class="select__label"></label>
        </div>
        <ul class="row row-cols-3 list" v-show="isUpload">
        <li class="item" v-for="(list,index) in imgUrl" :key="list">
          <div class="wrapper">
            <img ref="imgimg" :src="list.url" alt="">
            <button 
                type="button"  
                @click_button="remove(index)" 
                class="btn-close remove" 
                data-bs-dismiss="modal" 
                aria-label="Close"></button>
            <div class="img__label__wrapper"><label for="" class="img__label">{{list.name}}</label></div></div>
        </li>
    </ul>
      </div>
      <div class="modal-footer">
        <v-button
            @click_button="closeModal"
            :title="'Отмена'"
            :small="true"
            :transparent="true"/>
        <v-button
            @click_button="colorizePhoto"
            :title="'Колоризовать'"
            :small="true"
            :dark="true"/>
      </div>
    </div>
  </div>
  <v-spinne ref="spinner"/>
</div>
</template>

<script>

export default{
        
    name:'uploadModal',
    data () {
    return {
      show: false,
      isUpload:false,
      imgUrl:[],
    }

  },
  methods: {
    uploadImg(e){
      var file_name=e.target.files[0].name
      this.isUpload=true;
      let file=e.target.files[0];
      let url='';
      var reader = new FileReader();
      reader.readAsDataURL(file);
      let that=this;
      reader.onload = function (e) {
        url=this.result.substring(this.result.indexOf(',')+1);
        that.imgUrl.push({
          id:that.imgUrl.length+1,
          url:'data:image/png;base64,'+url,
          name:file_name
          })
      }
    },
    remove(index){
       this.imgUrl.splice(index,1)
    },
    closeModal(){
      this.show = false
    },
    colorizePhoto(){
      this.sendPhoto()
      this.$emit('load')
    },
    // async sendPhoto(){
    // if(localStorage.getItem('user_id')!=null){
    //   var id=localStorage.getItem('user_id')
    //   var status=1
    // }
    // else{
    //   var id=0
    //   var status=0
    // }
    //   try{
    //     const data=(await this.$api.sendPhoto.sendPhoto({
    //               img:this.imgUrl,
    //               user_id:id,
    //               user_status:status
    //             })).data
    //             this.imgUrl.length=0
    //             sessionStorage.setItem('photo',JSON.stringify(data))
    //             this.$store.dispatch('setPhoto',data)
    //             this.$emit('loaded')
    //         }
            
    //   catch(error){
    //       console.log(error.response.data)
    //   }
            
    //     },
  },

    
    
}
</script>

<style scoped lang="scss">
@import '../styles/variables.scss';

 .modal{
   .select__wrapper{
     position:relative;
     >input{
opacity: 0;
     }
     >.select__label{
       position:absolute;
       left: 0;
     &:before{
       width: max-content;
       position: absolute;
       background: $main__dark;
        content:'Выберите файл';
        color: $white;
        display: block;
        height: 24px;
        padding: 0 16px;
        border-radius: 15px;
        font-family: 'Mulish';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
     }
     &:hover,&:active{
       &::before{
         background: $main__dark2;
       }

     }
     
     }

     
   }
     .list{
         padding: 0;
list-style: none;
.item{
    padding-top:16px;
    .wrapper{
      display: flex;
      flex-direction: column;
        width: 100%;
        height: 100%;
        position: relative;
      &>img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        aspect-ratio: 1 / 1;
    }}
    .img__label{
          white-space: nowrap;
    text-overflow: ellipsis;
    width: 100%;
    overflow: hidden;
    &__wrapper{
        bottom: 5px;
        left:25px;
        width:100%;
        overflow: hidden;
    }}
    .remove{
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
     }
     &-dialog{
     max-width: 50vw;}
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