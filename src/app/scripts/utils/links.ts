interface Links {
    auth: string
    copiae: string
}

const links: Links = {
    auth: 'localhost:8080',
    copiae: 'localhost:8083'
} as const

export default links