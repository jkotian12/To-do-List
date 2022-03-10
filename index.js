const domStuff =(() => {
    const projectList = document.getElementById("projectList");
    const container = document.getElementById("container");
    const bod = document.getElementById("bod");
    const todoHeader = document.getElementById("header");
    const addButton = document.getElementById("add");
    return{projectList ,bod, todoHeader, addButton, container};
})()

const addProject = function(){
    let add = domStuff.addButton
    add.style.height = "300px"
    domStuff.projectList.style.width = "300px"
    domStuff.container.style.gridTemplateColumns = "20% 80%"
    document.querySelector("span").style.display="none"
    document.querySelector(".gg-add").style.display="none"
    let sub = document.createElement("form")
    let title = document.createElement("input")
    title.placeholder ="Title"
    let desc = document.createElement("input")
    desc.placeholder ="Give Description"
    let dueDate = document.createElement("input")
    dueDate.placeholder ="Due Date"
    let priority = document.createElement("input")
    priority.placeholder ="Priority"
    add.appendChild(sub)
    sub.appendChild(title)
    sub.appendChild(desc)
    sub.appendChild(dueDate)
    sub.appendChild(priority)
    sub.style.display = "flex"
    sub.style.flexDirection ="column"
    
}

class Project {
    constructor(pName, desc, subDate, priority){
        this.pName = pName;
        this.desc = desc;
        this.subDate = subDate;
        this.priority = priority;
    }
details(){
    return `${this.pName, this.desc, this.subDate = subDate,this.priority = priority}`
}
}

class toDo{
    constructor(title, desc, due, priority){
        this.title = title;
        this.desc = desc;
        this.due = due;
        this.priority = priority;
    }
}
domStuff.addButton.addEventListener("click",()=>{
    console.log("here");
addProject()})