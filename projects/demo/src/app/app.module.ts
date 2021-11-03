import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JdModalModule } from '@jood/ng-modal';
// import { JdModalProviderComponent } from '@jood/ng-modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, JdModalModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
