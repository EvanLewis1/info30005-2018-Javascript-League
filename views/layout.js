
window.onload = function(){


        var links = document.getElementsByClassName("layoutlink")

        for (var i = 0; i < links.length; i++){
            link = links[i]
            //if (link.getAttribute("href") == window.location){
            if (window.location.href.indexOf(link.getAttribute("href").substring(1)) != -1){
                link.setAttribute("class", "selected layoutlink")
            }
        }
    }

//    <script src = "../models/Menu.js"></script>
document.write(`





<div class="header">
    <!-- Button for smallest screens -->
    <h1>E-RECYCLING</h1>
</div>


<nav>
    <ul class="clear">
        <!--li class="first"><a href="#">Home</a></li> _fcksavedurl=""#">Haha</a></li-->
        <li><a class = layoutlink href="./What.html">What</a></li>
        <li><a class = layoutlink href="./why.html">Why</a></li>
        <li><a class = layoutlink href="./Where.html">Where</a></li>
        <li>
            <span class="Darrow"></span>
            <a class = layoutlink href="./index.html">How</a>

            <dl>
                <dt><span class="arrow"></span></dt>
                <dd><a href="#">Pick up</a></dd>
                <dd><a href="Donation.html">Give it away</a></dd>
                <dd><a href="#">Recycling</a></dd>
            </dl>
        </li>
        <li><a class = layoutlin khref="#">Pickup Service</a></li>
        <li><a class = layoutlink href="./Personal_privacy.html">Information Privacy</a></li>
        <li class="last"><a class = layoutlink href="./Login.html">Login/Account</a></li>
    </ul>
</nav>


`)