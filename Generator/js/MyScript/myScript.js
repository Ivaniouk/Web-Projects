document.addEventListener('DOMContentLoaded', function () {

    $('[name="btn_rand"]').on('click', function () {
        var gender = $('[name="gender"]').find(":selected").html();
        SetRandomName(gender);
        return false;
    });

    $('[name="world"]').on('change', function () {
        RemoveDisabledChangeText("background", "Select Background");
        ChangeWorldAptitudeTable();
        if (roleActive) {
            FindSimilarApptitudes();
        }
    });

    $('[name="background"]').on('change', function () {
        var val = $('[name="background"]').find(":selected").val();
        $('[name="BackgroundAptitude"]').find(":enabled").remove(); //remove previous options
        BuildBackgroundAptitudes(val);
        RemoveDisabledChangeText("BackgroundAptitude", "");
        var valBackground = $('[name="background"]').find(":selected").val();
        $(".talent-table td:eq(3)").html(BackgroundArr[valBackground].Talents);
        $(".skill-table td:eq(1)").html(BackgroundArr[valBackground].Skills);
        ChangeEquipmentTable(valBackground);
    });

    $('[name="BackgroundAptitude"]').on('change', function () {
        ChangeBackgroundAptitudeTable();
        //ShowBuildRoleSelect();
        RemoveDisabledChangeText("role", "Select Role");
        if (roleActive) {
            FindSimilarApptitudes();
        }
    });

    $('[name="role"]').on('change', function() {
        roleActive = true;
        var $this = $(this);
        var valRole = $this.find(":selected").val();
        if (valRole == 0) {
            $this.parent().toggleClass("control-select-role-small");
            AssassinSelectShow();
        } else {
            FindSimilarApptitudes();
            $(".control-select-assasin-aptitude").remove();
            $this.parent().attr("class", "control-select-role");
        }
        ChnageRoleTalentsTable(valRole);
    });
});