import { Injectable, inject } from '@angular/core'
import { HttpClient } from '@angular/common/http'

//scripts
import endpoints from '../scripts/apis/endpoints'

//types
import {
  ItemResponse,
  CreateItemRequest,
  UpdateItemRequest,
  UpdateItemDescriptionRequest,
  UpdateItemNameRequest,
  UpdateItemValueRequest
} from '../interfaces/item'

@Injectable({
  providedIn: 'root',
})
export class Items {
  http = inject(HttpClient)

  createItem(item: CreateItemRequest) {
    return this.http.post(endpoints.items.post, item)
  }

  readItems() {
    return this.http.get<ItemResponse[]>(endpoints.items.get)
  }

  updateItem(id: number, item: UpdateItemRequest) {
    return this.http.put(endpoints.items.put(id), item)
  }

  patchItemValue(id: number, val: UpdateItemValueRequest) {
    return this.http.patch(endpoints.items.patchValue(id), val)
  }

  patchItemName(id: number, val: UpdateItemNameRequest) {
    return this.http.patch(endpoints.items.patchName(id), val)
  }

  patchItemDescription(id: number, val: UpdateItemDescriptionRequest) {
    return this.http.patch(endpoints.items.patchDesc(id), val)
  }
}
