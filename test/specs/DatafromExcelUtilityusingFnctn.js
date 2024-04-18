import { Readdata,writedata } from "../../Utilities/ExceUtilityUsingFunction.js";


describe('datafromexcelutility',()=>{
    it('data',async()=>{
       let data= await Readdata('./test/TESTDATA/Data.xlsx','Sheet1',1,1)
       console.log(data);

       await writedata('./test/TESTDATA/Data.xlsx','sheet8',2,2,'helloworld')
    })
})