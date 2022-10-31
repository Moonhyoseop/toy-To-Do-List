let inputBox = document.getElementById('inputBox')
let addBtn = document.getElementById('addBtn')
let toDolist = document.getElementById('toDolist')
let clear = document.getElementById('clear')
let clock = document.getElementById('clock')


// 현재 날짜 구하기
function getTime(){
    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let date = today.getDate();
    const week = ['일','월','화','수','목','금','토']
    let day = week[today.getDay()];

    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds(); 
    
    showTime = `${year}-${month}-${date}-${day}요일 
    ${hours}시 ${minutes}분 ${seconds}초`;

    document.getElementById('clock').innerText = showTime;
}
setInterval(getTime,1000);

// + 버튼 클릭

var data = [];

addBtn.addEventListener('click', function(){
    let list = document.createElement('li');
    
    data.push(inputBox.value)
    let obj = {...data}
    
    console.log(obj)

    if(!inputBox.value){
        alert('내용을 입력해주세요')
    }else{
        list.innerText = inputBox.value;
        toDolist.appendChild(list);
        inputBox.value="";

        var reBtn = document.createElement('button')
        reBtn.innerText = '수정'
        toDolist.appendChild(reBtn);
    }
    reBtn.addEventListener('click', function(){
       let list = document.createElement('input')
       
    })

// 모두 삭제 버튼 클릭
    clear.addEventListener('click',function(){
    
        list.style.display = 'none';
        reBtn.style.display = 'none';
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
        list.style.display = 'none';
        reBtn.style.display = 'none';
    })
})