import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '**', redirectTo: '/chess' },
    { path: 'chess', loadChildren: './chess/chess.module#ChessModule' }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
  providers: []
})
export class AppRoutingModule { }
