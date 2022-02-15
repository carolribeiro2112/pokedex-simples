import {api} from './api';

export async function getItems(offset, LIMIT) {
  const {data} = await api.get(`/pokemon/?offset=${offset}&${LIMIT}`)

  const res = await Promise.all(data.results.map((item )=> 
    api.get(item.url)
  ))

  const format = res.map((req) => req.data)

  return {
    count: data.count,
    format, 
  }
}

