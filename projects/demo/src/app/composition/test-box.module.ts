import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { TestBoxComponent } from './test-box/test-box.component';
import { TestBox2Component } from './test-box2/test-box2.component';
import { TestBox3Component } from './test-box3/test-box3.component';

@NgModule({
  declarations: [TestBoxComponent, TestBox2Component, TestBox3Component],
  imports: [CommonModule, BrowserModule, FormsModule],
  providers: [],
})
export class TestBoxModule {}
