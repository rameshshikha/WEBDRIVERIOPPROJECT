import { parse } from "path";
import JsonPrctice from "../pageobjects/JsonPrcticePage.js";
//importing the fs from js
import fs from "fs"
import { log } from "console";
//using a method to fetch the path of jsonfile
let credential=fs.readFileSync('./test/TESTDATA/jasonData.json')
let data = JSON.parse(credential)   //parsing to javascript

  describe('JSON test',()=>{
//     data.forEach(ele=> {
//               let un=ele.username
//               let pwd=ele.password
//               console.log(`===>`un,` ====>`pwd);

// //fetching single data not required any foreach loop
//change the json file before excuting into single data

     let un  =  data.username

      let pwd =  data.password
      console.log(un , pwd);
      

              it('Json test',async()=>{
                await browser.url('https://practicetestautomation.com/practice-test-login/')
                await browser.maximizeWindow()
                await browser.pause(3000)
                await JsonPrctice.loginToapp(un,pwd)
                await browser.pause(3000)
              })
         
        
        
  });
 // })
