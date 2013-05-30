
function SalaryCalculatorView(model){
	var _model = model;
	this.root = document.createElement("div");
	this.initialize = function(){
		this.$root = $(this.root);
		this.$root.html($("#salaryCalculatorViewTemplate").html());

		this.$root.on("change","#txtBasic",function(){
			_model.basic(parseFloat(this.value))
		});
		this.$root.on("change","#txtHra",function(){
			_model.hra(parseFloat(this.value))
		});
		this.$root.on("change","#txtDa",function(){
			_model.da(parseFloat(this.value))
		});
		this.$root.on("change","#rangeTax",function(){
			_model.tax(parseFloat(this.value))
		});

		this.$root.on("click","#btnCalculate",function(){
			_model.calculate();
		});

		_model.addOnModelChanged(onModelChanged.bind(this));

		function onModelChanged(attribute){
				if (attribute === "basic") this.$root.find("#txtBasic").val(_model.basic());
				if (attribute === "hra") this.$root.find("#txtHra").val(_model.hra());
				if (attribute === "da") this.$root.find("#txtDa").val(_model.da());
				if (attribute === "tax") {
					this.$root.find("#rangeTax").val(_model.tax());
					this.$root.find("#spanTax").html(_model.tax());
				}
				if (attribute === "gross") this.$root.find("#divResult").html(_model.gross());
			};

		/*_model.addOnModelChanged((function(that){
			var context = that;
			return function(attribute){
				if (attribute === "basic") context.$root.find("#txtBasic").val(_model.basic());
				if (attribute === "hra") context.$root.find("#txtHra").val(_model.hra());
				if (attribute === "da") context.$root.find("#txtDa").val(_model.da());
				if (attribute === "tax") {
					context.$root.find("#rangeTax").val(_model.tax());
					context.$root.find("#spanTax").html(_model.tax());
				}
				if (attribute === "gross") context.$root.find("#divResult").html(_model.gross());
			};
		})(this));*/
	}	
}