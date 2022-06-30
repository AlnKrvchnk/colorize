import { createApp } from "vue";
import { createStore } from 'vuex'

const store = createStore({
  namespace:true,
  state: {
    user:"TestUser",
    photo:[]
  },
  getters: {
    getUser:state=>{
      return state.user
    },
    getPhoto:state=>{
      return state.photo
    }
  },
  mutations: {
    Set_user(state,payload){
      state.user=payload,
      state.photo=[]
    },
    // Set_photo(state,payload){
    //   state.photo=payload
    // },
    Set_photo(state,payload){
      for(let i=0;i<payload.length;i++){
        state.photo.push(payload[i])
      }
    },
    Delete_user(state){
      state.photo=[],
      state.user=null
    }
  },
  actions: {
    setUser({commit},payload){
      commit('Set_user',payload)

    },
    setPhoto({commit},payload){
      commit('Set_photo',payload)
    },
    // addPhoto({commit},payload){
    //   commit('Add_photo',payload)
    // },
    deleteUser({commit}){
      commit('Delete_user')
    }

  },
  modules: {
  }
});

const app = createApp();
app.use(store);

export default store;



