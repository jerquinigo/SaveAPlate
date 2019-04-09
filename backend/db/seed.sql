DROP DATABASE IF EXISTS save_a_plate;
CREATE DATABASE save_a_plate;

\c save_a_plate;

CREATE TABLE users
(
    id SERIAL PRIMARY KEY,
    email VARCHAR UNIQUE NOT NULL,
    password_digest TEXT NOT NULL,
    role INT
);

CREATE TABLE vendors
(
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    name VARCHAR UNIQUE NOT NULL,
    address_field TEXT NOT NULL,
    body TEXT,
    telephone_number VARCHAR NOT NULL
);


CREATE TABLE clients
(
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    name VARCHAR UNIQUE NOT NULL,
    address_field TEXT NOT NULL
);

CREATE TABLE food_items
(
    id SERIAL PRIMARY KEY,
    quantity INT NOT NULL,
    name VARCHAR NOT NULL,
    is_claimed BOOLEAN DEFAULT FALSE NOT NULL,
    vendor_id INT REFERENCES vendors(id),
    set_time VARCHAR NOT NULL
);

CREATE TABLE favorites
(
    id SERIAL PRIMARY KEY,
    client_id INT REFERENCES clients(id),
    vendor_id INT REFERENCES vendors(id)
);

CREATE TABLE business_hours
(
    id SERIAL PRIMARY KEY,
    vendor_id INT REFERENCES vendors(id),
    mon_start VARCHAR NOT NULL,
    mon_end VARCHAR NOT NULL,
    tues_start VARCHAR NOT NULL,
    tues_end VARCHAR NOT NULL,
    wed_start VARCHAR NOT NULL,
    wed_end VARCHAR NOT NULL,
    thur_start VARCHAR NOT NULL,
    thur_end VARCHAR NOT NULL,
    fri_start VARCHAR NOT NULL,
    fri_end VARCHAR NOT NULL,
    sat_start VARCHAR NOT NULL,
    sat_end VARCHAR NOT NULL,
    sun_start VARCHAR NOT NULL,
    sun_end VARCHAR NOT NULL
);

INSERT INTO users
    (email , password_digest, role)
VALUES
    ('kingterrace@email.com', 'kingsterrace123', 1),
    ('mauzonee@email.com', 'mauzoneinthezone', 1),
    ('flushinghousee@email.com', 'password1234', 1),
    ( 'atlanticdinerr@email.com', 'goodfood93', 1),
    ('courtsquaredinerr@yahoo.com', 'mypasswordissupersecure', 1),
    ( 'madforchickenn@hotmail.com', 'supersecretpassword', 1),
    ('gyukakuu@aol.com', 'bobblahblob3', 1),
    ('b&gclubb@gmail.com', 'b&g', 2),
    ('sabcc@gmail.com', 'sabc', 2),
    ('YMCAA@yahoo.com', 'YMCA', 2),
    ( 'Liftt@aol.com', 'Lift', 2),
    ('UMEZZ@hotmail.com', 'UMEZ', 2);

INSERT INTO vendors
    (
    user_id,
    name,
    address_field,
    body,
    telephone_number
    )
VALUES
    ( 1,
        'Kings Terrace',
        '815 Kings Hwy, Brooklyn, NY 11223',
        'The best catering hall',
        '(347) 492-6826'
    ),

    ( 2,
        'Mauzone Catering',
        '3301 20th Ave Astoria, NY 11105',
        'Shady catering hall',
        '(718) 274-1100'
    ),

    ( 3,
        'Flushing House',
        '3820 Bowne St, Flushing, NY 11354',
        'cool place',
        '(718) 762-3198'
    ),

    ( 4,
        '111-16 Atlantic Ave, South Richmond Hill, NY 11419',
        'Atlantic Diner',
        'number 1 diner',
        '(718) 849-6673'
    ),

    ( 5,
        'Court Square Diner',
        '45-30 23rd St Long Island City, NY 11101',
        'In operation since 1946, Court Square Diner stands out among the flashier restaurants and bars that have crowded into Long Island City in recent years. Not much has changed since brothers Steve and Nick Kanellos started running the joint in 1991 — the diner still serves oversized heroes and grilled cheese sandwiches 24/7.',
        '(718) 392-1222'
    ),

    ( 6,
        'Mad For Chicken',
        '157-18 Northern Blvd, Flushing, NY 11354',
        'Mad for Chicken offers a unique food experience. We believe food should be enjoyed in three ways-visual, smell, and taste. We are confident to serve food that will satisfy all three senses.',
        '(718) 321-3818'
    ),

    ( 7,
        'Gyu-Kaku Japanese BBQ',
        '4052 Main St, Flushing, NY 11354',
        'Gyu-Kaku (牛角 gyū kaku, bulls horn) is a chain of Japanese yakiniku restaurants. here are over six hundred Gyu-Kaku locations in Japan,[1] and locations have also been opened in the United States (including New York City, California, Pittsburgh, Chicago, Houston, Hawaii, Philadelphia, Boston, Miami, and Atlanta)[2], Canada, Hong Kong, Taiwan, Cambodia, Thailand, Indonesia, Malaysia, Singapore, Vietnam, Philippines and will open in South Korea.',
        '(347) 542-3653'
    );

INSERT INTO clients
    (
    user_id,
    name,
    address_field
    )
VALUES
    ( 8,
        'Boys and Girls Club',
        '733 3rd Ave Fl 2, New York, NY 10017'
    ),

    ( 9,
        'St. Albans Baptist Church',
        '196-02 119 Ave, St. Albans, NY 11412'
    ),

    ( 10,
        'YMCA Flushing',
        '138-46 Northern Boulevard, Flushing, NY 11354'
    ),

    ( 11,
        'Lift',
        '349 E 149th Street, The Bronx, NY, 10451'
    ),

    ( 12,
        'Upper Manhattan Empowerment Zone',
        '55 W 125th Street, New York, NY, 10027'
    );

INSERT INTO food_items
    (
    quantity,
    name,
    is_claimed,
    vendor_id,
    set_time
    )
VALUES
    (
        5,
        'Chicken',
        TRUE,
        1,
        '18:30'
    ),
    (
        10,
        'Broccoli',
        TRUE,
        2,
        '18:00'
     ),
    (
        15,
        'Tuna',
        FALSE,
        3,
        '18:00'
      ),
    (
        20,
        'Eggs',
        FALSE,
        4,
        '19:00'
       ),
    (
        25,
        'Salad',
        TRUE,
        5,
        '17:00'
        ),
    (
        2,
        'Potatoes',
        FALSE,
        6,
        '17:30'
         ),
    (
        25,
        'Shrimp',
        TRUE,
        7,
        '17:00'
          );

INSERT INTO favorites
    (
    client_id,
    vendor_id
    )
VALUES
    (
        5,
        1
  ),
    (
        4,
        2
  ),
    (
        3,
        3
  ),
    (
        2,
        4
  ),
    (
        1,
        5
  ),
    (
        1,
        6
  ),
    (
        5,
        7
  );


INSERT INTO business_hours
    (
    vendor_id,
    mon_start,
    mon_end,
    tues_start,
    tues_end,
    wed_start,
    wed_end,
    thur_start,
    thur_end,
    fri_start,
    fri_end,
    sat_start,
    sat_end,
    sun_start,
    sun_end
    )
VALUES
    (
        1,
        '8:00', '19:00',
        '8:00', '19:00',
        '8:00', '19:00',
        '8:00', '19:00',
        '8:00', '19:00',
        '11:00', '17:00',
        '11:00', '17:00'
  ),
    (
        2,
        '8:00', '19:00',
        '8:00', '19:00',
        '8:00', '19:00',
        '8:00', '19:00',
        '8:00', '19:00',
        '11:00', '17:00',
        '11:00', '17:00'
  ),
    (
        3,
        '8:00', '19:00',
        '8:00', '19:00',
        '8:00', '19:00',
        '8:00', '19:00',
        '8:00', '19:00',
        '11:00', '17:00',
        '11:00', '17:00'
  ),
    (
        4,
        '8:00', '19:00',
        '8:00', '19:00',
        '8:00', '19:00',
        '8:00', '19:00',
        '8:00', '19:00',
        '11:00', '17:00',
        '11:00', '17:00'
  ),
    (
        5,
        '8:00', '19:00',
        '8:00', '19:00',
        '8:00', '19:00',
        '8:00', '19:00',
        '8:00', '19:00',
        '11:00', '17:00',
        '11:00', '17:00'
  ),
    (
        6,
        '8:00', '19:00',
        '8:00', '19:00',
        '8:00', '19:00',
        '8:00', '19:00',
        '8:00', '19:00',
        '11:00', '17:00',
        '11:00', '17:00'
  ),
    (
        7,
        '8:00', '19:00',
        '8:00', '19:00',
        '8:00', '19:00',
        '8:00', '19:00',
        '8:00', '19:00',
        '11:00', '17:00',
        '11:00', '17:00'
  );