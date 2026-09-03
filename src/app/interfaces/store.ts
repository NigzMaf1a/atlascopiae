import { DesignationStatus } from "./designation"

export interface CreateStoreRequest {
    storeRef: string
    storeLocation: string
    storeStatus: DesignationStatus
    desId: number
}

export interface StoreResponse {
    storeId: number
    storeRef: string
    storeLocation: string
    storeStatus: DesignationStatus
    desId: number
}

export interface UpdateStoreRequest {
    storeRef: string
    storeLocation: string
    storeStatus: DesignationStatus
    desId: number
}

export interface UpdateStoreStatusRequest {
    storeStatus: DesignationStatus
}