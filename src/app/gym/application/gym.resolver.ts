import {GymService} from "./gym.service";
import {inject} from "@angular/core";
import {ActivatedRouteSnapshot} from "@angular/router";

/**
 * Used to get gyms before the component is loaded
 *
 */
export const gymsResolve = () => {
  return inject(GymService)
    .getGyms()
}

/**
 * Used to get gym from id before the component is loaded
 *
 */
export const gymResolve = (route: ActivatedRouteSnapshot) => {
  return inject(GymService).getGym(parseInt(route.paramMap.get('id')!));
};
