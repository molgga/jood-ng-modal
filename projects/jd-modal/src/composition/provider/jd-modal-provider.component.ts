import { Component, HostBinding, OnInit } from '@angular/core';
import { JdModalRef } from '../core/jd-modal.ref';
import { JdModalProviderService } from './jd-modal-provider.service';

@Component({
  providers: [JdModalProviderService],
  selector: 'jd-modal-provider',
  templateUrl: './jd-modal-provider.component.html',
  styleUrls: ['./jd-modal-provider.component.scss'],
})
export class JdModalProviderComponent implements OnInit {
  constructor(private providerService: JdModalProviderService) {}

  ngOnInit() {
    this.providerService.init();
  }

  get modalList() {
    return this.providerService.modalList;
  }

  @HostBinding('class')
  get hostClass() {
    return this.providerService.classes;
  }

  trackModalId(index: number, modal: JdModalRef) {
    return modal.id;
  }
}
