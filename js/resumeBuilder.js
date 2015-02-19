/*
This is the bio object that contains properties of the resume's author
*/
var bio = {
	"name": "Paul Davis",
	"role": "Web Developer",
	"contacts": {
		"mobile": "678-409-8327",
		"email": "paulandcindy@gmail.com",
		"github": "PRDavis",
		"twitter": "@paul_davis",
		"location": "Atlanta"
	},
	"welcomeMessage": "Hello and thank you for taking time to review my resume! This is test text. I have over 10 years of telecom network operations management experience. I am looking to branch out into a web development role.",
	"skills": [
	"HTML", "CSS", "JavaScript", "Access Networks", "Troubleshooting", "Technical Training"
	],
	"bioPic": "images/pd02.jpg"
};
/*
This is the work object that contains properties of work history
*/
var work = {
	"jobs": [{
		"employer": "AT&T",
		"title": "Technical Support Analyst",
		"location": "Atlanta GA",
		"dates": "2005-present",
		"description": "Supported Nationwide DSL infrastructure for emergency outage recovery. Designed and delivered technical training to tier 2 network help desk agents."
	}, {
		"employer": "AT&T",
		"title": "Multi Media Technician",
		"location": "Atlanta GA",
		"dates": "2001-2004",
		"description": "Tier 2 DSL support agent. Single point of escalation for internal and external customers"
	}]
};
/*
This is the education object that contains properties of the resume author's education
*/
var education = {
	"schools": [{
		"name": "Clayton State University",
		"location": "Morrow, GA",
		"degree": "none",
		"majors": "Pre-engineering",
		"dates": "2011-2011",
		"url": "http://www.clayton.edu"
	}, {
		"name": "Columbia Southern University",
		"location": "Orange Beach, AL",
		"degree": "none",
		"majors": "Information Technology",
		"dates": "2005-2008",
		"url": "http://www.columbiasouthern.edu/"
	}],
	"onlineCourses": [

	{
		"title": "Introduction to HTML and CSS",
		"school": "Udacity.com",
		"dates": "2015-2015",
		"url": "http://www.udacity.com"
	}, {
		"title": "Version Control",
		"school": "Udacity.com",
		"dates": "2015-2015",
		"url": "http://www.udacity.com"
	}, {
		"title": "JavaScript Basics",
		"school": "Udacity.com",
		"dates": "2015-2015",
		"url": "http://www.udacity.com"
	}
	]
};
/*
This is the projects object that contains properties of some projects.
*/
var projects = {
	"project": [{
		"title": "DSL Network Operations Training",
		"dates": "Jan 2006, June 2009, February 2013",
		"location": "Atlanta, GA",
		"description": "Delivered DSL troubleshooting training",
		"images": [
		"https://maps.googleapis.com/maps/api/streetview?size=200x200&location=33.822469,-84.368551&fov=90&heading=90&pitch=10"
		]

	}, {
		"title": "DSL Network Operations Training",
		"dates": "September 2007, December 2012",
		"location": "Earth City, MO",
		"description": "Delivered DSL troubleshooting training",
		"images": [
		"https://maps.googleapis.com/maps/api/streetview?size=200x200&location=38.758911,-90.454859&fov=90&heading=285&pitch=10"
		]

	}, {
		"title": "DSL Network Operations Training",
		"dates": "May 2009",
		"location": "Dublin, CA",
		"description": "Contingency Planning Training",
		"images": [
		"https://maps.googleapis.com/maps/api/streetview?size=200x200&location=37.710301,-121.888077&fov=90&heading=285&pitch=10"
		]
	}, {
		"title": "DSL Network Operations Training",
		"dates": "May 2012, September 2012, February 2013",
		"location": "San Ramon, CA",
		"description": "Delivered DSL troubleshooting training",
		"images": [
		"https://maps.googleapis.com/maps/api/streetview?size=200x200&location=37.768732,-121.96526&fov=90&heading=135&pitch=10"

		]
	}, {
		"title": "DSL Network Operations Training",
		"dates": "May 2013",
		"location": "Little Rock, AR",
		"description": "Delivered DSL troubleshooting training",
		"images": [
		"https://maps.googleapis.com/maps/api/streetview?size=200x200&location=34.741322,-92.272676&fov=90&heading=1&pitch=10"

		]
	}]
};
/*
education display function
*/
//HTMLschoolStart
education.display = function() {
	for (school in education.schools) {

		$("#education").append(HTMLschoolStart);
		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
		$(".education-entry:last").append(formattedSchoolName);

		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		$(".education-entry:last").append(formattedSchoolDegree);

		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedSchoolDates);


		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedSchoolLocation);

		HTMLschoolMajor
		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
		$(".education-entry:last").append(formattedSchoolMajor);
	}

	$(".education-entry:last").append(HTMLonlineClasses);

	for (course in education.onlineCourses) {
		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
		$(".education-entry:last").append(formattedOnlineTitle);


		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
		$(".education-entry:last").append(formattedOnlineSchool);


		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
		$(".education-entry:last").append(formattedOnlineDates);



		var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
		$(".education-entry:last").append(formattedOnlineURL);
	};

};

//call the education display function
education.display();
	/*
project display function goes here:
*/
projects.display = function() {
	var projectHTMLOutputString = "";
	projectHTMLOutputString = projectHTMLOutputString + HTMLProjectListStart;
	for (proj in projects.project) {
		projectHTMLOutputString = projectHTMLOutputString + HTMLprojectWrapStart;
		projectHTMLOutputString = projectHTMLOutputString + HTMLprojectStart;
		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.project[proj].title);
		projectHTMLOutputString = projectHTMLOutputString + formattedProjectTitle;
		var formattedProjectLocation = HTMLprojectLocation.replace("%data%", projects.project[proj].location);
		projectHTMLOutputString = projectHTMLOutputString + formattedProjectLocation;
		var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.project[proj].dates);
		projectHTMLOutputString = projectHTMLOutputString + formattedProjectDates;
		var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.project[proj].description);
		projectHTMLOutputString = projectHTMLOutputString + formattedProjectDescription;
		for (images in projects.project[proj].images) {
			var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.project[proj].images[images]);
			projectHTMLOutputString = projectHTMLOutputString + formattedProjectImage;
		}
		projectHTMLOutputString = projectHTMLOutputString + HTMLprojectWrapEnd;
	}
	projectHTMLOutputString = projectHTMLOutputString + HTMLProjectListEnd;
	$("#projects").append(projectHTMLOutputString);
};
projects.display();
//apply styles to header element and display them on the page
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
//apply formatting to contact element and display them on the page
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation);
$("#footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation);
/*
Format and display the welcome message and the picture.
*/
var formattedWelcome = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedWelcome);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(formattedBioPic);
/*
Check to see if there are entries in bio.skills,
If so, format them and add them to the skills section
*/
if (bio.skills.length > 0) {

	$("#header").append(HTMLskillsStart);

	for (var skill in bio.skills) {
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
		$("#skills").append(formattedSkill);
	}
};
/*
a function to format and display the properties of the work object.
*/
work.display = function() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		$(".work-entry:last").append(formattedEmployer + formattedTitle);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedLocation);
		$(".work-entry:last").append(formattedDates);
		$(".work-entry:last").append(formattedDescription);
	}
};

/*
calls the work.display function
*/
work.display();
//this is the mouse click locator
$(document).click(function(loc){
	var x=loc.pageX;
	var y=loc.pageY;
	logClicks(x,y);
});
//this puts the internationalize button on the page
$("#main").append(internationalizeButton);

function inName() {
	var myName = bio.name.split(" ");
    //take the fist name and make lower case
    var firstName = myName[0].toLowerCase();
    //take the first name and slice off the first char
    var firstCharofFirstName = firstName.slice(0, 1);
    //change that char to upper case
    firstCharofFirstName = firstCharofFirstName.toUpperCase();
    //append rest of first name to upper case char
    myNameLength = firstName.length;
    firstName = firstCharofFirstName + firstName.slice(1, myNameLength);
    //change last name to upper case
    var lastName = myName[1].toUpperCase();
    //append " " and last name to first name
    var myReturnName = firstName + " " + lastName;
    return myReturnName;
};
// this is the google map code//
$("#mapDiv").append(googleMap);


