import { Injectable, inject } from '@angular/core'
import { HttpClient } from '@angular/common/http'

//scripts
import endpoints from '../scripts/apis/endpoints'

//types
import { StoreResponse, CreateStoreRequest, UpdateStoreRequest, UpdateStoreStatusRequest } from '../interfaces/store'

@Injectable({
  providedIn: 'root',
})
export class Stores {
  http = inject(HttpClient)

  createStore(data: CreateStoreRequest) {
    return this.http.post(
      endpoints.stores.post,
      data
    )
  }

  readStores() {
    return this.http.get<StoreResponse[]>(endpoints.stores.get)
  }

  updateStore(id: number, data: UpdateStoreRequest) {
    return this.http.put(endpoints.stores.put(id), data)
  }

  patchStoreStatus(id: number, status: UpdateStoreStatusRequest) {
    return this.http.patch(endpoints.stores.patch(id), status)
  }
}
