function downPDF(){
    var doc = new jsPDF();
    //SETTING ID TO VARIABLES
    var headersTable = document.getElementById(headerTable);
    //END SETTING ID TO VARIABLES

    var NextSection;

    //PRINTS HEADER
        NextSection = printHeaderTable(doc);

    //END PRINTS HEADER

    //PRINTS DESC

    //END PRINTS DESC

    //PRINTS SCHEDULE
    printScheduleTable(NextSection, doc);
    //END PRINTS SCHEDULE
    //END PRINTS HEADER

    //PRINTS DESC

    //END PRINTS DESC

    //PRINTS SCHEDULE
    //END PRINTS SCHEDULE
}
//HEADER TABLE NEEDS TO PASS IN END VALUE TO NEXT FORM TO ENABLE CONTINUOUS PRINTOUT


function printHeaderTable(doc){
    var table = document.getElementById('headerTable');
    var rowCount = table.rows.length; 
    var colCount = table.rows[0].cells.length;
    var headerElements = document.getElementsByClassName('headerInput');
    var labelElements = document.getElementsByClassName('headerLabel');

    //POSITION VARIABLES
    var HeadingHeight = 25;
    var SubHeadingHeight = 35;
    var LineLen = 10;                   //Max length of line is 210 so it's 10 & 200 (210-10)
    var SpaceBtwnTable = 7;
    var LinePos = 4*SpaceBtwnTable+45;
    var VerticalOffset = 40;

    //END POSITION VARIABLES
    doc.setFont("times");

    for(var i = 0; i < 9; i++){
          
            if(i == 0){
                doc.setFontSize(20);
                doc.center(headerElements[i].value, {align: "center"}, HeadingHeight, HeadingHeight);
            }
            else if(i == 1){
                doc.setFontSize(14);
                doc.center(headerElements[i].value, {align: "center"}, SubHeadingHeight, SubHeadingHeight); 
            }
            else{
                doc.setFontSize(12);
                if(i%2 == 0){
                    doc.text(10, SpaceBtwnTable*Math.floor(i/2)+VerticalOffset, labelElements[i].innerHTML);
                    doc.text(40, SpaceBtwnTable*Math.floor(i/2)+VerticalOffset, headerElements[i].value); 
                }
                else{
                    doc.text(95, SpaceBtwnTable*Math.floor(i/2)+VerticalOffset, labelElements[i].innerHTML);
                    doc.text(125, SpaceBtwnTable*Math.floor(i/2)+VerticalOffset, headerElements[i].value);
                }
            }  
    }


    doc.line(LineLen, LinePos, 210 - LineLen, LinePos); //initial pos, start, length, end
    return LinePos;
}

function printDescTable(StartPos, doc){
    
}

function printScheduleTable(StartPos, doc){
    scheduleElements = document.getElementsByClassName('scheduleInput');


    for(var i = 0; i < 6; i++){
        //doc.text(40, 7*Math.floor(i/2) + StartPos, scheduleElements[i].value); 
    } 

    doc.output('dataurl'); 
}  

