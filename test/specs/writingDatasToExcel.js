import ExcelUtility from "../../Utilities/ExcelUtility.js";

describe('writedatatoexcel',()=>{
    it('writedata',async()=>{
        
        await ExcelUtility.writedataToExcel('./test/TESTDATA/Data.xlsx','Sheet7',2,4,'SDET55')
            
    })
})