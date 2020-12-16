module.exports = {

    url: 'http://ocatelkom.co.id/register',

    elements: {
        fillEmailSignUp: by.xpath("//input[@id='email']")
    },

    perform: function () {

        var selector = page.fillEmailSignUp.elements.fillEmailSignUp;
        return driver.findElement(selector).sendKeys(shared.invalidid.email);
    }
};