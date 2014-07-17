function navigate_Splash_To_Register() {
	$.mobile.changePage("#registerPage", {
		transition: "flip",
		reverse: false,
		changeHash: true
	});
}

function navigate_Splash_To_Home() {
	$.mobile.changePage("#homepage", {
		transition: "flip",
		reverse: false,
		changeHash: true
	});
}

if (localStorage.getItem("UserName") != undefined && localStorage.getItem("Token") != undefined) {
	$.ajaxSetup({
		headers: {
			"Authorization": "Bearer " + localStorage.getItem("Token")
		}
	});
	navigate_Splash_To_Home();
}else{
	navigate_Splash_To_Register();
}