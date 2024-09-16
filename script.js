
let card = document.getElementById("card");
 
for(let item of imgPath){
    
    let div = document.createElement("div");
        div.classList.add("flex","flex-col","justify-center","items-center","p-12","border-2","border-border-color","rounded-xl");
    let img = document.createElement("img");
    img.src = item.image;
    img.classList.add("mb-10","w-full","h-full");
    let h3 = document.createElement("h3");
    h3.innerText = item.name;
    h3.classList.add("text-3xl","font-bold");
    let p = document.createElement("p");
    p.innerText = "Area (A) = 0.5 b";
    p.classList.add("text-base","text-para-text-color","mb-5");

    let inputDiv = document.createElement("div");
    inputDiv.classList.add("max-w-full","mx-auto","mb-12","flex","gap-2","md:gap-5");
    let input1 = document.createElement("input");
    input1.classList.add("w-[40%]","bg-gray-200", "rounded-md","px-3");
    input1.type = "text";
    input1.placeholder = "h";
    let input2 = document.createElement("input");
    input2.classList.add("w-[40%]","bg-gray-200", "rounded-md","px-3");
    input2.type = "text";
    input2.placeholder = "b";

    inputDiv.appendChild(input1);
    inputDiv.appendChild(input2);
    if(item.name==="pentagon"){
        inputDiv.removeChild(input2);
        input1.placeholder = "A";

    }
    else{
        inputDiv.appendChild(input2);
    }

    let btn = document.createElement("button");
    btn.innerText = "Calculate";
    btn.addEventListener("click", function(){
        item.func(input1, input2);
    });
    btn.classList.add("bg-btn-color","w-full","py-3","px-12","rounded-xl");
    

    div.appendChild(img);
    div.appendChild(h3);
    div.appendChild(p);
    div.appendChild(inputDiv);
    div.appendChild(btn);
    
    card.appendChild(div);
};


