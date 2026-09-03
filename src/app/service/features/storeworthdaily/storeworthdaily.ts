import { Injectable, inject } from '@angular/core'
import { HttpClient } from '@angular/common/http'

//scripts
import endpoints from '../../../scripts/apis/endpoints'
import URL from '../../../scripts/utils/url'

//types
import {
  StoreWorthDailyResponse,
  CreateStoreWorthDailyRequest,
  UpdateStoreWorthDailyRequest
} from '../../../interfaces/storeworthdaily'

@Injectable({
  providedIn: 'root',
})
export class Storeworthdaily {
  http = inject(HttpClient)

  createStoreWorthDaily(stwd: CreateStoreWorthDailyRequest) {
    return this.http.post(URL.storeLink(endpoints.storeWorthDaily.post), stwd)
  }

  readStoreWorthDaily() {
    return this.http.get<StoreWorthDailyResponse[]>(URL.storeLink(endpoints.storeWorthDaily.get))
  }

  readStoreWorthDailyByStore(store_id: number) {
    return this.http.get<StoreWorthDailyResponse[]>(URL.storeLink(endpoints.storeWorthDaily.getByStore(store_id)))
  }

  readStoreWorthDailyByDate(date: string) {
    return this.http.get<StoreWorthDailyResponse[]>(URL.storeLink(endpoints.storeWorthDaily.getByDate(date)))
  }

  readStoreWorthDailyByStoreAndDate(store_id: number, date: string) {
    return this.http.get<StoreWorthDailyResponse[]>(URL.storeLink(endpoints.storeWorthDaily.getByStoreAndDate(store_id, date)))
  }

  patchStoreWorth(id: number, stwrp: UpdateStoreWorthDailyRequest) {
    return this.http.patch(URL.storeLink(endpoints.storeWorthDaily.patchWorth(id)), stwrp)
  }
}
