import excel from "exceljs"

describe('Storevalue to excel',()=>{
    it('getdatatoexcel',async()=>{

        const book=new excel.Workbook()
        book.xlsx.readFile('./test/TESTDATA/Data.xlsx')
        const sheet=book.getWorksheet('Sheet1')
        for(let i=1;i<=4;i++){
            for(let j=1;j<=4;j++){
                sheet.getRow(i).getCell(j).value='country'
               
                // sheet.getRow(1).getCell(2).value='Capital'
                // sheet.getRow(2).getcell(1).value='India'
                // sheet.getRow(2).getcell(2).value='delhi'    

               
            
            }
           // console.log('\n');
        }
        await book.xlsx.write('./test/TESTDATA/Data.xlsx')
    })
})