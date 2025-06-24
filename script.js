let todolist = [];


function addTodo(){
    const inputElement = document.querySelector('.js-todo-name');
    const inputName = inputElement.value;
    const inputElementDate = document.querySelector('.js-todo-date');
    const inputDate = inputElementDate.value;

    if(inputName!=='' && inputDate!==''){
        todolist.push({name:inputName,date:inputDate});
    } 
    else if(inputName===''){
        alert('Give a name of the Todo');
    }
    else if(inputDate===''){
        alert('Select a date');
    }

    inputElement.value = '';
    inputElementDate.value = '';

    todoDisplay();
}

function todoDisplay(){
    let todolist_html = '';
    for(let i=0; i<todolist.length; i++){
        const todo = todolist[i];
        const cur_html = `
            <div>${i+1}.  ${todo.name}</div>
            <div>${todo.date} </div>
            <button onclick="
                todolist.splice(${i},1);
                todoDisplay();
            " class="delete-button"> Delete</button>
        `;
        todolist_html += cur_html;
    }

    document.querySelector('.js-todo-list').innerHTML = todolist_html;
}
