import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/user.interface';
import { DataSource } from '../interfaces/datasource.interface';

@Injectable({
  providedIn: 'root'
})
export class apiCall {
  constructor(private http: HttpClient) {}

  public async getUsers(): Promise<User[]> {
    let result: User[] = [];
    this.http.get(environment.apiUrl)
    .subscribe((users: any) => {
        users.population.person.forEach((person: any) => {
            result.push({
                id: person.id,
                name: person.name,
                surname: person.surname,
                surname2: person.surname2,
                sex: person.sex,
                countryId: person.countryId,
                phone: person.phone,
                dateBirthday: person.datebirthday,
                lastModification: person.lastModification,
                country: '',
                language: '',
                sexDesc: ''
            } as User);
        });
    });
    return result;
  }

  public getDatasource() {
    return this.http.get(environment.apiUrlDataSource);
  }
}