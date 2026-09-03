import { Injectable, inject } from '@angular/core'
import { HttpClient } from '@angular/common/http'

//scripts
import endpoints from '../scripts/apis/endpoints'

//types
import {
  ItemResponse,
  CreateItemRequest,
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
}
