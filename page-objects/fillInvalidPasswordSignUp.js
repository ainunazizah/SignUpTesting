module.exports = {

    url: 'http://ocatelkom.co.id/register',

    elements: {
        fillInvalidPasswordSignUp: by.xpath("//input[@id='password']")
    },

    perform: function () {

        var selector = page.fillInvalidPasswordSignUp.elements.fillInvalidPasswordSignUp;
        return driver.findElement(selector).sendKeys(shared.id.invalidpassword);
    }
};