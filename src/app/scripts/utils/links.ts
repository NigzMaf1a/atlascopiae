export interface Links {
    auth: string
    copiae: string
}

const links: Links = {
    auth: 'http://localhost:8080',
    copiae: 'http://localhost:8083'
} as const

export default links