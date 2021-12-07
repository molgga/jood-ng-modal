import { isPlatformBrowser } from '@angular/common';
import { Component, HostBinding, Inject, PLATFORM_ID } from '@angular/core';
import { JdModalRef } from '../core/jd-modal.ref';
import { JdModalProviderService } from './jd-modal-provider.service';

/**
 * 기본 제공 프로바이더
 * @public
 */
@Component({
  providers: [JdModalProviderService],
  selector: 'jd-modal-provider',
  templateUrl: './jd-modal-provider.component.html',
  styleUrls: ['./jd-modal-provider.component.scss'],
})
export class JdModalProviderComponent {
  constructor(@Inject(PLATFORM_ID) platformId: Object, private providerService: JdModalProviderService) {
    if (isPlatformBrowser(platformId)) {
      this.providerService.init();
    }
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
