let countEl=document.getElementById("count-el")
let count=0
function increment()
{
count=count+1
countEl.innerText = count
}
function reset()
{
    count=0
    countEl.innerText=count
    // saveEl.innerText="Previous Entries: "
}
let saveEl=document.getElementById("save-el")
function save()
{
     let countstr= count+ " - "
    saveEl.textContent+= countstr
}
