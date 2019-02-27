use guests;
db.dropDatabase();

db.bookings.insertMany([
  {
    name: "Stuart Bell",
    email: "IAmAnEmail@Googlemail.com"
  },
  {
    name: "Jenny Bell",
    email: "IAmAnEmail2@Googlemail.com"
  },
  {
    name: "Smudge the Furry White Cat",
    email: "CatsDontNeedEmails@Googlemail.com"
  },
  {
    name: "Random Man",
    email: "IAmNotCreepyHonest@Googlemail.com"
  }

]);
