Feature: Registration

Scenario: Successful registration

When I go to Login Page
And  I create new user with following data:
"""

    firstName : "Patryk"
    lastName : "Smith"
    email : "patryk_smith123@yahoo.com"
    address : "3349 Tate Shores"
    city : "North Linwoodstead"
    zip : "56987"
    loginName : "Patryk.Smith"
    password : "password"


"""
Then I check registration