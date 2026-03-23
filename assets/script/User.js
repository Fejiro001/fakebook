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
}
