
let dateObj = new Date();
let year = dateObj.getFullYear();
let month = dateObj.getMonth();
if (month < 10) {
    month = '0' + month;
}
let date = dateObj.getDate();
if (date < 10) {
    date = '0' + date;
}
let todayDate = year + '-' + month + '-' + date;
console.log(todayDate);
document.querySelector("#due-date input").setAttribute('value', todayDate);

var task_category = document.querySelectorAll('#category-tasks');

for (var t of task_category){
    console.log(t.innerText.toLowerCase());
    if (t.innerText.toLowerCase() == "school") {
        console.log(t.style.backgroundColor);
        t.style.backgroundColor = '#f4f40699';
    }
    if (t.innerText.toLowerCase() == 'work') {
        t.style.backgroundColor = 'purple';
    }
    if (t.innerText.toLowerCase() == 'cleaning') {
        t.style.backgroundColor = 'green';
    }
    if (t.innerText.toLowerCase() == 'personal') {
        t.style.display = 'none';
    }
}