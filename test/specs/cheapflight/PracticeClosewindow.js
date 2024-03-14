describe("Check for child windows", ()=>{
    it("Should return the length of the window here", async()=>{
        browser.maximizeWindow();
        await browser.url("https://www.browserstack.com");
        await browser.newWindow("https://www.google.com");
        // await browser.newWindow("https://www.bing.com");

        await $('body').waitForExist();
        console.log((await browser.getWindowHandles()).length);
        await browser.closeWindow();

        const handles=await browser.getWindowHandles();
        console.log(`The length is:${handles.length}`);

        const err=await browser.getTitle().catch((err)=>err);
        console.log(err.message);

        await browser.switchToWindow(handles[0]);
        console.log(await browser.getTitle());

    })
})