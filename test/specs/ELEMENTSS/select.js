describe('select test',()=>{
    it('select demo test',async()=>{

        browser.url('https://demoapps.qspiders.com/ui/dropdown?sublist=0')

          let ele=await browser.$('#select3')
        await   browser.pause(3000)
      // await  ele.click();
       //browser.pause(3000)
       await  ele.selectByIndex(7);
      await  browser.pause(3000)
         let ele2= await browser.$('#select5')
       await   browser.pause(3000)
        await  ele2.selectByVisibleText('Odisha')
      await   browser.pause(3000)
        let  ele3=await browser.$('#optionCity')
        await browser.pause(3000)
        let ele4=await ele3.nextElement()
        console.log(ele4.getText());
        await browser.pause(3000)
        let ele5=await ele3.parentElement()
        console.log(ele5.getText());
        await browser.pause(3000)
        let ele6=await ele3.previousElement()
        console.log((ele6.getText()));
        //   await ele3.selectByAttribute('id','CityOpt1')
        //  await  browser.pause(3000)


         

    })

    })
