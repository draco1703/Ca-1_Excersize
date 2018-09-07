var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne", "hanne", "Sanne"];
/// view boys, girls and all
document.getElementById("boys").innerHTML = boys;
document.getElementById("girls").innerHTML = girls;
var all = boys.concat(girls);
document.getElementById("all").innerHTML = all;
var click =0;

/////////////////////////////////////////////////
/// added boy or girl
document.getElementById("addboy").addEventListener("click", addboy);
function addboy(e) {
    e.preventDefault();
    var newArray = document.getElementById('newboy').value;
    boys.push(newArray);
    document.getElementById("newboy").value = "";
    document.getElementById("boys").innerHTML = boys;
}
document.getElementById("addgirl").addEventListener("click", addgirl);
function addgirl(e) {
    e.preventDefault();
    var newArray = document.getElementById('newgirl').value;
    girls.push(newArray);
    document.getElementById("newgirl").value = "";
    document.getElementById("girls").innerHTML = girls;
}
/////////////////////////////////////////////////
////remove boy or girl
/*
if (document.getElementById("first").addEventListener("click", first)) {
    function first() {
        document.getElementById("removeboy").addEventListener("click", removeboy);
        function removeboy(e) {
            e.preventDefault()
            boys.shift();
            document.getElementById("boys").innerHTML = boys;
        }
        document.getElementById("removegirl").addEventListener("click", removegirl);
        function removegirl(e) {
            e.preventDefault()
            girls.shift();
            document.getElementById("girls").innerHTML = girls;
        }
    }

}
if (document.getElementById("last").addEventListener("click", last)) {
    function last() {
        document.getElementById("removeboy").addEventListener("click", removeboy);
        function removeboy(e) {
            e.preventDefault()
            boys.pop();
            document.getElementById("boys").innerHTML = boys;
        }
        document.getElementById("removegirl").addEventListener("click", removegirl);
        function removegirl(e) {
            e.preventDefault()
            girls.pop();
            document.getElementById("girls").innerHTML = girls;
        }
    }

}
*/

document.getElementById("removeboy").addEventListener("click", removeboy);
function removeboy(e) {
    e.preventDefault()
    boys.shift();
    document.getElementById("boys").innerHTML = boys;
}
document.getElementById("removegirl").addEventListener("click", removegirl);
function removegirl(e) {
    e.preventDefault	
    girls.shift();
    document.getElementById("girls").innerHTML = girls;
}

/////////////////////////////////////////////////
// sort all
document.getElementById("sort").addEventListener("click", sort);
function sort(e) {
	all = boys.concat(girls);
    e.preventDefault()
    function filterItems(query){
        return all.filter(function(el){
            return el.toUpperCase().indexOf(query.toUpperCase()) > -1
        })
	}
	

	if (0 == click % 2) {
		all.reverse();

	} else {
		all.sort();
	}

	click++;
document.getElementById("all").innerHTML = all;
}
/////////////////////////////////////////////////
//reverse all

document.getElementById("reverse").addEventListener("click", reverse);
function reverse(e) {
	all = boys.concat(girls);
    e.preventDefault()
    all.reverse();
    document.getElementById("all").innerHTML = all;
}



