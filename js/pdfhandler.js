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
    NextSection = printDescTable(NextSection, doc)
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
    var table = document.getElementById('descTable');
    var descriptionElements = document.getElementsByClassName('descInput');
    var rowCount = table.rows.length; 
    var tableSize = rowCount/2;

    var SpaceBtwnTable = 10;
    var LineLen = 10;
    var LinePos = StartPos + SpaceBtwnTable * rowCount/2 + 7.5;


    for(var i = 0; i < tableSize; i++){
        if (i%2 == 0){
            doc.text(10, 10 +  20*Math.floor(i/2) + StartPos, descriptionElements[i].value); 
        }
        else{
            doc.text(10, 20 + 20*Math.floor(i/2) + StartPos, descriptionElements[i].value); 
        }       
    } 

    //62
    //doc.text(10, 70, "wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwws".length); 


    doc.line(LineLen, LinePos, 210 - LineLen, LinePos);
    return LinePos;
}

function printScheduleTable(StartPos, doc){
    scheduleElements = document.getElementsByClassName('scheduleInput');
    var table = document.getElementById('scheduleTable');
    var rowCount = table.rows.length; 
    var colCount = table.rows[0].cells.length;
    var tableSize = (rowCount * colCount) - 2;

    doc.text(10, 10 + StartPos, "Date");
    doc.text(45, 10 + StartPos, "Description");

    for(var i = 0; i < tableSize; i++){
        if (i%2 == 0){
            doc.text(10, 20 + StartPos + Math.floor(i/2) * 7.5, scheduleElements[i].value);
        }
        else{
            doc.text(45, 20 + StartPos + Math.floor(i/2) * 7.5, scheduleElements[i].value);
        }

        //doc.text(40, 7*Math.floor(i/2) + StartPos, scheduleElements[i].value); 
    } 


    doc.output('dataurl'); 
}  

