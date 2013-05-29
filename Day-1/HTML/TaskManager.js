(function(){
	function addTask(){
		var taskName = document.getElementById("txtTask").value;
		var taskList = document.getElementById("ulTaskList");
		
		/* Bad approach */
		//var newTaskNode = "<li>" + taskName + "</li>";
		//taskList.innerHTML = taskList.innerHTML + newTaskNode;
		/*****************************************************/

		var newTaskNode = document.createElement("li");
		newTaskNode.innerHTML = taskName;
		newTaskNode.addEventListener("click",onTaskItemClick);
		taskList.appendChild(newTaskNode);

	}
	function initialize(){
		document.getElementById("btnAddTask").addEventListener("click",addTask);
		document.getElementById("btnRemoveCompletedTasks").addEventListener("click",removeCompletedTasks);
		asignTaskItemClickHandlers();
	}

	function removeCompletedTasks(){
		var taskList = document.getElementById("ulTaskList");
		for(var i=taskList.children.length-1;i>=0;i--){
			var taskItem = taskList.children[i];
			if (taskItem.classList.contains("completed")){
				taskList.removeChild(taskItem);
			}
		}

	}

	function asignTaskItemClickHandlers(){
		var allTasks = document.getElementsByTagName("li");
		for(var i=0;i<allTasks.length;i++){
			allTasks[i].addEventListener("click",onTaskItemClick);
		}
	}
	function onTaskItemClick(){
		this.className = "completed";
	}
	document.addEventListener("DOMContentLoaded", initialize);
})();