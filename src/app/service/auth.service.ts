import { Injectable, inject } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

import links from '../scripts/utils/links'
import reg_endpoints from '../scripts/apis/reg_endpoints'
import User from '../interfaces/user'

export interface LoginCredentials {
    email: string
    password: string
}

export interface LoginResponse {
    token: string
    user: User
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private http = inject(HttpClient)

    login(credentials: LoginCredentials): Observable<LoginResponse> {
        const url = `${links.auth}${reg_endpoints.login}`

        return this.http.post<LoginResponse>(url, credentials)
    }
}