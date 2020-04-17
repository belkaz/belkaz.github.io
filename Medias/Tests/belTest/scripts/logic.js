let Qarr = [];
let Aarr = [];
let Rarr = [];
let Tarr = [];
for (let i= 0;i< 5;i++) {Aarr[i]= [];};
///////////////////////////////////////////////////////////////
//___________________формируем массив тестов_________________//
///////////////////////////////////////////////////////////////
let arrLength=0;
while (arrLength< 5){
    let randInd = Math.floor(Math.random()*quests.length);
    let t1 = quests[randInd][0];
    if (Qarr.indexOf(t1)==-1){
        Qarr.push( quests[randInd][0]);
        let tempA = [];        
        tempA[0] = quests[randInd][1];        
        tempA[1] = quests[randInd][2];
        tempA[2] = quests[randInd][3];
        tempA[3] = quests[randInd][4];
        tempA[4] = quests[randInd][5];
        Aarr[arrLength]=tempA;
        Rarr.push(quests[randInd][6]);
        Tarr.push(quests[randInd][7]);
        arrLength++;           
    }
};
///////////////////////////////////////////////////////////////
//_________________________Отображение_______________________//
///////////////////////////////////////////////////////////////
let currentQuestID = 0;
let quest = document.getElementById("Quest");

let _m = document.getElementById("multiForm");
let _r = document.getElementById("radioForm");
let _b = document.getElementById("bForm");

LoadQuestion = ( id ) => {    
    switch (Tarr[id]) {
        case 0 : {            
            _m.style.left = 50 + "%";
            _r.style.left = 150 + "%";
            _b.style.left = 150 + "%";
            mLoad( currentQuestID );
            break;
        }
        case 1 : {
            _m.style.left = 150 + "%";
            _r.style.left = 50 + "%";
            _b.style.left = 150 + "%";
            rLoad( currentQuestID );
            break;
        }
        case 2 : {
            _m.style.left = 150 + "%";
            _r.style.left = 150 + "%";
            _b.style.left = 50 + "%";
            bLoad( currentQuestID );
            break;
        }
        default : {

        }
    };
};

mLoad = ( id ) => {
    quest.innerHTML = Qarr[id];
    chLabels[0].innerHTML = Aarr[id][0];
    chLabels[1].innerHTML = Aarr[id][1];
    chLabels[2].innerHTML = Aarr[id][2];
    chLabels[3].innerHTML = Aarr[id][3];
    chLabels[4].innerHTML = Aarr[id][4];
};

rLoad = ( id ) => {
    quest.innerHTML = Qarr[id];
    rLabels[0] = Aarr[id][0];
    rLabels[1] = Aarr[id][1];
    rLabels[2] = Aarr[id][2];
    rLabels[3] = Aarr[id][3];
    rLabels[4] = Aarr[id][4];
};

function bLoad( id ){
    quest.innerHTML = Qarr[id];
};
LoadQuestion(currentQuestID);
////////////////////////////////////////////////////////////
//__________________________проверка_____________________///
///////////////////////////////////////////////////////////
let but = document.getElementById("ansBut");
let RightCount = 0;

but.onclick = () => {
    if (currentQuestID < 4){        
        checkM();
        chechR();
        checkB();
        currentQuestID++;
        if (currentQuestID == 4) { but.value = "Закончыць тэст"; 
            but.onclick = () => {
                 checkM();
                 chechR();
                 checkB();
                alert ("Дакладна: "+RightCount+" з 5 пытанняў");
            };
        };
        LoadQuestion( currentQuestID ); 
    }    
};

checkM = () => {
    let tempAns = "";
    if (checkboxes[0].checked){ tempAns += 1;}
    if (checkboxes[1].checked){ tempAns += 2;}
    if (checkboxes[2].checked){ tempAns += 3;}
    if (checkboxes[3].checked){ tempAns += 4;}
    if (checkboxes[4].checked){ tempAns += 5;}
    
    checkboxes[0].checked = false;
    checkboxes[1].checked = false;
    checkboxes[2].checked = false;
    checkboxes[3].checked = false;
    checkboxes[4].checked = false;    

    if (tempAns!=""){
        if (tempAns==Rarr[currentQuestID]) {RightCount++; console.log("+");} else {console.log("-");}
    }
} 
chechR = () => {
    let tempAns1 = -1;
    if (radio[0].checked) { tempAns1 = 1;};
    if (radio[1].checked) { tempAns1 = 2;};
    if (radio[2].checked) { tempAns1 = 3;};
    if (radio[3].checked) { tempAns1 = 4;};
    if (radio[4].checked) { tempAns1 = 5;};

    radio[0].checked = false;
    radio[1].checked = false;
    radio[2].checked = false;
    radio[3].checked = false;
    radio[4].checked = false; 

    if (tempAns1!=-1) {
        console.log (""+tempAns1+" -> "+Rarr[currentQuestID]+"="+(""+tempAns1==Rarr[currentQuestID]));
    }
}
let bA =document.getElementById("b_ans");
checkB = () => {
    let tempAns = "";
    tempAns = bA.value;
    if (tempAns!=""){
        if (tempAns==Rarr[currentQuestID]) {RightCount++; console.log("+");} else {console.log("-");}
    }
    bA.value = "";
}
