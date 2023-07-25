import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  createUrlTreeFromSnapshot,
} from '@angular/router';
import { map } from 'rxjs';
import {LocalStorageService} from "./local-storage.service";


export const authGuard = (next: ActivatedRouteSnapshot) => {
  return inject(LocalStorageService)
    .isLoggedIn()
    .pipe(
      map((isLoggedIn) =>
        isLoggedIn ? true : createUrlTreeFromSnapshot(next, ['/', 'login'])
      )
    );
};
