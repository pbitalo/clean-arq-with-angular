import { Injectable } from '@angular/core'

import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private _isSideBarOpen = new BehaviorSubject<boolean>(false)

  public isSideBarOpen$ = this._isSideBarOpen.asObservable()

  setOpen(val: boolean): void {
    this._isSideBarOpen.next(val)
  }
}
