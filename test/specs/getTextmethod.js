

describe('getetxt method',()=>{

    it('amazon test',async()=>{

           await  browser.pause(3000)
           await browser.url('https://www.amazon.in/');
           await browser.pause(3000)
           let search= await browser.$('#twotabsearchtextbox')
          await  browser.pause(3000)
           await search.setValue('apple mac book')
          await  browser.keys('Enter');
           await browser.pause(3000)

               let text= await browser.$("//a[text()='Mobiles']")
               await browser.pause(3000)
               let a= await text.getText(text)
              await  browser.pause(3000)
               await console.log(a);

      })
//it.only will run only this it({})block
//it.skip will skip the particular it({})block
//xit will also skip the particular it({})block

      it('amazon test 2',async()=>{

        await  browser.pause(3000)
        await browser.url('https://www.amazon.in/');
        await browser.pause(3000)
        let search= await browser.$('#twotabsearchtextbox')
       await  browser.pause(3000)
        await search.setValue('apple mac book')
       await  browser.keys('Enter');
        await browser.pause(3000)

        let addtocart= await  browser.$("//button[.='Add to cart']")
                 await browser.pause(3000)
                  await addtocart.click();


   })
})