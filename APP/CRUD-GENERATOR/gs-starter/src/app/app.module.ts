





import { TestModule } from './test/test.module';
import { GsNavModule } from './gs-nav/gs-nav.module';

import {APP_INITIALIZER, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule, MatSelectModule, MatCardModule, MatInputModule, MatAutocompleteModule, MatFormFieldModule, MatDatepickerModule, MatNativeDateModule, MatListModule, MatProgressSpinnerModule, MatIconModule, MatButtonModule, MatSidenavModule, MatTabsModule } from '@angular/material';
import { EspeceModule } from './espece/espece.module';
import { ParcelleModule } from './parcelle/parcelle.module';
import {UserModule} from "./rh/user/user.module";
import {GroupModule} from "./rh/group/group.module";
import {UserGroupModule} from "./rh/user-group/user-group.module";
import {ConfigurationService} from "./configuration/configuration.service";



@NgModule({

  declarations: [
    AppComponent, NavComponent
  ],
  imports: [


    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatListModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,

    UserModule,
    GsNavModule,
    TestModule,
    UserGroupModule,

    GroupModule,

    EspeceModule,

    ParcelleModule,

  ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: (configService: ConfigurationService) => () => configService.loadConfigurations(),
    deps: [ConfigurationService],
    multi: true
  }],

  bootstrap: [AppComponent]
})
export class AppModule { }
