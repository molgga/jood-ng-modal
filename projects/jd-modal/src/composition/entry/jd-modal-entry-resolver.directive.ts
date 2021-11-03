import { ComponentFactoryResolver, Directive, Injector, Input, SimpleChanges, ViewContainerRef } from '@angular/core';
import { JdModalRefToken, JdModalRef } from '../core';

@Directive({
  selector: '[jdModalEntryResolver]',
})
export class JdModalEntryResolver {
  constructor(private viewContainerRef: ViewContainerRef, private componentFactoryResolver: ComponentFactoryResolver) {}

  @Input() modalRef!: JdModalRef;
  @Input() modalIndex: number = -1;

  ngOnInit() {
    console.log('JdModalEntryResolver ngOnInit');
    const providers = [{ provide: JdModalRefToken, useValue: this.modalRef }];
    const injector = Injector.create({ providers });
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.modalRef.entryComponent);
    this.modalRef.setIndex(this.modalIndex);
    this.viewContainerRef.clear();
    this.viewContainerRef.createComponent(componentFactory, 0, injector);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.modalIndex) {
      this.modalRef.setIndex(changes.modalIndex.currentValue);
    }
  }
}
