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
            return item.includes(criterion);
        })
    }
    else{
        result = tasks;
    }
    
    return result;
}

function clearInput(input){
    input.value = "";
}

function clearTasks(tasks){
    tasks.length = 0;
    return tasks;
}

function updateUL(page, tmpTasks, tasks){
    page.ul.innerHTML = "";
    for(let i = 0; i < tmpTasks.length; i++){
        //create button - Delete one task
        let btnDelOne = document.createElement("button");
        btnDelOne.textContent = "Delete";
        btnDelOne.setAttribute("data-key",`${i}`);
        btnDelOne.addEventListener("click",(e)=>{
            let index = e.target.dataset.key;
            tasks.splice(index,1);
            updatePage(page, tmpTasks, tasks);
        });

        //create li
        let li = document.createElement("li");
        li.textContent = `${tmpTasks[i]}`;

        //add button into li
        li.appendChild(btnDelOne);
        
        //add li into ul
        page.ul.appendChild(li);
    }
}

function updatePage(page, tmpTasks, tasks){
    page.h1.textContent = `You have ${tmpTasks.length} tasks to do:`;
    updateUL(page, tmpTasks, tasks);
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
            clearInput(page.inpNew);
        }
        else {
            alert('Write task which you want to add, before you click "Add task", please.');
        }

        tmpTasks = createTmpTasks(tasks, criterion);
        updatePage(page, tmpTasks, tasks);
    });

    page.btnDelete.addEventListener("click", ()=> {
        tasks = clearTasks(tasks);

        //it working without 2 lines below
        tmpTasks = createTmpTasks(tasks, criterion);
        updatePage(page, tmpTasks, tasks);
    });

    page.inpFind.addEventListener("input", ()=> {
        criterion = getInput(page.inpFind);
        tmpTasks = createTmpTasks(tasks, criterion);
        updatePage(page, tmpTasks, tasks);
    });
}

main();