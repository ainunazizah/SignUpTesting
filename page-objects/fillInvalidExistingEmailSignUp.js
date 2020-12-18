module.exports = {

    url: 'http://ocatelkom.co.id/register',

    elements: {
        fillInvalidExistingEmailSignUP: by.xpath("//input[@id='email']")
    },

    perform: function () {

        var selector = page.fillInvalidExistingEmailSignUP.elements.fillInvalidExistingEmailSignUP;
        return driver.findElement(selector).sendKeys(shared.existinguser.email);
    }
};