DROP DATABASE IF EXISTS save_a_plate;
CREATE DATABASE save_a_plate;

\c save_a_plate;

CREATE TABLE vendors
(
    id SERIAL PRIMARY KEY,
    email VARCHAR UNIQUE NOT NULL,
    password_digest TEXT NOT NULL,
    name VARCHAR UNIQUE NOT NULL,
    address_field TEXT NOT NULL,
    body TEXT,
    telephone_number VARCHAR NOT NULL,
    employee_id_number INT NOT NULL
);


CREATE TABLE clients
(
    id SERIAL PRIMARY KEY,
    email VARCHAR NOT NULL,
    password_digest TEXT NOT NULL,
    name VARCHAR UNIQUE NOT NULL,
    address_field TEXT NOT NULL,
    client_certificate VARCHAR NOT NULL
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

INSERT INTO vendors
    (
    email,
    password_digest,
    name,
    address_field,
    body,
    telephone_number,
    employee_id_number
    )
VALUES
    (
        'kingsterrace@email.com',
        'kingsterrace123',
        'Kings Terrace',
        '815 Kings Hwy, Brooklyn, NY 11223',
        'The best catering hall',
        '(347) 492-6826',
        987654321
    ),

    (
        'mauzone@email.com',
        'mauzoneinthezone',
        'Mauzone Catering',
        '3301 20th Ave Astoria, NY 11105',
        'Shady catering hall',
        '(718) 274-1100',
        123456789
    ),

    (
        'flushinghouse@email.com',
        'password1234',
        'Flushing House',
        '3820 Bowne St, Flushing, NY 11354',
        'cool place',
        '(718) 762-3198',
        734748291
    ),

    (
        'atlanticdiner@email.com',
        'goodfood93',
        '111-16 Atlantic Ave, South Richmond Hill, NY 11419',
        'Atlantic Diner',
        'number 1 diner',
        '(718) 849-6673',
        837482183
    ),

    (
        'courtsquarediner@yahoo.com',
        'mypasswordissupersecure',
        'Court Square Diner',
        '45-30 23rd St Long Island City, NY 11101',
        'In operation since 1946, Court Square Diner stands out among the flashier restaurants and bars that have crowded into Long Island City in recent years. Not much has changed since brothers Steve and Nick Kanellos started running the joint in 1991 — the diner still serves oversized heroes and grilled cheese sandwiches 24/7.',
        '(718) 392-1222',
        737373737
    ),

    (
        'madforchicken@hotmail.com',
        'supersecretpassword',
        'Mad For Chicken',
        '157-18 Northern Blvd, Flushing, NY 11354',
        'Mad for Chicken offers a unique food experience. We believe food should be enjoyed in three ways-visual, smell, and taste. We are confident to serve food that will satisfy all three senses.',
        '(718) 321-3818',
        111111111
    ),

    (
        'gyukaku@aol.com',
        'bobblahblob3',
        'Gyu-Kaku Japanese BBQ',
        '4052 Main St, Flushing, NY 11354',
        'Gyu-Kaku (牛角 gyū kaku, bulls horn) is a chain of Japanese yakiniku restaurants. here are over six hundred Gyu-Kaku locations in Japan,[1] and locations have also been opened in the United States (including New York City, California, Pittsburgh, Chicago, Houston, Hawaii, Philadelphia, Boston, Miami, and Atlanta)[2], Canada, Hong Kong, Taiwan, Cambodia, Thailand, Indonesia, Malaysia, Singapore, Vietnam, Philippines and will open in South Korea.',
        '(347) 542-3653',
        878637589
    );