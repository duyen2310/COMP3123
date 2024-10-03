const fs = require('node:fs');
const process = require('process');

const folderNamepath = '101446598_comp3123_labtest1/question-3/Logs';
function removeLogs(){
    process.chdir(folderNamepath);

    for (let i = 1; i <= 10; i++) {
        const fileName = `log${i}.txt`;

        if(fs.existsSync(fileName)){
            fs.rm(`log${i}.txt`, { recursive: true, force: true }, (err) => {
                if (err) {
                    console.error(`Cannot delete`);
                } else {
                    console.log(`${fileName} is deleted!`);
                }
            });
        }
    }
}

removeLogs();