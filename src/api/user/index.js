import http from '@/api/axios.js';

let baseUrl = 'https://easy-mock.com/mock/5fc9a0d24d953a64bd0fc249/basepro';

export function getMenu(obj) {
  return http({
    url: `${baseUrl}/menu-list`,
    method: 'get',
    params: obj
  })
}