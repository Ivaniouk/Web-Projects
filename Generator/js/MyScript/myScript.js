document.addEventListener('DOMContentLoaded', function () {

    $('[name="world"]').on('change', function(){
        ShowBuildBackgroundSelect();
        ChangeWorldAptitudeTable();
    });

    $('[name="background"]').on('change', function(){
        var val = $('[name="background"]').find(":selected").val();
        $('[name="BackgroundAptitude"]').find(":enabled").remove(); //remove previous options
        BuildBackgroundAptitudes(val);
        ShowBackgroundAptitude();
    });

    $('[name="BackgroundAptitude"]').on('change', function(){
        ShowBuildRoleSelect();
    });


    $('[name="role"]').on('change', function(){
        //getting info from fields and building tables
    });


});