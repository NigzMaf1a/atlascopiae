import { signal, inject } from "@angular/core"

//types
import { DesignationResponse } from "../interfaces/designation"
import { ItemResponse } from "../interfaces/item"
import { StoreResponse } from "../interfaces/store"
import { StoredItemResponse } from "../interfaces/storeditem"
import { StoreWorthResponse } from "../interfaces/storeworth"
import { StoreWorthDailyResponse } from "../interfaces/storeworthdaily"
import { RestockRequestResponse } from "../interfaces/restockrequest"
import { RestockRequestItemResponse } from "../interfaces/restockrequestitem"

interface Methods {
    fetchDesignations: () => Promise<DesignationResponse[]>
    fetchItems: () => Promise<ItemResponse[]>
    fetchStores: () => Promise<StoreResponse[]>
    fetchStoredItems: () => Promise<StoredItemResponse[]>
    fetchStoreWorth: () => Promise<StoreWorthResponse[]>
    fetchStoreWorthDaily: () => Promise<StoreWorthDailyResponse[]>
    fetchRestockRequests: () => Promise<RestockRequestResponse[]>
    fetchRestorequestItems: () => Promise<RestockRequestItemResponse[]>
}

interface Data {
    loading: boolean
    desig: DesignationResponse[]
    items: ItemResponse[]
}

type Keys = 'desig' | 'items' | 'stores' | 'storeditems' | 'worth' | 'worthdaily' | 'restock' | 'restockitems'

function toJSONString(val: any): string {
    return JSON.stringify(val)
}

function fromJSONString(val: Keys): any {
    return JSON.parse(val)
}

class LocalStorage {
    static setItem(key: Keys, val: string) {
        localStorage.setItem(key, val)
    }

    static getItem(key: Keys) {
        localStorage.getItem(key)
    }

    static removeItem(key: Keys) {
        localStorage.removeItem(key)
    }

    static nukeStorage() {
        localStorage.clear()
    }
}

export default class Repository {

    public loading: boolean = false

    constructor(data: Methods) {
        const interval = setInterval(() => {
            (async () => {
                try {
                    this.loading = true
                    const [
                        designations,
                        items,
                        stores,
                        storedItems,
                        storeworth,
                        storeworthdaily,
                        restockrequests,
                        restockrequestitems,

                    ] = await Promise.all(
                        [
                            data.fetchDesignations(),
                            data.fetchItems(),
                            data.fetchStores(),
                            data.fetchStoredItems(),
                            data.fetchStoreWorth(),
                            data.fetchStoreWorthDaily(),
                            data.fetchRestockRequests(),
                            data.fetchRestorequestItems()

                        ])

                    LocalStorage.setItem('desig', toJSONString(designations))
                    LocalStorage.setItem('items', toJSONString(items))
                    LocalStorage.setItem('stores', toJSONString(stores))
                    LocalStorage.setItem('storeditems', toJSONString(storedItems))
                    LocalStorage.setItem('worth', toJSONString(storeworth))
                    LocalStorage.setItem('worthdaily', toJSONString(storeworthdaily))
                    LocalStorage.setItem('restock', toJSONString(restockrequests))
                    LocalStorage.setItem('restockitems', toJSONString(restockrequestitems))
                } catch (error) {
                    console.log(error)
                } finally {
                    this.loading = false
                }
            })()
        }, 600000)

        clearInterval(interval)
    }

    public sessionData(): Data {
        return {
            loading: this.loading,
            desig: fromJSONString('desig'),
            items: fromJSONString('items')
        }
    }
}