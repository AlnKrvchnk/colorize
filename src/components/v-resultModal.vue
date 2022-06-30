<template>
    <div class="root modal" tabindex="-1" v-if="show"   @click.self="closeModal">
  <div class="modal-dialog ">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class=" text-title">Результат</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="closeModal()"></button>
      </div>
      <div class="modal-body">
        <ul class="row row-cols-3 list" >
        <li class="item" v-for="(list) in imgUrl" :key="list">
          <div class="wrapper">
            <img ref="imgimg" :src="list.url" alt="" @click="zoomImg(list.url)">
          </div>
         </li>
    </ul>
      </div>
      <div class="modal-footer">
        <a class="btn-upload" id="upload" >
        <v-button
            @click_button="saveFile($event)"
            :title="'Сохранить'"
            :small="true"
            :dark="true"/>
            </a>
      </div>
    </div>
  </div>
  <v-zoomImg ref="zoom"/>
</div>
</template>

<script>
import vZoomImg from '@/components/v-zoomImg.vue';

export default{
        
    name:'resultModal',
    components:{
        vZoomImg},
    data () {
    return {
      show: false,
      isUpload:false,
      // imgUrl:this.setImg(),
    }

  },
  methods: {
     
    zoomImg(img){
      this.$refs.zoom.show = true
      this.$refs.zoom.img_src = img
    },
//     setImg(){
//       if(sessionStorage.getItem('photo')!=null){
// console.log('mounted')
//         var imgUrl=[]
//         const all_image=JSON.parse(sessionStorage.getItem('photo'))
//         for (let i=0; i<all_image.length;i++){
//           imgUrl[i]={
//           url:"http://127.0.0.1:8000/"+all_image[i]
//           }
//         }
//       console.log(imgUrl)
//       return imgUrl
//     }
//     }
    // ,
    saveFile(){
    
      var el=document.getElementById("upload")
      console.log(el)
      for (let i=0; i<this.imgUrl.length;i++)
        el.setAttribute("href",this.imgUrl[i].url);
        link.setAttribute("download", i);
        el.click();
       
    },
    closeModal(){
      this.show = false
    },
    // updated(){
      
    // this.imgUrl=this.setImg()
    // }
   
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
     max-width: 50vw;
     width:100%}
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