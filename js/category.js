var categories = [];
function getCategories() {
    $.ajax({
        url: "http://185.196.214.135:7777/api/category",
        type: "GET",
        success: function (result) {
            console.log(result)
            categories = result._embedded.list;
            console.log(categories)
        },
        error: function () {
            alert("Error Get Regions!")
        },
        async: false
    })
    var n=0;
    for (let i = 0; i < categories.length; i++) {
        n=categories[i].id;
        $("#category").append(
            "<tr>" +
            "<td>" + categories[i].id + "</td>" +
            "<td>" + categories[i].name + "</td>" +
            "<td><button class='btn-warning rounded border-0 px-2 py-1'" +
            "data-toggle='modal' data-target='#editModal' onclick='editCategory("+n+")'>Edit</button></td>" +
            "<td><button class='btn-danger rounded border-0 px-2 py-1'" +
            " data-toggle='modal' data-target='#myModal' onclick='deleteCategory("+n+")' >Delete</button></td>" +
            "</tr>"
        )
    }

}

function deleteCategory(id) {
    console.log("ishladi" + id)
    $("#delCategory").click(function () {
        console.log("delishladi" + id)
        $.ajax({
            url: "http://185.196.214.135:7777/api/category/" + id,
            type: "DELETE",
            success: function (result) {
                console.log(result)
                location.reload()
            },
            error: function () {
                alert("Error Delete Region!")
            },
            async: false
        })
    })

}

function addCategory() {
    $("#addsave").click(function () {
        var mistake=false;
        var ctname=$("#category_text").val();
        var myObj={
            name:ctname
        }
        console.log("add ishladi "+ctname)
        for (let i = 0; i < categories.length; i++) {
            if (categories[i].name===ctname){
                alert("Bunday nomdagi Category mavjud!!!")
                $("#category_text").val(null)
                mistake=true;
                break;
            }
        }
        if (mistake===false){
            $.ajax({
                type: "POST",
                url: "http://185.196.214.135:7777/api/category/",
                timeout: 0,
                headers: {
                    "Content-Type": "application/json"
                },
                data: JSON.stringify(myObj),
                success: function (result) {
                    console.log(result)
                    location.reload()
                },
                error: function () {
                    alert("Error Add Region!")
                },
                async: false
            })
        }


    })
}

function editCategory(id) {
    for (let i = 0; i < categories.length; i++) {
        if (categories[i].id===id){
            $("#edit_text").val(categories[i].name)
        }
    }

    $("#editsave").click(function () {
        var ctname=$("#edit_text").val();
        var myObj={
            name:ctname
        }
        console.log("edit ishladi "+id)

        $.ajax({
            method: "PUT",
            url: "http://185.196.214.135:7777/api/category/"+id,
            timeout: 0,
            headers: {
                "Content-Type": "application/json"
            },
            data: JSON.stringify(myObj),
            success: function (result) {
                console.log(result)
                location.reload()
            },
            async: false
        })



    })

}


$(document).ready(function () {
    getCategories();
    addCategory();
})