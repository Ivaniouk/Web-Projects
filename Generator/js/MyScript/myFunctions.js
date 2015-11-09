//Background functions
function ShowBuildBackgroundSelect(){
    var backgroundVar =  $('[name="background"]');
    backgroundVar.removeAttr("disabled");
    backgroundVar.children().first().text("Select Background");
    //BuildBackgroundAptitudes(backgroundAptitudeVar);
}

function ShowBackgroundAptitude(){
    var backgroundAptitudeVar = $('[name="BackgroundAptitude"]');
    backgroundAptitudeVar.removeAttr("disabled");
}

function BuildBackgroundAptitudes(val){
    OptionBuilder(val);
}

function OptionBuilder(val){
    for(var i = 0; i < BackgroundArr[val].Aptitude.length; i++){
        var option = document.createElement("option");
        option.setAttribute("value", i);
        option.innerHTML =  "<option>" + BackgroundArr[val].Aptitude[i] + "</option>";
        $('[name="BackgroundAptitude"]').append(option);
    }
}
//role functions
function ShowBuildRoleSelect(){
    var roleVar =  $('[name="role"]');
    roleVar.removeAttr("disabled");
    roleVar.children().first().text("Select Role");
}

function AssasinSelectShow(){
   $('[name="assasin-select"]').removeAttr("disabled");
}

//change table
function ChangeWorldAptitudeTable(){
    var val = $('[name="world"]').find(":selected").val();
    $(".aptitude-table td:eq(1)").html(WorldArr[val].Aptitude);
}
/**********************background Aptitude/Talent table change****************/
function ChangeBackgroundAptitudeTable(){
    var valBackground = $('[name="background"]').find(":selected").val();
    var valAptitude = $('[name="BackgroundAptitude"]').find(":selected").val();
    $(".aptitude-table td:eq(3)").html(BackgroundArr[valBackground].Aptitude[valAptitude]);
}
/************************Table************************************/
function ChangeRoleAptitudeTable(arr){
    var text = "";
    for(var i = 0; i < arr.length; i++){
        if(i == arr.length - 1){
            text += arr[i] + " ";
        }
        else{
            text += arr[i] + ", ";
        }
    }
    $(".aptitude-table td:eq(5)").html(text);
}

function ChnageRoleTalentsTable(valRole){
    $(".talent-table td:eq(5)").html(RoleArr[valRole].RoleTalent);
}

function ChangeEquipmentTable(valBackground){
    $(".equipment-table td:eq(1)").html(BackgroundArr[valBackground].Equipment);
}

/*********************Bonus Stats********************************************/
function AddNewRow() {
    var $trMain = $('<tr></tr>');
    var $td = $('<td></td>');
    var $td2 = $('<td></td>');
    $trMain.append($td);
    $trMain.append($td2);
    $(".aptitude-table").append($trMain);
}

function AddNewStatSelect(){
    var $select = $('<select></select>');
    $select.attr("class", "selectpicker form-control bonus-aptitude");
    $select.append("<option disabled selected>Aptitude</option>");
    for(var i = 0; i < arrStat.length; i++){
        var $option = $("<option>" + arrStat[i] + "</option>");
        $select.append($option);
    }
    $(".aptitude-table td:eq(7)").append($select);
}



function FindSimilarApptitudes(valRole, addditional){
    var arrayRoleAptTMP = RoleArr[valRole].RoleAptitude;
    var worldApt = $(".aptitude-table td:eq(1)").html();
    var backgroundApt = $(".aptitude-table td:eq(3)").html();
    var rowTrigger = false;

    if(addditional != ""){
        arrayRoleAptTMP.push(addditional);
    }
    for(var i = 0; i < arrayRoleAptTMP.length; i++){
        if(arrayRoleAptTMP[i] == worldApt || arrayRoleAptTMP[i] == backgroundApt){
            arrayRoleAptTMP.splice(i, 1);
            i -= 1;
            if(rowTrigger == false){
                AddNewRow();
                rowTrigger = true;
            }
            AddNewStatSelect();
        }
    }
    ChangeRoleAptitudeTable(arrayRoleAptTMP);
}


/*********Names**************/
function GetRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function SetRandomName(gender){
    var rand = GetRandomInt(0, maleNamesArr.length);
    if(gender === "Male"){
        $('[name="ForumNick"]').val(maleNamesArr[rand]);
    }else{
        $('[name="ForumNick"]').val(femaleNamesArr[rand]);
    }
}






