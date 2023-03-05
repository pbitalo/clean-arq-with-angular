import { Component } from '@angular/core'

import { HomeBase } from '../../home-base'

interface Sector {
  value: string
  viewValue: string
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent extends HomeBase {
  sector: Sector[] = [
    { value: 'contabilidade', viewValue: 'contabilidade' },
    { value: 'logítica', viewValue: 'logítica' },
    { value: 'administrativo', viewValue: 'administrativo' },
  ]
}
