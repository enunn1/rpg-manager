import { Routes } from "@angular/router";
import { CharacterListComponent } from "./components/character-list/character-list";
import { CharacterDetailsComponent } from "./components/character-details/character-details";

export const CHARACTER_ROUTES: Routes = [
  {
    path: '',
    component: CharacterListComponent
  },
  {
    path: ':id',
    component: CharacterDetailsComponent
  }
];