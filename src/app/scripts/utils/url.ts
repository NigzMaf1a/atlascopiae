import links from "./links"

export default class URL {
    static authLink(endpoint: string): string {
        return `${links.auth}${endpoint}`
    }

    static storeLink(endpoint: string): string {
        return `${links.copiae}${endpoint}`
    }
}