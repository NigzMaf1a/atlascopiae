import { inject, Injectable, signal } from '@angular/core'
import { HttpClient } from '@angular/common/http'

//types
import { StoredItemResponse, CreateStoredItemRequest } from '../../../interfaces/storeditem'

//scripts
import endpoints from '../../../scripts/apis/endpoints'
import URL from '../../../scripts/utils/url'

@Injectable({
  providedIn: 'root',
})
export class Storeditems {
  storeditems = signal<StoredItemResponse[]>([])
  http = inject(HttpClient)

  createStoredItem(data: CreateStoredItemRequest) {
    return this.http.post(
      endpoints.storedItems.post,
      data
    )
  }

  readStoredItems() {
    return this.http.get<StoredItemResponse[]>(URL.storeLink(endpoints.storedItems.get))
  }

  readStoredItemsByStore(store_id: number) {
    return this.http.get<StoredItemResponse[]>(URL.storeLink(endpoints.storedItems.getByStore(store_id)))
  }

  readStoredItemsByItem(item_id: number) {
    return this.http.get<StoredItemResponse[]>(URL.storeLink(endpoints.storedItems.getByItem(item_id)))
  }

  updateStoredItem(stored_item_id: number, qty: number) {
    return this.http.patch(URL.storeLink(URL.storeLink(endpoints.storedItems.patchQty(stored_item_id))), qty)
  }
}
