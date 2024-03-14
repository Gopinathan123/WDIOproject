import {expect as expectchai} from "chai";
import {expect as expectwdio} from '@wdio/globals';
// import { should } from "chai";

describe("Home page", ()=>{
    before(async()=>{
        await browser.url("https://www.ab-inbev.com/");
        await browser.maximizeWindow();
    })
    it.skip("Should click cookies setting",async()=>{
        await $('cookie-setting-link')
    })
    xit("Should decline cookies",async()=>{
        await $('#onetrust-reject-all-handler').click();

    })
    it("Should accept cookies",async()=>{
        await $('#onetrust-accept-btn-handler').click();
    })
    it("Should validate and move to the next page",async()=>{

        expectchai(await browser.getTitle()).to.be.equals("Home | AB InBev");
        await $("select[name='region']").selectByVisibleText('India');
        await $("select[name='month']").selectByVisibleText('May');
        await $("select[name='day']").selectByVisibleText('13');
        await $("select[name='year']").selectByVisibleText('1990');
        await $("input[value='Enter']").click();
        await expectwdio(browser).toHaveUrl();
    })
    after(async()=>{
        await browser.deleteAllCookies();
    })
})