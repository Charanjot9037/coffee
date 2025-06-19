console.log("hello");

let btn1=document.getElementById("rv1");
let btn2=document.getElementById("rv2");
let img=document.getElementById("ctri");
let comment=document.getElementById("ctr");
let nae=document.getElementById("namectr");
let i=1;
btn2.addEventListener("click",()=>{
    i++;
    if(i==1)
    {

img.src=`../assets/images/customer${i}.jpg`
comment.innerText=" Excellent atmosphere, delicious coffee, and outstanding baristas! In addition to general coffee drinks, they also provide bottled cold brew and nitro coffee. "
       nae.innerText="vidya";
  
}
    else if(i==2)
    {
        
        img.src=`../assets/images/customer${i}.jpg`;
        comment.innerText="Getting the best-roasted coffee from ( Coffee shop name) was well worth the two-hour drive! I appreciate the insightful conversation we had regarding coffee. We'll be back."
    nae.innerText="lavish";
    }
    else if(i==3)
    {
        img.src=`../assets/images/customer${i}.jpg`;
        comment.innerText="Getting the best-roasted coffee from ( Coffee shop name) was well worth the two-hour drive! I appreciate the insightful conversation we had regarding coffee. We'll be back."
    nae.innerText="Parinit";
    i=0;
    }
    
})

 btn1.addEventListener("click",()=>{
i--;

    if(i==0)
    {
i=3;
img.src=`../assets/images/customer${i}.jpg`
 comment.innerText="Getting the best-roasted coffee from ( Coffee shop name) was well worth the two-hour drive! I appreciate the insightful conversation we had regarding coffee. We'll be back."
    nae.innerText="Parinit";
  
}
    else if(i==2)
    {
        
        img.src=`../assets/images/customer${i}.jpg`;
        comment.innerText="Getting the best-roasted coffee from ( Coffee shop name) was well worth the two-hour drive! I appreciate the insightful conversation we had regarding coffee. We'll be back."
    nae.innerText="lavish";

    }
    else if(i==1)
    {
        img.src=`../assets/images/customer${i}.jpg`;
        comment.innerText="Getting the best-roasted coffee from ( Coffee shop name) was well worth the two-hour drive! I appreciate the insightful conversation we had regarding coffee. We'll be back."
    nae.innerText="Parinit";
    
    }



 })