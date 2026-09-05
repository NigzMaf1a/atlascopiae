import { signal } from '@angular/core'

import Network from '../../scripts/utils/network'

export default class Base {
  connected = signal(Network.isConnected())
  no_connection = signal<string>(Network.notConnectedMessage())
  error = signal<string | null>(null)
  loading = signal<boolean>(false)
}
