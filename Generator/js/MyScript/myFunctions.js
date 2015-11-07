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
    var div = document.createElement("div");
    div.setAttribute("class", "control-select-assasin-aptitude"); //add wrapper class style

    var select = document.createElement("select");
    select.setAttribute("class", "selectpicker form-control");
    select.setAttribute("name", "assasin-select");

    var option = document.createElement("option");
    option.innerHTML ="<option selected disabled>Aptitude</option>";

    var option1 = document.createElement("option");
    option1.innerHTML ="<option value='0'>WS</option>";

    var option2 = document.createElement("option");
    option2.innerHTML = "<option value='1'>BS</option>";

    select.add(option);
    select.add(option1);
    select.add(option2);
    //div.add(select);

    $(".form-group:eq(3)").append(div);
    $(".control-select-assasin-aptitude").append(select);
}

function ClearAssasinAdditionSelect(){
    //$(".talent-table td:eq(5)").html(RoleArr[valRole].RoleTalent);
    $(".control-select-assasin-aptitude").remove();

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
/*****************************************************************************/
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
























