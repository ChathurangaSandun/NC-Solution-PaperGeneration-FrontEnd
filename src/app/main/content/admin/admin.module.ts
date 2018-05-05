import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { FuseSharedModule } from '@fuse/shared.module';
import { CdkTableModule } from '@angular/cdk/table';

import { MatButtonModule, MatChipsModule, MatFormFieldModule, MatIconModule, MatInputModule, MatPaginatorModule, MatRippleModule, MatSelectModule, MatSortModule, MatTableModule, MatTabsModule } from '@angular/material';


import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AgmCoreModule } from '@agm/core';

import { AlgorithmComponent } from './algorithm/algorithm.component';
import { ChaptersComponent } from './chapters/chapters.component';
import { SectionsComponent } from './sections/sections.component';
import { QuestionsComponent } from './questions/questions.component';
import { ExamtypesComponent } from './examtypes/examtypes.component';
import { AlgorithmsComponent } from './algorithms/algorithms.component';

const routes = [
  {
      path     : 'admin/algorithms',
      component: AlgorithmsComponent      
  },
  {
    path     : 'admin/examtypes',
    component: ExamtypesComponent      
  },
  {
    path     : 'admin/chapters',
    component: ChaptersComponent      
  },  
  {
    path     : 'admin/sections',
    component: SectionsComponent     
  },
  {
    path     : 'admin/questions',
    component: QuestionsComponent      
  },
];


@NgModule({
  imports: [    
    RouterModule.forChild(routes),

    CdkTableModule,
    MatButtonModule,
    MatChipsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatRippleModule,
    MatSelectModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,    
    
    FuseSharedModule,
  ],
  declarations: [AlgorithmComponent, ChaptersComponent, SectionsComponent, QuestionsComponent, ExamtypesComponent, AlgorithmsComponent]
})
export class AdminModule { }
