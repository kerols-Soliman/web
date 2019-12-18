var butto=document.getElementById("bu");
var array=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var up=document.getElementById("up");
var txt1=document.getElementById("txt1");
var div=document.getElementById("div1");
var img=document.getElementById("img1");
up.innerHTML=array+"<br>";

var locals=window.localStorage;
var key=locals.length;
// load
window.addEventListener("load",function(e){
    var n=key=key+1;
    locals.setItem(n+"."+e.target ,e.type+" "+new Date().toLocaleTimeString());
});

//unload
window.addEventListener("unload",function(e){
    var n=key=key+1;
    locals.setItem(n+"."+e.target ,e.type+" "+new Date().toLocaleTimeString());
});

//button generate
butto.addEventListener("click",function(e){
    img.style.display="none";
    div.textContent="";
    var n=key=key+1;
    locals.setItem(n+"."+e.target.textContent ,e.type+" "+new Date().toLocaleTimeString());
    rep(txt1.value);
});
//to get char random
function getele(){
    return array[Math.floor(Math.random()*array.length)];
}

var ar_img={A:"a.jpg",B:"b.jpg",C:"c.jpg",D:"d.jpg",E:"e.jpg",F:"f.jpg",G:"g.jpg",H:"h.jpg",I:"i.jpg",J:"j.jpg",K:"k.jpg",L:"l.jpg",M:"m.jpg",N:"n.jpg",O:"o.jpg",P:"p.jpg"
,Q:"q.jpg",R:"r.jpg",S:"s.jpg",T:"t.jpg",U:"u.jpg",V:"v.jpg",W:"w.jpg",X:"x.jpg",Y:"y.jpg",Z:"z.jpg"
};

function rep(e){
    for(var i=0;i<e;i++){
        var ne=document.createElement("button");
        var e1=getele();
        ne.append(e1);
        div.appendChild(ne);
    }
    var buttoncreated=document.getElementsByTagName("button");
    
    for(var i=2;i<buttoncreated.length;i++){
        buttoncreated[i].addEventListener("click",function(e){
            var x=e.target.textContent;
            var n=key=key+1;
            locals.setItem(n +"."+e.target.textContent,e.type+" "+new Date().toLocaleTimeString());
            img.style.display="block";
            img.setAttribute("src",ar_img[x]);
        });
    }
}    

//timer down
var timer=5;
var interval=setInterval(display,1000);
function display(){
    if(timer>0){
        timer=timer-1;
    }
    else{

        // edit project
        function localrow(key,value){
            this.key=key;
            this.value=value;
        }
        for(var $i=0;$i<localStorage.length;$i++){
            var row=new localrow(localStorage.key($i),localStorage.getItem(localStorage.key($i)));
            $.ajax({
                'type':'POST',
                'url':'pro.php',
                'data':{'object':JSON.stringify(row)},
                'success':function(response){
                    console.log(response);
                }
            })
        }
        //  end edit
        locals.clear();
        timer=5;
        key=0;
    }
}
//show database
$('#sho').on('click',function(){
    $('table').css({'display':'inline-block'});
    $.ajax({
        'type':'GET',
        'url':'pro.php',
        'data':{'object':''},
        'success':function(response){
            $('table').html(response);
        }
    })
});
