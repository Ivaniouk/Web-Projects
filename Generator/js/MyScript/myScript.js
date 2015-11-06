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
        //change talent table
        var valBackground = $('[name="background"]').find(":selected").val();
        $(".talent-table td:eq(3)").html(BackgroundArr[valBackground].Talents);
    });

    $('[name="BackgroundAptitude"]').on('change', function(){
        ChangeBackgroundAptitudeTable();
        ShowBuildRoleSelect();
    });


    $('[name="role"]').on('change', function(){
        //getting info from fields and building tables
        var valRole = $('[name="role"]').find(":selected").val();
        ChangeRoleAptitudeTable(valRole);
        $(".talent-table td:eq(5)").html(RoleArr[valRole].RoleTalent);
    });


});