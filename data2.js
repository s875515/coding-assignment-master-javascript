const { Person } = require('./person');

const alice = new Person(0, 'Alice');
const bob = new Person(1, 'Bob');
const carlos = new Person(2, 'Carlos');
const carol = new Person(3, 'Carol');
const charlie = new Person(4, 'Charlie');
const chuck = new Person(5, 'Chuck');
const dave = new Person(6, 'Dave');
const eve = new Person(7, 'Eve');
const mallory = new Person(8, 'Mallory');
const peggy = new Person(9, 'Peggy');
const trent = new Person(10, 'Trent');
const victor = new Person(11, 'Victor');
const walter = new Person(12, 'Walter');

const a_team = new Person(90, 'The A-Team', [alice, bob, carlos]);
const b_team = new Person(91, 'The B-Team', [peggy, trent, victor, bob]);
const c_team = new Person(92, 'The C-Team', [charlie, eve, a_team]);

const people = [alice, bob, carlos, carol, charlie, chuck, dave, eve, mallory,
    peggy, trent, victor, walter, a_team, b_team, c_team];

module.exports = {
    alice,
    bob,
    carlos,
    carol,
    charlie,
    chuck,
    dave,
    eve,
    mallory,
    peggy,
    trent,
    victor,
    walter,
    a_team,
    b_team,
    c_team,
    people
}
