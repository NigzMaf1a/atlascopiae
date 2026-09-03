export enum RestockRequestItemStatus {
    Pending = 'Pending',
    Approved = 'Approved'
}

export interface RestockRequestItemResponse {
    resReqItemId: number
    resReqId: number
    itemId: number
    reqQty: number
    reqTotal: number
    resReqItemStatus: RestockRequestItemStatus
}

export interface CreateRestockRequestItemRequest {
    resReqId: number
    itemId: number
    reqQty: number
    reqTotal: number
}

export interface UpdateRestockRequestItemQuantityRequest {
    reqQty: number
}

export interface UpdateRestockRequestItemRequest {
    resReqId: number
    itemId: number
    reqQty: number
    reqTotal: number
    resReqItemStatus: RestockRequestItemStatus
}

export interface UpdateRestockRequestItemStatusRequest {
    resReqItemStatus: RestockRequestItemStatus
}

export interface UpdateRestockRequestItemTotalRequest {
    reqTotal: number
}