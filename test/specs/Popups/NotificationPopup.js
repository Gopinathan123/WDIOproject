describe("handle notification popup",()=>{
    it(" /[/Exclude]// should handle the notifications popup",async()=>{
        await browser.url("https://www.yatra.com");
        await browser.maximizeWindow();
        await browser.pause(10000);

    })
})