import ABAIXO from '../mocks/abaixo'
import ACIMA from '../mocks/acima'
export default {
    namespaced: true,
    state: () => ({
        abaixo: ABAIXO,
        acima: ACIMA
    }),
    actions: {},
    mutations: {},
    getters: {
        acima: state => {
            return state.acima
        },
        abaixo: state => {
            return state.abaixo
        }
    }

}