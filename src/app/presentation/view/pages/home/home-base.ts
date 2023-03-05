import { Component, OnInit } from '@angular/core'
import { HomeService } from './home.service'

@Component({
  template: '',
})
export abstract class HomeBase implements OnInit {
  isOpen = false

  constructor(private homeService: HomeService) {}

  ngOnInit() {
    this.homeService.isSideBarOpen$.subscribe((next: boolean) => (this.isOpen = next))
  }

  toogleSidebar() {
    this.homeService.setOpen(!this.isOpen)
  }
}
