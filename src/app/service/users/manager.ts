import { Injectable, inject, signal } from '@angular/core'
import { forkJoin } from 'rxjs'

// services
import { Stores } from '../features/stores/stores'
import { Items } from '../features/items/items'
import { Designations } from '../features/designations/designations'

// types
import { StoreResponse } from '../../interfaces/store'
import { ItemResponse } from '../../interfaces/item'
import { DesignationResponse } from '../../interfaces/designation'

// scripts
import Base from './base'

@Injectable({
  providedIn: 'root',
})
export class Manager extends Base {
  store = inject(Stores)
  item = inject(Items)
  des = inject(Designations)

  stores = signal<StoreResponse[]>([])
  items = signal<ItemResponse[]>([])
  designations = signal<DesignationResponse[]>([])

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
    }).subscribe({
      next: (data) => {
        this.stores.set(data.stores)
        this.items.set(data.items)
        this.designations.set(data.designations)
      },

      error: (error) => {
        this.error.set(error)
        this.loading.set(false)
      },
    })
  }
}