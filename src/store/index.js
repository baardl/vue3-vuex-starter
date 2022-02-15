import { tfm2recs } from '../tfm2rec/tfm2recModule';
import {todo} from '../todo/todoModule';
import { createStore } from 'vuex';

export const store = createStore({
  modules: {
    tfm2recs,
    todo
  }
})
