import {expect} from "chai";
import {should} from "chai";
describe("",()=>{
    it("verify login",async()=>{
        await browser.url("https://www.facebook.com/");
        await browser.maximizeWindow();
        expect(await browser.getTitle()).to.be.equals("Facebook – log in or sign up");
        await $("#email").setValue("abc@gmail.com");
        await $("#pass").setValue("Pass123*");
        await browser.pause(3000);
        await $("button[name='login']").click();
        await browser.pause(5000);
        expect(await browser.getTitle()).to.be.equals("Log in to Facebook");
        //should(await browser.getTitle()).be.equals("Log in to Facebook");
        expect(await $('._9ay7').getText()).to.be.contains("The password that you've entered is incorrect.");
    })
})