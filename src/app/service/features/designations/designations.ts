import { Injectable, inject } from '@angular/core'
import { HttpClient } from '@angular/common/http'

//scripts
import endpoints from '../../../scripts/apis/endpoints'
import URL from '../../../scripts/utils/url'

//types
import {
  DesignationResponse,
  CreateDesignationRequest,
  UpdateDesignationRequest,
  UpdateDesignationStatusRequest
} from '../../../interfaces/designation'

@Injectable({
  providedIn: 'root',
})
export class Designations {
  http = inject(HttpClient)

  createDesignation(desig: CreateDesignationRequest) {
    return this.http.post(URL.storeLink(endpoints.designations.post), desig)
  }

  readDesignations() {
    return this.http.get(URL.storeLink(endpoints.designations.get))
  }

  updateDesignation(id: number, des: UpdateDesignationRequest) {
    return this.http.put(URL.storeLink(endpoints.designations.put(id)), des)
  }

  patchDesignationStatus(id: number, des: UpdateDesignationStatusRequest) {
    return this.http.patch(URL.storeLink(endpoints.designations.patch(id)), des)
  }
}
