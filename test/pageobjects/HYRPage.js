class HYRPage{

      get firstnametf(){
        return $("//div[@class='container']/label[1]/following::input[1]")
      }

      get lastnametf(){
        return $("//div[@class='container']/label[1]/following::input[2]")
      }
      get Emailtf(){
        return $("//div[@class='container']/input[3]")
      }

      get Passwordtf(){
        return $("//div[@class='container']//child::div[2]/child::input[@type='password']")
      }
      get Repeatpwdtf(){
        return $("//div[@class='container']//child::div[2]/descendant::input")
      }
      get Registerbtn(){
        return $("//div[@class='container']//child::div[3]/button[@type='submit']")
      }

      async  RgisterApplication(fstname,lastname,email,pswd,repeatpwd){

               await   this.firstnametf.setValue(fstname)
               await browser.pause(3000)
               await   this.lastnametf.setValue(lastname)
               await browser.pause(3000)
               await   this.Emailtf.setValue(email)
               await browser.pause(3000)
               await   this.Passwordtf.setValue(pswd)
               await browser.pause(3000)
               await   this.Repeatpwdtf.setValue(repeatpwd)
               await browser.pause(3000)
               await this.Registerbtn.click()
      }
    
}
export default new HYRPage()