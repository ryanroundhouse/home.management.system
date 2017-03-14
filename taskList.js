function TaskListManager() {
}

TaskListManager.prototype.loadTaskListFromString = function (jsonString) {
    var parsedTaskList = JSON.parse(jsonString);
    return parsedTaskList.taskList;
}

TaskListManager.prototype.addTaskPropertiesToElement = function (element, taskProperties) {
    jQuery.each(taskProperties, function (tIndex, prop) {
        var innerDiv = document.createElement('div');
        innerDiv.appendChild(document.createTextNode(prop));
        element.appendChild(innerDiv);
    });
}