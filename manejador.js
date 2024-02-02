const path = require('path');

function root(res, ruta){
    res.sendFile(path.join(__dirname, 'html', ruta));
    console.log("Rutear a : " + ruta);
}

exports.root = root;