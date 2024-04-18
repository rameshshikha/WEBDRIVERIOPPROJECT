class FlipkartPage{

    get mobilebtn(){
        return $("//img[@alt='Mobiles']")
    }
    get searchbtn(){
        return $("//input[@name='q']")

    }
    get searchbtn(){
        return $("//button[@type='submit']")

 }
     get mobilename(){
        return $("//div[.='REDMI Note 13 Pro+ 5G (Fusion Purple, 256 GB)']")
 }
      get addtocart(){
        return $("//button[@class='_2KpZ6l _2U9uOA _3v1-ww']")
      }
      get placeorder(){
        return $("//span[.='Place Order']")
      }
      async flipkrtbuypage(search){
        await this.searchbtn.setValue(search)
      }      
}

export default new FlipkartPage()