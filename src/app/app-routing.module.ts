import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TabsPage } from '../app/tabs/tabs.page';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder',
    pathMatch: 'full'
  },
  {
    path: 'folder',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'instalacao',
    loadChildren: () => import('./instalacao/instalacao.module').then( m => m.InstalacaoPageModule)
  },
  {
    path: 'layout',
    loadChildren: () => import('./layout/layout.module').then( m => m.LayoutPageModule)
  },
  {
    path: 'layout-header-footer',
    loadChildren: () => import('./layout-header-footer/layout-header-footer.module').then( m => m.LayoutHeaderFooterPageModule)
  },
  {
    path: 'layout-menu',
    loadChildren: () => import('./layout-menu/layout-menu.module').then( m => m.LayoutMenuPageModule)
  },
  {
    path: 'layout-split-pane',
    loadChildren: () => import('./layout-split-pane/layout-split-pane.module').then( m => m.LayoutSplitPanePageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'tab1',
    loadChildren: () => import('./tab1/tab1.module').then( m => m.Tab1PageModule)
  },
  {
    path: 'tab2',
    loadChildren: () => import('./tab2/tab2.module').then( m => m.Tab2PageModule)
  },
  {
    path: 'tab3',
    loadChildren: () => import('./tab3/tab3.module').then( m => m.Tab3PageModule)
  },





  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: () => import('../app/tab1/tab1.module').then( m => m.Tab1PageModule)
          },
        ],
      },
      {
        path: '',
        redirectTo: '/app/tab1',
        pathMatch: 'full',
      },
    ],
  },

  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: () => import('../app/tab2/tab2.module').then( m => m.Tab2PageModule)
          },
        ],
      },
      {
        path: '',
        redirectTo: '/app/tab2',
        pathMatch: 'full',
      },
    ],
  },

  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: () => import('../app/tab3/tab3.module').then( m => m.Tab3PageModule)
          },
        ],
      },
      {
        path: '',
        redirectTo: '/app/tab3',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'layout-grid',
    loadChildren: () => import('./layout-grid/layout-grid.module').then( m => m.LayoutGridPageModule)
  }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
