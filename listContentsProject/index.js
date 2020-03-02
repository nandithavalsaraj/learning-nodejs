//file system module is abbrevieted as 'fs' everwhere.
const fs = require('fs');

//syntax is => fs.readdor(path[,optionas], callback)  
//fs.readdir(".", (err, filenames) =>{
fs.readdir(process.cwd(), (err, filenames) =>{
	if(err){
		console.log(err);
	} 
	else{
		console.log(filenames);
	}
});
