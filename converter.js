const fs = require('fs');
const csvtojson = require('csvtojson');

const convert = (csvPath = './assets/customer-data.csv')=>{
   csvtojson()
  .fromFile(csvPath)
  .then((jsonObj)=>{

      fs.writeFileSync('./assets/customer-data.json', JSON.stringify(jsonObj, null, 5));
      console.log('Done');
  });
};
convert(process.argv[2]); 