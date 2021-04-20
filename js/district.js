function getDistricts() {
    var districts = [];
    $.ajax({
        url: "http://185.196.214.135:7777/api/district",
        type: "GET",
        success: function (result) {
            console.log(result)
            districts = result._embedded.list;
            console.log(districts)
        },
        error: function () {
            alert("Error Get Regions!")
        },
        async: false
    })
    for (let i = 0; i < districts.length; i++) {
        $("#district").append(
            "<tr>" +
            "<td>" + districts[i].id + "</td>" +
            "<td>" + districts[i].name + "</td>" +
            "<td>" + districts[i].regionName + "</td>" +
            "<td><button class='btn-warning rounded border-0 px-2 py-1'>Edit</button></td>" +
            "<td><button class='btn-danger rounded border-0 px-2 py-1'" +
            " data-toggle='modal' data-target='#myModal' onclick='deleteRegion()'>Delete</button></td>" +
            "</tr>"
        )
    }
}




$(document).ready(function () {
    getDistricts();

})