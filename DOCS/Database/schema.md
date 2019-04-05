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

## Business Hours

column name | data type | details
------------|-----------|-----------
id          | Integer   | SERIAL PRIMARY KEY
vendor_id   | Integer   | References vendors(id)
monday_start| Varchar   | NOT NULL
monday_end  | Varchar   | NOT NULL
tuesday_start | Varchar | NOT NULL
tuesday_end | Varchar   | NOT NULL
wednesday_start | Varchar | NOT NULL
wednesday_end | Varchar | NOT NULL
thursday_start | Varchar | NOT NULL
thursday_end | Varchar  | NOT NULL
friday_start | Varchar  | NOT NULL
friday_end   | Varchar  | NOT NULL
saturday_start | Varchar | NOT NULL
saturday_end | Varchar  | NOT NULL
sunday_start | Varchar  | NOT NULL
sunday_end   | Varchar  | NOT NULL
