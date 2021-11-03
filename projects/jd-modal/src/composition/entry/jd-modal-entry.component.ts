import { Component, ElementRef, HostBinding, Inject, OnInit, ViewChild } from '@angular/core';
import { JdModalRefToken } from '../core';
import { JdModalRef } from '../core/jd-modal.ref';
import { JdModalEntryService } from './jd-modal-entry.service';

@Component({
  providers: [JdModalEntryService],
  selector: 'jd-modal-entry',
  templateUrl: './jd-modal-entry.component.html',
  styleUrls: ['./jd-modal-entry.component.scss'],
})
export class JdModalEntryComponent implements OnInit {
  constructor(
    @Inject(JdModalRefToken) private modalRef: JdModalRef,
    private entryService: JdModalEntryService,
    private refModalContainer: ElementRef<HTMLElement>
  ) {}

  ngOnInit() {
    console.log('JdModalEntryComponent ngOnInit');
  }

  ngAfterViewInit() {
    this.entryService.setHostElement(this.refModalContainer.nativeElement);
    this.entryService.setPanelElement(this.refModalPanel.nativeElement);
    this.entryService.mounted();
  }

  ngOnDestroy() {
    this.entryService.destroy();
  }

  @ViewChild('refModalPanel') refModalPanel!: ElementRef<HTMLElement>;

  @HostBinding('class')
  get hostClass() {
    return this.entryService.classes;
  }

  @HostBinding('style')
  get hostStyle() {
    return this.entryService.styleSet.modal;
  }

  @HostBinding('tabindex') tabIndex = 0;

  get styles() {
    return this.entryService.styleSet;
  }

  onOverlayClick(evt: MouseEvent) {
    this.entryService.overlayClick(evt);
  }
}
