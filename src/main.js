import { createStore } from 'vuex'
import { createApp } from 'vue'
import App from './App.vue'
import Store from './Store'

const store = createStore( { modules: Store })
const app = createApp(App)
app.config.globalProperties.$filters = {
    maskMoney(value){
        if (typeof(value) == 'number') {
            var tmp = value+'';
            tmp = tmp.replace(/([0-9]{2})$/g, ",$1");
            if( tmp.length > 6 )
                    tmp = tmp.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
            return tmp;
    }
          return '--'
    }
}
app.use(store)
app.mount('#app')