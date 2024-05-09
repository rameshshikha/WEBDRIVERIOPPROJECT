describe('demo test',function(){

    it('draganddrop',async()=>{

        await browser.url('https://demoapps.qspiders.com/ui/dragDrop/dragToMultiple?sublist=2')
         
               
        
        browser.pause(2000)
    let drag=    await browser.$("//div[.='Mobile Charger']")
    browser.pause(2000)
    let drop=await browser.$("//div[.='Laptop Accessories']")
             await  drag.dragAndDrop(drop);

              await  browser.pause(2000)
              console.log('draganddrop successfull');
        
    })
})
// let drag=await browser.$()
// let drop = await browser.$()
// await drag.dragAndDrop(drop)