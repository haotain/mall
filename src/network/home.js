import {request, localRequest} from "network/request"
export function getHomeMultidata() {
  return request({
    url: "/home/multidata"
  })
}

export function getHomeGoodsdata(cid, page) {
  return localRequest({
    url: "/shop/index/detailList",
    data: {
      cid,
      page
    },
    // headers: {'X-Requested-With': 'XMLHttpRequest'},
    method: 'post'
  })
}
