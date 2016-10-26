 for(var i=0; i<10; i++) {
     var num = random(20,300);
     d3.select("svg")
         .append("rect")
         .attr({ 
         x: 15, 
         y: 27+15*i, 
         width: num, 
         height: 10, 
         fill: "#604f33" 
     });
     d3.select("svg")
         .append("text")
         .attr({
         fill: "white",
         x: 20 + num, 
         y: 36+15*i,               
     }).text(num);
    }
    function random(n,m) {
        return Math.ceil(Math.random()*(m-n)+n);
    }

//<!-- ++++++陣列++++++++++++ -->

var arr=[50, 70, 99, 44, 20, 77, 90]
var body= d3.select("body")
for(var i=0; i<arr.length; i++){
    if(arr[i]<60){
        d3.select(".sc") 
        .append("p")
        .text(arr[i] + " 不及格")
        .style({color: "red"});
    }
    else if(arr[i]<80){
        d3.select(".sc")
            .append("p")
            .text(arr[i])
            .style({color:"black"});
    }
    else{
        d3.select(".sc")
        .append("p")
        .text(arr[i] + " 80分以上")
        .style({color: "blue"});
    }
    
}

var myShoes = {
    brand: "nike",
    size: 25,
    price: 3000,
    forFemale: true,
};

//<!-- // -->////音符

d3.select(".music")
.append("rect")
.attr({x:"160", y:"45", width:"5", height:"78"});
d3.select(".music")
.append("circle")
.attr({cx:"150", cy:"120",r:"15"});
d3.select(".music")
.append("line")
.attr({x1:"0", y1:"45", x2:"300", y2:"45", stroke:"black", stroke_width:"2"});
d3.select(".music")
.append("line")
.attr({x1:"0", y1:"75", x2:"300", y2:"75", stroke:"black", stroke_width:"2"});
d3.select(".music")
.append("line")
.attr({x1:"0", y1:"105", x2:"300", y2:"105", stroke:"black", stroke_width:"2"});
d3.select(".music")
.append("line")
.attr({x1:"0", y1:"135", x2:"300", y2:"135", stroke:"black", stroke_width:"2"});
d3.select(".music")
.append("line")
.attr({x1:"0", y1:"165", x2:"300", y2:"165", stroke:"black", stroke_width:"2"});
d3.select(".music")
.append("text")
.attr({x:"140", y:"200"})
.text("A");

