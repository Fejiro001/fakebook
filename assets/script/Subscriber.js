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

  set pages(pages) {
    this.#pages = pages;
  }
  set groups(groups) {
    this.#groups = groups;
  }
  set canMonetize(canMonetize) {
    this.#canMonetize = canMonetize;
  }

  get pages() {
    return this.#pages;
  }
  get groups() {
    return this.#groups;
  }
  get canMonetize() {
    return this.#canMonetize;
  }
}
