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
        var option = document.createElement('option');
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
