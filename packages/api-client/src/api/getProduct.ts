import { IntegrationContext } from '@vue-storefront/core'
import { Axios } from 'axios'

export async function getProduct(context: IntegrationContext<Axios>): Promise<any> {
  const { data } = await context.client.get('wprodukt/top/24')

  return data.data.popular
}
