   var sentenses=[];
    sentenses[0]='Гэта мастацкі сродак, у якім адны паняцці замяняюцца другімі на аснове іх колькасных суадносін,  ужыванне часткі з\'явы ці прадмета ў значэнні цэлага. (Ты павінен сам зарабляць сваю капейку)';
	sentenses[1]='Паўтарэнне аднолькавых ці аднародных зычных у вершы, што прыдае яму асаблівую гукавую выразнасць (у вершаскладанні)';
	sentenses[2]='Паўтарэнне аднолькавых ці аднародных галосных у вершы, што прыдае яму асаблівую гукавую выразнасць (у вершаскладанні)';
	sentenses[3]='Паўтарэнне аднолькавых гукаў,  слоў ці выразаў у канцы вершаваных радкоў або строф';
	sentenses[4]='Паўтарэнне аднолькавых гукаў,  слоў ці выразаў у пачатку вершаваных радкоў або строф';
	sentenses[5]='Мастацкае азначэнне';
	sentenses[6]='Трохскладовы памер антычнай метрыкі, які складаецца з аднаго доўга і двух наступных за ім кароткіх складоў. У сілаба-танічным вершаскладанні яму адпавядае стапа з першым націскным і двума ненаціскнымі складамі';
	sentenses[7]='Трохскладовы памер антычнай метрыкі. У сілаба-танічным вершаскладанні яму адпавядае стапа з другім націскным і двума ненаціскнымі складамі';
	sentenses[8]='Трохскладовы памер антычнай метрыкі. У сілаба-танічным вершаскладанні яму адпавядае стапа з двума ненаціскнымі складамі і трэцім націскным';
	sentenses[9]='Двухскладовая стапа з другім націскным складам';
	sentenses[10]='Двухскладовая стапа, у якой першы склад з’яўляецца націскным';
	sentenses[11]='Такое супастаўленне двух прадметаў, з\'яў або паняццяў, у выніку якога сутнасць аднаго з іх вытлумачваецца праз сутнасць другога';
	sentenses[12]='Мастацкае перабольшванне';
	sentenses[13]='Мастацкае пераменшванне';
	sentenses[14]='Невялікі вершаваны алегарычны твор павучальна-гумарыстычнага ці сатырычнага характару. Жыццё чалавека адлюстроўваецца ў вобразах жывёл, раслін, рэчаў';
	sentenses[15]='Зварот у мінулае';
	sentenses[16]='Разнавіднасць метафары, якая заключаецца ў наданні чалавечых уласцівасцей рэчам, прадметам, з\'явам прыроды';
	sentenses[17]='Перанясенне ўласцівасцей жывых істот на прадмет, абстрактныя паняцці, з\'явы прыроды, рэчы';
	    
    var RightAnswer=[];
    RightAnswer[0]='сінекдаха';
    RightAnswer[1]='алітэрацыя';
    RightAnswer[2]='асананс';
    RightAnswer[3]='эпіфара';
    RightAnswer[4]='анафара';
    RightAnswer[5]='эпітэт';
    RightAnswer[6]='дактыль';
    RightAnswer[7]='амфібрахій';
    RightAnswer[8]='анапест';
    RightAnswer[9]='ямб';
    RightAnswer[10]='харэй';
    RightAnswer[11]='параўнанне';
    RightAnswer[12]='гіпербала';
    RightAnswer[13]='літота';
    RightAnswer[14]='байка';
    RightAnswer[15]='рэтраспекцыя';
    RightAnswer[16]='персаніфікацыя';
    RightAnswer[17]='адухаўленне';
    
    var answers=[]; for (var i=0;i<17;i++){answers[i]=[];}
    answers[0][0]="эпітэт";answers[0][1]="параўнанне";answers[0][2]="сінекдаха";
    answers[1][0]="метафара";answers[1][1]="метанімія";answers[1][2]="сінекдаха";answers[1][3]="эпітэт";
    answers[2][0]="літота";answers[2][1]="гіпербала";answers[2][2]="метанімія";
    answers[3][0]="ямб";answers[3][1]="харэй";answers[3][2]="дактыль";
    answers[4][0]="дактыль";answers[4][1]="амфібрахій";
    answers[5][0]="амфібрахій";answers[5][1]="анапест";
    answers[6][0]="дактыль";answers[6][1]="анапест";
    answers[7][0]="рэтраспекцыя";answers[7][1]="рэфрэн";answers[7][2]="анафара";
    answers[8][0]="анафара";answers[8][1]="эпіфара";answers[8][2]="асананс";answers[8][3]="алітэрацыя";
    answers[9][0]="персаніфікацыя";answers[9][1]="сінекдаха";answers[9][2]="эпітэт";
    answers[10][0]="асананс";answers[10][1]="алітэрацыя";answers[10][2]="эпітэт";
    answers[11][0]="ямб";answers[11][1]="харэй";answers[11][2]="амфібрахій";
    answers[12][0]="ямб";answers[12][1]="харэй";answers[12][2]="анапест";
    answers[13][0]="эпітэт";answers[13][1]="метафара";
    answers[14][0]="параўнанне";answers[14][1]="персаніфікацыя";answers[14][2]="адухаўленне";
    answers[15][0]="байка";answers[15][1]="паэма";
    answers[16][0]="персаніфікацыя";answers[16][1]="рэтраспекцыя ";answers[16][2]="метанімія";
    
    
    var canBeAnswer=[];
    canBeAnswer[0]=[0,1,9];
    canBeAnswer[1]=[8,10];
    canBeAnswer[2]=[8,10];
    canBeAnswer[3]=[8];
    canBeAnswer[4]=[8,7];
    canBeAnswer[5]=[0,1,9,10,13];
    canBeAnswer[6]=[3,4,6];
    canBeAnswer[7]=[4,5,11];
    canBeAnswer[8]=[5,6,12];
    canBeAnswer[9]=[3,11,12];
    canBeAnswer[10]=[3,11,12];
    canBeAnswer[11]=[0,14];
    canBeAnswer[12]=[2];
    canBeAnswer[13]=[1];
    canBeAnswer[14]=[15];
    canBeAnswer[15]=[7,16];
    canBeAnswer[16]=[9,14,16];
    canBeAnswer[17]=[14];
    
    var t=0;
    var questQuery=[];
    while (t<18){
        var qq=Math.floor(Math.random()*18);
        var isIn=0;
        for (var j=0;j<questQuery.length;j++){
            if (questQuery[j]==qq){
                isIn=1;
                
            }
        }
        if(isIn==0){questQuery[t]=qq; t++;}
    }    
 
 var nowQuest=0;
 LoadQuestAnswer();

 document.getElementById("answ1").onclick=function(){Check(this);}
 document.getElementById("answ2").onclick=function(){Check(this);}
 
 function LoadQuestAnswer() {
     document.getElementById("quest").innerText=sentenses[questQuery[nowQuest]];
    
    var NowNumber=canBeAnswer[questQuery[nowQuest]][Math.floor(Math.random()*canBeAnswer[questQuery[nowQuest]].length)];
    
    var finalVars=[];
    var qq=0;
    for (var i=0;i<answers[NowNumber].length;i++){
        if (answers[NowNumber][i]!=RightAnswer[questQuery[nowQuest]]){
            finalVars[qq]=answers[NowNumber][i];
            qq+=1;
        }
    }
    if (Math.floor(Math.random()*100)>45){
        document.getElementById("answ1").innerText=RightAnswer[questQuery[nowQuest]];
        document.getElementById("answ2").innerText=finalVars[Math.floor(Math.random()*finalVars.length)];
    }    
    else {
        document.getElementById("answ2").innerText=RightAnswer[questQuery[nowQuest]];
        document.getElementById("answ1").innerText=finalVars[Math.floor(Math.random()*finalVars.length)];
    }
 }
var nowBlock;
var nowBlockStartX;
var nowBlockStartY;
 function Check(xx){
     if (xx.innerText==RightAnswer[questQuery[nowQuest]]){
         console.log("Right");
         nowBlock.style.left=-1000+"px";   
     }
     else {
            nowBlock.style.left=-1000+"px"; 
         var badBlock=document.createElement("div");
         badBlock.className="badBlock";
         badBlock.style.left=nowBlockStartX;
         badBlock.style.top=nowBlockStartY;
         document.getElementById("main").appendChild(badBlock);         
     }
     nowQuest+=1;   
     if (nowQuest!=10){
     document.getElementById("answ1").style.top=1530+"px";           
     document.getElementById("answ2").style.top=1530+"px";
     document.getElementById("quest").style.top=-1000+"px"; 
     LoadQuestAnswer();     
     isQuestShow=0;}
     
 }
 
 
var blocks=[];
for (var i=0;i<3;i++){blocks[i]=[];}
for (var i=0;i<3;i++){
    for (var j=0;j<3;j++){
        blocks[i][j]=document.createElement("div");
        document.getElementById("main").appendChild(blocks[i][j]);
        blocks[i][j].className="block";
        blocks[i][j].style.left=i*333+"px";
        blocks[i][j].style.top=j*233+"px";
        blocks[i][j].id="block"+i+""+j;
    }
}
var questText=document.getElementById("quest");
var isQuestShow=0;
for (var i=0;i<3;i++){
    for (var j=0;j<3;j++){
        blocks[i][j].onclick=function(){
           if (isQuestShow==0){
           document.getElementById("answ1").style.top=530+"px";           
           document.getElementById("answ2").style.top=530+"px";
           questText.style.top=10+(200-questText.offsetHeight/2)+"px";           
           nowBlock=this;   
           nowBlockStartX=nowBlock.style.left;
           nowBlockStartY=nowBlock.style.top;   
           this.style.left=50+"%";
           this.style.top=50+"%";
           this.style.width=950+"px";
           this.style.height=650+"px";
           this.style.marginLeft=-475+"px";
           this.style.marginTop=-325+"px";
           this.style.backgroundColor="white";
           this.style.zIndex=100;
           isQuestShow=1;
           this.style.backgroundImage="url()";         
           }
         }
    }
}

var backNumber=Math.floor(Math.random()*10+1);
document.getElementById("main").style.backgroundImage="url(./backs/"+backNumber+".jpg)";