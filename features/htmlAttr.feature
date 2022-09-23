Feature: Atrribute checking
Scenario: Get and check element attribute

    When I open 'https://automationteststore.com/'
    Then I expect element attributes:
    | element       | attribute | value               |
    | .facebook     | target    | _blank               |
    | .twitter      | href      | https://twitter.com/|
    | .linkedin     | title     | Linkedin            |
    
   