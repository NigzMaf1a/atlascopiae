import { Injectable, inject } from '@angular/core'
import { HttpClient } from '@angular/common/http'

//scripts
import endpoints from '../../../scripts/apis/endpoints'
import URL from '../../../scripts/utils/url'

//types
import { StoreWorthResponse, CreateStoreWorthRequest, UpdateStoreWorthRequest } from '../../../interfaces/storeworth'

@Injectable({
  providedIn: 'root',
})
export class Storeworth {
  http = inject(HttpClient)

  createStoreWorth(stw: CreateStoreWorthRequest) {
    return this.http.post(URL.storeLink(endpoints.storeWorth.post), stw)
  }

  readStoreWorth() {
    return this.http.get<StoreWorthResponse[]>(URL.storeLink(endpoints.storeWorth.get))
  }

  readStoreWorthByStore(store_id: number) {
    return this.http.get<StoreWorthResponse>(URL.storeLink(endpoints.storeWorth.getByStore(store_id)))
  }

  patchStoreWorth(id: number, pstw: UpdateStoreWorthRequest) {
    return this.http.patch(URL.storeLink(endpoints.storeWorth.patchWorth(id)), pstw)
  }
}
