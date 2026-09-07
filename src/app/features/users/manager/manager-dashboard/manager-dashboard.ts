import { Component, inject, signal, OnInit } from '@angular/core'

// service
import { Manager } from '../../../../service/users/manager'
import { Stores } from '../../../../service/features/stores/stores'

// scripts
import Refresh from '../../../../scripts/utils/refresh'

//components
import { Page } from '../../../../components/page/page'
import { Informer } from '../../../../views/informer/informer'
import { Tray } from '../../../../components/tray/tray'
import { Content } from '../../../../components/content/content'
import { Storeelem } from '../../../../views/storeelem/storeelem'
import { AddStore } from '../../../../views/add-store/add-store'
import { Input } from '../../../../components/input/input'

@Component({
  selector: 'app-manager-dashboard',
  imports: [Page, Informer, Tray, Content, Storeelem, AddStore, Input],
  templateUrl: './manager-dashboard.html',
  styleUrl: './manager-dashboard.css',
})
export class ManagerDashboard implements OnInit {

  manager = inject(Manager)
  store = inject(Stores)
  detail = signal(false)
  add = signal<boolean>(false)

  ngOnInit(): void {
    this.manager.initData()

    Refresh.countdownToRefresh(() => {
      this.manager.initData()
    })
  }

  showDetail(): void {
    this.detail.set(true)
  }

  toggleAdd() {
    this.add.update(prev => !prev)
  }

  addStore() { }
}