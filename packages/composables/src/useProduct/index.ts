import {
  Context,
  useProductFactory,
  UseProductFactoryParams
} from '@vue-storefront/core'
import type { Product } from '@vue-storefront/wawibox-api'
import type {
  UseProductSearchParams as SearchParams
} from '../types'

const params: UseProductFactoryParams<Product, SearchParams> = {
  api: {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  productsSearch: async (context: Context, params: SearchParams) => {
    const data = await context.$wawibox.api.getProduct(params)

    return data
  }
}

export const useProduct = useProductFactory<Product, SearchParams>(params)
