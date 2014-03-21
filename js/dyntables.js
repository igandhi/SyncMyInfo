function addRow(tableID) {
    var table = document.getElementById(tableID);               //Grabs the table by it's ID amd sets it to table
    var rowCount = table.rows.length;                           //Sets rowCount = number of rows in the table
    var row = table.insertRow(rowCount);                        //Inserts a new row with rowCount rows
    var colCount = table.rows[0].cells.length;                  //Counts the number of columns

    for(var i=0; i<colCount; i++) {
        var newcell = row.insertCell(i);

        newcell.innerHTML = table.rows[1].cells[i].innerHTML;
        newcell.childNodes[0].selectedIndex = 0;
    }
}

function deleteRow(tableID){
    var table = document.getElementById(tableID);               //Grabs the table by it's ID amd sets it to table
    var rowCount = table.rows.length;                           //Sets rowCount = number of rows in the table    

    if(rowCount <= 2){
        helper.innerHTML = "Cannot delete all rows.";           //Error if there are only 2 rows left
    }
    else{
        table.deleteRow(-1);                                    //Deletes the last row
    }
}

function addDescName(){
    var table = document.getElementById();
}

function addDesc(){

}

