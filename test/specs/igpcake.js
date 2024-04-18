 import Igp from "../pageobjects/IGPCAKE/IgpCakepage.js";

 describe('demo test',()=>{
    it('igpcake test',async()=>{
        await browser.pause(2000)
       await  browser.url("https://www.igp.com/cakes/bengaluru")
       await browser.maximizeWindow()
       await browser.pause(3000) 
       await Igp.igpcakebuy('560100')
       await browser.pause(3000)
                 
    let a=  await Igp.radiobutton.getLocation()
      let x=await a.getLocation('x')
      let y=await a.getLocation('y')
    //   await browser.execute(()=>{window.scrollY})
    //    await browser.pause(3000)
       await browser.scroll(x,y)
       
       await browser.pause(3000)
    //         let a=await Igp.addtocartvalidate.getText()
    //         console.log(a);
    //   // await expect(await Igp.addtocartvalidate).toHaveValue('a')
    //    // let a=await browser.$("//div[@class='c-scroll-container']/descendant::div[@class='d-flex']//p[@class='c-item-name Paragraph-16-M--Regular ']")
    //     //       console.log((`the cake name is :${a.getText()}`));
    })
   //  it('validation test',async()=>{
             
                     



   //  })
   
 })