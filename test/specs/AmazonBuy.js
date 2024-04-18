import AmazonPage from "../pageobjects/AmazonPage.js";
import ExcelUtility from "../../Utilities/ExcelUtility.js";
describe('amazon test', ()=>{
    it('amazon buy demo',async()=>{

        await browser.url('https://www.amazon.in/s?k=iphone&crid=1DZCY9RB1P0DM&sprefix=iphone%2Caps%2C246&ref=nb_sb_noss_1')
        await browser.pause(2000)
        await browser.maximizeWindow()
        await AmazonPage.AmazonPage('iphone')
        await browser.pause(2000)
        
      //  await browser.pause(3000)
      let   book1=new excel.Workbook()
      await  book1.xlsx.readFile(Filepath)
     let  sheet1 =book1.addWorksheet(SheetName)

       await AmazonPage.mobilenames.map(async(ele)=>{
           let names = await ele.getText();
            await ExcelUtility.writedataToExcel('./test/TESTDATA/Data.xlsx','Sheet10',1,1,names)
            //Apple iPhone 14 Plus (128 GB) - Purple
            //Apple iPhone 14 Plus (128 GB) - Purple
        })
        
        await browser.pause(3000)
            await AmazonPage.pricedetails.forEach(async(element)=>{
                    console.log(await element.getText());
            
        })

      



    })
})