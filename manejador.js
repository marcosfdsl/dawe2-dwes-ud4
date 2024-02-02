const path = require('path');
const fs=require('node:fs');
const date= new Date();

function root(res, ruta){
    res.sendFile(path.join(__dirname, 'html', ruta));
    console.log("Rutear a : " + ruta);
    let archivo_accesos= fs.createWriteStream('accesos.txt', {"flags":"a"});
    archivo_accesos.write(
        date.toLocaleString() +
        " " + ruta + "\n");
}

exports.root = root;