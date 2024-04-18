describe('suit test',()=>{
    it.skip('move to element',async()=>{
            
        await browser.pause(3000)
           await  browser.url('https://demoapps.qspiders.com/ui/mouseHover/tab?sublist=3')
          await  browser.pause(3000)
           let icon=(await browser.$("//li[@class='kids p-4 relative']")).moveTo()

          
          await  browser.pause(3000)        
    })

it('movebyoffset',async()=>{
            
    browser.url('https://demoapps.qspiders.com/ui/radio?sublist=0')
    await browser.pause(3000)
    let ele=await browser.$("//button[@id='btn']")
    await browser.pause(3000)
    let loc= await ele.getLocation()
    await browser.pause(3000)
    console.log(loc);
    await browser.pause(3000)
    let x=await ele.getLocation('x')
    await browser.pause(3000)
    let y=await ele.getLocation('y')
    await browser.pause(3000)
    console.log(x, y);
    await browser.pause(3000)

        await   ele.moveTo(x,y)
})



})