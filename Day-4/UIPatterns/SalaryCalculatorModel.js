function SalaryCalculator(){
	var _basic, _hra,_da,_tax,_gross;
		_modelChangedCallbacks = [];
	this.addOnModelChanged = function(cb){
		_modelChangedCallbacks.push(cb);
	};
	this.triggerModelChanged = function(attr){
		for(var i=0;i<_modelChangedCallbacks.length;i++)
			_modelChangedCallbacks[i](attr);
	};
	this.basic = function(){
		if (arguments.length === 0) return _basic;
		_basic = arguments[0];
		this.triggerModelChanged('basic');
	};
	this.hra = function(){
		if (arguments.length === 0) return _hra;
		_hra = arguments[0];
		this.triggerModelChanged('hra');
	};
	this.da = function(){
		if (arguments.length === 0) return _da;
		_da = arguments[0];
		this.triggerModelChanged('da');
	};
	this.tax = function(){
		if (arguments.length === 0) return _tax;
		_tax = arguments[0];
		this.triggerModelChanged('tax');
	};
	this.calculate = function(){
		var net = _basic + _hra + _da;
		var actualTax = net * (_tax/100);
		_gross = net - actualTax;
		this.triggerModelChanged('gross');
	};
	this.gross = function(){
		return _gross;
	}
}