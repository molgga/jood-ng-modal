import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { JdModalModule } from '@jood/ng-modal';
import { TestBoxModule } from './composition/test-box.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [CommonModule, BrowserModule, AppRoutingModule, TestBoxModule, JdModalModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
