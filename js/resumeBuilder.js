var key = "AIzaSyBVqxPPHyYYuG4MRlYccGU8wqawWhNHN2Q";

var bio = {
	"name":"Timothy Jacobs", 
	"role":"Professional-Application Developer",
	"contacts":{
		"mobile":"636-851-7195",
		"email":"javacoder26@gmail.com",
		"github":"https://github.com/doindev",
		"location":"Saint Charles, MO 63304"
	}, 
	"welcomeMessage":"Welcome to my resume", 
	"skills":["Java", "Html", "CSS", "Oracle", "Vagrant", "Ansible", "Docker"],
	"biopic":"images/blank3.jpg",
	"display": function(){
		if(typeof bio.role != 'undefined')
			$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
		
		$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));

		if(typeof bio.contacts.mobile != 'undefined'){
			$("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
			$("#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
		}

		if(typeof bio.contacts.email != 'undefined'){
			$("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
			$("#footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
		}

		if(typeof bio.contacts.github != 'undefined'){
			$("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
			$("#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
		}

		if(typeof bio.contacts.twitter != 'undefined'){
			$("#topContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
			$("#footerContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
		}

		if(typeof bio.contacts.location != 'undefined'){
			$("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
			$("#footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
		}

		if(typeof bio.biopic!= 'undefined')
			$("#header").append(HTMLbioPic.replace("%data%", bio.biopic));

		if(typeof bio.welcomeMessage != 'undefined')
			$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

		if($(bio.skills).length>0){
			$("#header").append(HTMLskillsStart);
			$.each(bio.skills, function(index, value){
				$("#skills").append(HTMLskills.replace("%data%", value));
			});
		}
	}
};
var work = {
	"jobs":[
		{
			"employer":"AT&T", 
			"title":"Professional-Application Developer", 
			"location":"Earth City, MO 63045", 
			"dates":"Apr 2000 - Current", 
			"description":"Develop and maintain existing java web application and java stand alone application and libraries."
		},
		{
			"employer":"MCI-Worldcom", 
			"title":"Circuit Design Engineer", 
			"location":"Chesterfield, MO 63017", 
			"dates":"Sept 1998 - Apr 2000", 
			"description":"Designed T1 and pots circuits using existing network elements along with other CLEC's as needed."
		},
		{
			"employer":"Oulette Machinery Systems",
			"title":"Assembly Tech",
			"location":"Fenton, MO 63026",
			"dates":"May 1998 - Sept 1998",
			"description":"Worked from blueprints to assemble, wire and test industrial palletizers.  Then break down and load truck for shipping."
		}
	],
	"display": function(){
		$.each(work.jobs, function(index, job){
				$("#workExperience").append(HTMLworkStart);
				$(".work-entry:last").append(
					HTMLworkEmployer.replace("%data%", job.employer) + 
					HTMLworkTitle.replace("%data%", job.title) + 
					HTMLworkDates.replace("%data%", job.dates) +
					HTMLworkLocation.replace("%data%", job.location) +
					HTMLworkDescription.replace("%data%", job.description)
				);
			}
		);
	}
};
var projects = {
	"projects":[
		{
			"title":"IBM-TN3270 Client", 
			"dates":"2016", 
			"description":"Built java based IBM-3270 emulator used to access legacy systems.", 
			"images":[
				"images/3270_1.jpg", 
				"images/3270_2.jpg"
			]
		}
	],
	"display": function(){
		$.each(projects.projects, function(index, project){
			$("#projects").append(HTMLprojectStart);
			$(".project-entry:last").append(
				HTMLprojectTitle.replace("%data%", project.title) + 
				HTMLprojectDates.replace("%data%", project.dates) +
				HTMLprojectDescription.replace("%data%", project.description)
			);
			$.each(project.images, function(index, image){
				$(".project-entry:last").append(HTMLprojectImage.replace("%data%", image));
			});
		});
	}
};
var education = {
	"schools":[
		{
		"name":"ITT Technical Institute", 
		"location":"Earth City, MO 63045", 
		"degree":"BAS",
		"majors":["Electronics Engineering"],
		"dates":"1999", 
		"url":"http://www.itt-tech.edu"
		},
		{
		"name":"Missouri Technical Institute", 
		"location":"Maryland Heights, MO 63043", 
		"degree":"AAS",
		"majors":["Electronics Engineering"],
		"dates":"1997", 
		"url":"http://www.motech.edu"
		}
	],
	"onlineCources":[
		{
			"title":"Front End Web Development", 
			"school":"Udacity", 
			"dates":"2016", 
			"url":"http://www.udacity.com"
		}
	],
	"display": function(){
		if($(education.schools).length>0){
			$.each(education.schools, function(index, school){
				$("#education").append(HTMLschoolStart);
				$(".education-entry:last").append(
					HTMLschoolName.replace("%data%", school.name).replace("#", school.url) + 
					HTMLschoolDegree.replace("%data%", school.degree)
				);
				$(".education-entry:last").append(HTMLschoolDates.replace("%data%", school.dates));
				$(".education-entry:last").append(HTMLschoolLocation.replace("%data%", school.location));
				$(".education-entry:last").append(HTMLschoolMajor.replace("%data%", school.majors.join()));
			});
		}
		if($(education.onlineCources).length>0){
			$("#education").append(HTMLonlineClasses);
			$.each(education.onlineCources, function(index, course){
				$("#education").append(HTMLschoolStart);
				$(".education-entry:last").append(HTMLonlineTitle.replace("%data%", course.title) + HTMLonlineSchool.replace("%data%", course.school));
				$(".education-entry:last").append(HTMLonlineDates.replace("%data%", course.dates));
				$(".education-entry:last").append(
					HTMLonlineURL.replace("%data%", course.url).replace("#", course.url)	
				);
			});
		}
	}
};

/*
function locationizer(work){
	var locations = [];
	$.each(work.jobs, function(index, job){
		locations.push(job.location);
	});
	return locations;
}

function inName(name){
	name = name.trim();
	var n = name.lastIndexOf(" "); 
	return name.slice(0,1).toUpperCase() + name.slice(1, n).toLowerCase() + name.slice(n).toUpperCase();
}
*/

function display(){
	bio.display();
	work.display();
	projects.display();
	education.display();

	//$("#main").append(internationalizeButton);
	$("#mapDiv").append(googleMap);
}

display();


