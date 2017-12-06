import { Router, RoutesRecognized } from '@angular/router';
import 'rxjs/add/operator/pairwise';

import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private router: Router) {
    this.router.events
      .pairwise()
      .subscribe((e: any[]) => {
        //console.log(e[0].urlAfterRedirects);
        localStorage.setItem('previousUrl', e[0].urlAfterRedirects);
      });
  }
}
