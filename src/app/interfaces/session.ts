import type User from "./user"

export default interface SessionVariables {
    token: string
    user: User
}