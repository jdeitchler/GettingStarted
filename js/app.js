$(function () {
    $("#listview").kendoListView({
        template: $("#template").html(),
        dataSource: {
            transport: {
                read: {
                    url: "https://api.instagram.com/v1/tags/search?q=snowy&client_id=4e0171f9fcfc4015bb6300ed91fbf719&count=25",
                //    url: "https://api.instagram.com/v1/media/popular?client_id=4e0171f9fcfc4015bb6300ed91fbf719&count=25",
                    dataType: "jsonp"
                }
            },
            schema: {
                data: "data"
            }
        }
    });
});