export interface ItemResponse {
    itemId: number
    itemImgUrl: string
    itemRef: string
    itemValue: number
    itemName: string
    itemDesc: string
}

export interface CreateItemRequest {
    itemImgUrl: string
    itemRef: string
    itemValue: number
    itemName: string
    itemDesc: string
}

export interface UpdateItemDescriptionRequest {
    itemDesc: string
}

export interface UpdateItemNameRequest {
    itemName: string
}

export interface UpdateItemRequest {
    itemImgUrl: string
    itemRef: string
    itemValue: number
    itemName: string
    itemDesc: string
}

export interface UpdateItemValueRequest {
    itemValue: number
}