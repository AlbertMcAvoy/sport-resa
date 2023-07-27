import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  createUrlTreeFromSnapshot,
} from '@angular/router';
import { map } from 'rxjs';
import {LocalStorageService} from "./local-storage.service";

/**
 * Used to know if a user is logged in and protect routes.
 *
 * @param next
 */
export const authGuard = (next: ActivatedRouteSnapshot) => {
  return inject(LocalStorageService)
    .isLoggedIn()
    .pipe(
      map((isLoggedIn) =>
        isLoggedIn ? true : createUrlTreeFromSnapshot(next, ['/', 'user', 'login'])
      )
    );
};
