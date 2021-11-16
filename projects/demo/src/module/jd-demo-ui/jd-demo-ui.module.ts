import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightModule, HighlightOptions, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import {
  H1Component,
  H2Component,
  H3Component,
  H4Component,
  PComponent,
  QuoteComponent,
  BlockQuoteComponent,
} from './composition/typography';
import {
  HeadlineComponent,
  HeadlineDsComponent,
  SectionComponent,
  HsplitComponent,
  PartitionComponent,
} from './composition/panel';
import { ImageBoxComponent, ImageBgComponent } from './composition/image';
import { CodeBoxComponent, CodeViewComponent, CodeCollapseComponent } from './composition/code';

const declarations = [
  HeadlineComponent,
  HeadlineDsComponent,
  SectionComponent,
  HsplitComponent,
  PartitionComponent,
  H1Component,
  H2Component,
  H3Component,
  H4Component,
  PComponent,
  QuoteComponent,
  BlockQuoteComponent,
  ImageBoxComponent,
  ImageBgComponent,
  CodeBoxComponent,
  CodeViewComponent,
  CodeCollapseComponent,
];

const provideHighlightJs = {
  provide: HIGHLIGHT_OPTIONS,
  useValue: <HighlightOptions>{
    coreLibraryLoader: () => import('highlight.js/lib/core'),
    lineNumbersLoader: () => {
      /* @ts-ignore */
      return import('highlightjs-line-numbers.js'); // Optional, only if you want the line numbers
    },
    languages: {
      typescript: () => import('highlight.js/lib/languages/typescript'),
      css: () => import('highlight.js/lib/languages/css'),
      xml: () => import('highlight.js/lib/languages/xml'),
    },
  },
};

@NgModule({
  imports: [CommonModule, HighlightModule],
  declarations: declarations,
  exports: declarations,
  providers: [provideHighlightJs],
})
export class JdDemoUiModule {}
