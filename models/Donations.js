Donations = {
    list: [],

    loadAll: function (callback) {


        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
console.log(this.responseText)
                data = this.responseText
                Donations.list = JSON.parse(data)
                callback()
            }
            else {

                console.log("xhttp request failed?")
            }
            ;
        }
        xhttp.open("GET", "/loadAllPosts", true);
        xhttp.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        xhttp.send();

    },
};
