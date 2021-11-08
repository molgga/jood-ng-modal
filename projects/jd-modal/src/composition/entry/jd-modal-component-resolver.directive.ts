import { ComponentFactoryResolver, Directive, Inject, ViewContainerRef } from '@angular/core';
import { JdModalRefToken, JdModalRef } from '../core/jd-modal.ref';

/**
 * 모달 컴포넌트 주입 처리기
 * @public
 */
@Directive({
  selector: '[jdModalComponentResolver]',
})
export class JdModalComponentResolver {
  constructor(
    private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    @Inject(JdModalRefToken) private modalRef: JdModalRef
  ) {}

  /** @internal */
  ngOnInit() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.modalRef.component);
    this.viewContainerRef.clear();
    this.viewContainerRef.createComponent(componentFactory);
  }
}
