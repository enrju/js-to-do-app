// What is does: get elements from HTML
//        input: none
//       output: structure of elements from HTML
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

// What is does: get value from input
//        input: input - which input
//       output: value from input
function getInput(input){
    return input.value;
}

// What is does: add task into array of tasks
//        input: task - task for adding
//               tasks - array of tasks
//       output: array of tasks
function addTask(task, tasks){
    tasks.push(task);
    return tasks;
}

// What is does: create array of tasks for display
//               with tasks meeting the criterion
//        input: tasks - array of tasks
//               criterion - the text that the task must contain
//       output: array of tasks meeting the criterion
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

// What is does: clear input on HTML
//        input: input - which input
//       output: none
function clearInput(input){
    input.value = "";
}

// What is does: delete all tasks from list
//        input: tasks - array of tasks
//       output: array of tasks
function clearTasks(tasks){
    tasks.length = 0;
    return tasks;
}

// What is does: add tasks into HTML - complete ul mark
//               connect event for delete single task
//               modify list of task after delet single task
//        input: page - task for adding
//               tmpTasks - array of tasks for display
//               tasks - array of tasks
//       output: none
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

// What is does: update elements in HTML
//        input: page - task for adding
//               tmpTasks - array of tasks for display
//               tasks - array of tasks
//       output: none
function updatePage(page, tmpTasks, tasks){
    page.h1.textContent = `You have ${tmpTasks.length} tasks to do:`;
    updateUL(page, tmpTasks, tasks);
}

// What is does: main function of program
//        input: none
//       output: none
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