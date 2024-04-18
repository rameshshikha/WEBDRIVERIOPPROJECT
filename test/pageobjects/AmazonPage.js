class AmazonPage{

    get searchbtn(){
        return $("//input[@id='twotabsearchtextbox']")
    }
    get searchclick(){
        return $('#nav-search-submit-button')
    }
    get checkboxbtn(){
         return $("//li[@id='p_90/6741117031']/descendant::i[@class='a-icon a-icon-checkbox']")
    }

    get mobilenames(){
   return $$("//span[@class='a-size-medium a-color-base a-text-normal']")
    }
    get pricedetails(){ 
        return  $$("//div[@class='sg-col-inner']/descendant::span[@class='a-price-whole']")
    }
    async AmazonPage(phonename){
       await this.searchbtn.setValue(phonename)
       await this.searchclick.click()
      
        // await browser.execute(() =>{ window.scrollY})
        // await browser.scroll(0, 500)
        await browser.pause(3000)
        await this.checkboxbtn.click()
       
        
    }
    // get addtocartbtn(){
    //     return $("//span[@id='submit.add-to-cart']")
    // }
    // get proceedbtn(){
    //     return $("//span[@id='attach-sidesheet-checkout-button-announce']")
    // }
    //   get emailbtn(){
    //     return $("//input[@id='ap_email']")
    //   }
    //   async Amazonbuy(search){
    //     await this.searchbtn.setValue(search)
        

      }   
        
        

      

export default new AmazonPage()