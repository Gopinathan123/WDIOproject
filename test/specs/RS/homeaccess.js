import homePageImp from "../../pageobjects/RS_POM/RS_Home_POM.js"
import loginpageImp from "../../pageobjects/RS_POM/Rs_Login_Pom.js";

describe("Home Access",()=>{
    it("Should be click by login btn", async()=>{
        await browser.url("https://courses.rahulshettyacademy.com/");
        await browser.maximizeWindow();
        await homePageImp.log_link_btn();
        //await browser.pause(3000);
        //await loginpageImp.logaction('abc@gmail.com','xyz');
        //await loginpageImp.loggoogaction();
        await loginpageImp.logforgetaction();
        await browser.pause(2000);
    })
})
