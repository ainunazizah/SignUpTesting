module.exports = {
    url: 'http://ocatelkom.co.id/register',
    elements: {
        fillFirstNameSignUp: by.xpath("//input[@id='first_name']")
    },
    perform: function () {

        var selector = page.fillFirstNameSignUp.elements.fillFirstNameSignUp;
        return driver.findElement(selector).sendKeys(shared.id.firstname);
    }
};