
const draggables = document.querySelectorAll('.draggable')
const containers = document.querySelectorAll('.container')


draggables.forEach(draggable =>{
    draggable.addEventListener('dragstart', ()=>{
        draggable.classList.add('dragging')    // css class
    })
draggable.addEventListener('dragend',()=>{
    draggable.classList.remove('dragging')
})
})

containers.forEach((container)=>{
    container.addEventListener('dragover',e =>{
        e.preventDefault()
        const afterElement = getDragAfterElement(container,e.clientY)
        console.log(afterElement);
        const draggable = document.querySelector('.dragging')
        container.appendChild(draggable)
    })
}) 


function getDragAfterElement(container,y){
   const draggableElementsInsideContainer= [...container.querySelectorAll('.draggable:not(.dragging)')]
   return draggableElementsInsideContainer.reduce((closest,child)=>{
        const box =child.getBoundingClientRect()
        const offset= y- box.top - box.height/2
        console.log(offset);
        if(offset<0 && offset>closest.offset){
            return{ offset:offset,element:child}
        }else{
            closest
        }
    },{offset: Number.NEGATIVE_INFINITY})
}