describe('', ()=>{
    before(()=>{
        browser.url("https://www.in.cheapflights.com/");
        browser.maximizeWindow();
    })
    xit('Clicking login and close login childwindow', async()=>{
        await browser.$("//div[@class='dJtn-menu-item-title' and text()='Sign in']").click();
        const ele=await $("//*[local-name()='svg' and @class='dDYU-closeIcon dDYU-mod-theme-default']");
        await ele.waitForDisplayed({reverse:true});
        await ele.click();
    })
    it.skip('Searching the flights',async()=>{
        await $("//div[@class='c2cnN c2cnN-mod-size-small c2cnN-mod-full-width']/descendant::span[text()='Return']").click();
        await $("//span[text()='One-way']").click();

        

        await $("//*[local-name()='svg' and @class='vvTc-item-icon']").click();
        await $("//input[@aria-label='Flight origin input']").setValue("Bengaluru");
        
        const sug_frm= await $("//div[@class='JyN0-item JyN0-pres-item-mcfly']");
        await sug_frm.waitForExist({reverse:true});
        await sug_frm.click();
        await $("//input[@aria-label='Flight destination input']").setValue("Chennai");
        const sug_to= await $("//div[@class='JyN0-item JyN0-pres-item-mcfly']");
        await sug_to.waitForExist({reverse:true});
        await sug_to.click();

        await $("//span[@class='sR_k-date']").click();
        const clk_rgt_arw=await $("(//*[name()='svg'][@role='img'])[52]");
        await clk_rgt_arw.waitForExist({reverse:true});
        await clk_rgt_arw.click();


        await $("//button[@type='submit' and @aria-label='Search']").click();
        //browser.pause(3000);
        await browser.pause(5000);
    })
    it('Searching the flights',async()=>{
        await $("//div[@class='c2cnN c2cnN-mod-size-small c2cnN-mod-full-width']/descendant::span[text()='Return']").click();
        await $("//span[text()='One-way']").click();
        browser.pause(5000);
    })
    // after(()=>{
    //     browser.$("//div[@aria-label='Close']");
    // })
})