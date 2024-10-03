const fs = require('node:fs');
const process = require('process');

const folderNamepath = '101446598_comp3123_labtest1/question-3/Logs';
function createLog(){
    try {
    if (!fs.existsSync(folderNamepath)) {
        fs.mkdirSync(folderNamepath);
    }
    } catch (err) {
    console.error(err);
    }

    process.chdir(folderNamepath);
    for (let i = 1; i <= 10; i++) {
        const fileName = `log${i}.txt`;
        const fileContent = `This is Mia number ${i}`;
        
        fs.writeFileSync(fileName, fileContent);

        console.log(`${fileName}`);
    }
}
createLog();