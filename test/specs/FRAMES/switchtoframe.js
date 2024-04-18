describe('switchtoframe test', ()=>{

    it('frame test', async()=>{
        browser.url('https://demo.automationtesting.in/Frames.html')
        
        const pframe =await browser.$("//iframe[@style='float: left;height: 300px;width:600px']")
               
        browser.switchToFrame(1)
                
        await browser.$("//div[@class='col-xs-6 col-xs-offset-5']").setValue("shikha")
        driver.switchToFrame(pframe)
               

              
    })
})