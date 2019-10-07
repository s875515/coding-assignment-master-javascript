class Person {
  constructor(id, displayname, members = []) {
    this.id = id;
    this.displayname = displayname;
    this.members = members;
    this.is_team = members.length !== 0
  }
}

module.exports = {
  Person
}