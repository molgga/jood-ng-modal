import { ComponentFactoryResolver, Directive, Inject, ViewContainerRef } from '@angular/core';
import { JdModalRefToken, JdModalRef } from '../core';

@Directive({
  selector: '[jdModalComponentResolver]',
})
export class JdModalComponentResolver {
  constructor(
    private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    @Inject(JdModalRefToken) private modalRef: JdModalRef
  ) {}

  ngOnInit() {
    console.log('jdModalComponentResolver ngOnInit');
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.modalRef.component);
    this.viewContainerRef.clear();
    this.viewContainerRef.createComponent(componentFactory);
  }
}
