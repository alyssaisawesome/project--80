var names = [];
var s_names = [];
    
function submit()
{
    var GuestName = document.getElementById("name1").value;
	names.push(GuestName);
	console.log(GuestName);    
    console.log(names);
    var lenght_of_name = names.length;
    console.log(lenght_of_name);
	show()
	show()
	sorting() 
	sorting() 

	document.getElementById("display_name").textContent = names.join();

   }

  function show() {
	if (document.getElementById("showbutton").textContent == "Show") {	  
	  on("p1","showbutton", names);
	}
	else {
	  off("p1","showbutton", names);
	}
  }

  function on(id1, id2, arr) {
    document.getElementById(id1).innerHTML = arr.map((p, i) => (i + 1) + ". " + p + '<br>').join(''); 
	document.getElementById(id2).textContent = "Hide";
  }	  

  function off(id1, id2) {
    document.getElementById(id1).innerHTML = ''; 
	document.getElementById(id2).textContent = "Show";
  }	   

  function sorting() { 

	s_names = [...names]
	s_names.sort();
	if (document.getElementById("sortbutton").textContent == "Show") {	 
	  on("sorted", "sortbutton", s_names)
	}
	else {
	  off("sorted", "sortbutton", s_names)
	}
  }






function searching()
{
	var s= document.getElementById("s1").value;
	var found=0;
	var j;
	for(j=0; j<names.length; j++)
		{
			if(s==names[j]){
				found=found+1;
			}	
		}
	document.getElementById("p2").innerHTML="Name found "+found+" time(s)";
	console.log("found name "+found+" time(s)");
}
