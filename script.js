let val;
function submit(){
    val=document.getElementById('text').value;
    let wrapper=document.getElementById('wrapper');
    let wrapperInr=document.createElement('div');
    console.log(wrapper);
    wrapperInr.innerHTML=`<input type="checkbox" class="checkbox"><div class="wrapper-inr">${val} </div><div class="delete disabled act-btn">X</div><div class="edit disabled act-btn" contentEditable="false">Edit</div>`;
    wrapper.append(wrapperInr);
    document.getElementById('text').value="";
    attachDeleteBtn();
    attachEditBtn();
    checkfun()
}  

 // delete
function attachDeleteBtn(){
    let dltButton = document.querySelectorAll('.delete');
    dltButton.forEach(e=>{
        e.addEventListener('click', function(){
            this.parentElement.remove();
        })
    })
}
attachDeleteBtn();

// Edit
function attachEditBtn(){
    let editBtn = document.querySelectorAll('.edit');
    editBtn.forEach(e=>{
        e.addEventListener('click', function(){
           let parentElem = this.parentElement;
           let editElem = parentElem.querySelector('.wrapper-inr');

           editElem.contentEditable = true;
           editElem.focus();

           editElem.addEventListener('blur',function(){
            editElem.contentEditable = false;
           })
        })
    })
}

function checkfun(){
    const checkbox = document.querySelectorAll('.checkbox');
    checkbox.forEach(e=>{
        e.addEventListener('click',function(){
            let parentElem=this.parentElement;
            let actionbtn=parentElem.querySelectorAll('.act-btn');
            if(e.checked){
                actionbtn.forEach(Element=>{
                    Element.classList.remove('disabled');
                })
            }
            else{
               actionbtn.forEach(Element=>{
                    Element.classList.add('disabled');
                })
            }
        })
    })
}
checkfun();