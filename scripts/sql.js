const org = `CREATE TABLE IF NOT EXISTS org (
  org_id serial PRIMARY KEY,
  org_name varchar(50));`;
const location = `CREATE TABLE IF NOT EXISTS location (
    location_id serial PRIMARY KEY,
    location_name varchar(50)
  );`;
const users = `CREATE TABLE IF NOT EXISTS users (
    user_id serial PRIMARY KEY ,
    username varchar(25),
    email varchar(100),
    password varchar(255),
    phone varchar(15),
    org_id INT references org(org_id)
  );`;
const trip = `CREATE TABLE IF NOT EXISTS trip (
    trip_id serial PRIMARY KEY,
    location_id INT references location(location_id),
    time time,
    date date,
    user_id INT references users(user_id),
    available_seats int
  );`;
const usertrip = `CREATE TABLE IF NOT EXISTS usertrip (
  id serial PRIMARY KEY,
  user_id INT references users (user_id),
  trip_id INT references trip(trip_id)
);`;



module.exports = {
  users: users,
  trip: trip,
  usertrip: usertrip,
  org: org,
  location: location
}
