import { Routes } from "@angular/router";
import { SessionListComponent } from "./components/session-list/session-list";
import { SessionDetailsComponent } from "./components/session-details/session-details";

export const SESSION_ROUTES: Routes = [
  {
    path: '',
    component: SessionListComponent
  },
  {
    path: ':id',
    component: SessionDetailsComponent
  }
];