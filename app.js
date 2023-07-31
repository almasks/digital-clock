const ans =document.getElementById("result")
window.addEventListener('load',setInterval(()=>{
    const d =new Date()
    const hour =d.getHours()
    const minute =d.getMinutes()
    const second =d.getSeconds()
     ans.innerHTML =hour + ":" + minute + ":" +second}),1000
)