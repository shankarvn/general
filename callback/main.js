//

function slow(callback) {
    setTimeout(function(){
        if (Math.random() > 0.5) {
            return callback("Error 417",null)
        }
        callback(null, {id:123})
    },500);
}

function exec(fn){

	function Deferred(){
		this.doneCbk = null;
		this.failCbk = null;
		this.done = function(successFcn){
			this.doneCbk = successFcn;
			return this;
		}
		this.fail = function(failureFcn){
			this.failCbk = failureFcn;
			return this;
		}
	}

	var deferred = new Deferred();
	fn(function(err, val){
		if (val){
			deferred.doneCbk(val);
		}
		else{
			deferred.failCbk(err);
		}
	})
	return deferred;
}

exec(slow).done(function(data){
    console.log(data);
}).fail(function(err){
    console.log("Error: " + err);
})
