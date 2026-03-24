"use strict";
import { User } from "./User.js";

export class Subscriber extends User {
  #pages;
  #groups;
  #canMonetize;

  constructor(id, fullName, userName, email, pages, groups, canMonetize) {
    super(id, fullName, userName, email);
    this.pages = pages;
    this.groups = groups;
    this.canMonetize = canMonetize;
  }
}
