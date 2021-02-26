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

function createTmpTasks(tasks, criterion){
    let result;
    
    if(criterion !== ""){
        result = tasks.filter((item)=>{
            item.includes(criterion);
        })
    }
    else{
        result = tasks;
    }
    
    return result;
}

function main(){
    let page = getPage();
    let isInpNewEmpty = true;
    let newTask = "";
    let criterion = "";
    let tasks = [];
    let tmpTasks = [];
    
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
            alert('Write task which you want to add, before you click "Add task", please.');
        }

        tmpTasks = createTmpTasks(tasks, criterion);
    });

    page.btnDelete.addEventListener("click", ()=> {

    });

    page.inpFind.addEventListener("input", ()=> {

    });
}

main();