import { Component } from '@angular/core'
import { HomeBase } from './home-base'
import { HomeService } from './home.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent extends HomeBase {}
