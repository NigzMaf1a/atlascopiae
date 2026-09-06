import { Component, inject, signal, OnInit } from '@angular/core'

// service
import { Manager } from '../../../../service/users/manager'

// scripts
import Refresh from '../../../../scripts/utils/refresh'

//components
import { Page } from '../../../../components/page/page'
import { Informer } from '../../../../views/informer/informer'
import { Tray } from '../../../../components/tray/tray'
import { Content } from '../../../../components/content/content'
import { Storeelem } from '../../../../views/storeelem/storeelem'

@Component({
  selector: 'app-manager-dashboard',
  imports: [Page, Informer, Tray, Content, Storeelem],
  templateUrl: './manager-dashboard.html',
  styleUrl: './manager-dashboard.css',
})
export class ManagerDashboard implements OnInit {

  manager = inject(Manager)
  detail = signal(false)

  ngOnInit(): void {
    this.manager.initData()

    Refresh.countdownToRefresh(() => {
      this.manager.initData()
    })
  }

  showDetail(): void {
    this.detail.set(true)
  }
}