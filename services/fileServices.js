const fs = require('fs');

exports.readJSON = (filePath) => {
    if(!fs.existsSync(filePath)) {
        return [];
    } 
    const data = fs.readFileSync(filePath);
    return JSON.parse(data);
}

exports.writeJSON = (filePath, data) => {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}