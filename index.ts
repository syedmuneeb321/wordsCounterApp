import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";


const sleep=()=>new Promise((resolve)=>setTimeout(resolve,2000));

async function welcomeScreen(){
let title=chalkAnimation.rainbow(`
    =======================================================================
    >>>>>>>>>>>>>>>>>>>>>>>>> CURRENCY CONVERTER <<<<<<<<<<<<<<<<<<<<<<<<<<
    =======================================================================
    `);
await sleep();
title.stop();
};

await welcomeScreen();

async function main(){
    const paragraph=await inquirer.prompt([
        {
            type:"input",
            name:"value",
            message:`please enter a paragraph${chalk.yellow(":>>>")}`
        }
    ]);
    let str=paragraph.value;
    let words:string[];
    words=str.trim().split(" ");
    let characters=words.join("")
    console.log(`\nparagraph Words:${chalk.red(words.length)} and paragraph characters:${chalk.green(characters.length)}`)
}

await main();



export{};













// import inquirer from "inquirer";

// const anwser=await inquirer.prompt([
//     {
//         type:"input",
//         name:"para",
//         message:"enter a paragraph"
//     }
// ]);
    

// let words=anwser.para.trim().split(" ");
// console.log(`your sentence is ${words.length} consits words`);