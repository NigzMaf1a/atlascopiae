import { Component, inject, OnInit } from '@angular/core'

// service
import { Manager } from '../../../../service/users/manager'

// scripts
import Refresh from '../../../../scripts/utils/refresh'

//components
import { Page } from '../../../../components/page/page'
import { Informer } from '../../../../views/informer/informer'
import { Tray } from '../../../../components/tray/tray'

@Component({
  selector: 'app-manager-dashboard',
  imports: [Page, Informer, Tray],
  templateUrl: './manager-dashboard.html',
  styleUrl: './manager-dashboard.css',
})
export class ManagerDashboard implements OnInit {
  manager = inject(Manager)

  ngOnInit(): void {
    this.manager.initData()

    Refresh.countdownToRefresh(() => {
      this.manager.initData()
    })
  }
}