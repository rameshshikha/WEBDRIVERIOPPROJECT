describe('window test' , ()=>{
    it('getwindowhandles test' , async()=>{



    //   console.log( await browser.status()); 
    //    await browser.pause(2000)  
    //    console.log(await browser.getTimeouts());
    //  await browser.pause(2000)  
    //    browser.setTimeouts(100,125,135)
    //  await browser.pause(2000)  
    //  console.log(await browser.getTimeouts()); 

//  await  browser.url('https://webdriver.io')
await rowser.pause(3000)
   await browser.navigateTo('https://webdriver.io')
    
   await browser.pause(3000)
     console.log(await browser.getUrl()); 

     await browser.pause(3000)
            await browser.$("//a[.='API']").click();
            await browser.pause(3000)
                        await expect(browser).toHaveUrl("https://webdriver.io/docs/api")
                        await rowser.pause(3000)
                          await browser.back();
                          await rowser.pause(3000)
                         await expect(browser).toHaveUrl("https://webdriver.io/")
                         await rowser.pause(3000)
         await browser.forward();
         await expect(browser).toHaveUrl("https://webdriver.io/docs/api")      
            await browser.$("//a[.='Protocols']").click();
          await browser.refresh();

browser.getWindowHandles()



    })


    it.skip('getwindowhandles',async()=>{
            await   browser.url('https://webdriver.io/docs/api/webdriver/#gettitle')
            await   browser.getTitle();


    })
})