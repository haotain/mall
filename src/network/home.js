import {request, localRequest} from "network/request"
export function getHomeMultidata() {
  return request({
    url: "/home/multidata"
  })
}

