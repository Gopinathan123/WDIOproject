describe("Handling Tabs",()=>{
    it("Closing only Child tabs", async()=>{
        await browser.url("https://www.browserstack.com");

        const parentHandle=await browser.getWindowHandle();
        if(parentHandle){
            const title=await browser.getTitle();
            console.log(`Parent window title is: ${title}`);
        }

        // await browser.url("https://www.google.com");
        // await browser.url("https://www.bing.com");

        // await browser.execute(()=>{
        //     const allhandles=window.handles;
        //     const childHandles=allhandles.filter(handle=>handle!==Parenthandle);
        //     childHandles.forEach(handle => {
        //             browser.closeWindow(handle);
        //     });
        // })

        // Open new tabs (modify URLs as needed)
for (let i = 0; i < 3; i++) {
    await browser.newWindow(`https://www.google.com/`);
  }
  
  // Close all child tabs except parent
  const allHandles = await browser.getWindowHandles();
  for (const handle of allHandles) {
    if (parentHandle !== handle) {
      await browser.switchToWindow(handle);
      await browser.closeWindow();
    }
  }

  //get the Title of Parent Window

  
  browser.pause(10000);
    })
})