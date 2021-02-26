function getPage(){
    const inpNew = document.querySelector("input.new");
    const inpFind = document.querySelector("input.find");
    const btnAdd = document.querySelector("button.add");
    const btnDelete = document.querySelector("button.delete");
    const h1 = document.querySelector("h1");
    const ul = document.querySelector("ul");

    return {
        inpNew,
        inpFind, 
        btnAdd, 
        btnDelete, 
        h1, 
        ul};
}

function getInput(input){
    return input.value;
}

function addTask(task, tasks){
    tasks.push(task);
    return tasks;
}

function main(){
    let page = getPage();
    let isInpNewEmpty = true;
    let newTask = "";
    let tasks = [];
    
    page.btnAdd.addEventListener("click", (e)=> {
        e.preventDefault();

        newTask = getInput(page.inpNew);
        
        if(newTask === ""){
            isInpNewEmpty = true;
        }
        else{
            isInpNewEmpty = false;
        }

        if(isInpNewEmpty === false){
            tasks = addTask(newTask, tasks);
            console.log(tasks);
        }
        else {
        }
    });

    page.btnDelete.addEventListener("click", ()=> {

    });

    page.inpFind.addEventListener("input", ()=> {

    });
}

main();