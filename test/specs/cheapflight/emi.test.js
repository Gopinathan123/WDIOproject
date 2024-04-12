import { expect } from "chai";

describe("",()=>{
    it("",async()=>{
        await browser.url("https://emicalculator.net/");
        await browser.maximizeWindow();
        expect(await browser.getTitle()).to.be.equals("EMI Calculator for Home Loan, Car Loan & Personal Loan in India");
        await $("//*[name()='svg']//*[name()='g']//*[name()='path' and @class='highcharts-point highcharts-point-hover']");
        browser.pause(5000);
    })
})