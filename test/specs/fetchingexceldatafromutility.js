import ExcelUtility from "../../Utilities/ExcelUtility.js";


describe('excelfromutlity',()=>{
    
    it('readdatafromexcel',async()=>{
        
      let data=  await  ExcelUtility.ReadDatafromExcel('./test/TESTDATA/Data.xlsx','Sheet1',1,1)
      console.log(data);
    })
})