<template>
    <div class="d-flex align-items-center spinner"  v-if="show">
  <strong class="me-3" >Обрабатывается</strong>
  <div class=" status_icon spinner-border ms-auto" role="status" aria-hidden="true" ></div>
 
</div>
</template>
<script>
export default{
    data () {
    return {
      show: false,
      }
      }
}
</script>
<style scoped lang="scss">
@import '../styles/variables.scss';
.spinner{
    padding:4px 16px;
    border-radius: 15px;
    color:$white;
    fill:$white;
    background: $main__dark2;
    right: 20px;
    position: absolute;
    bottom: 20px;
}
.status_icon{
    height: 20px;
    width:20px
}
</style>