const org = `CREATE TABLE IF NOT EXISTS org (
  org_id serial PRIMARY KEY,
  org_name varchar(50)
);`;
const usertype = `CREATE TABLE IF NOT EXISTS usertype (
  usertype_id INT PRIMARY KEY,
  usertype varchar(25)
);`;
const location = `CREATE TABLE IF NOT EXISTS location (
    location_id serial PRIMARY KEY,
    location_name varchar(50)
  );`;
const users = `CREATE TABLE IF NOT EXISTS users (
    user_id serial PRIMARY KEY ,
    username varchar(25),
    email varchar(100) UNIQUE,
    password varchar(255),
    phone varchar(15),
    org_id INT references org(org_id),
    user_type INT references usertype(usertype_id) DEFAULT 3,
    approved INT  DEFAULT 0,
    resetpasswordtoken varchar(255),
    resetpasswordexpires varchar(255)
  );`;
const trip = `CREATE TABLE IF NOT EXISTS trip (
    trip_id serial PRIMARY KEY,
    location_from_id INT references location(location_id),
    location_to_id INT references location(location_id),
    time varchar(30),
    date varchar(30),
    details varchar(255),
    user_id INT references users(user_id),
    available_seats int
  );`;
const usertrip = `CREATE TABLE IF NOT EXISTS usertrip (
  id serial PRIMARY KEY,
  user_id INT references users (user_id),
  trip_id INT references trip(trip_id)
);`;

const approvedColumn =`DO $$
    BEGIN
        BEGIN
            ALTER TABLE usertrip ADD COLUMN user_approved INT  DEFAULT 0;
        EXCEPTION
              WHEN duplicate_column
            THEN RAISE NOTICE
            'column user_approved
            already exists in usertrip';
        END;
    END;
$$ ;
`
const sequence = 'ALTER SEQUENCE trip_trip_id_seq RESTART WITH 10000;';
const trip_status = `DO $$
    BEGIN
        BEGIN
            ALTER TABLE trip ADD COLUMN  trip_status INT DEFAULT 0;
        EXCEPTION
              WHEN duplicate_column
            THEN RAISE NOTICE
            'column trip_status
            already exists in trip';
        END;
    END;
$$ ;
`
module.exports = {
  users,
  trip,
  usertrip,
  org,
  location,
  usertype,
  approvedColumn,
  sequence,
  trip_status
}
