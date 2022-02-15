import axios from "axios";

export const tfm2recService = {
    add,
    update,
    remove,
    find
};

async function add(accessToken, tfm2rec) {
    console.log("add", accessToken, tfm2rec,axios);
}
async function update(accessToken, tfm2rec) {
    console.log("update", accessToken, tfm2rec);
}
async function remove(accessToken, tfm2recId) {
    console.log("delete", accessToken, tfm2recId);
}
async function find(accessToken, queryParams) {
    console.log("find", accessToken, queryParams);
}
