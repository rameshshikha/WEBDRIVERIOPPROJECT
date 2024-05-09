import { expect } from "chai";

describe('window test',()=>{

    it('switchtowindow test',async()=>{

        await browser.url('https://webdriver.io')
        await browser.createWindow('window');
        await browser.newWindow('https://www.amazon.in/')
        await browser.newWindow('https://www.facebook.com/')
          console.log( await browser.getTitle());
      const  windows=await browser.getWindowHandles()
      console.log(windows);

               await   browser.switchToWindow(windows[1])
                 await browser.switchWindow('Facebook – log in or sign up')
                 expect(window).toHaveUrl('https://www.facebook.com/')
                await expect(browser).toHaveUrl('https://www.amazon.in/')
              
                await expect(browser).toHaveUrl('https://www.facebook.com/')
              //  const  window=await browser.getWindowHandle()
               // console.log(window);

    })
})