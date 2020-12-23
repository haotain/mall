import {request} from "network/request"
export function getHomeMultidata() {
  return request({
    url: "/home/multidata"
  })
}

export function getHomeGoodsdata(cid, page) {
  return request({
    url: "",
    data: {
      cid,
      page
    },
    method: 'post'
  })
}
