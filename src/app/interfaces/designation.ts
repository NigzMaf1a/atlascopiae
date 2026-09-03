export enum DesignationStatus {
    Active = 'Active',
    Inactive = 'Inactive'
}

export interface DesignationResponse {
    desId: number
    desRef: string
    desDesc: string
    desStatus: DesignationStatus
}

export interface CreateDesignationRequest {
    desRef: string
    desDesc: string
    desStatus: DesignationStatus
}

export interface UpdateDesignationRequest {
    desRef: string
    desDesc: string
    desStatus: DesignationStatus
}

export interface UpdateDesignationStatusRequest {
    desStatus: DesignationStatus
}