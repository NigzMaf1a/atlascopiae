import { DesignationResponse } from "../interfaces/designation"
import { StoreResponse } from "../interfaces/store"
import { ItemResponse } from "../interfaces/item"
import { StoredItemResponse } from "../interfaces/storeditem"
import { StoreWorthResponse } from "../interfaces/storeworth"
import { StoreWorthDailyResponse } from "../interfaces/storeworthdaily"
import { RestockRequestResponse } from "../interfaces/restockrequest"
import { RestockRequestItemResponse } from "../interfaces/restockrequestitem"

export default interface Data {
    designations: DesignationResponse[]
    stores: StoreResponse[]
    items: ItemResponse[]
    storeditems: StoredItemResponse[]
    storeworth: StoreWorthResponse[]
    storeworthdaily: StoreWorthDailyResponse[]
    restock: RestockRequestResponse[]
    restockitems: RestockRequestItemResponse[]
}