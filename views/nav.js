window.onload = function(){


    var links = document.getElementsByClassName("layoutlink")

    for (var i = 0; i < links.length; i++){
        link = links[i]
        //if (link.getAttribute("href") == window.location){
        if (window.location.href.indexOf(link.getAttribute("href").substring(1)) != -1){
            link.setAttribute("class", "selected")
        }
    }
}

document.write('<div class="navbar navbar-inverse">\n' +
    '    <div class="container">\n' +
    '        <div class="navbar-header">\n' +
    '            <!-- Button for smallest screens -->\n' +
    '            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button>\n' +
    '            <a class="navbar-brand" href="index.html">\n' +
    '                <!--<span style="color: grey">E-Recycling</span> -->' +
    '                <div id = "logo"><img src = ../assets/images/logo.png></div></a>\n' +
    '        </div>\n' +
    '        <div class="navbar-collapse collapse">\n' +
    '            <ul class="nav navbar-nav pull-right mainNav">\n' +
    '                <li><a class=layoutlink href="index.html">Home</a></li>\n' +
    '                <li><a class=layoutlink href="What.html">What</a></li>\n' +
    '                <li><a class=layoutlink href="why.html">Why</a></li>\n' +
    '                <li><a class=layoutlink href="Where.html">Where</a></li>\n' +
    '                <li><a class=layoutlink href="Donation.html">Donation</a></li>'+
    '                <li><a class=layoutlink href="donationSearch.html">Free Devices</a></li>'+
    '                <li><a class=layoutlink href="Personal_privacy.html">Information Privacy</a></li>\n' +
    '                <li class="dropdown active">\n' +
    '                    <a href="Login.html" class="layoutlink dropdown-toggle" data-toggle="dropdown">Login/Account <b class="caret"></b></a>\n' +
    '                    <ul class="dropdown-menu">\n' +
    '                        <li><a href="Account.html">Account information</a></li>\n' +
    '                        <li><a href="Login.html">Login in</a></li>\n' +
    '                        <li><a href="My_post.html">My post</a></li>\n' +
    '                    </ul>\n' +
    '                </li>\n' +
    '            </ul>\n' +
    '        </div>\n' +
    '        <!--/.nav-collapse -->\n' +
    '    </div>\n' +
    '</div>\n' +
    '<!-- /.navbar -->\n' +
    '\n' +
    '<!-- JavaScript libs are placed at the end of the document so the pages load faster -->\n' +
    '<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>\n' +
    '<script src="https://netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js"></script>\n' +
    '<script src="assets/js/custom.js"></script>')