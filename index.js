
$(document).ready(function(){

//create drop down list of cities

	var cityArray = ["","NYC","SF","LA","ATX","SYD"];

	$("form").replaceWith("<form><select id='city-type'><option>Select a City</option></select></form>");

	var i = 0;

	cityArray.forEach(function(){
		i += 1;
		$("#city-type").append("<option>"+cityArray[i]+"</option>");
	});

//when one is clicked, run a function

	$("#city-type").click(changeCity)


//the function changes the attr of the body to the class that corresponds with the city clicked

	function changeCity(){

		//prevent page refresh
		event.preventDefault();


		// for (var i = 0; i < cityArray.length; i++) {
		// 	$("body").attr("class",city[i]);
		
		//define variable city

		var city = $("#city-type").val();
		//collects value of string entered into city-type input
		//if var city value is given name of city, change background pic to city pic

		//apply a class for each background change
		if (city=="NYC"){
			$("body").attr("class","nyc");
		}

		else if (city=="SF"){
			$("body").attr("class","sf");
		}

		else if(city=="LA"){
			$("body").attr("class","la");	
		}

		else if (city=="ATX"){
			$("body").attr("class","austin");
		}

		else if (city=="SYD"){
			$("body").attr("class","sydney");
			
		}
	}
});
