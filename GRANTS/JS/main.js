function move() {
    var elem = document.getElementById("myBar"); 
    const hide = document.getElementById("hide"); 
    var width = 20;
    var id = setInterval(frame, 100);

    function frame() {
      if (width >= 100) {
        clearInterval(id);
        window.open("file:///home/orisha/Documents/PROGRAMMING/HTML/GRANTS/Body.html", self);
      } else {
        width++; 
        elem.style.width = width + '%'; 
       var e= elem.innerHTML = width * 1  + '%';
       
      }
    }
  }

  
  function Form() {
    const a = document.getElementById("a").value;
    const b = document.getElementById("b").value;
    const c = document.getElementById("c").value;
    const d = document.getElementById("d").value;
    const e = document.getElementById("e").value;
    const name = document.getElementById("name");
    const details = [a,b,c,d,e];
  
    window.open("file:///home/orisha/Documents/PROGRAMMING/HTML/GRANTS/Load.html", self);
    const data = window.localStorage;
    data.setItem("fullName", a);
    data.setItem("address", b);
    data.setItem("city", c);
    data.setItem("state", d);
    data.setItem("occupation", e);
    data.setItem("income", f);
    const get = window.localStorage.getItem("fullname");
    console.log(get);

    retrive(get);

    function retrive(get) {
      return name.innerHTML = get ;
    }
  }
 

function condition() {
  const info1 = document.getElementById("info1");
  const info2 = document.getElementById("info2")
  
  if(onclick = true){
    info1.style = "display:none;"
    info2.style = "display:block;"
  }else{
    condition2();
  }
}

function condition2() {
  const info1 = document.getElementById("info1");
  const info2 = document.getElementById("info2")
  
  if(onclick = true){
    info1.style = "display:none;"
    info2.style = "display:block;"
  }else{
    condition2();
  }
}

