const data = require('./data1');
// const data = require('./data2');
// const data = require('./data3');

const exercise1 = (person, people) => {
  const output = [];
  for (const key in data) {
    const value = data[key];
    if (value.is_team && get_people(value, [], {}).indexOf(person) > -1) {
      output.push(value.displayname);
    }
  }
  return output;
}

const get_people = (team, members = [], record = {}) => {
  if (record[team.id]) {
    return [];
  }

  record[team.id] = true;
  for (membersValue of team.members) {
    if (membersValue.is_team) {
      members = members.concat(get_people(membersValue, members = [], record));
    } else {
      members.push(membersValue);
    }
  }
  return members;
}

console.log(exercise1(data.alice, data.people))
console.log(get_people(data.a_team).sort())