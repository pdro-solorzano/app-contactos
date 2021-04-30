import { createStore } from 'vuex'

export default createStore({
  state: {
    token: '',
    data: {}
  },
  mutations: {
    setToken(state, payload) {
      state.token = payload;
    },
    setData(state, payload) {
      state.data = payload;
    }
  },
  actions: {
    async login({commit}, user) {
      try {
        let res = await fetch('http://localhost:3000/api/contacts/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(user)
        });
        let resDB = await res.json();
        let token = res.headers.get('auth-token');
        console.log(resDB);

        commit('setToken', token);
        localStorage.setItem('token', token);
        window.location.href = '/';
      } catch (error) {
        console.log(error);
      }
    },
    logout({commit}) {
      if(localStorage.getItem('token')) {
        commit('setToken', null);
        localStorage.removeItem('token');
      }
    },
    readToken({commit}) {
      if(localStorage.getItem('token'))
        commit('setToken', localStorage.getItem('token'));
    },
    async getContacts({commit}, carga) {
      try {
        let data = await fetch('https://contactos-practica.herokuapp.com/api/contacts/contacts', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'auth-token': this.state.token
          }
        });
        let dataDB = await data.json();
        dataDB.status = data.status;

        console.log(dataDB);
        commit('setData', dataDB);
      } catch (error) {
        console.log(error);
      }
    }
  },
  modules: {
  }
})
