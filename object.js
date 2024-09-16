
let imgPath = [
    {name:"triangle", 
        image : "./images/triangle.png",
        func: function (input1, input2){
           let x = input1.value;
           let y = input2.value;
           let result = 0.5*x*y;
           let p1 = document.getElementById("p1");
           p1.innerText = result.toFixed(1);
    }
},
    {name:"rhombus",
         image : "./images/rhombus.png",
          func : function(input1, input2){
            let x = input1.value;
            let y = input2.value;
            let result = 0.5*x*y;
            let p1 = document.getElementById("p1");
            p1.innerText = result.toFixed(1);
    }
},
    {name:"rectangle",
         image : "./images/rectangle.png", 
           func : function(input1, input2){
           let x = input1.value;
           let y = input2.value;
           let result = x*y;
           let p1 = document.getElementById("p1");
           p1.innerText = result.toFixed(1);
    }
},
    {name:"pentagon", 
        image : "./images/pentagon.png",
         func : function(input1, input2){
           let x = input1.value;
           let y = input2.value;
           let result = (1 / 4) * Math.sqrt(5 * (5 + 2 * Math.sqrt(5))) * Math.pow(x, 2);
           let p1 = document.getElementById("p1");
           p1.innerText = result.toFixed(1);
    }
},
    {name:"parallelogram", 
        image : "./images/parallelogram.png",
         func : function(input1, input2){
           let x = input1.value;
           let y = input2.value;
           let result = x*y;
           let p1 = document.getElementById("p1");
           p1.innerText = result.toFixed(1);
    }
},
    {name:"ellipse",
         image : "./images/ellipse.png", 
        func : function(input1, input2){
           let x = input1.value;
           let y = input2.value;
           let result = Math.PI * x * y;
           let p1 = document.getElementById("p1");
           p1.innerText = result.toFixed(1);
    }
}
];