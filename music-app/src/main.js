import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { projectAuth } from './firebase/config'

// global styles
import './assets/main.css'

let app

projectAuth.onAuthStateChanged(() => {
    if (!app) {
        console.log('no app')
        app = createApp(App).use(router).mount('#app')
    }
})
console.log(app)


