## Vendors

column name | data type | details
------------|-----------|-----------
id          | Integer   | SERIAL PRIMARY KEY
email       | Varchar   | UNIQUE NOT NULL
password_digest | Text  | NOT NULL
name        | Varchar   | UNIQUE NOT NULL
address_field | Text    | NOT NULL
body        | Text      |
telephone_number | Varchar | NOT NULL
employee_id_number | Varchar | NOT NULL


## Clients

column name | data type | details
------------|-----------|----------
id          | Integer   | SERIAL PRIMARY KEY
email       | Varchar   | NOT NULL
password_digest | Text  | NOT NULL
name        | Varchar   | UNIQUE NOT NULL
address_field | Text    | NOT NULL
client_certificate | Varchar | NOT NULL

## FoodItems

column name | data type | details
------------|-----------|-----------
id          | Integer |SERIAL PRIMARY KEY
quantity    | Integer  | NOT NULL
name        | Varchar  | NOT NULL
isClaimed   | Boolean  | Default False NOT NULL
vendor_id   | Integer  | References Vendor(id)
set_time    | datetime | NOT NULL

## Favorites

column name | data type | details
------------|-----------|-----------
id          | Integer   | SERIAL PRIMARY KEY
client_id   | Integer   | References Clients(id)
