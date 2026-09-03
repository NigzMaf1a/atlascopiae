export interface StoredItemResponse {
    storedItemId: number
    storeId: number
    itemId: number
    itemQty: number
}

export interface CreateStoredItemRequest {
    storeId: number
    itemId: number
    itemQty: number
}

export interface UpdateStoredItemQuantityRequest {
    itemQty: number
}