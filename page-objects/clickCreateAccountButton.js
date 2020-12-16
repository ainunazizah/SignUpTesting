module.exports = {

    url: 'http://ocatelkom.co.id/register',

    elements: {
        clickCreateAccountButton: by.xpath("//input[@value='Create Account']")
    },

    perform: function () {

        var selector = page.clickCreateAccountButton.elements.clickCreateAccountButton;
        return driver.findElement(selector).click(selector);
    }
};