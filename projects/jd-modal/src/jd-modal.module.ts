import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { JdModalProviderComponent } from './composition/provider';
import { JdModalEntryComponent, JdModalEntryResolver, JdModalComponentResolver } from './composition/entry';

/**
 * 😎 모듈
 * @public
 */
@NgModule({
  imports: [CommonModule, BrowserModule],
  declarations: [JdModalProviderComponent, JdModalEntryComponent, JdModalEntryResolver, JdModalComponentResolver],
  exports: [JdModalProviderComponent],
})
export class JdModalModule {}
