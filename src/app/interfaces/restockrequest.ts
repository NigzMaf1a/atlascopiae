export enum RestockRequestType {
    Add = 'Add',
    Sub = 'Sub'
}

export enum RestockRequestStatus {
    Approved = 'Approved',
    Pending = 'Pending'
}

export interface RestockRequestResponse {
    resReqId: number
    storeId: number
    reqType: RestockRequestType
    reqStatus: RestockRequestStatus
    reqDate: Date
    reqTotal: number
}

export interface CreateRestockRequest {
    storeId: number
    reqType: RestockRequestType
    reqStatus: RestockRequestStatus
    reqDate: Date
    reqTotal: number
}

export interface UpdateRestockRequestStatus {
    reqStatus: RestockRequestStatus
}

export interface UpdateRestockRequestTotal {
    reqTotal: number
}