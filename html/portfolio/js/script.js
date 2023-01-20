


document.querySelector('button').addEventListener('click', (e)=>{
  e.preventDefault();
  document.querySelectorAll("input").forEach(item=>{
   const input = item.value;
    const ajax = new XMLHttpRequest();
    ajax.open('127.0.0.1:8080');
    ajax.addEventListener('load', e=>{
        console.log(e.target)
    })
    ajax.send(input)
  });
})