CREATE TABLE cities(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  department_code CHAR(3) NOT NULL,
  insee_code CHAR(5) DEFAULT NULL,
  zip_code CHAR(5) DEFAULT NULL,
  name CHAR(255) NOT NULL,
  slug CHAR(255) NOT NULL,
  gps_lat double(16,14) NOT NULL,
  gps_lng double(17,14) NOT NULL
);