const header = document.getElementById("header-container");
header.style.backgroundColor = "green";

const emergencyTasks = document.getElementsByClassName("emergency-tasks")[0];
emergencyTasks.style.background = "green";

const emergencyTasksHeader = document.querySelectorAll(
  ".emergency-tasks h3"
);
for (let index = 0; index < emergencyTasksHeader.length; index += 1) {
  emergencyTasksHeader[index].style.backgroundColor = "blue";
}

const noEmergencyTasks =
  document.getElementsByClassName("no-emergency-tasks")[0];
noEmergencyTasks.style.backgroundColor = "purple";

const noEmergencyTasksHeader = document.querySelectorAll(
  ".no-emergency-tasks h3"
);
for (let index = 0; index < noEmergencyTasksHeader.length; index += 1) {
  noEmergencyTasksHeader[index].style.backgroundColor = "black";
}

const footer = document.querySelector("#footer-container");
footer.style.backgroundColor = "green";

// const body = document.getElementById("container")
// body.style.backgroundColor = "green";

// const header = document.getElementById('header-container');
// header.style.backgroundColor = 'green';

// const emergencyTasks = document.getElementsByClassName('emergency-tasks')[0];
// emergencyTasks.style.backgroundColor = 'blue';

// const emergencyTasksHeaders = document.querySelectorAll('.emergency-tasks h3');
// for (let index = 0; index < emergencyTasksHeaders.length; index += 1) {
//   emergencyTasksHeaders[index].style.backgroundColor = 'purple';
// }

// const noEmergencyTasks = document.querySelector('.no-emergency-tasks');
// noEmergencyTasks.style.backgroundColor = 'yellow';

// const noEmergencyTasksHeaders = document.querySelectorAll('.no-emergency-tasks h3');
// for (let index = 0; index < noEmergencyTasksHeaders.length; index += 1) {
//   noEmergencyTasksHeaders[index].style.backgroundColor = 'red';
// }

// const footer = document.getElementById('footer-container');
// footer.style.backgroundColor = 'green';
