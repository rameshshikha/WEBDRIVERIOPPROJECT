describe('elements test',()=>{

    it('elements test',async()=>{


        browser.url('https://www.amazon.in/')

              let  search= await browser.$('#twotabsearchtextbox')
                                   search.addValue('mobile')
                                   search.clearValue();
                      let    attr=   search.getAttribute('name')
                      console.log(attr);

                      let ele=browser.$("//span[contains(text(), 'Back to top')] ")
                     console.log(ele.getLocation())

                     let x=ele.getLocation('x')
                     let y=ele.getLocation('y')
                     console.log('x','y');


                    //  let x=ele.getLocation('x')
                    //  let y=ele.getLocation('y')
                    //  console.log(x,y);







        

    })
})