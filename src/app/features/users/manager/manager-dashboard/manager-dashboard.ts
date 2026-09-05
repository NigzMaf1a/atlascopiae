import { Component, inject, OnInit, OnDestroy, computed } from '@angular/core'

//service
import { Manager } from '../../../../service/users/manager'

//scripts
import Refresh from '../../../../scripts/utils/refresh'

@Component({
  selector: 'app-manager-dashboard',
  imports: [],
  templateUrl: './manager-dashboard.html',
  styleUrl: './manager-dashboard.css',
})
export class ManagerDashboard implements OnInit {
  manager = inject(Manager)

  ngOnInit(): void {
    this.manager.initData()
  }
}
