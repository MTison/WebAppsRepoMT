import { MainboardComponent } from '../mainboard/mainboard.component';
import { AppComponent } from '../app.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from '../login/login.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { appRoutes } from '../app-routing.module';
import { fakeAsync, TestBed } from '@angular/core/testing';
import { NgxPermissionsModule } from 'ngx-permissions';
import { AlertService } from '../services/alert.service';


describe('AlertService: functions', () => {
    let service : AlertService;
    let router: Router;
    let fixture;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule.withRoutes(appRoutes),
                FormsModule,
                NgxPermissionsModule.forChild(),
            ],
            declarations: [
                LoginComponent,
                MainboardComponent,
                AppComponent
            ],
            schemas: [NO_ERRORS_SCHEMA],
        });

        router = TestBed.get(Router);
        service = new AlertService(router);

        fixture = TestBed.createComponent(AppComponent);
        router.initialNavigation();
    });

    it("succes() should give a good alert", (done: DoneFn) => {
        service.success("Good test alert");
        service.getMessage().subscribe(value => {
            expect(value).toBe("Good test alert");
            done();
        })
    })

    it("error() should give a bad alert", (done: DoneFn) => {
        service.error("bad test alert");
        service.getMessage().subscribe(value => {
            expect(value).toBe("bad test alert");
            done();
        })
    })

})