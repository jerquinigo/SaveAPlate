DROP DATABASE IF EXISTS save_a_plate;
CREATE DATABASE save_a_plate;

\c save_a_plate;

CREATE TABLE users
(
    id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL,
    email VARCHAR UNIQUE NOT NULL,
    password_digest TEXT NOT NULL,
    type INT NOT NULL,
    address_field TEXT NOT NULL,
    body TEXT,
    telephone_number VARCHAR,
    ein INT,
    client_certificate VARCHAR,
    profile_picture TEXT
);

CREATE TABLE food_items
(
    id SERIAL PRIMARY KEY,
    quantity INT NOT NULL,
    name VARCHAR NOT NULL,
    is_claimed BOOLEAN DEFAULT FALSE NOT NULL,
    client_id INT REFERENCES users(id) DEFAULT NULL,
    vendor_id INT REFERENCES users(id),
    set_time VARCHAR NOT NULL
);

CREATE TABLE favorites
(
    id SERIAL PRIMARY KEY,
    client_id INT REFERENCES users(id),
    vendor_id INT REFERENCES users(id)
);

CREATE TABLE business_hours
(
    id SERIAL PRIMARY KEY,
    vendor_id INT REFERENCES users(id),
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
    (
    name,
    email,
    password_digest,
    type,
    address_field,
    body,
    telephone_number,
    ein,
    client_certificate,
    profile_picture
    )
VALUES
    (
        'Kings Terrace',
        'kingterracee@email.com',
        '$2a$10$gZPgf40pi6UoVX5E4H55lut330s75L8IPGfcTIJ9E2HaeqxNpfkhK',
        1,
        '815 Kings Hwy, Brooklyn, NY 11223',
        'The best catering hall',
        '(347) 492-6826',
        123456789,
        null,
        'https://vintagebanquetsandcatering.com/wp-content/uploads/2019/02/vintage-banquets-catering-fraser-mi-48026.jpg'
    ),
    (
        'Mauzone Catering',
        'mauzonee@email.com',
        '$2a$10$mzTmfF6x2pSnfuOGEYS22OFzBateX99qHLT4SatFE5413WcucKVam',
        1,
        '3301 20th Ave Astoria, NY 11105',
        'Shady catering hall',
        '(718) 274-1100',
        123456788,
        null,
        'http://www.mauzone.net/img/logo2.png'
    ),

    (
        'Flushing House',
        'flushinghousee@email.com',
        '$2a$10$D/8R9jsRunT06bdNzbUuI./5TEdnUS.LDqY.tBztx1byVuUskRNGK',
        1,
        '3820 Bowne St, Flushing, NY 11354',
        'cool place',
        '(718) 762-3198',
        123432135,
        null,
        null
    ),

    (
        'Atlantic Diner',
        'atlanticdinerr@email.com',
        '$2a$10$MXrGm6UCRQZspAr5wl1VyeSYVRVGqngk5Vb9L2bofqGZ6G4XzStSy',
        1,
        '111-16 Atlantic Ave, South Richmond Hill, NY 11419',
        'good food',
        '(718) 849-6673',
        123456787,
        null,
        null
    ),

    (
        'Court Square Diner',
        'courtsquaredinerr@yahoo.com',
        '$2a$10$4ejJwUya5yls/su7lXNW.uNyBRD5kXMQ72VbMWtu2s.o4EcrLuBQK',
        1,
        '45-30 23rd St Long Island City, NY 11101',
        'In operation since 1946, Court Square Diner stands out among the flashier restaurants and bars that have crowded into Long Island City in recent years. Not much has changed since brothers Steve and Nick Kanellos started running the joint in 1991 — the diner still serves oversized heroes and grilled cheese sandwiches 24/7.',
        '(718) 392-1222',
        123456786,
        null,
        null
    ),

    (
        'Mad For Chicken',
        'madforchickenn@hotmail.com',
        '$2a$10$j7eeNV.kKAgY4ViLsMQ.de4IrcfDWf6PvcSOlS7gHkaR.sbhjgNm2',
        1,
        '157-18 Northern Blvd, Flushing, NY 11354',
        'yum chicken',
        '718-321-1234',
        123456785,
        null,
        null
    ),

    (
        'Gyu-Kaku Japanese BBQ',
        'gyukakuu@aol.com',
        '$2a$10$ArJwEZXauWEhRg4yn3ZmBum5mCajRFJkmjxKSAjPrsU0ER45DOl4C',
        1,
        '4052 Main St, Flushing, NY 11354',
        'Gyu-Kaku (牛角 gyū kaku, bulls horn) is a chain of Japanese yakiniku restaurants. here are over six hundred Gyu-Kaku locations in Japan,[1] and locations have also been opened in the United States (including New York City, California, Pittsburgh, Chicago, Houston, Hawaii, Philadelphia, Boston, Miami, and Atlanta)[2], Canada, Hong Kong, Taiwan, Cambodia, Thailand, Indonesia, Malaysia, Singapore, Vietnam, Philippines and will open in South Korea.',
        '(347) 542-3653',
        123456784,
        null,
        null
    ),


    (
        'Boys and Girls Club',
        'b&gclubb@gmail.com',
        '$2a$10$helfcWuepNkLUj46s8X0gO62GV/LhDu6pb7As.7n93Y.MARhOft1e',
        2,
        '733 3rd Ave Fl 2, New York, NY 10017',
        null,
        null,
        null,
        'http://lorempixel.com/640/480/abstract',
        null
    ),

    (
        'St. Albans Baptist Church',
        'sabcc@gmail.com',
        '$2a$10$7UxIPa9aqfhw8tq6QTjR/eQ1mKHHaImV3/dTSgQW5V/6wDL8raSHC',
        2,
        '196-02 119 Ave, St. Albans, NY 11412',
        null,
        null,
        null,
        'http://lorempixel.com/640/480/abstract',
        null
    ),

    (
        'YMCA Flushing',
        'YMCAA@yahoo.com',
        '$2a$10$uY32J96RBWBp0ykFNzQVseruroRKyHgLnMNUXDqZsNH708Xfc1U9C',
        2,
        '138-46 Northern Boulevard, Flushing, NY 11354',
        null,
        null,
        null,
        'http://lorempixel.com/640/480/abstract',
        null
    ),

    (
        'Lift',
        'Liftt@aol.com',
        '$2a$10$vr5QrDvGKTWsgqw06OT4zurU2igUuNwy4ZyMXBSCRIYRkYMwVqr.y',
        2,
        '349 E 149th Street, The Bronx, NY, 10451',
        null,
        null,
        null,
        'http://lorempixel.com/640/480/abstract',
        null
    ),

    (
        'Upper Manhattan Empowerment Zone',
        'UMEZZ@hotmail.com',
        '$2a$10$i4uyBoQ0WV0ORZZu8QWxpuRHgeKP5Bincp94BV4IDuBl/6ikeL4z.',
        2,
        '55 W 125th Street, New York, NY, 10027',
        null,
        null,
        null,
        'http://lorempixel.com/640/480/abstract',
        null
    ),
    (
        'clienttester',
        'clientdemo@test.com',
        '$2a$10$CrYZDCO1mEUu04D12nDFWO7Qm7MZVj4hkxK74j8jWDA/jdXTgsCC6',
        2,
        '47-10 Austell Place Long Island City queens ny ',
        'I am viewing as an Non-Profit Organization',
        '(347) 492-6843',
        123456789,
        null,
        'https://www.arborbrothers.org/wp-content/uploads/2018/10/Pursuit-Logo.jpg'
    ),
    (
        'vendortester',
        'vendordemo@test.com',
        '$2a$10$CrYZDCO1mEUu04D12nDFWO7Qm7MZVj4hkxK74j8jWDA/jdXTgsCC6',
        1,
        '47-10 Austell Place Long Island City queens ny' ,
        'I am viewing as a Food Industry',
        '(347) 502-6826',
        123456989,
        null,
        'https://ib.hulu.com/user/v3/artwork/fdeb1018-4472-442f-ba94-fb087cdea069?base_image_bucket_name=hummus&base_image=c3be6bcd-278c-4e33-821c-a9e9b298029f&size=400x600&format=jpeg'
        ),

    (
        'JonE Catering Hall',
        'jon@gmail.com',
        '$2a$10$ISjBUvV4FHZ0DVTttNOn1uqbJDmlO9b/btBngzCyZJpZXhsfVS5Cq',
        1,
        '47-11 Austell Place Long Island City queens ny',
        'local catering hall',
        '(347) 455-8790',
        987645321,
        null,
        null
      );
INSERT INTO food_items
    (
    quantity,
    name,
    is_claimed,
    client_id,
    vendor_id,
    set_time
    )
VALUES
    (
        5,
        'Massaman Curry',
        TRUE,
        8,
        1,
        '18:30'
    ),
    (
        10,
        'Neapolitan Pizza',
        TRUE,
        9,
        2,
        '18:00'
    ),
    (
        15,
        'Sushi',
        TRUE,
        10,
        3,
        '18:00'
    ),
    (
        20,
        'Peking Duck',
        TRUE,
        11,
        4,
        '19:00'
    ),
    (
        25,
        'Shish Kebab',
        TRUE,
        12,
        5,
        '17:00'
    ),
    (
        2,
        'Arepas',
        FALSE,
        null,
        6,
        '17:30'
    ),
    (
        25,
        'Lasagna',
        FALSE,
        null,
        7,
        '17:00'
    ),
    (
        5,
        'Butter Garlic Crab',
        TRUE,
        13,
        14,
        '18:30'
    ),
    (
        10,
        'Fajitas',
        TRUE,
        13,
        14,
        '18:00'
    ),
    (
        15,
        'Fish N Chips',
        TRUE,
        13,
        14,
        '18:00'
    ),
    (
        20,
        'Chicken Parm',
        TRUE,
        13,
        14,
        '19:00'
    ),
    (
        25,
        'Tacos',
        TRUE,
        13,
        14,
        '17:00'
    ),
    (
        2,
        'Poutine',
        FALSE,
        null,
        14,
        '17:30'
    ),
    (
        25,
        'Seafood Paella',
        FALSE,
        null,
        14,
        '17:00'
    );



INSERT INTO favorites
    (
    client_id,
    vendor_id
    )
VALUES
    (
        8,
        1
    ),
    (
        9,
        2
    ),
    (
        10,
        3
    ),
    (
        11,
        4
    ),
    (
        12,
        5
    ),
    (
        8,
        6
    ),
    (
        9,
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
        '08:00', '19:00',
        '08:00', '19:00',
        '08:00', '19:00',
        '08:00', '19:00',
        '08:00', '19:00',
        '11:00', '17:00',
        '11:00', '17:00'
    ),
    (
        2,
        '08:00', '19:00',
        '08:00', '19:00',
        '08:00', '19:00',
        '08:00', '19:00',
        '08:00', '19:00',
        '11:00', '17:00',
        '11:00', '17:00'
    ),
    (
        3,
        '08:00', '19:00',
        '08:00', '19:00',
        '08:00', '19:00',
        '08:00', '19:00',
        '08:00', '19:00',
        '11:00', '17:00',
        '11:00', '17:00'
    ),
    (
        4,
        '08:00', '19:00',
        '08:00', '19:00',
        '08:00', '19:00',
        '08:00', '19:00',
        '08:00', '19:00',
        '11:00', '17:00',
        '11:00', '17:00'
    ),
    (
        5,
        '08:00', '19:00',
        '08:00', '19:00',
        '08:00', '19:00',
        '08:00', '19:00',
        '08:00', '19:00',
        '11:00', '17:00',
        '11:00', '17:00'
    ),
    (
        6,
        '08:00', '19:00',
        '08:00', '19:00',
        '08:00', '19:00',
        '08:00', '19:00',
        '08:00', '19:00',
        '11:00', '17:00',
        '11:00', '17:00'
    ),
    (
        7,
        '08:00', '19:00',
        '08:00', '19:00',
        '08:00', '19:00',
        '08:00', '19:00',
        '08:00', '19:00',
        '11:00', '17:00',
        '11:00', '17:00'
    ),
    (
        14,
        '08:00', '19:00',
        '08:00', '19:00',
        '08:00', '19:00',
        '08:00', '19:00',
        '08:00', '19:00',
        '11:00', '17:00',
        '11:00', '17:00'
  ),
    (
        15,
        '08:00', '19:00',
        '08:00', '19:00',
        '08:00', '19:00',
        '08:00', '19:00',
        '08:00', '19:00',
        '11:00', '17:00',
        '11:00', '17:00'
  );
