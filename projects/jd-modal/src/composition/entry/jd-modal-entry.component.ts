import { Component, ElementRef, HostBinding, Inject, OnInit, ViewChild } from '@angular/core';
import { JdModalRefToken, JdModalRef } from '../core/jd-modal.ref';
import { JdModalEntryService } from './jd-modal-entry.service';

@Component({
  providers: [JdModalEntryService],
  selector: 'jd-modal-entry',
  templateUrl: './jd-modal-entry.component.html',
  styleUrls: ['./jd-modal-entry.component.scss'],
})
export class JdModalEntryComponent {
  constructor(
    @Inject(JdModalRefToken) private modalRef: JdModalRef,
    private entryService: JdModalEntryService,
    private refModalContainer: ElementRef<HTMLElement>
  ) {}

  ngAfterViewInit() {
    this.entryService.setHostElement(this.refModalContainer.nativeElement);
    this.entryService.setPanelElement(this.refModalPanel.nativeElement);
    this.entryService.mounted();
  }

  ngOnDestroy() {
    this.entryService.destroy();
  }

  @ViewChild('refModalPanel') refModalPanel!: ElementRef<HTMLElement>;
  @HostBinding('tabindex') tabIndex = 0;

  @HostBinding('class')
  get hostClass() {
    console.log('$$$$$ hostClass');
    return this.entryService.classes;
  }

  @HostBinding('style')
  get hostStyle() {
    console.log('##### hostStyle');
    return this.entryService.styleSet.modal;
  }

  get styles() {
    console.log('@@@@@ styles');
    return this.entryService.styleSet;
  }

  onOverlayClick(evt: MouseEvent) {
    this.entryService.overlayClick(evt);
  }
}
