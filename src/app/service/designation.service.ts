import { Injectable, inject } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

import links from '../scripts/utils/links'

export type DesignationStatus = 'ACTIVE' | 'INACTIVE'

export interface Designation {
    id: number
    reference: string
    description: string
    status: DesignationStatus
}

export interface CreateDesignation {
    reference: string
    description: string
    status: DesignationStatus
}

export interface UpdateDesignation {
    reference: string
    description: string
}

@Injectable({
    providedIn: 'root'
})
export class DesignationService {

    private http = inject(HttpClient)

    private readonly endpoint = `${links.copiae}/api/v1/designations`

    getDesignations(): Observable<Designation[]> {
        return this.http.get<Designation[]>(this.endpoint)
    }

    createDesignation(
        data: CreateDesignation
    ): Observable<Designation> {
        return this.http.post<Designation>(
            this.endpoint,
            data
        )
    }

    updateDesignation(
        id: number,
        data: UpdateDesignation
    ): Observable<Designation> {
        return this.http.put<Designation>(
            `${this.endpoint}/${id}`,
            data
        )
    }

    updateDesignationStatus(
        id: number,
        status: DesignationStatus
    ): Observable<Designation> {
        return this.http.patch<Designation>(
            `${this.endpoint}/${id}/status`,
            { status }
        )
    }
}