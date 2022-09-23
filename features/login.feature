Feature: Login

Scenario Outline: Shouldn't login with invalid credentials

Given I go to Login Page
When I login as "<login>" and "<password>"
Then I check error "<message>"

Examples:
|   login          | password        | message                                      |
| invalidLoginName | invalidPassword | Error: Incorrect login or password provided. |
| password         |  loginname      | Error: Incorrect login or password provided. |
| loginname        |                 | Error: Incorrect login or password provided. | 
|                  |   password      | Error: Incorrect login or password provided. |
|                  |                 | Error: Incorrect login or password provided. |




