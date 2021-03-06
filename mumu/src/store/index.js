/* eslint-disable */
import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

const plugins = [
  createPersistedState({
    paths:[]
  })
]

export default createStore({
  plugins:[
    createPersistedState()
  ],
  state: {
    user:null,
    email : "",
    password : "",
    cookie:"",
    isLogin : false,
    room:"",
  },

  getters: {
    user:(state)=>{return state.user;},
    roomid:(state)=>{return state.room;},
  },

  mutations: {
    setUser(state,user){
      state.user = user;
      state.isLogin = true;
    },
    setRoom(state,room){
      state.room = room;
    },
    outRoom(state){
      state.room = "";
    },
    showconsole(state){
      console.log(state.email, state.password);
    },

    login_good(state){
      if(state.auth_info.email != state.email){
        alert("fuck you!");
      }
      else{
        if(state.auth_info.password != state.password){
          alert("fuck you!");
        }
        else{
          alert("login 완료!");
          state.isLogin = true;
          this.$router.push({name:"home"});
        }
      }
    },

    removeUser(state){
      state.user = "";
      state.isLogin = false;
    },

  },

  actions: {
    login_click({state,commit},login_obj){
      state.email = login_obj.email;
      state.password = login_obj.password;
      commit("login_good");
    }
  },

  modules: {
  }
})
