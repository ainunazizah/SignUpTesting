module.exports = function () {
    this.Given(/^user browse register page$/, function () {
        helpers.loadPage(shared.pages.OcatelkomRegisterPage)
    });

    this.Given(/^user fill first name to register$/, function () {
        driver.then(function () {
            return page.fillFirstNameSignUp.perform();
        })
    });

    this.Given(/^user fill last name to register$/, function () {
        driver.then(function () {
            return page.fillLastNameSignUp.perform();
        })
    });

    this.Given(/^user fill email to register$/, function () {
        driver.then(function () {
            return page.fillEmailSignUp.perform();
        })
    });

    this.Given(/^user fill invalid email to register$/, function () {
        driver.then(function () {
            return page.fillInvalidEmailSignUp.perform();
        })
    });

    this.Given(/^user fill phone number to register$/, function () {
        driver.then(function () {
            return page.fillPhoneNumberSignUp.perform();
        })
    });

    this.When(/^user fill password to register$/, function () {
        driver.then(function () {
            return page.fillPasswordSignUp.perform();
        })
    });
    // this.Given(/^user fill email to login$/, function () {
    //     driver.then(function () {
    //         return page.fillEmailSignIn.perform();
    //     })
    // });

    // this.When(/^user fill password to login$/, function () {
    //     driver.then(function () {
    //         return page.fillPasswordSignIn.perform();
    //     })
    // });

    this.Then(/^user click create account button$/, function () {
        driver.then(function () {
            return page.clickCreateAccountButton.perform();
        })
    });
}