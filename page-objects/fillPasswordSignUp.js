module.exports = {

    url: 'http://ocatelkom.co.id/register',

    elements: {
        fillPasswordSignUp: by.xpath("//input[@id='password']")
    },

    perform: function () {

        var selector = page.fillPasswordSignUp.elements.fillPasswordSignUp;
        return driver.findElement(selector).sendKeys(shared.id.password);
    }
};