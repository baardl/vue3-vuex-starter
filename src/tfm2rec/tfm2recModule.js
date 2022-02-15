import {tfm2recService} from "./tfm2recService";

const state = {
  tfm2recs: []
}

const getters = {
  getTfm2Recs(state) {
    return state.tfm2recs;
  },
  tfm2recsCount(state) {
    return state.tfm2recs.length;
  }
}

const mutations = {
  addTfm2Rec(state, item) {
    console.log("Add:", item);
    state.tfm2recs.unshift(item);
    // commit('addingTfm2Rec');
    // tfm2recService.add("jwt", item).then(r => commit('addedTfm2Rec'));
  }
}
const actions = {
  findTfm2Recs({commit,queryParams}) {
    console.log("find by query: ", queryParams);
    tfm2recService.find("jwt", queryParams);
    commit('foundTfm2Recs');
  }
}

export const tfm2recs = {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
};
