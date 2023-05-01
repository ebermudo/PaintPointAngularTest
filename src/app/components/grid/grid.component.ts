import { Component, Input, OnInit } from '@angular/core';
import { DataSource } from 'src/app/interfaces/datasource.interface';
import { User } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent  implements OnInit {
  @Input() users: User[] = [];
  @Input() dataSource: DataSource = {} as DataSource;
  public count = 0;
  public itemsPerPage = 5;
  public currentPage = 1;
  public selectedUser: User = {} as User;
  public isModalOpen = false;
  constructor() { }

  ngOnInit() {}

  public onChange(event: any): void {
    this.currentPage = event;
  }

  public openModal(user: User) {
    this.selectedUser = user;
    this.selectedUser.country = this.dataSource.country.filter((count) => {
      return count.id === this.selectedUser.countryId;
    })
    .map((country) => { return country.description})[0];

    this.selectedUser.language = this.dataSource.language.filter((lang) => {
      return lang.id === this.selectedUser.countryId;
    })
    .map((language) => { return language.description})[0];

    this.selectedUser.sexDesc = this.dataSource.sex.filter((sex) => {
      return sex.key === this.selectedUser.sex;
    })
    .map((sex) => { return sex.description })[0];
    this.isModalOpen = true;
  }

}
