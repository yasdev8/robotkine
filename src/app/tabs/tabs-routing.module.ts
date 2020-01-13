import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import {path} from '@angular-devkit/core';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'new-traitement',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../new-traitement/new-traitement.module').then(m => m.NewTraitementPageModule)
          },
          {
            path: 'question',
            children: [
              {
                path: '',
                loadChildren: () =>
                    import('../question-traitement/question-traitement.module').then(m => m.QuestionTraitementPageModule)
              }
            ]
          },
          {
            path: 'question2',
            children: [
              {
                path: '',
                loadChildren: () =>
                    import('../question2-traitement/question2-traitement.module').then(m => m.Question2TraitementPageModule)
              }
            ]
          }
        ]
      },
      {
        path: 'traitements',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../traitements/traitements.module').then(m => m.TraitementsPageModule)
          },
          {
            path: 'detail',
            children: [
              {
                path: '',
                loadChildren: () =>
                    import('../detail-traitement/detail-traitement.module').then(m => m.DetailTraitementPageModule)
              }
            ]
          }
        ]
      },
      {
        path: 'soins',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../soins/soins.module').then(m => m.SoinsPageModule)
          },
          {
            path: 'detail',
            children: [
              {
                path: '',
                loadChildren: () =>
                    import('../detail-soin/detail-soin.module').then(m => m.DetailSoinPageModule)
              }
            ]
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/traitements',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/traitements',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
