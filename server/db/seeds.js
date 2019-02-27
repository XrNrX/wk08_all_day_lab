use guests;
db.dropDatabase();

db.bookings.insertMany([
  {
    name: "Stuart Bell",
    email: "IAmAnEmail@Googlemail.com",
    checkedIn: false
  },
  {
    name: "Jenny Bell",
    email: "IAmAnEmail2@Googlemail.com",
    checkedIn: false

  },
  {
    name: "Smudge the Furry White Cat",
    email: "CatsDontNeedEmails@Googlemail.com",
    checkedIn: True

  },
  {
    name: "Random Man",
    email: "IAmNotCreepyHonest@Googlemail.com",
    checkedIn: True

  }

]);
