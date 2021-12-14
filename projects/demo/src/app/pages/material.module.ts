import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatListModule } from '@angular/material/list';
import { MatRippleModule } from '@angular/material/core';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [],
  imports: [MatFormFieldModule, MatInputModule, LayoutModule],
  providers: [],
  exports: [
    MatButtonModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSidenavModule,
    MatSliderModule,
    MatListModule,
    MatRippleModule,
  ],
})
export class MaterialModule {}
