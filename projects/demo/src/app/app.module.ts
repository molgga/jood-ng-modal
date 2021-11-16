import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { JdModalModule } from '@jood/ng-modal';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JdDemoUiModule } from '../module/jd-demo-ui/jd-demo-ui.module';

@NgModule({
  declarations: [AppComponent],
  imports: [CommonModule, BrowserModule, AppRoutingModule, JdDemoUiModule, JdModalModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
