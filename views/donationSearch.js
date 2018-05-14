var SIMPLECATEGORIES = ['category', 'brand', 'name'];
var EXTRACATEGORIES = ['category', 'brand', 'name', 'age', 'description', 'owner'];
var OWNERCATEGORIES = ['firstname', 'lastname', 'phone', 'email']

var categories = SIMPLECATEGORIES

function drawList(search) {
    var tableCategories = document.getElementById("categories")
    tableCategories.innerHTML = ''
    categories.forEach(function (category) {
        var th = document.createElement("th")
        th.innerText = category.charAt(0).toUpperCase() + category.slice(1);
        tableCategories.appendChild(th)
    });


    var list = document.getElementById("donations")
    list.innerHTML = ''
    Donations.list.forEach(function (device) {
        if (device.category.toUpperCase().indexOf(search.toUpperCase()) != -1 || search === "") {
            var row = document.createElement("tr");
            row.setAttribute("class", "selectable")
            row.onclick = function () {
                Donations.list = [device]
                categories = EXTRACATEGORIES
                drawList('')
                drawOwnerDetails(device.owner)
            };
            var infoHTML;
            categories.forEach(function (info) {
                infoHTML = document.createElement("td")
                infoHTML.innerText = device[info];
                row.appendChild(infoHTML)
            })
            list.appendChild(row)
        }
    })
}

loadDevices = function () {
    drawOwnerDetails(null)
    Donations.loadAll(drawList.bind(null, ""))
}

function drawOwnerDetails(email) {
    var user;
    var header = document.getElementById("ownerTitles")
    header.innerHTML = ''
    var info = document.getElementById("ownerInfo")
    info.innerHTML = ''

    if (email) {

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                data = this.responseText
                user = JSON.parse(data)


                OWNERCATEGORIES.forEach(function (category) {
                    var th = document.createElement("th");
                    th.innerText = category.charAt(0).toUpperCase() + category.slice(1);

                    header.appendChild(th);

                    var td = document.createElement("td");

                    if (category === "email") {

                        var link = document.createElement("a")
                        user[category] ? link.innerText = user[category] : link.innerText = "N/A"
                        link.href = "mailto:" + user[category]
                        td.appendChild(link)

                    }
                    else {
                        user[category] ? td.innerText = user[category] : td.innerText = "N/A";
                    }
                    info.appendChild(td)
                })
            }
            else {

                console.log("xhttp request failed?")
            }
        };
        xhttp.open("GET", "/api/email/" + email, true);
        xhttp.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        xhttp.send();
    }

}

window.addEventListener ?
    window.addEventListener("load", loadDevices, false) :
    window.attachEvent && window.attachEvent("onload", loadDevices);

