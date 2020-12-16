module.exports = {

    url: 'http://ocatelkom.co.id/register',

    elements: {
        fillLastNameSignUp: by.xpath("//input[@id='last_name']")
    },

    perform: function () {

        var selector = page.fillLastNameSignUp.elements.fillLastNameSignUp;
        return driver.findElement(selector).sendKeys(shared.id.lastname);
    }
};