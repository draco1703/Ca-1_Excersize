var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne", "hanne", "Sanne"];
/// view boys, girls and all
document.getElementById("boys").innerHTML = boys;
document.getElementById("girls").innerHTML = girls;
var all = boys.concat(girls);
document.getElementById("all").innerHTML = all;
document.getElementById('first').checked = true;
var ae = 0;
var click =0;

/////////////////////////////////////////////////
/// added boy or girl
document.getElementById("addboy").addEventListener("click", function () { add(boys, "boys"); });
document.getElementById("addgirl").addEventListener("click", function () { add(girls,"girls") });
function add(e, ex)
	var newArray = document.getElementById("new" + ex.substring(0, ex.length-1)).value;
    e.push(newArray);
	document.getElementById("new" + ex.substring(0, ex.length - 1)).value = "";
	document.getElementById(ex).innerHTML = e;
	ae = 1;
}


document.getElementById("removeboy").addEventListener("click", function () {
	remove("boys", boys);
});

document.getElementById("removegirl").addEventListener("click", function () {
	remove("girls", girls);
});

function remove(x, ex) {
	if (document.getElementById('last').checked ==true) {
		ex.pop();
	} else { ex.shift();}
	document.getElementById("" + x + "").innerHTML = ex;
	ae = 1;
}

/////////////////////////////////////////////////
// sort all
document.getElementById("sort").addEventListener("click", sort);
function sort(e) {
	if (ae == 1) {
		all = boys.concat(girls);
		ae = 0;
	}
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
	if (ae == 1) {
		all = boys.concat(girls);
		ae = 0;
	}
    e.preventDefault()
    all.reverse();
    document.getElementById("all").innerHTML = all;
}



