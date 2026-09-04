import { Injectable, inject } from '@angular/core'
import { HttpClient } from '@angular/common/http'

//scripts
import endpoints from '../../../scripts/apis/endpoints'
import URL from '../../../scripts/utils/url'

//types
import {
  RestockRequestItemResponse,
  CreateRestockRequestItemRequest,
  UpdateRestockRequestItemQuantityRequest,
  UpdateRestockRequestItemRequest,
  UpdateRestockRequestItemStatusRequest,
  UpdateRestockRequestItemTotalRequest
} from '../../../interfaces/restockrequestitem'

@Injectable({
  providedIn: 'root',
})
export class Restockrequestitems {
  http = inject(HttpClient)

  createRestockRequestItem(item: CreateRestockRequestItemRequest) {
    return this.http.post(URL.storeLink(endpoints.restockRequestItems.post), item)
  }

  readRestockItems() {
    return this.http.get<RestockRequestItemResponse[]>(URL.storeLink(endpoints.restockRequestItems.get))
  }

  readRestockItemsByRequest(res_id: number) {
    return this.http.get<RestockRequestItemResponse[]>(URL.storeLink(endpoints.restockRequestItems.getByRequest(res_id)))
  }

  readRestockItemsByItem(item_id: number) {
    return this.http.get<RestockRequestItemResponse[]>(URL.storeLink(endpoints.restockRequestItems.getByItem(item_id)))
  }

  patchRestockItemQty(item_id: number, qty: UpdateRestockRequestItemQuantityRequest) {
    return this.http.patch(URL.storeLink(endpoints.restockRequestItems.put(item_id)), qty)
  }

  patchRestockItemTotal(item_id: number, total: UpdateRestockRequestItemTotalRequest) {
    return this.http.patch(URL.storeLink(endpoints.restockRequestItems.patchTotal(item_id)), total)
  }

  patchRestockItemStatus(item_id: number, status: UpdateRestockRequestItemStatusRequest) {
    return this.http.patch(URL.storeLink(endpoints.restockRequestItems.patchStatus(item_id)), status)
  }

  updateRestockItem(item_id: number, item: UpdateRestockRequestItemRequest) {
    return this.http.put(URL.storeLink(endpoints.restockRequestItems.put(item_id)), item)
  }
}
