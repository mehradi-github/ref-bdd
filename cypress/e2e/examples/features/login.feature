Feature: Login Page

    @Login
    Scenario Outline: Test login via portal page
        Given I access the login page
        When I enter a username <username>
        And  I enter a password <password>
        And I click on login button
        Then I should be presented with the following message <message>

        Examples:
            | username  | password     | message              |
            | webdriver | webdriver123 | validation succeeded |
            | webdriver | webdriver555 | validation failed    |
            | joe       | pass123      | validation failed    |
