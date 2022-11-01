const inputBox = document.getElementById('inputBox')
const addBtn = document.getElementById('addBtn')
const toDolist = document.getElementById('toDolist')
const clear = document.getElementById('clear')
const clock = document.getElementById('clock')


// 현재 날짜 구하기
function getTime(){
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    const week = ['일','월','화','수','목','금','토']
    const day = week[today.getDay()];

    const hours = today.getHours();
    const minutes = today.getMinutes();
    const seconds = today.getSeconds(); 
    
    showTime = `${year}-${month}-${date}-${day}요일 
    ${hours}시 ${minutes}분 ${seconds}초`;

    document.getElementById('clock').innerText = showTime;
}
setInterval(getTime,1000);

// + 버튼 클릭
let data = [];

addBtn.addEventListener('click', function(){
    const list = document.createElement('li');
    
    data.push(inputBox.value)

    if(!inputBox.value){
        data.pop();
        alert('내용을 입력해주세요')
    }else{
        list.innerText = inputBox.value;
        toDolist.appendChild(list);
        inputBox.value="";

        var modifyBtn = document.createElement('button')
        modifyBtn.innerText = '수정'
        toDolist.appendChild(modifyBtn);
    }

    console.log(data)
    
 // 수정 버튼 클릭   
    modifyBtn.addEventListener('click', function(){
   
    })

// 모두 삭제 버튼 클릭
    clear.addEventListener('click',function(){
    list.style.display = 'none';
    modifyBtn.style.display = 'none';
    data = [];
    console.log(data)
    })

// 리스트 한번 클릭
    list.addEventListener('click', function(){
        list.style.textDecoration = "line-through";
        list.style.textDecorationColor = 'red';
    })

// 리스트 더블 클릭
    list.addEventListener('dblclick', function(){
        data.forEach((element, i) => {
            data = data.splice(i,1)
            console.log(data)
        })
          
        
        
        list.style.display = 'none';
        modifyBtn.style.display = 'none';

    })
})

    
// 리스트 목록