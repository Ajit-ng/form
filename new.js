let form = document.querySelector("#taskForm");
form.addEventListener("submit", function (event) {
    event.preventDefault();

    var empFirstName = document.getElementById('empFirstName').value;
    var empLastName = document.getElementById('empLastName').value;
    var mgrFirstName = document.getElementById('mgrFirstName').value;
    var mgrLastName = document.getElementById('mgrLastName').value;
    var task = document.getElementById('taskInput').value;
    var taskID = document.getElementById('taskID').value;
    var taskNotes = document.getElementById('taskNotes').value;
    var taskInstructions = document.getElementById('taskInstructions').value;
    let dataOutput = document.querySelector("#dataOutput");

    dataOutput.innerHTML = "Employee First Name: ";
    dataOutput.appendChild(document.createTextNode(empFirstName));
    dataOutput.innerHTML += "<br>Employee Last Name: ";
    dataOutput.appendChild(document.createTextNode(empLastName));
    dataOutput.innerHTML += "<br>Manager First Name: ";
    dataOutput.appendChild(document.createTextNode(mgrFirstName));
    dataOutput.innerHTML += "<br>Manager Last Name: ";
    dataOutput.appendChild(document.createTextNode(mgrLastName));
    dataOutput.innerHTML += "<br>Task: ";
    dataOutput.appendChild(document.createTextNode(task));
    dataOutput.innerHTML += "<br>Task ID: ";
    dataOutput.appendChild(document.createTextNode(taskID));
    dataOutput.innerHTML += "<br>Additional Notes: ";
    dataOutput.appendChild(document.createTextNode(taskNotes));
    dataOutput.innerHTML += "<br>Instruction: ";
    dataOutput.appendChild(document.createTextNode(taskInstructions));
});
