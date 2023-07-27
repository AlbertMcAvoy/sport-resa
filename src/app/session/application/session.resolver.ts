import {SessionService} from "./session.service";
import {inject} from "@angular/core";
import {ActivatedRouteSnapshot} from "@angular/router";

/**
 * Used to get sessions before the component is loaded
 *
 */
export const sessionsResolve = () => {
  return inject(SessionService)
    .getSessions()
}

/**
 * Used to get session from id before the component is loaded
 *
 */
export const sessionResolve = (route: ActivatedRouteSnapshot) => {
  return inject(SessionService).getSession(parseInt(route.paramMap.get('id')!));
};

/**
 * Used to get session from gym id before the component is loaded
 *
 */
export const sessionGymResolve = (route: ActivatedRouteSnapshot) => {
  return inject(SessionService).getSessionByGymId(parseInt(route.paramMap.get('id')!));
};
