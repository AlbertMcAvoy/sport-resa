import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {
  private users = [{
    id: 1,
    name: "admin",
    firstname: "admin",
    city: "Valence",
    mail: "admin@admin",
    password: "admin",
    isCoach: true,
    role: "admin",
    idGym: 1
  },
  {
    id: 2,
    name: "Doe",
    firstname: "John",
    city: "Valence",
    mail: "jhon@doe",
    password: "john",
    isCoach: true,
    role: "user",
    idGym: 1
  },
  {
    id: 3,
    name: "Dalton",
    firstname: "Joe",
    city: "Valence",
    mail: "joe@joe",
    password: "joe",
    isCoach: false,
    role: "user",
    idGym: 1
  }];

  createDb() {

    const gyms = [{
      id: 1,
      city: "Valence",
      zipCode: "26000",
      opening: "8:00",
      closing: "19:00"
    },
    {
      id: 2,
      city: "Aurillac",
      zipCode: "15000",
      opening: "9:00",
      closing: "18:00"
    }]

    const sessions = [{
      id: 1,
      startDate: "25-07-2023",
      endDate: "25-08-2023",
      limit: 10,
      id_theme: 1,
      id_gym: 1
    },
    {
      id: 2,
      startDate: "28-07-2023",
      endDate: "28-08-2023",
      limit: 15,
      id_theme: 2,
      id_gym: 2
    }];

    const themes = [{
      id: 1,
      name: "Zoomba"
    },
    {
      id: 2,
      name: "Musculation"
    }]

    const bookings = [{}];
    const users = this.users;

    return {
      users,
      gyms,
      themes,
      sessions,
      bookings
    };
  }

  // HTTP POST interceptor
  post(reqInfo: any) {
      if (reqInfo.id === 'login') {
        return this.authenticate(reqInfo);
      }

      return undefined;
  }

  // mocking authentication happens here
  // HTTP POST interceptor handler
  private authenticate(reqInfo: any) {

    // return an Observable response
    return reqInfo.utils.createResponse$(() => {
      console.log('HTTP POST api/login override')

      const { headers, url, req } = reqInfo

      // if request username and passord are correct
      //  return response with a JSONWebToken
      const { mail, password } = req.body;
      if (this.users.findIndex(u => u.mail === mail && u.password === password) !== -1)
        return {
          status: 200,
          headers, // reqInfo (line 30)
          url, // reqInfo (line 30)
          body: {
            token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
          }
        }

      //  otherwise return response with status code 401 (unauthorized)
      return {
        status: 401,
        headers,
        url,
        body: {
          msg: "Invalid credentials"
        }
      }
    })
  }
}
