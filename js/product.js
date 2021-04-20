function getProducts() {
    var products = [];
    $.ajax({
        url: "http://185.196.214.135:7777/api/product",
        type: "GET",
        success: function (result) {
            console.log(result)
            products = result._embedded.list;
            console.log(products)
        },
        error: function () {
            alert("Error Get Product!")
        },
        async: false
    })
    for (let i = 0; i < products.length; i++) {
        $("#product").append(
            "<tr>" +
            "<td>" + products[i].id + "</td>" +
            "<td>" + products[i].name + "</td>" +
            "<td>" + products[i].categoryName + "</td>" +
            "<td>" + products[i].price + "</td>" +
            "<td><button class='btn-warning rounded border-0 px-2 py-1'>Edit</button></td>" +
            "<td><button class='btn-danger rounded border-0 px-2 py-1'" +
            " data-toggle='modal' data-target='#myModal' >Delete</button></td>" +
            "</tr>"
        )
    }
}




$(document).ready(function () {
    getProducts();
})