Feature: Test Task Feature

  Scenario: As a logged in user, I should be able to add items to cart

    Given I login as 'standard_user'
    Then I should be on the inventory page
    When I sort the inventory by 'Price (high to low)'
    Then the inventory should be sorted by 'Price (high to low)'
    When I add the two cheapest items
    And I proceed to cart
    Then there should be 2 items in my cart
    When I remove the cheapest item in my cart
    Then there should be 1 item in my cart
    When I proceed to checkout
    Then I should be on the checkout page

