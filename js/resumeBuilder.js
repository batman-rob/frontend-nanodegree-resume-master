var bio = {
	"name" : "Robert Carlson",
	"role" : "Subsea Engineer",
	"contacts" : {
		"mobile" : "409-392-1978",
		"email" : "racarl119@gmail.com",
		"github" : "batman-rob",
		"location" : "Galveston,TX"
	},
	"biopic" : "images/profilepic.jpg",
	"welcomeMessage" : "Hardwork is only for the strong.",
	"skills" : ["Hydraulics", "Pneumatics", "working on stuff", "Everything"]
};

var education = {
	"schools": [
		{
			"name": "Scarborough High School",
			"location": "Houston, TX",
			"dates": 2005
		},
	],

	"onlineCourses": [
			{
			"title": "Intro to Programming",
			"school": "Udacity",
			"dates": 2016,
			"url": "https://www.udacity.com/course/intro-to-programming-nanodegree--nd000"
		}
	]
};


var work= {
	"jobs": [
		{
			"employer": "Nation Oilwell Varco",
			"title": "Field Service Technician",
			"dates": "June 2013 - Present",
			"location": "Houston, Texas",
			"description": "Field repair of pressure control equipment"+
			" (i.e. blow out preventers, PODS, DCBs, fail safe valves)."+
			" Inspection and maintenance of subsea stacks. Primarily trouble"+
			" shooting jobs. End of well work on stacks."+
			" Testing and confirming equipment has met the qualification requirements."+
			"General upkeep and maintenance on HPUs."
		},
		{
			"employer": "National Oilwell Varco Research and Development Lab",
			"title": "Controls and Special Projects Lead",
			"dates": "August 2010 - June 2013",
			"location": "Houston, Texas",
			"description": "Testing and qualification of new product developemtn for pressure control"+
			"euipment used for subsea stack controls. Testing Ram and Annular BOPS. "+
			"Preformmed maintenance on Hydraulic pumps and air compressors. "+
			"Fabrication of special testing equipment that was designed for product testing."
		}
	]
};

var projects = {
	"projects": [
		{
			"title": "No project entereted",
			"dates": "2016",
			"description": "all kinds of stuff", 
			"images": "images/resumepic.png"
		}
	]
};


bio.display = function() {
	
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedImage = HTMLbioPic.replace("%data%", bio.biopic);
	var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	//display content
	$("#header").prepend(formattedName, formattedRole);
	$("#header").append(formattedImage, formattedMessage);

 	if(bio.skills.length>0){
		$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);

		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);

		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%",bio.skills[2]);

		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%",bio.skills[3]);

		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%",bio.skills[4]);
}              
			var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
			var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
			var formattedGithub = HTMLgithub.replace("%contact%", "Github").replace("%data%", bio.contacts.github);
			var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
			$("#topContacts").append(formattedMobile);
			$("#topContacts").append(formattedEmail);
			$("#topContacts").append(formattedGithub);
			$("#topContacts").append(formattedLocation);
}

	
bio.display();


work.display = function() {
	for (job in work.jobs){
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedEmployerTitle);
		$(".work-entry:last").append(formattedDates);
		$(".work-entry:last").append(formattedLocation);
		$(".work-entry:last").append(formattedDescription);

	}
}

work.display();


projects.display = function() {
	for (project in projects.projects){
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedTitle);
		$(".project-entry:last").append(formattedDates);
		$(".project-entry:last").append(formattedDescription);

		
		var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
		$(".project-entry:last").append(formattedImage);

	} 
}

projects.display();

education.display = function() {
	$("#education").append(HTMLschoolStart);
	for (var school in education.schools) {
		formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry").append(formattedName);
		$(".education-entry").append(formattedLocation);
		$(".education-entry").append(formattedDates);
	}
	
	$("#education").append(HTMLonlineClasses);
	for (var course in education.onlineCourses) {
		$("#education").append(HTMLschoolStart);
		var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
		var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
		var formattedonlineDate = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
		var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
		$(".education-entry:last").append(formattedonlineTitle + formattedonlineSchool, formattedonlineDate, formattedURL);
	}
}
education.display();
	
$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});


function locationizer(work_obj) {
	var locationArray = [];

	for (job in work_obj.jobs) {
		var newLocation = work_obj.jobs[job].location;
		locationArray.push(newLocation);
	}

	return locationArray
}

console.log(locationizer(work));

function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase()+
		name[0].slice(1).toLowerCase();

	return name[0] +" "+name[1];
}

$('#main').append(internationalizeButton);

$("#mapDiv").append(googleMap);


