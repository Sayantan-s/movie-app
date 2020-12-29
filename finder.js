const dataObject = {
    name : 'Sayantan',
    college : {
        cgpa : 8.5,
        stream : 'Information Technology',
        
    }
}
const fs = require('fs');

fs.writeFile('file.json',JSON.stringify(dataObject),(err,data) =>{
    if(err){
        console.log(err);
    }
    console.log(data + "is uploaded")
}) 