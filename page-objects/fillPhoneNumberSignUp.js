module.exports = {

    url: 'http://ocatelkom.co.id/register',

    elements: {
        fillPhoneNumberSignUp: by.xpath("//input[@id='phone']")
    },

    perform: function () {

        var selector = page.fillPhoneNumberSignUp.elements.fillPhoneNumberSignUp;
        return driver.findElement(selector).sendKeys(shared.id.phonenumber);
    }
};