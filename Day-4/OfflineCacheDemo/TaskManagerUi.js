var app = app || {};
(function(){
	var storage = app.taskStorage;
	$(function(){
		$("#btnAddTask").on('click',addTask);
		$("#btnRemoveCompletedTasks").on('click',removeCompletedTasks);
		//$("#btnLoadData").on("click",addAllTasksFromStorage);
		addAllTasksFromStorage();
		$("#ulTaskList").on('click','li',onTaskItemClick);
			
	});
	function addTask(){
		var taskName = $("#txtTask").val();
		//Save it to the storage;
		var newTask = storage.addTask(taskName);
		addTaskToUi(newTask);
	}

	function addTaskToUi(newTask){
		$("<li>")
			.attr("data-task-id",newTask.id)
			.html(newTask.taskName)
			.addClass(newTask.isCompleted ? "completed" : "")
			.appendTo($("#ulTaskList"));
		displayMessage("A new task Item is added");
	}
	
	function removeCompletedTasks(){
		var taskItemCount = $("#ulTaskList > li.completed").length;
		$("#ulTaskList > li.completed").each(function(index,taskItem){
			storage.removeTask($(this).attr("data-task-id"));
			$(this).remove();
		});
		displayMessage(taskItemCount + " tasks are removed");
	}

	

	function onTaskItemClick(){
		$(this).toggleClass("completed");
		storage.toggleCompletion($(this).attr("data-task-id"));
	}

	

	function displayMessage(msg){
		$("#divMessage").html(msg).fadeIn(2000).delay(5000).fadeOut('slow');
	}

	

	function addAllTasksFromStorage(){
		var tasks = storage.getAllTasks();
		for(var i=0;i<tasks.length;i++){
			addTaskToUi(tasks[i]);
		}
	}

	function loadTasksFromServer(){
		var newTask = {taskName : 'Try Ajax'};
		$.ajax({
			  type : 'get',
			  url : 'tasks.json',
			  dataType : 'json',
			  success : function(responseData){
			  	for(var i=0;i<responseData.length;i++){
			  		var task = responseData[i];
			  		addTaskToUi(task);
			  	}
			  }
			});
	}
})();