// import { ActionTree, MutationTree } from 'vuex'

export type RootState = ReturnType<typeof state>
export type Rates = { [key: string]: number }
export type Context = { commit: Function }

export const state = () => ({
  favouriteCurrencies: ['EUR'],
  currencies: { GBP: 1.16 } as Rates
})

export const mutations = {
  addFavouriteCurrency(state: RootState, newFavouriteCurrency: string) {
    state.favouriteCurrencies = state.favouriteCurrencies.concat(newFavouriteCurrency)
  },
  setCurrencies(state: RootState, currencies: Rates) {
    state.currencies = currencies
  },
}

export const actions = {
  addFavouriteCurrency(ctx: Context, newFavouriteCurrency: string) {
    ctx.commit('addFavouriteCurrency', newFavouriteCurrency)
  },
  updateCurrencies(ctx: Context) {
    const requestURL = 'https://api.exchangerate.host/latest';
    const request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = () => ctx.commit('setCurrencies', request.response.rates)
  },
}
