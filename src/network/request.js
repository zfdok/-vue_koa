import Axios from "axios";

export function request(config) {
    const instance = Axios.create({
        baseURL: 'https://www.studyinghome.com/mock/5e6baa208f77ec19c7ddcdd5/vue_koa2',
        timeout: 5000
    })
    return instance(config)
}