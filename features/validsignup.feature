# ./features/signup.feature

Feature: Valid Sign Up
    As a new user
    I want to be able to Sign Up

    Scenario: Register on Ocatelkom register page
        Given user browse register page
        Given user fill first name to register
        Given user fill last name to register
        Given user fill email to register
        Given user fill phone number to register
        When user fill password to register
        Then user click create account button