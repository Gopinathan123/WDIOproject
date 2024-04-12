describe("",()=>{
    it("",async()=>{
        await browser.url("https://www.goibibo.com/");
        await browser.maximizeWindow();
        await $("//span[@class='logSprite icClose']").click();
        // let per=await $("//span[@class='sc-12foipm-40 fXZVlX' and .='From']/following-sibling::input");
        let per=await $("//p[.='Enter city or airport']/preceding-sibling::span[.='From']")
        // await per.click();
        await per.setValue("Chennai");
        await browser.pause(5000);
    })
})