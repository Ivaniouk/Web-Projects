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
    //find way to transfer names into jQuery
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
function ChangeRoleAptitudeTable(valRole){
    var text = "";
    for(var i = 0; i < RoleArr[valRole].RoleAptitude.length; i++){
        if(i == RoleArr[valRole].RoleAptitude.length - 1){
            text += RoleArr[valRole].RoleAptitude[i] + " ";
        }
        else{
            text += RoleArr[valRole].RoleAptitude[i] + ", ";
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


function AddNewStatSelect() {
    var $select = $('<select></select>>');
    $select.attr("class", "selectpicker form-control bonus-aptitude");

    for(var i = 0; i < arrStat.length; i++){
        var $option = $("<option>" + arrStat[i] + "</option>");
        $select.append($option);
    }

    var $trMain = $('<tr></tr>');
    var $td = $('<td></td>');
    var $td2 = $('<td></td>');

    $td2.append($select);
    $trMain.append($td);
    $trMain.append($td2);

    $(".aptitude-table").append($trMain);

}


















