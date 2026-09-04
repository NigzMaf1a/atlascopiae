import { Injectable, inject } from '@angular/core'
import { HttpClient } from '@angular/common/http'

//scripts
import endpoints from '../../../scripts/apis/endpoints'
import URL from '../../../scripts/utils/url'

//types
import {
  RestockRequestResponse,
  CreateRestockRequest,
  UpdateRestockRequestStatus,
  UpdateRestockRequestTotal
} from '../../../interfaces/restockrequest'

@Injectable({
  providedIn: 'root',
})
export class Restock {
  http = inject(HttpClient)

  createRestockRequest(res_req: CreateRestockRequest) {
    return this.http.post(URL.storeLink(endpoints.restockRequests.post), res_req)
  }

  readRestockResquests() {
    return this.http.get<RestockRequestResponse[]>(URL.storeLink(endpoints.restockRequests.get))
  }

  readRestockRequestsByStore(store_id: number) {
    return this.http.get<RestockRequestResponse[]>(URL.storeLink(endpoints.restockRequests.getByStore(store_id)))
  }

  readRestockRequestsByType(req_type: string) {
    return this.http.get<RestockRequestResponse[]>(URL.storeLink(endpoints.restockRequests.getByType(req_type)))
  }

  readRestockRequestsByStatus(req_status: string) {
    return this.http.get<RestockRequestResponse[]>(URL.storeLink(endpoints.restockRequests.getByStatus(req_status)))
  }

  readRestockRequestsByDate(date: string) {
    return this.http.get<RestockRequestResponse[]>(URL.storeLink(endpoints.restockRequests.getByDate(date)))
  }

  patchRestockRequestStatus(id: number, status: UpdateRestockRequestStatus) {
    return this.http.patch(URL.storeLink(endpoints.restockRequests.patchStatus(id)), status)
  }

  patchRestockRequestTotal(id: number, total: UpdateRestockRequestTotal) {
    return this.http.patch(URL.storeLink(endpoints.restockRequests.patchStatus(id)), total)
  }
}
