import { Injectable, inject } from '@angular/core'
import { HttpClient } from '@angular/common/http'

//scripts
import URL from '../../../scripts/utils/url'
import reg_endpoints from '../../../scripts/apis/reg_endpoints'

//types
import Sector from '../../../interfaces/sectors'
import Role from '../../../interfaces/roles'
import Task from '../../../interfaces/tasks'
import TaskAlloc from '../../../interfaces/task_alloc'

@Injectable({
  providedIn: 'root',
})
export class Department {
  http = inject(HttpClient)

  readSectors() {
    return this.http.get<Sector[]>(URL.authLink(reg_endpoints.sector.get))
  }

  readRoles() {
    return this.http.get<Role[]>(URL.authLink(reg_endpoints.role.get))
  }

  readTasks() {
    return this.http.get<Task[]>(URL.authLink(reg_endpoints.task.get))
  }

  readTaskAllocs() {
    return this.http.get<TaskAlloc[]>(URL.authLink(reg_endpoints.task_alloc.get))
  }
}
