import { Component, inject, OnInit } from '@angular/core'

// service
import { Manager } from '../../../../service/users/manager'

// scripts
import Refresh from '../../../../scripts/utils/refresh'

//components
import { Page } from '../../../../components/page/page'

@Component({
  selector: 'app-manager-dashboard',
  imports: [Page],
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