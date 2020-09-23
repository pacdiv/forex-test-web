import { ActionTree, MutationTree } from 'vuex'

export type RootState = ReturnType<typeof state>
export type Rates = { [key: string]: number }

export const state = () => ({
  favouriteCurrencies: ['GBP'],
  currencies: { GBP: 0.917981 } as Rates
})
