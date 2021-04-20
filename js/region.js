function getRegions() {
    var regions = [];
    $.ajax({
        url: "http://185.196.214.135:7777/api/region",
        type: "GET",
        success: function (result) {
            console.log(result)
            regions = result._embedded.list;
            console.log(regions)
        },
        error: function () {
            alert("Error Get Regions!")
        },
        async: false
    })
    for (let i = 0; i < regions.length; i++) {
        $("#region").append(
            "<tr>" +
            "<td>" + regions[i].id + "</td>" +
            "<td>" + regions[i].name + "</td>" +
            "<td><button class='btn-warning rounded border-0 px-2 py-1'>Edit</button></td>" +
            "<td><button class='btn-danger rounded border-0 px-2 py-1'" +
            " data-toggle='modal' data-target='#myModal' onclick='deleteRegion()'>Delete</button></td>" +
            "</tr>"
        )
    }
}

function deleteRegion() {
    console.log("ishladi")
    $("#delRegion").click(function () {
        $.ajax({
            url: "http://185.196.214.135:7777/api/region/"+3,
            type: "DELETE",
            success: function (result) {
                console.log(result)
            },
            error: function () {
                alert("Error Delete Region!")
            },
            async: false
        })
    })

}


function addRegion() {
    $("#addRegion").click(function () {
        console.log("add ishladi")
        $.ajax({
            url: "http://185.196.214.135:7777/api/region",
            type: "POST",
            success: function (result) {
                console.log(result)
            },
            error: function () {
                alert("Error Add Region!")
            },
            async: false
        })

    })
}


$(document).ready(function () {
    getRegions();
    addRegion();
})