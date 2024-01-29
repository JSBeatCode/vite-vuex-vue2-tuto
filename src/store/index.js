import { createStore } from 'vuex';
import module1 from './module1';
import module2 from './module2';
import home from './home';

export default createStore({
    modules : {
        module1,
        module2,
        home
    }
})