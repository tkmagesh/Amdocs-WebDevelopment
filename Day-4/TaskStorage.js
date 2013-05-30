var app = app || {};
(function(){
	app.taskStorage = {
		addTask : function (taskName){
			var taskId = new Date().getTime().toString();
			var newTask = {
				id : taskId,
				taskName : taskName,
				isCompleted : false
			};
			window.localStorage.setItem(taskId,window.JSON.stringify(newTask));
			return newTask;
		},
		removeTask : function(taskId){
			window.localStorage.removeItem(taskId);
		},
		toggleCompletion : function (taskId){
			console.log(taskId);
			var task = window.JSON.parse(window.localStorage.getItem(taskId));
			task.isCompleted = !task.isCompleted;
			window.localStorage.setItem(task.id,window.JSON.stringify(task));
		},
		getAllTasks : function (){
			var tasks = [],
				storage = window.localStorage,
				i;

			for(i=0;i<storage.length;i++){
				var task = window.JSON.parse(storage.getItem(storage.key(i)));
				tasks.push(task);
			}
			return tasks;
		}

	};
})();
