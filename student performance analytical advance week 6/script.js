const navLinks=document.querySelector(".nav-links");

function toggleMenu(){
navLinks.classList.toggle("active");
}

document.querySelectorAll(".nav-links a").forEach(link=>{
link.addEventListener("click",()=>{
navLinks.classList.remove("active");
});
});

const themeBtn=document.getElementById("themeBtn");

themeBtn.addEventListener("click",()=>{

document.body.classList.toggle("dark-mode");

themeBtn.textContent=document.body.classList.contains("dark-mode")
?"☀️":"🌙";

});

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({
behavior:"smooth"
});

}

});

});

const counters=document.querySelectorAll(".counter");

counters.forEach(counter=>{

const updateCounter=()=>{

const target=+counter.dataset.target;

const count=+counter.innerText;

const increment=Math.ceil(target/80);

if(count<target){

counter.innerText=count+increment;

setTimeout(updateCounter,20);

}else{

counter.innerText=target;

}

};

updateCounter();

});

const progress=document.getElementById("progressBar");

window.addEventListener("load",()=>{

progress.style.width="87%";

});

const search=document.getElementById("searchInput");

search.addEventListener("keyup",()=>{

const value=search.value.toLowerCase();

const rows=document.querySelectorAll("tbody tr");

rows.forEach(row=>{

const text=row.innerText.toLowerCase();

row.style.display=text.includes(value)?"":"none";

});

});

const form=document.getElementById("studentForm");

const message=document.getElementById("message");

form.addEventListener("submit",e=>{

e.preventDefault();

const name=document.getElementById("studentName").value.trim();

const email=document.getElementById("studentEmail").value.trim();

const marks=document.getElementById("studentMarks").value;

const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(name.length<3){

message.style.color="red";

message.textContent="Enter a valid student name.";

return;

}

if(!emailPattern.test(email)){

message.style.color="red";

message.textContent="Enter a valid email.";

return;

}

if(marks===""||marks<0||marks>100){

message.style.color="red";

message.textContent="Marks must be between 0 and 100.";

return;

}

message.style.color="green";

message.textContent="Student added successfully.";

form.reset();

setTimeout(()=>{

message.textContent="";

},3000);

});

const sections=document.querySelectorAll("section");

const links=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-120;

if(window.scrollY>=top){

current=section.getAttribute("id");

}

});

links.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});