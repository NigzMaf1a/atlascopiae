//scripts
import Location from "./location"
import Session from "./user_in_session"

//types
import { CreateStoreRequest, UpdateStoreRequest, UpdateStoreStatusRequest } from "../../interfaces/store"
import { CreateDesignationRequest, DesignationStatus, UpdateDesignationRequest, UpdateDesignationStatusRequest } from "../../interfaces/designation"
import { CreateItemRequest, UpdateItemDescriptionRequest, UpdateItemNameRequest, UpdateItemRequest } from "../../interfaces/item"
import { CreateStoredItemRequest, UpdateStoredItemQuantityRequest } from "../../interfaces/storeditem"
import { CreateStoreWorthRequest, UpdateStoreWorthRequest } from "../../interfaces/storeworth"
import { CreateStoreWorthDailyRequest, UpdateStoreWorthDailyRequest } from "../../interfaces/storeworthdaily"
import { CreateRestockRequest, UpdateRestockRequestStatus, UpdateRestockRequestTotal, RestockRequestStatus, RestockRequestType } from "../../interfaces/restockrequest"
import { CreateRestockRequestItemRequest, RestockRequestItemStatus, UpdateRestockRequestItemQuantityRequest, UpdateRestockRequestItemRequest, UpdateRestockRequestItemStatusRequest, UpdateRestockRequestItemTotalRequest } from "../../interfaces/restockrequestitem"

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

    static createStoredItem(
        store_id: number,
        item_id: number,
        item_qty: number
    ): CreateStoredItemRequest {
        return {
            storeId: store_id,
            itemId: item_id,
            itemQty: item_qty
        }
    }

    static updateStoredItemQuantity(qty: number): UpdateStoredItemQuantityRequest {
        return {
            itemQty: qty
        }
    }

    static createStoreWorth(worth: number): CreateStoreWorthRequest {
        return {
            storeWorth: worth,
            timestamp: this.dateTime
        }
    }

    static updateStoreWorth(worth: number): UpdateStoreWorthRequest {
        return {
            storeWorth: worth
        }
    }

    static createStoreWorthDaily(id: number, worth: number): CreateStoreWorthDailyRequest {
        return {
            storeId: id,
            storeWorth: worth,
            date: this.dateTime
        }
    }

    static updateStoreWorthDailyWorth(worth: number): UpdateStoreWorthDailyRequest {
        return {
            storeWorth: worth
        }
    }

    static createRestock(
        store_id: number,
        req_type: RestockRequestType,
        req_total: number,
    ): CreateRestockRequest {
        return {
            storeId: store_id,
            reqType: req_type,
            reqStatus: RestockRequestStatus.Pending,
            reqDate: this.dateTime,
            reqTotal: req_total
        }
    }

    static updateRestockRequestStatus(status: RestockRequestStatus): UpdateRestockRequestStatus {
        return {
            reqStatus: status
        }
    }

    static updateRestockRequestTotal(total: number): UpdateRestockRequestTotal {
        return {
            reqTotal: total
        }
    }

    static createRestockItem(
        res_req_id: number,
        item_id: number,
        req_qty: number,
        req_total: number
    ): CreateRestockRequestItemRequest {
        return {
            resReqId: res_req_id,
            itemId: item_id,
            reqQty: req_qty,
            reqTotal: req_total
        }
    }

    static updateRestockItemQty(qty: number): UpdateRestockRequestItemQuantityRequest {
        return {
            reqQty: qty
        }
    }

    static updateRestockItem(
        res_req_id: number,
        item_id: number,
        req_qty: number,
        req_total: number,
        res_item_status: RestockRequestItemStatus
    ): UpdateRestockRequestItemRequest {
        return {
            resReqId: res_req_id,
            itemId: item_id,
            reqQty: req_qty,
            reqTotal: req_total,
            resReqItemStatus: res_item_status
        }
    }

    static updateRestockItemStatus(status: RestockRequestItemStatus): UpdateRestockRequestItemStatusRequest {
        return {
            resReqItemStatus: status
        }
    }

    static updateRestockItemTotal(total: number): UpdateRestockRequestItemTotalRequest {
        return {
            reqTotal: total
        }
    }
}