import { api } from '@config/api'

import { ServiceNameResponse } from './types'

type GetServiceNameProps = {
  param: string
}

const getServiceName = async (
  options: GetServiceNameProps,
): Promise<ServiceNameResponse> => {
  const params = []
  let paramsQs = ''

  if (Object.prototype.hasOwnProperty.call(options, 'param')) {
    params.push(`param=${options.param}`)
  }

  if (params.length) {
    paramsQs = `?${params.join('&')}`
  }

  const response = await api.get<ServiceNameResponse>(`endpointName${paramsQs}`)

  return response.data
}

export { getServiceName }
