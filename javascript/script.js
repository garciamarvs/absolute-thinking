document.addEventListener("keyup", keyUpHandler, false);
window.onload = goAway;
document.getElementById('theGame').style.background = "url('images/bg.png') no-repeat fixed";
document.getElementById('theGame').style.backgroundSize = "cover";
document.getElementById('MENU').style.background = "url('images/mainbg.png') no-repeat fixed";
document.getElementById('MENU').style.backgroundSize = "cover";
document.getElementById('MENU').style.backgroundPosition = "center";
document.getElementById('space').style.background = "url('images/bg3.png') no-repeat fixed";
document.getElementById('space').style.backgroundSize = "cover";
document.getElementById('space').style.backgroundPosition = "center";
document.getElementById('animals').style.background = "url('images/bg2.png') no-repeat fixed";
document.getElementById('animals').style.backgroundSize = "cover";
document.getElementById('animals').style.backgroundPosition = "center center";
var Option = document.getElementById('OPTION');
var Level = document.getElementById('LEVEL');
var Menu = document.getElementById('MENU');
var Diff = document.getElementById('DIFF'); var Diff2 = document.getElementById('DIFF2'); var Diff3 = document.getElementById('DIFF3');
var Lvl1easy = document.getElementById('LVL1EASY'); var Lvl2easy = document.getElementById('LVL2EASY'); var Lvl3easy = document.getElementById('LVL3EASY');
var Lvl1med = document.getElementById('LVL1MED'); var Lvl2med = document.getElementById('LVL2MED'); var Lvl3med = document.getElementById('LVL3MED');
var Lvl1hard = document.getElementById('LVL1HARD'); var Lvl2hard = document.getElementById('LVL2HARD'); var Lvl3hard = document.getElementById('LVL3HARD');
var thePadOne = document.getElementById("thePad1");
var eeks = document.getElementById('eks'); 
var ttsek = document.getElementById('tsek');
var Success = document.getElementById('success');
var Failed = document.getElementById('failed');
var Scored = document.getElementById('rScore');
var Result = document.getElementById('RESULT');
var Try = document.getElementById('try');
var Next = document.getElementById('nxtlvl');
var Restart = document.getElementById('rrestart');
var Paused = document.getElementById('PAUSED');
var orig = document.getElementById('bgsound').src;
var loc ,score ,trans;var choice;
var imgs = [];var imgs2 = [];var imgs3 = [];
var i,j,b,c,x,y,z,a,xy,num;
var unlock = 0;
var min,sec;
var user = localStorage.getItem("currUser");
var uName = localStorage.getItem(user+".name");
document.getElementById("username").innerHTML = uName;

	var currStage1 = localStorage.getItem(user+'.stage1');
	var currStage2 = localStorage.getItem(user+'.stage2');
	var currStage3 = localStorage.getItem(user+'.stage3');
	
		if(currStage1 == 'l'){
			document.getElementById('med1').style.opacity = "1";
      document.getElementById('med1').onclick = goIns2;
		} 
		else if(currStage1 == 'll'){
				document.getElementById('med1').style.opacity = "1";
      	document.getElementById('med1').onclick = goIns2;
				document.getElementById('hard1').style.opacity = "1";
        document.getElementById('hard1').onclick = goIns3;
			}
	
		if(currStage2 == 'l'){
			document.getElementById('med2').style.opacity = "1";
      document.getElementById('med2').onclick = goIns5;
		} 
		else if(currStage2 == 'll'){
				document.getElementById('med2').style.opacity = "1";
      	document.getElementById('med2').onclick = goIns5;
				document.getElementById('hard2').style.opacity = "1";
        document.getElementById('hard2').onclick = goIns6;
			}
	
		if(currStage3 == 'l'){
			document.getElementById('med3').style.opacity = "1";
      document.getElementById('med3').onclick = goIns8;
		} 
		else if(currStage3 == 'll'){
				document.getElementById('med3').style.opacity = "1";
      	document.getElementById('med3').onclick = goIns8;
				document.getElementById('hard3').style.opacity = "1";
        document.getElementById('hard3').onclick = goIns9;
			}

function goAway(){
	if(localStorage.getItem("save1.name") == null && localStorage.getItem("save2.name") == null){
		document.getElementById("new").style.display = "block";
	}
	else {
		document.getElementById("nametag").style.display = "block";
		setTimeout(function(){
			document.getElementById("nametag").style.display = "none";
		},6000);
	}
	
	if(localStorage.getItem("save1.name") == null){
		document.getElementById('name1').innerHTML = "New Game";
	}
	else {
		document.getElementById('name1').innerHTML = localStorage.getItem("save1.name");
	}
	
	if(localStorage.getItem("save2.name") == null){
		document.getElementById('name2').innerHTML = "New Game";
	}
	else {
		document.getElementById('name2').innerHTML = localStorage.getItem("save2.name");
	}
}

function chkName1(){
	if(localStorage.getItem("save1.name") == null){
		document.getElementById("new").style.display = "block";
	}
	else {
		localStorage.setItem("currUser","save1");
		location.reload();
	}
}

function chkName2(){
	if(localStorage.getItem("save2.name") == null){
		document.getElementById("new").style.display = "block";
	}
	else {
		localStorage.setItem("currUser","save2");
		location.reload();
	}
}

function newCreate(){
	document.getElementById("new").style.display = "none";
	uName = document.getElementById("theName").value;
	if(user == null){
		localStorage.setItem("currUser","save1");
		localStorage.setItem("save1.name",uName);
	} 
	else if(user == "save1"){
		localStorage.setItem("currUser","save2");
		localStorage.setItem("save2.name",uName);
	}
	else if(user == "save2"){
		localStorage.setItem("currUser","save1");
		localStorage.setItem("save1.name",uName);
	}
	document.getElementById("username").innerHTML = uName;
	document.getElementById("nametag").style.display = "block";
	user = localStorage.getItem("currUser");
	document.getElementById('name1').innerHTML = localStorage.getItem("save1.name");
	location.reload();
}

function cls(){
	localStorage.removeItem(user+'.name');
	localStorage.removeItem(user+'.stage1');
	localStorage.removeItem(user+'.stage2');
	localStorage.removeItem(user+'.stage3');
	if(user == 'save1'){
		localStorage.setItem("currUser","save2");
	}
	else if(user == 'save2'){
		localStorage.setItem("currUser","save1");
	}
	location.reload();
}

function keyUpHandler(e) {
        if(e.keyCode == 39) {
            switch(loc){
                case 123:
                    theHerb();break;
                default:
                    theNo();break;
            }
        }
        else if(e.keyCode == 37) {
            switch(loc){
                case 123:
                    theCarn();break;
                default:
                    theYes();break;
            }
        }
        else if(e.keyCode == 40) {
            if(loc == 123){theOmni();}
        }
}

function back() {
    switch(loc) {
            //  OPTION TO MENU
        case 0:
        Option.style.display = "none";
        Menu.style.display = "block"; break;
            //  LEVEL SELECT TO MENU
        case 1:
        Menu.style.display = "block";
        Level.style.display = "none";
        loc = 0; break;
            //  SELECT DIFF TO SELECT LEVEL
        case 11:
        Level.style.display = "block";
        Diff.style.display = "none";
        loc = 1; break;
            
        case 12:
        Level.style.display = "block";
        Diff2.style.display = "none";
        loc = 1; break;
            
        case 13:
        Level.style.display = "block";
        Diff3.style.display = "none";
        loc = 1; break;
            
            //  LVL1EASY TO MENU
        case 111:
        clearTimeout(b);
        clearTimeout(c);
        document.getElementById('ready').style.display = "none";
        clearTimeout(x);
        clearTimeout(y);
        clearAllShape();
        document.getElementById('choices').style.display = "none";
        document.getElementById('peri').style.display = "none";
        Lvl1easy.style.display ="none";
        Paused.style.display ="none";
        Menu.style.display = "block";
        clearResult();
        clearEntrance();
        loc = 0; break;
            
            // LVL1MED TO MENU
        case 112:
        clearTimeout(b);
        clearTimeout(c);
        document.getElementById('ready').style.display = "none";
        clearTimeout(x);
        clearTimeout(y);
        clearTimeout(z);
        clearAllShape();
        document.getElementById('choices').style.display = "none";
        document.getElementById('peri').style.display = "none";
        Lvl1med.style.display ="none";
        Paused.style.display ="none";
        Menu.style.display = "block";
        clearResult();
        loc = 0; break;
            
            // LVL1HARD TO MENU
        case 113:
        clearTimeout(b);
        clearTimeout(c);
        document.getElementById('ready').style.display = "none";
        clearTimeout(x);
        clearTimeout(y);
        clearObjects();
        document.getElementById('choices').style.display = "none";
        document.getElementById('peri').style.display = "none";
        Lvl1hard.style.display ="none";
        Paused.style.display ="none";
        Menu.style.display = "block";
        clearEntrance2();
        clearResult();
        loc = 0; break;
            
            // LVL2EASY TO MENU
        case 121:
        clearTimeout(b);
        clearTimeout(c);
        document.getElementById('ready').style.display = "none";
        clearTimeout(x);
        clearTimeout(y);
        clearAnim();
        document.getElementById('choices').style.display = "none";
        document.getElementById('peri').style.display = "none";
        Lvl2easy.style.display ="none";
        Paused.style.display ="none";
        Menu.style.display = "block";
        clearResult();
        loc = 0; break;
            
            // LVL2MED TO MENU
        case 122:
        clearTimeout(b);
        clearTimeout(c);
        document.getElementById('ready').style.display = "none";
        clearTimeout(x);
        clearTimeout(y);
        clearAnim();
        document.getElementById('choices').style.display = "none";
        document.getElementById('peri').style.display = "none";
        Lvl2med.style.display ="none";
        Paused.style.display ="none";
        Menu.style.display = "block";
        clearResult();
        loc = 0; break;
            
            // LVL2HARD TO MENU
        case 123:
        clearTimeout(b);
        clearTimeout(c);
        document.getElementById('ready').style.display = "none";
        clearTimeout(x);
        clearTimeout(y);
        clearAnimb();
        document.getElementById('thePad1').style.display = "block";
        document.getElementById('thePad4').style.display = "none";
        document.getElementById('choices2').style.display = "none";
        document.getElementById('peri').style.display = "none";
        Lvl2hard.style.display = "none";
        Paused.style.display = "none";
        Menu.style.display = "block";
        clearResult();
        loc = 0; break;
            
            // LVL3EASY TO MENU
        case 131:
        clearTimeout(b);
        clearTimeout(c);
        document.getElementById('ready').style.display = "none";
        clearTimeout(x);
        clearTimeout(y);
        clearPlan();
        document.getElementById('choices').style.display = "none";
        document.getElementById('peri').style.display = "none";
        Lvl3easy.style.display ="none";
        Paused.style.display ="none";
        Menu.style.display = "block";
        clearResult();
        loc = 0; break;
            // LVL3MED TO MENU
        case 132:
        clearTimeout(b);
        clearTimeout(c);
        document.getElementById('ready').style.display = "none";
        clearTimeout(x);
        clearTimeout(y);
        clearTF();
        document.getElementById('choices').style.display = "none";
        document.getElementById('peri').style.display = "none";
        Lvl3med.style.display ="none";
        Paused.style.display ="none";
        Menu.style.display = "block";
        clearResult();
        loc = 0; break;
            
        case 133:
        clearTimeout(b);
        clearTimeout(c);
        document.getElementById('ready').style.display = "none";
        clearTimeout(x);
        clearTimeout(y);
        clearTF();
        document.getElementById('choices').style.display = "none";
        document.getElementById('peri').style.display = "none";
        Lvl3hard.style.display ="none";
        Paused.style.display ="none";
        Menu.style.display = "block";
        clearResult();
        loc = 0; break;
    }
}

function golvl1Easy() {
    score = 0;
    trans = 0;
    choice = "";
    min = 1;
    sec = 0;
    num = 3;
    
    for (i = 0; i < 10; i++) {
    var imgIndex = Math.floor((Math.random() * 11) + 1);
    imgs[i] = document.getElementById('shapea'+imgIndex);
    imgs[i].title = document.getElementById('shapea'+imgIndex).title;
    }
    
    for (j = 0; j < 10; j++) {
    var imgIndex2 = Math.floor((Math.random() * 11) + 1);
    imgs2[j] = document.getElementById('shapeb' + imgIndex2);
    imgs2[j].title = document.getElementById('shapeb' + imgIndex2).title;
    }
    
    addEntrance();
    
    document.getElementById('INS').style.display ="none";
    document.getElementById('INS1').style.display ="none";
    Diff.style.display = "none";
    clearAllShape();
    clearResult();
    setup();
    
    Lvl1easy.style.display = "inline";
    
    document.getElementById('thePad2').style.display = "inline";
    
    x = setTimeout(function() {
        ttheTimer();
    },2000);
    
    readygo();
    
    loc = 111;
        Restart.onclick = golvl1Easy;
    
    a = function() {y = setTimeout(function() {
        trans = 1;
        imgs[0].style.display = "inline";
        imgs2[0].style.display = "inline";
    },3000);};
    
    a();
    
}

function golvl1Med() {
    score = 0;
    trans = 0;
    choice = "";
    min = 1;
    sec = 0;
    num = 3;
    
    for (i = 0; i < 16; i++) {
    var imgIndex = Math.floor((Math.random() * 11) + 1);
    imgs[i] = document.getElementById('shapea'+imgIndex);
    imgs[i].title = document.getElementById('shapea'+imgIndex).title;
    }
    
    document.getElementById('INS').style.display ="none";
    document.getElementById('INS2').style.display ="none";
    Paused.style.display = "none";
    Diff.style.display = "none";
    clearAllShape();
    clearResult();
    setup();
    
    Lvl1med.style.display = "block";
    
    x = setTimeout(function() {
        ttheTimer();
    },2000);
    
    imgs[0].style.display ="block";
	
    a = function() {y = setTimeout(function() {
        document.getElementById('thePad2').style.display = "block";
		$(imgs[0]).addClass("slideLeft");
	},3000);}
    
    a();
    
    readygo();
    
    loc = 112;
		Restart.onclick = golvl1Med;
    
    xy = function() {z = setTimeout(function() {
        trans = 1;
        $(imgs[0]).removeClass("slideLeft");
        imgs[0].style.display ="none";
        imgs[1].style.display ="block";
    },4000);}
    
    xy();
    
}

function golvl1Hard() {
    score = 0;
    trans = 0;
    choice = "";
    min = 1;
    sec = 0;
    num = 3;
    imgs3 = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','13'];
    shuffle(imgs3);
    
    for (i = 0; i < 20; i++) {
    imgs[i] = document.getElementById('obj' + imgs3[i]);
    imgs[i].title = document.getElementById('obj' + imgs3[i]).title;
    }
    
    for (j = 0; j < 20; j++) {
    var imgIndex2 = Math.floor((Math.random() * 4) + 1);
    imgs2[j] = document.getElementById('shapeb' + imgIndex2);
    imgs2[j].title = document.getElementById('shapeb' + imgIndex2).title;
    }
    
    addEntrance2();
    
    document.getElementById('INS').style.display = "none";
    document.getElementById('INS3').style.display = "none";
    Paused.style.display ="none";
    Diff.style.display = "none";
    clearAllShape();
    clearObjects();
    clearResult();
    setup();
    
    Lvl1hard.style.display = "block";
    
    document.getElementById('thePad2').style.display = "block";
    
    x = setTimeout(function() {
        ttheTimer();
    },2000);
    
    readygo();
    
    loc = 113;
        Restart.onclick = golvl1Hard;
    
    a = function() {y = setTimeout(function() {
        trans = 1;
        imgs[0].style.display = "block";
        imgs2[0].style.display = "block";
    },3000);}
    
    a();
}

function golvl2Easy() {
    score = 0;
    trans = 0;
    choice = "";
    min = 1;
    sec = 0;
    num = 3;
    imgs3 = ['1','2','3','4','5','6','7','8','9','10','11','12'];
    shuffle(imgs3);
    
    for (i = 0; i < 10; i++) {
    imgs[i] = document.getElementById('anima' + imgs3[i]);
    imgs[i].title = document.getElementById('anima' + imgs3[i]).title;
    }
    
    for (j = 0; j < 10; j++) {
    var imgIndex2 = Math.floor((Math.random() * 3) + 1);
    imgs2[j] = document.getElementById('c' + imgIndex2);
    imgs2[j].title = document.getElementById('c' + imgIndex2).title;
    }
    
    document.getElementById('INS').style.display ="none";
    document.getElementById('INS4').style.display ="none";
    Paused.style.display ="none";
    Diff2.style.display = "none";
    clearAnim();
    clearResult();
    setup();
    
    Lvl2easy.style.display = "block";
    
    document.getElementById('thePad2').style.display = "block";
    
    x = setTimeout(function() {
        ttheTimer();
    },2000);
    
    readygo();
    
    loc = 121;
        Restart.onclick = golvl2Easy;
    
    a = function() {y = setTimeout(function() {
        trans = 1;
        imgs[0].style.display = "block";
        imgs2[0].style.display = "block";
    },3000);}
    
    a();
}

function golvl2Med() {
    score = 0;
    trans = 0;
    choice = "";
    min = 1;
    sec = 0;
    num = 3;
    imgs3 = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17'];
    shuffle(imgs3);
    
    for (i = 0; i < 15; i++) {
    imgs[i] = document.getElementById('anima' + imgs3[i]);
    imgs[i].title = document.getElementById('anima' + imgs3[i]).title;
    }
    
    for (j = 0; j < 15; j++) {
    var imgIndex2 = Math.floor((Math.random() * 3) + 1);
    imgs2[j] = document.getElementById('c' + imgIndex2);
    imgs2[j].title = document.getElementById('c' + imgIndex2).title;
    }
    
    document.getElementById('INS').style.display ="none";
    document.getElementById('INS40').style.display ="none";
    Paused.style.display ="none";
    Diff2.style.display = "none";
    clearAnim();
    clearResult();
    setup();
    
    Lvl2med.style.display = "block";
    
    document.getElementById('thePad2').style.display = "block";
    
    x = setTimeout(function() {
        ttheTimer();
    },2000);
    
    readygo();
    
    loc = 122;
        Restart.onclick = golvl2Med;
    
    a = function() {y = setTimeout(function() {
        trans = 1;
        imgs[0].style.display = "block";
        imgs2[0].style.display = "block";
    },3000);}
    
    a();
}

function golvl2Hard() {
    score = 0;
    trans = 0;
    choice = "";
    min = 1;
    sec = 0;
    num = 3;
    imgs3 = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22'];
    shuffle(imgs3);
    
    for (i = 0; i < 20; i++) {
    imgs[i] = document.getElementById('animb' + imgs3[i]);
    imgs[i].title = document.getElementById('animb' + imgs3[i]).title;
    }
    
    document.getElementById('INS').style.display = "none";
    document.getElementById('INS41').style.display = "none";
    Paused.style.display = "none";
    Diff2.style.display = "none";
    clearAnimb();
    clearResult();
    setup();
    
    Lvl2hard.style.display = "block";
    
    document.getElementById('choices').style.display = "none";
    document.getElementById('thePad1').style.display = "none";
    document.getElementById('thePad2').style.display = "none";
    document.getElementById('thePad4').style.display = "block";
    document.getElementById('choices2').style.display = "block";
    
    x = setTimeout(function() {
        ttheTimer();
    },2000);
    
    readygo();
    
    loc = 123;
        Restart.onclick = golvl2Hard;
    
    a = function() {y = setTimeout(function() {
        trans = 1;
        imgs[0].style.display = "block";
    },3000);}
    
    a();
}

function golvl3Easy() {
    score = 0;
    trans = 0;
    choice = "";
    min = 1;
    sec = 0;
    num = 3;
    imgs3 = ['1','2','3','4','5','6','7','8','9','10'];
    shuffle(imgs3);
    
    for (i = 0; i < 10; i++) {
    imgs[i] = document.getElementById('plana' + imgs3[i]);
    imgs[i].title = document.getElementById('plana' + imgs3[i]).title;
    }
    
    for (j = 0; j < 10; j++) {
    imgs2[j] = document.getElementById('name' + imgs3[j]);
    imgs2[j].title = document.getElementById('name' + imgs3[j]).title;
    }
    
    document.getElementById('INS').style.display ="none";
    document.getElementById('INS5').style.display ="none";
    Paused.style.display ="none";
    Diff3.style.display = "none";
    clearPlan();
    clearResult();
    setup();
    
    Lvl3easy.style.display = "block";
    
    document.getElementById('thePad2').style.display = "block";
    
    x = setTimeout(function() {
        ttheTimer();
    },2000);
    
    readygo();

    loc = 131;
        Restart.onclick = golvl3Easy;
    
    a = function() {y = setTimeout(function() {
        trans = 1;
        imgs[0].style.display = "block";
        imgs2[0].style.display = "block";
    },3000);};
    
    a();
}

function golvl3Med() {
    score = 0;
    trans = 0;
    choice = "";
    min = 3;
    sec = 0;
    num = 3;
    imgs2 = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15'];
    shuffle(imgs2);
    
    for(i = 0; i < 15; i++) {
    imgs[i] = document.getElementById('q' + imgs2[i]);
    imgs[i].ans = imgs[i].getAttribute('data-ans');
    }
    
    document.getElementById('INS').style.display = "none";
    document.getElementById('INS60').style.display = "none";
    Paused.style.display ="none";
    Diff3.style.display = "none";
    clearResult();
    clearTF();
    setup();
    
    Lvl3med.style.display = "block";
    
    document.getElementById('thePad1').style.display = "none";
    document.getElementById('thePad2').style.display = "none";
    document.getElementById('thePad3').style.display = "block";
    
    x = setTimeout(function() {
        ttheTimer();
    },2000);
    
    readygo();

    loc = 132;
        Restart.onclick = golvl3Med;
    
    a = function() {y = setTimeout(function() {
        trans = 1;
        imgs[0].style.display = "block";
    },3000);};
    
    a();
}

function golvl3Hard() {
    score = 0;
    trans = 0;
    choice = "";
    min = 4;
    sec = 0;
    num = 3;
    imgs2 = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21'];
    shuffle(imgs2);
    
    for(i = 0; i < 20; i++) {
    imgs[i] = document.getElementById('q' + imgs2[i]);
    imgs[i].ans = imgs[i].getAttribute('data-ans');
    }
    
    document.getElementById('INS').style.display = "none";
    document.getElementById('INS6').style.display = "none";
    Paused.style.display ="none";
    Diff3.style.display = "none";
    clearResult();
    clearTF();
    setup();
    
    Lvl3hard.style.display = "block";
    
    document.getElementById('thePad1').style.display = "none";
    document.getElementById('thePad2').style.display = "none";
    document.getElementById('thePad3').style.display = "block";
    
    x = setTimeout(function() {
        ttheTimer();
    },2000);
    
    readygo();

    loc = 133;
        Restart.onclick = golvl3Hard;
    
    a = function() {y = setTimeout(function() {
        trans = 1;
        imgs[0].style.display = "block";
    },3000);};
    
    a();
}

function ttheTimer() {
        
    b = setInterval(theTimer,1000);
    function theTimer() {
    document.getElementById("timer").innerHTML = min +" : " + sec ;
    sec--;
    if(min == 0 && sec == -1) {theResult();}
    if(sec == -1) {
        min--;sec = 59;
		if(min == -1) {clearInterval(b);}}
		}
}
function readygo() {
    
    c = setInterval(ready,1000);
    function ready() {
        document.getElementById('ready').style.display = "block";
        document.getElementById('ready').innerHTML = num;
        num--;
        if (num == -1) { document.getElementById('ready').style.display = "none";
        clearInterval(c);}}
    }

function theYes() {
    choice = 'yes';
    theValidate();
}
function theNo() {
    choice = 'no';
    theValidate();
}

function theOmni(){
    choice = "omni";
    theValidate();
}
function theCarn(){
    choice = "carn";
    theValidate();
}
function theHerb(){
    choice = "herb";
    theValidate();
}

function theValidate() {
    switch(loc) {
        case 111:
        switch(trans) {
    case 1: if(imgs[0].title==imgs2[0].title)
    {if(choice == 'yes') {
        score++;
        ttsek.style.display = "block"; 
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
     else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}                               
    }
    else
    {if(choice == 'no') {
        score++;
		ttsek.style.display = "block";
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
    else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}
    }
    trans++; break;
        
        case 2: if(imgs[1].title==imgs2[1].title)
    {if(choice == 'yes') {
        score++;
        ttsek.style.display = "block"; 
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
     else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}                               
    }
    else
    {if(choice == 'no') {
        score++;
		ttsek.style.display = "block";
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
    else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}
    }
    trans++; break;
        
        case 3: if (imgs[2].title==imgs2[2].title)
    {if(choice == 'yes') {
        score++;
        ttsek.style.display = "block"; 
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
     else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}                               
    }
    else
    {if(choice == 'no') {
        score++;
		ttsek.style.display = "block";
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
    else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}
    }
    trans++; break;
        
        case 4: if (imgs[3].title==imgs2[3].title)
    {if(choice == 'yes') {
        score++;
        ttsek.style.display = "block"; 
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
     else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}                               
    }
    else
    {if(choice == 'no') {
        score++;
		ttsek.style.display = "block";
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
    else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}
    }
    trans++; break;
        
        case 5: if (imgs[4].title==imgs2[4].title)
    {if(choice == 'yes') {
        score++;
        ttsek.style.display = "block"; 
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
     else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}                               
    }
    else
    {if(choice == 'no') {
        score++;
		ttsek.style.display = "block";
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
    else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}
    }
    trans++; break;
        
        case 6: if (imgs[5].title==imgs2[5].title)
    {if(choice == 'yes') {
        score++;
        ttsek.style.display = "block"; 
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
     else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}                               
    }
    else
    {if(choice == 'no') {
        score++;
		ttsek.style.display = "block";
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
    else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}
    }
    trans++; break;
        
        case 7: if (imgs[6].title==imgs2[6].title)
    {if(choice == 'yes') {
        score++;
        ttsek.style.display = "block"; 
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
     else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}                               
    }
    else
    {if(choice == 'no') {
        score++;
		ttsek.style.display = "block";
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
    else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}
    }
    trans++; break;
        
        case 8: if (imgs[7].title==imgs2[7].title)
    {if(choice == 'yes') {
        score++;
        ttsek.style.display = "block"; 
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
     else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}                               
    }
    else
    {if(choice == 'no') {
        score++;
		ttsek.style.display = "block";
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
    else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}
    }
    trans++; break;
        
        case 9: if (imgs[8].title==imgs2[8].title)
    {if(choice == 'yes') {
        score++;
        ttsek.style.display = "block"; 
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
     else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}                               
    }
    else
    {if(choice == 'no') {
        score++;
		ttsek.style.display = "block";
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
    else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}
    }
    trans++; break;
        
        case 10: if (imgs[9].title==imgs2[9].title)
    {if(choice == 'yes') {
        score++;
        ttsek.style.display = "block"; 
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
     else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}                               
    }
    else
    {if(choice == 'no') {
        score++;
		ttsek.style.display = "block";
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
    else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}
    }
    trans++; break;} break;
            
        case 112:
        switch(trans) {
    case 1 : if(imgs[0].title==imgs[1].title)
    {if(choice == 'yes') {
		score++;
        ttsek.style.display = "block";
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
    else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}
    }
    else
    {if(choice == 'no') {
        score++;
		ttsek.style.display = "block";
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
    else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}
    }
    trans++; break;
	
	case 2 : if(imgs[1].title==imgs[2].title)
    {if(choice == 'yes') {
		score++;
        ttsek.style.display = "block";
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
    else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}
    }
    else
    {if(choice == 'no') {
        score++;
		ttsek.style.display = "block";
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
    else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}
    }
    trans++; break;
            
    case 3 : if(imgs[2].title==imgs[3].title)
    {if(choice == 'yes') {
		score++;
        ttsek.style.display = "block";
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
    else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}
    }
    else
    {if(choice == 'no') {
        score++;
		ttsek.style.display = "block";
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
    else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}
    }
    trans++; break;
            
    case 4 : if(imgs[3].title==imgs[4].title)
    {if(choice == 'yes') {
		score++;
        ttsek.style.display = "block";
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
    else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}
    }
    else
    {if(choice == 'no') {
        score++;
		ttsek.style.display = "block";
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
    else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}
    }
    trans++; break;
            
    case 5 : if(imgs[4].title==imgs[5].title)
    {if(choice == 'yes') {
		score++;
        ttsek.style.display = "block";
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
    else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}
    }
    else
    {if(choice == 'no') {
        score++;
		ttsek.style.display = "block";
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
    else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}
    }
    trans++; break;
            
    case 6 : if(imgs[5].title==imgs[6].title)
    {if(choice == 'yes') {
		score++;
        ttsek.style.display = "block";
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
    else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}
    }
    else
    {if(choice == 'no') {
        score++;
		ttsek.style.display = "block";
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
    else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}
    }
    trans++; break;
            
    case 7 : if(imgs[6].title==imgs[7].title)
    {if(choice == 'yes') {
		score++;
        ttsek.style.display = "block";
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
    else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}
    }
    else
    {if(choice == 'no') {
        score++;
		ttsek.style.display = "block";
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
    else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}
    }
    trans++; break;
            
    case 8 : if(imgs[7].title==imgs[8].title)
    {if(choice == 'yes') {
		score++;
        ttsek.style.display = "block";
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
    else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}
    }
    else
    {if(choice == 'no') {
        score++;
		ttsek.style.display = "block";
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
    else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}
    }
    trans++; break;
            
    case 9 : if(imgs[8].title==imgs[9].title)
    {if(choice == 'yes') {
		score++;
        ttsek.style.display = "block";
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
    else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}
    }
    else
    {if(choice == 'no') {
        score++;
		ttsek.style.display = "block";
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
    else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}
    }
    trans++; break;
            
    case 10 : if(imgs[9].title==imgs[10].title)
    {if(choice == 'yes') {
		score++;
        ttsek.style.display = "block";
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
    else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}
    }
    else
    {if(choice == 'no') {
        score++;
		ttsek.style.display = "block";
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
    else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}
    }
    trans++; break;
        
    case 11 : if(imgs[10].title==imgs[11].title)
    {if(choice == 'yes') {
		score++;
        ttsek.style.display = "block";
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
    else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}
    }
    else
    {if(choice == 'no') {
        score++;
		ttsek.style.display = "block";
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
    else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}
    }
    trans++; break;
        
    case 12 : if(imgs[11].title==imgs[12].title)
    {if(choice == 'yes') {
		score++;
        ttsek.style.display = "block";
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
    else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}
    }
    else
    {if(choice == 'no') {
        score++;
		ttsek.style.display = "block";
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
    else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}
    }
    trans++; break;
        
    case 13 : if(imgs[12].title==imgs[13].title)
    {if(choice == 'yes') {
		score++;
        ttsek.style.display = "block";
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
    else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}
    }
    else
    {if(choice == 'no') {
        score++;
		ttsek.style.display = "block";
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
    else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}
    }
    trans++; break;
                
    case 14 : if(imgs[13].title==imgs[14].title)
    {if(choice == 'yes') {
		score++;
        ttsek.style.display = "block";
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
    else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}
    }
    else
    {if(choice == 'no') {
        score++;
		ttsek.style.display = "block";
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
    else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}
    }
    trans++; break;
                
    case 15 : if(imgs[14].title==imgs[15].title)
    {if(choice == 'yes') {
		score++;
        ttsek.style.display = "block";
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
    else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}
    }
    else
    {if(choice == 'no') {
        score++;
		ttsek.style.display = "block";
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
    else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}
    }
    trans++; break;} break;
            
        case 113:
        switch(trans) {
    case 1: if(imgs[0].title==imgs2[0].title)
    {if(choice == 'yes') {
        score++;
        ttsek.style.display = "block"; 
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
     else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}                               
    }
    else
    {if(choice == 'no') {
        score++;
		ttsek.style.display = "block";
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
    else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}
    }
    trans++; break;
                
    case 2: if(imgs[1].title==imgs2[1].title)
    {if(choice == 'yes') {
        score++;
        ttsek.style.display = "block"; 
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
     else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}                               
    }
    else
    {if(choice == 'no') {
        score++;
		ttsek.style.display = "block";
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
    else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}
    }
    trans++; break;
                
    case 3: if(imgs[2].title==imgs2[2].title)
    {if(choice == 'yes') {
        score++;
        ttsek.style.display = "block"; 
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
     else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}                               
    }
    else
    {if(choice == 'no') {
        score++;
		ttsek.style.display = "block";
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
    else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}
    }
    trans++; break;
                
    case 4: if(imgs[3].title==imgs2[3].title)
    {if(choice == 'yes') {
        score++;
        ttsek.style.display = "block"; 
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
     else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}                               
    }
    else
    {if(choice == 'no') {
        score++;
		ttsek.style.display = "block";
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
    else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}
    }
    trans++; break;
                
    case 5: if(imgs[4].title==imgs2[4].title)
    {if(choice == 'yes') {
        score++;
        ttsek.style.display = "block"; 
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
     else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}                               
    }
    else
    {if(choice == 'no') {
        score++;
		ttsek.style.display = "block";
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
    else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}
    }
    trans++; break;
                
    case 6: if(imgs[5].title==imgs2[5].title)
    {if(choice == 'yes') {
        score++;
        ttsek.style.display = "block"; 
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
     else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}                               
    }
    else
    {if(choice == 'no') {
        score++;
		ttsek.style.display = "block";
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
    else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}
    }
    trans++; break;
                
    case 7: if(imgs[6].title==imgs2[6].title)
    {if(choice == 'yes') {
        score++;
        ttsek.style.display = "block"; 
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
     else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}                               
    }
    else
    {if(choice == 'no') {
        score++;
		ttsek.style.display = "block";
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
    else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}
    }
    trans++; break;
                
    case 8: if(imgs[7].title==imgs2[7].title)
    {if(choice == 'yes') {
        score++;
        ttsek.style.display = "block"; 
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
     else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}                               
    }
    else
    {if(choice == 'no') {
        score++;
		ttsek.style.display = "block";
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
    else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}
    }
    trans++; break;
                
    case 9: if(imgs[8].title==imgs2[8].title)
    {if(choice == 'yes') {
        score++;
        ttsek.style.display = "block"; 
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
     else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}                               
    }
    else
    {if(choice == 'no') {
        score++;
		ttsek.style.display = "block";
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
    else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}
    }
    trans++; break;
                
    case 10: if(imgs[9].title==imgs2[9].title)
    {if(choice == 'yes') {
        score++;
        ttsek.style.display = "block"; 
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
     else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}                               
    }
    else
    {if(choice == 'no') {
        score++;
		ttsek.style.display = "block";
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
    else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}
    }
    trans++; break;
                
    case 11: if(imgs[10].title==imgs2[10].title)
    {if(choice == 'yes') {
        score++;
        ttsek.style.display = "block"; 
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
     else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}                               
    }
    else
    {if(choice == 'no') {
        score++;
		ttsek.style.display = "block";
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
    else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}
    }
    trans++; break;
                
    case 12: if(imgs[11].title==imgs2[11].title)
    {if(choice == 'yes') {
        score++;
        ttsek.style.display = "block"; 
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
     else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}                               
    }
    else
    {if(choice == 'no') {
        score++;
		ttsek.style.display = "block";
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
    else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}
    }
    trans++; break;
                
    case 13: if(imgs[12].title==imgs2[12].title)
    {if(choice == 'yes') {
        score++;
        ttsek.style.display = "block"; 
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
     else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}                               
    }
    else
    {if(choice == 'no') {
        score++;
		ttsek.style.display = "block";
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
    else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}
    }
    trans++; break;
                
    case 14: if(imgs[13].title==imgs2[13].title)
    {if(choice == 'yes') {
        score++;
        ttsek.style.display = "block"; 
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
     else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}                               
    }
    else
    {if(choice == 'no') {
        score++;
		ttsek.style.display = "block";
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
    else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}
    }
    trans++; break;
                
    case 15: if(imgs[14].title==imgs2[14].title)
    {if(choice == 'yes') {
        score++;
        ttsek.style.display = "block"; 
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
     else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}                               
    }
    else
    {if(choice == 'no') {
        score++;
		ttsek.style.display = "block";
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
    else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}
    }
    trans++; break;
                
    case 16: if(imgs[15].title==imgs2[15].title)
    {if(choice == 'yes') {
        score++;
        ttsek.style.display = "block"; 
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
     else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}                               
    }
    else
    {if(choice == 'no') {
        score++;
		ttsek.style.display = "block";
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
    else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}
    }
    trans++; break;
                
    case 17: if(imgs[16].title==imgs2[16].title)
    {if(choice == 'yes') {
        score++;
        ttsek.style.display = "block"; 
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
     else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}                               
    }
    else
    {if(choice == 'no') {
        score++;
		ttsek.style.display = "block";
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
    else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}
    }
    trans++; break;
                
    case 18: if(imgs[17].title==imgs2[17].title)
    {if(choice == 'yes') {
        score++;
        ttsek.style.display = "block"; 
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
     else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}                               
    }
    else
    {if(choice == 'no') {
        score++;
		ttsek.style.display = "block";
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
    else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}
    }
    trans++; break;
                
    case 19: if(imgs[18].title==imgs2[18].title)
    {if(choice == 'yes') {
        score++;
        ttsek.style.display = "block"; 
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
     else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}                               
    }
    else
    {if(choice == 'no') {
        score++;
		ttsek.style.display = "block";
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
    else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}
    }         
    trans++; break;
        
    case 20: if(imgs[19].title==imgs2[19].title)
    {if(choice == 'yes') {
        score++;
        ttsek.style.display = "block"; 
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
     else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}                               
    }
    else
    {if(choice == 'no') {
        score++;
		ttsek.style.display = "block";
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
    else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}
    }         
    trans++; break;} break;
            
        case 121:
        switch(trans) {
    case 1: if(imgs[0].title==imgs2[0].title)
    {if(choice == 'yes') {
        score++;
        ttsek.style.display = "block"; 
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
     else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}                               
    }
    else
    {if(choice == 'no') {
        score++;
		ttsek.style.display = "block";
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
    else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}
    }
    trans++; break;
        
        case 2: if(imgs[1].title==imgs2[1].title)
    {if(choice == 'yes') {
        score++;
        ttsek.style.display = "block"; 
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
     else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}                               
    }
    else
    {if(choice == 'no') {
        score++;
		ttsek.style.display = "block";
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
    else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}
    }
    trans++; break;
        
        case 3: if (imgs[2].title==imgs2[2].title)
    {if(choice == 'yes') {
        score++;
        ttsek.style.display = "block"; 
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
     else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}                               
    }
    else
    {if(choice == 'no') {
        score++;
		ttsek.style.display = "block";
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
    else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}
    }
    trans++; break;
        
        case 4: if (imgs[3].title==imgs2[3].title)
    {if(choice == 'yes') {
        score++;
        ttsek.style.display = "block"; 
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
     else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}                               
    }
    else
    {if(choice == 'no') {
        score++;
		ttsek.style.display = "block";
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
    else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}
    }
    trans++; break;
        
        case 5: if (imgs[4].title==imgs2[4].title)
    {if(choice == 'yes') {
        score++;
        ttsek.style.display = "block"; 
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
     else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}                               
    }
    else
    {if(choice == 'no') {
        score++;
		ttsek.style.display = "block";
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
    else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}
    }
    trans++; break;
        
        case 6: if (imgs[5].title==imgs2[5].title)
    {if(choice == 'yes') {
        score++;
        ttsek.style.display = "block"; 
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
     else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}                               
    }
    else
    {if(choice == 'no') {
        score++;
		ttsek.style.display = "block";
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
    else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}
    }
    trans++; break;
        
        case 7: if (imgs[6].title==imgs2[6].title)
    {if(choice == 'yes') {
        score++;
        ttsek.style.display = "block"; 
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
     else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}                               
    }
    else
    {if(choice == 'no') {
        score++;
		ttsek.style.display = "block";
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
    else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}
    }
    trans++; break;
        
        case 8: if (imgs[7].title==imgs2[7].title)
    {if(choice == 'yes') {
        score++;
        ttsek.style.display = "block"; 
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
     else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}                               
    }
    else
    {if(choice == 'no') {
        score++;
		ttsek.style.display = "block";
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
    else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}
    }
    trans++; break;
        
        case 9: if (imgs[8].title==imgs2[8].title)
    {if(choice == 'yes') {
        score++;
        ttsek.style.display = "block"; 
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
     else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}                               
    }
    else
    {if(choice == 'no') {
        score++;
		ttsek.style.display = "block";
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
    else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}
    }
    trans++; break;
        
        case 10: if (imgs[9].title==imgs2[9].title)
    {if(choice == 'yes') {
        score++;
        ttsek.style.display = "block"; 
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
     else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}                               
    }
    else
    {if(choice == 'no') {
        score++;
		ttsek.style.display = "block";
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
    else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}
    }
    trans++; break;} break;
            
        case 122:
        switch(trans) {
    case 1: if(imgs[0].title==imgs2[0].title)
    {if(choice == 'yes') {
        score++;
        ttsek.style.display = "block"; 
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
     else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}                               
    }
    else
    {if(choice == 'no') {
        score++;
		ttsek.style.display = "block";
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
    else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}
    }
    trans++; break;
        
        case 2: if(imgs[1].title==imgs2[1].title)
    {if(choice == 'yes') {
        score++;
        ttsek.style.display = "block"; 
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
     else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}                               
    }
    else
    {if(choice == 'no') {
        score++;
		ttsek.style.display = "block";
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
    else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}
    }
    trans++; break;
        
        case 3: if (imgs[2].title==imgs2[2].title)
    {if(choice == 'yes') {
        score++;
        ttsek.style.display = "block"; 
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
     else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}                               
    }
    else
    {if(choice == 'no') {
        score++;
		ttsek.style.display = "block";
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
    else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}
    }
    trans++; break;
        
        case 4: if (imgs[3].title==imgs2[3].title)
    {if(choice == 'yes') {
        score++;
        ttsek.style.display = "block"; 
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
     else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}                               
    }
    else
    {if(choice == 'no') {
        score++;
		ttsek.style.display = "block";
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
    else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}
    }
    trans++; break;
        
        case 5: if (imgs[4].title==imgs2[4].title)
    {if(choice == 'yes') {
        score++;
        ttsek.style.display = "block"; 
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
     else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}                               
    }
    else
    {if(choice == 'no') {
        score++;
		ttsek.style.display = "block";
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
    else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}
    }
    trans++; break;
        
        case 6: if (imgs[5].title==imgs2[5].title)
    {if(choice == 'yes') {
        score++;
        ttsek.style.display = "block"; 
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
     else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}                               
    }
    else
    {if(choice == 'no') {
        score++;
		ttsek.style.display = "block";
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
    else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}
    }
    trans++; break;
        
        case 7: if (imgs[6].title==imgs2[6].title)
    {if(choice == 'yes') {
        score++;
        ttsek.style.display = "block"; 
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
     else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}                               
    }
    else
    {if(choice == 'no') {
        score++;
		ttsek.style.display = "block";
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
    else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}
    }
    trans++; break;
        
        case 8: if (imgs[7].title==imgs2[7].title)
    {if(choice == 'yes') {
        score++;
        ttsek.style.display = "block"; 
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
     else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}                               
    }
    else
    {if(choice == 'no') {
        score++;
		ttsek.style.display = "block";
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
    else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}
    }
    trans++; break;
        
        case 9: if (imgs[8].title==imgs2[8].title)
    {if(choice == 'yes') {
        score++;
        ttsek.style.display = "block"; 
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
     else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}                               
    }
    else
    {if(choice == 'no') {
        score++;
		ttsek.style.display = "block";
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
    else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}
    }
    trans++; break;
        
        case 10: if (imgs[9].title==imgs2[9].title)
    {if(choice == 'yes') {
        score++;
        ttsek.style.display = "block"; 
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
     else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}                               
    }
    else
    {if(choice == 'no') {
        score++;
		ttsek.style.display = "block";
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
    else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}
    }
    trans++; break;
        
        case 11: if (imgs[10].title==imgs2[10].title)
    {if(choice == 'yes') {
        score++;
        ttsek.style.display = "block"; 
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
     else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}                               
    }
    else
    {if(choice == 'no') {
        score++;
		ttsek.style.display = "block";
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
    else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}
    }
    trans++; break;
        
        case 12: if (imgs[11].title==imgs2[11].title)
    {if(choice == 'yes') {
        score++;
        ttsek.style.display = "block"; 
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
     else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}                               
    }
    else
    {if(choice == 'no') {
        score++;
		ttsek.style.display = "block";
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
    else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}
    }
    trans++; break;
        
        case 13: if (imgs[12].title==imgs2[12].title)
    {if(choice == 'yes') {
        score++;
        ttsek.style.display = "block"; 
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
     else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}                               
    }
    else
    {if(choice == 'no') {
        score++;
		ttsek.style.display = "block";
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
    else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}
    }
    trans++; break;
        
        case 14: if (imgs[13].title==imgs2[13].title)
    {if(choice == 'yes') {
        score++;
        ttsek.style.display = "block"; 
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
     else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}                               
    }
    else
    {if(choice == 'no') {
        score++;
		ttsek.style.display = "block";
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
    else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}
    }
    trans++; break;
        
        case 15: if (imgs[14].title==imgs2[14].title)
    {if(choice == 'yes') {
        score++;
        ttsek.style.display = "block"; 
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
     else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}                               
    }
    else
    {if(choice == 'no') {
        score++;
		ttsek.style.display = "block";
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
    else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}
    }
    trans++; break;} break;
            
        case 123:
        switch(trans) {
    case 1: if(choice == imgs[0].title)
    {   score++;
        ttsek.style.display = "block"; 
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
     else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}                               
    trans++; break;
        
        case 2: if(choice == imgs[1].title)
    {   score++;
        ttsek.style.display = "block"; 
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
     else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}                               
    trans++; break;
        
        case 3: if(choice == imgs[2].title)
    {   score++;
        ttsek.style.display = "block"; 
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
     else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}                               
    trans++; break;
        
        case 4: if(choice == imgs[3].title)
    {   score++;
        ttsek.style.display = "block"; 
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
     else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}                               
    trans++; break;
        
        case 5: if(choice == imgs[4].title)
    {   score++;
        ttsek.style.display = "block"; 
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
     else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}                               
    trans++; break;
        
        case 6: if(choice == imgs[5].title)
    {   score++;
        ttsek.style.display = "block"; 
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
     else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}                               
    trans++; break;
        
        case 7: if(choice == imgs[6].title)
    {   score++;
        ttsek.style.display = "block"; 
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
     else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}                               
    trans++; break;
        
        case 8: if(choice == imgs[7].title)
    {   score++;
        ttsek.style.display = "block"; 
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
     else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}                               
    trans++; break;
        
        case 9: if(choice == imgs[8].title)
    {   score++;
        ttsek.style.display = "block"; 
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
     else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}                               
    trans++; break;
        
        case 10: if(choice == imgs[9].title)
    {   score++;
        ttsek.style.display = "block"; 
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
     else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}                               
    trans++; break;
        
        case 11: if(choice == imgs[10].title)
    {   score++;
        ttsek.style.display = "block"; 
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
     else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}                               
    trans++; break;
        
        case 12: if(choice == imgs[11].title)
    {   score++;
        ttsek.style.display = "block"; 
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
     else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}                               
    trans++; break;
        
        case 13: if(choice == imgs[12].title)
    {   score++;
        ttsek.style.display = "block"; 
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
     else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}                               
    trans++; break;
        
        case 14: if(choice == imgs[13].title)
    {   score++;
        ttsek.style.display = "block"; 
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
     else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}                               
    trans++; break;
        
        case 15: if(choice == imgs[14].title)
    {   score++;
        ttsek.style.display = "block"; 
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
     else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}                               
    trans++; break;
        
        case 16: if(choice == imgs[15].title)
    {   score++;
        ttsek.style.display = "block"; 
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
     else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}                               
    trans++; break;
        
        case 17: if(choice == imgs[16].title)
    {   score++;
        ttsek.style.display = "block"; 
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
     else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}                               
    trans++; break;
            
        case 18: if(choice == imgs[17].title)
    {   score++;
        ttsek.style.display = "block"; 
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
     else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}                               
    trans++; break;
            
        case 19: if(choice == imgs[18].title)
    {   score++;
        ttsek.style.display = "block"; 
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
     else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}                               
    trans++; break;
            
        case 20: if(choice == imgs[19].title)
    {   score++;
        ttsek.style.display = "block"; 
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
     else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}                               
    trans++; break;} break;
            
        case 131: 
        switch(trans) {
    case 1: if(imgs[0].title==imgs2[0].title)
    {if(choice == 'yes') {
        score++;
        ttsek.style.display = "block"; 
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
     else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}                               
    }
    else
    {if(choice == 'no') {
        score++;
		ttsek.style.display = "block";
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
    else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}
    }
    trans++; break;
        
        case 2: if(imgs[1].title==imgs2[1].title)
    {if(choice == 'yes') {
        score++;
        ttsek.style.display = "block"; 
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
     else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}                               
    }
    else
    {if(choice == 'no') {
        score++;
		ttsek.style.display = "block";
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
    else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}
    }
    trans++; break;
        
        case 3: if (imgs[2].title==imgs2[2].title)
    {if(choice == 'yes') {
        score++;
        ttsek.style.display = "block"; 
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
     else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}                               
    }
    else
    {if(choice == 'no') {
        score++;
		ttsek.style.display = "block";
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
    else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}
    }
    trans++; break;
        
        case 4: if (imgs[3].title==imgs2[3].title)
    {if(choice == 'yes') {
        score++;
        ttsek.style.display = "block"; 
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
     else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}                               
    }
    else
    {if(choice == 'no') {
        score++;
		ttsek.style.display = "block";
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
    else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}
    }
    trans++; break;
        
        case 5: if (imgs[4].title==imgs2[4].title)
    {if(choice == 'yes') {
        score++;
        ttsek.style.display = "block"; 
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
     else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}                               
    }
    else
    {if(choice == 'no') {
        score++;
		ttsek.style.display = "block";
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
    else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}
    }
    trans++; break;
        
        case 6: if (imgs[5].title==imgs2[5].title)
    {if(choice == 'yes') {
        score++;
        ttsek.style.display = "block"; 
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
     else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}                               
    }
    else
    {if(choice == 'no') {
        score++;
		ttsek.style.display = "block";
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
    else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}
    }
    trans++; break;
        
        case 7: if (imgs[6].title==imgs2[6].title)
    {if(choice == 'yes') {
        score++;
        ttsek.style.display = "block"; 
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
     else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}                               
    }
    else
    {if(choice == 'no') {
        score++;
		ttsek.style.display = "block";
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
    else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}
    }
    trans++; break;
        
        case 8: if (imgs[7].title==imgs2[7].title)
    {if(choice == 'yes') {
        score++;
        ttsek.style.display = "block"; 
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
     else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}                               
    }
    else
    {if(choice == 'no') {
        score++;
		ttsek.style.display = "block";
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
    else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}
    }
    trans++; break;
        
        case 9: if (imgs[8].title==imgs2[8].title)
    {if(choice == 'yes') {
        score++;
        ttsek.style.display = "block"; 
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
     else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}                               
    }
    else
    {if(choice == 'no') {
        score++;
		ttsek.style.display = "block";
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
    else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}
    }
    trans++; break;
        
        case 10: if (imgs[9].title==imgs2[9].title)
    {if(choice == 'yes') {
        score++;
        ttsek.style.display = "block"; 
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
     else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}                               
    }
    else
    {if(choice == 'no') {
        score++;
		ttsek.style.display = "block";
        setTimeout(function() {
        ttsek.style.display = "none";
        },500);}
    else {
        eeks.style.display = "block";
        setTimeout(function() {
        eeks.style.display = "none";
        },500);}
    }
    trans++; break;} break;
            
        case 132:
        switch(trans) {
        case 1: if(choice == imgs[0].ans)
            {
                score++;
                ttsek.style.display = "block"; 
                setTimeout(function() {
                ttsek.style.display = "none";
                },500);
            }
            else {
                eeks.style.display = "block";
                setTimeout(function() {
                eeks.style.display = "none";
                },500);
            }
            trans++; break;
            
        case 2: if(choice == imgs[1].ans)
            {
                score++;
                ttsek.style.display = "block"; 
                setTimeout(function() {
                ttsek.style.display = "none";
                },500);
            }
            else {
                eeks.style.display = "block";
                setTimeout(function() {
                eeks.style.display = "none";
                },500);
            }
            trans++; break;
                        
        case 3: if(choice == imgs[2].ans)
            {
                score++;
                ttsek.style.display = "block"; 
                setTimeout(function() {
                ttsek.style.display = "none";
                },500);
            }
            else {
                eeks.style.display = "block";
                setTimeout(function() {
                eeks.style.display = "none";
                },500);
            }
            trans++; break;
                        
        case 4: if(choice == imgs[3].ans)
            {
                score++;
                ttsek.style.display = "block"; 
                setTimeout(function() {
                ttsek.style.display = "none";
                },500);
            }
            else {
                eeks.style.display = "block";
                setTimeout(function() {
                eeks.style.display = "none";
                },500);
            }
            trans++; break;
                        
        case 5: if(choice == imgs[4].ans)
            {
                score++;
                ttsek.style.display = "block"; 
                setTimeout(function() {
                ttsek.style.display = "none";
                },500);
            }
            else {
                eeks.style.display = "block";
                setTimeout(function() {
                eeks.style.display = "none";
                },500);
            }
            trans++; break;
                        
        case 6: if(choice == imgs[5].ans)
            {
                score++;
                ttsek.style.display = "block"; 
                setTimeout(function() {
                ttsek.style.display = "none";
                },500);
            }
            else {
                eeks.style.display = "block";
                setTimeout(function() {
                eeks.style.display = "none";
                },500);
            }
            trans++; break;
                        
        case 7: if(choice == imgs[6].ans)
            {
                score++;
                ttsek.style.display = "block"; 
                setTimeout(function() {
                ttsek.style.display = "none";
                },500);
            }
            else {
                eeks.style.display = "block";
                setTimeout(function() {
                eeks.style.display = "none";
                },500);
            }
            trans++; break;
                        
        case 8: if(choice == imgs[7].ans)
            {
                score++;
                ttsek.style.display = "block"; 
                setTimeout(function() {
                ttsek.style.display = "none";
                },500);
            }
            else {
                eeks.style.display = "block";
                setTimeout(function() {
                eeks.style.display = "none";
                },500);
            }
            trans++; break;
                        
        case 9: if(choice == imgs[8].ans)
            {
                score++;
                ttsek.style.display = "block"; 
                setTimeout(function() {
                ttsek.style.display = "none";
                },500);
            }
            else {
                eeks.style.display = "block";
                setTimeout(function() {
                eeks.style.display = "none";
                },500);
            }
            trans++; break;
                        
        case 10: if(choice == imgs[9].ans)
            {
                score++;
                ttsek.style.display = "block"; 
                setTimeout(function() {
                ttsek.style.display = "none";
                },500);
            }
            else {
                eeks.style.display = "block";
                setTimeout(function() {
                eeks.style.display = "none";
                },500);
            }
            trans++; break;
                        
        case 11: if(choice == imgs[10].ans)
            {
                score++;
                ttsek.style.display = "block"; 
                setTimeout(function() {
                ttsek.style.display = "none";
                },500);
            }
            else {
                eeks.style.display = "block";
                setTimeout(function() {
                eeks.style.display = "none";
                },500);
            }
            trans++; break;
                        
        case 12: if(choice == imgs[11].ans)
            {
                score++;
                ttsek.style.display = "block"; 
                setTimeout(function() {
                ttsek.style.display = "none";
                },500);
            }
            else {
                eeks.style.display = "block";
                setTimeout(function() {
                eeks.style.display = "none";
                },500);
            }
            trans++; break;
                        
        case 13: if(choice == imgs[12].ans)
            {
                score++;
                ttsek.style.display = "block"; 
                setTimeout(function() {
                ttsek.style.display = "none";
                },500);
            }
            else {
                eeks.style.display = "block";
                setTimeout(function() {
                eeks.style.display = "none";
                },500);
            }
            trans++; break;
                        
        case 14: if(choice == imgs[13].ans)
            {
                score++;
                ttsek.style.display = "block"; 
                setTimeout(function() {
                ttsek.style.display = "none";
                },500);
            }
            else {
                eeks.style.display = "block";
                setTimeout(function() {
                eeks.style.display = "none";
                },500);
            }
            trans++; break;
                        
        case 15: if(choice == imgs[14].ans)
            {
                score++;
                ttsek.style.display = "block"; 
                setTimeout(function() {
                ttsek.style.display = "none";
                },500);
            }
            else {
                eeks.style.display = "block";
                setTimeout(function() {
                eeks.style.display = "none";
                },500);
            }
            trans++; break;} break;
        
        case 133:
        switch(trans) {
        case 1: if(choice == imgs[0].ans)
            {
                score++;
                ttsek.style.display = "block"; 
                setTimeout(function() {
                ttsek.style.display = "none";
                },500);
            }
            else {
                eeks.style.display = "block";
                setTimeout(function() {
                eeks.style.display = "none";
                },500);
            }
            trans++; break;
            
        case 2: if(choice == imgs[1].ans)
            {
                score++;
                ttsek.style.display = "block"; 
                setTimeout(function() {
                ttsek.style.display = "none";
                },500);
            }
            else {
                eeks.style.display = "block";
                setTimeout(function() {
                eeks.style.display = "none";
                },500);
            }
            trans++; break;
                        
        case 3: if(choice == imgs[2].ans)
            {
                score++;
                ttsek.style.display = "block"; 
                setTimeout(function() {
                ttsek.style.display = "none";
                },500);
            }
            else {
                eeks.style.display = "block";
                setTimeout(function() {
                eeks.style.display = "none";
                },500);
            }
            trans++; break;
                        
        case 4: if(choice == imgs[3].ans)
            {
                score++;
                ttsek.style.display = "block"; 
                setTimeout(function() {
                ttsek.style.display = "none";
                },500);
            }
            else {
                eeks.style.display = "block";
                setTimeout(function() {
                eeks.style.display = "none";
                },500);
            }
            trans++; break;
                        
        case 5: if(choice == imgs[4].ans)
            {
                score++;
                ttsek.style.display = "block"; 
                setTimeout(function() {
                ttsek.style.display = "none";
                },500);
            }
            else {
                eeks.style.display = "block";
                setTimeout(function() {
                eeks.style.display = "none";
                },500);
            }
            trans++; break;
                        
        case 6: if(choice == imgs[5].ans)
            {
                score++;
                ttsek.style.display = "block"; 
                setTimeout(function() {
                ttsek.style.display = "none";
                },500);
            }
            else {
                eeks.style.display = "block";
                setTimeout(function() {
                eeks.style.display = "none";
                },500);
            }
            trans++; break;
                        
        case 7: if(choice == imgs[6].ans)
            {
                score++;
                ttsek.style.display = "block"; 
                setTimeout(function() {
                ttsek.style.display = "none";
                },500);
            }
            else {
                eeks.style.display = "block";
                setTimeout(function() {
                eeks.style.display = "none";
                },500);
            }
            trans++; break;
                        
        case 8: if(choice == imgs[7].ans)
            {
                score++;
                ttsek.style.display = "block"; 
                setTimeout(function() {
                ttsek.style.display = "none";
                },500);
            }
            else {
                eeks.style.display = "block";
                setTimeout(function() {
                eeks.style.display = "none";
                },500);
            }
            trans++; break;
                        
        case 9: if(choice == imgs[8].ans)
            {
                score++;
                ttsek.style.display = "block"; 
                setTimeout(function() {
                ttsek.style.display = "none";
                },500);
            }
            else {
                eeks.style.display = "block";
                setTimeout(function() {
                eeks.style.display = "none";
                },500);
            }
            trans++; break;
                        
        case 10: if(choice == imgs[9].ans)
            {
                score++;
                ttsek.style.display = "block"; 
                setTimeout(function() {
                ttsek.style.display = "none";
                },500);
            }
            else {
                eeks.style.display = "block";
                setTimeout(function() {
                eeks.style.display = "none";
                },500);
            }
            trans++; break;
                        
        case 11: if(choice == imgs[10].ans)
            {
                score++;
                ttsek.style.display = "block"; 
                setTimeout(function() {
                ttsek.style.display = "none";
                },500);
            }
            else {
                eeks.style.display = "block";
                setTimeout(function() {
                eeks.style.display = "none";
                },500);
            }
            trans++; break;
                        
        case 12: if(choice == imgs[11].ans)
            {
                score++;
                ttsek.style.display = "block"; 
                setTimeout(function() {
                ttsek.style.display = "none";
                },500);
            }
            else {
                eeks.style.display = "block";
                setTimeout(function() {
                eeks.style.display = "none";
                },500);
            }
            trans++; break;
                        
        case 13: if(choice == imgs[12].ans)
            {
                score++;
                ttsek.style.display = "block"; 
                setTimeout(function() {
                ttsek.style.display = "none";
                },500);
            }
            else {
                eeks.style.display = "block";
                setTimeout(function() {
                eeks.style.display = "none";
                },500);
            }
            trans++; break;
                        
        case 14: if(choice == imgs[13].ans)
            {
                score++;
                ttsek.style.display = "block"; 
                setTimeout(function() {
                ttsek.style.display = "none";
                },500);
            }
            else {
                eeks.style.display = "block";
                setTimeout(function() {
                eeks.style.display = "none";
                },500);
            }
            trans++; break;
                        
        case 15: if(choice == imgs[14].ans)
            {
                score++;
                ttsek.style.display = "block"; 
                setTimeout(function() {
                ttsek.style.display = "none";
                },500);
            }
            else {
                eeks.style.display = "block";
                setTimeout(function() {
                eeks.style.display = "none";
                },500);
            }
            trans++; break;
                        
        case 16: if(choice == imgs[15].ans)
            {
                score++;
                ttsek.style.display = "block"; 
                setTimeout(function() {
                ttsek.style.display = "none";
                },500);
            }
            else {
                eeks.style.display = "block";
                setTimeout(function() {
                eeks.style.display = "none";
                },500);
            }
            trans++; break;
                        
        case 17: if(choice == imgs[16].ans)
            {
                score++;
                ttsek.style.display = "block"; 
                setTimeout(function() {
                ttsek.style.display = "none";
                },500);
            }
            else {
                eeks.style.display = "block";
                setTimeout(function() {
                eeks.style.display = "none";
                },500);
            }
            trans++; break;
                        
        case 18: if(choice == imgs[17].ans)
            {
                score++;
                ttsek.style.display = "block"; 
                setTimeout(function() {
                ttsek.style.display = "none";
                },500);
            }
            else {
                eeks.style.display = "block";
                setTimeout(function() {
                eeks.style.display = "none";
                },500);
            }
            trans++; break;
                        
        case 19: if(choice == imgs[18].ans)
            {
                score++;
                ttsek.style.display = "block"; 
                setTimeout(function() {
                ttsek.style.display = "none";
                },500);
            }
            else {
                eeks.style.display = "block";
                setTimeout(function() {
                eeks.style.display = "none";
                },500);
            }
            trans++; break;
                        
        case 20: if(choice == imgs[19].ans)
            {
                score++;
                ttsek.style.display = "block"; 
                setTimeout(function() {
                ttsek.style.display = "none";
                },500);
            }
            else {
                eeks.style.display = "block";
                setTimeout(function() {
                eeks.style.display = "none";
                },500);
            }
            trans++; break;} break;
    }
    theTrans();
}

function theTrans() {
    switch(loc) {
        case 111: 
        switch(trans) {
            case 2:
                imgs[0].style.display = "none";
                imgs2[0].style.display = "none";
                imgs[1].style.display = "block";
                imgs2[1].style.display = "block"; break;
                
            case 3:
                imgs[1].style.display = "none";
                imgs2[1].style.display = "none";
                imgs[2].style.display = "block";
                imgs2[2].style.display = "block"; break;
            
            case 4:
                imgs[2].style.display = "none";
                imgs2[2].style.display = "none";
                imgs[3].style.display = "block";
                imgs2[3].style.display = "block"; break;
                
            case 5:
                imgs[3].style.display = "none";
                imgs2[3].style.display = "none";
                imgs[4].style.display = "block";
                imgs2[4].style.display = "block"; break;
            
            case 6:
                imgs[4].style.display = "none";
                imgs2[4].style.display = "none";
                imgs[5].style.display = "block";
                imgs2[5].style.display = "block"; break;
                
            case 7:
                imgs[5].style.display = "none";
                imgs2[5].style.display = "none";
                imgs[6].style.display = "block";
                imgs2[6].style.display = "block"; break;
                
            case 8:
                imgs[6].style.display = "none";
                imgs2[6].style.display = "none";
                imgs[7].style.display = "block";
                imgs2[7].style.display = "block"; break;
                
            case 9:
                imgs[7].style.display = "none";
                imgs2[7].style.display = "none";
                imgs[8].style.display = "block";
                imgs2[8].style.display = "block"; break;
                
            case 10:
                imgs[8].style.display = "none";
                imgs2[8].style.display = "none";
                imgs[9].style.display = "block";
                imgs2[9].style.display = "block"; break;
                
            case 11:
                imgs[9].style.display = "none";
                imgs2[9].style.display = "none";
                
                document.getElementById("scorer").innerHTML = score; 
                theResult(); break;
        } break;
             
        case 112:
        switch(trans) {
    case 2: $(imgs[1]).addClass("slideLeft");
    setTimeout(function() {
        $(imgs[1]).removeClass("slideLeft");
        imgs[1].style.display ="none";
        imgs[2].style.display ="block";
    },500); break;
    case 3: $(imgs[2]).addClass("slideLeft");
    setTimeout(function() {
        $(imgs[2]).removeClass("slideLeft");
        imgs[2].style.display ="none";
        imgs[3].style.display ="block";
    },500); break;
    case 4: $(imgs[3]).addClass("slideLeft");
    setTimeout(function() {
        $(imgs[3]).removeClass("slideLeft");
        imgs[3].style.display ="none";
        imgs[4].style.display ="block";
    },500); break;
    case 5: $(imgs[4]).addClass("slideLeft");
    setTimeout(function() {
        $(imgs[4]).removeClass("slideLeft");
        imgs[4].style.display ="none";
        imgs[5].style.display ="block";
    },500); break;
    case 6: $(imgs[5]).addClass("slideLeft");
    setTimeout(function() {
        $(imgs[5]).removeClass("slideLeft");
        imgs[5].style.display ="none";
        imgs[6].style.display ="block";
    },500); break;
    case 7: $(imgs[6]).addClass("slideLeft");
    setTimeout(function() {
        $(imgs[6]).removeClass("slideLeft");
        imgs[6].style.display ="none";
        imgs[7].style.display ="block";
    },500); break;
    case 8: $(imgs[7]).addClass("slideLeft");
    setTimeout(function() {
        $(imgs[7]).removeClass("slideLeft");
        imgs[7].style.display ="none";
        imgs[8].style.display ="block";
    },500); break;
    case 9: $(imgs[8]).addClass("slideLeft");
    setTimeout(function() {
        $(imgs[8]).removeClass("slideLeft");
        imgs[8].style.display ="none";
        imgs[9].style.display ="block";
    },500); break;
    case 10: $(imgs[9]).addClass("slideLeft");
    setTimeout(function() {
        $(imgs[9]).removeClass("slideLeft");
        imgs[9].style.display ="none";
        imgs[10].style.display ="block";
    },500); break;
    case 11: $(imgs[10]).addClass("slideLeft");
    setTimeout(function() {
        $(imgs[10]).removeClass("slideLeft");
        imgs[10].style.display ="none";
        imgs[11].style.display ="block";
    },500); break;
    case 12: $(imgs[11]).addClass("slideLeft");
    setTimeout(function() {
        $(imgs[11]).removeClass("slideLeft");
        imgs[11].style.display ="none";
        imgs[12].style.display ="block";
    },500); break;
    case 13: $(imgs[12]).addClass("slideLeft");
    setTimeout(function() {
        $(imgs[12]).removeClass("slideLeft");
        imgs[12].style.display ="none";
        imgs[13].style.display ="block";
    },500); break;
    case 14: $(imgs[13]).addClass("slideLeft");
    setTimeout(function() {
        $(imgs[13]).removeClass("slideLeft");
        imgs[13].style.display ="none";
        imgs[14].style.display ="block";
    },500); break;
    case 15: $(imgs[14]).addClass("slideLeft");
    setTimeout(function() {
        $(imgs[14]).removeClass("slideLeft");
        imgs[14].style.display ="none";
        imgs[15].style.display ="block";
    },500); break;
    case 16:
        clearAllShape();
        imgs[15].style.display = "none";
        document.getElementById("scorer").innerHTML = score; theResult(); break;
        } break;
            
        case 113:
        switch(trans) {
            case 2:
                imgs[0].style.display = "none";
                imgs2[0].style.display = "none";
                imgs[1].style.display = "block";
                imgs2[1].style.display = "block"; break;
                
            case 3:
                imgs[1].style.display = "none";
                imgs2[1].style.display = "none";
                imgs[2].style.display = "block";
                imgs2[2].style.display = "block"; break;
            
            case 4:
                imgs[2].style.display = "none";
                imgs2[2].style.display = "none";
                imgs[3].style.display = "block";
                imgs2[3].style.display = "block"; break;
                
            case 5:
                imgs[3].style.display = "none";
                imgs2[3].style.display = "none";
                imgs[4].style.display = "block";
                imgs2[4].style.display = "block"; break;
            
            case 6:
                imgs[4].style.display = "none";
                imgs2[4].style.display = "none";
                imgs[5].style.display = "block";
                imgs2[5].style.display = "block"; break;
                
            case 7:
                imgs[5].style.display = "none";
                imgs2[5].style.display = "none";
                imgs[6].style.display = "block";
                imgs2[6].style.display = "block"; break;
                
            case 8:
                imgs[6].style.display = "none";
                imgs2[6].style.display = "none";
                imgs[7].style.display = "block";
                imgs2[7].style.display = "block"; break;
                
            case 9:
                imgs[7].style.display = "none";
                imgs2[7].style.display = "none";
                imgs[8].style.display = "block";
                imgs2[8].style.display = "block"; break;
                
            case 10:
                imgs[8].style.display = "none";
                imgs2[8].style.display = "none";
                imgs[9].style.display = "block";
                imgs2[9].style.display = "block"; break;
            case 11:
                imgs[9].style.display = "none";
                imgs2[9].style.display = "none";
                imgs[10].style.display = "block";
                imgs2[10].style.display = "block"; break;
            case 12:
                imgs[10].style.display = "none";
                imgs2[10].style.display = "none";
                imgs[11].style.display = "block";
                imgs2[11].style.display = "block"; break;
            case 13:
                imgs[11].style.display = "none";
                imgs2[11].style.display = "none";
                imgs[12].style.display = "block";
                imgs2[12].style.display = "block"; break;
            case 14:
                imgs[12].style.display = "none";
                imgs2[12].style.display = "none";
                imgs[13].style.display = "block";
                imgs2[13].style.display = "block"; break;
            case 15:
                imgs[13].style.display = "none";
                imgs2[13].style.display = "none";
                imgs[14].style.display = "block";
                imgs2[14].style.display = "block"; break;
            case 16:
                imgs[14].style.display = "none";
                imgs2[14].style.display = "none";
                imgs[15].style.display = "block";
                imgs2[15].style.display = "block"; break;
            case 17:
                imgs[15].style.display = "none";
                imgs2[15].style.display = "none";
                imgs[16].style.display = "block";
                imgs2[16].style.display = "block"; break;
            case 18:
                imgs[16].style.display = "none";
                imgs2[16].style.display = "none";
                imgs[17].style.display = "block";
                imgs2[17].style.display = "block"; break;
            case 19:
                imgs[17].style.display = "none";
                imgs2[17].style.display = "none";
                imgs[18].style.display = "block";
                imgs2[18].style.display = "block"; break;
                
            case 20:
                imgs[18].style.display = "none";
                imgs2[18].style.display = "none";
                imgs[19].style.display = "block";
                imgs2[19].style.display = "block"; break;
                
            case 21:
                imgs[19].style.display = "none";
                imgs2[19].style.display = "none";
                document.getElementById("scorer").innerHTML = score; 
                theResult(); break;
        } break;
            
        case 121:
        switch(trans) {
            case 2:
                imgs[0].style.display = "none";
                imgs2[0].style.display = "none";
                imgs[1].style.display = "block";
                imgs2[1].style.display = "block"; break;
                
            case 3:
                imgs[1].style.display = "none";
                imgs2[1].style.display = "none";
                imgs[2].style.display = "block";
                imgs2[2].style.display = "block"; break;
            
            case 4:
                imgs[2].style.display = "none";
                imgs2[2].style.display = "none";
                imgs[3].style.display = "block";
                imgs2[3].style.display = "block"; break;
                
            case 5:
                imgs[3].style.display = "none";
                imgs2[3].style.display = "none";
                imgs[4].style.display = "block";
                imgs2[4].style.display = "block"; break;
            
            case 6:
                imgs[4].style.display = "none";
                imgs2[4].style.display = "none";
                imgs[5].style.display = "block";
                imgs2[5].style.display = "block"; break;
                
            case 7:
                imgs[5].style.display = "none";
                imgs2[5].style.display = "none";
                imgs[6].style.display = "block";
                imgs2[6].style.display = "block"; break;
                
            case 8:
                imgs[6].style.display = "none";
                imgs2[6].style.display = "none";
                imgs[7].style.display = "block";
                imgs2[7].style.display = "block"; break;
                
            case 9:
                imgs[7].style.display = "none";
                imgs2[7].style.display = "none";
                imgs[8].style.display = "block";
                imgs2[8].style.display = "block"; break;
                
            case 10:
                imgs[8].style.display = "none";
                imgs2[8].style.display = "none";
                imgs[9].style.display = "block";
                imgs2[9].style.display = "block"; break;
                
            case 11:
                imgs[9].style.display = "none";
                imgs2[9].style.display = "none";
                document.getElementById("scorer").innerHTML = score; 
                theResult(); break;
        } break;
            
        case 122:
        switch(trans) {
            case 2:
                imgs[0].style.display = "none";
                imgs2[0].style.display = "none";
                imgs[1].style.display = "block";
                imgs2[1].style.display = "block"; break;
                
            case 3:
                imgs[1].style.display = "none";
                imgs2[1].style.display = "none";
                imgs[2].style.display = "block";
                imgs2[2].style.display = "block"; break;
            
            case 4:
                imgs[2].style.display = "none";
                imgs2[2].style.display = "none";
                imgs[3].style.display = "block";
                imgs2[3].style.display = "block"; break;
                
            case 5:
                imgs[3].style.display = "none";
                imgs2[3].style.display = "none";
                imgs[4].style.display = "block";
                imgs2[4].style.display = "block"; break;
            
            case 6:
                imgs[4].style.display = "none";
                imgs2[4].style.display = "none";
                imgs[5].style.display = "block";
                imgs2[5].style.display = "block"; break;
                
            case 7:
                imgs[5].style.display = "none";
                imgs2[5].style.display = "none";
                imgs[6].style.display = "block";
                imgs2[6].style.display = "block"; break;
                
            case 8:
                imgs[6].style.display = "none";
                imgs2[6].style.display = "none";
                imgs[7].style.display = "block";
                imgs2[7].style.display = "block"; break;
                
            case 9:
                imgs[7].style.display = "none";
                imgs2[7].style.display = "none";
                imgs[8].style.display = "block";
                imgs2[8].style.display = "block"; break;
                
            case 10:
                imgs[8].style.display = "none";
                imgs2[8].style.display = "none";
                imgs[9].style.display = "block";
                imgs2[9].style.display = "block"; break;
                
            case 11:
                imgs[9].style.display = "none";
                imgs2[9].style.display = "none";
                imgs[10].style.display = "block";
                imgs2[10].style.display = "block"; break;
                
            case 12:
                imgs[10].style.display = "none";
                imgs2[10].style.display = "none";
                imgs[11].style.display = "block";
                imgs2[11].style.display = "block"; break;
                
            case 13:
                imgs[11].style.display = "none";
                imgs2[11].style.display = "none";
                imgs[12].style.display = "block";
                imgs2[12].style.display = "block"; break;
                
            case 14:
                imgs[12].style.display = "none";
                imgs2[12].style.display = "none";
                imgs[13].style.display = "block";
                imgs2[13].style.display = "block"; break;
                
            case 15:
                imgs[13].style.display = "none";
                imgs2[13].style.display = "none";
                imgs[14].style.display = "block";
                imgs2[14].style.display = "block"; break;
                
            case 16:
                imgs[14].style.display = "none";
                imgs2[14].style.display = "none";
                document.getElementById("scorer").innerHTML = score; 
                theResult(); break;
        } break;
            
        case 123:
        switch(trans) {
            case 2:
                imgs[0].style.display = "none";
                imgs[1].style.display = "block"; break;
                
            case 3:
                imgs[1].style.display = "none";
                imgs[2].style.display = "block"; break;
            
            case 4:
                imgs[2].style.display = "none";
                imgs[3].style.display = "block"; break;
                
            case 5:
                imgs[3].style.display = "none";
                imgs[4].style.display = "block"; break;
            
            case 6:
                imgs[4].style.display = "none";
                imgs[5].style.display = "block"; break;
                
            case 7:
                imgs[5].style.display = "none";
                imgs[6].style.display = "block"; break;
                
            case 8:
                imgs[6].style.display = "none";
                imgs[7].style.display = "block"; break;
                
            case 9:
                imgs[7].style.display = "none";
                imgs[8].style.display = "block"; break;
                
            case 10:
                imgs[8].style.display = "none";
                imgs[9].style.display = "block"; break;
                
            case 11:
                imgs[9].style.display = "none";
                imgs[10].style.display = "block"; break;
                
            case 12:
                imgs[10].style.display = "none";
                imgs[11].style.display = "block"; break;
                
            case 13:
                imgs[11].style.display = "none";
                imgs[12].style.display = "block"; break;
                
            case 14:
                imgs[12].style.display = "none";
                imgs[13].style.display = "block"; break;
                
            case 15:
                imgs[13].style.display = "none";
                imgs[14].style.display = "block"; break;
                
            case 16:
                imgs[14].style.display = "none";
                imgs[15].style.display = "block"; break;
                
            case 17:
                imgs[15].style.display = "none";
                imgs[16].style.display = "block"; break;
                
            case 18:
                imgs[16].style.display = "none";
                imgs[17].style.display = "block"; break;
                
            case 19:
                imgs[17].style.display = "none";
                imgs[18].style.display = "block"; break;
                
            case 20:
                imgs[18].style.display = "none";
                imgs[19].style.display = "block"; break;
                
            case 21:
                imgs[19].style.display = "none";
                document.getElementById("scorer").innerHTML = score; 
                theResult(); break;
        } break; 
            
        case 131:
        switch(trans) {
            case 2:
                imgs[0].style.display = "none";
                imgs2[0].style.display = "none";
                imgs[1].style.display = "block";
                imgs2[1].style.display = "block"; break;
                
            case 3:
                imgs[1].style.display = "none";
                imgs2[1].style.display = "none";
                imgs[2].style.display = "block";
                imgs2[2].style.display = "block"; break;
            
            case 4:
                imgs[2].style.display = "none";
                imgs2[2].style.display = "none";
                imgs[3].style.display = "block";
                imgs2[3].style.display = "block"; break;
                
            case 5:
                imgs[3].style.display = "none";
                imgs2[3].style.display = "none";
                imgs[4].style.display = "block";
                imgs2[4].style.display = "block"; break;
            
            case 6:
                imgs[4].style.display = "none";
                imgs2[4].style.display = "none";
                imgs[5].style.display = "block";
                imgs2[5].style.display = "block"; break;
                
            case 7:
                imgs[5].style.display = "none";
                imgs2[5].style.display = "none";
                imgs[6].style.display = "block";
                imgs2[6].style.display = "block"; break;
                
            case 8:
                imgs[6].style.display = "none";
                imgs2[6].style.display = "none";
                imgs[7].style.display = "block";
                imgs2[7].style.display = "block"; break;
                
            case 9:
                imgs[7].style.display = "none";
                imgs2[7].style.display = "none";
                imgs[8].style.display = "block";
                imgs2[8].style.display = "block"; break;
                
            case 10:
                imgs[8].style.display = "none";
                imgs2[8].style.display = "none";
                imgs[9].style.display = "block";
                imgs2[9].style.display = "block"; break;
                
            case 11:
                imgs[9].style.display = "none";
                imgs2[9].style.display = "none";
                document.getElementById("scorer").innerHTML = score; 
                theResult(); break;
        } break;
            
        case 132:
        switch(trans) {
            case 2:
                imgs[0].style.display = "none";
                imgs[1].style.display = "block"; break;
                
            case 3:
                imgs[1].style.display = "none";
                imgs[2].style.display = "block"; break;
                
            case 4:
                imgs[2].style.display = "none";
                imgs[3].style.display = "block"; break;
                
            case 5:
                imgs[3].style.display = "none";
                imgs[4].style.display = "block"; break;
                
            case 6:
                imgs[4].style.display = "none";
                imgs[5].style.display = "block"; break;
                
            case 7:
                imgs[5].style.display = "none";
                imgs[6].style.display = "block"; break;
                
            case 8:
                imgs[6].style.display = "none";
                imgs[7].style.display = "block"; break;
                
            case 9:
                imgs[7].style.display = "none";
                imgs[8].style.display = "block"; break;
                
            case 10:
                imgs[8].style.display = "none";
                imgs[9].style.display = "block"; break;
                
            case 11:
                imgs[9].style.display = "none";
                imgs[10].style.display = "block"; break;
                
            case 12:
                imgs[10].style.display = "none";
                imgs[11].style.display = "block"; break;
                
            case 13:
                imgs[11].style.display = "none";
                imgs[12].style.display = "block"; break;
                
            case 14:
                imgs[12].style.display = "none";
                imgs[13].style.display = "block"; break;
                
            case 15:
                imgs[13].style.display = "none";
                imgs[14].style.display = "block"; break;
                
            case 16:
                imgs[14].style.display = "none";
                document.getElementById("scorer").innerHTML = score; 
                theResult(); break;} break;
        
        case 133:
        switch(trans) {
            case 2:
                imgs[0].style.display = "none";
                imgs[1].style.display = "block"; break;
                
            case 3:
                imgs[1].style.display = "none";
                imgs[2].style.display = "block"; break;
                
            case 4:
                imgs[2].style.display = "none";
                imgs[3].style.display = "block"; break;
                
            case 5:
                imgs[3].style.display = "none";
                imgs[4].style.display = "block"; break;
                
            case 6:
                imgs[4].style.display = "none";
                imgs[5].style.display = "block"; break;
                
            case 7:
                imgs[5].style.display = "none";
                imgs[6].style.display = "block"; break;
                
            case 8:
                imgs[6].style.display = "none";
                imgs[7].style.display = "block"; break;
                
            case 9:
                imgs[7].style.display = "none";
                imgs[8].style.display = "block"; break;
                
            case 10:
                imgs[8].style.display = "none";
                imgs[9].style.display = "block"; break;
                
            case 11:
                imgs[9].style.display = "none";
                imgs[10].style.display = "block"; break;
                
            case 12:
                imgs[10].style.display = "none";
                imgs[11].style.display = "block"; break;
                
            case 13:
                imgs[11].style.display = "none";
                imgs[12].style.display = "block"; break;
                
            case 14:
                imgs[12].style.display = "none";
                imgs[13].style.display = "block"; break;
                
            case 15:
                imgs[13].style.display = "none";
                imgs[14].style.display = "block"; break;
                
            case 16:
                imgs[14].style.display = "none";
                imgs[15].style.display = "block"; break;
                
            case 17:
                imgs[15].style.display = "none";
                imgs[16].style.display = "block"; break;
                
            case 18:
                imgs[16].style.display = "none";
                imgs[17].style.display = "block"; break;
                
            case 19:
                imgs[17].style.display = "none";
                imgs[18].style.display = "block"; break;
                
            case 20:
                imgs[18].style.display = "none";
                imgs[19].style.display = "block"; break;
                
            case 21:
                imgs[19].style.display = "none";
                document.getElementById("scorer").innerHTML = score; 
                theResult(); break;} break;
    }
    
    choice = null;
    document.getElementById("scorer").innerHTML = score;
 }

function theResult() {
    
    clearInterval(b);
    b = null;
    
    switch(loc) {
        case 111:
            
    clearEntrance();
    clearAllShape();

    if (score == 10) {
        Result.style.display = "block";
        Success.style.display = "block";
        Lvl1easy.style.display = "none";
        document.getElementById('choices').style.display = "none";
        document.getElementById('peri').style.display = "none";
        Scored.innerHTML = score + "/10"; 
        document.getElementById('star').style.display = "block"; 
        document.getElementById('star1').style.display = "block"; 
        document.getElementById('star2').style.display = "block";
        Next.onclick = goIns2;
            document.getElementById('med1').style.opacity = "1";
            document.getElementById('med1').onclick = goIns2;
            document.getElementById('nxtlvl').style.opacity = "1";
						localStorage.setItem(user+'.stage1','l');}
            
    else if (score >= 6) {
        Result.style.display = "block";
        Success.style.display = "block";
        Lvl1easy.style.display = "none";
        document.getElementById('peri').style.display = "none";
        document.getElementById('choices').style.display = "none";
        Scored.innerHTML = score + "/10";
        document.getElementById('star1').style.display = "block";
        document.getElementById('star2').style.display = "block";
        Next.onclick = goIns2;
            document.getElementById('med1').style.opacity = "1";
            document.getElementById('med1').onclick = goIns2;
            document.getElementById('nxtlvl').style.opacity = "1";
						localStorage.setItem(user+'.stage1','l');}
            
    else if(score < 6) {
        Result.style.display = "block";
        Failed.style.display = "block";
        Lvl1easy.style.display = "none";
        document.getElementById('choices').style.display = "none";
        document.getElementById('peri').style.display = "none";
        Scored.innerHTML = score + "/10";
        document.getElementById('star').style.display = "block";
        document.getElementById('nxtlvl').style.opacity = "0.2";
        Next.onclick = null;}
            
        Try.onclick = golvl1Easy; break;
            
        case 112:
            
    clearAllShape();
            
    if (score == 15) {
        Result.style.display = "block";
        Success.style.display = "block";
        Lvl1med.style.display = "none";
        document.getElementById('choices').style.display = "none";
        document.getElementById('peri').style.display = "none";
        Scored.innerHTML = score + "/15";
        document.getElementById('star').style.display = "block";
        document.getElementById('star1').style.display = "block";
        document.getElementById('star2').style.display = "block";
        Next.onclick = goIns3;
            document.getElementById('hard1').style.opacity = "1";
            document.getElementById('hard1').onclick = goIns3;
            document.getElementById('nxtlvl').style.opacity = "1";
						localStorage.setItem(user+'.stage1','ll');}
            
    else if (score >= 11) {
        Result.style.display = "block";
        Success.style.display = "block";
        Lvl1med.style.display = "none";
        document.getElementById('choices').style.display = "none";
        document.getElementById('peri').style.display = "none";
        Scored.innerHTML = score + "/15";
        document.getElementById('star1').style.display = "block";
        document.getElementById('star2').style.display = "block";
        Next.onclick = goIns3;
            document.getElementById('hard1').style.opacity = "1";
            document.getElementById('hard1').onclick = goIns3;
            document.getElementById('nxtlvl').style.opacity = "1";
						localStorage.setItem(user+'.stage1','ll');}
            
    else if(score < 11) {
        Result.style.display = "block";
        Failed.style.display = "block";
        Lvl1med.style.display = "none";
        document.getElementById('choices').style.display = "none";
        document.getElementById('peri').style.display = "none";
        Scored.innerHTML = score + "/15";
        document.getElementById('star').style.display = "block";
        document.getElementById('nxtlvl').style.opacity = "0.2";
        Next.onclick = null;}
            
        Try.onclick = golvl1Med; break;       
            
        case 113:
    
    clearAllShape();
    clearObjects();
    clearEntrance2();
            
    if (score == 20) {
        Result.style.display = "block";
        Success.style.display = "block";
        Lvl1hard.style.display = "none";
        document.getElementById('choices').style.display = "none";
        document.getElementById('peri').style.display = "none";
        Scored.innerHTML = score + "/20";
        document.getElementById('star').style.display = "block";
        document.getElementById('star1').style.display = "block";
        document.getElementById('star2').style.display = "block";
        Next.onclick = null;
            document.getElementById('nxtlvl').style.opacity = "0.2";}
            
    else if (score >= 16) {
        Result.style.display = "block";
        Success.style.display = "block";
        Lvl1hard.style.display = "none";
        document.getElementById('choices').style.display = "none";
        document.getElementById('peri').style.display = "none";
        Scored.innerHTML = score + "/20";
        document.getElementById('star1').style.display = "block";
        document.getElementById('star2').style.display = "block";
        Next.onclick = null;
            document.getElementById('nxtlvl').style.opacity = "0.2";}
            
    else if(score < 16) {
        Result.style.display = "block";
        Failed.style.display = "block";
        Lvl1hard.style.display = "none";
        document.getElementById('choices').style.display = "none";
        document.getElementById('peri').style.display = "none";
        Scored.innerHTML = score + "/20";
        document.getElementById('star').style.display = "block";
        document.getElementById('nxtlvl').style.opacity = "0.2";
        Next.onclick = null;}
            
        Try.onclick = golvl1Hard; break;
            
        case 121:
    
    clearAnim();
        
        if (score == 10) {
        Result.style.display = "block";
        Success.style.display = "block";
        Lvl2easy.style.display = "none";
        document.getElementById('choices').style.display = "none";
        document.getElementById('peri').style.display = "none";
        Scored.innerHTML = score + "/10"; 
        document.getElementById('star').style.display = "block"; 
        document.getElementById('star1').style.display = "block"; 
        document.getElementById('star2').style.display = "block";
        Next.onclick = goIns5;
            document.getElementById('med2').style.opacity = "1";
            document.getElementById('med2').onclick = goIns5;
            document.getElementById('nxtlvl').style.opacity = "1";
						localStorage.setItem(user+'.stage2','l');}
            
    else if (score >= 6) {
        Result.style.display = "block";
        Success.style.display = "block";
        Lvl2easy.style.display = "none";
        document.getElementById('peri').style.display = "none";
        document.getElementById('choices').style.display = "none";
        Scored.innerHTML = score + "/10";
        document.getElementById('star1').style.display = "block";
        document.getElementById('star2').style.display = "block";
        Next.onclick = goIns5;
            document.getElementById('med2').style.opacity = "1";
            document.getElementById('med2').onclick = goIns5;
            document.getElementById('nxtlvl').style.opacity = "1";
						localStorage.setItem(user+'.stage2','l');}
            
    else if(score < 6) {
        Result.style.display = "block";
        Failed.style.display = "block";
        Lvl2easy.style.display = "none";
        document.getElementById('choices').style.display = "none";
        document.getElementById('peri').style.display = "none";
        Scored.innerHTML = score + "/10";
        document.getElementById('star').style.display = "block";
        document.getElementById('nxtlvl').style.opacity = "0.2";
        Next.onclick = null;}
            
        Try.onclick = golvl2Easy; break;
            
        case 122:
        
    clearAnim();
        
        if (score == 15) {
        Result.style.display = "block";
        Success.style.display = "block";
        Lvl2med.style.display = "none";
        document.getElementById('choices').style.display = "none";
        document.getElementById('peri').style.display = "none";
        Scored.innerHTML = score + "/15"; 
        document.getElementById('star').style.display = "block"; 
        document.getElementById('star1').style.display = "block"; 
        document.getElementById('star2').style.display = "block";
        Next.onclick = goIns6;
            document.getElementById('hard2').style.opacity = "1";
            document.getElementById('hard2').onlick = goIns6;
            document.getElementById('nxtlvl').style.opacity = "1";
						localStorage.setItem(user+'.stage2','ll');}
            
    else if (score >= 11) {
        Result.style.display = "block";
        Success.style.display = "block";
        Lvl2med.style.display = "none";
        document.getElementById('peri').style.display = "none";
        document.getElementById('choices').style.display = "none";
        Scored.innerHTML = score + "/15";
        document.getElementById('star1').style.display = "block";
        document.getElementById('star2').style.display = "block";
        Next.onclick = goIns6;
            document.getElementById('hard2').style.opacity = "1";
            document.getElementById('hard2').onlick = goIns6;
            document.getElementById('nxtlvl').style.opacity = "1";
						localStorage.setItem(user+'.stage2','ll');}
            
    else if(score < 11) {
        Result.style.display = "block";
        Failed.style.display = "block";
        Lvl2med.style.display = "none";
        document.getElementById('choices').style.display = "none";
        document.getElementById('peri').style.display = "none";
        Scored.innerHTML = score + "/15";
        document.getElementById('star').style.display = "block";
        document.getElementById('nxtlvl').style.opacity = "0.2";
        Next.onclick = null;}
            
        Try.onclick = golvl2Med; break;
            
        case 123:
    
    document.getElementById('thePad1').style.display = "block";
    document.getElementById('thePad4').style.display = "none";
    document.getElementById('choices2').style.display = "none";
    clearAnimb();
        
        if (score == 20) {
        Result.style.display = "block";
        Success.style.display = "block";
        Lvl2hard.style.display = "none";
        document.getElementById('choices').style.display = "none";
        document.getElementById('peri').style.display = "none";
        Scored.innerHTML = score + "/20"; 
        document.getElementById('star').style.display = "block"; 
        document.getElementById('star1').style.display = "block"; 
        document.getElementById('star2').style.display = "block";
        Next.onclick = null;
            document.getElementById('nxtlvl').style.opacity = "0.2";}
            
    else if (score >= 16) {
        Result.style.display = "block";
        Success.style.display = "block";
        Lvl2hard.style.display = "none";
        document.getElementById('peri').style.display = "none";
        document.getElementById('choices').style.display = "none";
        Scored.innerHTML = score + "/20";
        document.getElementById('star1').style.display = "block";
        document.getElementById('star2').style.display = "block";
        Next.onclick = null;
            document.getElementById('nxtlvl').style.opacity = "0.2";}
            
    else if(score < 16) {
        Result.style.display = "block";
        Failed.style.display = "block";
        Lvl2hard.style.display = "none";
        document.getElementById('choices').style.display = "none";
        document.getElementById('peri').style.display = "none";
        Scored.innerHTML = score + "/20";
        document.getElementById('star').style.display = "block";
        document.getElementById('nxtlvl').style.opacity = "0.2";
        Next.onclick = null;}
            
        Try.onclick = golvl2Hard; break;
            
        case 131:
    
    clearPlan();
        
        if (score == 10) {
        Result.style.display = "block";
        Success.style.display = "block";
        Lvl3easy.style.display = "none";
        document.getElementById('choices').style.display = "none";
        document.getElementById('peri').style.display = "none";
        Scored.innerHTML = score + "/10"; 
        document.getElementById('star').style.display = "block"; 
        document.getElementById('star1').style.display = "block"; 
        document.getElementById('star2').style.display = "block";
        Next.onclick = goIns8;
            document.getElementById('med3').style.opacity = "1";
            document.getElementById('med3').onclick = goIns8;
            document.getElementById('nxtlvl').style.opacity = "1";
						localStorage.setItem(user+'.stage3','l');}
            
    else if (score >= 6) {
        Result.style.display = "block";
        Success.style.display = "block";
        Lvl3easy.style.display = "none";
        document.getElementById('peri').style.display = "none";
        document.getElementById('choices').style.display = "none";
        Scored.innerHTML = score + "/10";
        document.getElementById('star1').style.display = "block";
        document.getElementById('star2').style.display = "block";
        Next.onclick = goIns8;
            document.getElementById('med3').style.opacity = "1";
            document.getElementById('med3').onclick = goIns8;
            document.getElementById('nxtlvl').style.opacity = "1";
						localStorage.setItem(user+'.stage3','l');}
            
    else if(score < 6) {
        Result.style.display = "block";
        Failed.style.display = "block";
        Lvl3easy.style.display = "none";
        document.getElementById('choices').style.display = "none";
        document.getElementById('peri').style.display = "none";
        Scored.innerHTML = score + "/10";
        document.getElementById('star').style.display = "block";
        document.getElementById('nxtlvl').style.opacity = "0.2";
        Next.onclick = null;}
            
        Try.onclick = golvl3Easy; break;
            
        case 132:
    
    clearTF();        
            
        if (score == 15) {
        Result.style.display = "block";
        Success.style.display = "block";
        Lvl3med.style.display = "none";
        document.getElementById('choices').style.display = "none";
        document.getElementById('peri').style.display = "none";
        Scored.innerHTML = score + "/15"; 
        document.getElementById('star').style.display = "block"; 
        document.getElementById('star1').style.display = "block"; 
        document.getElementById('star2').style.display = "block";
        Next.onclick = goIns9;
            document.getElementById('med3').style.opacity = "1";
            document.getElementById('med3').onclick = goIns9;
            document.getElementById('nxtlvl').style.opacity = "1";
						localStorage.setItem(user+'.stage3','ll');}
            
    else if (score >= 11) {
        Result.style.display = "block";
        Success.style.display = "block";
        Lvl3med.style.display = "none";
        document.getElementById('peri').style.display = "none";
        document.getElementById('choices').style.display = "none";
        Scored.innerHTML = score + "/15";
        document.getElementById('star1').style.display = "block";
        document.getElementById('star2').style.display = "block";
        Next.onclick = goIns9;
            document.getElementById('med3').style.opacity = "1";
            document.getElementById('med3').onclick = goIns9;
            document.getElementById('nxtlvl').style.opacity = "1";
						localStorage.setItem(user+'.stage3','ll');}
            
    else if(score < 11) {
        Result.style.display = "block";
        Failed.style.display = "block";
        Lvl3med.style.display = "none";
        document.getElementById('choices').style.display = "none";
        document.getElementById('peri').style.display = "none";
        Scored.innerHTML = score + "/15";
        document.getElementById('star').style.display = "block";
        document.getElementById('nxtlvl').style.opacity = "0.2";
        Next.onclick = null;}
            
        Try.onclick = golvl3Med; break; 
    
        case 133: 
    
    clearTF();        
            
        if (score == 20) {
        Result.style.display = "block";
        Success.style.display = "block";
        Lvl3hard.style.display = "none";
        document.getElementById('choices').style.display = "none";
        document.getElementById('peri').style.display = "none";
        Scored.innerHTML = score + "/20"; 
        document.getElementById('star').style.display = "block"; 
        document.getElementById('star1').style.display = "block"; 
        document.getElementById('star2').style.display = "block";
       Next.onclick = null;
            document.getElementById('nxtlvl').style.opacity = "0.2";}
            
    else if (score >= 16) {
        Result.style.display = "block";
        Success.style.display = "block";
        Lvl3hard.style.display = "none";
        document.getElementById('peri').style.display = "none";
        document.getElementById('choices').style.display = "none";
        Scored.innerHTML = score + "/20";
        document.getElementById('star1').style.display = "block";
        document.getElementById('star2').style.display = "block";
        Next.onclick = null;
            document.getElementById('nxtlvl').style.opacity = "0.2";}
            
    else if(score < 16) {
        Result.style.display = "block";
        Failed.style.display = "block";
        Lvl3hard.style.display = "none";
        document.getElementById('choices').style.display = "none";
        document.getElementById('peri').style.display = "none";
        Scored.innerHTML = score + "/20";
        document.getElementById('star').style.display = "block";
        document.getElementById('nxtlvl').style.opacity = "0.2";
        Next.onclick = null;}
            
        Try.onclick = golvl3Hard; break;
    }
}

function clearTF(){
    document.getElementById('thePad3').style.display = "none";
    document.getElementById('q1').style.display = "none";
    document.getElementById('q2').style.display = "none";
    document.getElementById('q3').style.display = "none";
    document.getElementById('q4').style.display = "none";
    document.getElementById('q5').style.display = "none";
    document.getElementById('q6').style.display = "none";
    document.getElementById('q7').style.display = "none";
    document.getElementById('q8').style.display = "none";
    document.getElementById('q9').style.display = "none";
    document.getElementById('q10').style.display = "none";
    document.getElementById('q11').style.display = "none";
    document.getElementById('q12').style.display = "none";
    document.getElementById('q13').style.display = "none";
    document.getElementById('q14').style.display = "none";
    document.getElementById('q15').style.display = "none";
    document.getElementById('q16').style.display = "none";
    document.getElementById('q17').style.display = "none";
    document.getElementById('q18').style.display = "none";
    document.getElementById('q19').style.display = "none";
    document.getElementById('q20').style.display = "none";
    document.getElementById('q21').style.display = "none";
}

function clearObjects(){
    document.getElementById("obj1").style.display = "none";
    document.getElementById("obj2").style.display = "none";
    document.getElementById("obj3").style.display = "none";
    document.getElementById("obj4").style.display = "none";
    document.getElementById("obj5").style.display = "none";
    document.getElementById("obj6").style.display = "none";
    document.getElementById("obj7").style.display = "none";
    document.getElementById("obj8").style.display = "none";
    document.getElementById("obj9").style.display = "none";
    document.getElementById("obj10").style.display = "none";
    document.getElementById("obj11").style.display = "none";
    document.getElementById("obj12").style.display = "none";
    document.getElementById("obj13").style.display = "none";
    document.getElementById("obj14").style.display = "none";
    document.getElementById("obj15").style.display = "none";
    document.getElementById("obj16").style.display = "none";
    document.getElementById("obj17").style.display = "none";
    document.getElementById("obj18").style.display = "none";
    document.getElementById("obj19").style.display = "none";
    document.getElementById("shapeb1").style.display = "none";
    document.getElementById("shapeb2").style.display = "none";
    document.getElementById("shapeb3").style.display = "none";
    document.getElementById("shapeb4").style.display = "none";
}

function clearAllShape(){
    document.getElementById("shapea1").style.display = "none";
    document.getElementById("shapea2").style.display = "none";
    document.getElementById("shapea3").style.display = "none";
    document.getElementById("shapea4").style.display = "none";
    document.getElementById("shapea5").style.display = "none";
    document.getElementById("shapea6").style.display = "none";
    document.getElementById("shapea7").style.display = "none";
    document.getElementById("shapea8").style.display = "none";
    document.getElementById("shapea9").style.display = "none";
    document.getElementById("shapea10").style.display = "none";
    document.getElementById("shapea11").style.display = "none";
    document.getElementById("shapeb1").style.display = "none";
    document.getElementById("shapeb2").style.display = "none";
    document.getElementById("shapeb3").style.display = "none";
    document.getElementById("shapeb4").style.display = "none";
    document.getElementById("shapeb5").style.display = "none";
    document.getElementById("shapeb6").style.display = "none";
    document.getElementById("shapeb7").style.display = "none";
    document.getElementById("shapeb8").style.display = "none";
    document.getElementById("shapeb9").style.display = "none";
    document.getElementById("shapeb10").style.display = "none";
    document.getElementById("shapeb11").style.display = "none";
}

function clearAnim(){
    document.getElementById('c1').style.display = "none";
    document.getElementById('c2').style.display = "none";
    document.getElementById('c3').style.display = "none";
    document.getElementById('anima1').style.display = "none";
    document.getElementById('anima2').style.display = "none";
    document.getElementById('anima3').style.display = "none";
    document.getElementById('anima4').style.display = "none";
    document.getElementById('anima5').style.display = "none";
    document.getElementById('anima6').style.display = "none";
    document.getElementById('anima7').style.display = "none";
    document.getElementById('anima8').style.display = "none";
    document.getElementById('anima9').style.display = "none";
    document.getElementById('anima10').style.display = "none";
    document.getElementById('anima11').style.display = "none";
    document.getElementById('anima12').style.display = "none";
    document.getElementById('anima13').style.display = "none";
    document.getElementById('anima14').style.display = "none";
    document.getElementById('anima15').style.display = "none";
    document.getElementById('anima16').style.display = "none";
    document.getElementById('anima17').style.display = "none";
    document.getElementById('anima18').style.display = "none";
    document.getElementById('anima19').style.display = "none";
    document.getElementById('anima20').style.display = "none";
    document.getElementById('anima21').style.display = "none";
    document.getElementById('anima22').style.display = "none";
}

function clearAnimb(){
    document.getElementById('animb1').style.display = "none";
    document.getElementById('animb2').style.display = "none";
    document.getElementById('animb3').style.display = "none";
    document.getElementById('animb4').style.display = "none";
    document.getElementById('animb5').style.display = "none";
    document.getElementById('animb6').style.display = "none";
    document.getElementById('animb7').style.display = "none";
    document.getElementById('animb8').style.display = "none";
    document.getElementById('animb9').style.display = "none";
    document.getElementById('animb10').style.display = "none";
    document.getElementById('animb11').style.display = "none";
    document.getElementById('animb12').style.display = "none";
    document.getElementById('animb13').style.display = "none";
    document.getElementById('animb14').style.display = "none";
    document.getElementById('animb15').style.display = "none";
    document.getElementById('animb16').style.display = "none";
    document.getElementById('animb17').style.display = "none";
    document.getElementById('animb18').style.display = "none";
    document.getElementById('animb19').style.display = "none";
    document.getElementById('animb20').style.display = "none";
    document.getElementById('animb21').style.display = "none";
    document.getElementById('animb22').style.display = "none";
}

function clearPlan(){
    document.getElementById('name1').style.display = "none";
    document.getElementById('name2').style.display = "none";
    document.getElementById('name3').style.display = "none";
    document.getElementById('name4').style.display = "none";
    document.getElementById('name5').style.display = "none";
    document.getElementById('name6').style.display = "none";
    document.getElementById('name7').style.display = "none";
    document.getElementById('name8').style.display = "none";
    document.getElementById('name9').style.display = "none";
    document.getElementById('name10').style.display = "none";
    document.getElementById('plana1').style.display = "none";
    document.getElementById('plana2').style.display = "none";
    document.getElementById('plana3').style.display = "none";
    document.getElementById('plana4').style.display = "none";
    document.getElementById('plana5').style.display = "none";
    document.getElementById('plana6').style.display = "none";
    document.getElementById('plana7').style.display = "none";
    document.getElementById('plana8').style.display = "none";
    document.getElementById('plana9').style.display = "none";
    document.getElementById('plana10').style.display = "none";
}

function clearResult(){
    Result.style.display = "none";
    Success.style.display = "none";
    Failed.style.display = "none";
    document.getElementById('star').style.display = "none";
    document.getElementById('star1').style.display = "none";
    document.getElementById('star2').style.display = "none";
}

function addEntrance(){
    $(document.getElementById('shapea1')).addClass("expandUp");
    $(document.getElementById('shapea2')).addClass("expandUp");
    $(document.getElementById('shapea3')).addClass("expandUp");
    $(document.getElementById('shapea4')).addClass("expandUp");
    $(document.getElementById('shapea5')).addClass("expandUp");
    $(document.getElementById('shapea6')).addClass("expandUp");
    $(document.getElementById('shapea7')).addClass("expandUp");
    $(document.getElementById('shapea8')).addClass("expandUp");
    $(document.getElementById('shapea9')).addClass("expandUp");
    $(document.getElementById('shapea10')).addClass("expandUp");
    $(document.getElementById('shapea11')).addClass("expandUp");
    $(document.getElementById('shapeb1')).addClass("expandUp");
    $(document.getElementById('shapeb2')).addClass("expandUp");
    $(document.getElementById('shapeb3')).addClass("expandUp");
    $(document.getElementById('shapeb4')).addClass("expandUp");
    $(document.getElementById('shapeb5')).addClass("expandUp");
    $(document.getElementById('shapeb6')).addClass("expandUp");
    $(document.getElementById('shapeb7')).addClass("expandUp");
    $(document.getElementById('shapeb8')).addClass("expandUp");
    $(document.getElementById('shapeb9')).addClass("expandUp");
    $(document.getElementById('shapeb10')).addClass("expandUp");
    $(document.getElementById('shapeb11')).addClass("expandUp");
}

function clearEntrance(){
    $(document.getElementById('shapea1')).removeClass("expandUp");
    $(document.getElementById('shapea2')).removeClass("expandUp");
    $(document.getElementById('shapea3')).removeClass("expandUp");
    $(document.getElementById('shapea4')).removeClass("expandUp");
    $(document.getElementById('shapea5')).removeClass("expandUp");
    $(document.getElementById('shapea6')).removeClass("expandUp");
    $(document.getElementById('shapea7')).removeClass("expandUp");
    $(document.getElementById('shapea8')).removeClass("expandUp");
    $(document.getElementById('shapea9')).removeClass("expandUp");
    $(document.getElementById('shapea10')).removeClass("expandUp");
    $(document.getElementById('shapea11')).removeClass("expandUp");
    $(document.getElementById('shapeb1')).removeClass("expandUp");
    $(document.getElementById('shapeb2')).removeClass("expandUp");
    $(document.getElementById('shapeb3')).removeClass("expandUp");
    $(document.getElementById('shapeb4')).removeClass("expandUp");
    $(document.getElementById('shapeb5')).removeClass("expandUp");
    $(document.getElementById('shapeb6')).removeClass("expandUp");
    $(document.getElementById('shapeb7')).removeClass("expandUp");
    $(document.getElementById('shapeb8')).removeClass("expandUp");
    $(document.getElementById('shapeb9')).removeClass("expandUp");
    $(document.getElementById('shapeb10')).removeClass("expandUp");
    $(document.getElementById('shapeb11')).removeClass("expandUp");
}

function addEntrance2(){
    $(document.getElementById('shapeb1')).addClass("expandUp");
    $(document.getElementById('shapeb2')).addClass("expandUp");
    $(document.getElementById('shapeb3')).addClass("expandUp");
    $(document.getElementById('shapeb4')).addClass("expandUp");
    $(document.getElementById('obj1')).addClass("expandUp");
    $(document.getElementById('obj2')).addClass("expandUp");
    $(document.getElementById('obj3')).addClass("expandUp");
    $(document.getElementById('obj4')).addClass("expandUp");
    $(document.getElementById('obj5')).addClass("expandUp");
    $(document.getElementById('obj6')).addClass("expandUp");
    $(document.getElementById('obj7')).addClass("expandUp");
    $(document.getElementById('obj8')).addClass("expandUp");
    $(document.getElementById('obj9')).addClass("expandUp");
    $(document.getElementById('obj10')).addClass("expandUp");
    $(document.getElementById('obj11')).addClass("expandUp");
    $(document.getElementById('obj12')).addClass("expandUp");
    $(document.getElementById('obj13')).addClass("expandUp");
    $(document.getElementById('obj14')).addClass("expandUp");
    $(document.getElementById('obj15')).addClass("expandUp");
    $(document.getElementById('obj16')).addClass("expandUp");
    $(document.getElementById('obj17')).addClass("expandUp");
    $(document.getElementById('obj18')).addClass("expandUp");
    $(document.getElementById('obj19')).addClass("expandUp");
}

function clearEntrance2(){
    $(document.getElementById('shapeb1')).removeClass("expandUp");
    $(document.getElementById('shapeb2')).removeClass("expandUp");
    $(document.getElementById('shapeb3')).removeClass("expandUp");
    $(document.getElementById('shapeb4')).removeClass("expandUp");
    $(document.getElementById('obj1')).removeClass("expandUp");
    $(document.getElementById('obj2')).removeClass("expandUp");
    $(document.getElementById('obj3')).removeClass("expandUp");
    $(document.getElementById('obj4')).removeClass("expandUp");
    $(document.getElementById('obj5')).removeClass("expandUp");
    $(document.getElementById('obj6')).removeClass("expandUp");
    $(document.getElementById('obj7')).removeClass("expandUp");
    $(document.getElementById('obj8')).removeClass("expandUp");
    $(document.getElementById('obj9')).removeClass("expandUp");
    $(document.getElementById('obj10')).removeClass("expandUp");
    $(document.getElementById('obj11')).removeClass("expandUp");
    $(document.getElementById('obj12')).removeClass("expandUp");
    $(document.getElementById('obj13')).removeClass("expandUp");
    $(document.getElementById('obj14')).removeClass("expandUp");
    $(document.getElementById('obj15')).removeClass("expandUp");
    $(document.getElementById('obj16')).removeClass("expandUp");
    $(document.getElementById('obj17')).removeClass("expandUp");
    $(document.getElementById('obj18')).removeClass("expandUp");
    $(document.getElementById('obj19')).removeClass("expandUp");
}

function setup(){
    document.getElementById('choices').style.display = "block";
    document.getElementById('peri').style.display = "block";
    document.getElementById("timer").innerHTML = "";
    document.getElementById("scorer").innerHTML = score;
}

function pause(){
    document.getElementById('PAUSED').style.display ="block";
    clearInterval(b);
    clearInterval(c);
    clearTimeout(x);
    clearTimeout(y);
    
    if(loc == 112){
        clearTimeout(z);
    }
}
function resume() {
    document.getElementById('PAUSED').style.display ="none";
    
    if (num > 0){
        readygo();
        setTimeout(function() {
            ttheTimer();
        },(num * 1000)-1000);
        
        setTimeout(function() {
            a();
        },(num * 1000)-3000);
        }
    else {ttheTimer();}
    
    if(loc == 112){
        setTimeout(function() {
            xy();
        },(num * 1000)-4000);
    }
}

function goIns1(){
    Diff.style.display = "none";
    document.getElementById('INS').style.display ="block";
    document.getElementById('INS1').style.display ="block";
    document.getElementById('PLAY').onclick = golvl1Easy;
}
function goIns2(){
    clearResult();
    Diff.style.display = "none";
    document.getElementById('INS').style.display ="block";
    document.getElementById('INS2').style.display ="block";
    document.getElementById('PLAY').onclick = golvl1Med;
}
function goIns3(){
    clearResult();
    Diff.style.display = "none";
    document.getElementById('INS').style.display ="block";
    document.getElementById('INS3').style.display ="block";
    document.getElementById('PLAY').onclick = golvl1Hard;
}
function goIns4(){
    clearResult();
    Diff2.style.display = "none";
    document.getElementById('INS').style.display ="block";
    document.getElementById('INS4').style.display ="block";
    document.getElementById('PLAY').onclick = golvl2Easy;
}
function goIns5(){
    clearResult();
    Diff2.style.display = "none";
    document.getElementById('INS').style.display ="block";
    document.getElementById('INS40').style.display ="block";
    document.getElementById('PLAY').onclick = golvl2Med;
}
function goIns6(){
    clearResult();
    Diff2.style.display = "none";
    document.getElementById('INS').style.display ="block";
    document.getElementById('INS41').style.display ="block";
    document.getElementById('PLAY').onclick = golvl2Hard;
}
function goIns7(){
    clearResult();
    Diff3.style.display = "none";
    document.getElementById('INS').style.display ="block";
    document.getElementById('INS5').style.display ="block";
    document.getElementById('PLAY').onclick = golvl3Easy;
}
function goIns8(){
    clearResult();
    Diff3.style.display = "none";
    document.getElementById('INS').style.display ="block";
    document.getElementById('INS60').style.display ="block";
    document.getElementById('PLAY').onclick = golvl3Med;
}
function goIns9(){
    clearResult();
    Diff3.style.display = "none";
    document.getElementById('INS').style.display ="block";
    document.getElementById('INS6').style.display ="block";
    document.getElementById('PLAY').onclick = golvl3Hard;
}

function playSound(){
    document.getElementById("sfx").currentTime=0;
    document.getElementById("sfx").play();
}
function audioOn(){
    
    if (document.getElementById("bgsound").src == orig){}
    
    else {
    document.getElementById("sfx").src = "audio/btnSFX.mp3";
    document.getElementById("bgsound").src = "audio/bgsound.mp3";
    }
	document.getElementById('radioOff').checked = false;
	document.getElementById('radioOn').checked = true;
}
function audioOff(){
    document.getElementById("sfx").src = "";
    document.getElementById("bgsound").src = "";
    document.getElementById('radioOn').checked = false;
	  document.getElementById('radioOff').checked = true;
}
function goAudio(){
    document.getElementById('pauAud').style.display = "block";
}
function confirm(){
    document.getElementById('pauAud').style.display = "none";
}

function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}

function option() {
    Option.style.display = "block";
    Menu.style.display = "none";
    loc = 0;
}

function sLevel() {
    Level.style.display = "block";
    Menu.style.display = "none";
    loc = 1;
}

function sDiff() {
    Diff.style.display = "block";
    Level.style.display = "none";
    loc = 11;
}

function sDiff2() {
    Diff2.style.display = "block";
    Level.style.display = "none";
    loc = 12;
}

function sDiff3() {
    Diff3.style.display = "block";
    Level.style.display = "none";
    loc = 13;
}