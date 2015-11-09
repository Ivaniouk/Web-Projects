document.addEventListener('DOMContentLoaded', function () {

    $('[name="btn_rand"]').on('click', function(){
        var gender = $('[name="gender"]').find(":selected").html();
        SetRandomName(gender);
        return false;
    });

    $('[name="world"]').on('change', function(){
        ShowBuildBackgroundSelect();
        ChangeWorldAptitudeTable();
        if(roleActive){
            FindSimilarApptitudes();
        }
    });

    $('[name="background"]').on('change', function(){
        var val = $('[name="background"]').find(":selected").val();
        $('[name="BackgroundAptitude"]').find(":enabled").remove(); //remove previous options
        BuildBackgroundAptitudes(val);
        ShowBackgroundAptitude();
        var valBackground = $('[name="background"]').find(":selected").val();
        $(".talent-table td:eq(3)").html(BackgroundArr[valBackground].Talents);
        ChangeEquipmentTable(valBackground);
    });

    $('[name="BackgroundAptitude"]').on('change', function(){
        ChangeBackgroundAptitudeTable();
        ShowBuildRoleSelect();
        if(roleActive){
            FindSimilarApptitudes();
        }
    });


    $('[name="role"]').on('change', function(){
        roleActive = true;
        $('[name="aptitudeRow"]').remove();
        var valRole = $('[name="role"]').find(":selected").val();
        if(valRole == 0){
            AssasinSelectShow();
        } else {
            FindSimilarApptitudes();
        }
        ChnageRoleTalentsTable(valRole);
    });

    $('[name="assasin-select"]').on('change', function(){
        assasinActive = true;
        FindSimilarApptitudes();
    });
});