# Save A Plate

---

## Minimum Viable Product

---

Save a Plate is a web app built using React/Redux, Express, SQL, CSS/HTML. At a minimum, the site will be able to
signup/login as a vendor or client

- Able to post food donations
- Able to claim food donations
- Able to favorite a vendor
- Able to locate nearby donations
- Delete account
- Able to edit account info

## Design Docs

---

- [View Wireframes](../DOCS/Wireframes)
- [API Endpoints](../DOCS/API_ENDPOINTS/API_ENDPOINTS.md)
- [Database](../DOCS/Database/schema.md)
- [Frontend Routes](../DOCS/FrontendRoutes/frontendRoutes.md)
- [React Component Hierarchy](../DOCS/reactComponentHierarchy.md)
- [Sample State](../DOCS/SampleState/SampleState.md)

## Implementation (Sprint) Timeline

---

## Sprint 1 - Week 1

- Client/vendor tables, queries, & routes
- Homepage
- Welcome/Feed NavBar
- User authentication
  - Client
    - Signup
      - https://compliancegov.zendesk.com/hc/en-us/articles/212102057-What-documentation-is-required-to-prove-nonprofit-status-
    - Login
  - Vendor
    - Signup
      - File reader (tax form)
    - Login
- Plan out components for frontend
  - Boilerplate for redux
- CSS (responsive design)
  - CSS reset (body, headers)
  - Home page
  - Login page
  - Signup page
  - Decide on color scheme / theme

## Sprint 2 - Week 2

- Backend
  - Food items tables, queries, & routes
  - Business hours tables, queries, & routes
- Vendors
  - Profile page
    - Geolocation
    - Hours
    - Vendor info
    - Vendor form
    - Favorite button
  - Adding food item
  - Vendor NavBar
- Feed
  - Rendering food items
  - Functionality of ‘isClaimed’
  - Geolocation of client relative to vendor
  - Search bar
- CSS
  - Vendors profile

## Sprint 3 - Week 3

- Backend
  - Favorites tables, queries, & routes
- Clients
  - Profile page
    - Client info
    - Client form
  - Claimed food items feed
  - Favorited vendors feed
  - Client NavBar
- CSS
  - Clients profile
  - Feed

## Sprint 4 - Week 4

- Cleanup/ modularize code
- Finish up incomplete tasks
- Testing
- Brainstorm demo ideas
