## Vendors
* GET - /API/vendors/  ~Display ALL Vendors
* GET - /API/vendors/:id ~Get one vendor
* POST - /API/vendors/ ~Create new vendor
* PATCH - /API/vendors/:id ~Edit current vendor
* DELETE - /API/vendors/:id ~Delete vendor

## Clients
* GET - /API/clients/  ~Display ALL clients
* GET - /API/clients/:id ~Get one clients
* POST - /API/clients/ ~Create new clients
* PATCH - /API/clients/:id ~Edit current clients
* DELETE - /API/clients/:id ~Delete clients

## FoodItems
* GET - /API/foodItems/  ~Display ALL foodItems
* GET - /API/foodItems/client/:clientId ~Get foodItems by Client
* GET- /API/foodItems/vendor/:vendorId ~Get foodItems by Vendor
* POST- /API/foodItems/ ~Create new foodItem
* PATCH - /API/foodItems/:id ~Edit current foodItems
* DELETE - /API/foodItems/:id ~Delete foodItems

## Business_hours
* GET - /API/Business_hours/:vendorId ~Display business hours by vendor
* POST - /API/Business_hours/ ~ Create business hour for vendor
* PATCH - /API/Business_hours/:vendorId ~Edit vendor’s business hour


## Favorites
* GET -/API/Favorites/:clientId ~Get ALL favorites for clients
* POST-/API/Favorites/ ~new favorite
* DELETE-/API/Favorites/:favoriteId ~Delete favorite
