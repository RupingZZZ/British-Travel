import store from 'store'
const USERKEY='userkey'
export  default {
    saveUser(user){
       store.set(USERKEY,user)
    },

    getUser(){
        return store.get(USERKEY)||{}
    },

    removeUser(){
       store.remove(USERKEY)
    }

}