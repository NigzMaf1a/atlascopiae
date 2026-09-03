import { Injectable, inject } from '@angular/core'
import { HttpClient } from '@angular/common/http'

//scripts
import endpoints from '../../../scripts/apis/endpoints'
import URL from '../../../scripts/utils/url'

//types
import {
  ItemResponse,
  CreateItemRequest,
  UpdateItemRequest,
  UpdateItemDescriptionRequest,
  UpdateItemNameRequest,
  UpdateItemValueRequest
} from '../../../interfaces/item'

@Injectable({
  providedIn: 'root',
})
export class Items {
  http = inject(HttpClient)

  createItem(item: CreateItemRequest) {
    return this.http.post(URL.storeLink(endpoints.items.post), item)
  }

  readItems() {
    return this.http.get<ItemResponse[]>(URL.storeLink(endpoints.items.get))
  }

  updateItem(id: number, item: UpdateItemRequest) {
    return this.http.put(URL.storeLink(endpoints.items.put(id)), item)
  }

  patchItemValue(id: number, val: UpdateItemValueRequest) {
    return this.http.patch(URL.storeLink(endpoints.items.patchValue(id)), val)
  }

  patchItemName(id: number, val: UpdateItemNameRequest) {
    return this.http.patch(URL.storeLink(endpoints.items.patchName(id)), val)
  }

  patchItemDescription(id: number, val: UpdateItemDescriptionRequest) {
    return this.http.patch(URL.storeLink(endpoints.items.patchDesc(id)), val)
  }
}
