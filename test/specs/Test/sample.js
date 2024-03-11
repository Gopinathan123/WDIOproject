import pricetit from "../../pageobjects/flipkartdelllaps/dellpage.js";

describe("",()=>{
    it("",async()=>{
        await browser.url("https://www.flipkart.com/");
        await browser.maximizeWindow();
        await $("//div[@class='_2SmNnR']//input").setValue("laptops");
        await $("(//a[@class='oleBil']/descendant::div[@class='YGcVZO _2VHNef' and contains(.,'s')])[1]").click();
        await $("//div[@class='_213eRC _2ssEMF']//div[.='Brand']").click();
        await $("//div[@class='_1Y4Vhm _4FO7b6']/descendant::div[.='DELL']").click();
        
        //const title=await $$("//div[@class='_4rR01T']").map(ele=>ele.getText());
        // const title=await pricetit.alltit.map(ele=>ele.getText());
        // console.log(title);
        // for await(const tit of title)
        // {
        //     //await tit.waitForExist({timeout:5000,reverse:true})
        //     console.log(tit.getText());
        // }
        // const price=await $$("//div[@class='_30jeq3 _1_WHN1']").map(elem=>elem.getText());
        // console.log(`${title}  ${price}`);
        const price=await pricetit.allpric.map(elem=>elem.getText());
        console.log(price);
        await browser.pause(3000);
    })
})