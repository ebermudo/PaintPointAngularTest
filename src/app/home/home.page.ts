import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { apiCall } from '../services/apiCall.service';
import { Subscription } from 'rxjs';
import { DataSource } from '../interfaces/datasource.interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy{
  public users: User[] = [];
  public usersFiltered: User[] = [];
  public dataSource: DataSource = {} as DataSource;
  userSubscribe: Subscription | null = null;
  constructor(private apiService: apiCall) {}

  ngOnInit(): void {
      this.userSubscribe = this.apiService.getDatasource()
      .subscribe((data: any) => {
        this.dataSource = data.data;
      });
      this.apiService.getUsers()
      .then((users) => {
        this.users = users;
        this.usersFiltered = this.users;
      })
      .catch((error) => console.log(error));
  }

  ngOnDestroy(): void {
      this.userSubscribe?.unsubscribe();
  }

  public filter(event: string) {
    this.usersFiltered = this.users.filter((user) => {
      return user.name.toLowerCase().startsWith(event.toLowerCase())
      || user.surname.toLowerCase().startsWith(event.toLowerCase())
      || user.surname2.toLowerCase().startsWith(event.toLowerCase())
      || user.phone.startsWith(event)
      || user.sex.startsWith(event);
    });
  }
}
