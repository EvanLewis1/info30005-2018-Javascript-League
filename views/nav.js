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
    '        <div class="container">\n' +
    '            <div class="navbar-header">\n' +
    '                <!-- Button for smallest screens -->\n' +
    '                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button>\n' +
    '                <a class="navbar-brand" href="index.html">\n' +
    '                    <span>E-recycling</span></a>\n' +
    '            </div>\n' +
    '            <div class="navbar-collapse collapse">\n' +
    '                <ul class="nav navbar-nav pull-right mainNav">\n' +
    '                    <li class="active"><a class="layout" href="index.html">Home</a></li>\n' +
    '                    <li><a href="why.html">Why</a></li>\n' +
    '                    <li><a href="What.html">What</a></li>\n' +
    '                    <li><a href="Where.html">Where</a></li>\n' +
    '                    <li><a href="Personal_privacy.html">Information pretection</a></li>\n' +
    '                    <li class="dropdown">\n' +
    '                        <a href="#" class="dropdown-toggle" data-toggle="dropdown">Pickup <b class="caret"></b></a>\n' +
    '                        <ul class="dropdown-menu">\n' +
    '                            <li><a href="sidebar-right.html">Right Sidebar</a></li>\n' +
    '                            <li><a href="#">I want to pick</a></li>\n' +
    '                            <li><a href="#">I have something to be picked  up</a></li>\n' +
    '                        </ul>\n' +
    '                    </li>\n' +
    '                    <li><a href="" class="dropdown-toggle" data-toggle="dropdown">Login<b class="caret"></b></a>\n' +
    '                        <ul class="dropdown-menu">\n' +
    '                            <li><a href="Account.html">Personal information</a></li>\n' +
    '                            <li><a href="#">My history</a></li>\n' +
    '                            <li><a href="Account-setting.html">Setting</a></li>\n' +
    '                        </ul>\n' +
    '                    </li>\n' +
    '\n' +
    '                </ul>\n' +
    '            </div>\n' +
    '            <!--/.nav-collapse -->\n' +
    '        </div>\n' +
    '    </div>'
)