import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { JdModalService } from '@jood/ng-modal';
import { SampleModalComponent, SampleModalResult, SampleModalData } from '../sample-modal/sample-modal.component';

@Component({
  selector: 'sample-container',
  templateUrl: './for-demo.html',
  styleUrls: ['./for-demo.scss'],
})
export class SampleContainerComponent implements OnInit {
  constructor(private modalService: JdModalService) {}

  ngOnInit() {}

  passName: string = 'Foo';
  passCount: number = 1;
  resultData!: SampleModalResult;

  openModal() {
    this.modalService
      .open<SampleModalResult, SampleModalData>({
        component: SampleModalComponent,
        overlayClose: true,
        data: {
          passName: this.passName,
          passCount: this.passCount,
        },
      })
      .observeClosed()
      .pipe(take(1))
      .subscribe((result) => {
        if (result) {
          this.resultData = result;
        } else {
          console.log(result, 'result === undefined // overlayClose? history back? ...');
        }
      });
  }
}
