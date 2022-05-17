let html=document.querySelector("#html")
let javascript=document.querySelector("#javascript")
let react=document.querySelector("#react")
let html_projects = document.querySelector("#html_projects")
let javascript_projects = document.querySelector("#JavaScript_projects")
let react_projects = document.querySelector("#React_projects")
let click="false"
console.log(click)
html.addEventListener("click", function(){
    html_projects.classList.toggle('html_projects');
    javascript_projects.classList.add("JavaScript_projects")
    react_projects.classList.add("React_projects")
})


javascript.addEventListener("click", function(){
    javascript_projects.classList.toggle('JavaScript_projects');
    html_projects.classList.add("html_projects")
    react_projects.classList.add("React_projects")
})


react.addEventListener("click", function(){
    react_projects.classList.toggle('React_projects');
    html_projects.classList.add("html_projects")
    javascript_projects.classList.add("JavaScript_projects")
})