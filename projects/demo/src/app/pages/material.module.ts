import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [],
  imports: [MatFormFieldModule, MatInputModule],
  providers: [],
  exports: [MatButtonModule, MatTabsModule, MatFormFieldModule, MatInputModule],
})
export class MaterialModule {}
