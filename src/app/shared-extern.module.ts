import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import {BidiModule} from '@angular/cdk/bidi';
import {DxDataGridModule} from 'devextreme-angular/ui/data-grid';
import {DxChartModule} from 'devextreme-angular/ui/chart';
import {DxTreeViewModule} from 'devextreme-angular/ui/tree-view';
import {DxTreeListModule} from 'devextreme-angular/ui/tree-list';
import {DxTooltipModule} from 'devextreme-angular/ui/tooltip';
import {DxBoxModule} from 'devextreme-angular/ui/box';
import {DxButtonModule} from 'devextreme-angular/ui/button';
import {DxPopupModule} from 'devextreme-angular/ui/popup';
//import {DxTemplateModule} from 'devextreme-angular/core/template';
import {DxPieChartModule} from 'devextreme-angular/ui/pie-chart';
import {DxPolarChartModule} from 'devextreme-angular/ui/polar-chart';
import { DxDateBoxModule } from 'devextreme-angular/ui/date-box';
//import { DxTagBoxModule } from 'devextreme-angular';
//import { DxSelectBoxModule } from 'devextreme-angular/ui/select-box';
//  7 iducih je potrebno za dodavanje novog carinskog duga kroz grid popup
import { DxSelectBoxModule } from 'devextreme-angular/ui/select-box';
//import { DxNumberBoxModule } from 'devextreme-angular/ui/number-box';
//import { DxFormModule } from 'devextreme-angular/ui/form';
//import { DxTextBoxModule } from 'devextreme-angular/ui/text-box';
//import { DxScrollViewModule } from 'devextreme-angular/ui/scroll-view';
//import { DxValidatorModule } from 'devextreme-angular/ui/validator';
//import { DxValidationSummaryModule } from 'devextreme-angular/ui/validation-summary';
//import { DxTextAreaModule } from 'devextreme-angular/ui/text-area';
import {   DxNumberBoxModule  } from 'devextreme-angular/ui/number-box';
import { DxTextBoxModule } from 'devextreme-angular/ui/text-box';
import {  DxScrollViewModule  } from 'devextreme-angular/ui/scroll-view';
import {  DxValidatorModule } from 'devextreme-angular/ui/validator';
import { DxValidationSummaryModule } from 'devextreme-angular/ui/validation-summary';
import { DxTextAreaModule } from 'devextreme-angular/ui/text-area';
import { DxLookupModule } from 'devextreme-angular/ui/lookup';
import { DxFormModule } from "devextreme-angular/ui/form";
import { DxListModule } from "devextreme-angular/ui/list";
import { FileUploadModule } from 'ng2-file-upload';
import { DxSwitchModule } from "devextreme-angular/ui/switch";



import { 
  MatSidenavModule
  , MatCardModule
  , MatMenuModule
  , MatCheckboxModule
  , MatIconModule
  , MatButtonModule
  , MatToolbarModule
  , MatTabsModule
  , MatListModule
  , MatSlideToggleModule
  , MatSelectModule
  , MatProgressBarModule
  , MatSnackBarModule, 
  MatDialogModule,
  MatInputModule
  ,MatAutocompleteModule,
  MatFormFieldModule
} from '@angular/material';

import {MatTooltipModule} from '@angular/material/tooltip';
import {MatExpansionModule} from '@angular/material/expansion';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
//import { DxProgressBarModule } from "devextreme-angular/ui/progress-bar";
import { DxFileUploaderModule } from "devextreme-angular/ui/file-uploader";
import { DxCheckBoxModule } from 'devextreme-angular/ui/check-box';
import { DxAutocompleteModule } from 'devextreme-angular/ui/autocomplete';

@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    MatCardModule,
    MatMenuModule,
    MatCheckboxModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatTabsModule,
    MatListModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatProgressBarModule,
    MatFormFieldModule,
    FlexLayoutModule,
    BidiModule

    ,MatSnackBarModule,MatExpansionModule,MatRadioModule
    ,FileUploadModule

    // MatChipsModule,
    // DxDataGridModule
		// , MatTabsModule
		// , MatCheckboxModule
		// , MatTooltipModule
		// , MatAutocompleteModule
		// , MatSidenavModule
		// , MatSlideToggleModule
		// , MatSnackBarModule
		// , MatCardModule
		// , MatSelectModule
		// , MatButtonModule
		, MatInputModule
    , MatDialogModule
    , MatAutocompleteModule
    , MatTooltipModule
		// , MatRadioModule
    // , MatIconModule
      , DxLookupModule 
    ,DxSwitchModule
   , DxListModule
    , DxDataGridModule
    , DxTreeViewModule
    , DxTreeListModule 
    , DxTooltipModule
    , DxBoxModule
    , DxButtonModule
    , DxPopupModule
  //  , DxTemplateModule
      ,DxTextAreaModule, DxSelectBoxModule, DxNumberBoxModule, DxFormModule, DxTextBoxModule, DxScrollViewModule, DxValidatorModule, DxValidationSummaryModule
    , DxPieChartModule
    , DxPolarChartModule
   // ,DxProgressBarModule
    , DxFileUploaderModule
    //, DxTextBoxModule
    , DxTextAreaModule
  //  , DxAccordionModule
  //  , DxCheckBoxModule
  //  , DxSliderModule
    //, DxTagBoxModule
    , DxChartModule
  ,DxDateBoxModule,
    DxCheckBoxModule
    ,DxAutocompleteModule
    ,FormsModule,ReactiveFormsModule 
  ]
  , exports:  [
    MatSidenavModule,//
    MatCardModule,//
    MatMenuModule,//
    MatCheckboxModule,//
    MatIconModule,//
    MatButtonModule,
    MatToolbarModule,
    MatTabsModule,//
    MatListModule,//
    MatSlideToggleModule,//
    MatSelectModule,//
    MatProgressBarModule,//
    FlexLayoutModule,//
    BidiModule

    ,FileUploadModule
    
    , MatSnackBarModule,MatExpansionModule,MatRadioModule

    , MatDialogModule
    , MatInputModule
    , MatAutocompleteModule
    , MatTooltipModule
    , DxListModule
  //  ,DxProgressBarModule
    , DxFileUploaderModule
    , DxDataGridModule
    , DxTreeViewModule
    , DxTreeListModule 
    , DxTooltipModule
    , DxBoxModule
    , DxButtonModule
    , DxPopupModule
   // , DxTemplateModule
      , DxTextAreaModule , DxSelectBoxModule, DxNumberBoxModule, DxFormModule, DxTextBoxModule, DxScrollViewModule, DxValidatorModule, DxValidationSummaryModule 
    , DxPieChartModule
    , DxPolarChartModule
  //  , DxTextBoxModule
    , DxTextAreaModule
  //  , DxAccordionModule
  //  , DxCheckBoxModule
  //  , DxSliderModule
  //  , DxTagBoxModule
    , DxChartModule
   ,DxDateBoxModule,
    DxCheckBoxModule
    ,DxSwitchModule
    , DxLookupModule 
    ,DxAutocompleteModule

    ,FormsModule,ReactiveFormsModule 
  ]
})
export class SharedExternModule { }
