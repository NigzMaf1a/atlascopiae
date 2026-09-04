//scripts
import Location from "./location"

//types
import { CreateStoreRequest, UpdateStoreRequest, UpdateStoreStatusRequest } from "../../interfaces/store"
import { CreateDesignationRequest, DesignationStatus, UpdateDesignationRequest, UpdateDesignationStatusRequest } from "../../interfaces/designation"
import { CreateItemRequest, UpdateItemDescriptionRequest, UpdateItemNameRequest, UpdateItemRequest } from "../../interfaces/item"

export default class Payloads {
    static location = Location.currentLocation()
    static time = Location.currentLocationTime()
    static date = Location.currentLocationDate()
    static dateTime = Location.currentLocationDateTime()

    static createStore(store_ref: string, des_id: number): CreateStoreRequest {
        return {
            storeRef: store_ref,
            storeLocation: this.location,
            storeStatus: DesignationStatus.Inactive,
            desId: des_id
        }
    }

    static updateStore(store_ref: string, store_status: DesignationStatus, des_id: number): UpdateStoreRequest {
        return {
            storeRef: store_ref,
            storeLocation: this.location,
            storeStatus: store_status,
            desId: des_id
        }
    }

    static updateStoreStatus(store_status: DesignationStatus): UpdateStoreStatusRequest {
        return {
            storeStatus: store_status
        }
    }

    static createDesignation(des_ref: string, des_desc: string): CreateDesignationRequest {
        return {
            desRef: des_ref,
            desDesc: des_desc,
            desStatus: DesignationStatus.Inactive
        }
    }

    static updateDesignation(des_ref: string, des_desc: string, des_status: DesignationStatus): UpdateDesignationRequest {
        return {
            desRef: des_ref,
            desDesc: des_desc,
            desStatus: des_status
        }
    }

    static updateDesignationStatus(des_status: DesignationStatus): UpdateDesignationStatusRequest {
        return {
            desStatus: des_status
        }
    }

    static createItem(
        img_url: string,
        item_ref: string,
        item_value: number,
        item_name: string,
        item_desc: string
    ): CreateItemRequest {
        return {
            itemImgUrl: img_url,
            itemRef: item_ref,
            itemValue: item_value,
            itemName: item_name,
            itemDesc: item_desc
        }
    }

    static updateItemDesc(item_desc: string): UpdateItemDescriptionRequest {
        return {
            itemDesc: item_desc
        }
    }

    static updateItemName(item_name: string): UpdateItemNameRequest {
        return {
            itemName: item_name
        }
    }

    static updateItem(
        img_url: string,
        item_ref: string,
        item_value: number,
        item_name: string,
        item_desc: string
    ): UpdateItemRequest {
        return {
            itemImgUrl: img_url,
            itemRef: item_ref,
            itemValue: item_value,
            itemName: item_name,
            itemDesc: item_desc
        }
    }
}