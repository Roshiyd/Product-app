function getCompanies() {
    var companies = [];
    $.ajax({
        url: "http://185.196.214.135:7777/api/company",
        type: "GET",
        success: function (result) {
            console.log(result)
            companies = result._embedded.list;
            console.log(companies)
        },
        error: function () {
            alert("Error Get Companies!")
        },
        async: false
    })
    for (let i = 0; i < companies.length; i++) {
        $("#company").append(
            "<tr>" +
            "<td>" + companies[i].id + "</td>" +
            "<td>" + companies[i].name + "</td>" +
            "<td>" + companies[i].districtName + "</td>" +
            "<td><button class='btn-warning rounded border-0 px-2 py-1'>Edit</button></td>" +
            "<td><button class='btn-danger rounded border-0 px-2 py-1'" +
            " data-toggle='modal' data-target='#myModal' onclick='deleteRegion()'>Delete</button></td>" +
            "</tr>"
        )
    }
}




$(document).ready(function () {
    getCompanies();

})