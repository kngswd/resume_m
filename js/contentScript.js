var width = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

var height = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;

$(window).load(function(){
	if (width > 414) {
		window.alert("Mobile Devices Only.");
		window.location = "alternate.html";
	}
});

$(document).on("pagebeforeshow", "#home", function() {
	$.ajax({
		type: "POST",
		url: "details.xml",
		dataType: "xml",
		success: listDetails,
		error: function(e) {
			alert(e.status);
		}
	});
});

function listDetails(xml) {
	var  n=1;
	
	$(xml).find("category").each(function() {
		$(".category" + n).text($(this).attr("title"));
		n++;
	});
};

$(document).on("pagecreate", "#skills", function() {
	$("#cg-summary").html("");
	$.ajax({
		type: "POST",
		url: "details.xml",
		dataType: "xml",
		success: function(xml) {
			altParseXML(xml, "skills");
		},
		error: function(e) {
			alert(e.status);
		}
	});
});

$(document).on("pagecreate", "#education", function() {
	$("#cg-education").html("");
	$.ajax({
		type: "POST",
		url: "details.xml",
		dataType: "xml",
		success: function(xml) {
			altParseXML (xml, "education");
		},
		error: function(e) {
			alert(e.status);
		}
	});
});

$(document).on("pagecreate", "#techprof", function() {	
	$("#eg-techprof").html("");
	$.ajax({
		type: "POST",
		url: "details.xml",
		dataType: "xml",
		success: function(xml) {
			altParseXML (xml, "techprof");
		},
		error: function(e) {
			alert(e.status);
		}
	});
});

$(document).on("pagecreate", "#rlvntexp", function() {
	$("#eg-experience").html("");
	$.ajax({
		type: "POST",
		url: "details.xml",
		dataType: "xml",
		success: function(xml) {
			altParseXML (xml, "rlvntexp");
		},
		error: function(e) {
			alert(e.status);
		}
	});
});

$(document).on("pagecreate", "#about", function() {
	$("#eg-about").html("");
	$.ajax({
		type: "POST",
		url: "details.xml",
		dataType: "xml",
		success: function(xml) {
			altParseXML (xml, "about");
		},
		error: function(e) {
			alert(e.status);
		}
	});
});

function altParseXML (xml) {
	var x=1;
	
	$(xml).find("point").each(function() {
	
		if (".point" + x) {
			$(".point" + x).text($(this).text());
		}
		x++;
	});
};