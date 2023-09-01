import { Component } from '@angular/core';
import { User } from '../user';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent {
  [x: string]: any;
  userList: User[] = [];
  first = 0;
  rows = 10;
  constructor(private Service: ServiceService) {}
  ngOnInit(): void {
      // Get Users from UserService
      this.userList = this.Service.getUsers();
  }
  //****************PrimeNG DataTable Pagination method Start*********************** */
  //***************Reference: https://primefaces.org/primeng/showcase/#/table/page********** */
  next() {
      this.first = this.first + this.rows;
  }
  prev() {
      this.first = this.first - this.rows;
  }
  reset() {
      this.first = 0;
  }
  isLastPage(): boolean {
      return this.userList ? this.first === (this.userList.length - this.rows) : true;
  }
  isFirstPage(): boolean {
      return this.userList ? this.first === 0 : true;
  }
  //****************PrimeNG DataTable Pagination Method End*********************** */
  // ********************User To Remove User from User List*************************/
  remove(id: number) {
      this.Service.removeUser(id);
      this.userList = this.Service.getUsers();
  }
}

