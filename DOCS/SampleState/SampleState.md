## Sample State

```js
state = {
  client: {
    id: 1,
    name: "Boy's and Girls Club",
    email: "bandg@test.com",
    password_digest: "bandg123",
    address_field: "Queens, NY",
    client_cert: "document.pdf",
    body: "we do cool stuff"
  },

  vendors: {
    1: {
      id: 1,
      email: "kingsterrace@email.com",
      password_digest: "riparoni",
      name: "King's Terrace",
      address_field: "123 Main St, Brooklyn, NY 11111",
      body: "Super cool and fun place to work at... NOT",
      telephone_number: "718-123-4567",
      employee_id_number: "987654321"
    }
  },

  food_items: {
    id: 1,
    quantity: 40,
    name: "Jon E's dank pastrami",
    is_claimed: true,
    vendor_id: 3,
    set_time: "2018-11-15T22:55:03Z"
  },

  favorites: {
    id: 39,
    client_id: 2
  },

  business_hours: {
    id: 4,
    vendor_id: 2,
    monday_start: "10:00am",
    monday_end: "6:00pm",
    tuesday_start: "10:00am",
    tuesday_end: "6:00pm",
    wednesday_start: "10:00am",
    wednesday_end: "6:00pm",
    thursday_start: "10:00am",
    thursday_end: "6:00pm",
    friday_start: "10:00am",
    friday_end: "6:00pm",
    saturday_start: "11:00am",
    saturday_end: "8:00pm",
    sunday_start: "12:00am",
    sunday_end: "5:00pm"
  }
};
```
