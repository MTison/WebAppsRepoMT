import { AlertService } from '../../services/alert.service';
import { UserService } from '../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.css']
})
export class AllusersComponent implements OnInit {
  allUsers: User[] = [];
  searchUsers: User[] = [];

  constructor(private alertService: AlertService,private userService: UserService) { }

  ngOnInit() {
    this.geefAlleUsers();
  }

  geefAlleUsers() {
    this.userService.getAllUsers().subscribe(
      users => {
        this.allUsers.length = 0;
        users.forEach(user => {
          if (user.role != "ADMIN")
            this.allUsers.push(user);
        });
        this.searchUsers = this.allUsers;
        this.sortByfirstName();
      }
    );
  }

  deleteUser(id: string) {
    let user = this.allUsers.find(user => user._id == id);
    this.userService.delete(id).subscribe(
      data => {
        this.alertService.success("User '" + user.username + "' was deleted");
        this.geefAlleUsers();
      },
      error => {
        this.alertService.error("Deletion failed: "+error);
      }
    );
  }

  filterUsers(searchValue) {
    this.searchUsers = [];
    if (searchValue != "") {
      this.allUsers.forEach(element => {
        if (element.firstName.toUpperCase().indexOf(searchValue.toUpperCase()) > -1) {
          this.searchUsers.push(element);
        }
      });
    } else {
      this.searchUsers = this.allUsers;
    }
  }

  //Sort function fot the students in the current class
  sortByfirstName() {
    this.allUsers.sort((a: User, b: User) => {
      if (a.firstName < b.firstName) {
        return -1;
      } else if (a.firstName > b.firstName) {
        return 1;
      } else {
        return 0;
      }
    })
  }
}
