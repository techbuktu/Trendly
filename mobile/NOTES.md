# Trendly MERNR Project

## Mobile 
### Navigators
* bottomTabNav {Home, Categories(productsNav), Me(profileNav)}
* topTabNav: {Cart, OrderList, New}
* profileNav: stackNav : {Register, LogIn, ProfileDetail}
* productsNav:stackNav {CategoryList, CategoryDetail, ProductDetail, Cart, Order}
* 


### Components:
* Profile: 
    > Register

    > LogIn

    > ProfileDetail

    > NewFeed

    > Feed(detail)

    > Comment(detail)

    > NewComment

    > Like

* Store:
    > Cart

    > Order

    > ProductDetail

    > CategoryList

    > CategoryDetail

## Backend
### Models

### API Routes

### Routes: home, api_docs ('/docs'), etc.


## DEV MODUS OPERANDI

Using ApolloClient v2.6 

### Navigators
* stackNav
* brandsNav
* topNav
* catsNav 
* bottomTabNav : contains(brandsNav, catsNav, Home component)
* main(Stack)Nav ???

### Home Component:
* functional component 
> ProductFeed 
> ProductDetail 

* ApolloClient setup
> v2.6: useQuery, etc.
> ProductListQuery: setup and consumption in Home

If all goes well, move on to navigators
### Navigators
> sectional stack navs:
* catsNav
* brandsNav
* newNav: topNav
* bottomTabNav: Home, Brands, Categories

If all goes well, implement the rest of the components and their queries, one by one:

* BrandSectionDetail
* NewProducts
* CategoryList
* CategoryDetail

Then, tie everything together with the main:
* ProductFeed
* ProductDetail

### Write docs:
* See structure from Femmely: README.md and DEV_NOTES.md (to chronicle dev of both Femmely and Trendly; for Mavely only; delete afterwards)

### Ship:
* GitHub
* email(Mavely)
