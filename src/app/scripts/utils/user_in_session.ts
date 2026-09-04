//types
import SessionVariables from "../../interfaces/session"
import Role from "../../interfaces/roles"
import Sector from "../../interfaces/sectors"
import User from "../../interfaces/user"

type Keys = 'user' | 'token' | 'sector' | 'role'

export default class Session {
    static init(user: User, token: string, sectors: Sector[], roles: Role[]): boolean {
        try {
            const user_string = JSON.stringify(user)
            const token_string = JSON.stringify(token)
            const sector_string = JSON.stringify(sectors.find(s => Number(s.sector_id) === Number(user.sector_id))?.sector_name as string)
            const role_string = JSON.stringify(roles.find(r => Number(r.role_id) === Number(user.role_id))?.role_title as string)

            localStorage.setItem('user', user_string)
            localStorage.setItem('token', token_string)
            localStorage.setItem('sector', sector_string)
            localStorage.setItem('role', role_string)

            return true
        } catch (error) {
            console.log(error)
            return false
        }
    }

    static getUser(): User {
        return JSON.parse(localStorage.getItem('user') as string)
    }

    static getToken(): string {
        return JSON.parse(localStorage.getItem('token') as string)
    }

    static getSector(): string {
        return JSON.parse(localStorage.getItem('sector') as string)
    }

    static getRole(): string {
        return JSON.parse(localStorage.getItem('role') as string)
    }
}