import { Injectable, inject, signal } from '@angular/core'
import { forkJoin } from 'rxjs'

// services
import { Stores } from '../features/stores/stores'
import { Items } from '../features/items/items'
import { Designations } from '../features/designations/designations'
import { Storeditems } from '../features/storeditems/storeditems'
import { Storeworth } from '../features/storeworth/storeworth'
import { Storeworthdaily } from '../features/storeworthdaily/storeworthdaily'
import { Restock } from '../features/restock/restock'
import { Restockrequestitems } from '../features/restockitems/restockrequestitems'

// types
import { StoreResponse } from '../../interfaces/store'
import { ItemResponse } from '../../interfaces/item'
import { DesignationResponse } from '../../interfaces/designation'
import { StoredItemResponse } from '../../interfaces/storeditem'
import { StoreWorthResponse } from '../../interfaces/storeworth'
import { StoreWorthDailyResponse } from '../../interfaces/storeworthdaily'
import { RestockRequestResponse } from '../../interfaces/restockrequest'
import { RestockRequestItemResponse } from '../../interfaces/restockrequestitem'

// scripts
import Base from './base'

@Injectable({
  providedIn: 'root',
})
export class Manager extends Base {
  store = inject(Stores)
  item = inject(Items)
  des = inject(Designations)
  sto_item = inject(Storeditems)
  sto_worth = inject(Storeworth)
  sto_worth_daily = inject(Storeworthdaily)
  restore = inject(Restock)
  restore_item = inject(Restockrequestitems)

  stores = signal<StoreResponse[]>([])
  items = signal<ItemResponse[]>([])
  designations = signal<DesignationResponse[]>([])
  storedItems = signal<StoredItemResponse[]>([])
  storeWorth = signal<StoreWorthResponse[]>([])
  storeWorthDaily = signal<StoreWorthDailyResponse[]>([])
  restock = signal<RestockRequestResponse[]>([])
  restockItems = signal<RestockRequestItemResponse[]>([])

  initData() {
    if (!this.connected()) {
      this.error.set(this.no_connection())
      return
    }

    this.loading.set(true)
    this.error.set(null)

    forkJoin({
      stores: this.store.readStores(),
      items: this.item.readItems(),
      designations: this.des.readDesignations(),
      stored_items: this.sto_item.readStoredItems(),
      store_worth: this.sto_worth.readStoreWorth(),
      store_worth_daily: this.sto_worth_daily.readStoreWorthDaily(),
      res_req: this.restore.readRestockResquests(),
      res_req_items: this.restore_item.readRestockItems()
    }).subscribe({
      next: (data) => {
        this.stores.set(data.stores)
        this.items.set(data.items)
        this.designations.set(data.designations)
        this.storedItems.set(data.stored_items)
        this.storeWorth.set(data.store_worth)
        this.storeWorthDaily.set(data.store_worth_daily)
        this.restock.set(data.res_req)
        this.restockItems.set(data.res_req_items)
      },

      error: (error) => {
        this.error.set(error)
      },

      complete: () => {
        this.loading.set(false)
      }
    })
  }
}