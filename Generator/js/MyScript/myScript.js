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
        //change equipment table
        ChangeEquipmentTable(valBackground);
    });

    $('[name="BackgroundAptitude"]').on('change', function(){
        ChangeBackgroundAptitudeTable();
        ShowBuildRoleSelect();
    });


    $('[name="role"]').on('change', function(){
        var valRole = $('[name="role"]').find(":selected").val();
        if(valRole == 0){
            //$('[name="role"]').attr("class", "control-select-role-small form-control");
            //AssasinSelectShow();
            ChangeRoleAptitudeTable(valRole);
        } else {
            ChangeRoleAptitudeTable(valRole);
            ClearAssasinAdditionSelect();
            $('[name="role"]').attr("class", "control-select-role form-control");
        }
        ChnageRoleTalentsTable(valRole)
    });


});