let btnAddTaskEl=document.querySelector('button')
let taskNameEl = document.querySelector('#content')
btnAddTaskEl.addEventListener('click',function(){
    if(!taskNameEl.value){
        alert('Vui lòng nhập tên công việc')
        return false;
    }

    let task= [] 
    task.push({name: taskNameEl.value})
   taskNameEl.value=''
   renderTasks(task)
})

function renderTasks(tasks= []) {
    let content= '<ul>'
    tasks.forEach((task)=>{ 
     content+=   '<li>
    <div class="task-name">${task.name}</div>
    
    <a href="#">Sửa</a>
    <a href="#">Xóa</a>
</li>'
    })
    content+= '</ul>'
    
}
