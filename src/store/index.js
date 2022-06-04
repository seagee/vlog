import { createStore } from 'vuex'
import mutations from "@/store/mutations";
import actions from "@/store/actions";
import getters from "@/store/getters";
import moduleA from "@/store/modules/moduleA";
import {INCREMENT} from "@/store/mutations-types";

const  state = {


};


export default createStore({
  state,
  getters,
  mutations,
  actions,
  modules: {
    a:moduleA
  }
});
