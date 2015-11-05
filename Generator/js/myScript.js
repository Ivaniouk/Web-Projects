document.addEventListener('DOMContentLoaded', function () {

    $('[name="world"]').on('change', function(){
        ShowBuildBackgroundSelect();
    });

    $('[name="background"]').on('change', function(){
        ShowBuildRoleSelect();
    });

    $('[name="role"]').on('change', function(){
        //getting info from fields and building tables
    });


});