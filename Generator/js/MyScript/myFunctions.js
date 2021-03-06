//global var
var roleActive = false;
var assasinActive = false;
var rowTrigger = false;
//Background functions
/**
 * removes disabled from field, changes text if needed
 */
function RemoveDisabledChangeText(newName, newText) {
    var fieldVar = $("[name=" + newName + "]");
    fieldVar.removeAttr("disabled");
    if (newText !== "") {
        fieldVar.children().first().text(newText);
    }
}
/**
 * calls BackgroundOptionBuilder, always selects first option
 */
function BuildBackgroundAptitudes(val) {
    BackgroundOptionBuilder(val);
    $("select option[value='AptitudeSelected']").attr("selected", "selected");
}
/**
 * building background aptitude option select options
 */
function BackgroundOptionBuilder(val) {
    for (var i = 0; i < BackgroundArr[val].Aptitude.length; i++) {
        var option = document.createElement("option");
        option.setAttribute("value", i);
        option.innerHTML =  "<option>" + BackgroundArr[val].Aptitude[i] + "</option>";
        $('[name="BackgroundAptitude"]').append(option);
    }
}
//role functions
/**
 * builds and appends assassin select
 */
function AssassinSelectShow() {
    var $div = $('<div></div>');
    $div.attr("class", "control-select-assasin-aptitude");
    var $select = $('<select></select>');
    $select.attr("class", "selectpicker form-control assasin-select");
    $select.attr("name", "assasin-select");
    $select.append("<option disabled selected>Aptitude</option>");
    $select.append("<option>WS</option>");
    $select.append("<option>BS</option>");
    $select.on('change', AssasinSelectHandler);
    $div.append($select);
    $(".control-select-role").parent().append($div);
}
/**
 * Assasin select on click handler
 */
function AssasinSelectHandler() {
    assasinActive = true;
    FindSimilarApptitudes();
}
//change table
function ChangeWorldAptitudeTable() {
    var val = $('[name="world"]').find(":selected").val();
    $(".aptitude-table td:eq(1)").html(WorldArr[val].Aptitude);
}
/**********************background Aptitude/Talent table change****************/
function ChangeBackgroundAptitudeTable() {
    var valBackground = $('[name="background"]').find(":selected").val();
    var valAptitude = $('[name="BackgroundAptitude"]').find(":selected").val();
    $(".aptitude-table td:eq(3)").html(BackgroundArr[valBackground].Aptitude[valAptitude]);
}
/************************Table************************************/
function ChangeRoleAptitudeTable(arr) {
    var text = "";
    for(var i = 0; i < arr.length; i++){
        if (i == arr.length - 1) {
            text += arr[i] + " ";
        }
        else {
            text += arr[i] + ", ";
        }
    }
    $(".aptitude-table td:eq(5)").html(text);
}

function ChnageRoleTalentsTable(valRole) {
    $(".talent-table td:eq(5)").html(RoleArr[valRole].RoleTalent);
}

function ChangeEquipmentTable(valBackground) {
    $(".equipment-table td:eq(1)").html(BackgroundArr[valBackground].Equipment);
}
/*********************Bonus Stats********************************************/
function AddNewRow() {
    var $trMain = $('<tr name="aptitudeRow"></tr>');
    var $td = $('<td></td>');
    var $td2 = $('<td></td>');
    $trMain.append($td);
    $trMain.append($td2);
    $(".aptitude-table").append($trMain);
}

function AddNewStatSelect() {
    var $select = $('<select></select>');
    $select.attr("class", "selectpicker form-control bonus-aptitude");
    $select.append("<option disabled selected>Aptitude</option>");
    for (var i = 0; i < arrStat.length; i++) {
        var $option = $("<option>" + arrStat[i] + "</option>");
        $select.append($option);
    }
    $(".aptitude-table td:eq(7)").append($select);
}

function FindSimilarApptitudes() {
    var valRole = $('[name="role"]').find(":selected").val();
    var arrayRoleAptTMP = RoleArr[valRole].RoleAptitude.slice();
    var worldApt = $(".aptitude-table td:eq(1)").html();
    var backgroundApt = $(".aptitude-table td:eq(3)").html();
    $('[name="aptitudeRow"]').remove();
    if (assasinActive) {
        var assasinApt = $('[name="assasin-select"]').find(":selected").html();
        arrayRoleAptTMP.push(assasinApt);
    }
    for (var i = 0; i < arrayRoleAptTMP.length; i++) {
        if (arrayRoleAptTMP[i] == worldApt || arrayRoleAptTMP[i] == backgroundApt) {
            arrayRoleAptTMP.splice(i, 1);
            i -= 1;
           if (rowTrigger == false) {
                AddNewRow();
                rowTrigger = true;
           }
            AddNewStatSelect();
        }
    }
    rowTrigger = false;
    ChangeRoleAptitudeTable(arrayRoleAptTMP);
}

/*********Names**************/
function GetRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function SetRandomName(gender) {
    var rand = GetRandomInt(0, maleNamesArr.length);
    if (gender === "Male") {
        $('[name="ForumNick"]').val(maleNamesArr[rand]);
    } else {
        $('[name="ForumNick"]').val(femaleNamesArr[rand]);
    }
}






