export interface StoreWorthDailyResponse {
    storeWorthDailyId: number
    storeId: number
    storeWorth: number
    date: Date
}

export interface CreateStoreWorthDailyRequest {
    storeId: number
    storeWorth: number
    date: Date
}

export interface UpdateStoreWorthDailyRequest {
    storeWorth: number
}