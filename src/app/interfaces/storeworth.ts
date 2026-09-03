export interface StoreWorthResponse {
    storeId: number
    storeWorth: number
    timestamp: Date
}

export interface CreateStoreWorthRequest {
    storeWorth: number
    timestamp: Date
}

export interface UpdateStoreWorthRequest {
    storeWorth: number
}