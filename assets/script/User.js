"use strict";

export class User {
  #id;
  #name;
  #userName;
  #email;

  constructor(id, fullName, userName, email) {
    this.id = id;
    this.name = fullName;
    this.userName = userName;
    this.email = email;
  }

  set id(id) {
    this.#id = id;
  }
  set name(name) {
    this.#name = name;
  }
  set userName(userName) {
    this.#userName = userName;
  }
  set email(email) {
    this.#email = email;
  }

  get id() {
    return this.#id;
  }
  get name() {
    return this.#name;
  }
  get userName() {
    return this.#userName;
  }
  get email() {
    return this.#email;
  }

  getInfo() {
    return { name: this.#name, userName: this.#userName, email: this.#email };
  }
}
