describe("Laptop title fetch",()=>{
    it("Should fetch title and price",async()=>{
        await browser.url("https://www.amazon.in/");
        await browser.maximizeWindow();
        await $("//input[@aria-label='Search Amazon.in']").setValue("laptop");
        await $("//li[@aria-label='Dell']/descendant::i[@class='a-icon a-icon-checkbox']").click();
        //let title=await $$("//span[@class='a-size-medium a-color-base a-text-normal']");
        //const price=await $$("//span[@class='a-price']/descendant::span[@class='a-price-whole']");
        // for(let [tit,prc] of [title,price]){
        //     const txt=tit.gettext();
        //     const p=prc.gettext();
        //     console.log(`${txt} and ${p}`);

        // }
        const title=await $$("//span[@class='a-size-medium a-color-base a-text-normal']").map(ele=>ele.getText());
        //const sym=await $$("//span[@class='a-price']/descendant::span[@class='a-price-symbol']").map(ele=>ele.getText());
        const price=await $$("//span[@class='a-price']/descendant::span[@class='a-price-whole']").map(ele=>ele.getText());
        console.log(`${title}`);
        console.log(`${price}`);
        await browser.pause(3000);
        })
})