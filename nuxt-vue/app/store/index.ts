import { ActionTree, MutationTree } from 'vuex'

export type RootState = ReturnType<typeof state>
export type Rates = { [key: string]: number }

export const state = () => ({
  favouriteCurrencies: ['EUR'],
  currencies: { GBP: 1.16 } as Rates
})
