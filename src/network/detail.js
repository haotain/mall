import {request} from "network/request"

export function getDetail(goodsId) {
  return request({
    url: "",
    params: {
      id: goodsId
    }
  })
}


