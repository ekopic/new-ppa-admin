import { Injectable } from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  name: string;
  type?: string;
}

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children: ChildrenItems[];
}

const MENUITEMS = [
  {
    state: '/',
    name: 'HOME',
    type: 'link',
    icon: 'home',
    children: []
  },
  {
    state: 'people',
    name: 'People',
    type: 'sub',
    icon: 'people',
    children: [
      {state: 'users', name: 'Users'},
      {state: 'players', name: 'Players'},
      {state: 'coaches', name: 'Coaches'}
    ]
  },
  {
    state: 'programs', //http://primer.nyasha.me/docs
    name: 'Programs',
    type: 'sub',
    icon: 'local_library',
    children: [
      {state: 'teams', name: 'Teams'},
      {state: 'clinics', name: 'Clinics'},
      {state: 'trainings', name: 'Trainings'},
      {state: 'tryouts', name: 'Tryouts'}
    ]
  },
  {
    state: 'schedule',
    name: 'Schedule',
    type: 'link',
    icon: 'insert_invitation',
    children: []
  },
  {
    state: 'payments',
    name: 'Payments',
    type: 'link',
    icon: 'attach_money',
    children: []
  },
  {
    state: 'communication', //http://primer.nyasha.me/docs
    substate: 'communicationHome',
    name: 'Communications',
    type: 'sublink',
    icon: 'email',
    children: []
  },
];

@Injectable()
export class MenuService {
  getAll(): Menu[] {
    return MENUITEMS;
  }

  add(menu: Menu) {
    MENUITEMS.push(menu);
  }
}
