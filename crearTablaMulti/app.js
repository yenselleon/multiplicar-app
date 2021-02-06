const fs = require('fs');



let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {
        let data = "";

        if(!Number(base)){
            reject(`El parametro introducido ${base} no es un valor valido`);
            
            return
        }
            for(let index = 1; index <= limite; index++) {
                data += `${base} * ${index} = ${base * index}\n`;
    
            }
    
    
            fs.writeFile(`./tabla/tabla-${base}.txt`, data, (err) => {
                if (err) 
                    reject(err);
                else
                    resolve(`tabla-${base}.txt`);
            });

        


    });

};





module.exports = {
    crearArchivo
}
