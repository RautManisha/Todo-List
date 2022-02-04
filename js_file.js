console.log("hello")

const todo_form = document.querySelector(".todo-form")
const todo_input = document.querySelector(".todo-form input[type='text']")
const todo_list = document.querySelector(".todo-list")

const remove_todo_button = document.querySelector(".remove")
const done_todo_button = document.querySelector(".done")

todo_form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const new_todo_element = document.createElement("li")
    new_todo_element.innerHTML = `
        <span class="text">${todo_input.value}</span>
        <div class="todo-buttons">
            <button class="btn todo-btn done">Done</button>
            <button class="btn todo-btn remove">Remove</button>
        </div>
    `
    todo_list.append(new_todo_element)
    todo_input.value = ""
})

todo_list.addEventListener("click", (e)=>{
    if(e.target.classList.contains("remove")){
        const targetLi = e.target.parentNode.parentNode
        targetLi.remove()
    } else if(e.target.classList.contains("done")){
        const targetLi = e.target.parentNode.previousElementSibling
        targetLi.style.textDecoration = "line-through"
        e.target.classList.remove("done")
        e.target.classList.add("undo")
        e.target.textContent = "Undo"
    } else if(e.target.classList.contains("undo")){
        const targetLi = e.target.parentNode.previousElementSibling
        targetLi.style.textDecoration = "none"
        e.target.classList.add("done")
        e.target.classList.remove("undo")
        e.target.textContent = "Done"
    }
})