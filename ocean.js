(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.נird = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.8)").ss(5.9,1,1).p("AhuDbQgCAGAAAEAkxjkQDzCogrD6QgCAPgDAOAEygaQkvgehhDoQgJAVgHAW");
	this.shape.setTransform(30.625,22.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(0,0,0,0.8)").ss(5.9,1,1).p("AhDCmQgBAFgBAFAk2ivQEkA9grD7QgDAOgDAPAE3ARQkIh+hhDnQgJAWgIAW");
	this.shape_1.setTransform(26.275,28.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(0,0,0,0.8)").ss(5.9,1,1).p("AFZAWQkIi4hhDnQgJAWgIAWAlYhvQFng4gqD7QgDAOgDAPQgBAFgBAF");
	this.shape_2.setTransform(22.875,33.5983);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("rgba(0,0,0,0.8)").ss(5.9,1,1).p("AE3ARQkIh+hhDnQgJAWgIAWAk2ivQEkA9grD7QgDAOgDAPQgBAFgBAF");
	this.shape_3.setTransform(26.275,28.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},3).to({state:[{t:this.shape_2}]},3).to({state:[{t:this.shape_3}]},3).to({state:[{t:this.shape_2}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.6,-2.9,78.8,51.699999999999996);


(lib.wraph = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EgoygSjIgqjaMBLRgE/IBYG4IBrIbICAKBIAeCaI0qDEIhKAAAaZWnIB1AAEAoJAEyIBRGUIASBcIgyAAIhKAcIgQAAQgPAFgEAEIhDAQIhVAAIAAANEAqAAODIoyA3IhOASEApsAMiIAUBhIAzEDIBxI2MgsugAJIJVhCEAnWAAyIAzEAEgopgRxIgJgyIAAAAID3AAEgo0gShIALAwIAmCnIAgCPIAAABIAPBHICjAAEgoygSjIgCACEgncgLzIAIAAEgq4gLgIAAABIDcgTIAIgBIBCE5ICEJ5MBLGgEnEgrAgLgIhjnAIC9jhIAyDgEgjdAGoIAEAVIAeCMIAAABIBfGgIAnCoIAYBqIDqgpEgk7AGmIAAgvIArAAIAzAxIgxjpEgkXAHIIAAgLIA+AAEgkZASnIBIAAIB5gVIAjAAIGugQA/FatIjgAQIhgm5IC8AAIAsgIIAkCcIA/EUIgLABIe7AGEgkFAUEIgUhdImn+GA44jPIUsAAAmo0+IQTg9EgoDgPKMBLQgE6EghcAPqMBK2gEkEgi7AJJMBLEgEXA/5WYMBKsgESEgmSgG6MBLKgEv");
	this.shape.setTransform(285.175,173.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#663333").s().p("ABpRnIC8AAIAtgIIgtAIIi8AAIgUhdIBIAAIB5gWIAjAAIAZBrIAkCcIA+ETIgLABIjfAQgABpRngABVQKImm+GIAAgBIhjnAIC9jhIAzDgIALAwIAlCnIAhCPIAAABIAOBGIgIABIjgATIAAABIAEgBIAAABIDcgTIAIgBIBDE5ICCJ5IAyDpIADAVIg+AAIAAAKIAAgKIA+AAIAeCMIAAABIBfGgIAnCnIgjAAIh5AWgABeDZIA0AyIg0gyIgrAAIAAAwIAAgwgABVQKg");
	this.shape_1.setTransform(43.65,188.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#846538").s().p("Ahua0IJVhDIpVBDI+7gHIAMgBIg/kUMBKsgERMhKsAERIgkibIDqgqIjqAqIgZhrIGvgQImvAQIgmioMBK1gEkIATBcIgzAAIhJAcIgQAAQgPAFgFAEIhCAQIhWAAIAAANIAAgNIBWAAIBCgQQAFgEAPgFIAQAAIBJgcIAzAAIATBhIA0EEIBwI2gAarWnIh2AAgAfqO6IhOASIBOgSIIyg3gEgkfAJKIAAAAIgdiNIgEgVIgxjpMBLFgEnIAfCaI0rDEIhKAAIBKAAIUrjEIAzEAMhLFAEYMBLFgEYIBQGUMhK1AEkgEAoJAMigEgn1gG5MBLKgEwMhLKAEwIhDk5IgIAAIAAAAIAIgBIgOhHIAAgBIghiPMBLQgE6MhLQAE6IglimIgJgyIAAgBIgqjaMBLQgE/IBYG4IBsIbIB/KBMhLFAEngAlvjPI0tAAgEgmUgLzIikAAgEgmfgSjIj2AAgAoM09IQUg+g");
	this.shape_2.setTransform(295.125,173.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-0.2,572.4,346.9);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF6600").ss(0.1,1,1).p("AjvClQGWgRBJk4");
	this.shape.setTransform(122,139.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFF66").ss(7.6,1,1).p("AOTAAQAAF7kMEMQkMEMl7AAQl6AAkMkMQkMkMAAl7QAAl6EMkMQEMkMF6AAQF7AAEMEMQEMEMAAF6g");
	this.shape_1.setTransform(91.5,91.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC00").s().p("AqGKHQkMkMAAl7QAAl6EMkMQEMkMF6AAQF7AAEMEMQEMEMAAF6QAAF7kMEMQkMEMl7AAQl6AAkMkMgABBKGQGXgRBJk6QhJE6mXARg");
	this.shape_2.setTransform(91.5,91.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-3.7,-3.7,190.5,190.5), null);


(lib.sun_keren_gr = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(255,153,0,0.6)").ss(3,1,1).p("AE0y5IEOjIAGDDmIDmDcAJCjvIO/D5AHKgnIIcH9AJ+qdIGFiMAj7JEICMEEAodKKIEiM0ArbJEIAAGuAuFI0IjcM2ACAH2IJYGkA0lF0IlJKwAxeHAIh/HaAJMv7IQjnC");
	this.shape.setTransform(164.725,147);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(255,153,2,0.604)").ss(3,1,1).p("AE0y5IEOjIAGDDmIDmDcAHKgnIIcH9AJCjvIO/D5AJ+qdIGFiMAj7JEICMEEArbPyIAAmuAodKKIEiM0AxhVqIDcs2A5uQkIFJqwAzdOaIB/naACAH2IJYGkAJMv7IQjnC");
	this.shape_1.setTransform(164.725,147);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(255,153,5,0.608)").ss(3,1,1).p("AE0y5IEOjIAGDDmIDmDcAHKgnIIcH9AJCjvIO/D5AJ+qdIGFiMAj7JEICMEEArbPyIAAmuAodKKIEiM0AxhVqIDcs2A5uQkIFJqwAzdOaIB/naACAH2IJYGkAJMv7IQjnC");
	this.shape_2.setTransform(164.725,147);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("rgba(255,153,7,0.616)").ss(3,1,1).p("AE0y5IEOjIAGDDmIDmDcAHKgnIIcH9AJCjvIO/D5AJ+qdIGFiMAj7JEICMEEArbPyIAAmuAodKKIEiM0AxhVqIDcs2A5uQkIFJqwAzdOaIB/naACAH2IJYGkAJMv7IQjnC");
	this.shape_3.setTransform(164.725,147);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("rgba(255,153,9,0.62)").ss(3,1,1).p("AE0y5IEOjIAGDDmIDmDcAHKgnIIcH9AJCjvIO/D5AJ+qdIGFiMAj7JEICMEEArbPyIAAmuAodKKIEiM0AxhVqIDcs2A5uQkIFJqwAzdOaIB/naACAH2IJYGkAJMv7IQjnC");
	this.shape_4.setTransform(164.725,147);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("rgba(255,153,12,0.624)").ss(3,1,1).p("AE0y5IEOjIAGDDmIDmDcAHKgnIIcH9AJCjvIO/D5AJ+qdIGFiMAj7JEICMEEArbPyIAAmuAodKKIEiM0AxhVqIDcs2A5uQkIFJqwAzdOaIB/naACAH2IJYGkAJMv7IQjnC");
	this.shape_5.setTransform(164.725,147);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(255,153,14,0.627)").ss(3,1,1).p("AE0y5IEOjIAGDDmIDmDcAHKgnIIcH9AJCjvIO/D5AJ+qdIGFiMAj7JEICMEEArbPyIAAmuAodKKIEiM0AxhVqIDcs2A5uQkIFJqwAzdOaIB/naACAH2IJYGkAJMv7IQjnC");
	this.shape_6.setTransform(164.725,147);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("rgba(255,153,17,0.631)").ss(3,1,1).p("AE0y5IEOjIAGDDmIDmDcAHKgnIIcH9AJCjvIO/D5AJ+qdIGFiMAj7JEICMEEArbPyIAAmuAodKKIEiM0AxhVqIDcs2A5uQkIFJqwAzdOaIB/naACAH2IJYGkAJMv7IQjnC");
	this.shape_7.setTransform(164.725,147);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("rgba(255,153,19,0.635)").ss(3,1,1).p("AE0y5IEOjIAGDDmIDmDcAHKgnIIcH9AJCjvIO/D5AJ+qdIGFiMAj7JEICMEEArbPyIAAmuAodKKIEiM0AxhVqIDcs2A5uQkIFJqwAzdOaIB/naACAH2IJYGkAJMv7IQjnC");
	this.shape_8.setTransform(164.725,147);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("rgba(255,153,21,0.643)").ss(3,1,1).p("AE0y5IEOjIAGDDmIDmDcAHKgnIIcH9AJCjvIO/D5AJ+qdIGFiMAj7JEICMEEArbPyIAAmuAodKKIEiM0AxhVqIDcs2A5uQkIFJqwAzdOaIB/naACAH2IJYGkAJMv7IQjnC");
	this.shape_9.setTransform(164.725,147);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("rgba(255,153,24,0.647)").ss(3,1,1).p("AE0y5IEOjIAGDDmIDmDcAHKgnIIcH9AJCjvIO/D5AJ+qdIGFiMAj7JEICMEEArbPyIAAmuAodKKIEiM0AxhVqIDcs2A5uQkIFJqwAzdOaIB/naACAH2IJYGkAJMv7IQjnC");
	this.shape_10.setTransform(164.725,147);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("rgba(255,153,26,0.651)").ss(3,1,1).p("AE0y5IEOjIAGDDmIDmDcAHKgnIIcH9AJCjvIO/D5AJ+qdIGFiMAj7JEICMEEArbPyIAAmuAodKKIEiM0AxhVqIDcs2A5uQkIFJqwAzdOaIB/naACAH2IJYGkAJMv7IQjnC");
	this.shape_11.setTransform(164.725,147);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("rgba(255,153,28,0.655)").ss(3,1,1).p("AE0y5IEOjIAGDDmIDmDcAHKgnIIcH9AJCjvIO/D5AJ+qdIGFiMAj7JEICMEEArbPyIAAmuAodKKIEiM0AxhVqIDcs2A5uQkIFJqwAzdOaIB/naACAH2IJYGkAJMv7IQjnC");
	this.shape_12.setTransform(164.725,147);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("rgba(255,153,31,0.659)").ss(3,1,1).p("AE0y5IEOjIAGDDmIDmDcAHKgnIIcH9AJCjvIO/D5AJ+qdIGFiMAj7JEICMEEArbPyIAAmuAodKKIEiM0AxhVqIDcs2A5uQkIFJqwAzdOaIB/naACAH2IJYGkAJMv7IQjnC");
	this.shape_13.setTransform(164.725,147);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("rgba(255,153,33,0.667)").ss(3,1,1).p("AE0y5IEOjIAGDDmIDmDcAHKgnIIcH9AJCjvIO/D5AJ+qdIGFiMAj7JEICMEEArbPyIAAmuAodKKIEiM0AxhVqIDcs2A5uQkIFJqwAzdOaIB/naACAH2IJYGkAJMv7IQjnC");
	this.shape_14.setTransform(164.725,147);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("rgba(255,153,36,0.671)").ss(3,1,1).p("AE0y5IEOjIAGDDmIDmDcAHKgnIIcH9AJCjvIO/D5AJ+qdIGFiMAj7JEICMEEArbPyIAAmuAodKKIEiM0AxhVqIDcs2A5uQkIFJqwAzdOaIB/naACAH2IJYGkAJMv7IQjnC");
	this.shape_15.setTransform(164.725,147);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("rgba(255,153,38,0.675)").ss(3,1,1).p("AE0y5IEOjIAGDDmIDmDcAHKgnIIcH9AJCjvIO/D5AJ+qdIGFiMAj7JEICMEEArbPyIAAmuAodKKIEiM0AxhVqIDcs2A5uQkIFJqwAzdOaIB/naACAH2IJYGkAJMv7IQjnC");
	this.shape_16.setTransform(164.725,147);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("rgba(255,153,40,0.678)").ss(3,1,1).p("AE0y5IEOjIAGDDmIDmDcAHKgnIIcH9AJCjvIO/D5AJ+qdIGFiMAj7JEICMEEArbPyIAAmuAodKKIEiM0AxhVqIDcs2A5uQkIFJqwAzdOaIB/naACAH2IJYGkAJMv7IQjnC");
	this.shape_17.setTransform(164.725,147);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("rgba(255,153,43,0.682)").ss(3,1,1).p("AE0y5IEOjIAGDDmIDmDcAHKgnIIcH9AJCjvIO/D5AJ+qdIGFiMAj7JEICMEEArbPyIAAmuAodKKIEiM0AxhVqIDcs2A5uQkIFJqwAzdOaIB/naACAH2IJYGkAJMv7IQjnC");
	this.shape_18.setTransform(164.725,147);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("rgba(255,153,45,0.69)").ss(3,1,1).p("AE0y5IEOjIAGDDmIDmDcAHKgnIIcH9AJCjvIO/D5AJ+qdIGFiMAj7JEICMEEArbPyIAAmuAodKKIEiM0AxhVqIDcs2A5uQkIFJqwAzdOaIB/naACAH2IJYGkAJMv7IQjnC");
	this.shape_19.setTransform(164.725,147);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("rgba(255,153,47,0.694)").ss(3,1,1).p("AE0y5IEOjIAGDDmIDmDcAHKgnIIcH9AJCjvIO/D5AJ+qdIGFiMAj7JEICMEEArbPyIAAmuAodKKIEiM0AxhVqIDcs2A5uQkIFJqwAzdOaIB/naACAH2IJYGkAJMv7IQjnC");
	this.shape_20.setTransform(164.725,147);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("rgba(255,153,50,0.698)").ss(3,1,1).p("AE0y5IEOjIAGDDmIDmDcAHKgnIIcH9AJCjvIO/D5AJ+qdIGFiMAj7JEICMEEArbPyIAAmuAodKKIEiM0AxhVqIDcs2A5uQkIFJqwAzdOaIB/naACAH2IJYGkAJMv7IQjnC");
	this.shape_21.setTransform(164.725,147);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("rgba(255,153,52,0.702)").ss(3,1,1).p("AE0y5IEOjIAGDDmIDmDcAHKgnIIcH9AJCjvIO/D5AJ+qdIGFiMAj7JEICMEEArbPyIAAmuAodKKIEiM0AxhVqIDcs2A5uQkIFJqwAzdOaIB/naACAH2IJYGkAJMv7IQjnC");
	this.shape_22.setTransform(164.725,147);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("rgba(255,153,55,0.706)").ss(3,1,1).p("AE0y5IEOjIAGDDmIDmDcAHKgnIIcH9AJCjvIO/D5AJ+qdIGFiMAj7JEICMEEArbPyIAAmuAodKKIEiM0AxhVqIDcs2A5uQkIFJqwAzdOaIB/naACAH2IJYGkAJMv7IQjnC");
	this.shape_23.setTransform(164.725,147);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("rgba(255,153,57,0.71)").ss(3,1,1).p("AE0y5IEOjIAGDDmIDmDcAHKgnIIcH9AJCjvIO/D5AJ+qdIGFiMAj7JEICMEEArbPyIAAmuAodKKIEiM0AxhVqIDcs2A5uQkIFJqwAzdOaIB/naACAH2IJYGkAJMv7IQjnC");
	this.shape_24.setTransform(164.725,147);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("rgba(255,153,59,0.718)").ss(3,1,1).p("AE0y5IEOjIAGDDmIDmDcAHKgnIIcH9AJCjvIO/D5AJ+qdIGFiMAj7JEICMEEArbPyIAAmuAodKKIEiM0AxhVqIDcs2A5uQkIFJqwAzdOaIB/naACAH2IJYGkAJMv7IQjnC");
	this.shape_25.setTransform(164.725,147);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("rgba(255,153,62,0.722)").ss(3,1,1).p("AE0y5IEOjIAGDDmIDmDcAHKgnIIcH9AJCjvIO/D5AJ+qdIGFiMAj7JEICMEEArbPyIAAmuAodKKIEiM0AxhVqIDcs2A5uQkIFJqwAzdOaIB/naACAH2IJYGkAJMv7IQjnC");
	this.shape_26.setTransform(164.725,147);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("rgba(255,153,64,0.725)").ss(3,1,1).p("AE0y5IEOjIAGDDmIDmDcAHKgnIIcH9AJCjvIO/D5AJ+qdIGFiMAj7JEICMEEArbPyIAAmuAodKKIEiM0AxhVqIDcs2A5uQkIFJqwAzdOaIB/naACAH2IJYGkAJMv7IQjnC");
	this.shape_27.setTransform(164.725,147);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("rgba(255,153,66,0.729)").ss(3,1,1).p("AE0y5IEOjIAGDDmIDmDcAHKgnIIcH9AJCjvIO/D5AJ+qdIGFiMAj7JEICMEEArbPyIAAmuAodKKIEiM0AxhVqIDcs2A5uQkIFJqwAzdOaIB/naACAH2IJYGkAJMv7IQjnC");
	this.shape_28.setTransform(164.725,147);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("rgba(255,153,69,0.733)").ss(3,1,1).p("AE0y5IEOjIAGDDmIDmDcAHKgnIIcH9AJCjvIO/D5AJ+qdIGFiMAj7JEICMEEArbPyIAAmuAodKKIEiM0AxhVqIDcs2A5uQkIFJqwAzdOaIB/naACAH2IJYGkAJMv7IQjnC");
	this.shape_29.setTransform(164.725,147);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("rgba(255,153,71,0.741)").ss(3,1,1).p("AE0y5IEOjIAGDDmIDmDcAHKgnIIcH9AJCjvIO/D5AJ+qdIGFiMAj7JEICMEEArbPyIAAmuAodKKIEiM0AxhVqIDcs2A5uQkIFJqwAzdOaIB/naACAH2IJYGkAJMv7IQjnC");
	this.shape_30.setTransform(164.725,147);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("rgba(255,153,74,0.745)").ss(3,1,1).p("AE0y5IEOjIAGDDmIDmDcAHKgnIIcH9AJCjvIO/D5AJ+qdIGFiMAj7JEICMEEArbPyIAAmuAodKKIEiM0AxhVqIDcs2A5uQkIFJqwAzdOaIB/naACAH2IJYGkAJMv7IQjnC");
	this.shape_31.setTransform(164.725,147);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("rgba(255,153,76,0.749)").ss(3,1,1).p("AE0y5IEOjIAGDDmIDmDcAHKgnIIcH9AJCjvIO/D5AJ+qdIGFiMAj7JEICMEEArbPyIAAmuAodKKIEiM0AxhVqIDcs2A5uQkIFJqwAzdOaIB/naACAH2IJYGkAJMv7IQjnC");
	this.shape_32.setTransform(164.725,147);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("rgba(255,153,78,0.753)").ss(3,1,1).p("AE0y5IEOjIAGDDmIDmDcAHKgnIIcH9AJCjvIO/D5AJ+qdIGFiMAj7JEICMEEArbPyIAAmuAodKKIEiM0AxhVqIDcs2A5uQkIFJqwAzdOaIB/naACAH2IJYGkAJMv7IQjnC");
	this.shape_33.setTransform(164.725,147);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("rgba(255,153,81,0.757)").ss(3,1,1).p("AE0y5IEOjIAGDDmIDmDcAHKgnIIcH9AJCjvIO/D5AJ+qdIGFiMAj7JEICMEEArbPyIAAmuAodKKIEiM0AxhVqIDcs2A5uQkIFJqwAzdOaIB/naACAH2IJYGkAJMv7IQjnC");
	this.shape_34.setTransform(164.725,147);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("rgba(255,153,83,0.765)").ss(3,1,1).p("AE0y5IEOjIAGDDmIDmDcAHKgnIIcH9AJCjvIO/D5AJ+qdIGFiMAj7JEICMEEArbPyIAAmuAodKKIEiM0AxhVqIDcs2A5uQkIFJqwAzdOaIB/naACAH2IJYGkAJMv7IQjnC");
	this.shape_35.setTransform(164.725,147);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("rgba(255,153,85,0.769)").ss(3,1,1).p("AE0y5IEOjIAGDDmIDmDcAHKgnIIcH9AJCjvIO/D5AJ+qdIGFiMAj7JEICMEEArbPyIAAmuAodKKIEiM0AxhVqIDcs2A5uQkIFJqwAzdOaIB/naACAH2IJYGkAJMv7IQjnC");
	this.shape_36.setTransform(164.725,147);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("rgba(255,153,88,0.773)").ss(3,1,1).p("AE0y5IEOjIAGDDmIDmDcAHKgnIIcH9AJCjvIO/D5AJ+qdIGFiMAj7JEICMEEArbPyIAAmuAodKKIEiM0AxhVqIDcs2A5uQkIFJqwAzdOaIB/naACAH2IJYGkAJMv7IQjnC");
	this.shape_37.setTransform(164.725,147);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("rgba(255,153,90,0.776)").ss(3,1,1).p("AE0y5IEOjIAGDDmIDmDcAHKgnIIcH9AJCjvIO/D5AJ+qdIGFiMAj7JEICMEEArbPyIAAmuAodKKIEiM0AxhVqIDcs2A5uQkIFJqwAzdOaIB/naACAH2IJYGkAJMv7IQjnC");
	this.shape_38.setTransform(164.725,147);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("rgba(255,153,93,0.78)").ss(3,1,1).p("AE0y5IEOjIAGDDmIDmDcAHKgnIIcH9AJCjvIO/D5AJ+qdIGFiMAj7JEICMEEArbPyIAAmuAodKKIEiM0AxhVqIDcs2A5uQkIFJqwAzdOaIB/naACAH2IJYGkAJMv7IQjnC");
	this.shape_39.setTransform(164.725,147);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("rgba(255,153,95,0.784)").ss(3,1,1).p("AE0y5IEOjIAGDDmIDmDcAHKgnIIcH9AJCjvIO/D5AJ+qdIGFiMAj7JEICMEEArbPyIAAmuAodKKIEiM0AxhVqIDcs2A5uQkIFJqwAzdOaIB/naACAH2IJYGkAJMv7IQjnC");
	this.shape_40.setTransform(164.725,147);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("rgba(255,153,97,0.792)").ss(3,1,1).p("AE0y5IEOjIAGDDmIDmDcAHKgnIIcH9AJCjvIO/D5AJ+qdIGFiMAj7JEICMEEArbPyIAAmuAodKKIEiM0AxhVqIDcs2A5uQkIFJqwAzdOaIB/naACAH2IJYGkAJMv7IQjnC");
	this.shape_41.setTransform(164.725,147);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("rgba(255,153,100,0.796)").ss(3,1,1).p("AE0y5IEOjIAGDDmIDmDcAHKgnIIcH9AJCjvIO/D5AJ+qdIGFiMAj7JEICMEEArbPyIAAmuAodKKIEiM0AxhVqIDcs2A5uQkIFJqwAzdOaIB/naACAH2IJYGkAJMv7IQjnC");
	this.shape_42.setTransform(164.725,147);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("rgba(255,153,102,0.8)").ss(3,1,1).p("AE0y5IEOjIAGDDmIDmDcAJ+qdIGFiMAHKgnIIcH9AJCjvIO/D5Aj7JEICMEEArbJEIAAGuAodKKIEiM0AuFI0IjcM2AxeHAIh/HaA0lF0IlJKwACAH2IJYGkAJMv7IQjnC");
	this.shape_43.setTransform(164.725,147);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("rgba(255,153,99,0.796)").ss(3,1,1).p("AE0y5IEOjIAGDDmIDmDcAHKgnIIcH9AJCjvIO/D5AJ+qdIGFiMAj7JEICMEEArbPyIAAmuAodKKIEiM0AxhVqIDcs2A5uQkIFJqwAzdOaIB/naACAH2IJYGkAJMv7IQjnC");
	this.shape_44.setTransform(164.725,147);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("rgba(255,153,97,0.788)").ss(3,1,1).p("AE0y5IEOjIAGDDmIDmDcAHKgnIIcH9AJCjvIO/D5AJ+qdIGFiMAj7JEICMEEArbPyIAAmuAodKKIEiM0AxhVqIDcs2A5uQkIFJqwAzdOaIB/naACAH2IJYGkAJMv7IQjnC");
	this.shape_45.setTransform(164.725,147);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("rgba(255,153,94,0.784)").ss(3,1,1).p("AE0y5IEOjIAGDDmIDmDcAHKgnIIcH9AJCjvIO/D5AJ+qdIGFiMAj7JEICMEEArbPyIAAmuAodKKIEiM0AxhVqIDcs2A5uQkIFJqwAzdOaIB/naACAH2IJYGkAJMv7IQjnC");
	this.shape_46.setTransform(164.725,147);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("rgba(255,153,91,0.78)").ss(3,1,1).p("AE0y5IEOjIAGDDmIDmDcAHKgnIIcH9AJCjvIO/D5AJ+qdIGFiMAj7JEICMEEArbPyIAAmuAodKKIEiM0AxhVqIDcs2A5uQkIFJqwAzdOaIB/naACAH2IJYGkAJMv7IQjnC");
	this.shape_47.setTransform(164.725,147);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("rgba(255,153,89,0.773)").ss(3,1,1).p("AE0y5IEOjIAGDDmIDmDcAHKgnIIcH9AJCjvIO/D5AJ+qdIGFiMAj7JEICMEEArbPyIAAmuAodKKIEiM0AxhVqIDcs2A5uQkIFJqwAzdOaIB/naACAH2IJYGkAJMv7IQjnC");
	this.shape_48.setTransform(164.725,147);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("rgba(255,153,86,0.769)").ss(3,1,1).p("AE0y5IEOjIAGDDmIDmDcAHKgnIIcH9AJCjvIO/D5AJ+qdIGFiMAj7JEICMEEArbPyIAAmuAodKKIEiM0AxhVqIDcs2A5uQkIFJqwAzdOaIB/naACAH2IJYGkAJMv7IQjnC");
	this.shape_49.setTransform(164.725,147);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("rgba(255,153,75,0.749)").ss(3,1,1).p("AE0y5IEOjIAGDDmIDmDcAHKgnIIcH9AJCjvIO/D5AJ+qdIGFiMAj7JEICMEEArbPyIAAmuAodKKIEiM0AxhVqIDcs2A5uQkIFJqwAzdOaIB/naACAH2IJYGkAJMv7IQjnC");
	this.shape_50.setTransform(164.725,147);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("rgba(255,153,72,0.741)").ss(3,1,1).p("AE0y5IEOjIAGDDmIDmDcAHKgnIIcH9AJCjvIO/D5AJ+qdIGFiMAj7JEICMEEArbPyIAAmuAodKKIEiM0AxhVqIDcs2A5uQkIFJqwAzdOaIB/naACAH2IJYGkAJMv7IQjnC");
	this.shape_51.setTransform(164.725,147);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("rgba(255,153,70,0.737)").ss(3,1,1).p("AE0y5IEOjIAGDDmIDmDcAHKgnIIcH9AJCjvIO/D5AJ+qdIGFiMAj7JEICMEEArbPyIAAmuAodKKIEiM0AxhVqIDcs2A5uQkIFJqwAzdOaIB/naACAH2IJYGkAJMv7IQjnC");
	this.shape_52.setTransform(164.725,147);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("rgba(255,153,67,0.733)").ss(3,1,1).p("AE0y5IEOjIAGDDmIDmDcAHKgnIIcH9AJCjvIO/D5AJ+qdIGFiMAj7JEICMEEArbPyIAAmuAodKKIEiM0AxhVqIDcs2A5uQkIFJqwAzdOaIB/naACAH2IJYGkAJMv7IQjnC");
	this.shape_53.setTransform(164.725,147);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("rgba(255,153,56,0.71)").ss(3,1,1).p("AE0y5IEOjIAGDDmIDmDcAHKgnIIcH9AJCjvIO/D5AJ+qdIGFiMAj7JEICMEEArbPyIAAmuAodKKIEiM0AxhVqIDcs2A5uQkIFJqwAzdOaIB/naACAH2IJYGkAJMv7IQjnC");
	this.shape_54.setTransform(164.725,147);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("rgba(255,153,54,0.706)").ss(3,1,1).p("AE0y5IEOjIAGDDmIDmDcAHKgnIIcH9AJCjvIO/D5AJ+qdIGFiMAj7JEICMEEArbPyIAAmuAodKKIEiM0AxhVqIDcs2A5uQkIFJqwAzdOaIB/naACAH2IJYGkAJMv7IQjnC");
	this.shape_55.setTransform(164.725,147);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("rgba(255,153,51,0.702)").ss(3,1,1).p("AE0y5IEOjIAGDDmIDmDcAHKgnIIcH9AJCjvIO/D5AJ+qdIGFiMAj7JEICMEEArbPyIAAmuAodKKIEiM0AxhVqIDcs2A5uQkIFJqwAzdOaIB/naACAH2IJYGkAJMv7IQjnC");
	this.shape_56.setTransform(164.725,147);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("rgba(255,153,48,0.694)").ss(3,1,1).p("AE0y5IEOjIAGDDmIDmDcAHKgnIIcH9AJCjvIO/D5AJ+qdIGFiMAj7JEICMEEArbPyIAAmuAodKKIEiM0AxhVqIDcs2A5uQkIFJqwAzdOaIB/naACAH2IJYGkAJMv7IQjnC");
	this.shape_57.setTransform(164.725,147);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("rgba(255,153,46,0.69)").ss(3,1,1).p("AE0y5IEOjIAGDDmIDmDcAHKgnIIcH9AJCjvIO/D5AJ+qdIGFiMAj7JEICMEEArbPyIAAmuAodKKIEiM0AxhVqIDcs2A5uQkIFJqwAzdOaIB/naACAH2IJYGkAJMv7IQjnC");
	this.shape_58.setTransform(164.725,147);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("rgba(255,153,35,0.667)").ss(3,1,1).p("AE0y5IEOjIAGDDmIDmDcAHKgnIIcH9AJCjvIO/D5AJ+qdIGFiMAj7JEICMEEArbPyIAAmuAodKKIEiM0AxhVqIDcs2A5uQkIFJqwAzdOaIB/naACAH2IJYGkAJMv7IQjnC");
	this.shape_59.setTransform(164.725,147);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("rgba(255,153,32,0.663)").ss(3,1,1).p("AE0y5IEOjIAGDDmIDmDcAHKgnIIcH9AJCjvIO/D5AJ+qdIGFiMAj7JEICMEEArbPyIAAmuAodKKIEiM0AxhVqIDcs2A5uQkIFJqwAzdOaIB/naACAH2IJYGkAJMv7IQjnC");
	this.shape_60.setTransform(164.725,147);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("rgba(255,153,30,0.659)").ss(3,1,1).p("AE0y5IEOjIAGDDmIDmDcAHKgnIIcH9AJCjvIO/D5AJ+qdIGFiMAj7JEICMEEArbPyIAAmuAodKKIEiM0AxhVqIDcs2A5uQkIFJqwAzdOaIB/naACAH2IJYGkAJMv7IQjnC");
	this.shape_61.setTransform(164.725,147);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("rgba(255,153,27,0.651)").ss(3,1,1).p("AE0y5IEOjIAGDDmIDmDcAHKgnIIcH9AJCjvIO/D5AJ+qdIGFiMAj7JEICMEEArbPyIAAmuAodKKIEiM0AxhVqIDcs2A5uQkIFJqwAzdOaIB/naACAH2IJYGkAJMv7IQjnC");
	this.shape_62.setTransform(164.725,147);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("rgba(255,153,16,0.631)").ss(3,1,1).p("AE0y5IEOjIAGDDmIDmDcAHKgnIIcH9AJCjvIO/D5AJ+qdIGFiMAj7JEICMEEArbPyIAAmuAodKKIEiM0AxhVqIDcs2A5uQkIFJqwAzdOaIB/naACAH2IJYGkAJMv7IQjnC");
	this.shape_63.setTransform(164.725,147);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("rgba(255,153,13,0.627)").ss(3,1,1).p("AE0y5IEOjIAGDDmIDmDcAHKgnIIcH9AJCjvIO/D5AJ+qdIGFiMAj7JEICMEEArbPyIAAmuAodKKIEiM0AxhVqIDcs2A5uQkIFJqwAzdOaIB/naACAH2IJYGkAJMv7IQjnC");
	this.shape_64.setTransform(164.725,147);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("rgba(255,153,11,0.62)").ss(3,1,1).p("AE0y5IEOjIAGDDmIDmDcAHKgnIIcH9AJCjvIO/D5AJ+qdIGFiMAj7JEICMEEArbPyIAAmuAodKKIEiM0AxhVqIDcs2A5uQkIFJqwAzdOaIB/naACAH2IJYGkAJMv7IQjnC");
	this.shape_65.setTransform(164.725,147);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("rgba(255,153,8,0.616)").ss(3,1,1).p("AE0y5IEOjIAGDDmIDmDcAHKgnIIcH9AJCjvIO/D5AJ+qdIGFiMAj7JEICMEEArbPyIAAmuAodKKIEiM0AxhVqIDcs2A5uQkIFJqwAzdOaIB/naACAH2IJYGkAJMv7IQjnC");
	this.shape_66.setTransform(164.725,147);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("rgba(255,153,5,0.612)").ss(3,1,1).p("AE0y5IEOjIAGDDmIDmDcAHKgnIIcH9AJCjvIO/D5AJ+qdIGFiMAj7JEICMEEArbPyIAAmuAodKKIEiM0AxhVqIDcs2A5uQkIFJqwAzdOaIB/naACAH2IJYGkAJMv7IQjnC");
	this.shape_67.setTransform(164.725,147);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("rgba(255,153,3,0.604)").ss(3,1,1).p("AE0y5IEOjIAGDDmIDmDcAHKgnIIcH9AJCjvIO/D5AJ+qdIGFiMAj7JEICMEEArbPyIAAmuAodKKIEiM0AxhVqIDcs2A5uQkIFJqwAzdOaIB/naACAH2IJYGkAJMv7IQjnC");
	this.shape_68.setTransform(164.725,147);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("rgba(255,153,0,0.6)").ss(3,1,1).p("AE0y5IEOjIAGDDmIDmDcAJ+qdIGFiMAHKgnIIcH9AJCjvIO/D5Aj7JEICMEEArbJEIAAGuAodKKIEiM0AuFI0IjcM2AxeHAIh/HaA0lF0IlJKwACAH2IJYGkAJMv7IQjnC");
	this.shape_69.setTransform(164.725,147);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,332.5,297);


(lib.Scene_1_שמיים = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// שמיים
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(175,255,255,0.8)").s().p("EhkLAh1MAAAhDpMDIWAAAMAAABDpg");
	this.shape.setTransform(640.2,219.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(600));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.rod_gr = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("ASbTUMAEVgjTQAAhRggAfIhCB6IAUiEQqOAGqeFqQmrDilMEqQhJAwgrAwQgiBYgsAHQjpB8hrCuQABAxg9AHIlaGGIhahIQDfkGD1jQIFokxQDDi7DnilQE2jiFhimQLTlNIZA/IAAh1QAjgKATA6IAAA2IBOg+QA/gNghArIgwA0ICuA6QATAlgxgJQhigmhygGQhWKVi+Zt");
	this.shape.setTransform(173.5654,123.6576);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#660033").s().p("ASbTUMAEVgjTQAAhRggAfIhCB6IAUiEQqOAGqeFqQmrDilMEqQhJAwgrAwQgiBYgsAHQjpB8hrCuQABAxg9AHIlaGGIhahIQDfkGD1jQIFokxQDDi7DnilQE2jiFhimQLTlNIZA/IAAh1QAjgKATA6IAAA2IBOg+QA/gNghArIgwA0ICuA6QATAlgxgJQhigmhygGQhWKVi+Ztg");
	this.shape_1.setTransform(173.5654,123.6576);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,349.2,249.3);


(lib.ocean_gr4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3399CC").s().p("Eh31AXdMAALghIQJ+pjJPiQQJQiRELAkQEMAkH+DFQH+DFFADVQFADVFEhGQFEhHIUkeQITkeG9gzQG9gzOOHCQOOHDR5q3QR5q4dQRyQM8F6LsqRQLsqRGVObMAAAAkEg");
	this.shape.setTransform(767.025,152.3338);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3399CC").s().p("Eh31AXbMAALghIQBThQBThFIBihOQAwglAxgiQA4gnA1gjIBTg0QA7gnA8gkQBEgpBCgiQBhgyBkgjQCTg4CSgnIAWgFQEKhEDSgSQCQgQBxgGQA6gDAxAEIAiADQEJAkH6DEQH6DDE+DTQE+DTFBhFQFChGIPkcQIQkcG5gyQG5gyOIG/QOGG/RxqxQRwqxdARpQM2F3LmqLQLmqMGSOUMAAAAkEMjvrAAAg");
	this.shape_1.setTransform(767.025,152.5189);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3399CC").s().p("Eh31AXaMAALghIQBYhUBXhGIBohPQAxgkA1ggIB0hGQAsgYArgbIB9hNQBIgrBFgiQBkgzBqgfQCagzCagsIAWgFQERhKDfgIQCXgNB1gLQA9gGAzAFIAhADQEIAkH2DBQH2DCE8DSQE7DRE/hEQE/hGILkZQILkZG2gyQG2gyOAG8QOAG7RnqrQRnqrcyRhQMvF0LgqFQLgqGGPOMMAAAAkFMjvrAAAg");
	this.shape_2.setTransform(767.025,152.6957);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3399CC").s().p("Eh31AXYMAALghIQBchZBbhGIBvhPQAzgkA5geIB5hCQAugWAugbICDhQQBLgtBJgiQBngyBxgbIFBhgIAWgGQEZhPDtABQCcgJB6gRQBAgIA1AFIAhADQEFAkHyDAQHyDAE6DQQE4DQE9hEQE8hFIHkXQIIkXGygxQGzgxN4G4QN5G4ReqkQRfqlcjRYQMoFxLbp/QLZqBGMOFMAAAAkFMjvrAAAg");
	this.shape_3.setTransform(767.025,152.8904);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3399CC").s().p("Eh31AXWMAALghIQBhhdBfhHIB1hPQA1gkA8gcICAg9QAwgUAwgcICJhSQBPgvBMgjQBqgyB3gXQClgrCqg1IAXgHQEghUD7ALQChgGCAgXQBCgLA2AGIAhADQEEAjHuC/QHuC/E3DOQE2DOE6hDQE6hEIDkUQIDkVGvgxQGvgwNxG0QNyG1RWqeQRVqfcURPQMiFvLVp6QLTp6GJN9MAAAAkFMjvrAAAg");
	this.shape_4.setTransform(767.025,153.0636);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3399CC").s().p("Eh31AXUMAALghIQBlhhBkhIIB7hPQA3gjBAgaICFg6QAzgSAygcICPhUQBTgxBPgjQBsgyB/gTQCrgoCxg5IAYgHQEnhZEIAUQCngDCFgcQBFgNA4AGIAhADQEBAjHrC9QHqC9E0DNQE0DME3hDQE4hDH/kSQH/kSGrgwQGsgwNqGxQNrGyRMqZQRMqYcGRHQMbFrLPp0QLOp1GFN3MAAAAkEMjvrAAAg");
	this.shape_5.setTransform(767.025,153.2327);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3399CC").s().p("Eh31AXUMAALghIQBqhmBohIICAhQQA5giBEgYICLg2QA2gQA1gdQBFgnBPgvQBXgzBSgjQBvgyCFgPQCxgkC5g+IAZgIQEuheEWAeQCsAACLghQBHgQA6AGIAgAEQEAAiHmC8QHmC7EyDLQExDLE1hCQE2hCH6kQQH7kQGogvQGpgwNiGuQNkGvRDqTQREqTb2Q/QMVFpLJpvQLIpvGCNvMAAAAkFMjvrAAAg");
	this.shape_6.setTransform(767.025,153.2932);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3399CC").s().p("Eh31AXTMAALghIQBvhqBrhJICHhQQA7giBIgWICRgyQA3gOA4gdQBHgoBTgxQBbg1BVgjQBygyCMgLQC3gfDAhEIAagIQE1hjEjAnQCzAECPgnQBKgSA8AHIAgADQD+AiHiC6QHiC6EvDJQEvDKEzhCQEyhCH3kNQH2kNGlgvQGlgvNcGrQNcGrQ7qNQQ6qMboQ1QMOFnLDppQLCpqF/NoMAAAAkFMjvrAAAg");
	this.shape_7.setTransform(767.025,153.3539);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3399CC").s().p("Eh31AXSMAALghIQBzhuBwhKICNhQQA9ghBMgUICWguQA6gMA6geQBKgoBWgzQBfg3BYgjQB1gyCSgHQC9gbDJhJIAZgIQE9hoExAwQC4AHCUgsQBMgVA/AHIAgAEQD7AiHeC4QHfC4EtDIQEsDIEwhBQEwhBHzkLQHykLGhguQGigvNUGnQNWGoQxqGQQyqHbYQuQMIFjK9pjQK8pkF8NhMAAAAkEMjvrAAAg");
	this.shape_8.setTransform(767.025,153.4125);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3399CC").s().p("Eh31AXSMAALghIQB4hzB0hKQBWgwA9ggQA/ghBPgSICdgqQA8gLA8gdQBMgpBag0QBjg6BbgjQB4gyCZgDQDDgYDQhNIAagIQFEhuE+A6QC+AKCagxQBOgYBAAIIAgADQD5AiHbC3QHaC3ErDGQEpDGEuhBQEuhAHukIQHukJGeguQGegtNNGjQNPGlQoqBQQpqAbKQlQMBFgK3pdQK2peF5NZMAAAAkFMjvrAAAg");
	this.shape_9.setTransform(767.025,153.475);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#3399CC").s().p("Eh31AXRMAALghIQB8h3B4hKQBbgxA/ggQBAggBUgRICiglQA+gJA/geQBOgpBfg2QBmg8BegjQB7gyCfABQDJgUDYhSIAbgJQFLhyFMBDQDDANCfg2QBRgaBCAIIAfADQD4AhHWC2QHXC1EoDEQEnDFErhAQEshAHqkFQHqkGGaguQGbgtNGGgQNIGhQfp6QQgp6a7QcQL6FeKxpYQKwpZF2NTMAAAAkEMjvrAAAg");
	this.shape_10.setTransform(767.025,153.5323);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3399CC").s().p("Eh31AXRMAALghIQCBh8B8hLQBfgxBBggQBCgfBXgPICpgiQBAgGBBgfQBQgoBjg5QBpg+BigjQB9gyCnAFQDOgQDghWIAbgKQFTh4FaBNQDIARClg8QBTgdBEAIIAfAEQD2AhHSC0QHSCzEmDDQElDDEog/QEphAHmkDQHmkDGXgtQGYgtM+GdQNBGeQWp1QQXpzasQTQL1FbKqpSQKrpTFyNLMAAAAkFMjvrAAAg");
	this.shape_11.setTransform(767.025,153.5885);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#3399CC").s().p("Eh31AXQMAALghIQCFiACBhLQBjgzBDgeQBEggBbgMQBggSBOgMQBDgEBDgfQBSgpBng7QBthABlgjQCAgyCtAIQDVgLDnhbIAcgLQFah9FnBXQDOATCqhBQBWgfBGAJIAfADQDzAhHPCyQHOCzEjDBQEjDAEmg+QEmg/HikAQHikCGTgsQGUgrM4GZQM5GaQOpvQQOptadQLQLuFYKlpMQKkpNFvNDMAAAAkFMjvrAAAg");
	this.shape_12.setTransform(767.025,153.65);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#3399CC").s().p("Eh31AXPMAALghIQCKiECFhMQBngzBFgfQBGgeBegLQBlgPBQgLQBFgCBFgfQBVgqBqg9QBxhBBogkQCDgyC0ANQDagIDvhgIAdgKQFhiCF1BgQDUAXCuhHQBZgiBIAJIAeAEQDyAgHKCxQHLCxEhC/QEfC/Ekg+QEkg9Hej/QHdj+GQgsQGRgrMwGVQMzGXQEpoQQFpnaOQCQLoFWKfpHQKepIFsM9MAAAAkEMjvrAAAg");
	this.shape_13.setTransform(767.025,153.7058);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#3399CC").s().p("Eh31AXPMAALghIQCOiJCJhNQBsg0BHgdQBHgeBjgJQBogNBSgJQBHgBBIgfQBXgqBug/QB1hDBrgkQCGgyC6ARQDhgED2hlIAegKQFoiHGCBpQDaAaC0hMQBbglBJAKIAfADQDvAhHHCvQHGCvEfC+QEdC9Ehg9QEig9HZj8QHaj8GMgsQGOgqMpGSQMrGUP7piQP8phaAP5QLhFTKZpBQKYpCFpM1MAAAAkFMjvrAAAg");
	this.shape_14.setTransform(767.025,153.7686);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#3399CC").s().p("Eh31AXOMAALghIQCTiNCNhNQBxg1BIgdQBJgdBmgHQBsgMBUgGQBKABBKggQBZgqByhBQB5hFBugkQCJgyDAAUQDnABD/hqIAdgLQFviMGRBzQDfAdC5hRQBegnBLAKIAeADQDuAgHCCuQHDCtEcC8QEbC8Eeg8QEfg9HWj5QHVj6GJgrQGKgqMiGPQMkGRPzpdQPzpbZxPxQLaFQKTo7QKSo9FmMvMAAAAkEMjvrAAAg");
	this.shape_15.setTransform(767.025,153.824);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#3399CC").s().p("Eh31AXOMAALghIQCXiRCShPQB1g1BKgdQBLgcBqgFQBvgKBXgFQBMAEBMggQBbgrB2hDQB9hHBxgkQCMgyDHAYQDtAFEGhvIAegLQF2iRGeB8QDlAgC+hWQBggqBOALIAeADQDrAfG/CtQG+CsEaC6QEYC6Ecg8QEdg8HRj3QHSj3GFgqQGGgpMcGLQMdGNPppWQPqpVZiPoQLUFOKNo2QKMo3FjMnMAAAAkFMjvrAAAg");
	this.shape_16.setTransform(767.025,153.894);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#3399CC").s().p("Eh31AXNMAALghIQCciVCVhPQB6g3BMgbQBNgcBtgEQB0gHBYgDQBPAFBOggQBdgrB6hFQCBhJB0gkQCOgyDOAcQDzAJEOh0IAfgLQF9iXGsCGQDqAjDEhbQBigtBQALIAdADQDqAgG6CrQG7CqEXC5QEWC4Eag7QEag7HNj1QHNj1GCgpQGDgpMUGIQMWGKPgpRQPipOZTPgQLNFKKHowQKHoxFfMgMAAAAkEMjvrAAAg");
	this.shape_17.setTransform(767.025,153.941);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#3399CC").s().p("Eh31AXNMAALghIQChiaCZhQQB+g3BOgbQBOgbBygCQB3gGBbAAQBQAHBRghQBggqB9hIQCFhLB3gkQCRgzDVAhQD4AMEWh4IAggMQGEibG6CPQDwAnDIhhQBlgvBSALIAdADQDnAfG3CpQG3CpEUC3QEUC3EXg6QEYg7HIjyQHJjzGAgpQF+goMOGFQMPGGPXpKQPYpIZEPXQLHFIKBorQKBosFcMZMAAAAkFMjvrAAAg");
	this.shape_18.setTransform(767.025,153.9957);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#3399CC").s().p("Eh31AXMMAALghIQClieCehRQCCg4BQgaQBQgbB1AAQB7gDBdABQBTAJBTghQBigrCBhJQCIhNB7glQCUgyDbAkQD/AREdh9IAggNQGMigHHCYQD2AqDOhmQBngyBTAMIAdADQDmAfGyCoQGzCnESC2QERC1EVg6QEVg6HFjwQHFjwF7goQF8goMGGBQMIGDPOpEQPQpCY1POQLAFGJ7olQJ7omFZMRMAAAAkFMjvrAAAg");
	this.shape_19.setTransform(767.025,154.0589);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#3399CC").s().p("Eh31AXLMAALghIQCqiiCihRQCGg5BSgaQBSgaB5ACQB+gCBgAEQBVALBVgiQBkgrCFhLQCMhPB+glQCXgyDiAoQEEAVEliCIAhgNQGTimHVCiQD7AuDThsQBqg0BVAMIAdADQDjAfGvCmQGvClEQC0QEOC0ESg6QETg5HBjtQHAjuF4goQF4gnL/F+QMBGAPFo+QPHo8YnPGQK5FCJ1ofQJ1ohFWMLMAAAAkEMjvrAAAg");
	this.shape_20.setTransform(767.025,154.1134);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#3399CC").s().p("Eh31AXLMAALghIQCuinCmhSQCLg6BUgZQBUgZB8AEQCDAABhAGQBXANBYgiQBmgsCJhNQCQhRCBglQCagyDoAsQELAZEtiHIAhgNQGairHiCrQEBAxDYhxQBtg3BXANIAcACQDiAfGrClQGqCkEOCyQEMCyEPg5QERg5G8jqQG9jrFzgoQF2gmL4F6QL6F8O8o4QO+o2YXO+QKzE/JwoZQJuobFTMDMAAAAkFMjvrAAAg");
	this.shape_21.setTransform(767.025,154.1834);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#3399CC").s().p("Eh31AXKMAALghIQCzirCqhSQCQg7BVgZQBVgYCBAGQCGACBkAHQBZAPBagiQBogsCOhPQCThTCEglQCdgzDvAxQEQAcE1iLIAigOQGhiwHwC1QEGA0Deh2QBvg6BZANIAcADQDfAeGnCjQGnCjELCxQEKCwENg4QEOg4G4jpQG4joFxgnQFygmLwF3QLzF5OzoyQO1owYJO1QKsE9JqoUQJooVFQL8MAAAAkEMjvrAAAg");
	this.shape_22.setTransform(767.025,154.2301);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#3399CC").s().p("Eh31AXKMAALghIQC3iwCvhTQCUg7BXgYQBXgYCFAIQCJADBmAKQBcARBcgiQBrgtCRhRQCXhVCHgmQCfgyD2A1QEXAgE8iQIAigOQGpi1H9C+QEMA3Djh7QByg8BbANIAbADQDeAeGjChQGjChEICvQEHCvELg4QELg3G0jmQG1jmFtgmQFugmLqF0QLrF2OrosQOroqX6OsQKmE6JkoOQJjoQFML1MAAAAkFMjvrAAAg");
	this.shape_23.setTransform(767.025,154.2842);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#3399CC").s().p("Eh31AXJMAALghIQC8i0CyhTQCZg9BZgXQBZgYCIAKQCNAGBoAMQBfATBegjQBtgsCVhUQCbhXCKgmQCigyD9A5QEcAkFEiVIAjgOQGwi7ILDIQESA7DoiBQB0g/BdAOIAbACQDcAeGeCgQGfCgEGCtQEFCtEIg3QEJg3GwjjQGwjkFqgmQFrgkLiFwQLlFyOhomQOjojXrOjQKfE4JeoJQJdoKFJLuMAAAAkEMjvrAAAg");
	this.shape_24.setTransform(767.025,154.3477);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#3399CC").s().p("Eh31AXIMAALghIQDAi4C3hUQCdg9BbgXQBbgXCMAMQCRAHBqAOQBgAVBhgjQBvgtCZhWQCfhZCNglQClgzEDA9QEiAoFMiZIAkgPQG3jAIZDSQEXA9DtiGQB2hBBfAOIAbADQDaAdGbCeQGbCeEDCsQEDCrEFg2QEHg2GsjhQGsjhFmglQFogkLbFsQLdFvOYogQOaodXcObQKZE1JYoDQJXoFFGLnMAAAAkEMjvrAAAg");
	this.shape_25.setTransform(767.025,154.4017);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#3399CC").s().p("Eh31AXIMAALghIQDFi9C7hVQChg+BdgWQBcgWCQANQCVAKBsAQQBjAXBjgkQBxgtCdhYQCjhbCQglQCogzEKBBQEoAsFTieIAlgQQG+jEImDbQEdBADyiLQB5hEBhAPIAbACQDYAeGWCcQGXCdECCqQD/CpEDg1QEEg2GojeQGnjfFkglQFkgjLUFpQLXFsOPoaQORoXXNOSQKSEyJSn9QJRn/FDLfMAAAAkFMjvrAAAg");
	this.shape_26.setTransform(767.025,154.4718);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#3399CC").s().p("Eh31AXHMAALghIQDJjBDAhVQClg/BfgWQBegVCUAPQCYAMBvASQBlAYBlgkQB0gtCghZQCnheCTgmQCrgyEQBFQEuAwFcijIAkgQQHGjKI0DlQEiBED4iRQB7hHBjAPIAaADQDWAdGTCbQGTCbD/CoQD9CoEBg1QEBg0GkjcQGjjdFggkQFhgjLNFmQLPFoOGoUQOIoQW/OJQKLEvJMn3QJLn5FALYMAAAAkEMjvrAAAg");
	this.shape_27.setTransform(767.025,154.5184);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#3399CC").s().p("Eh31AXHMAALghIQDOjGDDhVQCqhABhgVQBggWCXASQCcANBxAUQBoAbBngkQB2guCkhbQCqhgCXgmQCugyEXBJQE0A0FjioIAlgQQHNjPJBDuQEoBHD9iWQB+hJBlAPIAaADQDUAcGPCaQGPCZD8CnQD7CmD+g0QD/g0GfjaQGfjaFdgjQFegiLFFiQLIFlN9oOQOAoLWvOCQKFEsJGnyQJFn0E9LRMAAAAkFMjvrAAAg");
	this.shape_28.setTransform(767.025,154.5722);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#3399CC").s().p("Eh31AXGMAALghIQDTjKDHhWQCvhBBhgUQBjgVCbAUQCgAPBzAWQBpAdBqglQB4guCohdQCuhiCagmQCwgyEeBMQE6A5FritIAmgRQHUjUJPD4QEuBKECibQCAhMBnAQIAaACQDRAdGLCYQGLCYD6ClQD5CkD7gzQD9g0GbjXQGbjYFZgjQFaghK/FfQLBFhN0oHQN2oFWhN5QJ+EpJAnsQJAnuE5LKMAAAAkEMjvrAAAg");
	this.shape_29.setTransform(767.025,154.6359);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#3399CC").s().p("Eh31AXGMAALghIQDXjODMhXQCzhCBjgUQBkgUCfAVQCkASB1AYQBsAeBsglQB6guCshfQCyhkCdgmQCzgyElBQQFAA9FyiyIAngRQHbjZJcEBQE0BNEHihQCDhOBoAQIAaADQDQAcGHCXQGHCWD3CjQD2CjD5gzQD6gyGXjVQGXjVFWgjQFXghK3FcQK6FeNroCQNun+WRNwQJ4EnI7nnQI5noE2LCMAAAAkFMjvrAAAg");
	this.shape_30.setTransform(767.025,154.6888);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#3399CC").s().p("Eh31AXFMAALghIQDcjTDPhXQC4hDBlgTQBmgTCjAXQCnATB3AaQBvAhBugmQB8guCwhiQC2hlCggnQC2gyErBVQFGBAF6i2IAngSQHjjeJqEKQE5BREMimQCGhRBqARIAZACQDOAcGDCVQGDCVD2CiQDzChD2gzQD4gyGSjSQGTjTFTgiQFUggKwFYQKyFbNin8QNln4WDNoQJxEjI1ngQIznjEzK7MAAAAkFMjvrAAAg");
	this.shape_31.setTransform(767.025,154.7597);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#3399CC").s().p("Eh31AXEMAALghIQDgjXDUhYQC8hDBngTQBogTCmAZQCrAWB6AcQBwAiByglQB+gvCzhkQC6hnCjgnQC5gyEyBYQFLBFGCi7IAogSQHqjkJ4EUQE+BUESirQCIhUBsARIAZADQDMAcF/CTQF/CTDzCgQDxCgDzgyQD2gxGOjQQGPjRFPghQFQggKpFVQKsFYNZn2QNbnyV1NfQJqEhIvnbQItndEwK0MAAAAkEMjvrAAAg");
	this.shape_32.setTransform(767.025,154.8062);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#3399CC").s().p("Eh31AXEMAALghIQDljbDYhZQDAhEBpgSQBqgTCqAbQCvAXB7AeQBzAlB0gmQCAgvC3hmQC+hpCmgnQC8gyE4BcQFSBJGKjAIAogSQHxjpKFEdQFEBXEXiwQCLhWBuARIAZADQDJAbF7CSQF7CSDxCeQDuCeDygxQDzgxGJjOQGLjNFMghQFNgfKiFRQKkFUNQnvQNTnsVlNWQJkEeIpnVQInnYEtKtMAAAAkFMjvrAAAg");
	this.shape_33.setTransform(767.025,154.8597);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#3399CC").s().p("Eh31AXDMAALghIQDpjfDdhaQDEhFBrgRQBrgSCuAdQCzAZB+AgQB1AnB2gnQCCgvC8hoQDBhrCpgnQC/gyE/BgQFXBNGSjFIApgTQH4juKTEnQFJBbEdi2QCMhZBxASIAYACQDIAbF3CRQF3CQDuCdQDsCcDvgxQDwgwGGjLQGHjLFIggQFJgfKbFOQKeFRNHnqQNJnlVXNNQJdEcIjnQQIhnSEqKmMAAAAkEMjvrAAAg");
	this.shape_34.setTransform(767.025,154.9236);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#3399CC").s().p("Eh31AXDMAALghIQDujkDghaQDKhGBsgRQBtgRCyAfQC2AbCAAiQB4AoB4gmQCEgwDAhqQDFhtCsgnQDBgyFGBkQFeBQGZjJIApgTQH/jzKhEwQFPBeEii8QCPhbByASIAZADQDFAbFzCPQF0CODrCbQDqCbDsgwQDugwGBjIQGDjJFFggQFGgeKTFLQKXFNM+njQNBngVHNFQJXEZIdnKQIcnMEmKeMAAAAkFMjvrAAAg");
	this.shape_35.setTransform(767.025,154.9764);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#3399CC").s().p("Eh31AXDMAALghIQDyjoDlhbQDOhHBugQQBvgQC1AgQC6AdCDAkQB5ArB7goQCGgvDEhsQDIhwCwgnQDEgyFMBoQFkBVGhjOIAqgUQIGj4KvE6QFVBhEmjBQCSheB0ATIAYACQDEAbFvCNQFvCNDpCaQDnCYDqgvQDrgvF+jGQF/jGFBgfQFDgeKMFHQKPFKM1ndQM4nZU5M8QJQEWIXnEQIWnHEjKXMAAAAkFMjvrAAAg");
	this.shape_36.setTransform(767.025,154.9859);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#3399CC").s().p("Eh31AXDMAALghIQD3jtDphbQDShIBwgPQBxgQC5AiQC+AfCEAmQB8AtB9goQCJgwDHhuQDMhxCzgnQDHgzFTBtQFqBYGojTIArgUQINj9K8FDQFbBkEsjGQCUhgB2ATIAYACQDBAbFrCLQFsCMDnCYQDkCXDngvQDpguF6jEQF6jEE+geQE/gdKFFEQKJFGMsnXQMvnTUqM0QJJETIRm/QIQnBEgKQMAAAAkFMjvrAAAg");
	this.shape_37.setTransform(767.025,154.9687);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#3399CC").s().p("Eh31AXDMAALghIQD7jxDthcQDXhIBygPQBygPC9AkQDCAhCHAoQB+AvB/goQCLgwDLhxQDQhzC2gnQDKgzFZBxQFwBcGwjYIAsgUQIUkCLKFMQFgBoExjMQCXhjB4ATIAXADQDAAaFnCKQFnCKDlCWQDiCWDlguQDlguF2jBQF3jBE6geQE8gdJ+FBQKBFDMjnRQMmnNUbMrQJDEQILm5QIKm7EdKJMAAAAkEMjvrAAAg");
	this.shape_38.setTransform(767.025,154.9388);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#3399CC").s().p("Eh31AXDMAALghIQEAj1DxhdQDbhJB0gOQB0gPDBAmQDFAjCJAqQCAAxCCgpQCNgwDPhyQDUh2C5gnQDNgyFgB0QF1BgG4jcIAsgVQIckHLYFWQFlBqE3jRQCZhlB6AUIAXACQC+AaFjCJQFjCIDiCVQDgCTDhgtQDkgtFyi/QFyi/E3gdQE5gcJ2E9QJ7FAMZnLQMenHUMMiQI8EOIGmzQIDm2EaKCMAAAAkEMjvrAAAg");
	this.shape_39.setTransform(767.025,154.9165);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#3399CC").s().p("Eh31AXEMAALghIQEFj6D1hdQDfhKB2gOQB2gODFAoQDJAlCKAsQCDAyCEgoQCPgxDTh0QDYh4C8gnQDQgyFmB4QF8BkHAjhIAsgVQIjkNLlFgQFrBuE8jXQCchoB7AUIAXADQC8AZFfCIQFgCGDfCTQDdCSDfgtQDigsFui8QFui9EzgcQE1gbJwE5QJzE9MRnGQMUnAT9MaQI2ELIAmuQH9mwEXJ6MAAAAkFMjvrAAAg");
	this.shape_40.setTransform(767.025,154.8861);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#3399CC").s().p("Eh31AXEMAALghIQEJj+D6heQDjhLB4gNQB4gODIAqQDNAnCNAuQCFA1CGgpQCSgxDWh3QDch5C/goQDSgyFuB8QGBBoHIjlIAtgWQIqkSLzFpQFxBxFAjbQCfhrB9AVIAXACQC6AZFbCGQFbCFDdCRQDbCRDcgsQDggsFpi6QFqi6EwgcQEygbJoE2QJsE6MInAQMLm6TvMRQIvEJH6moQH4mrETJzMAAAAkFMjvrAAAg");
	this.shape_41.setTransform(767.025,154.8554);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#3399CC").s().p("Eh31AXEMAALghIQEOkCD9hfQDphLB5gNQB6gNDMAsQDQApCPAwQCIA2CIgpQCUgxDah5QDgh7DCgoQDVgyF0CAQGIBsHPjqIAugWQIxkXMAFyQF3B0FGjgQCghuCAAVIAWADQC4AZFXCEQFYCEDaCPQDYCPDagsQDdgqFmi4QFli4EtgcQEvgZJhEyQJlE2L+m5QMDm0TgMIQIoEGH0miQHymlEQJsMAAAAkEMjvrAAAg");
	this.shape_42.setTransform(767.025,154.8326);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#3399CC").s().p("Eh31AXEMAALghIQESkGEChgQDthMB7gMQB7gMDQAtQDUArCSAyQCJA4CLgpQCWgyDeh6QDkh+DFgnQDYgzF7CEQGNBxHXjwIAugWQI5kcMOF8QF8B3FLjmQCjhwCCAVIAWADQC2AZFTCCQFTCCDZCOQDUCNDZgrQDagqFhi1QFii1EpgbQErgZJaEvQJeEyL2mzQL5muTRMAQIiEDHumdQHsmfENJlMAAAAkEMjvrAAAg");
	this.shape_43.setTransform(767.025,154.8015);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#3399CC").s().p("Eh31AXFMAALghIQEXkLEGhgQDxhOB9gLQB9gLDUAvQDYAtCTA0QCMA6CNgqQCYgyDih8QDoiADIgoQDbgyGBCIQGUB0Hej0IAvgXQJAkhMcGGQGBB6FQjrQCmhzCEAWIAVACQC0AZFPCBQFQCBDVCMQDTCLDWgqQDYgpFdizQFdizEmgbQEogYJTErQJWEwLtmtQLxmoTCL3QIbEAHomWQHmmaEKJdMAAAAkFMjvrAAAg");
	this.shape_44.setTransform(767.025,154.7702);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#3399CC").s().p("Eh31AXFMAALghIQEbkPEKhgQD2hPB/gLQB/gLDXAyQDcAuCWA3QCOA8CPgrQCagxDmh/QDriCDMgoQDegyGICMQGZB4Hmj5IAwgXQJHkmMpGPQGHB+FWjxQCoh1CFAWIAWACQCyAZFLB/QFMB/DSCLQDRCJDTgpQDWgpFZiwQFZixEigaQElgYJLEoQJQEsLkmnQLnmhSzLuQIVD+HimRQHgmVEHJXMAAAAkEMjvrAAAg");
	this.shape_45.setTransform(767.025,154.7469);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#3399CC").s().p("Eh31AXFMAALghIQEgkUEOhgQD6hQCBgKQCBgKDbAzQDfAwCYA5QCRA+CRgrQCdgyDpiAQDviEDOgoQDigzGOCQQGfB9Huj+IAxgYQJOkrM3GYQGMCBFbj2QCrh3CHAWIAVACQCwAZFHB9QFHB+DRCJQDOCIDRgpQDTgoFViuQFViuEfgaQEhgXJFElQJIEoLbmhQLfmbSkLmQIOD7HcmMQHamOEEJPMAAAAkEMjvrAAAg");
	this.shape_46.setTransform(767.025,154.7152);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#3399CC").s().p("Eh31AXGMAALghIQEkkYEThiQD+hQCDgKQCCgJDfA1QDjAyCbA7QCSBACUgrQCfgzDuiCQDyiGDRgoQDkgzGWCUQGlCAH2kCIAwgYQJWkxNEGiQGTCFFgj8QCth6CJAXIAVACQCuAYFDB8QFDB8DOCHQDMCHDOgpQDRgnFRirQFRisEbgZQEegXI9EiQJBElLSmbQLWmVSVLdQIID4HWmGQHVmJEAJIMAAAAkFMjvrAAAg");
	this.shape_47.setTransform(767.025,154.6834);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#3399CC").s().p("Eh31AXGMAALghIQEpkdEXhiQEChRCFgJQCEgJDjA3QDnA0CcA9QCVBCCWgsQChgyDyiFQD2iHDUgpQDngyGcCYQGrCEH+kHIAxgZQJdk2NSGsQGYCHFlkBQCwh8CLAXIAUACQCsAYFAB7QE+B6DMCGQDKCEDMgoQDOgmFMipQFNipEYgZQEagWI2EeQI7EiLJmVQLNmPSGLVQIBD1HRmAQHOmDD9JAMAAAAkFMjvrAAAg");
	this.shape_48.setTransform(767.025,154.6598);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#3399CC").s().p("Eh31AXGMAALghIQEtkhEbhiQEIhSCGgJQCGgIDmA5QDrA2CeA/QCYBECYgsQCjgzD2iHQD6iJDXgpQDqgzGjCcQGxCJIFkMIAygZQJkk7NfG1QGeCLFqkHQCzh/CNAYIAUACQCqAXE7B5QE7B5DKCEQDHCDDJgnQDMgmFIimQFJinEUgYQEXgVIvEaQIzEfLAmPQLEmJR4LMQH6DyHLl6QHIl+D6I6MAAAAkEMjvrAAAg");
	this.shape_49.setTransform(767.025,154.6276);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#3399CC").s().p("Eh31AXHMAALghIQEyklEfhkQEMhTCIgHQCIgIDqA7QDuA4ChBAQCZBGCbgsQCmgzD5iJQD+iLDagpQDtgzGpCgQG3CNINkRIAzgaQJrlANtG/QGjCOFwkMQC1iCCOAYIAVACQCnAYE3B3QE4B4DHCCQDECBDHgmQDJgmFEikQFFikERgXQEUgVInEXQItEbK2mJQK7mDRpLEQH0DwHFl1QHCl4D3IyMAAAAkFMjvrAAAg");
	this.shape_50.setTransform(767.025,154.5953);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#3399CC").s().p("Eh31AXHMAALghIQE3kqEjhkQEQhTCJgHQCKgIDuA9QDyA6CjBDQCcBHCdgsQCog0D9iKQECiODdgpQDwgyGwCkQG8CQIVkWIAzgZQJzlGN6HIQGpCRF1kQQC3iFCRAZIAUACQCmAXEyB2QE0B2DFCAQDCCADEgmQDHglFAihQFAiiEOgXQEQgUIhETQIlEYKumDQKyl8RaK7QHtDtG/lvQG8lzD0IrMAAAAkFMjvrAAAg");
	this.shape_51.setTransform(767.025,154.5714);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#3399CC").s().p("Eh31AXHMAALghIQE7kuEnhkQEVhVCLgGQCMgHDyA/QD2A8ClBEQCeBKCfgtQCqgzEBiNQEGiQDggpQDzgzG2CoQHDCVIckbIA0gaQJ6lKOIHRQGvCVF5kWQC6iICTAZIATACQCkAXEvB0QEwB1DCB/QDAB+DBglQDFglE8ifQE8ifEKgWQENgUIZEQQIeEVKll9QKpl3RLKzQHoDqG4lpQG2ltDxIkMAAAAkEMjvrAAAg");
	this.shape_52.setTransform(767.025,154.5388);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#3399CC").s().p("Eh31AXHMAALghIQFAkyErhlQEZhVCNgGQCOgGD1BAQD6A+CnBHQChBLChgtQCsg0EFiPQEJiRDkgqQD1gyG+CsQHICYIlkfIA0gbQKBlPOWHbQG0CXF/kbQC8iKCVAaIATACQChAWErBzQEsBzDAB9QC9B8DAgkQDBgkE4icQE4idEHgWQEKgTISENQIXERKbl3QKhlwQ8KqQHhDnGylkQGxlnDtIdMAAAAkEMjvrAAAg");
	this.shape_53.setTransform(767.025,154.5061);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#3399CC").s().p("Eh31AXIMAALghIQFEk3EwhmQEdhWCPgFQCQgGD5BDQD9BACqBIQCiBOCkguQCug0EJiRQENiTDngqQD4gyHECwQHPCcIskkIA1gbQKIlVOjHlQG6CbGEkhQC/iNCWAaIATACQCgAWEnByQEoBxC9B8QC7B6C9gkQC/giE0ibQE0iaEDgVQEGgTILEJQIQEOKTlwQKXlrQuKiQHaDkGsleQGrlhDqIVMAAAAkFMjvrAAAg");
	this.shape_54.setTransform(767.025,154.4819);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#3399CC").s().p("Eh31AXIMAALghIQFJk7E0hmQEihXCQgFQCRgFD+BFQEABBCsBLQClBQCnguQCwg1EMiTQERiVDqgqQD7gyHLCzQHUChI0kpIA1gbQKQlaOxHuQG/CeGKkmQDBiPCXAaIATACQCeAWEkBwQEkBvC7B6QC4B5C6gjQC9giEviYQEwiYEAgVQEDgRIEEFQIJELKJlrQKPlkQeKZQHUDiGmlZQGllcDnIPMAAAAkEMjvrAAAg");
	this.shape_55.setTransform(767.025,154.4491);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#3399CC").s().p("Eh31AXIMAALghIQFNk/E4hnQEnhYCSgEQCTgEEBBGQEFBDCuBNQCnBSCpguQCyg1EQiVQEViYDtgqQD+gyHRC4QHbCkI7ktIA2gcQKXlfO+H3QHFCiGPksQDDiRCaAaIATACQCcAWEfBuQEgBuC5B5QC1B3C4gjQC7ghEriWQEsiVD8gUQEAgSH8EDQICEHKBllQKFldQQKQQHNDfGglTQGflWDkIHMAAAAkEMjvrAAAg");
	this.shape_56.setTransform(767.025,154.4161);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#3399CC").s().p("Eh31AXJMAALghIQFSlEE8hoQErhYCUgEQCVgDEFBIQEIBFCwBPQCpBUCsgvQC0g1EUiXQEZiaDwgqQEBgyHYC8QHgCoJDkyIA3gcQKdllPNIBQHKClGUkxQDGiUCcAbIASACQCaAVEcBtQEcBtC2B2QCzB2C1giQC4ghEoiTQEniTD5gUQD8gQH2D/QH6EDJ4leQJ8lYQBKIQHHDcGblNQGYlRDhIAMAAAAkFMjvrAAAg");
	this.shape_57.setTransform(767.025,154.3917);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#3399CC").s().p("Eh31AXJMAALghIQFWlIFBhpQEvhZCWgDQCXgDEIBKQEMBHCyBRQCsBWCugvQC2g2EYiZQEdibDzgqQEEgzHeDAQHmCsJLk3IA4gcQKklqPaILQHRCnGYk2QDJiWCeAbIASACQCYAVEXBrQEYBrC0B1QCxB0CzghQC1ggEjiRQEkiQD1gTQD5gQHuD7QH0EBJulZQJ0lRPyJ/QHADZGVlHQGSlLDeH4MAAAAkFMjvrAAAg");
	this.shape_58.setTransform(767.025,154.3585);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#3399CC").s().p("Eh31AXJMAALghIQFblMFEhpQE0haCYgDQCYgCENBMQEPBJC1BTQCuBYCwgwQC4g1EdicQEgidD2gqQEGgzHmDEQHsCwJTk8IA3gdQKsluPoIUQHWCrGdk8QDMiZCgAcIARACQCWAUEUBqQEUBqCxBzQCvByCwghQCzgfEfiOQEfiODygTQD1gPHoD4QHsD9JmlSQJqlMPkJ3QG5DWGPlBQGNlGDaHyMAAAAkEMjvrAAAg");
	this.shape_59.setTransform(767.025,154.3252);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#3399CC").s().p("Eh31AXJMAALghIQFflQFJhqQE4hbCagCQCagCEQBOQEUBLC2BVQCxBaCygwQC7g2EgidQEkigD5gqQEJgzHsDIQHyC0JblAIA4gdQKzl0P2IdQHbCuGjlAQDNicCiAcIASACQCUAUEPBoQERBpCvBxQCrBxCuggQCxgfEaiMQEciMDugRQDygPHgD0QHlD6JdlMQJilFPUJtQGzDUGJk8QGHlADXHrMAAAAkEMjvrAAAg");
	this.shape_60.setTransform(767.025,154.3006);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#3399CC").s().p("Eh31AXKMAALghIQFklVFNhrQE8hcCcgBQCcgBEUBQQEXBNC5BXQCyBbC1gwQC9g2EkifQEoiiD8gqQEMgzHzDMQH4C4JilFIA5geQK6l5QDInQHhCyGolGQDQifCkAdIARABQCSAVEMBmQEMBnCtBwQCpBuCrgfQCugeEXiJQEXiJDrgSQDvgOHZDxQHeD3JTlHQJZk/PGJmQGsDRGDk3QGBk6DUHjMAAAAkFMjvrAAAg");
	this.shape_61.setTransform(767.025,154.2672);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#3399CC").s().p("Eh31AXKMAALghIQFplZFRhrQFBhdCdAAQCegBEXBSQEbBPC7BZQC1BdC3gwQC/g3EoihQErikEAgqQEPgzH5DQQH+C8JqlKIA6geQLBl+QRIwQHlC1GulMQDTihCmAdIARACQCQAUEHBlQEJBlCqBvQCnBtCogfQCsgeESiGQETiHDogRQDrgOHSDuQHXDzJLlAQJQk5O2JdQGmDOF9kwQF7k1DRHcMAAAAkEMjvrAAAg");
	this.shape_62.setTransform(767.025,154.2416);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#3399CC").s().p("Eh31AXKMAALghIQFtleFVhrQFGheCfAAQCfAAEcBUQEeBRC+BbQC3BfC5gwQDBg3EsijQEvimEDgrQESgyH/DTQIFDBJxlPIA6gfQLJmDQeI5QHrC5G0lRQDVikCoAeIAQABQCOAUEEBkQEEBjCoBtQCkBrCngeQCpgdEOiEQEPiEDkgRQDogNHKDrQHRDvJBk6QJHkzOoJVQGfDLF3krQF1kvDOHVMAAAAkEMjvrAAAg");
	this.shape_63.setTransform(767.025,154.208);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#3399CC").s().p("Eh31AXLMAALghIQFyliFZhsQFKhfChABQChAAEfBWQEjBSC/BeQC6BhC7gxQDEg3EvilQEzioEGgrQEVgzIGDYQIKDEJ5lTIA7gfQLQmIQsJCQHxC8G4lWQDYimCpAdIARACQCMAUEABhQEABiClBrQCiBqCkgdQCngdEKiBQEKiCDhgQQDlgMHDDnQHJDsI4k0QI/ktOYJMQGZDJFxkmQFvkpDLHNMAAAAkFMjvrAAAg");
	this.shape_64.setTransform(767.025,154.1833);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#3399CC").s().p("Eh31AXLMAALghIQF2lmFehtQFOhfCjABQCjABEjBXQEmBVDCBfQC7BkC+gyQDGg3EzinQE3iqEJgrQEXgzINDcQIRDIKBlYIA7ggQLXmNQ6JMQH2C/G+lbQDaipCrAeIAQACQCKATD8BgQD9BhCiBpQCgBoChgdQCkgbEGiAQEHh/DdgPQDhgMG8DjQHCDpIwkuQI1kmOKJDQGSDGFrkgQFqkkDHHHMAAAAkEMjvrAAAg");
	this.shape_65.setTransform(767.025,154.1495);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#3399CC").s().p("Eh31AXLMAALghIQF7lrFhhtQFThgClACQClABEmBaQEqBWDEBiQC+BlDAgyQDIg3E3iqQE7isEMgrQEagyIUDfQIWDNKJleIA8ggQLemSRHJWQH8DCHDlhQDdirCtAeIAQACQCIATD4BfQD4BeChBoQCcBmCfgcQCigaECh9QECh9DagPQDegLG1DgQG7DmImkpQItkgN7I7QGLDDFlkaQFkkeDEG/MAAAAkEMjvrAAAg");
	this.shape_66.setTransform(767.025,154.1158);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#3399CC").s().p("Eh31AXMMAALghIQF/lvFmhuQFXhiCnADQCmACErBcQEtBYDGBjQDBBoDCgzQDKg3E7isQE/iuEPgrQEdgyIaDjQIcDQKRliIA8ggQLmmXRVJfQIBDFHIlmQDgiuCvAfIAPABQCGATD0BeQD1BdCeBmQCaBkCcgbQCggaD9h7QD/h6DWgOQDagLGuDdQG0DiIdkiQIkkaNsIyQGFDAFgkUQFdkZDBG4MAAAAkFMjvrAAAg");
	this.shape_67.setTransform(767.025,154.0909);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#3399CC").s().p("Eh31AXMMAALghIQGEl0FqhuQFbhiCpADQCoADEuBdQEyBaDIBmQDCBpDFgzQDMg4E/itQFDiwESgsQEggyIhDoQIiDUKYlnIA9ghQLtmcRhJoQIIDJHOlsQDhiwCyAfIAPACQCEASDwBcQDwBcCcBkQCYBjCZgbQCegZD5h4QD6h5DTgNQDXgKGnDZQGsDfIVkcQIakUNeIpQF+C+FakOQFXkTC+GwMAAAAkFMjvrAAAg");
	this.shape_68.setTransform(767.025,154.057);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#3399CC").s().p("Eh31AXMMAALghIQGIl4FvhvQFghjCqAEQCqAEEyBfQE1BcDKBnQDFBrDHgyQDPg5FCivQFHiyEVgsQEjgyInDrQIoDZKglsIA+ghQL0miRvJyQIODMHSlxQDkizCzAgIAPABQCCATDsBaQDtBaCZBjQCVBhCYgaQCagZD2h2QD2h1DPgNQDUgKGfDWQGmDcILkWQISkONOIhQF4C7FUkJQFRkOC7GqMAAAAkEMjvrAAAg");
	this.shape_69.setTransform(767.025,154.023);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#3399CC").s().p("Eh31AXNMAALghIQGNl9FyhvQFlhkCsAEQCsAEE2BhQE4BfDNBpQDHBtDJgzQDRg5FGixQFLi0EYgsQEmgyIuDvQIuDcKnlwIA/ghQL7mnR8J7QIUDPHYl2QDmi2C1AgIAPACQCAASDoBZQDpBYCWBhQCTBgCVgaQCYgYDxhzQDyhzDMgNQDQgIGZDSQGeDYIDkQQIIkHNAIYQFxC4FOkDQFLkIC4GiMAAAAkFMjvrAAAg");
	this.shape_70.setTransform(767.025,153.998);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#3399CC").s().p("Eh31AXNMAALghIQGRmBF3hwQFphlCuAFQCtAFE6BjQE8BgDPBrQDKBvDLgzQDTg5FLi0QFNi2EcgrQEogzI1D0QI0DgKwl1IA+giQMDmsSKKFQIZDSHdl8QDpi4C3AhIAPABQB+ASDkBXQDkBXCUBgQCRBdCSgZQCWgXDthxQDuhxDIgLQDNgJGRDPQGYDVH5kKQIAkBMxIPQFqC2FIj+QFGkCC0GbMAAAAkFMjvrAAAg");
	this.shape_71.setTransform(767.025,153.9639);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#3399CC").s().p("Eh31AXNMAALghIQGWmFF7hxQFthlCwAFQCvAGE+BkQFABjDRBtQDLBxDOg0QDVg5FPi2QFRi4EfgsQErgyI8D3QI6DlK3l6IA/gjQMKmxSYKPQIeDVHimBQDsi7C5AhIAOACQB8ARDgBWQDhBVCSBeQCOBcCPgYQCUgXDphuQDphuDFgMQDKgHGKDLQGQDSHwkEQH3j7MiIHQFkCyFCj4QFAj8CxGUMAAAAkEMjvrAAAg");
	this.shape_72.setTransform(767.025,153.9298);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#3399CC").s().p("Eh31AXNMAALghIQGbmJF+hyQFyhmCxAGQCyAGFBBnQFEBkDTBvQDOBzDQg0QDXg5FTi4QFVi6EigsQEugzJCD8QJADoK/l/IBAgiQMRm3SlKYQIkDZHomGQDui+C7AiIANABQB7ARDcBUQDcBUCQBdQCLBaCNgYQCRgWDlhsQDlhsDCgKQDGgHGDDIQGJDOHoj+QHuj1MTH+QFdCwE8jyQE6j3CuGNMAAAAkEMjvrAAAg");
	this.shape_73.setTransform(767.025,153.9047);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#3399CC").s().p("Eh31AXOMAALghIQGfmOGDhyQF2hnCzAHQC0AGFFBoQFHBmDWByQDQB1DSg1QDag5FWi6QFZi8ElgsQExgzJJEAQJFDsLHmEIBBgjQMYm7SzKhQIpDcHtmLQDxjAC8AhIAOACQB4ARDYBSQDZBTCNBaQCJBZCLgXQCOgWDhhpQDhhqC+gKQDDgGF8DFQGCDKHej3QHljvMEH1QFXCuE2jtQE0jxCrGFMAAAAkFMjvrAAAg");
	this.shape_74.setTransform(767.025,153.8705);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#3399CC").s().p("Eh31AXOMAALghIQGkmSGHhzQF7hoC0AIQC1AHFJBqQFLBoDYB0QDTB3DUg1QDcg6Fai8QFdi+EogsQE0gzJPEDQJMDxLOmJIBBgjQMgnBTAKrQIwDfHymQQDzjDC+AiIAOABQB2ARDUBRQDVBRCKBZQCHBXCIgWQCMgVDchnQDdhnC7gKQDAgGF0DBQF7DIHVjyQHcjoL2HtQFQCqEwjnQEujsCoF/MAAAAkEMjvrAAAg");
	this.shape_75.setTransform(767.025,153.8363);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#3399CC").s().p("Eh31AXOMAALghIQGomWGMh0QF/hoC2AIQC3AHFNBsQFPBqDZB2QDVB5DXg2QDeg6Fei+QFhjAErgsQE3gzJWEIQJRD0LWmNIBCgkQMnnGTOK1QI1DiH3mWQD2jFDAAiIANACQB0AQDQBPQDRBQCIBXQCEBVCGgVQCKgVDYhkQDZhlC3gJQC8gFFtC+QF1DEHMjsQHTjiLnHkQFJCoErjhQEnjmClF3MAAAAkEMjvrAAAg");
	this.shape_76.setTransform(767.025,153.8111);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#3399CC").s().p("Eh31AXPMAALghIQGtmbGPh0QGEhqC4AJQC5AIFQBuQFTBsDcB4QDXB6DZg1QDgg7FijAQFljBEugtQE5gzJdEMQJYD4LemSIBCgkQMunLTbK+QI7DlH8mbQD5jIDCAjIANABQByAQDMBOQDNBOCFBWQCCBTCDgVQCHgTDVhiQDUhiC0gJQC5gFFmC7QFtDBHDjmQHKjcLYHbQFDClEljbQEijhChFwMAAAAkFMjvrAAAg");
	this.shape_77.setTransform(767.025,153.7767);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#3399CC").s().p("Eh31AXPMAALghIQGxmfGUh1QGIhqC6AJQC7AJFUBwQFWBuDeB5QDaB9Dbg2QDjg7FljCQFpjDExgtQE8gzJkEQQJdD8LmmXIBDglQM0nQTqLIQJADoICmgQD6jLDFAkIAMABQBwAQDIBMQDJBMCDBUQCABSCAgUQCFgTDQhgQDRhfCwgIQC1gEFfC3QFmC9G6jfQHCjXLJHUQE8CiEfjWQEcjbCeFpMAAAAkEMjvrAAAg");
	this.shape_78.setTransform(767.025,153.7424);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#3399CC").s().p("Eh31AXPMAALghIQG2mjGYh1QGMhsC8AKQC8AJFYByQFaBwDhB8QDbB+Deg2QDlg7FpjEQFsjGE1gtQE/gzJqEUQJjEALumbIBDglQM8nWT3LRQJGDsIHmmQD9jNDGAkIANABQBuAQDEBKQDFBLCBBTQB8BQB/gUQCCgSDMhdQDMheCtgHQCygDFYCzQFfC6GxjZQG4jQK6HKQE2CgEZjRQEWjVCbFiMAAAAkEMjvrAAAg");
	this.shape_79.setTransform(767.025,153.7171);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#3399CC").s().p("Eh31AXQMAALghIQG6moGch2QGRhsC+AKQC+AKFcB0QFeByDiB9QDeCBDgg3QDng7FtjGQFwjIE4gtQFCgzJxEYQJpEEL1mgIBEgmQNDnaUFLaQJMDvILmrQEAjQDIAlIAMABQBsAPDBBJQDBBKB+BQQB6BPB8gTQB/gSDIhbQDJhaCpgHQCvgDFQCwQFYC3GojUQGwjJKrHBQEvCdETjKQEQjQCYFaMAAAAkFMjvrAAAg");
	this.shape_80.setTransform(767.025,153.6827);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#3399CC").s().p("Eh31AXQMAALghIQG/msGgh2QGVhuDAALQDAALFfB2QFiBzDlCAQDgCDDjg3QDog8FxjIQF0jKE7gtQFFgzJ3EcQJvEIL9mlQAigSAjgUQNKngUTLkQJRDzIRmxQECjSDKAkIAMABQBqAQC8BHQC9BIB8BPQB4BNB5gTQB9gRDEhYQDEhYCmgGQCrgDFKCtQFQCzGgjNQGmjEKcG6QEpCaENjFQEKjKCVFTMAAAAkEMjvrAAAg");
	this.shape_81.setTransform(767.025,153.6482);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#3399CC").s().p("Eh31AXQMAALghIQHDmwGlh3QGahuDBALQDCAMFjB3QFlB2DnCBQDjCFDlg4QDqg7F1jKQF4jME+guQFIgyJ+EfQJ1EMMEmqIBGgmQNRnlUgLuQJXD1IWm2QEFjVDMAlIALACQBoAPC5BGQC5BGB5BNQB2BLB2gSQB7gQC/hWQDBhWCigFQCogCFCCpQFKCwGWjHQGei9KNGwQEiCXEHi/QEEjECSFMMAAAAkEMjvrAAAg");
	this.shape_82.setTransform(767.025,153.6229);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#3399CC").s().p("Eh31AXRMAALghIQHIm1Gph4QGehvDDANQDDALFnB6QFpB3DqCEQDkCHDog4QDtg8F4jMQF8jOFBguQFKgzKFEkQJ7EQMMmvIBGgmQNYnqUvL3QJcD4Icm7QEHjXDOAlIALABQBmAPC0BEQC1BFB3BMQBzBJB0gRQB5gPC7hUQC8hTCfgGQClgBE7CmQFCCtGNjBQGVi4J/GoQEbCVEBi6QD/i+COFEMAAAAkFMjvrAAAg");
	this.shape_83.setTransform(767.025,153.5883);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#3399CC").s().p("Eh31AXRMAALghIQHNm5Gsh5QGjhwDFANQDFANFrB7QFtB5DrCGQDnCJDqg4QDvg9F9jOQF/jQFEgtQFNgzKMEnQKBEUMUmzIBGgnQNfnvU8MAQJiD8IhnAQEKjaDPAlIALABQBkAPCxBDQCxBDB1BKQBwBIBygRQB1gPC4hRQC3hRCcgEQChgBE0CjQE7CpGFi7QGLixJwGfQEVCSD7i0QD5i5CLE9MAAAAkFMjvrAAAg");
	this.shape_84.setTransform(767.025,153.5537);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#3399CC").s().p("Eh31AXRMAALghIQHRm9Gxh5QGnhxDHAOQDHANFvB9QFwB7DtCIQDqCKDsg4QDxg9GBjQQGDjSFHguQFQgyKSErQKHEYMcm4IBHgnQNmn1VKMKQJnD/ImnGQENjcDRAmIALABQBiAOCsBCQCuBBByBJQBuBGBvgQQBzgOCzhPQC0hPCYgEQCeABEtCeQE0CnF7i2QGDirJhGXQEOCPD2iuQDyizCIE2MAAAAkEMjvrAAAg");
	this.shape_85.setTransform(767.025,153.5284);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#3399CC").s().p("Eh31AXSMAALghIQHWnCG1h6QGrhxDJAOQDJAOFyB/QF0B9DwCKQDrCMDvg5QDzg8GFjTQGHjUFKguQFTgyKZEvQKMEcMkm9IBIgoQNtn5VYMTQJtEDIrnMQEOjfDUAnIAKABQBhAOCoBAQCpBABwBGQBrBFBtgQQBxgNCvhMQCvhMCVgEQCbABElCbQEtCjFyivQF6ilJSGOQEICNDwipQDsiuCFEvMAAAAkFMjvrAAAg");
	this.shape_86.setTransform(767.025,153.4937);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#3399CC").s().p("Eh31AXSMAALghIQHanHG5h6QGwhyDLAPQDLAOF2CBQF4B/DxCMQDuCODxg5QD2g9GIjUQGLjWFNguQFWgzKfEzQKTEgMrnBIBIgpQN1n+VlMdQJzEFIwnQQERjiDWAnIAKABQBeAOClA+QClA+BtBFQBpBDBqgOQBvgNCqhKQCshKCRgDQCXACEfCYQEmCfFpipQFxifJDGGQEBCJDqiiQDmipCCEoMAAAAkFMjvrAAAg");
	this.shape_87.setTransform(767.025,153.4709);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#3399CC").s().p("Eh31AXSMAALghIQHfnKG9h7QG0hzDNAPQDMAPF6CDQF8CBD0COQDwCQDzg6QD4g9GMjWQGOjYFRguQFZgzKmE3QKYEkMznGIBJgpQN8oDVzMmQJ4EJI2nWQETjlDYAoIAJABQBdANCgA9QChA9BrBDQBnBBBngOQBsgMCnhHQCnhICOgCQCUACEXCVQEfCcFgijQFoiZI1F9QD6CHDkidQDgijB/EhMAAAAkEMjvrAAAg");
	this.shape_88.setTransform(767.025,153.4455);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#3399CC").s().p("Eh31AXSMAALghIQHjnPHCh7QG5h0DOAQQDOAPF+CFQF/CDD2CQQDzCSD1g6QD6g9GQjZQGSjaFUguQFbgzKtE7QKfEoM6nLQAlgTAlgWQODoIWAMvQJ+EMI7nbQEWjnDZAoIAKABQBaANCdA7QCdA8BoBBQBkBABmgOQBpgLCjhFQCjhFCKgCQCRADEPCRQEYCZFXidQFgiTIlF1QD0CEDeiYQDbidB7EaMAAAAkEMjvrAAAg");
	this.shape_89.setTransform(767.025,153.4108);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#3399CC").s().p("Eh31AXTMAALghIQHonUHGh8QG9h1DQARQDQAQGBCHQGDCFD5CSQD0CUD4g6QD8g+GUjbQGWjcFXguQFegzKzE/QKlEsNCnQIBLgpQOKoOWOM5QKDEQJAnhQEZjqDbApIAJAAQBZANCYA6QCaA6BmBAQBhA+BjgNQBngLCehCQCfhDCHgBQCNADEJCOQERCVFOiXQFWiMIXFsQDtCBDYiSQDViXB4ESMAAAAkFMjvrAAAg");
	this.shape_90.setTransform(767.025,153.376);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#3399CC").s().p("Eh31AXTMAALghIQHsnYHKh9QHCh1DSARQDSARGFCIQGHCHD6CUQD3CWD6g7QD+g+GYjcQGajeFagvQFhgzK6FEQKrEwNKnVIBKgqQOSoTWbNDQKKESJFnmQEbjsDdApIAJABQBWAMCVA4QCVA5BkA+QBfA8BggMQBlgKCahAQCbhACDgBQCKAEEBCKQEKCSFFiRQFOiFIHFjQDnB+DSiMQDPiSB1ELMAAAAkFMjvrAAAg");
	this.shape_91.setTransform(767.025,153.3505);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#3399CC").s().p("Eh31AXTMAALghIQHxncHOh9QHGh3DUASQDTARGJCLQGLCJD9CWQD5CYD8g7QEBg/GbjeQGejgFdgvQFkgzLAFHQKxE1NSnaIBLgqQOZoYWpNMQKPEVJKnrQEejvDfApIAJABQBUANCQA2QCSA3BhA9QBdA6BdgLQBigKCWg9QCXg+CAAAQCGAED7CHQEDCPE8iLQFEiAH5FbQDgB8DMiHQDJiMByEEMAAAAkEMjvrAAAg");
	this.shape_92.setTransform(767.025,153.3157);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#3399CC").s().p("Eh31AXUMAALghIQH1nhHTh+QHKh3DWASQDVASGNCNQGOCKD/CYQD8CbD+g8QEDg+GfjhQGijiFggvQFngzLHFLQK2E4NaneIBMgrQOgodW3NWQKUEZJQnxQEgjxDhApIAIABQBSAMCNA1QCNA1BfA8QBaA4BbgLQBggJCSg7QCTg7B8ABQCDAFDzCDQD8CMEziFQE7h6HrFSQDaB5DFiBQDDiGBvD8MAAAAkFMjvrAAAg");
	this.shape_93.setTransform(767.025,153.2809);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#3399CC").s().p("Eh31AXUMAALghIQH6nlHWh/QHPh4DYATQDXATGQCOQGSCMEBCbQD+CcEBg8QEFg/GjjjQGmjkFjgvQFqgyLNFPQK9E8NhnjIBNgrQOnojXENfQKaEcJVn2QEijzDjApIAIABQBRAMCIA0QCKAzBcA6QBYA3BZgLQBdgICNg4QCPg5B5ABQCAAGDsCAQD0CIEqh/QEzh0HbFKQDUB2DAh7QC8iBBsD1MAAAAkFMjvrAAAg");
	this.shape_94.setTransform(767.025,153.2554);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#3399CC").s().p("Eh31AXUMAALghIQH+npHbh/QHUh5DYATQDaAUGUCQQGWCOEDCcQEACeEDg8QEHg/GnjlQGqjmFmgvQFsgzLVFTQLCFBNpnoIBMgsQOwonXSNoQKfEgJan8QElj2DlAqIAIABQBOAMCFAxQCFAzBaA3QBWA2BWgKQBagHCKg3QCKg2B2ACQB8AGDlB8QDuCFEhh5QEphtHNFBQDNBzC6h1QC3h7BoDuMAAAAkEMjvrAAAg");
	this.shape_95.setTransform(767.025,153.2205);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#3399CC").s().p("Eh31AXVMAALghIQIDnuHfiAQHYh5DaAUQDbATGYCSQGaCREFCeQEDCgEFg8QEJhAGsjnQGsjoFqgvQFvgzLbFXQLJFENvnsQAngVAngXQO3otXfNyQKlEjJgoBQEnj5DnArIAIABQBMALCBAwQCBAxBYA2QBSA0BUgJQBYgHCGg0QCGg0ByACQB5AHDeB5QDmCCEYhzQEhhnG9E4QDHBxC0hwQCxh2BlDnMAAAAkFMjvrAAAg");
	this.shape_96.setTransform(767.025,153.1856);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#3399CC").s().p("Eh31AXVMAALghIQIInyHjiAQHch7DcAUQDdAVGcCUQGdCSEICgQEECiEIg9QEMg/GvjpQGwjqFtgwQFygyLiFbQLOFIN4nyQAngVAngXQO+oyXtN8QKrEmJkoGQEqj8DpArIAHABQBKALB9AvQB+AvBVA0QBQAyBRgIQBWgGCBgyQCCgxBvADQB2AHDWB2QDfB+EPhtQEYhhGvEwQDABuCuhqQCrhxBiDgMAAAAkFMjvrAAAg");
	this.shape_97.setTransform(767.025,153.1601);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#3399CC").s().p("Eh31AXVMAALghIQIMn2HniBQHhh8DeAWQDfAVGfCVQGhCVEKCiQEHCkEKg9QEOhAGzjrQG0jsFwgwQF1gyLoFfQLVFMN/n2IBPgtQPFo3X6OFQKxEpJqoMQEsj+DrAsIAHAAQBIALB5AuQB5AtBTAzQBOAwBOgIQBUgFB9gvQB+gvBrADQByAIDQBzQDYB6EGhmQEPhbGgEnQC5BrCohkQClhrBfDZMAAAAkEMjvrAAAg");
	this.shape_98.setTransform(767.025,153.1251);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#3399CC").s().p("Eh31AXWMAALghIQIRn7HriBQHlh9DgAWQDhAWGjCXQGlCWEMClQEJCmEMg+QEQhAG3jtQG4juFzgwQF4gzLvFjQLaFQOHn6IBPguQPMo8YJOPQK2EsJvoRQEvkADsArIAHABQBGALB1ArQB2AsBQAyQBLAuBMgHQBRgFB5gsQB6gtBoAEQBvAJDIBvQDRB3D9hhQEGhUGREeQCzBoCiheQCfhlBcDRMAAAAkFMjvrAAAg");
	this.shape_99.setTransform(767.025,153.0901);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#3399CC").s().p("Eh31AXWMAALghIQIVn/HwiCQHph+DiAXQDiAWGnCZQGpCZEOCmQEMCoEOg+QEShAG7jvQG8jxF2gvQF7gzL1FnQLgFUOPoAIBQgtQPTpCYXOYQK7EwJ0oWQEykEDuAtIAHAAQBEALBxAqQBxAqBOAwQBJAtBKgHQBOgEB1gqQB2gqBkAEQBsAKDBBrQDKB0DzhbQD+hOGCEWQCsBlCchZQCZhfBZDKMAAAAkFMjvrAAAg");
	this.shape_100.setTransform(767.025,153.0646);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#3399CC").s().p("Eh31AXWMAALghIQIaoDH0iDQHth+DkAXQDkAXGrCbQGsCaEQCpQEOCqERg/QEVhAG+jxQHAjzF5gwQF9gyL9FrQLmFYOWoFIBRguQPapGYkOhQLBEzJ6obQE0kGDwAsIAGABQBDAKBsApQBuApBLAtQBHAsBHgGQBMgEBxgnQBxgoBhAFQBoAKC6BoQDDBwDrhUQD0hIFzENQCmBjCWhUQCUhZBVDDMAAAAkEMjvrAAAg");
	this.shape_101.setTransform(767.025,153.0296);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#3399CC").s().p("Eh31AXXMAALghIQIeoIH4iDQHzh/DlAXQDmAYGvCdQGvCcETCqQEQCsETg+QEXhBHCjzQHEj1F8gwQGAgzMDFvQLsFcOeoJIBSguQPhpMYyOrQLHE2J+ogQE3kJDyAtIAGABQBAAJBpAnQBqAoBJAsQBEAqBEgFQBKgDBsgmQBuglBeAGQBkAKCzBlQC7BtDihOQDrhCFlEEQCfBgCQhOQCOhUBSC8MAAAAkFMjvrAAAg");
	this.shape_102.setTransform(767.025,152.9945);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#3399CC").s().p("Eh31AXXMAALghIQIjoMH8iEQH3iADnAYQDoAYGyCfQG0CeEUCtQETCtEVg+QEZhCHGj1QHIj2F/gwQGDgzMKFzQLyFgOmoOIBRgvQPppRY/O1QLNE5KDomQE6kLD0AtIAFABQA/AJBlAmQBlAmBHAqQBBAoBCgEQBHgDBpgiQBpgjBbAGQBhALCrBhQC1BqDZhIQDig8FVD8QCZBdCLhIQCHhOBPC0MAAAAkFMjvrAAAg");
	this.shape_103.setTransform(767.025,152.9595);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#3399CC").s().p("Eh31AXXMAALghIQInoQIBiFQH7iBDpAZQDpAZG3ChQG3CgEXCuQEVCwEYg/QEahCHKj3QHMj4GCgwQGGgzMQF3QL4FkOuoTIBSgvQPwpWZNO+QLSE8KJorQE7kOD3AuIAFAAQA8AKBhAkQBiAkBEApQA/AmBAgEQBEgBBlghQBlggBXAHQBdALCkBeQCuBnDQhDQDZg1FHDzQCSBaCFhCQCBhJBMCuMAAAAkEMjvrAAAg");
	this.shape_104.setTransform(767.025,152.9339);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#3399CC").s().p("Eh31AXYMAALghIQIsoVIEiFQIAiCDrAaQDrAZG6CjQG7CiEZCwQEXCyEahAQEdhCHOj5QHPj6GGgxQGJgyMXF6QL+FpO1oYQApgXAqgZQP3pbZaPIQLYE/KOowQE+kRD4AvIAFAAQA7AJBdAjQBdAiBCAoQA9AkA9gDQBCgBBggeQBhgdBTAHQBbAMCdBaQCmBjDHg8QDRgwE4DrQCLBYB/g9QB7hDBJCmMAAAAkFMjvrAAAg");
	this.shape_105.setTransform(767.025,152.8988);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#3399CC").s().p("Eh31AXYMAALghIQIwoZIJiGQIEiDDtAaQDtAaG+ClQG+CkEcCyQEZC0EdhAQEfhCHRj7QHTj9GJgwQGMgzMdF/QMEFsO9ocIBUgxQP+pgZoPRQLdFDKUo2QFAkTD6AvIAFAAQA4AJBZAhQBaAhA/AmQA6AjA7gDQBAAABcgcQBcgbBRAIQBWANCWBWQCgBgC+g2QDHgpEpDiQCFBVB5g3QB1g+BGCfMAAAAkFMjvrAAAg");
	this.shape_106.setTransform(767.025,152.8637);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#3399CC").s().p("Eh31AXYMAALghIQI1odINiHQIIiDDvAbQDvAaHBCnQHDCmEdC0QEcC2EfhBQEhhCHVj9QHXj/GMgwQGOgzMlGDQMJFwPFohIBUgxQQGplZ2PaQLiFGKZo7QFDkWD8AvIAEABQA3AJBVAfQBWAfA9AkQA3AiA4gCQA9AABYgZQBZgZBNAJQBTANCPBTQCYBdC1gwQC/gkEaDaQB+BSBzgxQBwg4BCCYMAAAAkEMjvrAAAg");
	this.shape_107.setTransform(767.025,152.8381);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#3399CC").s().p("Eh31AXYMAALghIQI6ohIRiIQIMiEDxAcQDwAbHGCoQHGCoEgC2QEdC4EihBQEjhCHakAQHakAGPgxQGRgzMrGHQMQF0PMomQArgXAqgaQQNpqaDPkQLpFJKdpBQFGkYD+AwIAEAAQA0AIBRAeQBSAeA7AjQA1AfA1gBQA7ABBUgXQBUgWBKAJQBQAOCHBQQCSBZCrgqQC2gdELDRQB4BPBtgsQBqgyA/CRMAAAAkEMjvrAAAg");
	this.shape_108.setTransform(767.025,152.8029);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#3399CC").s().p("Eh31AXZMAALghIQI+omIViIQISiFDyAcQDyAbHJCrQHKCpEiC5QEgC6EkhBQElhDHekCQHekCGSgxQGUgzMyGLQMVF4PVorQAqgXArgaQQUpwaRPuQLuFMKjpGQFIkaEAAvIADABQAzAIBNAcQBOAdA4AgQAzAeAzgBQA4ACBPgUQBRgUBGAKQBMAOCBBNQCKBVCjgkQCtgXD8DJQBxBMBnglQBkgtA8CJMAAAAkFMjvrAAAg");
	this.shape_109.setTransform(767.025,152.7678);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#3399CC").s().p("Eh31AXZMAALghIQJDoqIZiJQIWiGD0AdQD0AcHNCtQHNCrEkC7QEjC7EmhBQEnhDHikEQHikEGUgxQGYgzM4GPQMcF8PcowIBVgxQQcp1aeP3QL0FPKopLQFLkdEBAwIAEAAQAwAIBJAbQBKAbA2AfQAwAcAxAAQA2ACBLgRQBMgSBDAKQBJAPB5BKQCDBSCageQCkgRDuDAQBqBKBhggQBegnA5CCMAAAAkEMjvrAAAg");
	this.shape_110.setTransform(767.025,152.7421);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#3399CC").s().p("Eh31AXZMAALghIQJHovIeiJQIaiGD2AdQD2AdHQCuQHSCtEmC9QElC9EohBQEqhEHlkFQHmkGGXgyQGbgzM+GTQMhGAPlo0IBWgyQQjp6asQAQL5FTKupQQFNkgEDAwIADABQAvAHBFAZQBGAaAzAdQAuAbAuAAQAzADBIgPQBIgPA/AKQBGAQByBGQB8BPCQgYQCbgLDfC4QBkBHBbgbQBYghA2B7MAAAAkEMjvrAAAg");
	this.shape_111.setTransform(767.025,152.7188);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#3399CC").s().p("Eh31AXaMAALghIQJMozIhiKQIfiID4AeQD3AeHVCwQHVCvEoC/QEnC/ErhCQEshEHpkHQHqkIGagyQGegzNFGXQMnGEPso5QArgYAsgbQQqp+a5QJQL/FWKzpWQFPkiEGAxIADAAQAsAIBCAXQBCAYAwAcQAsAZArABQAxAEBDgNQBEgNA8ALQBCARBrBCQB1BMCIgSQCSgFDQCvQBdBEBWgVQBRgbAzBzMAAAAkFMjvrAAAg");
	this.shape_112.setTransform(767.025,152.6836);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#3399CC").s().p("Eh31AXaMAALghIQJQo4ImiKQIjiID6AeQD5AeHYCyQHZCxErDBQEpDBEthCQEuhEHtkKQHtkKGegyQGggyNMGaQMtGIP0o9IBYgzQQxqEbHQTQMEFZK4pbQFSklEIAxIADABQAqAHA9AWQA+AWAvAaQAoAXApACQAvAEA/gKQBAgKA4ALQA/ARBkA/QBtBJB/gMQCJACDBCmQBXBBBQgPQBMgWAvBsMAAAAkFMjvrAAAg");
	this.shape_113.setTransform(767.025,152.6579);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#3399CC").s().p("Eh31AXaMAALghIQJVo8IqiLQIniJD8AfQD7AfHcC0QHcCzEtDDQEsDDEvhDQEwhEHxkMQHxkMGhgyQGjgzNTGfQMyGMP8pCIBZg0QQ4qJbVQdQMKFcK9pgQFUkoEKAyIACAAQApAHA5AUQA6AVAsAZQAmAVAnADQAsAFA6gIQA8gIA1AMQA8ASBcA7QBnBFB2gGQCAAICyCeQBQA/BKgKQBGgRAsBmMAAAAkEMjvrAAAg");
	this.shape_114.setTransform(767.025,152.6227);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#3399CC").s().p("Eh31AXbMAALghIQJZpAIviMQIsiKD9AgQD9AfHfC2QHhC1EvDEQEtDGEyhDQEyhFH1kNQH1kPGkgyQGmgzNZGjQM5GQQDpHQAtgZAsgbQRAqObiQmQMQFfLCplQFXkrELAzIACAAQAnAGA1ATQA2AUAqAWQAkAUAkADQApAGA3gGQA4gFAxANQA4ASBVA4QBgBCBtAAQB3AOCkCVQBJA8BEgEQBAgLApBeMAAAAkFMjvrAAAg");
	this.shape_115.setTransform(767.025,152.5874);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#3399CC").s().p("Eh31AXbMAALghIQJepFIyiMQIxiLD/AgQD+AgHkC4QHkC3ExDHQEwDHE0hEQE1hEH4kQQH5kQGngyQGpgzNgGmQM+GUQMpMQAsgZAtgbQRHqTbwQvQMVFjLHprQFaktENAzIACAAQAkAGAyASQAyARAnAWQAhASAiADQAnAHAzgDQAzgDAuANQA1ATBOA0QBZA/BjAGQBvAUCUCNQBDA5A+ACQA6gGAmBXMAAAAkFMjvrAAAg");
	this.shape_116.setTransform(767.025,152.5617);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#3399CC").s().p("Eh31AXbMAALghIQJipJI3iMQI1iMEBAhQEAAgHoC6QHnC5E0DIQEyDKE2hEQE3hFH8kSQH9kSGqgzQGsgyNmGqQNFGYQTpRQAtgZAtgbQROqZb9Q5QMbFmLNpwQFckwEPA0IACAAQAiAGAtAQQAvAQAkATQAfARAfAEQAlAHAugBQAwAAAqAOQAxATBHAxQBSA7BbANQBlAaCGCEQA8A2A4AIQA0AAAjBQMAAAAkEMjvrAAAg");
	this.shape_117.setTransform(767.025,152.5265);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#3399CC").s().p("Eh31AXcMAALghIQJnpNI7iOQI5iNECAiQEDAhHrC7QHrC7E2DLQE1DLE4hEQE5hFIAkUQIBkUGtgzQGvgzNtGvQNKGcQbpWQAtgZAugcQRVqdcLRCQMgFqLSp2QFfkyERAzIABAAQAhAGApAOQAqAPAiASQAdAPAcAFQAjAHAqACQArACAnAPQAuAUBAAtQBKA4BSASQBdAhB2B7QA2A0AyANQAuAGAgBIMAAAAkFMjvrAAAg");
	this.shape_118.setTransform(767.025,152.4912);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#3399CC").s().p("Eh31AXcMAALghIQJspSI+iOQI+iNEEAiQEFAhHvC+QHvC8E3DNQE3DNE7hEQE7hGIEkVQIFkXGwgyQGxgzN0GyQNRGgQipaIBbg1QRcqjcZRMQMnFsLXp7QFhk0ETAzIABABQAeAFAmANQAmANAgAQQAZANAbAGQAfAIAmAEQAnAFAkAPQArAUA4ArQBEA0BIAYQBUAnBoBzQAvAxAsASQApAMAcBBMAAAAkFMjvrAAAg");
	this.shape_119.setTransform(767.025,152.4655);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#3399CC").s().p("Eh31AXcMAALghIQJwpWJDiOQJCiPEGAjQEGAiHzC/QHzC/E6DPQE5DPE9hFQE+hFIIkYQIIkZGzgyQG0gzN7G2QNWGkQqpfIBcg2QRjqocnRWQMsFwLcqBQFkk3EUA0IABAAQAdAFAhAMQAjALAdAPQAXALAYAGQAdAJAiAHQAjAHAgAQQAnAVAyAnQA8AxBAAeQBKAtBZBqQApAuAmAYQAjASAZA6MAAAAkEMjvrAAAg");
	this.shape_120.setTransform(767.025,152.4302);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#3399CC").s().p("Eh31AXdMAALghIQJ1pbJHiPQJGiPEIAjQEIAjH3DBQH2DBE8DRQE8DRE/hFQFAhGIMkaQILkbG3gzQG3gyOBG6QNcGoQypkQAugaAvgcQRqqtc1RfQMxFzLhqGQFmk6EXA1IABAAQAaAFAeAKQAeAKAbAMQAVAKAVAHQAbAKAeAJQAeAJAdAQQAkAWAqAjQA1AuA3AlQBCAzBKBhQAiArAhAfQAcAWAWAzMAAAAkFMjvrAAAg");
	this.shape_121.setTransform(767.025,152.3949);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#3399CC").s().p("Eh31AXdMAALghIQJ5pfJMiQQJLiQEJAkQEKAjH6DDQH6DDE/DTQE+DTFBhGQFChGIQkcQIPkcG6gzQG6gzOIG+QNiGsQ6poIBcg3QRyqydCRoQM3F3LnqMQFok8EZA1IAAAAQAZAFAZAIQAbAIAYAMIAlAPIAyAWQAbAMAZARQAhAWAjAgIBbBVQA5A5A8BZQAbAoAbAkQAWAdATArMAAAAkFMjvrAAAg");
	this.shape_122.setTransform(767.025,152.3692);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,2.2,1534.1,300.3);


(lib.ocean_gr3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3399CC").s().p("Eh31AXdMAALghIQJ+pjJPiQQJQiRELAkQEMAkH+DFQH+DFFADVQFADVFEhGQFEhHIUkeQITkeG9gzQG9gzOOHCQOOHDR5q3QR5q4dQRyQM8F6LsqRQLsqRGVObMAAAAkEg");
	this.shape.setTransform(767.025,152.3338);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3399CC").s().p("Eh31AXbMAALghIQBThQBThFIBihOQAwglAxgiQA4gnA1gjIBTg0QA7gnA8gkQBEgpBCgiQBhgyBkgjQCTg4CSgnIAWgFQEKhEDSgSQCQgQBxgGQA6gDAxAEIAiADQEJAkH6DEQH6DDE+DTQE+DTFBhFQFChGIPkcQIQkcG5gyQG5gyOIG/QOGG/RxqxQRwqxdARpQM2F3LmqLQLmqMGSOUMAAAAkEMjvrAAAg");
	this.shape_1.setTransform(767.025,152.5189);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3399CC").s().p("Eh31AXaMAALghIQBYhUBXhGIBohPQAxgkA1ggIB0hGQAsgYArgbIB9hNQBIgrBFgiQBkgzBqgfQCagzCagsIAWgFQERhKDfgIQCXgNB1gLQA9gGAzAFIAhADQEIAkH2DBQH2DCE8DSQE7DRE/hEQE/hGILkZQILkZG2gyQG2gyOAG8QOAG7RnqrQRnqrcyRhQMvF0LgqFQLgqGGPOMMAAAAkFMjvrAAAg");
	this.shape_2.setTransform(767.025,152.6957);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3399CC").s().p("Eh31AXYMAALghIQBchZBbhGIBvhPQAzgkA5geIB5hCQAugWAugbICDhQQBLgtBJgiQBngyBxgbIFBhgIAWgGQEZhPDtABQCcgJB6gRQBAgIA1AFIAhADQEFAkHyDAQHyDAE6DQQE4DQE9hEQE8hFIHkXQIIkXGygxQGzgxN4G4QN5G4ReqkQRfqlcjRYQMoFxLbp/QLZqBGMOFMAAAAkFMjvrAAAg");
	this.shape_3.setTransform(767.025,152.8904);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3399CC").s().p("Eh31AXWMAALghIQBhhdBfhHIB1hPQA1gkA8gcICAg9QAwgUAwgcICJhSQBPgvBMgjQBqgyB3gXQClgrCqg1IAXgHQEghUD7ALQChgGCAgXQBCgLA2AGIAhADQEEAjHuC/QHuC/E3DOQE2DOE6hDQE6hEIDkUQIDkVGvgxQGvgwNxG0QNyG1RWqeQRVqfcURPQMiFvLVp6QLTp6GJN9MAAAAkFMjvrAAAg");
	this.shape_4.setTransform(767.025,153.0636);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3399CC").s().p("Eh31AXUMAALghIQBlhhBkhIIB7hPQA3gjBAgaICFg6QAzgSAygcICPhUQBTgxBPgjQBsgyB/gTQCrgoCxg5IAYgHQEnhZEIAUQCngDCFgcQBFgNA4AGIAhADQEBAjHrC9QHqC9E0DNQE0DME3hDQE4hDH/kSQH/kSGrgwQGsgwNqGxQNrGyRMqZQRMqYcGRHQMbFrLPp0QLOp1GFN3MAAAAkEMjvrAAAg");
	this.shape_5.setTransform(767.025,153.2327);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3399CC").s().p("Eh31AXUMAALghIQBqhmBohIICAhQQA5giBEgYICLg2QA2gQA1gdQBFgnBPgvQBXgzBSgjQBvgyCFgPQCxgkC5g+IAZgIQEuheEWAeQCsAACLghQBHgQA6AGIAgAEQEAAiHmC8QHmC7EyDLQExDLE1hCQE2hCH6kQQH7kQGogvQGpgwNiGuQNkGvRDqTQREqTb2Q/QMVFpLJpvQLIpvGCNvMAAAAkFMjvrAAAg");
	this.shape_6.setTransform(767.025,153.2932);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3399CC").s().p("Eh31AXTMAALghIQBvhqBrhJICHhQQA7giBIgWICRgyQA3gOA4gdQBHgoBTgxQBbg1BVgjQBygyCMgLQC3gfDAhEIAagIQE1hjEjAnQCzAECPgnQBKgSA8AHIAgADQD+AiHiC6QHiC6EvDJQEvDKEzhCQEyhCH3kNQH2kNGlgvQGlgvNcGrQNcGrQ7qNQQ6qMboQ1QMOFnLDppQLCpqF/NoMAAAAkFMjvrAAAg");
	this.shape_7.setTransform(767.025,153.3539);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3399CC").s().p("Eh31AXSMAALghIQBzhuBwhKICNhQQA9ghBMgUICWguQA6gMA6geQBKgoBWgzQBfg3BYgjQB1gyCSgHQC9gbDJhJIAZgIQE9hoExAwQC4AHCUgsQBMgVA/AHIAgAEQD7AiHeC4QHfC4EtDIQEsDIEwhBQEwhBHzkLQHykLGhguQGigvNUGnQNWGoQxqGQQyqHbYQuQMIFjK9pjQK8pkF8NhMAAAAkEMjvrAAAg");
	this.shape_8.setTransform(767.025,153.4125);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3399CC").s().p("Eh31AXSMAALghIQB4hzB0hKQBWgwA9ggQA/ghBPgSICdgqQA8gLA8gdQBMgpBag0QBjg6BbgjQB4gyCZgDQDDgYDQhNIAagIQFEhuE+A6QC+AKCagxQBOgYBAAIIAgADQD5AiHbC3QHaC3ErDGQEpDGEuhBQEuhAHukIQHukJGeguQGegtNNGjQNPGlQoqBQQpqAbKQlQMBFgK3pdQK2peF5NZMAAAAkFMjvrAAAg");
	this.shape_9.setTransform(767.025,153.475);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#3399CC").s().p("Eh31AXRMAALghIQB8h3B4hKQBbgxA/ggQBAggBUgRICiglQA+gJA/geQBOgpBfg2QBmg8BegjQB7gyCfABQDJgUDYhSIAbgJQFLhyFMBDQDDANCfg2QBRgaBCAIIAfADQD4AhHWC2QHXC1EoDEQEnDFErhAQEshAHqkFQHqkGGaguQGbgtNGGgQNIGhQfp6QQgp6a7QcQL6FeKxpYQKwpZF2NTMAAAAkEMjvrAAAg");
	this.shape_10.setTransform(767.025,153.5323);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3399CC").s().p("Eh31AXRMAALghIQCBh8B8hLQBfgxBBggQBCgfBXgPICpgiQBAgGBBgfQBQgoBjg5QBpg+BigjQB9gyCnAFQDOgQDghWIAbgKQFTh4FaBNQDIARClg8QBTgdBEAIIAfAEQD2AhHSC0QHSCzEmDDQElDDEog/QEphAHmkDQHmkDGXgtQGYgtM+GdQNBGeQWp1QQXpzasQTQL1FbKqpSQKrpTFyNLMAAAAkFMjvrAAAg");
	this.shape_11.setTransform(767.025,153.5885);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#3399CC").s().p("Eh31AXQMAALghIQCFiACBhLQBjgzBDgeQBEggBbgMQBggSBOgMQBDgEBDgfQBSgpBng7QBthABlgjQCAgyCtAIQDVgLDnhbIAcgLQFah9FnBXQDOATCqhBQBWgfBGAJIAfADQDzAhHPCyQHOCzEjDBQEjDAEmg+QEmg/HikAQHikCGTgsQGUgrM4GZQM5GaQOpvQQOptadQLQLuFYKlpMQKkpNFvNDMAAAAkFMjvrAAAg");
	this.shape_12.setTransform(767.025,153.65);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#3399CC").s().p("Eh31AXPMAALghIQCKiECFhMQBngzBFgfQBGgeBegLQBlgPBQgLQBFgCBFgfQBVgqBqg9QBxhBBogkQCDgyC0ANQDagIDvhgIAdgKQFhiCF1BgQDUAXCuhHQBZgiBIAJIAeAEQDyAgHKCxQHLCxEhC/QEfC/Ekg+QEkg9Hej/QHdj+GQgsQGRgrMwGVQMzGXQEpoQQFpnaOQCQLoFWKfpHQKepIFsM9MAAAAkEMjvrAAAg");
	this.shape_13.setTransform(767.025,153.7058);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#3399CC").s().p("Eh31AXPMAALghIQCOiJCJhNQBsg0BHgdQBHgeBjgJQBogNBSgJQBHgBBIgfQBXgqBug/QB1hDBrgkQCGgyC6ARQDhgED2hlIAegKQFoiHGCBpQDaAaC0hMQBbglBJAKIAfADQDvAhHHCvQHGCvEfC+QEdC9Ehg9QEig9HZj8QHaj8GMgsQGOgqMpGSQMrGUP7piQP8phaAP5QLhFTKZpBQKYpCFpM1MAAAAkFMjvrAAAg");
	this.shape_14.setTransform(767.025,153.7686);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#3399CC").s().p("Eh31AXOMAALghIQCTiNCNhNQBxg1BIgdQBJgdBmgHQBsgMBUgGQBKABBKggQBZgqByhBQB5hFBugkQCJgyDAAUQDnABD/hqIAdgLQFviMGRBzQDfAdC5hRQBegnBLAKIAeADQDuAgHCCuQHDCtEcC8QEbC8Eeg8QEfg9HWj5QHVj6GJgrQGKgqMiGPQMkGRPzpdQPzpbZxPxQLaFQKTo7QKSo9FmMvMAAAAkEMjvrAAAg");
	this.shape_15.setTransform(767.025,153.824);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#3399CC").s().p("Eh31AXOMAALghIQCXiRCShPQB1g1BKgdQBLgcBqgFQBvgKBXgFQBMAEBMggQBbgrB2hDQB9hHBxgkQCMgyDHAYQDtAFEGhvIAegLQF2iRGeB8QDlAgC+hWQBggqBOALIAeADQDrAfG/CtQG+CsEaC6QEYC6Ecg8QEdg8HRj3QHSj3GFgqQGGgpMcGLQMdGNPppWQPqpVZiPoQLUFOKNo2QKMo3FjMnMAAAAkFMjvrAAAg");
	this.shape_16.setTransform(767.025,153.894);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#3399CC").s().p("Eh31AXNMAALghIQCciVCVhPQB6g3BMgbQBNgcBtgEQB0gHBYgDQBPAFBOggQBdgrB6hFQCBhJB0gkQCOgyDOAcQDzAJEOh0IAfgLQF9iXGsCGQDqAjDEhbQBigtBQALIAdADQDqAgG6CrQG7CqEXC5QEWC4Eag7QEag7HNj1QHNj1GCgpQGDgpMUGIQMWGKPgpRQPipOZTPgQLNFKKHowQKHoxFfMgMAAAAkEMjvrAAAg");
	this.shape_17.setTransform(767.025,153.941);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#3399CC").s().p("Eh31AXNMAALghIQChiaCZhQQB+g3BOgbQBOgbBygCQB3gGBbAAQBQAHBRghQBggqB9hIQCFhLB3gkQCRgzDVAhQD4AMEWh4IAggMQGEibG6CPQDwAnDIhhQBlgvBSALIAdADQDnAfG3CpQG3CpEUC3QEUC3EXg6QEYg7HIjyQHJjzGAgpQF+goMOGFQMPGGPXpKQPYpIZEPXQLHFIKBorQKBosFcMZMAAAAkFMjvrAAAg");
	this.shape_18.setTransform(767.025,153.9957);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#3399CC").s().p("Eh31AXMMAALghIQClieCehRQCCg4BQgaQBQgbB1AAQB7gDBdABQBTAJBTghQBigrCBhJQCIhNB7glQCUgyDbAkQD/AREdh9IAggNQGMigHHCYQD2AqDOhmQBngyBTAMIAdADQDmAfGyCoQGzCnESC2QERC1EVg6QEVg6HFjwQHFjwF7goQF8goMGGBQMIGDPOpEQPQpCY1POQLAFGJ7olQJ7omFZMRMAAAAkFMjvrAAAg");
	this.shape_19.setTransform(767.025,154.0589);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#3399CC").s().p("Eh31AXLMAALghIQCqiiCihRQCGg5BSgaQBSgaB5ACQB+gCBgAEQBVALBVgiQBkgrCFhLQCMhPB+glQCXgyDiAoQEEAVEliCIAhgNQGTimHVCiQD7AuDThsQBqg0BVAMIAdADQDjAfGvCmQGvClEQC0QEOC0ESg6QETg5HBjtQHAjuF4goQF4gnL/F+QMBGAPFo+QPHo8YnPGQK5FCJ1ofQJ1ohFWMLMAAAAkEMjvrAAAg");
	this.shape_20.setTransform(767.025,154.1134);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#3399CC").s().p("Eh31AXLMAALghIQCuinCmhSQCLg6BUgZQBUgZB8AEQCDAABhAGQBXANBYgiQBmgsCJhNQCQhRCBglQCagyDoAsQELAZEtiHIAhgNQGairHiCrQEBAxDYhxQBtg3BXANIAcACQDiAfGrClQGqCkEOCyQEMCyEPg5QERg5G8jqQG9jrFzgoQF2gmL4F6QL6F8O8o4QO+o2YXO+QKzE/JwoZQJuobFTMDMAAAAkFMjvrAAAg");
	this.shape_21.setTransform(767.025,154.1834);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#3399CC").s().p("Eh31AXKMAALghIQCzirCqhSQCQg7BVgZQBVgYCBAGQCGACBkAHQBZAPBagiQBogsCOhPQCThTCEglQCdgzDvAxQEQAcE1iLIAigOQGhiwHwC1QEGA0Deh2QBvg6BZANIAcADQDfAeGnCjQGnCjELCxQEKCwENg4QEOg4G4jpQG4joFxgnQFygmLwF3QLzF5OzoyQO1owYJO1QKsE9JqoUQJooVFQL8MAAAAkEMjvrAAAg");
	this.shape_22.setTransform(767.025,154.2301);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#3399CC").s().p("Eh31AXKMAALghIQC3iwCvhTQCUg7BXgYQBXgYCFAIQCJADBmAKQBcARBcgiQBrgtCRhRQCXhVCHgmQCfgyD2A1QEXAgE8iQIAigOQGpi1H9C+QEMA3Djh7QByg8BbANIAbADQDeAeGjChQGjChEICvQEHCvELg4QELg3G0jmQG1jmFtgmQFugmLqF0QLrF2OrosQOroqX6OsQKmE6JkoOQJjoQFML1MAAAAkFMjvrAAAg");
	this.shape_23.setTransform(767.025,154.2842);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#3399CC").s().p("Eh31AXJMAALghIQC8i0CyhTQCZg9BZgXQBZgYCIAKQCNAGBoAMQBfATBegjQBtgsCVhUQCbhXCKgmQCigyD9A5QEcAkFEiVIAjgOQGwi7ILDIQESA7DoiBQB0g/BdAOIAbACQDcAeGeCgQGfCgEGCtQEFCtEIg3QEJg3GwjjQGwjkFqgmQFrgkLiFwQLlFyOhomQOjojXrOjQKfE4JeoJQJdoKFJLuMAAAAkEMjvrAAAg");
	this.shape_24.setTransform(767.025,154.3477);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#3399CC").s().p("Eh31AXIMAALghIQDAi4C3hUQCdg9BbgXQBbgXCMAMQCRAHBqAOQBgAVBhgjQBvgtCZhWQCfhZCNglQClgzEDA9QEiAoFMiZIAkgPQG3jAIZDSQEXA9DtiGQB2hBBfAOIAbADQDaAdGbCeQGbCeEDCsQEDCrEFg2QEHg2GsjhQGsjhFmglQFogkLbFsQLdFvOYogQOaodXcObQKZE1JYoDQJXoFFGLnMAAAAkEMjvrAAAg");
	this.shape_25.setTransform(767.025,154.4017);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#3399CC").s().p("Eh31AXIMAALghIQDFi9C7hVQChg+BdgWQBcgWCQANQCVAKBsAQQBjAXBjgkQBxgtCdhYQCjhbCQglQCogzEKBBQEoAsFTieIAlgQQG+jEImDbQEdBADyiLQB5hEBhAPIAbACQDYAeGWCcQGXCdECCqQD/CpEDg1QEEg2GojeQGnjfFkglQFkgjLUFpQLXFsOPoaQORoXXNOSQKSEyJSn9QJRn/FDLfMAAAAkFMjvrAAAg");
	this.shape_26.setTransform(767.025,154.4718);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#3399CC").s().p("Eh31AXHMAALghIQDJjBDAhVQClg/BfgWQBegVCUAPQCYAMBvASQBlAYBlgkQB0gtCghZQCnheCTgmQCrgyEQBFQEuAwFcijIAkgQQHGjKI0DlQEiBED4iRQB7hHBjAPIAaADQDWAdGTCbQGTCbD/CoQD9CoEBg1QEBg0GkjcQGjjdFggkQFhgjLNFmQLPFoOGoUQOIoQW/OJQKLEvJMn3QJLn5FALYMAAAAkEMjvrAAAg");
	this.shape_27.setTransform(767.025,154.5184);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#3399CC").s().p("Eh31AXHMAALghIQDOjGDDhVQCqhABhgVQBggWCXASQCcANBxAUQBoAbBngkQB2guCkhbQCqhgCXgmQCugyEXBJQE0A0FjioIAlgQQHNjPJBDuQEoBHD9iWQB+hJBlAPIAaADQDUAcGPCaQGPCZD8CnQD7CmD+g0QD/g0GfjaQGfjaFdgjQFegiLFFiQLIFlN9oOQOAoLWvOCQKFEsJGnyQJFn0E9LRMAAAAkFMjvrAAAg");
	this.shape_28.setTransform(767.025,154.5722);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#3399CC").s().p("Eh31AXGMAALghIQDTjKDHhWQCvhBBhgUQBjgVCbAUQCgAPBzAWQBpAdBqglQB4guCohdQCuhiCagmQCwgyEeBMQE6A5FritIAmgRQHUjUJPD4QEuBKECibQCAhMBnAQIAaACQDRAdGLCYQGLCYD6ClQD5CkD7gzQD9g0GbjXQGbjYFZgjQFaghK/FfQLBFhN0oHQN2oFWhN5QJ+EpJAnsQJAnuE5LKMAAAAkEMjvrAAAg");
	this.shape_29.setTransform(767.025,154.6359);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#3399CC").s().p("Eh31AXGMAALghIQDXjODMhXQCzhCBjgUQBkgUCfAVQCkASB1AYQBsAeBsglQB6guCshfQCyhkCdgmQCzgyElBQQFAA9FyiyIAngRQHbjZJcEBQE0BNEHihQCDhOBoAQIAaADQDQAcGHCXQGHCWD3CjQD2CjD5gzQD6gyGXjVQGXjVFWgjQFXghK3FcQK6FeNroCQNun+WRNwQJ4EnI7nnQI5noE2LCMAAAAkFMjvrAAAg");
	this.shape_30.setTransform(767.025,154.6888);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#3399CC").s().p("Eh31AXFMAALghIQDcjTDPhXQC4hDBlgTQBmgTCjAXQCnATB3AaQBvAhBugmQB8guCwhiQC2hlCggnQC2gyErBVQFGBAF6i2IAngSQHjjeJqEKQE5BREMimQCGhRBqARIAZACQDOAcGDCVQGDCVD2CiQDzChD2gzQD4gyGSjSQGTjTFTgiQFUggKwFYQKyFbNin8QNln4WDNoQJxEjI1ngQIznjEzK7MAAAAkFMjvrAAAg");
	this.shape_31.setTransform(767.025,154.7597);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#3399CC").s().p("Eh31AXEMAALghIQDgjXDUhYQC8hDBngTQBogTCmAZQCrAWB6AcQBwAiByglQB+gvCzhkQC6hnCjgnQC5gyEyBYQFLBFGCi7IAogSQHqjkJ4EUQE+BUESirQCIhUBsARIAZADQDMAcF/CTQF/CTDzCgQDxCgDzgyQD2gxGOjQQGPjRFPghQFQggKpFVQKsFYNZn2QNbnyV1NfQJqEhIvnbQItndEwK0MAAAAkEMjvrAAAg");
	this.shape_32.setTransform(767.025,154.8062);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#3399CC").s().p("Eh31AXEMAALghIQDljbDYhZQDAhEBpgSQBqgTCqAbQCvAXB7AeQBzAlB0gmQCAgvC3hmQC+hpCmgnQC8gyE4BcQFSBJGKjAIAogSQHxjpKFEdQFEBXEXiwQCLhWBuARIAZADQDJAbF7CSQF7CSDxCeQDuCeDygxQDzgxGJjOQGLjNFMghQFNgfKiFRQKkFUNQnvQNTnsVlNWQJkEeIpnVQInnYEtKtMAAAAkFMjvrAAAg");
	this.shape_33.setTransform(767.025,154.8597);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#3399CC").s().p("Eh31AXDMAALghIQDpjfDdhaQDEhFBrgRQBrgSCuAdQCzAZB+AgQB1AnB2gnQCCgvC8hoQDBhrCpgnQC/gyE/BgQFXBNGSjFIApgTQH4juKTEnQFJBbEdi2QCMhZBxASIAYACQDIAbF3CRQF3CQDuCdQDsCcDvgxQDwgwGGjLQGHjLFIggQFJgfKbFOQKeFRNHnqQNJnlVXNNQJdEcIjnQQIhnSEqKmMAAAAkEMjvrAAAg");
	this.shape_34.setTransform(767.025,154.9236);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#3399CC").s().p("Eh31AXDMAALghIQDujkDghaQDKhGBsgRQBtgRCyAfQC2AbCAAiQB4AoB4gmQCEgwDAhqQDFhtCsgnQDBgyFGBkQFeBQGZjJIApgTQH/jzKhEwQFPBeEii8QCPhbByASIAZADQDFAbFzCPQF0CODrCbQDqCbDsgwQDugwGBjIQGDjJFFggQFGgeKTFLQKXFNM+njQNBngVHNFQJXEZIdnKQIcnMEmKeMAAAAkFMjvrAAAg");
	this.shape_35.setTransform(767.025,154.9764);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#3399CC").s().p("Eh31AXDMAALghIQDyjoDlhbQDOhHBugQQBvgQC1AgQC6AdCDAkQB5ArB7goQCGgvDEhsQDIhwCwgnQDEgyFMBoQFkBVGhjOIAqgUQIGj4KvE6QFVBhEmjBQCSheB0ATIAYACQDEAbFvCNQFvCNDpCaQDnCYDqgvQDrgvF+jGQF/jGFBgfQFDgeKMFHQKPFKM1ndQM4nZU5M8QJQEWIXnEQIWnHEjKXMAAAAkFMjvrAAAg");
	this.shape_36.setTransform(767.025,154.9859);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#3399CC").s().p("Eh31AXDMAALghIQD3jtDphbQDShIBwgPQBxgQC5AiQC+AfCEAmQB8AtB9goQCJgwDHhuQDMhxCzgnQDHgzFTBtQFqBYGojTIArgUQINj9K8FDQFbBkEsjGQCUhgB2ATIAYACQDBAbFrCLQFsCMDnCYQDkCXDngvQDpguF6jEQF6jEE+geQE/gdKFFEQKJFGMsnXQMvnTUqM0QJJETIRm/QIQnBEgKQMAAAAkFMjvrAAAg");
	this.shape_37.setTransform(767.025,154.9687);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#3399CC").s().p("Eh31AXDMAALghIQD7jxDthcQDXhIBygPQBygPC9AkQDCAhCHAoQB+AvB/goQCLgwDLhxQDQhzC2gnQDKgzFZBxQFwBcGwjYIAsgUQIUkCLKFMQFgBoExjMQCXhjB4ATIAXADQDAAaFnCKQFnCKDlCWQDiCWDlguQDlguF2jBQF3jBE6geQE8gdJ+FBQKBFDMjnRQMmnNUbMrQJDEQILm5QIKm7EdKJMAAAAkEMjvrAAAg");
	this.shape_38.setTransform(767.025,154.9388);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#3399CC").s().p("Eh31AXDMAALghIQEAj1DxhdQDbhJB0gOQB0gPDBAmQDFAjCJAqQCAAxCCgpQCNgwDPhyQDUh2C5gnQDNgyFgB0QF1BgG4jcIAsgVQIckHLYFWQFlBqE3jRQCZhlB6AUIAXACQC+AaFjCJQFjCIDiCVQDgCTDhgtQDkgtFyi/QFyi/E3gdQE5gcJ2E9QJ7FAMZnLQMenHUMMiQI8EOIGmzQIDm2EaKCMAAAAkEMjvrAAAg");
	this.shape_39.setTransform(767.025,154.9165);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#3399CC").s().p("Eh31AXEMAALghIQEFj6D1hdQDfhKB2gOQB2gODFAoQDJAlCKAsQCDAyCEgoQCPgxDTh0QDYh4C8gnQDQgyFmB4QF8BkHAjhIAsgVQIjkNLlFgQFrBuE8jXQCchoB7AUIAXADQC8AZFfCIQFgCGDfCTQDdCSDfgtQDigsFui8QFui9EzgcQE1gbJwE5QJzE9MRnGQMUnAT9MaQI2ELIAmuQH9mwEXJ6MAAAAkFMjvrAAAg");
	this.shape_40.setTransform(767.025,154.8861);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#3399CC").s().p("Eh31AXEMAALghIQEJj+D6heQDjhLB4gNQB4gODIAqQDNAnCNAuQCFA1CGgpQCSgxDWh3QDch5C/goQDSgyFuB8QGBBoHIjlIAtgWQIqkSLzFpQFxBxFAjbQCfhrB9AVIAXACQC6AZFbCGQFbCFDdCRQDbCRDcgsQDggsFpi6QFqi6EwgcQEygbJoE2QJsE6MInAQMLm6TvMRQIvEJH6moQH4mrETJzMAAAAkFMjvrAAAg");
	this.shape_41.setTransform(767.025,154.8554);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#3399CC").s().p("Eh31AXEMAALghIQEOkCD9hfQDphLB5gNQB6gNDMAsQDQApCPAwQCIA2CIgpQCUgxDah5QDgh7DCgoQDVgyF0CAQGIBsHPjqIAugWQIxkXMAFyQF3B0FGjgQCghuCAAVIAWADQC4AZFXCEQFYCEDaCPQDYCPDagsQDdgqFmi4QFli4EtgcQEvgZJhEyQJlE2L+m5QMDm0TgMIQIoEGH0miQHymlEQJsMAAAAkEMjvrAAAg");
	this.shape_42.setTransform(767.025,154.8326);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#3399CC").s().p("Eh31AXEMAALghIQESkGEChgQDthMB7gMQB7gMDQAtQDUArCSAyQCJA4CLgpQCWgyDeh6QDkh+DFgnQDYgzF7CEQGNBxHXjwIAugWQI5kcMOF8QF8B3FLjmQCjhwCCAVIAWADQC2AZFTCCQFTCCDZCOQDUCNDZgrQDagqFhi1QFii1EpgbQErgZJaEvQJeEyL2mzQL5muTRMAQIiEDHumdQHsmfENJlMAAAAkEMjvrAAAg");
	this.shape_43.setTransform(767.025,154.8015);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#3399CC").s().p("Eh31AXFMAALghIQEXkLEGhgQDxhOB9gLQB9gLDUAvQDYAtCTA0QCMA6CNgqQCYgyDih8QDoiADIgoQDbgyGBCIQGUB0Hej0IAvgXQJAkhMcGGQGBB6FQjrQCmhzCEAWIAVACQC0AZFPCBQFQCBDVCMQDTCLDWgqQDYgpFdizQFdizEmgbQEogYJTErQJWEwLtmtQLxmoTCL3QIbEAHomWQHmmaEKJdMAAAAkFMjvrAAAg");
	this.shape_44.setTransform(767.025,154.7702);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#3399CC").s().p("Eh31AXFMAALghIQEbkPEKhgQD2hPB/gLQB/gLDXAyQDcAuCWA3QCOA8CPgrQCagxDmh/QDriCDMgoQDegyGICMQGZB4Hmj5IAwgXQJHkmMpGPQGHB+FWjxQCoh1CFAWIAWACQCyAZFLB/QFMB/DSCLQDRCJDTgpQDWgpFZiwQFZixEigaQElgYJLEoQJQEsLkmnQLnmhSzLuQIVD+HimRQHgmVEHJXMAAAAkEMjvrAAAg");
	this.shape_45.setTransform(767.025,154.7469);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#3399CC").s().p("Eh31AXFMAALghIQEgkUEOhgQD6hQCBgKQCBgKDbAzQDfAwCYA5QCRA+CRgrQCdgyDpiAQDviEDOgoQDigzGOCQQGfB9Huj+IAxgYQJOkrM3GYQGMCBFbj2QCrh3CHAWIAVACQCwAZFHB9QFHB+DRCJQDOCIDRgpQDTgoFViuQFViuEfgaQEhgXJFElQJIEoLbmhQLfmbSkLmQIOD7HcmMQHamOEEJPMAAAAkEMjvrAAAg");
	this.shape_46.setTransform(767.025,154.7152);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#3399CC").s().p("Eh31AXGMAALghIQEkkYEThiQD+hQCDgKQCCgJDfA1QDjAyCbA7QCSBACUgrQCfgzDuiCQDyiGDRgoQDkgzGWCUQGlCAH2kCIAwgYQJWkxNEGiQGTCFFgj8QCth6CJAXIAVACQCuAYFDB8QFDB8DOCHQDMCHDOgpQDRgnFRirQFRisEbgZQEegXI9EiQJBElLSmbQLWmVSVLdQIID4HWmGQHVmJEAJIMAAAAkFMjvrAAAg");
	this.shape_47.setTransform(767.025,154.6834);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#3399CC").s().p("Eh31AXGMAALghIQEpkdEXhiQEChRCFgJQCEgJDjA3QDnA0CcA9QCVBCCWgsQChgyDyiFQD2iHDUgpQDngyGcCYQGrCEH+kHIAxgZQJdk2NSGsQGYCHFlkBQCwh8CLAXIAUACQCsAYFAB7QE+B6DMCGQDKCEDMgoQDOgmFMipQFNipEYgZQEagWI2EeQI7EiLJmVQLNmPSGLVQIBD1HRmAQHOmDD9JAMAAAAkFMjvrAAAg");
	this.shape_48.setTransform(767.025,154.6598);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#3399CC").s().p("Eh31AXGMAALghIQEtkhEbhiQEIhSCGgJQCGgIDmA5QDrA2CeA/QCYBECYgsQCjgzD2iHQD6iJDXgpQDqgzGjCcQGxCJIFkMIAygZQJkk7NfG1QGeCLFqkHQCzh/CNAYIAUACQCqAXE7B5QE7B5DKCEQDHCDDJgnQDMgmFIimQFJinEUgYQEXgVIvEaQIzEfLAmPQLEmJR4LMQH6DyHLl6QHIl+D6I6MAAAAkEMjvrAAAg");
	this.shape_49.setTransform(767.025,154.6276);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#3399CC").s().p("Eh31AXHMAALghIQEyklEfhkQEMhTCIgHQCIgIDqA7QDuA4ChBAQCZBGCbgsQCmgzD5iJQD+iLDagpQDtgzGpCgQG3CNINkRIAzgaQJrlANtG/QGjCOFwkMQC1iCCOAYIAVACQCnAYE3B3QE4B4DHCCQDECBDHgmQDJgmFEikQFFikERgXQEUgVInEXQItEbK2mJQK7mDRpLEQH0DwHFl1QHCl4D3IyMAAAAkFMjvrAAAg");
	this.shape_50.setTransform(767.025,154.5953);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#3399CC").s().p("Eh31AXHMAALghIQE3kqEjhkQEQhTCJgHQCKgIDuA9QDyA6CjBDQCcBHCdgsQCog0D9iKQECiODdgpQDwgyGwCkQG8CQIVkWIAzgZQJzlGN6HIQGpCRF1kQQC3iFCRAZIAUACQCmAXEyB2QE0B2DFCAQDCCADEgmQDHglFAihQFAiiEOgXQEQgUIhETQIlEYKumDQKyl8RaK7QHtDtG/lvQG8lzD0IrMAAAAkFMjvrAAAg");
	this.shape_51.setTransform(767.025,154.5714);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#3399CC").s().p("Eh31AXHMAALghIQE7kuEnhkQEVhVCLgGQCMgHDyA/QD2A8ClBEQCeBKCfgtQCqgzEBiNQEGiQDggpQDzgzG2CoQHDCVIckbIA0gaQJ6lKOIHRQGvCVF5kWQC6iICTAZIATACQCkAXEvB0QEwB1DCB/QDAB+DBglQDFglE8ifQE8ifEKgWQENgUIZEQQIeEVKll9QKpl3RLKzQHoDqG4lpQG2ltDxIkMAAAAkEMjvrAAAg");
	this.shape_52.setTransform(767.025,154.5388);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#3399CC").s().p("Eh31AXHMAALghIQFAkyErhlQEZhVCNgGQCOgGD1BAQD6A+CnBHQChBLChgtQCsg0EFiPQEJiRDkgqQD1gyG+CsQHICYIlkfIA0gbQKBlPOWHbQG0CXF/kbQC8iKCVAaIATACQChAWErBzQEsBzDAB9QC9B8DAgkQDBgkE4icQE4idEHgWQEKgTISENQIXERKbl3QKhlwQ8KqQHhDnGylkQGxlnDtIdMAAAAkEMjvrAAAg");
	this.shape_53.setTransform(767.025,154.5061);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#3399CC").s().p("Eh31AXIMAALghIQFEk3EwhmQEdhWCPgFQCQgGD5BDQD9BACqBIQCiBOCkguQCug0EJiRQENiTDngqQD4gyHECwQHPCcIskkIA1gbQKIlVOjHlQG6CbGEkhQC/iNCWAaIATACQCgAWEnByQEoBxC9B8QC7B6C9gkQC/giE0ibQE0iaEDgVQEGgTILEJQIQEOKTlwQKXlrQuKiQHaDkGsleQGrlhDqIVMAAAAkFMjvrAAAg");
	this.shape_54.setTransform(767.025,154.4819);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#3399CC").s().p("Eh31AXIMAALghIQFJk7E0hmQEihXCQgFQCRgFD+BFQEABBCsBLQClBQCnguQCwg1EMiTQERiVDqgqQD7gyHLCzQHUChI0kpIA1gbQKQlaOxHuQG/CeGKkmQDBiPCXAaIATACQCeAWEkBwQEkBvC7B6QC4B5C6gjQC9giEviYQEwiYEAgVQEDgRIEEFQIJELKJlrQKPlkQeKZQHUDiGmlZQGllcDnIPMAAAAkEMjvrAAAg");
	this.shape_55.setTransform(767.025,154.4491);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#3399CC").s().p("Eh31AXIMAALghIQFNk/E4hnQEnhYCSgEQCTgEEBBGQEFBDCuBNQCnBSCpguQCyg1EQiVQEViYDtgqQD+gyHRC4QHbCkI7ktIA2gcQKXlfO+H3QHFCiGPksQDDiRCaAaIATACQCcAWEfBuQEgBuC5B5QC1B3C4gjQC7ghEriWQEsiVD8gUQEAgSH8EDQICEHKBllQKFldQQKQQHNDfGglTQGflWDkIHMAAAAkEMjvrAAAg");
	this.shape_56.setTransform(767.025,154.4161);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#3399CC").s().p("Eh31AXJMAALghIQFSlEE8hoQErhYCUgEQCVgDEFBIQEIBFCwBPQCpBUCsgvQC0g1EUiXQEZiaDwgqQEBgyHYC8QHgCoJDkyIA3gcQKdllPNIBQHKClGUkxQDGiUCcAbIASACQCaAVEcBtQEcBtC2B2QCzB2C1giQC4ghEoiTQEniTD5gUQD8gQH2D/QH6EDJ4leQJ8lYQBKIQHHDcGblNQGYlRDhIAMAAAAkFMjvrAAAg");
	this.shape_57.setTransform(767.025,154.3917);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#3399CC").s().p("Eh31AXJMAALghIQFWlIFBhpQEvhZCWgDQCXgDEIBKQEMBHCyBRQCsBWCugvQC2g2EYiZQEdibDzgqQEEgzHeDAQHmCsJLk3IA4gcQKklqPaILQHRCnGYk2QDJiWCeAbIASACQCYAVEXBrQEYBrC0B1QCxB0CzghQC1ggEjiRQEkiQD1gTQD5gQHuD7QH0EBJulZQJ0lRPyJ/QHADZGVlHQGSlLDeH4MAAAAkFMjvrAAAg");
	this.shape_58.setTransform(767.025,154.3585);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#3399CC").s().p("Eh31AXJMAALghIQFblMFEhpQE0haCYgDQCYgCENBMQEPBJC1BTQCuBYCwgwQC4g1EdicQEgidD2gqQEGgzHmDEQHsCwJTk8IA3gdQKsluPoIUQHWCrGdk8QDMiZCgAcIARACQCWAUEUBqQEUBqCxBzQCvByCwghQCzgfEfiOQEfiODygTQD1gPHoD4QHsD9JmlSQJqlMPkJ3QG5DWGPlBQGNlGDaHyMAAAAkEMjvrAAAg");
	this.shape_59.setTransform(767.025,154.3252);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#3399CC").s().p("Eh31AXJMAALghIQFflQFJhqQE4hbCagCQCagCEQBOQEUBLC2BVQCxBaCygwQC7g2EgidQEkigD5gqQEJgzHsDIQHyC0JblAIA4gdQKzl0P2IdQHbCuGjlAQDNicCiAcIASACQCUAUEPBoQERBpCvBxQCrBxCuggQCxgfEaiMQEciMDugRQDygPHgD0QHlD6JdlMQJilFPUJtQGzDUGJk8QGHlADXHrMAAAAkEMjvrAAAg");
	this.shape_60.setTransform(767.025,154.3006);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#3399CC").s().p("Eh31AXKMAALghIQFklVFNhrQE8hcCcgBQCcgBEUBQQEXBNC5BXQCyBbC1gwQC9g2EkifQEoiiD8gqQEMgzHzDMQH4C4JilFIA5geQK6l5QDInQHhCyGolGQDQifCkAdIARABQCSAVEMBmQEMBnCtBwQCpBuCrgfQCugeEXiJQEXiJDrgSQDvgOHZDxQHeD3JTlHQJZk/PGJmQGsDRGDk3QGBk6DUHjMAAAAkFMjvrAAAg");
	this.shape_61.setTransform(767.025,154.2672);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#3399CC").s().p("Eh31AXKMAALghIQFplZFRhrQFBhdCdAAQCegBEXBSQEbBPC7BZQC1BdC3gwQC/g3EoihQErikEAgqQEPgzH5DQQH+C8JqlKIA6geQLBl+QRIwQHlC1GulMQDTihCmAdIARACQCQAUEHBlQEJBlCqBvQCnBtCogfQCsgeESiGQETiHDogRQDrgOHSDuQHXDzJLlAQJQk5O2JdQGmDOF9kwQF7k1DRHcMAAAAkEMjvrAAAg");
	this.shape_62.setTransform(767.025,154.2416);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#3399CC").s().p("Eh31AXKMAALghIQFtleFVhrQFGheCfAAQCfAAEcBUQEeBRC+BbQC3BfC5gwQDBg3EsijQEvimEDgrQESgyH/DTQIFDBJxlPIA6gfQLJmDQeI5QHrC5G0lRQDVikCoAeIAQABQCOAUEEBkQEEBjCoBtQCkBrCngeQCpgdEOiEQEPiEDkgRQDogNHKDrQHRDvJBk6QJHkzOoJVQGfDLF3krQF1kvDOHVMAAAAkEMjvrAAAg");
	this.shape_63.setTransform(767.025,154.208);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#3399CC").s().p("Eh31AXLMAALghIQFyliFZhsQFKhfChABQChAAEfBWQEjBSC/BeQC6BhC7gxQDEg3EvilQEzioEGgrQEVgzIGDYQIKDEJ5lTIA7gfQLQmIQsJCQHxC8G4lWQDYimCpAdIARACQCMAUEABhQEABiClBrQCiBqCkgdQCngdEKiBQEKiCDhgQQDlgMHDDnQHJDsI4k0QI/ktOYJMQGZDJFxkmQFvkpDLHNMAAAAkFMjvrAAAg");
	this.shape_64.setTransform(767.025,154.1833);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#3399CC").s().p("Eh31AXLMAALghIQF2lmFehtQFOhfCjABQCjABEjBXQEmBVDCBfQC7BkC+gyQDGg3EzinQE3iqEJgrQEXgzINDcQIRDIKBlYIA7ggQLXmNQ6JMQH2C/G+lbQDaipCrAeIAQACQCKATD8BgQD9BhCiBpQCgBoChgdQCkgbEGiAQEHh/DdgPQDhgMG8DjQHCDpIwkuQI1kmOKJDQGSDGFrkgQFqkkDHHHMAAAAkEMjvrAAAg");
	this.shape_65.setTransform(767.025,154.1495);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#3399CC").s().p("Eh31AXLMAALghIQF7lrFhhtQFThgClACQClABEmBaQEqBWDEBiQC+BlDAgyQDIg3E3iqQE7isEMgrQEagyIUDfQIWDNKJleIA8ggQLemSRHJWQH8DCHDlhQDdirCtAeIAQACQCIATD4BfQD4BeChBoQCcBmCfgcQCigaECh9QECh9DagPQDegLG1DgQG7DmImkpQItkgN7I7QGLDDFlkaQFkkeDEG/MAAAAkEMjvrAAAg");
	this.shape_66.setTransform(767.025,154.1158);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#3399CC").s().p("Eh31AXMMAALghIQF/lvFmhuQFXhiCnADQCmACErBcQEtBYDGBjQDBBoDCgzQDKg3E7isQE/iuEPgrQEdgyIaDjQIcDQKRliIA8ggQLmmXRVJfQIBDFHIlmQDgiuCvAfIAPABQCGATD0BeQD1BdCeBmQCaBkCcgbQCggaD9h7QD/h6DWgOQDagLGuDdQG0DiIdkiQIkkaNsIyQGFDAFgkUQFdkZDBG4MAAAAkFMjvrAAAg");
	this.shape_67.setTransform(767.025,154.0909);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#3399CC").s().p("Eh31AXMMAALghIQGEl0FqhuQFbhiCpADQCoADEuBdQEyBaDIBmQDCBpDFgzQDMg4E/itQFDiwESgsQEggyIhDoQIiDUKYlnIA9ghQLtmcRhJoQIIDJHOlsQDhiwCyAfIAPACQCEASDwBcQDwBcCcBkQCYBjCZgbQCegZD5h4QD6h5DTgNQDXgKGnDZQGsDfIVkcQIakUNeIpQF+C+FakOQFXkTC+GwMAAAAkFMjvrAAAg");
	this.shape_68.setTransform(767.025,154.057);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#3399CC").s().p("Eh31AXMMAALghIQGIl4FvhvQFghjCqAEQCqAEEyBfQE1BcDKBnQDFBrDHgyQDPg5FCivQFHiyEVgsQEjgyInDrQIoDZKglsIA+ghQL0miRvJyQIODMHSlxQDkizCzAgIAPABQCCATDsBaQDtBaCZBjQCVBhCYgaQCagZD2h2QD2h1DPgNQDUgKGfDWQGmDcILkWQISkONOIhQF4C7FUkJQFRkOC7GqMAAAAkEMjvrAAAg");
	this.shape_69.setTransform(767.025,154.023);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#3399CC").s().p("Eh31AXNMAALghIQGNl9FyhvQFlhkCsAEQCsAEE2BhQE4BfDNBpQDHBtDJgzQDRg5FGixQFLi0EYgsQEmgyIuDvQIuDcKnlwIA/ghQL7mnR8J7QIUDPHYl2QDmi2C1AgIAPACQCAASDoBZQDpBYCWBhQCTBgCVgaQCYgYDxhzQDyhzDMgNQDQgIGZDSQGeDYIDkQQIIkHNAIYQFxC4FOkDQFLkIC4GiMAAAAkFMjvrAAAg");
	this.shape_70.setTransform(767.025,153.998);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#3399CC").s().p("Eh31AXNMAALghIQGRmBF3hwQFphlCuAFQCtAFE6BjQE8BgDPBrQDKBvDLgzQDTg5FLi0QFNi2EcgrQEogzI1D0QI0DgKwl1IA+giQMDmsSKKFQIZDSHdl8QDpi4C3AhIAPABQB+ASDkBXQDkBXCUBgQCRBdCSgZQCWgXDthxQDuhxDIgLQDNgJGRDPQGYDVH5kKQIAkBMxIPQFqC2FIj+QFGkCC0GbMAAAAkFMjvrAAAg");
	this.shape_71.setTransform(767.025,153.9639);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#3399CC").s().p("Eh31AXNMAALghIQGWmFF7hxQFthlCwAFQCvAGE+BkQFABjDRBtQDLBxDOg0QDVg5FPi2QFRi4EfgsQErgyI8D3QI6DlK3l6IA/gjQMKmxSYKPQIeDVHimBQDsi7C5AhIAOACQB8ARDgBWQDhBVCSBeQCOBcCPgYQCUgXDphuQDphuDFgMQDKgHGKDLQGQDSHwkEQH3j7MiIHQFkCyFCj4QFAj8CxGUMAAAAkEMjvrAAAg");
	this.shape_72.setTransform(767.025,153.9298);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#3399CC").s().p("Eh31AXNMAALghIQGbmJF+hyQFyhmCxAGQCyAGFBBnQFEBkDTBvQDOBzDQg0QDXg5FTi4QFVi6EigsQEugzJCD8QJADoK/l/IBAgiQMRm3SlKYQIkDZHomGQDui+C7AiIANABQB7ARDcBUQDcBUCQBdQCLBaCNgYQCRgWDlhsQDlhsDCgKQDGgHGDDIQGJDOHoj+QHuj1MTH+QFdCwE8jyQE6j3CuGNMAAAAkEMjvrAAAg");
	this.shape_73.setTransform(767.025,153.9047);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#3399CC").s().p("Eh31AXOMAALghIQGfmOGDhyQF2hnCzAHQC0AGFFBoQFHBmDWByQDQB1DSg1QDag5FWi6QFZi8ElgsQExgzJJEAQJFDsLHmEIBBgjQMYm7SzKhQIpDcHtmLQDxjAC8AhIAOACQB4ARDYBSQDZBTCNBaQCJBZCLgXQCOgWDhhpQDhhqC+gKQDDgGF8DFQGCDKHej3QHljvMEH1QFXCuE2jtQE0jxCrGFMAAAAkFMjvrAAAg");
	this.shape_74.setTransform(767.025,153.8705);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#3399CC").s().p("Eh31AXOMAALghIQGkmSGHhzQF7hoC0AIQC1AHFJBqQFLBoDYB0QDTB3DUg1QDcg6Fai8QFdi+EogsQE0gzJPEDQJMDxLOmJIBBgjQMgnBTAKrQIwDfHymQQDzjDC+AiIAOABQB2ARDUBRQDVBRCKBZQCHBXCIgWQCMgVDchnQDdhnC7gKQDAgGF0DBQF7DIHVjyQHcjoL2HtQFQCqEwjnQEujsCoF/MAAAAkEMjvrAAAg");
	this.shape_75.setTransform(767.025,153.8363);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#3399CC").s().p("Eh31AXOMAALghIQGomWGMh0QF/hoC2AIQC3AHFNBsQFPBqDZB2QDVB5DXg2QDeg6Fei+QFhjAErgsQE3gzJWEIQJRD0LWmNIBCgkQMnnGTOK1QI1DiH3mWQD2jFDAAiIANACQB0AQDQBPQDRBQCIBXQCEBVCGgVQCKgVDYhkQDZhlC3gJQC8gFFtC+QF1DEHMjsQHTjiLnHkQFJCoErjhQEnjmClF3MAAAAkEMjvrAAAg");
	this.shape_76.setTransform(767.025,153.8111);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#3399CC").s().p("Eh31AXPMAALghIQGtmbGPh0QGEhqC4AJQC5AIFQBuQFTBsDcB4QDXB6DZg1QDgg7FijAQFljBEugtQE5gzJdEMQJYD4LemSIBCgkQMunLTbK+QI7DlH8mbQD5jIDCAjIANABQByAQDMBOQDNBOCFBWQCCBTCDgVQCHgTDVhiQDUhiC0gJQC5gFFmC7QFtDBHDjmQHKjcLYHbQFDClEljbQEijhChFwMAAAAkFMjvrAAAg");
	this.shape_77.setTransform(767.025,153.7767);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#3399CC").s().p("Eh31AXPMAALghIQGxmfGUh1QGIhqC6AJQC7AJFUBwQFWBuDeB5QDaB9Dbg2QDjg7FljCQFpjDExgtQE8gzJkEQQJdD8LmmXIBDglQM0nQTqLIQJADoICmgQD6jLDFAkIAMABQBwAQDIBMQDJBMCDBUQCABSCAgUQCFgTDQhgQDRhfCwgIQC1gEFfC3QFmC9G6jfQHCjXLJHUQE8CiEfjWQEcjbCeFpMAAAAkEMjvrAAAg");
	this.shape_78.setTransform(767.025,153.7424);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#3399CC").s().p("Eh31AXPMAALghIQG2mjGYh1QGMhsC8AKQC8AJFYByQFaBwDhB8QDbB+Deg2QDlg7FpjEQFsjGE1gtQE/gzJqEUQJjEALumbIBDglQM8nWT3LRQJGDsIHmmQD9jNDGAkIANABQBuAQDEBKQDFBLCBBTQB8BQB/gUQCCgSDMhdQDMheCtgHQCygDFYCzQFfC6GxjZQG4jQK6HKQE2CgEZjRQEWjVCbFiMAAAAkEMjvrAAAg");
	this.shape_79.setTransform(767.025,153.7171);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#3399CC").s().p("Eh31AXQMAALghIQG6moGch2QGRhsC+AKQC+AKFcB0QFeByDiB9QDeCBDgg3QDng7FtjGQFwjIE4gtQFCgzJxEYQJpEEL1mgIBEgmQNDnaUFLaQJMDvILmrQEAjQDIAlIAMABQBsAPDBBJQDBBKB+BQQB6BPB8gTQB/gSDIhbQDJhaCpgHQCvgDFQCwQFYC3GojUQGwjJKrHBQEvCdETjKQEQjQCYFaMAAAAkFMjvrAAAg");
	this.shape_80.setTransform(767.025,153.6827);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#3399CC").s().p("Eh31AXQMAALghIQG/msGgh2QGVhuDAALQDAALFfB2QFiBzDlCAQDgCDDjg3QDog8FxjIQF0jKE7gtQFFgzJ3EcQJvEIL9mlQAigSAjgUQNKngUTLkQJRDzIRmxQECjSDKAkIAMABQBqAQC8BHQC9BIB8BPQB4BNB5gTQB9gRDEhYQDEhYCmgGQCrgDFKCtQFQCzGgjNQGmjEKcG6QEpCaENjFQEKjKCVFTMAAAAkEMjvrAAAg");
	this.shape_81.setTransform(767.025,153.6482);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#3399CC").s().p("Eh31AXQMAALghIQHDmwGlh3QGahuDBALQDCAMFjB3QFlB2DnCBQDjCFDlg4QDqg7F1jKQF4jME+guQFIgyJ+EfQJ1EMMEmqIBGgmQNRnlUgLuQJXD1IWm2QEFjVDMAlIALACQBoAPC5BGQC5BGB5BNQB2BLB2gSQB7gQC/hWQDBhWCigFQCogCFCCpQFKCwGWjHQGei9KNGwQEiCXEHi/QEEjECSFMMAAAAkEMjvrAAAg");
	this.shape_82.setTransform(767.025,153.6229);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#3399CC").s().p("Eh31AXRMAALghIQHIm1Gph4QGehvDDANQDDALFnB6QFpB3DqCEQDkCHDog4QDtg8F4jMQF8jOFBguQFKgzKFEkQJ7EQMMmvIBGgmQNYnqUvL3QJcD4Icm7QEHjXDOAlIALABQBmAPC0BEQC1BFB3BMQBzBJB0gRQB5gPC7hUQC8hTCfgGQClgBE7CmQFCCtGNjBQGVi4J/GoQEbCVEBi6QD/i+COFEMAAAAkFMjvrAAAg");
	this.shape_83.setTransform(767.025,153.5883);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#3399CC").s().p("Eh31AXRMAALghIQHNm5Gsh5QGjhwDFANQDFANFrB7QFtB5DrCGQDnCJDqg4QDvg9F9jOQF/jQFEgtQFNgzKMEnQKBEUMUmzIBGgnQNfnvU8MAQJiD8IhnAQEKjaDPAlIALABQBkAPCxBDQCxBDB1BKQBwBIBygRQB1gPC4hRQC3hRCcgEQChgBE0CjQE7CpGFi7QGLixJwGfQEVCSD7i0QD5i5CLE9MAAAAkFMjvrAAAg");
	this.shape_84.setTransform(767.025,153.5537);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#3399CC").s().p("Eh31AXRMAALghIQHRm9Gxh5QGnhxDHAOQDHANFvB9QFwB7DtCIQDqCKDsg4QDxg9GBjQQGDjSFHguQFQgyKSErQKHEYMcm4IBHgnQNmn1VKMKQJnD/ImnGQENjcDRAmIALABQBiAOCsBCQCuBBByBJQBuBGBvgQQBzgOCzhPQC0hPCYgEQCeABEtCeQE0CnF7i2QGDirJhGXQEOCPD2iuQDyizCIE2MAAAAkEMjvrAAAg");
	this.shape_85.setTransform(767.025,153.5284);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#3399CC").s().p("Eh31AXSMAALghIQHWnCG1h6QGrhxDJAOQDJAOFyB/QF0B9DwCKQDrCMDvg5QDzg8GFjTQGHjUFKguQFTgyKZEvQKMEcMkm9IBIgoQNtn5VYMTQJtEDIrnMQEOjfDUAnIAKABQBhAOCoBAQCpBABwBGQBrBFBtgQQBxgNCvhMQCvhMCVgEQCbABElCbQEtCjFyivQF6ilJSGOQEICNDwipQDsiuCFEvMAAAAkFMjvrAAAg");
	this.shape_86.setTransform(767.025,153.4937);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#3399CC").s().p("Eh31AXSMAALghIQHanHG5h6QGwhyDLAPQDLAOF2CBQF4B/DxCMQDuCODxg5QD2g9GIjUQGLjWFNguQFWgzKfEzQKTEgMrnBIBIgpQN1n+VlMdQJzEFIwnQQERjiDWAnIAKABQBeAOClA+QClA+BtBFQBpBDBqgOQBvgNCqhKQCshKCRgDQCXACEfCYQEmCfFpipQFxifJDGGQEBCJDqiiQDmipCCEoMAAAAkFMjvrAAAg");
	this.shape_87.setTransform(767.025,153.4709);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#3399CC").s().p("Eh31AXSMAALghIQHfnKG9h7QG0hzDNAPQDMAPF6CDQF8CBD0COQDwCQDzg6QD4g9GMjWQGOjYFRguQFZgzKmE3QKYEkMznGIBJgpQN8oDVzMmQJ4EJI2nWQETjlDYAoIAJABQBdANCgA9QChA9BrBDQBnBBBngOQBsgMCnhHQCnhICOgCQCUACEXCVQEfCcFgijQFoiZI1F9QD6CHDkidQDgijB/EhMAAAAkEMjvrAAAg");
	this.shape_88.setTransform(767.025,153.4455);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#3399CC").s().p("Eh31AXSMAALghIQHjnPHCh7QG5h0DOAQQDOAPF+CFQF/CDD2CQQDzCSD1g6QD6g9GQjZQGSjaFUguQFbgzKtE7QKfEoM6nLQAlgTAlgWQODoIWAMvQJ+EMI7nbQEWjnDZAoIAKABQBaANCdA7QCdA8BoBBQBkBABmgOQBpgLCjhFQCjhFCKgCQCRADEPCRQEYCZFXidQFgiTIlF1QD0CEDeiYQDbidB7EaMAAAAkEMjvrAAAg");
	this.shape_89.setTransform(767.025,153.4108);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#3399CC").s().p("Eh31AXTMAALghIQHonUHGh8QG9h1DQARQDQAQGBCHQGDCFD5CSQD0CUD4g6QD8g+GUjbQGWjcFXguQFegzKzE/QKlEsNCnQIBLgpQOKoOWOM5QKDEQJAnhQEZjqDbApIAJAAQBZANCYA6QCaA6BmBAQBhA+BjgNQBngLCehCQCfhDCHgBQCNADEJCOQERCVFOiXQFWiMIXFsQDtCBDYiSQDViXB4ESMAAAAkFMjvrAAAg");
	this.shape_90.setTransform(767.025,153.376);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#3399CC").s().p("Eh31AXTMAALghIQHsnYHKh9QHCh1DSARQDSARGFCIQGHCHD6CUQD3CWD6g7QD+g+GYjcQGajeFagvQFhgzK6FEQKrEwNKnVIBKgqQOSoTWbNDQKKESJFnmQEbjsDdApIAJABQBWAMCVA4QCVA5BkA+QBfA8BggMQBlgKCahAQCbhACDgBQCKAEEBCKQEKCSFFiRQFOiFIHFjQDnB+DSiMQDPiSB1ELMAAAAkFMjvrAAAg");
	this.shape_91.setTransform(767.025,153.3505);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#3399CC").s().p("Eh31AXTMAALghIQHxncHOh9QHGh3DUASQDTARGJCLQGLCJD9CWQD5CYD8g7QEBg/GbjeQGejgFdgvQFkgzLAFHQKxE1NSnaIBLgqQOZoYWpNMQKPEVJKnrQEejvDfApIAJABQBUANCQA2QCSA3BhA9QBdA6BdgLQBigKCWg9QCXg+CAAAQCGAED7CHQEDCPE8iLQFEiAH5FbQDgB8DMiHQDJiMByEEMAAAAkEMjvrAAAg");
	this.shape_92.setTransform(767.025,153.3157);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#3399CC").s().p("Eh31AXUMAALghIQH1nhHTh+QHKh3DWASQDVASGNCNQGOCKD/CYQD8CbD+g8QEDg+GfjhQGijiFggvQFngzLHFLQK2E4NaneIBMgrQOgodW3NWQKUEZJQnxQEgjxDhApIAIABQBSAMCNA1QCNA1BfA8QBaA4BbgLQBggJCSg7QCTg7B8ABQCDAFDzCDQD8CMEziFQE7h6HrFSQDaB5DFiBQDDiGBvD8MAAAAkFMjvrAAAg");
	this.shape_93.setTransform(767.025,153.2809);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#3399CC").s().p("Eh31AXUMAALghIQH6nlHWh/QHPh4DYATQDXATGQCOQGSCMEBCbQD+CcEBg8QEFg/GjjjQGmjkFjgvQFqgyLNFPQK9E8NhnjIBNgrQOnojXENfQKaEcJVn2QEijzDjApIAIABQBRAMCIA0QCKAzBcA6QBYA3BZgLQBdgICNg4QCPg5B5ABQCAAGDsCAQD0CIEqh/QEzh0HbFKQDUB2DAh7QC8iBBsD1MAAAAkFMjvrAAAg");
	this.shape_94.setTransform(767.025,153.2554);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#3399CC").s().p("Eh31AXUMAALghIQH+npHbh/QHUh5DYATQDaAUGUCQQGWCOEDCcQEACeEDg8QEHg/GnjlQGqjmFmgvQFsgzLVFTQLCFBNpnoIBMgsQOwonXSNoQKfEgJan8QElj2DlAqIAIABQBOAMCFAxQCFAzBaA3QBWA2BWgKQBagHCKg3QCKg2B2ACQB8AGDlB8QDuCFEhh5QEphtHNFBQDNBzC6h1QC3h7BoDuMAAAAkEMjvrAAAg");
	this.shape_95.setTransform(767.025,153.2205);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#3399CC").s().p("Eh31AXVMAALghIQIDnuHfiAQHYh5DaAUQDbATGYCSQGaCREFCeQEDCgEFg8QEJhAGsjnQGsjoFqgvQFvgzLbFXQLJFENvnsQAngVAngXQO3otXfNyQKlEjJgoBQEnj5DnArIAIABQBMALCBAwQCBAxBYA2QBSA0BUgJQBYgHCGg0QCGg0ByACQB5AHDeB5QDmCCEYhzQEhhnG9E4QDHBxC0hwQCxh2BlDnMAAAAkFMjvrAAAg");
	this.shape_96.setTransform(767.025,153.1856);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#3399CC").s().p("Eh31AXVMAALghIQIInyHjiAQHch7DcAUQDdAVGcCUQGdCSEICgQEECiEIg9QEMg/GvjpQGwjqFtgwQFygyLiFbQLOFIN4nyQAngVAngXQO+oyXtN8QKrEmJkoGQEqj8DpArIAHABQBKALB9AvQB+AvBVA0QBQAyBRgIQBWgGCBgyQCCgxBvADQB2AHDWB2QDfB+EPhtQEYhhGvEwQDABuCuhqQCrhxBiDgMAAAAkFMjvrAAAg");
	this.shape_97.setTransform(767.025,153.1601);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#3399CC").s().p("Eh31AXVMAALghIQIMn2HniBQHhh8DeAWQDfAVGfCVQGhCVEKCiQEHCkEKg9QEOhAGzjrQG0jsFwgwQF1gyLoFfQLVFMN/n2IBPgtQPFo3X6OFQKxEpJqoMQEsj+DrAsIAHAAQBIALB5AuQB5AtBTAzQBOAwBOgIQBUgFB9gvQB+gvBrADQByAIDQBzQDYB6EGhmQEPhbGgEnQC5BrCohkQClhrBfDZMAAAAkEMjvrAAAg");
	this.shape_98.setTransform(767.025,153.1251);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#3399CC").s().p("Eh31AXWMAALghIQIRn7HriBQHlh9DgAWQDhAWGjCXQGlCWEMClQEJCmEMg+QEQhAG3jtQG4juFzgwQF4gzLvFjQLaFQOHn6IBPguQPMo8YJOPQK2EsJvoRQEvkADsArIAHABQBGALB1ArQB2AsBQAyQBLAuBMgHQBRgFB5gsQB6gtBoAEQBvAJDIBvQDRB3D9hhQEGhUGREeQCzBoCiheQCfhlBcDRMAAAAkFMjvrAAAg");
	this.shape_99.setTransform(767.025,153.0901);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#3399CC").s().p("Eh31AXWMAALghIQIVn/HwiCQHph+DiAXQDiAWGnCZQGpCZEOCmQEMCoEOg+QEShAG7jvQG8jxF2gvQF7gzL1FnQLgFUOPoAIBQgtQPTpCYXOYQK7EwJ0oWQEykEDuAtIAHAAQBEALBxAqQBxAqBOAwQBJAtBKgHQBOgEB1gqQB2gqBkAEQBsAKDBBrQDKB0DzhbQD+hOGCEWQCsBlCchZQCZhfBZDKMAAAAkFMjvrAAAg");
	this.shape_100.setTransform(767.025,153.0646);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#3399CC").s().p("Eh31AXWMAALghIQIaoDH0iDQHth+DkAXQDkAXGrCbQGsCaEQCpQEOCqERg/QEVhAG+jxQHAjzF5gwQF9gyL9FrQLmFYOWoFIBRguQPapGYkOhQLBEzJ6obQE0kGDwAsIAGABQBDAKBsApQBuApBLAtQBHAsBHgGQBMgEBxgnQBxgoBhAFQBoAKC6BoQDDBwDrhUQD0hIFzENQCmBjCWhUQCUhZBVDDMAAAAkEMjvrAAAg");
	this.shape_101.setTransform(767.025,153.0296);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#3399CC").s().p("Eh31AXXMAALghIQIeoIH4iDQHzh/DlAXQDmAYGvCdQGvCcETCqQEQCsETg+QEXhBHCjzQHEj1F8gwQGAgzMDFvQLsFcOeoJIBSguQPhpMYyOrQLHE2J+ogQE3kJDyAtIAGABQBAAJBpAnQBqAoBJAsQBEAqBEgFQBKgDBsgmQBuglBeAGQBkAKCzBlQC7BtDihOQDrhCFlEEQCfBgCQhOQCOhUBSC8MAAAAkFMjvrAAAg");
	this.shape_102.setTransform(767.025,152.9945);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#3399CC").s().p("Eh31AXXMAALghIQIjoMH8iEQH3iADnAYQDoAYGyCfQG0CeEUCtQETCtEVg+QEZhCHGj1QHIj2F/gwQGDgzMKFzQLyFgOmoOIBRgvQPppRY/O1QLNE5KDomQE6kLD0AtIAFABQA/AJBlAmQBlAmBHAqQBBAoBCgEQBHgDBpgiQBpgjBbAGQBhALCrBhQC1BqDZhIQDig8FVD8QCZBdCLhIQCHhOBPC0MAAAAkFMjvrAAAg");
	this.shape_103.setTransform(767.025,152.9595);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#3399CC").s().p("Eh31AXXMAALghIQInoQIBiFQH7iBDpAZQDpAZG3ChQG3CgEXCuQEVCwEYg/QEahCHKj3QHMj4GCgwQGGgzMQF3QL4FkOuoTIBSgvQPwpWZNO+QLSE8KJorQE7kOD3AuIAFAAQA8AKBhAkQBiAkBEApQA/AmBAgEQBEgBBlghQBlggBXAHQBdALCkBeQCuBnDQhDQDZg1FHDzQCSBaCFhCQCBhJBMCuMAAAAkEMjvrAAAg");
	this.shape_104.setTransform(767.025,152.9339);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#3399CC").s().p("Eh31AXYMAALghIQIsoVIEiFQIAiCDrAaQDrAZG6CjQG7CiEZCwQEXCyEahAQEdhCHOj5QHPj6GGgxQGJgyMXF6QL+FpO1oYQApgXAqgZQP3pbZaPIQLYE/KOowQE+kRD4AvIAFAAQA7AJBdAjQBdAiBCAoQA9AkA9gDQBCgBBggeQBhgdBTAHQBbAMCdBaQCmBjDHg8QDRgwE4DrQCLBYB/g9QB7hDBJCmMAAAAkFMjvrAAAg");
	this.shape_105.setTransform(767.025,152.8988);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#3399CC").s().p("Eh31AXYMAALghIQIwoZIJiGQIEiDDtAaQDtAaG+ClQG+CkEcCyQEZC0EdhAQEfhCHRj7QHTj9GJgwQGMgzMdF/QMEFsO9ocIBUgxQP+pgZoPRQLdFDKUo2QFAkTD6AvIAFAAQA4AJBZAhQBaAhA/AmQA6AjA7gDQBAAABcgcQBcgbBRAIQBWANCWBWQCgBgC+g2QDHgpEpDiQCFBVB5g3QB1g+BGCfMAAAAkFMjvrAAAg");
	this.shape_106.setTransform(767.025,152.8637);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#3399CC").s().p("Eh31AXYMAALghIQI1odINiHQIIiDDvAbQDvAaHBCnQHDCmEdC0QEcC2EfhBQEhhCHVj9QHXj/GMgwQGOgzMlGDQMJFwPFohIBUgxQQGplZ2PaQLiFGKZo7QFDkWD8AvIAEABQA3AJBVAfQBWAfA9AkQA3AiA4gCQA9AABYgZQBZgZBNAJQBTANCPBTQCYBdC1gwQC/gkEaDaQB+BSBzgxQBwg4BCCYMAAAAkEMjvrAAAg");
	this.shape_107.setTransform(767.025,152.8381);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#3399CC").s().p("Eh31AXYMAALghIQI6ohIRiIQIMiEDxAcQDwAbHGCoQHGCoEgC2QEdC4EihBQEjhCHakAQHakAGPgxQGRgzMrGHQMQF0PMomQArgXAqgaQQNpqaDPkQLpFJKdpBQFGkYD+AwIAEAAQA0AIBRAeQBSAeA7AjQA1AfA1gBQA7ABBUgXQBUgWBKAJQBQAOCHBQQCSBZCrgqQC2gdELDRQB4BPBtgsQBqgyA/CRMAAAAkEMjvrAAAg");
	this.shape_108.setTransform(767.025,152.8029);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#3399CC").s().p("Eh31AXZMAALghIQI+omIViIQISiFDyAcQDyAbHJCrQHKCpEiC5QEgC6EkhBQElhDHekCQHekCGSgxQGUgzMyGLQMVF4PVorQAqgXArgaQQUpwaRPuQLuFMKjpGQFIkaEAAvIADABQAzAIBNAcQBOAdA4AgQAzAeAzgBQA4ACBPgUQBRgUBGAKQBMAOCBBNQCKBVCjgkQCtgXD8DJQBxBMBnglQBkgtA8CJMAAAAkFMjvrAAAg");
	this.shape_109.setTransform(767.025,152.7678);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#3399CC").s().p("Eh31AXZMAALghIQJDoqIZiJQIWiGD0AdQD0AcHNCtQHNCrEkC7QEjC7EmhBQEnhDHikEQHikEGUgxQGYgzM4GPQMcF8PcowIBVgxQQcp1aeP3QL0FPKopLQFLkdEBAwIAEAAQAwAIBJAbQBKAbA2AfQAwAcAxAAQA2ACBLgRQBMgSBDAKQBJAPB5BKQCDBSCageQCkgRDuDAQBqBKBhggQBegnA5CCMAAAAkEMjvrAAAg");
	this.shape_110.setTransform(767.025,152.7421);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#3399CC").s().p("Eh31AXZMAALghIQJHovIeiJQIaiGD2AdQD2AdHQCuQHSCtEmC9QElC9EohBQEqhEHlkFQHmkGGXgyQGbgzM+GTQMhGAPlo0IBWgyQQjp6asQAQL5FTKupQQFNkgEDAwIADABQAvAHBFAZQBGAaAzAdQAuAbAuAAQAzADBIgPQBIgPA/AKQBGAQByBGQB8BPCQgYQCbgLDfC4QBkBHBbgbQBYghA2B7MAAAAkEMjvrAAAg");
	this.shape_111.setTransform(767.025,152.7188);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#3399CC").s().p("Eh31AXaMAALghIQJMozIhiKQIfiID4AeQD3AeHVCwQHVCvEoC/QEnC/ErhCQEshEHpkHQHqkIGagyQGegzNFGXQMnGEPso5QArgYAsgbQQqp+a5QJQL/FWKzpWQFPkiEGAxIADAAQAsAIBCAXQBCAYAwAcQAsAZArABQAxAEBDgNQBEgNA8ALQBCARBrBCQB1BMCIgSQCSgFDQCvQBdBEBWgVQBRgbAzBzMAAAAkFMjvrAAAg");
	this.shape_112.setTransform(767.025,152.6836);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#3399CC").s().p("Eh31AXaMAALghIQJQo4ImiKQIjiID6AeQD5AeHYCyQHZCxErDBQEpDBEthCQEuhEHtkKQHtkKGegyQGggyNMGaQMtGIP0o9IBYgzQQxqEbHQTQMEFZK4pbQFSklEIAxIADABQAqAHA9AWQA+AWAvAaQAoAXApACQAvAEA/gKQBAgKA4ALQA/ARBkA/QBtBJB/gMQCJACDBCmQBXBBBQgPQBMgWAvBsMAAAAkFMjvrAAAg");
	this.shape_113.setTransform(767.025,152.6579);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#3399CC").s().p("Eh31AXaMAALghIQJVo8IqiLQIniJD8AfQD7AfHcC0QHcCzEtDDQEsDDEvhDQEwhEHxkMQHxkMGhgyQGjgzNTGfQMyGMP8pCIBZg0QQ4qJbVQdQMKFcK9pgQFUkoEKAyIACAAQApAHA5AUQA6AVAsAZQAmAVAnADQAsAFA6gIQA8gIA1AMQA8ASBcA7QBnBFB2gGQCAAICyCeQBQA/BKgKQBGgRAsBmMAAAAkEMjvrAAAg");
	this.shape_114.setTransform(767.025,152.6227);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#3399CC").s().p("Eh31AXbMAALghIQJZpAIviMQIsiKD9AgQD9AfHfC2QHhC1EvDEQEtDGEyhDQEyhFH1kNQH1kPGkgyQGmgzNZGjQM5GQQDpHQAtgZAsgbQRAqObiQmQMQFfLCplQFXkrELAzIACAAQAnAGA1ATQA2AUAqAWQAkAUAkADQApAGA3gGQA4gFAxANQA4ASBVA4QBgBCBtAAQB3AOCkCVQBJA8BEgEQBAgLApBeMAAAAkFMjvrAAAg");
	this.shape_115.setTransform(767.025,152.5874);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#3399CC").s().p("Eh31AXbMAALghIQJepFIyiMQIxiLD/AgQD+AgHkC4QHkC3ExDHQEwDHE0hEQE1hEH4kQQH5kQGngyQGpgzNgGmQM+GUQMpMQAsgZAtgbQRHqTbwQvQMVFjLHprQFaktENAzIACAAQAkAGAyASQAyARAnAWQAhASAiADQAnAHAzgDQAzgDAuANQA1ATBOA0QBZA/BjAGQBvAUCUCNQBDA5A+ACQA6gGAmBXMAAAAkFMjvrAAAg");
	this.shape_116.setTransform(767.025,152.5617);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#3399CC").s().p("Eh31AXbMAALghIQJipJI3iMQI1iMEBAhQEAAgHoC6QHnC5E0DIQEyDKE2hEQE3hFH8kSQH9kSGqgzQGsgyNmGqQNFGYQTpRQAtgZAtgbQROqZb9Q5QMbFmLNpwQFckwEPA0IACAAQAiAGAtAQQAvAQAkATQAfARAfAEQAlAHAugBQAwAAAqAOQAxATBHAxQBSA7BbANQBlAaCGCEQA8A2A4AIQA0AAAjBQMAAAAkEMjvrAAAg");
	this.shape_117.setTransform(767.025,152.5265);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#3399CC").s().p("Eh31AXcMAALghIQJnpNI7iOQI5iNECAiQEDAhHrC7QHrC7E2DLQE1DLE4hEQE5hFIAkUQIBkUGtgzQGvgzNtGvQNKGcQbpWQAtgZAugcQRVqdcLRCQMgFqLSp2QFfkyERAzIABAAQAhAGApAOQAqAPAiASQAdAPAcAFQAjAHAqACQArACAnAPQAuAUBAAtQBKA4BSASQBdAhB2B7QA2A0AyANQAuAGAgBIMAAAAkFMjvrAAAg");
	this.shape_118.setTransform(767.025,152.4912);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#3399CC").s().p("Eh31AXcMAALghIQJspSI+iOQI+iNEEAiQEFAhHvC+QHvC8E3DNQE3DNE7hEQE7hGIEkVQIFkXGwgyQGxgzN0GyQNRGgQipaIBbg1QRcqjcZRMQMnFsLXp7QFhk0ETAzIABABQAeAFAmANQAmANAgAQQAZANAbAGQAfAIAmAEQAnAFAkAPQArAUA4ArQBEA0BIAYQBUAnBoBzQAvAxAsASQApAMAcBBMAAAAkFMjvrAAAg");
	this.shape_119.setTransform(767.025,152.4655);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#3399CC").s().p("Eh31AXcMAALghIQJwpWJDiOQJCiPEGAjQEGAiHzC/QHzC/E6DPQE5DPE9hFQE+hFIIkYQIIkZGzgyQG0gzN7G2QNWGkQqpfIBcg2QRjqocnRWQMsFwLcqBQFkk3EUA0IABAAQAdAFAhAMQAjALAdAPQAXALAYAGQAdAJAiAHQAjAHAgAQQAnAVAyAnQA8AxBAAeQBKAtBZBqQApAuAmAYQAjASAZA6MAAAAkEMjvrAAAg");
	this.shape_120.setTransform(767.025,152.4302);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#3399CC").s().p("Eh31AXdMAALghIQJ1pbJHiPQJGiPEIAjQEIAjH3DBQH2DBE8DRQE8DRE/hFQFAhGIMkaQILkbG3gzQG3gyOBG6QNcGoQypkQAugaAvgcQRqqtc1RfQMxFzLhqGQFmk6EXA1IABAAQAaAFAeAKQAeAKAbAMQAVAKAVAHQAbAKAeAJQAeAJAdAQQAkAWAqAjQA1AuA3AlQBCAzBKBhQAiArAhAfQAcAWAWAzMAAAAkFMjvrAAAg");
	this.shape_121.setTransform(767.025,152.3949);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#3399CC").s().p("Eh31AXdMAALghIQJ5pfJMiQQJLiQEJAkQEKAjH6DDQH6DDE/DTQE+DTFBhGQFChGIQkcQIPkcG6gzQG6gzOIG+QNiGsQ6poIBcg3QRyqydCRoQM3F3LnqMQFok8EZA1IAAAAQAZAFAZAIQAbAIAYAMIAlAPIAyAWQAbAMAZARQAhAWAjAgIBbBVQA5A5A8BZQAbAoAbAkQAWAdATArMAAAAkFMjvrAAAg");
	this.shape_122.setTransform(767.025,152.3692);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,2.2,1534.1,300.3);


(lib.ocean_gr2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3399CC").s().p("Eh31AXdMAALghIQJ+pjJPiQQJQiRELAkQEMAkH+DFQH+DFFADVQFADVFEhGQFEhHIUkeQITkeG9gzQG9gzOOHCQOOHDR5q3QR5q4dQRyQM8F6LsqRQLsqRGVObMAAAAkEg");
	this.shape.setTransform(767.025,152.3338);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3399CC").s().p("Eh31AXbMAALghIQBThQBThFIBihOQAwglAxgiQA4gnA1gjIBTg0QA7gnA8gkQBEgpBCgiQBhgyBkgjQCTg4CSgnIAWgFQEKhEDSgSQCQgQBxgGQA6gDAxAEIAiADQEJAkH6DEQH6DDE+DTQE+DTFBhFQFChGIPkcQIQkcG5gyQG5gyOIG/QOGG/RxqxQRwqxdARpQM2F3LmqLQLmqMGSOUMAAAAkEMjvrAAAg");
	this.shape_1.setTransform(767.025,152.5189);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3399CC").s().p("Eh31AXaMAALghIQBYhUBXhGIBohPQAxgkA1ggIB0hGQAsgYArgbIB9hNQBIgrBFgiQBkgzBqgfQCagzCagsIAWgFQERhKDfgIQCXgNB1gLQA9gGAzAFIAhADQEIAkH2DBQH2DCE8DSQE7DRE/hEQE/hGILkZQILkZG2gyQG2gyOAG8QOAG7RnqrQRnqrcyRhQMvF0LgqFQLgqGGPOMMAAAAkFMjvrAAAg");
	this.shape_2.setTransform(767.025,152.6957);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3399CC").s().p("Eh31AXYMAALghIQBchZBbhGIBvhPQAzgkA5geIB5hCQAugWAugbICDhQQBLgtBJgiQBngyBxgbIFBhgIAWgGQEZhPDtABQCcgJB6gRQBAgIA1AFIAhADQEFAkHyDAQHyDAE6DQQE4DQE9hEQE8hFIHkXQIIkXGygxQGzgxN4G4QN5G4ReqkQRfqlcjRYQMoFxLbp/QLZqBGMOFMAAAAkFMjvrAAAg");
	this.shape_3.setTransform(767.025,152.8904);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3399CC").s().p("Eh31AXWMAALghIQBhhdBfhHIB1hPQA1gkA8gcICAg9QAwgUAwgcICJhSQBPgvBMgjQBqgyB3gXQClgrCqg1IAXgHQEghUD7ALQChgGCAgXQBCgLA2AGIAhADQEEAjHuC/QHuC/E3DOQE2DOE6hDQE6hEIDkUQIDkVGvgxQGvgwNxG0QNyG1RWqeQRVqfcURPQMiFvLVp6QLTp6GJN9MAAAAkFMjvrAAAg");
	this.shape_4.setTransform(767.025,153.0636);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3399CC").s().p("Eh31AXUMAALghIQBlhhBkhIIB7hPQA3gjBAgaICFg6QAzgSAygcICPhUQBTgxBPgjQBsgyB/gTQCrgoCxg5IAYgHQEnhZEIAUQCngDCFgcQBFgNA4AGIAhADQEBAjHrC9QHqC9E0DNQE0DME3hDQE4hDH/kSQH/kSGrgwQGsgwNqGxQNrGyRMqZQRMqYcGRHQMbFrLPp0QLOp1GFN3MAAAAkEMjvrAAAg");
	this.shape_5.setTransform(767.025,153.2327);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3399CC").s().p("Eh31AXUMAALghIQBqhmBohIICAhQQA5giBEgYICLg2QA2gQA1gdQBFgnBPgvQBXgzBSgjQBvgyCFgPQCxgkC5g+IAZgIQEuheEWAeQCsAACLghQBHgQA6AGIAgAEQEAAiHmC8QHmC7EyDLQExDLE1hCQE2hCH6kQQH7kQGogvQGpgwNiGuQNkGvRDqTQREqTb2Q/QMVFpLJpvQLIpvGCNvMAAAAkFMjvrAAAg");
	this.shape_6.setTransform(767.025,153.2932);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3399CC").s().p("Eh31AXTMAALghIQBvhqBrhJICHhQQA7giBIgWICRgyQA3gOA4gdQBHgoBTgxQBbg1BVgjQBygyCMgLQC3gfDAhEIAagIQE1hjEjAnQCzAECPgnQBKgSA8AHIAgADQD+AiHiC6QHiC6EvDJQEvDKEzhCQEyhCH3kNQH2kNGlgvQGlgvNcGrQNcGrQ7qNQQ6qMboQ1QMOFnLDppQLCpqF/NoMAAAAkFMjvrAAAg");
	this.shape_7.setTransform(767.025,153.3539);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3399CC").s().p("Eh31AXSMAALghIQBzhuBwhKICNhQQA9ghBMgUICWguQA6gMA6geQBKgoBWgzQBfg3BYgjQB1gyCSgHQC9gbDJhJIAZgIQE9hoExAwQC4AHCUgsQBMgVA/AHIAgAEQD7AiHeC4QHfC4EtDIQEsDIEwhBQEwhBHzkLQHykLGhguQGigvNUGnQNWGoQxqGQQyqHbYQuQMIFjK9pjQK8pkF8NhMAAAAkEMjvrAAAg");
	this.shape_8.setTransform(767.025,153.4125);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3399CC").s().p("Eh31AXSMAALghIQB4hzB0hKQBWgwA9ggQA/ghBPgSICdgqQA8gLA8gdQBMgpBag0QBjg6BbgjQB4gyCZgDQDDgYDQhNIAagIQFEhuE+A6QC+AKCagxQBOgYBAAIIAgADQD5AiHbC3QHaC3ErDGQEpDGEuhBQEuhAHukIQHukJGeguQGegtNNGjQNPGlQoqBQQpqAbKQlQMBFgK3pdQK2peF5NZMAAAAkFMjvrAAAg");
	this.shape_9.setTransform(767.025,153.475);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#3399CC").s().p("Eh31AXRMAALghIQB8h3B4hKQBbgxA/ggQBAggBUgRICiglQA+gJA/geQBOgpBfg2QBmg8BegjQB7gyCfABQDJgUDYhSIAbgJQFLhyFMBDQDDANCfg2QBRgaBCAIIAfADQD4AhHWC2QHXC1EoDEQEnDFErhAQEshAHqkFQHqkGGaguQGbgtNGGgQNIGhQfp6QQgp6a7QcQL6FeKxpYQKwpZF2NTMAAAAkEMjvrAAAg");
	this.shape_10.setTransform(767.025,153.5323);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3399CC").s().p("Eh31AXRMAALghIQCBh8B8hLQBfgxBBggQBCgfBXgPICpgiQBAgGBBgfQBQgoBjg5QBpg+BigjQB9gyCnAFQDOgQDghWIAbgKQFTh4FaBNQDIARClg8QBTgdBEAIIAfAEQD2AhHSC0QHSCzEmDDQElDDEog/QEphAHmkDQHmkDGXgtQGYgtM+GdQNBGeQWp1QQXpzasQTQL1FbKqpSQKrpTFyNLMAAAAkFMjvrAAAg");
	this.shape_11.setTransform(767.025,153.5885);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#3399CC").s().p("Eh31AXQMAALghIQCFiACBhLQBjgzBDgeQBEggBbgMQBggSBOgMQBDgEBDgfQBSgpBng7QBthABlgjQCAgyCtAIQDVgLDnhbIAcgLQFah9FnBXQDOATCqhBQBWgfBGAJIAfADQDzAhHPCyQHOCzEjDBQEjDAEmg+QEmg/HikAQHikCGTgsQGUgrM4GZQM5GaQOpvQQOptadQLQLuFYKlpMQKkpNFvNDMAAAAkFMjvrAAAg");
	this.shape_12.setTransform(767.025,153.65);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#3399CC").s().p("Eh31AXPMAALghIQCKiECFhMQBngzBFgfQBGgeBegLQBlgPBQgLQBFgCBFgfQBVgqBqg9QBxhBBogkQCDgyC0ANQDagIDvhgIAdgKQFhiCF1BgQDUAXCuhHQBZgiBIAJIAeAEQDyAgHKCxQHLCxEhC/QEfC/Ekg+QEkg9Hej/QHdj+GQgsQGRgrMwGVQMzGXQEpoQQFpnaOQCQLoFWKfpHQKepIFsM9MAAAAkEMjvrAAAg");
	this.shape_13.setTransform(767.025,153.7058);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#3399CC").s().p("Eh31AXPMAALghIQCOiJCJhNQBsg0BHgdQBHgeBjgJQBogNBSgJQBHgBBIgfQBXgqBug/QB1hDBrgkQCGgyC6ARQDhgED2hlIAegKQFoiHGCBpQDaAaC0hMQBbglBJAKIAfADQDvAhHHCvQHGCvEfC+QEdC9Ehg9QEig9HZj8QHaj8GMgsQGOgqMpGSQMrGUP7piQP8phaAP5QLhFTKZpBQKYpCFpM1MAAAAkFMjvrAAAg");
	this.shape_14.setTransform(767.025,153.7686);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#3399CC").s().p("Eh31AXOMAALghIQCTiNCNhNQBxg1BIgdQBJgdBmgHQBsgMBUgGQBKABBKggQBZgqByhBQB5hFBugkQCJgyDAAUQDnABD/hqIAdgLQFviMGRBzQDfAdC5hRQBegnBLAKIAeADQDuAgHCCuQHDCtEcC8QEbC8Eeg8QEfg9HWj5QHVj6GJgrQGKgqMiGPQMkGRPzpdQPzpbZxPxQLaFQKTo7QKSo9FmMvMAAAAkEMjvrAAAg");
	this.shape_15.setTransform(767.025,153.824);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#3399CC").s().p("Eh31AXOMAALghIQCXiRCShPQB1g1BKgdQBLgcBqgFQBvgKBXgFQBMAEBMggQBbgrB2hDQB9hHBxgkQCMgyDHAYQDtAFEGhvIAegLQF2iRGeB8QDlAgC+hWQBggqBOALIAeADQDrAfG/CtQG+CsEaC6QEYC6Ecg8QEdg8HRj3QHSj3GFgqQGGgpMcGLQMdGNPppWQPqpVZiPoQLUFOKNo2QKMo3FjMnMAAAAkFMjvrAAAg");
	this.shape_16.setTransform(767.025,153.894);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#3399CC").s().p("Eh31AXNMAALghIQCciVCVhPQB6g3BMgbQBNgcBtgEQB0gHBYgDQBPAFBOggQBdgrB6hFQCBhJB0gkQCOgyDOAcQDzAJEOh0IAfgLQF9iXGsCGQDqAjDEhbQBigtBQALIAdADQDqAgG6CrQG7CqEXC5QEWC4Eag7QEag7HNj1QHNj1GCgpQGDgpMUGIQMWGKPgpRQPipOZTPgQLNFKKHowQKHoxFfMgMAAAAkEMjvrAAAg");
	this.shape_17.setTransform(767.025,153.941);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#3399CC").s().p("Eh31AXNMAALghIQChiaCZhQQB+g3BOgbQBOgbBygCQB3gGBbAAQBQAHBRghQBggqB9hIQCFhLB3gkQCRgzDVAhQD4AMEWh4IAggMQGEibG6CPQDwAnDIhhQBlgvBSALIAdADQDnAfG3CpQG3CpEUC3QEUC3EXg6QEYg7HIjyQHJjzGAgpQF+goMOGFQMPGGPXpKQPYpIZEPXQLHFIKBorQKBosFcMZMAAAAkFMjvrAAAg");
	this.shape_18.setTransform(767.025,153.9957);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#3399CC").s().p("Eh31AXMMAALghIQClieCehRQCCg4BQgaQBQgbB1AAQB7gDBdABQBTAJBTghQBigrCBhJQCIhNB7glQCUgyDbAkQD/AREdh9IAggNQGMigHHCYQD2AqDOhmQBngyBTAMIAdADQDmAfGyCoQGzCnESC2QERC1EVg6QEVg6HFjwQHFjwF7goQF8goMGGBQMIGDPOpEQPQpCY1POQLAFGJ7olQJ7omFZMRMAAAAkFMjvrAAAg");
	this.shape_19.setTransform(767.025,154.0589);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#3399CC").s().p("Eh31AXLMAALghIQCqiiCihRQCGg5BSgaQBSgaB5ACQB+gCBgAEQBVALBVgiQBkgrCFhLQCMhPB+glQCXgyDiAoQEEAVEliCIAhgNQGTimHVCiQD7AuDThsQBqg0BVAMIAdADQDjAfGvCmQGvClEQC0QEOC0ESg6QETg5HBjtQHAjuF4goQF4gnL/F+QMBGAPFo+QPHo8YnPGQK5FCJ1ofQJ1ohFWMLMAAAAkEMjvrAAAg");
	this.shape_20.setTransform(767.025,154.1134);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#3399CC").s().p("Eh31AXLMAALghIQCuinCmhSQCLg6BUgZQBUgZB8AEQCDAABhAGQBXANBYgiQBmgsCJhNQCQhRCBglQCagyDoAsQELAZEtiHIAhgNQGairHiCrQEBAxDYhxQBtg3BXANIAcACQDiAfGrClQGqCkEOCyQEMCyEPg5QERg5G8jqQG9jrFzgoQF2gmL4F6QL6F8O8o4QO+o2YXO+QKzE/JwoZQJuobFTMDMAAAAkFMjvrAAAg");
	this.shape_21.setTransform(767.025,154.1834);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#3399CC").s().p("Eh31AXKMAALghIQCzirCqhSQCQg7BVgZQBVgYCBAGQCGACBkAHQBZAPBagiQBogsCOhPQCThTCEglQCdgzDvAxQEQAcE1iLIAigOQGhiwHwC1QEGA0Deh2QBvg6BZANIAcADQDfAeGnCjQGnCjELCxQEKCwENg4QEOg4G4jpQG4joFxgnQFygmLwF3QLzF5OzoyQO1owYJO1QKsE9JqoUQJooVFQL8MAAAAkEMjvrAAAg");
	this.shape_22.setTransform(767.025,154.2301);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#3399CC").s().p("Eh31AXKMAALghIQC3iwCvhTQCUg7BXgYQBXgYCFAIQCJADBmAKQBcARBcgiQBrgtCRhRQCXhVCHgmQCfgyD2A1QEXAgE8iQIAigOQGpi1H9C+QEMA3Djh7QByg8BbANIAbADQDeAeGjChQGjChEICvQEHCvELg4QELg3G0jmQG1jmFtgmQFugmLqF0QLrF2OrosQOroqX6OsQKmE6JkoOQJjoQFML1MAAAAkFMjvrAAAg");
	this.shape_23.setTransform(767.025,154.2842);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#3399CC").s().p("Eh31AXJMAALghIQC8i0CyhTQCZg9BZgXQBZgYCIAKQCNAGBoAMQBfATBegjQBtgsCVhUQCbhXCKgmQCigyD9A5QEcAkFEiVIAjgOQGwi7ILDIQESA7DoiBQB0g/BdAOIAbACQDcAeGeCgQGfCgEGCtQEFCtEIg3QEJg3GwjjQGwjkFqgmQFrgkLiFwQLlFyOhomQOjojXrOjQKfE4JeoJQJdoKFJLuMAAAAkEMjvrAAAg");
	this.shape_24.setTransform(767.025,154.3477);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#3399CC").s().p("Eh31AXIMAALghIQDAi4C3hUQCdg9BbgXQBbgXCMAMQCRAHBqAOQBgAVBhgjQBvgtCZhWQCfhZCNglQClgzEDA9QEiAoFMiZIAkgPQG3jAIZDSQEXA9DtiGQB2hBBfAOIAbADQDaAdGbCeQGbCeEDCsQEDCrEFg2QEHg2GsjhQGsjhFmglQFogkLbFsQLdFvOYogQOaodXcObQKZE1JYoDQJXoFFGLnMAAAAkEMjvrAAAg");
	this.shape_25.setTransform(767.025,154.4017);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#3399CC").s().p("Eh31AXIMAALghIQDFi9C7hVQChg+BdgWQBcgWCQANQCVAKBsAQQBjAXBjgkQBxgtCdhYQCjhbCQglQCogzEKBBQEoAsFTieIAlgQQG+jEImDbQEdBADyiLQB5hEBhAPIAbACQDYAeGWCcQGXCdECCqQD/CpEDg1QEEg2GojeQGnjfFkglQFkgjLUFpQLXFsOPoaQORoXXNOSQKSEyJSn9QJRn/FDLfMAAAAkFMjvrAAAg");
	this.shape_26.setTransform(767.025,154.4718);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#3399CC").s().p("Eh31AXHMAALghIQDJjBDAhVQClg/BfgWQBegVCUAPQCYAMBvASQBlAYBlgkQB0gtCghZQCnheCTgmQCrgyEQBFQEuAwFcijIAkgQQHGjKI0DlQEiBED4iRQB7hHBjAPIAaADQDWAdGTCbQGTCbD/CoQD9CoEBg1QEBg0GkjcQGjjdFggkQFhgjLNFmQLPFoOGoUQOIoQW/OJQKLEvJMn3QJLn5FALYMAAAAkEMjvrAAAg");
	this.shape_27.setTransform(767.025,154.5184);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#3399CC").s().p("Eh31AXHMAALghIQDOjGDDhVQCqhABhgVQBggWCXASQCcANBxAUQBoAbBngkQB2guCkhbQCqhgCXgmQCugyEXBJQE0A0FjioIAlgQQHNjPJBDuQEoBHD9iWQB+hJBlAPIAaADQDUAcGPCaQGPCZD8CnQD7CmD+g0QD/g0GfjaQGfjaFdgjQFegiLFFiQLIFlN9oOQOAoLWvOCQKFEsJGnyQJFn0E9LRMAAAAkFMjvrAAAg");
	this.shape_28.setTransform(767.025,154.5722);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#3399CC").s().p("Eh31AXGMAALghIQDTjKDHhWQCvhBBhgUQBjgVCbAUQCgAPBzAWQBpAdBqglQB4guCohdQCuhiCagmQCwgyEeBMQE6A5FritIAmgRQHUjUJPD4QEuBKECibQCAhMBnAQIAaACQDRAdGLCYQGLCYD6ClQD5CkD7gzQD9g0GbjXQGbjYFZgjQFaghK/FfQLBFhN0oHQN2oFWhN5QJ+EpJAnsQJAnuE5LKMAAAAkEMjvrAAAg");
	this.shape_29.setTransform(767.025,154.6359);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#3399CC").s().p("Eh31AXGMAALghIQDXjODMhXQCzhCBjgUQBkgUCfAVQCkASB1AYQBsAeBsglQB6guCshfQCyhkCdgmQCzgyElBQQFAA9FyiyIAngRQHbjZJcEBQE0BNEHihQCDhOBoAQIAaADQDQAcGHCXQGHCWD3CjQD2CjD5gzQD6gyGXjVQGXjVFWgjQFXghK3FcQK6FeNroCQNun+WRNwQJ4EnI7nnQI5noE2LCMAAAAkFMjvrAAAg");
	this.shape_30.setTransform(767.025,154.6888);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#3399CC").s().p("Eh31AXFMAALghIQDcjTDPhXQC4hDBlgTQBmgTCjAXQCnATB3AaQBvAhBugmQB8guCwhiQC2hlCggnQC2gyErBVQFGBAF6i2IAngSQHjjeJqEKQE5BREMimQCGhRBqARIAZACQDOAcGDCVQGDCVD2CiQDzChD2gzQD4gyGSjSQGTjTFTgiQFUggKwFYQKyFbNin8QNln4WDNoQJxEjI1ngQIznjEzK7MAAAAkFMjvrAAAg");
	this.shape_31.setTransform(767.025,154.7597);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#3399CC").s().p("Eh31AXEMAALghIQDgjXDUhYQC8hDBngTQBogTCmAZQCrAWB6AcQBwAiByglQB+gvCzhkQC6hnCjgnQC5gyEyBYQFLBFGCi7IAogSQHqjkJ4EUQE+BUESirQCIhUBsARIAZADQDMAcF/CTQF/CTDzCgQDxCgDzgyQD2gxGOjQQGPjRFPghQFQggKpFVQKsFYNZn2QNbnyV1NfQJqEhIvnbQItndEwK0MAAAAkEMjvrAAAg");
	this.shape_32.setTransform(767.025,154.8062);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#3399CC").s().p("Eh31AXEMAALghIQDljbDYhZQDAhEBpgSQBqgTCqAbQCvAXB7AeQBzAlB0gmQCAgvC3hmQC+hpCmgnQC8gyE4BcQFSBJGKjAIAogSQHxjpKFEdQFEBXEXiwQCLhWBuARIAZADQDJAbF7CSQF7CSDxCeQDuCeDygxQDzgxGJjOQGLjNFMghQFNgfKiFRQKkFUNQnvQNTnsVlNWQJkEeIpnVQInnYEtKtMAAAAkFMjvrAAAg");
	this.shape_33.setTransform(767.025,154.8597);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#3399CC").s().p("Eh31AXDMAALghIQDpjfDdhaQDEhFBrgRQBrgSCuAdQCzAZB+AgQB1AnB2gnQCCgvC8hoQDBhrCpgnQC/gyE/BgQFXBNGSjFIApgTQH4juKTEnQFJBbEdi2QCMhZBxASIAYACQDIAbF3CRQF3CQDuCdQDsCcDvgxQDwgwGGjLQGHjLFIggQFJgfKbFOQKeFRNHnqQNJnlVXNNQJdEcIjnQQIhnSEqKmMAAAAkEMjvrAAAg");
	this.shape_34.setTransform(767.025,154.9236);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#3399CC").s().p("Eh31AXDMAALghIQDujkDghaQDKhGBsgRQBtgRCyAfQC2AbCAAiQB4AoB4gmQCEgwDAhqQDFhtCsgnQDBgyFGBkQFeBQGZjJIApgTQH/jzKhEwQFPBeEii8QCPhbByASIAZADQDFAbFzCPQF0CODrCbQDqCbDsgwQDugwGBjIQGDjJFFggQFGgeKTFLQKXFNM+njQNBngVHNFQJXEZIdnKQIcnMEmKeMAAAAkFMjvrAAAg");
	this.shape_35.setTransform(767.025,154.9764);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#3399CC").s().p("Eh31AXDMAALghIQDyjoDlhbQDOhHBugQQBvgQC1AgQC6AdCDAkQB5ArB7goQCGgvDEhsQDIhwCwgnQDEgyFMBoQFkBVGhjOIAqgUQIGj4KvE6QFVBhEmjBQCSheB0ATIAYACQDEAbFvCNQFvCNDpCaQDnCYDqgvQDrgvF+jGQF/jGFBgfQFDgeKMFHQKPFKM1ndQM4nZU5M8QJQEWIXnEQIWnHEjKXMAAAAkFMjvrAAAg");
	this.shape_36.setTransform(767.025,154.9859);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#3399CC").s().p("Eh31AXDMAALghIQD3jtDphbQDShIBwgPQBxgQC5AiQC+AfCEAmQB8AtB9goQCJgwDHhuQDMhxCzgnQDHgzFTBtQFqBYGojTIArgUQINj9K8FDQFbBkEsjGQCUhgB2ATIAYACQDBAbFrCLQFsCMDnCYQDkCXDngvQDpguF6jEQF6jEE+geQE/gdKFFEQKJFGMsnXQMvnTUqM0QJJETIRm/QIQnBEgKQMAAAAkFMjvrAAAg");
	this.shape_37.setTransform(767.025,154.9687);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#3399CC").s().p("Eh31AXDMAALghIQD7jxDthcQDXhIBygPQBygPC9AkQDCAhCHAoQB+AvB/goQCLgwDLhxQDQhzC2gnQDKgzFZBxQFwBcGwjYIAsgUQIUkCLKFMQFgBoExjMQCXhjB4ATIAXADQDAAaFnCKQFnCKDlCWQDiCWDlguQDlguF2jBQF3jBE6geQE8gdJ+FBQKBFDMjnRQMmnNUbMrQJDEQILm5QIKm7EdKJMAAAAkEMjvrAAAg");
	this.shape_38.setTransform(767.025,154.9388);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#3399CC").s().p("Eh31AXDMAALghIQEAj1DxhdQDbhJB0gOQB0gPDBAmQDFAjCJAqQCAAxCCgpQCNgwDPhyQDUh2C5gnQDNgyFgB0QF1BgG4jcIAsgVQIckHLYFWQFlBqE3jRQCZhlB6AUIAXACQC+AaFjCJQFjCIDiCVQDgCTDhgtQDkgtFyi/QFyi/E3gdQE5gcJ2E9QJ7FAMZnLQMenHUMMiQI8EOIGmzQIDm2EaKCMAAAAkEMjvrAAAg");
	this.shape_39.setTransform(767.025,154.9165);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#3399CC").s().p("Eh31AXEMAALghIQEFj6D1hdQDfhKB2gOQB2gODFAoQDJAlCKAsQCDAyCEgoQCPgxDTh0QDYh4C8gnQDQgyFmB4QF8BkHAjhIAsgVQIjkNLlFgQFrBuE8jXQCchoB7AUIAXADQC8AZFfCIQFgCGDfCTQDdCSDfgtQDigsFui8QFui9EzgcQE1gbJwE5QJzE9MRnGQMUnAT9MaQI2ELIAmuQH9mwEXJ6MAAAAkFMjvrAAAg");
	this.shape_40.setTransform(767.025,154.8861);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#3399CC").s().p("Eh31AXEMAALghIQEJj+D6heQDjhLB4gNQB4gODIAqQDNAnCNAuQCFA1CGgpQCSgxDWh3QDch5C/goQDSgyFuB8QGBBoHIjlIAtgWQIqkSLzFpQFxBxFAjbQCfhrB9AVIAXACQC6AZFbCGQFbCFDdCRQDbCRDcgsQDggsFpi6QFqi6EwgcQEygbJoE2QJsE6MInAQMLm6TvMRQIvEJH6moQH4mrETJzMAAAAkFMjvrAAAg");
	this.shape_41.setTransform(767.025,154.8554);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#3399CC").s().p("Eh31AXEMAALghIQEOkCD9hfQDphLB5gNQB6gNDMAsQDQApCPAwQCIA2CIgpQCUgxDah5QDgh7DCgoQDVgyF0CAQGIBsHPjqIAugWQIxkXMAFyQF3B0FGjgQCghuCAAVIAWADQC4AZFXCEQFYCEDaCPQDYCPDagsQDdgqFmi4QFli4EtgcQEvgZJhEyQJlE2L+m5QMDm0TgMIQIoEGH0miQHymlEQJsMAAAAkEMjvrAAAg");
	this.shape_42.setTransform(767.025,154.8326);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#3399CC").s().p("Eh31AXEMAALghIQESkGEChgQDthMB7gMQB7gMDQAtQDUArCSAyQCJA4CLgpQCWgyDeh6QDkh+DFgnQDYgzF7CEQGNBxHXjwIAugWQI5kcMOF8QF8B3FLjmQCjhwCCAVIAWADQC2AZFTCCQFTCCDZCOQDUCNDZgrQDagqFhi1QFii1EpgbQErgZJaEvQJeEyL2mzQL5muTRMAQIiEDHumdQHsmfENJlMAAAAkEMjvrAAAg");
	this.shape_43.setTransform(767.025,154.8015);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#3399CC").s().p("Eh31AXFMAALghIQEXkLEGhgQDxhOB9gLQB9gLDUAvQDYAtCTA0QCMA6CNgqQCYgyDih8QDoiADIgoQDbgyGBCIQGUB0Hej0IAvgXQJAkhMcGGQGBB6FQjrQCmhzCEAWIAVACQC0AZFPCBQFQCBDVCMQDTCLDWgqQDYgpFdizQFdizEmgbQEogYJTErQJWEwLtmtQLxmoTCL3QIbEAHomWQHmmaEKJdMAAAAkFMjvrAAAg");
	this.shape_44.setTransform(767.025,154.7702);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#3399CC").s().p("Eh31AXFMAALghIQEbkPEKhgQD2hPB/gLQB/gLDXAyQDcAuCWA3QCOA8CPgrQCagxDmh/QDriCDMgoQDegyGICMQGZB4Hmj5IAwgXQJHkmMpGPQGHB+FWjxQCoh1CFAWIAWACQCyAZFLB/QFMB/DSCLQDRCJDTgpQDWgpFZiwQFZixEigaQElgYJLEoQJQEsLkmnQLnmhSzLuQIVD+HimRQHgmVEHJXMAAAAkEMjvrAAAg");
	this.shape_45.setTransform(767.025,154.7469);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#3399CC").s().p("Eh31AXFMAALghIQEgkUEOhgQD6hQCBgKQCBgKDbAzQDfAwCYA5QCRA+CRgrQCdgyDpiAQDviEDOgoQDigzGOCQQGfB9Huj+IAxgYQJOkrM3GYQGMCBFbj2QCrh3CHAWIAVACQCwAZFHB9QFHB+DRCJQDOCIDRgpQDTgoFViuQFViuEfgaQEhgXJFElQJIEoLbmhQLfmbSkLmQIOD7HcmMQHamOEEJPMAAAAkEMjvrAAAg");
	this.shape_46.setTransform(767.025,154.7152);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#3399CC").s().p("Eh31AXGMAALghIQEkkYEThiQD+hQCDgKQCCgJDfA1QDjAyCbA7QCSBACUgrQCfgzDuiCQDyiGDRgoQDkgzGWCUQGlCAH2kCIAwgYQJWkxNEGiQGTCFFgj8QCth6CJAXIAVACQCuAYFDB8QFDB8DOCHQDMCHDOgpQDRgnFRirQFRisEbgZQEegXI9EiQJBElLSmbQLWmVSVLdQIID4HWmGQHVmJEAJIMAAAAkFMjvrAAAg");
	this.shape_47.setTransform(767.025,154.6834);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#3399CC").s().p("Eh31AXGMAALghIQEpkdEXhiQEChRCFgJQCEgJDjA3QDnA0CcA9QCVBCCWgsQChgyDyiFQD2iHDUgpQDngyGcCYQGrCEH+kHIAxgZQJdk2NSGsQGYCHFlkBQCwh8CLAXIAUACQCsAYFAB7QE+B6DMCGQDKCEDMgoQDOgmFMipQFNipEYgZQEagWI2EeQI7EiLJmVQLNmPSGLVQIBD1HRmAQHOmDD9JAMAAAAkFMjvrAAAg");
	this.shape_48.setTransform(767.025,154.6598);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#3399CC").s().p("Eh31AXGMAALghIQEtkhEbhiQEIhSCGgJQCGgIDmA5QDrA2CeA/QCYBECYgsQCjgzD2iHQD6iJDXgpQDqgzGjCcQGxCJIFkMIAygZQJkk7NfG1QGeCLFqkHQCzh/CNAYIAUACQCqAXE7B5QE7B5DKCEQDHCDDJgnQDMgmFIimQFJinEUgYQEXgVIvEaQIzEfLAmPQLEmJR4LMQH6DyHLl6QHIl+D6I6MAAAAkEMjvrAAAg");
	this.shape_49.setTransform(767.025,154.6276);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#3399CC").s().p("Eh31AXHMAALghIQEyklEfhkQEMhTCIgHQCIgIDqA7QDuA4ChBAQCZBGCbgsQCmgzD5iJQD+iLDagpQDtgzGpCgQG3CNINkRIAzgaQJrlANtG/QGjCOFwkMQC1iCCOAYIAVACQCnAYE3B3QE4B4DHCCQDECBDHgmQDJgmFEikQFFikERgXQEUgVInEXQItEbK2mJQK7mDRpLEQH0DwHFl1QHCl4D3IyMAAAAkFMjvrAAAg");
	this.shape_50.setTransform(767.025,154.5953);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#3399CC").s().p("Eh31AXHMAALghIQE3kqEjhkQEQhTCJgHQCKgIDuA9QDyA6CjBDQCcBHCdgsQCog0D9iKQECiODdgpQDwgyGwCkQG8CQIVkWIAzgZQJzlGN6HIQGpCRF1kQQC3iFCRAZIAUACQCmAXEyB2QE0B2DFCAQDCCADEgmQDHglFAihQFAiiEOgXQEQgUIhETQIlEYKumDQKyl8RaK7QHtDtG/lvQG8lzD0IrMAAAAkFMjvrAAAg");
	this.shape_51.setTransform(767.025,154.5714);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#3399CC").s().p("Eh31AXHMAALghIQE7kuEnhkQEVhVCLgGQCMgHDyA/QD2A8ClBEQCeBKCfgtQCqgzEBiNQEGiQDggpQDzgzG2CoQHDCVIckbIA0gaQJ6lKOIHRQGvCVF5kWQC6iICTAZIATACQCkAXEvB0QEwB1DCB/QDAB+DBglQDFglE8ifQE8ifEKgWQENgUIZEQQIeEVKll9QKpl3RLKzQHoDqG4lpQG2ltDxIkMAAAAkEMjvrAAAg");
	this.shape_52.setTransform(767.025,154.5388);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#3399CC").s().p("Eh31AXHMAALghIQFAkyErhlQEZhVCNgGQCOgGD1BAQD6A+CnBHQChBLChgtQCsg0EFiPQEJiRDkgqQD1gyG+CsQHICYIlkfIA0gbQKBlPOWHbQG0CXF/kbQC8iKCVAaIATACQChAWErBzQEsBzDAB9QC9B8DAgkQDBgkE4icQE4idEHgWQEKgTISENQIXERKbl3QKhlwQ8KqQHhDnGylkQGxlnDtIdMAAAAkEMjvrAAAg");
	this.shape_53.setTransform(767.025,154.5061);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#3399CC").s().p("Eh31AXIMAALghIQFEk3EwhmQEdhWCPgFQCQgGD5BDQD9BACqBIQCiBOCkguQCug0EJiRQENiTDngqQD4gyHECwQHPCcIskkIA1gbQKIlVOjHlQG6CbGEkhQC/iNCWAaIATACQCgAWEnByQEoBxC9B8QC7B6C9gkQC/giE0ibQE0iaEDgVQEGgTILEJQIQEOKTlwQKXlrQuKiQHaDkGsleQGrlhDqIVMAAAAkFMjvrAAAg");
	this.shape_54.setTransform(767.025,154.4819);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#3399CC").s().p("Eh31AXIMAALghIQFJk7E0hmQEihXCQgFQCRgFD+BFQEABBCsBLQClBQCnguQCwg1EMiTQERiVDqgqQD7gyHLCzQHUChI0kpIA1gbQKQlaOxHuQG/CeGKkmQDBiPCXAaIATACQCeAWEkBwQEkBvC7B6QC4B5C6gjQC9giEviYQEwiYEAgVQEDgRIEEFQIJELKJlrQKPlkQeKZQHUDiGmlZQGllcDnIPMAAAAkEMjvrAAAg");
	this.shape_55.setTransform(767.025,154.4491);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#3399CC").s().p("Eh31AXIMAALghIQFNk/E4hnQEnhYCSgEQCTgEEBBGQEFBDCuBNQCnBSCpguQCyg1EQiVQEViYDtgqQD+gyHRC4QHbCkI7ktIA2gcQKXlfO+H3QHFCiGPksQDDiRCaAaIATACQCcAWEfBuQEgBuC5B5QC1B3C4gjQC7ghEriWQEsiVD8gUQEAgSH8EDQICEHKBllQKFldQQKQQHNDfGglTQGflWDkIHMAAAAkEMjvrAAAg");
	this.shape_56.setTransform(767.025,154.4161);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#3399CC").s().p("Eh31AXJMAALghIQFSlEE8hoQErhYCUgEQCVgDEFBIQEIBFCwBPQCpBUCsgvQC0g1EUiXQEZiaDwgqQEBgyHYC8QHgCoJDkyIA3gcQKdllPNIBQHKClGUkxQDGiUCcAbIASACQCaAVEcBtQEcBtC2B2QCzB2C1giQC4ghEoiTQEniTD5gUQD8gQH2D/QH6EDJ4leQJ8lYQBKIQHHDcGblNQGYlRDhIAMAAAAkFMjvrAAAg");
	this.shape_57.setTransform(767.025,154.3917);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#3399CC").s().p("Eh31AXJMAALghIQFWlIFBhpQEvhZCWgDQCXgDEIBKQEMBHCyBRQCsBWCugvQC2g2EYiZQEdibDzgqQEEgzHeDAQHmCsJLk3IA4gcQKklqPaILQHRCnGYk2QDJiWCeAbIASACQCYAVEXBrQEYBrC0B1QCxB0CzghQC1ggEjiRQEkiQD1gTQD5gQHuD7QH0EBJulZQJ0lRPyJ/QHADZGVlHQGSlLDeH4MAAAAkFMjvrAAAg");
	this.shape_58.setTransform(767.025,154.3585);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#3399CC").s().p("Eh31AXJMAALghIQFblMFEhpQE0haCYgDQCYgCENBMQEPBJC1BTQCuBYCwgwQC4g1EdicQEgidD2gqQEGgzHmDEQHsCwJTk8IA3gdQKsluPoIUQHWCrGdk8QDMiZCgAcIARACQCWAUEUBqQEUBqCxBzQCvByCwghQCzgfEfiOQEfiODygTQD1gPHoD4QHsD9JmlSQJqlMPkJ3QG5DWGPlBQGNlGDaHyMAAAAkEMjvrAAAg");
	this.shape_59.setTransform(767.025,154.3252);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#3399CC").s().p("Eh31AXJMAALghIQFflQFJhqQE4hbCagCQCagCEQBOQEUBLC2BVQCxBaCygwQC7g2EgidQEkigD5gqQEJgzHsDIQHyC0JblAIA4gdQKzl0P2IdQHbCuGjlAQDNicCiAcIASACQCUAUEPBoQERBpCvBxQCrBxCuggQCxgfEaiMQEciMDugRQDygPHgD0QHlD6JdlMQJilFPUJtQGzDUGJk8QGHlADXHrMAAAAkEMjvrAAAg");
	this.shape_60.setTransform(767.025,154.3006);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#3399CC").s().p("Eh31AXKMAALghIQFklVFNhrQE8hcCcgBQCcgBEUBQQEXBNC5BXQCyBbC1gwQC9g2EkifQEoiiD8gqQEMgzHzDMQH4C4JilFIA5geQK6l5QDInQHhCyGolGQDQifCkAdIARABQCSAVEMBmQEMBnCtBwQCpBuCrgfQCugeEXiJQEXiJDrgSQDvgOHZDxQHeD3JTlHQJZk/PGJmQGsDRGDk3QGBk6DUHjMAAAAkFMjvrAAAg");
	this.shape_61.setTransform(767.025,154.2672);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#3399CC").s().p("Eh31AXKMAALghIQFplZFRhrQFBhdCdAAQCegBEXBSQEbBPC7BZQC1BdC3gwQC/g3EoihQErikEAgqQEPgzH5DQQH+C8JqlKIA6geQLBl+QRIwQHlC1GulMQDTihCmAdIARACQCQAUEHBlQEJBlCqBvQCnBtCogfQCsgeESiGQETiHDogRQDrgOHSDuQHXDzJLlAQJQk5O2JdQGmDOF9kwQF7k1DRHcMAAAAkEMjvrAAAg");
	this.shape_62.setTransform(767.025,154.2416);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#3399CC").s().p("Eh31AXKMAALghIQFtleFVhrQFGheCfAAQCfAAEcBUQEeBRC+BbQC3BfC5gwQDBg3EsijQEvimEDgrQESgyH/DTQIFDBJxlPIA6gfQLJmDQeI5QHrC5G0lRQDVikCoAeIAQABQCOAUEEBkQEEBjCoBtQCkBrCngeQCpgdEOiEQEPiEDkgRQDogNHKDrQHRDvJBk6QJHkzOoJVQGfDLF3krQF1kvDOHVMAAAAkEMjvrAAAg");
	this.shape_63.setTransform(767.025,154.208);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#3399CC").s().p("Eh31AXLMAALghIQFyliFZhsQFKhfChABQChAAEfBWQEjBSC/BeQC6BhC7gxQDEg3EvilQEzioEGgrQEVgzIGDYQIKDEJ5lTIA7gfQLQmIQsJCQHxC8G4lWQDYimCpAdIARACQCMAUEABhQEABiClBrQCiBqCkgdQCngdEKiBQEKiCDhgQQDlgMHDDnQHJDsI4k0QI/ktOYJMQGZDJFxkmQFvkpDLHNMAAAAkFMjvrAAAg");
	this.shape_64.setTransform(767.025,154.1833);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#3399CC").s().p("Eh31AXLMAALghIQF2lmFehtQFOhfCjABQCjABEjBXQEmBVDCBfQC7BkC+gyQDGg3EzinQE3iqEJgrQEXgzINDcQIRDIKBlYIA7ggQLXmNQ6JMQH2C/G+lbQDaipCrAeIAQACQCKATD8BgQD9BhCiBpQCgBoChgdQCkgbEGiAQEHh/DdgPQDhgMG8DjQHCDpIwkuQI1kmOKJDQGSDGFrkgQFqkkDHHHMAAAAkEMjvrAAAg");
	this.shape_65.setTransform(767.025,154.1495);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#3399CC").s().p("Eh31AXLMAALghIQF7lrFhhtQFThgClACQClABEmBaQEqBWDEBiQC+BlDAgyQDIg3E3iqQE7isEMgrQEagyIUDfQIWDNKJleIA8ggQLemSRHJWQH8DCHDlhQDdirCtAeIAQACQCIATD4BfQD4BeChBoQCcBmCfgcQCigaECh9QECh9DagPQDegLG1DgQG7DmImkpQItkgN7I7QGLDDFlkaQFkkeDEG/MAAAAkEMjvrAAAg");
	this.shape_66.setTransform(767.025,154.1158);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#3399CC").s().p("Eh31AXMMAALghIQF/lvFmhuQFXhiCnADQCmACErBcQEtBYDGBjQDBBoDCgzQDKg3E7isQE/iuEPgrQEdgyIaDjQIcDQKRliIA8ggQLmmXRVJfQIBDFHIlmQDgiuCvAfIAPABQCGATD0BeQD1BdCeBmQCaBkCcgbQCggaD9h7QD/h6DWgOQDagLGuDdQG0DiIdkiQIkkaNsIyQGFDAFgkUQFdkZDBG4MAAAAkFMjvrAAAg");
	this.shape_67.setTransform(767.025,154.0909);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#3399CC").s().p("Eh31AXMMAALghIQGEl0FqhuQFbhiCpADQCoADEuBdQEyBaDIBmQDCBpDFgzQDMg4E/itQFDiwESgsQEggyIhDoQIiDUKYlnIA9ghQLtmcRhJoQIIDJHOlsQDhiwCyAfIAPACQCEASDwBcQDwBcCcBkQCYBjCZgbQCegZD5h4QD6h5DTgNQDXgKGnDZQGsDfIVkcQIakUNeIpQF+C+FakOQFXkTC+GwMAAAAkFMjvrAAAg");
	this.shape_68.setTransform(767.025,154.057);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#3399CC").s().p("Eh31AXMMAALghIQGIl4FvhvQFghjCqAEQCqAEEyBfQE1BcDKBnQDFBrDHgyQDPg5FCivQFHiyEVgsQEjgyInDrQIoDZKglsIA+ghQL0miRvJyQIODMHSlxQDkizCzAgIAPABQCCATDsBaQDtBaCZBjQCVBhCYgaQCagZD2h2QD2h1DPgNQDUgKGfDWQGmDcILkWQISkONOIhQF4C7FUkJQFRkOC7GqMAAAAkEMjvrAAAg");
	this.shape_69.setTransform(767.025,154.023);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#3399CC").s().p("Eh31AXNMAALghIQGNl9FyhvQFlhkCsAEQCsAEE2BhQE4BfDNBpQDHBtDJgzQDRg5FGixQFLi0EYgsQEmgyIuDvQIuDcKnlwIA/ghQL7mnR8J7QIUDPHYl2QDmi2C1AgIAPACQCAASDoBZQDpBYCWBhQCTBgCVgaQCYgYDxhzQDyhzDMgNQDQgIGZDSQGeDYIDkQQIIkHNAIYQFxC4FOkDQFLkIC4GiMAAAAkFMjvrAAAg");
	this.shape_70.setTransform(767.025,153.998);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#3399CC").s().p("Eh31AXNMAALghIQGRmBF3hwQFphlCuAFQCtAFE6BjQE8BgDPBrQDKBvDLgzQDTg5FLi0QFNi2EcgrQEogzI1D0QI0DgKwl1IA+giQMDmsSKKFQIZDSHdl8QDpi4C3AhIAPABQB+ASDkBXQDkBXCUBgQCRBdCSgZQCWgXDthxQDuhxDIgLQDNgJGRDPQGYDVH5kKQIAkBMxIPQFqC2FIj+QFGkCC0GbMAAAAkFMjvrAAAg");
	this.shape_71.setTransform(767.025,153.9639);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#3399CC").s().p("Eh31AXNMAALghIQGWmFF7hxQFthlCwAFQCvAGE+BkQFABjDRBtQDLBxDOg0QDVg5FPi2QFRi4EfgsQErgyI8D3QI6DlK3l6IA/gjQMKmxSYKPQIeDVHimBQDsi7C5AhIAOACQB8ARDgBWQDhBVCSBeQCOBcCPgYQCUgXDphuQDphuDFgMQDKgHGKDLQGQDSHwkEQH3j7MiIHQFkCyFCj4QFAj8CxGUMAAAAkEMjvrAAAg");
	this.shape_72.setTransform(767.025,153.9298);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#3399CC").s().p("Eh31AXNMAALghIQGbmJF+hyQFyhmCxAGQCyAGFBBnQFEBkDTBvQDOBzDQg0QDXg5FTi4QFVi6EigsQEugzJCD8QJADoK/l/IBAgiQMRm3SlKYQIkDZHomGQDui+C7AiIANABQB7ARDcBUQDcBUCQBdQCLBaCNgYQCRgWDlhsQDlhsDCgKQDGgHGDDIQGJDOHoj+QHuj1MTH+QFdCwE8jyQE6j3CuGNMAAAAkEMjvrAAAg");
	this.shape_73.setTransform(767.025,153.9047);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#3399CC").s().p("Eh31AXOMAALghIQGfmOGDhyQF2hnCzAHQC0AGFFBoQFHBmDWByQDQB1DSg1QDag5FWi6QFZi8ElgsQExgzJJEAQJFDsLHmEIBBgjQMYm7SzKhQIpDcHtmLQDxjAC8AhIAOACQB4ARDYBSQDZBTCNBaQCJBZCLgXQCOgWDhhpQDhhqC+gKQDDgGF8DFQGCDKHej3QHljvMEH1QFXCuE2jtQE0jxCrGFMAAAAkFMjvrAAAg");
	this.shape_74.setTransform(767.025,153.8705);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#3399CC").s().p("Eh31AXOMAALghIQGkmSGHhzQF7hoC0AIQC1AHFJBqQFLBoDYB0QDTB3DUg1QDcg6Fai8QFdi+EogsQE0gzJPEDQJMDxLOmJIBBgjQMgnBTAKrQIwDfHymQQDzjDC+AiIAOABQB2ARDUBRQDVBRCKBZQCHBXCIgWQCMgVDchnQDdhnC7gKQDAgGF0DBQF7DIHVjyQHcjoL2HtQFQCqEwjnQEujsCoF/MAAAAkEMjvrAAAg");
	this.shape_75.setTransform(767.025,153.8363);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#3399CC").s().p("Eh31AXOMAALghIQGomWGMh0QF/hoC2AIQC3AHFNBsQFPBqDZB2QDVB5DXg2QDeg6Fei+QFhjAErgsQE3gzJWEIQJRD0LWmNIBCgkQMnnGTOK1QI1DiH3mWQD2jFDAAiIANACQB0AQDQBPQDRBQCIBXQCEBVCGgVQCKgVDYhkQDZhlC3gJQC8gFFtC+QF1DEHMjsQHTjiLnHkQFJCoErjhQEnjmClF3MAAAAkEMjvrAAAg");
	this.shape_76.setTransform(767.025,153.8111);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#3399CC").s().p("Eh31AXPMAALghIQGtmbGPh0QGEhqC4AJQC5AIFQBuQFTBsDcB4QDXB6DZg1QDgg7FijAQFljBEugtQE5gzJdEMQJYD4LemSIBCgkQMunLTbK+QI7DlH8mbQD5jIDCAjIANABQByAQDMBOQDNBOCFBWQCCBTCDgVQCHgTDVhiQDUhiC0gJQC5gFFmC7QFtDBHDjmQHKjcLYHbQFDClEljbQEijhChFwMAAAAkFMjvrAAAg");
	this.shape_77.setTransform(767.025,153.7767);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#3399CC").s().p("Eh31AXPMAALghIQGxmfGUh1QGIhqC6AJQC7AJFUBwQFWBuDeB5QDaB9Dbg2QDjg7FljCQFpjDExgtQE8gzJkEQQJdD8LmmXIBDglQM0nQTqLIQJADoICmgQD6jLDFAkIAMABQBwAQDIBMQDJBMCDBUQCABSCAgUQCFgTDQhgQDRhfCwgIQC1gEFfC3QFmC9G6jfQHCjXLJHUQE8CiEfjWQEcjbCeFpMAAAAkEMjvrAAAg");
	this.shape_78.setTransform(767.025,153.7424);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#3399CC").s().p("Eh31AXPMAALghIQG2mjGYh1QGMhsC8AKQC8AJFYByQFaBwDhB8QDbB+Deg2QDlg7FpjEQFsjGE1gtQE/gzJqEUQJjEALumbIBDglQM8nWT3LRQJGDsIHmmQD9jNDGAkIANABQBuAQDEBKQDFBLCBBTQB8BQB/gUQCCgSDMhdQDMheCtgHQCygDFYCzQFfC6GxjZQG4jQK6HKQE2CgEZjRQEWjVCbFiMAAAAkEMjvrAAAg");
	this.shape_79.setTransform(767.025,153.7171);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#3399CC").s().p("Eh31AXQMAALghIQG6moGch2QGRhsC+AKQC+AKFcB0QFeByDiB9QDeCBDgg3QDng7FtjGQFwjIE4gtQFCgzJxEYQJpEEL1mgIBEgmQNDnaUFLaQJMDvILmrQEAjQDIAlIAMABQBsAPDBBJQDBBKB+BQQB6BPB8gTQB/gSDIhbQDJhaCpgHQCvgDFQCwQFYC3GojUQGwjJKrHBQEvCdETjKQEQjQCYFaMAAAAkFMjvrAAAg");
	this.shape_80.setTransform(767.025,153.6827);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#3399CC").s().p("Eh31AXQMAALghIQG/msGgh2QGVhuDAALQDAALFfB2QFiBzDlCAQDgCDDjg3QDog8FxjIQF0jKE7gtQFFgzJ3EcQJvEIL9mlQAigSAjgUQNKngUTLkQJRDzIRmxQECjSDKAkIAMABQBqAQC8BHQC9BIB8BPQB4BNB5gTQB9gRDEhYQDEhYCmgGQCrgDFKCtQFQCzGgjNQGmjEKcG6QEpCaENjFQEKjKCVFTMAAAAkEMjvrAAAg");
	this.shape_81.setTransform(767.025,153.6482);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#3399CC").s().p("Eh31AXQMAALghIQHDmwGlh3QGahuDBALQDCAMFjB3QFlB2DnCBQDjCFDlg4QDqg7F1jKQF4jME+guQFIgyJ+EfQJ1EMMEmqIBGgmQNRnlUgLuQJXD1IWm2QEFjVDMAlIALACQBoAPC5BGQC5BGB5BNQB2BLB2gSQB7gQC/hWQDBhWCigFQCogCFCCpQFKCwGWjHQGei9KNGwQEiCXEHi/QEEjECSFMMAAAAkEMjvrAAAg");
	this.shape_82.setTransform(767.025,153.6229);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#3399CC").s().p("Eh31AXRMAALghIQHIm1Gph4QGehvDDANQDDALFnB6QFpB3DqCEQDkCHDog4QDtg8F4jMQF8jOFBguQFKgzKFEkQJ7EQMMmvIBGgmQNYnqUvL3QJcD4Icm7QEHjXDOAlIALABQBmAPC0BEQC1BFB3BMQBzBJB0gRQB5gPC7hUQC8hTCfgGQClgBE7CmQFCCtGNjBQGVi4J/GoQEbCVEBi6QD/i+COFEMAAAAkFMjvrAAAg");
	this.shape_83.setTransform(767.025,153.5883);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#3399CC").s().p("Eh31AXRMAALghIQHNm5Gsh5QGjhwDFANQDFANFrB7QFtB5DrCGQDnCJDqg4QDvg9F9jOQF/jQFEgtQFNgzKMEnQKBEUMUmzIBGgnQNfnvU8MAQJiD8IhnAQEKjaDPAlIALABQBkAPCxBDQCxBDB1BKQBwBIBygRQB1gPC4hRQC3hRCcgEQChgBE0CjQE7CpGFi7QGLixJwGfQEVCSD7i0QD5i5CLE9MAAAAkFMjvrAAAg");
	this.shape_84.setTransform(767.025,153.5537);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#3399CC").s().p("Eh31AXRMAALghIQHRm9Gxh5QGnhxDHAOQDHANFvB9QFwB7DtCIQDqCKDsg4QDxg9GBjQQGDjSFHguQFQgyKSErQKHEYMcm4IBHgnQNmn1VKMKQJnD/ImnGQENjcDRAmIALABQBiAOCsBCQCuBBByBJQBuBGBvgQQBzgOCzhPQC0hPCYgEQCeABEtCeQE0CnF7i2QGDirJhGXQEOCPD2iuQDyizCIE2MAAAAkEMjvrAAAg");
	this.shape_85.setTransform(767.025,153.5284);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#3399CC").s().p("Eh31AXSMAALghIQHWnCG1h6QGrhxDJAOQDJAOFyB/QF0B9DwCKQDrCMDvg5QDzg8GFjTQGHjUFKguQFTgyKZEvQKMEcMkm9IBIgoQNtn5VYMTQJtEDIrnMQEOjfDUAnIAKABQBhAOCoBAQCpBABwBGQBrBFBtgQQBxgNCvhMQCvhMCVgEQCbABElCbQEtCjFyivQF6ilJSGOQEICNDwipQDsiuCFEvMAAAAkFMjvrAAAg");
	this.shape_86.setTransform(767.025,153.4937);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#3399CC").s().p("Eh31AXSMAALghIQHanHG5h6QGwhyDLAPQDLAOF2CBQF4B/DxCMQDuCODxg5QD2g9GIjUQGLjWFNguQFWgzKfEzQKTEgMrnBIBIgpQN1n+VlMdQJzEFIwnQQERjiDWAnIAKABQBeAOClA+QClA+BtBFQBpBDBqgOQBvgNCqhKQCshKCRgDQCXACEfCYQEmCfFpipQFxifJDGGQEBCJDqiiQDmipCCEoMAAAAkFMjvrAAAg");
	this.shape_87.setTransform(767.025,153.4709);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#3399CC").s().p("Eh31AXSMAALghIQHfnKG9h7QG0hzDNAPQDMAPF6CDQF8CBD0COQDwCQDzg6QD4g9GMjWQGOjYFRguQFZgzKmE3QKYEkMznGIBJgpQN8oDVzMmQJ4EJI2nWQETjlDYAoIAJABQBdANCgA9QChA9BrBDQBnBBBngOQBsgMCnhHQCnhICOgCQCUACEXCVQEfCcFgijQFoiZI1F9QD6CHDkidQDgijB/EhMAAAAkEMjvrAAAg");
	this.shape_88.setTransform(767.025,153.4455);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#3399CC").s().p("Eh31AXSMAALghIQHjnPHCh7QG5h0DOAQQDOAPF+CFQF/CDD2CQQDzCSD1g6QD6g9GQjZQGSjaFUguQFbgzKtE7QKfEoM6nLQAlgTAlgWQODoIWAMvQJ+EMI7nbQEWjnDZAoIAKABQBaANCdA7QCdA8BoBBQBkBABmgOQBpgLCjhFQCjhFCKgCQCRADEPCRQEYCZFXidQFgiTIlF1QD0CEDeiYQDbidB7EaMAAAAkEMjvrAAAg");
	this.shape_89.setTransform(767.025,153.4108);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#3399CC").s().p("Eh31AXTMAALghIQHonUHGh8QG9h1DQARQDQAQGBCHQGDCFD5CSQD0CUD4g6QD8g+GUjbQGWjcFXguQFegzKzE/QKlEsNCnQIBLgpQOKoOWOM5QKDEQJAnhQEZjqDbApIAJAAQBZANCYA6QCaA6BmBAQBhA+BjgNQBngLCehCQCfhDCHgBQCNADEJCOQERCVFOiXQFWiMIXFsQDtCBDYiSQDViXB4ESMAAAAkFMjvrAAAg");
	this.shape_90.setTransform(767.025,153.376);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#3399CC").s().p("Eh31AXTMAALghIQHsnYHKh9QHCh1DSARQDSARGFCIQGHCHD6CUQD3CWD6g7QD+g+GYjcQGajeFagvQFhgzK6FEQKrEwNKnVIBKgqQOSoTWbNDQKKESJFnmQEbjsDdApIAJABQBWAMCVA4QCVA5BkA+QBfA8BggMQBlgKCahAQCbhACDgBQCKAEEBCKQEKCSFFiRQFOiFIHFjQDnB+DSiMQDPiSB1ELMAAAAkFMjvrAAAg");
	this.shape_91.setTransform(767.025,153.3505);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#3399CC").s().p("Eh31AXTMAALghIQHxncHOh9QHGh3DUASQDTARGJCLQGLCJD9CWQD5CYD8g7QEBg/GbjeQGejgFdgvQFkgzLAFHQKxE1NSnaIBLgqQOZoYWpNMQKPEVJKnrQEejvDfApIAJABQBUANCQA2QCSA3BhA9QBdA6BdgLQBigKCWg9QCXg+CAAAQCGAED7CHQEDCPE8iLQFEiAH5FbQDgB8DMiHQDJiMByEEMAAAAkEMjvrAAAg");
	this.shape_92.setTransform(767.025,153.3157);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#3399CC").s().p("Eh31AXUMAALghIQH1nhHTh+QHKh3DWASQDVASGNCNQGOCKD/CYQD8CbD+g8QEDg+GfjhQGijiFggvQFngzLHFLQK2E4NaneIBMgrQOgodW3NWQKUEZJQnxQEgjxDhApIAIABQBSAMCNA1QCNA1BfA8QBaA4BbgLQBggJCSg7QCTg7B8ABQCDAFDzCDQD8CMEziFQE7h6HrFSQDaB5DFiBQDDiGBvD8MAAAAkFMjvrAAAg");
	this.shape_93.setTransform(767.025,153.2809);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#3399CC").s().p("Eh31AXUMAALghIQH6nlHWh/QHPh4DYATQDXATGQCOQGSCMEBCbQD+CcEBg8QEFg/GjjjQGmjkFjgvQFqgyLNFPQK9E8NhnjIBNgrQOnojXENfQKaEcJVn2QEijzDjApIAIABQBRAMCIA0QCKAzBcA6QBYA3BZgLQBdgICNg4QCPg5B5ABQCAAGDsCAQD0CIEqh/QEzh0HbFKQDUB2DAh7QC8iBBsD1MAAAAkFMjvrAAAg");
	this.shape_94.setTransform(767.025,153.2554);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#3399CC").s().p("Eh31AXUMAALghIQH+npHbh/QHUh5DYATQDaAUGUCQQGWCOEDCcQEACeEDg8QEHg/GnjlQGqjmFmgvQFsgzLVFTQLCFBNpnoIBMgsQOwonXSNoQKfEgJan8QElj2DlAqIAIABQBOAMCFAxQCFAzBaA3QBWA2BWgKQBagHCKg3QCKg2B2ACQB8AGDlB8QDuCFEhh5QEphtHNFBQDNBzC6h1QC3h7BoDuMAAAAkEMjvrAAAg");
	this.shape_95.setTransform(767.025,153.2205);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#3399CC").s().p("Eh31AXVMAALghIQIDnuHfiAQHYh5DaAUQDbATGYCSQGaCREFCeQEDCgEFg8QEJhAGsjnQGsjoFqgvQFvgzLbFXQLJFENvnsQAngVAngXQO3otXfNyQKlEjJgoBQEnj5DnArIAIABQBMALCBAwQCBAxBYA2QBSA0BUgJQBYgHCGg0QCGg0ByACQB5AHDeB5QDmCCEYhzQEhhnG9E4QDHBxC0hwQCxh2BlDnMAAAAkFMjvrAAAg");
	this.shape_96.setTransform(767.025,153.1856);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#3399CC").s().p("Eh31AXVMAALghIQIInyHjiAQHch7DcAUQDdAVGcCUQGdCSEICgQEECiEIg9QEMg/GvjpQGwjqFtgwQFygyLiFbQLOFIN4nyQAngVAngXQO+oyXtN8QKrEmJkoGQEqj8DpArIAHABQBKALB9AvQB+AvBVA0QBQAyBRgIQBWgGCBgyQCCgxBvADQB2AHDWB2QDfB+EPhtQEYhhGvEwQDABuCuhqQCrhxBiDgMAAAAkFMjvrAAAg");
	this.shape_97.setTransform(767.025,153.1601);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#3399CC").s().p("Eh31AXVMAALghIQIMn2HniBQHhh8DeAWQDfAVGfCVQGhCVEKCiQEHCkEKg9QEOhAGzjrQG0jsFwgwQF1gyLoFfQLVFMN/n2IBPgtQPFo3X6OFQKxEpJqoMQEsj+DrAsIAHAAQBIALB5AuQB5AtBTAzQBOAwBOgIQBUgFB9gvQB+gvBrADQByAIDQBzQDYB6EGhmQEPhbGgEnQC5BrCohkQClhrBfDZMAAAAkEMjvrAAAg");
	this.shape_98.setTransform(767.025,153.1251);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#3399CC").s().p("Eh31AXWMAALghIQIRn7HriBQHlh9DgAWQDhAWGjCXQGlCWEMClQEJCmEMg+QEQhAG3jtQG4juFzgwQF4gzLvFjQLaFQOHn6IBPguQPMo8YJOPQK2EsJvoRQEvkADsArIAHABQBGALB1ArQB2AsBQAyQBLAuBMgHQBRgFB5gsQB6gtBoAEQBvAJDIBvQDRB3D9hhQEGhUGREeQCzBoCiheQCfhlBcDRMAAAAkFMjvrAAAg");
	this.shape_99.setTransform(767.025,153.0901);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#3399CC").s().p("Eh31AXWMAALghIQIVn/HwiCQHph+DiAXQDiAWGnCZQGpCZEOCmQEMCoEOg+QEShAG7jvQG8jxF2gvQF7gzL1FnQLgFUOPoAIBQgtQPTpCYXOYQK7EwJ0oWQEykEDuAtIAHAAQBEALBxAqQBxAqBOAwQBJAtBKgHQBOgEB1gqQB2gqBkAEQBsAKDBBrQDKB0DzhbQD+hOGCEWQCsBlCchZQCZhfBZDKMAAAAkFMjvrAAAg");
	this.shape_100.setTransform(767.025,153.0646);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#3399CC").s().p("Eh31AXWMAALghIQIaoDH0iDQHth+DkAXQDkAXGrCbQGsCaEQCpQEOCqERg/QEVhAG+jxQHAjzF5gwQF9gyL9FrQLmFYOWoFIBRguQPapGYkOhQLBEzJ6obQE0kGDwAsIAGABQBDAKBsApQBuApBLAtQBHAsBHgGQBMgEBxgnQBxgoBhAFQBoAKC6BoQDDBwDrhUQD0hIFzENQCmBjCWhUQCUhZBVDDMAAAAkEMjvrAAAg");
	this.shape_101.setTransform(767.025,153.0296);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#3399CC").s().p("Eh31AXXMAALghIQIeoIH4iDQHzh/DlAXQDmAYGvCdQGvCcETCqQEQCsETg+QEXhBHCjzQHEj1F8gwQGAgzMDFvQLsFcOeoJIBSguQPhpMYyOrQLHE2J+ogQE3kJDyAtIAGABQBAAJBpAnQBqAoBJAsQBEAqBEgFQBKgDBsgmQBuglBeAGQBkAKCzBlQC7BtDihOQDrhCFlEEQCfBgCQhOQCOhUBSC8MAAAAkFMjvrAAAg");
	this.shape_102.setTransform(767.025,152.9945);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#3399CC").s().p("Eh31AXXMAALghIQIjoMH8iEQH3iADnAYQDoAYGyCfQG0CeEUCtQETCtEVg+QEZhCHGj1QHIj2F/gwQGDgzMKFzQLyFgOmoOIBRgvQPppRY/O1QLNE5KDomQE6kLD0AtIAFABQA/AJBlAmQBlAmBHAqQBBAoBCgEQBHgDBpgiQBpgjBbAGQBhALCrBhQC1BqDZhIQDig8FVD8QCZBdCLhIQCHhOBPC0MAAAAkFMjvrAAAg");
	this.shape_103.setTransform(767.025,152.9595);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#3399CC").s().p("Eh31AXXMAALghIQInoQIBiFQH7iBDpAZQDpAZG3ChQG3CgEXCuQEVCwEYg/QEahCHKj3QHMj4GCgwQGGgzMQF3QL4FkOuoTIBSgvQPwpWZNO+QLSE8KJorQE7kOD3AuIAFAAQA8AKBhAkQBiAkBEApQA/AmBAgEQBEgBBlghQBlggBXAHQBdALCkBeQCuBnDQhDQDZg1FHDzQCSBaCFhCQCBhJBMCuMAAAAkEMjvrAAAg");
	this.shape_104.setTransform(767.025,152.9339);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#3399CC").s().p("Eh31AXYMAALghIQIsoVIEiFQIAiCDrAaQDrAZG6CjQG7CiEZCwQEXCyEahAQEdhCHOj5QHPj6GGgxQGJgyMXF6QL+FpO1oYQApgXAqgZQP3pbZaPIQLYE/KOowQE+kRD4AvIAFAAQA7AJBdAjQBdAiBCAoQA9AkA9gDQBCgBBggeQBhgdBTAHQBbAMCdBaQCmBjDHg8QDRgwE4DrQCLBYB/g9QB7hDBJCmMAAAAkFMjvrAAAg");
	this.shape_105.setTransform(767.025,152.8988);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#3399CC").s().p("Eh31AXYMAALghIQIwoZIJiGQIEiDDtAaQDtAaG+ClQG+CkEcCyQEZC0EdhAQEfhCHRj7QHTj9GJgwQGMgzMdF/QMEFsO9ocIBUgxQP+pgZoPRQLdFDKUo2QFAkTD6AvIAFAAQA4AJBZAhQBaAhA/AmQA6AjA7gDQBAAABcgcQBcgbBRAIQBWANCWBWQCgBgC+g2QDHgpEpDiQCFBVB5g3QB1g+BGCfMAAAAkFMjvrAAAg");
	this.shape_106.setTransform(767.025,152.8637);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#3399CC").s().p("Eh31AXYMAALghIQI1odINiHQIIiDDvAbQDvAaHBCnQHDCmEdC0QEcC2EfhBQEhhCHVj9QHXj/GMgwQGOgzMlGDQMJFwPFohIBUgxQQGplZ2PaQLiFGKZo7QFDkWD8AvIAEABQA3AJBVAfQBWAfA9AkQA3AiA4gCQA9AABYgZQBZgZBNAJQBTANCPBTQCYBdC1gwQC/gkEaDaQB+BSBzgxQBwg4BCCYMAAAAkEMjvrAAAg");
	this.shape_107.setTransform(767.025,152.8381);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#3399CC").s().p("Eh31AXYMAALghIQI6ohIRiIQIMiEDxAcQDwAbHGCoQHGCoEgC2QEdC4EihBQEjhCHakAQHakAGPgxQGRgzMrGHQMQF0PMomQArgXAqgaQQNpqaDPkQLpFJKdpBQFGkYD+AwIAEAAQA0AIBRAeQBSAeA7AjQA1AfA1gBQA7ABBUgXQBUgWBKAJQBQAOCHBQQCSBZCrgqQC2gdELDRQB4BPBtgsQBqgyA/CRMAAAAkEMjvrAAAg");
	this.shape_108.setTransform(767.025,152.8029);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#3399CC").s().p("Eh31AXZMAALghIQI+omIViIQISiFDyAcQDyAbHJCrQHKCpEiC5QEgC6EkhBQElhDHekCQHekCGSgxQGUgzMyGLQMVF4PVorQAqgXArgaQQUpwaRPuQLuFMKjpGQFIkaEAAvIADABQAzAIBNAcQBOAdA4AgQAzAeAzgBQA4ACBPgUQBRgUBGAKQBMAOCBBNQCKBVCjgkQCtgXD8DJQBxBMBnglQBkgtA8CJMAAAAkFMjvrAAAg");
	this.shape_109.setTransform(767.025,152.7678);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#3399CC").s().p("Eh31AXZMAALghIQJDoqIZiJQIWiGD0AdQD0AcHNCtQHNCrEkC7QEjC7EmhBQEnhDHikEQHikEGUgxQGYgzM4GPQMcF8PcowIBVgxQQcp1aeP3QL0FPKopLQFLkdEBAwIAEAAQAwAIBJAbQBKAbA2AfQAwAcAxAAQA2ACBLgRQBMgSBDAKQBJAPB5BKQCDBSCageQCkgRDuDAQBqBKBhggQBegnA5CCMAAAAkEMjvrAAAg");
	this.shape_110.setTransform(767.025,152.7421);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#3399CC").s().p("Eh31AXZMAALghIQJHovIeiJQIaiGD2AdQD2AdHQCuQHSCtEmC9QElC9EohBQEqhEHlkFQHmkGGXgyQGbgzM+GTQMhGAPlo0IBWgyQQjp6asQAQL5FTKupQQFNkgEDAwIADABQAvAHBFAZQBGAaAzAdQAuAbAuAAQAzADBIgPQBIgPA/AKQBGAQByBGQB8BPCQgYQCbgLDfC4QBkBHBbgbQBYghA2B7MAAAAkEMjvrAAAg");
	this.shape_111.setTransform(767.025,152.7188);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#3399CC").s().p("Eh31AXaMAALghIQJMozIhiKQIfiID4AeQD3AeHVCwQHVCvEoC/QEnC/ErhCQEshEHpkHQHqkIGagyQGegzNFGXQMnGEPso5QArgYAsgbQQqp+a5QJQL/FWKzpWQFPkiEGAxIADAAQAsAIBCAXQBCAYAwAcQAsAZArABQAxAEBDgNQBEgNA8ALQBCARBrBCQB1BMCIgSQCSgFDQCvQBdBEBWgVQBRgbAzBzMAAAAkFMjvrAAAg");
	this.shape_112.setTransform(767.025,152.6836);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#3399CC").s().p("Eh31AXaMAALghIQJQo4ImiKQIjiID6AeQD5AeHYCyQHZCxErDBQEpDBEthCQEuhEHtkKQHtkKGegyQGggyNMGaQMtGIP0o9IBYgzQQxqEbHQTQMEFZK4pbQFSklEIAxIADABQAqAHA9AWQA+AWAvAaQAoAXApACQAvAEA/gKQBAgKA4ALQA/ARBkA/QBtBJB/gMQCJACDBCmQBXBBBQgPQBMgWAvBsMAAAAkFMjvrAAAg");
	this.shape_113.setTransform(767.025,152.6579);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#3399CC").s().p("Eh31AXaMAALghIQJVo8IqiLQIniJD8AfQD7AfHcC0QHcCzEtDDQEsDDEvhDQEwhEHxkMQHxkMGhgyQGjgzNTGfQMyGMP8pCIBZg0QQ4qJbVQdQMKFcK9pgQFUkoEKAyIACAAQApAHA5AUQA6AVAsAZQAmAVAnADQAsAFA6gIQA8gIA1AMQA8ASBcA7QBnBFB2gGQCAAICyCeQBQA/BKgKQBGgRAsBmMAAAAkEMjvrAAAg");
	this.shape_114.setTransform(767.025,152.6227);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#3399CC").s().p("Eh31AXbMAALghIQJZpAIviMQIsiKD9AgQD9AfHfC2QHhC1EvDEQEtDGEyhDQEyhFH1kNQH1kPGkgyQGmgzNZGjQM5GQQDpHQAtgZAsgbQRAqObiQmQMQFfLCplQFXkrELAzIACAAQAnAGA1ATQA2AUAqAWQAkAUAkADQApAGA3gGQA4gFAxANQA4ASBVA4QBgBCBtAAQB3AOCkCVQBJA8BEgEQBAgLApBeMAAAAkFMjvrAAAg");
	this.shape_115.setTransform(767.025,152.5874);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#3399CC").s().p("Eh31AXbMAALghIQJepFIyiMQIxiLD/AgQD+AgHkC4QHkC3ExDHQEwDHE0hEQE1hEH4kQQH5kQGngyQGpgzNgGmQM+GUQMpMQAsgZAtgbQRHqTbwQvQMVFjLHprQFaktENAzIACAAQAkAGAyASQAyARAnAWQAhASAiADQAnAHAzgDQAzgDAuANQA1ATBOA0QBZA/BjAGQBvAUCUCNQBDA5A+ACQA6gGAmBXMAAAAkFMjvrAAAg");
	this.shape_116.setTransform(767.025,152.5617);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#3399CC").s().p("Eh31AXbMAALghIQJipJI3iMQI1iMEBAhQEAAgHoC6QHnC5E0DIQEyDKE2hEQE3hFH8kSQH9kSGqgzQGsgyNmGqQNFGYQTpRQAtgZAtgbQROqZb9Q5QMbFmLNpwQFckwEPA0IACAAQAiAGAtAQQAvAQAkATQAfARAfAEQAlAHAugBQAwAAAqAOQAxATBHAxQBSA7BbANQBlAaCGCEQA8A2A4AIQA0AAAjBQMAAAAkEMjvrAAAg");
	this.shape_117.setTransform(767.025,152.5265);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#3399CC").s().p("Eh31AXcMAALghIQJnpNI7iOQI5iNECAiQEDAhHrC7QHrC7E2DLQE1DLE4hEQE5hFIAkUQIBkUGtgzQGvgzNtGvQNKGcQbpWQAtgZAugcQRVqdcLRCQMgFqLSp2QFfkyERAzIABAAQAhAGApAOQAqAPAiASQAdAPAcAFQAjAHAqACQArACAnAPQAuAUBAAtQBKA4BSASQBdAhB2B7QA2A0AyANQAuAGAgBIMAAAAkFMjvrAAAg");
	this.shape_118.setTransform(767.025,152.4912);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#3399CC").s().p("Eh31AXcMAALghIQJspSI+iOQI+iNEEAiQEFAhHvC+QHvC8E3DNQE3DNE7hEQE7hGIEkVQIFkXGwgyQGxgzN0GyQNRGgQipaIBbg1QRcqjcZRMQMnFsLXp7QFhk0ETAzIABABQAeAFAmANQAmANAgAQQAZANAbAGQAfAIAmAEQAnAFAkAPQArAUA4ArQBEA0BIAYQBUAnBoBzQAvAxAsASQApAMAcBBMAAAAkFMjvrAAAg");
	this.shape_119.setTransform(767.025,152.4655);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#3399CC").s().p("Eh31AXcMAALghIQJwpWJDiOQJCiPEGAjQEGAiHzC/QHzC/E6DPQE5DPE9hFQE+hFIIkYQIIkZGzgyQG0gzN7G2QNWGkQqpfIBcg2QRjqocnRWQMsFwLcqBQFkk3EUA0IABAAQAdAFAhAMQAjALAdAPQAXALAYAGQAdAJAiAHQAjAHAgAQQAnAVAyAnQA8AxBAAeQBKAtBZBqQApAuAmAYQAjASAZA6MAAAAkEMjvrAAAg");
	this.shape_120.setTransform(767.025,152.4302);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#3399CC").s().p("Eh31AXdMAALghIQJ1pbJHiPQJGiPEIAjQEIAjH3DBQH2DBE8DRQE8DRE/hFQFAhGIMkaQILkbG3gzQG3gyOBG6QNcGoQypkQAugaAvgcQRqqtc1RfQMxFzLhqGQFmk6EXA1IABAAQAaAFAeAKQAeAKAbAMQAVAKAVAHQAbAKAeAJQAeAJAdAQQAkAWAqAjQA1AuA3AlQBCAzBKBhQAiArAhAfQAcAWAWAzMAAAAkFMjvrAAAg");
	this.shape_121.setTransform(767.025,152.3949);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#3399CC").s().p("Eh31AXdMAALghIQJ5pfJMiQQJLiQEJAkQEKAjH6DDQH6DDE/DTQE+DTFBhGQFChGIQkcQIPkcG6gzQG6gzOIG+QNiGsQ6poIBcg3QRyqydCRoQM3F3LnqMQFok8EZA1IAAAAQAZAFAZAIQAbAIAYAMIAlAPIAyAWQAbAMAZARQAhAWAjAgIBbBVQA5A5A8BZQAbAoAbAkQAWAdATArMAAAAkFMjvrAAAg");
	this.shape_122.setTransform(767.025,152.3692);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,2.2,1534.1,300.3);


(lib.ocean_gr1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3399CC").s().p("Eh31AXdMAALghIQJ+pjJPiQQJQiRELAkQEMAkH+DFQH+DFFADVQFADVFEhGQFEhHIUkeQITkeG9gzQG9gzOOHCQOOHDR5q3QR5q4dQRyQM8F6LsqRQLsqRGVObMAAAAkEg");
	this.shape.setTransform(767.025,152.3338);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3399CC").s().p("Eh31AXbMAALghIQBThQBThFIBihOQAwglAxgiQA4gnA1gjIBTg0QA7gnA8gkQBEgpBCgiQBhgyBkgjQCTg4CSgnIAWgFQEKhEDSgSQCQgQBxgGQA6gDAxAEIAiADQEJAkH6DEQH6DDE+DTQE+DTFBhFQFChGIPkcQIQkcG5gyQG5gyOIG/QOGG/RxqxQRwqxdARpQM2F3LmqLQLmqMGSOUMAAAAkEMjvrAAAg");
	this.shape_1.setTransform(767.025,152.5189);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3399CC").s().p("Eh31AXaMAALghIQBYhUBXhGIBohPQAxgkA1ggIB0hGQAsgYArgbIB9hNQBIgrBFgiQBkgzBqgfQCagzCagsIAWgFQERhKDfgIQCXgNB1gLQA9gGAzAFIAhADQEIAkH2DBQH2DCE8DSQE7DRE/hEQE/hGILkZQILkZG2gyQG2gyOAG8QOAG7RnqrQRnqrcyRhQMvF0LgqFQLgqGGPOMMAAAAkFMjvrAAAg");
	this.shape_2.setTransform(767.025,152.6957);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3399CC").s().p("Eh31AXYMAALghIQBchZBbhGIBvhPQAzgkA5geIB5hCQAugWAugbICDhQQBLgtBJgiQBngyBxgbIFBhgIAWgGQEZhPDtABQCcgJB6gRQBAgIA1AFIAhADQEFAkHyDAQHyDAE6DQQE4DQE9hEQE8hFIHkXQIIkXGygxQGzgxN4G4QN5G4ReqkQRfqlcjRYQMoFxLbp/QLZqBGMOFMAAAAkFMjvrAAAg");
	this.shape_3.setTransform(767.025,152.8904);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3399CC").s().p("Eh31AXWMAALghIQBhhdBfhHIB1hPQA1gkA8gcICAg9QAwgUAwgcICJhSQBPgvBMgjQBqgyB3gXQClgrCqg1IAXgHQEghUD7ALQChgGCAgXQBCgLA2AGIAhADQEEAjHuC/QHuC/E3DOQE2DOE6hDQE6hEIDkUQIDkVGvgxQGvgwNxG0QNyG1RWqeQRVqfcURPQMiFvLVp6QLTp6GJN9MAAAAkFMjvrAAAg");
	this.shape_4.setTransform(767.025,153.0636);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3399CC").s().p("Eh31AXUMAALghIQBlhhBkhIIB7hPQA3gjBAgaICFg6QAzgSAygcICPhUQBTgxBPgjQBsgyB/gTQCrgoCxg5IAYgHQEnhZEIAUQCngDCFgcQBFgNA4AGIAhADQEBAjHrC9QHqC9E0DNQE0DME3hDQE4hDH/kSQH/kSGrgwQGsgwNqGxQNrGyRMqZQRMqYcGRHQMbFrLPp0QLOp1GFN3MAAAAkEMjvrAAAg");
	this.shape_5.setTransform(767.025,153.2327);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3399CC").s().p("Eh31AXUMAALghIQBqhmBohIICAhQQA5giBEgYICLg2QA2gQA1gdQBFgnBPgvQBXgzBSgjQBvgyCFgPQCxgkC5g+IAZgIQEuheEWAeQCsAACLghQBHgQA6AGIAgAEQEAAiHmC8QHmC7EyDLQExDLE1hCQE2hCH6kQQH7kQGogvQGpgwNiGuQNkGvRDqTQREqTb2Q/QMVFpLJpvQLIpvGCNvMAAAAkFMjvrAAAg");
	this.shape_6.setTransform(767.025,153.2932);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3399CC").s().p("Eh31AXTMAALghIQBvhqBrhJICHhQQA7giBIgWICRgyQA3gOA4gdQBHgoBTgxQBbg1BVgjQBygyCMgLQC3gfDAhEIAagIQE1hjEjAnQCzAECPgnQBKgSA8AHIAgADQD+AiHiC6QHiC6EvDJQEvDKEzhCQEyhCH3kNQH2kNGlgvQGlgvNcGrQNcGrQ7qNQQ6qMboQ1QMOFnLDppQLCpqF/NoMAAAAkFMjvrAAAg");
	this.shape_7.setTransform(767.025,153.3539);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3399CC").s().p("Eh31AXSMAALghIQBzhuBwhKICNhQQA9ghBMgUICWguQA6gMA6geQBKgoBWgzQBfg3BYgjQB1gyCSgHQC9gbDJhJIAZgIQE9hoExAwQC4AHCUgsQBMgVA/AHIAgAEQD7AiHeC4QHfC4EtDIQEsDIEwhBQEwhBHzkLQHykLGhguQGigvNUGnQNWGoQxqGQQyqHbYQuQMIFjK9pjQK8pkF8NhMAAAAkEMjvrAAAg");
	this.shape_8.setTransform(767.025,153.4125);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3399CC").s().p("Eh31AXSMAALghIQB4hzB0hKQBWgwA9ggQA/ghBPgSICdgqQA8gLA8gdQBMgpBag0QBjg6BbgjQB4gyCZgDQDDgYDQhNIAagIQFEhuE+A6QC+AKCagxQBOgYBAAIIAgADQD5AiHbC3QHaC3ErDGQEpDGEuhBQEuhAHukIQHukJGeguQGegtNNGjQNPGlQoqBQQpqAbKQlQMBFgK3pdQK2peF5NZMAAAAkFMjvrAAAg");
	this.shape_9.setTransform(767.025,153.475);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#3399CC").s().p("Eh31AXRMAALghIQB8h3B4hKQBbgxA/ggQBAggBUgRICiglQA+gJA/geQBOgpBfg2QBmg8BegjQB7gyCfABQDJgUDYhSIAbgJQFLhyFMBDQDDANCfg2QBRgaBCAIIAfADQD4AhHWC2QHXC1EoDEQEnDFErhAQEshAHqkFQHqkGGaguQGbgtNGGgQNIGhQfp6QQgp6a7QcQL6FeKxpYQKwpZF2NTMAAAAkEMjvrAAAg");
	this.shape_10.setTransform(767.025,153.5323);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3399CC").s().p("Eh31AXRMAALghIQCBh8B8hLQBfgxBBggQBCgfBXgPICpgiQBAgGBBgfQBQgoBjg5QBpg+BigjQB9gyCnAFQDOgQDghWIAbgKQFTh4FaBNQDIARClg8QBTgdBEAIIAfAEQD2AhHSC0QHSCzEmDDQElDDEog/QEphAHmkDQHmkDGXgtQGYgtM+GdQNBGeQWp1QQXpzasQTQL1FbKqpSQKrpTFyNLMAAAAkFMjvrAAAg");
	this.shape_11.setTransform(767.025,153.5885);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#3399CC").s().p("Eh31AXQMAALghIQCFiACBhLQBjgzBDgeQBEggBbgMQBggSBOgMQBDgEBDgfQBSgpBng7QBthABlgjQCAgyCtAIQDVgLDnhbIAcgLQFah9FnBXQDOATCqhBQBWgfBGAJIAfADQDzAhHPCyQHOCzEjDBQEjDAEmg+QEmg/HikAQHikCGTgsQGUgrM4GZQM5GaQOpvQQOptadQLQLuFYKlpMQKkpNFvNDMAAAAkFMjvrAAAg");
	this.shape_12.setTransform(767.025,153.65);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#3399CC").s().p("Eh31AXPMAALghIQCKiECFhMQBngzBFgfQBGgeBegLQBlgPBQgLQBFgCBFgfQBVgqBqg9QBxhBBogkQCDgyC0ANQDagIDvhgIAdgKQFhiCF1BgQDUAXCuhHQBZgiBIAJIAeAEQDyAgHKCxQHLCxEhC/QEfC/Ekg+QEkg9Hej/QHdj+GQgsQGRgrMwGVQMzGXQEpoQQFpnaOQCQLoFWKfpHQKepIFsM9MAAAAkEMjvrAAAg");
	this.shape_13.setTransform(767.025,153.7058);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#3399CC").s().p("Eh31AXPMAALghIQCOiJCJhNQBsg0BHgdQBHgeBjgJQBogNBSgJQBHgBBIgfQBXgqBug/QB1hDBrgkQCGgyC6ARQDhgED2hlIAegKQFoiHGCBpQDaAaC0hMQBbglBJAKIAfADQDvAhHHCvQHGCvEfC+QEdC9Ehg9QEig9HZj8QHaj8GMgsQGOgqMpGSQMrGUP7piQP8phaAP5QLhFTKZpBQKYpCFpM1MAAAAkFMjvrAAAg");
	this.shape_14.setTransform(767.025,153.7686);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#3399CC").s().p("Eh31AXOMAALghIQCTiNCNhNQBxg1BIgdQBJgdBmgHQBsgMBUgGQBKABBKggQBZgqByhBQB5hFBugkQCJgyDAAUQDnABD/hqIAdgLQFviMGRBzQDfAdC5hRQBegnBLAKIAeADQDuAgHCCuQHDCtEcC8QEbC8Eeg8QEfg9HWj5QHVj6GJgrQGKgqMiGPQMkGRPzpdQPzpbZxPxQLaFQKTo7QKSo9FmMvMAAAAkEMjvrAAAg");
	this.shape_15.setTransform(767.025,153.824);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#3399CC").s().p("Eh31AXOMAALghIQCXiRCShPQB1g1BKgdQBLgcBqgFQBvgKBXgFQBMAEBMggQBbgrB2hDQB9hHBxgkQCMgyDHAYQDtAFEGhvIAegLQF2iRGeB8QDlAgC+hWQBggqBOALIAeADQDrAfG/CtQG+CsEaC6QEYC6Ecg8QEdg8HRj3QHSj3GFgqQGGgpMcGLQMdGNPppWQPqpVZiPoQLUFOKNo2QKMo3FjMnMAAAAkFMjvrAAAg");
	this.shape_16.setTransform(767.025,153.894);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#3399CC").s().p("Eh31AXNMAALghIQCciVCVhPQB6g3BMgbQBNgcBtgEQB0gHBYgDQBPAFBOggQBdgrB6hFQCBhJB0gkQCOgyDOAcQDzAJEOh0IAfgLQF9iXGsCGQDqAjDEhbQBigtBQALIAdADQDqAgG6CrQG7CqEXC5QEWC4Eag7QEag7HNj1QHNj1GCgpQGDgpMUGIQMWGKPgpRQPipOZTPgQLNFKKHowQKHoxFfMgMAAAAkEMjvrAAAg");
	this.shape_17.setTransform(767.025,153.941);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#3399CC").s().p("Eh31AXNMAALghIQChiaCZhQQB+g3BOgbQBOgbBygCQB3gGBbAAQBQAHBRghQBggqB9hIQCFhLB3gkQCRgzDVAhQD4AMEWh4IAggMQGEibG6CPQDwAnDIhhQBlgvBSALIAdADQDnAfG3CpQG3CpEUC3QEUC3EXg6QEYg7HIjyQHJjzGAgpQF+goMOGFQMPGGPXpKQPYpIZEPXQLHFIKBorQKBosFcMZMAAAAkFMjvrAAAg");
	this.shape_18.setTransform(767.025,153.9957);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#3399CC").s().p("Eh31AXMMAALghIQClieCehRQCCg4BQgaQBQgbB1AAQB7gDBdABQBTAJBTghQBigrCBhJQCIhNB7glQCUgyDbAkQD/AREdh9IAggNQGMigHHCYQD2AqDOhmQBngyBTAMIAdADQDmAfGyCoQGzCnESC2QERC1EVg6QEVg6HFjwQHFjwF7goQF8goMGGBQMIGDPOpEQPQpCY1POQLAFGJ7olQJ7omFZMRMAAAAkFMjvrAAAg");
	this.shape_19.setTransform(767.025,154.0589);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#3399CC").s().p("Eh31AXLMAALghIQCqiiCihRQCGg5BSgaQBSgaB5ACQB+gCBgAEQBVALBVgiQBkgrCFhLQCMhPB+glQCXgyDiAoQEEAVEliCIAhgNQGTimHVCiQD7AuDThsQBqg0BVAMIAdADQDjAfGvCmQGvClEQC0QEOC0ESg6QETg5HBjtQHAjuF4goQF4gnL/F+QMBGAPFo+QPHo8YnPGQK5FCJ1ofQJ1ohFWMLMAAAAkEMjvrAAAg");
	this.shape_20.setTransform(767.025,154.1134);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#3399CC").s().p("Eh31AXLMAALghIQCuinCmhSQCLg6BUgZQBUgZB8AEQCDAABhAGQBXANBYgiQBmgsCJhNQCQhRCBglQCagyDoAsQELAZEtiHIAhgNQGairHiCrQEBAxDYhxQBtg3BXANIAcACQDiAfGrClQGqCkEOCyQEMCyEPg5QERg5G8jqQG9jrFzgoQF2gmL4F6QL6F8O8o4QO+o2YXO+QKzE/JwoZQJuobFTMDMAAAAkFMjvrAAAg");
	this.shape_21.setTransform(767.025,154.1834);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#3399CC").s().p("Eh31AXKMAALghIQCzirCqhSQCQg7BVgZQBVgYCBAGQCGACBkAHQBZAPBagiQBogsCOhPQCThTCEglQCdgzDvAxQEQAcE1iLIAigOQGhiwHwC1QEGA0Deh2QBvg6BZANIAcADQDfAeGnCjQGnCjELCxQEKCwENg4QEOg4G4jpQG4joFxgnQFygmLwF3QLzF5OzoyQO1owYJO1QKsE9JqoUQJooVFQL8MAAAAkEMjvrAAAg");
	this.shape_22.setTransform(767.025,154.2301);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#3399CC").s().p("Eh31AXKMAALghIQC3iwCvhTQCUg7BXgYQBXgYCFAIQCJADBmAKQBcARBcgiQBrgtCRhRQCXhVCHgmQCfgyD2A1QEXAgE8iQIAigOQGpi1H9C+QEMA3Djh7QByg8BbANIAbADQDeAeGjChQGjChEICvQEHCvELg4QELg3G0jmQG1jmFtgmQFugmLqF0QLrF2OrosQOroqX6OsQKmE6JkoOQJjoQFML1MAAAAkFMjvrAAAg");
	this.shape_23.setTransform(767.025,154.2842);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#3399CC").s().p("Eh31AXJMAALghIQC8i0CyhTQCZg9BZgXQBZgYCIAKQCNAGBoAMQBfATBegjQBtgsCVhUQCbhXCKgmQCigyD9A5QEcAkFEiVIAjgOQGwi7ILDIQESA7DoiBQB0g/BdAOIAbACQDcAeGeCgQGfCgEGCtQEFCtEIg3QEJg3GwjjQGwjkFqgmQFrgkLiFwQLlFyOhomQOjojXrOjQKfE4JeoJQJdoKFJLuMAAAAkEMjvrAAAg");
	this.shape_24.setTransform(767.025,154.3477);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#3399CC").s().p("Eh31AXIMAALghIQDAi4C3hUQCdg9BbgXQBbgXCMAMQCRAHBqAOQBgAVBhgjQBvgtCZhWQCfhZCNglQClgzEDA9QEiAoFMiZIAkgPQG3jAIZDSQEXA9DtiGQB2hBBfAOIAbADQDaAdGbCeQGbCeEDCsQEDCrEFg2QEHg2GsjhQGsjhFmglQFogkLbFsQLdFvOYogQOaodXcObQKZE1JYoDQJXoFFGLnMAAAAkEMjvrAAAg");
	this.shape_25.setTransform(767.025,154.4017);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#3399CC").s().p("Eh31AXIMAALghIQDFi9C7hVQChg+BdgWQBcgWCQANQCVAKBsAQQBjAXBjgkQBxgtCdhYQCjhbCQglQCogzEKBBQEoAsFTieIAlgQQG+jEImDbQEdBADyiLQB5hEBhAPIAbACQDYAeGWCcQGXCdECCqQD/CpEDg1QEEg2GojeQGnjfFkglQFkgjLUFpQLXFsOPoaQORoXXNOSQKSEyJSn9QJRn/FDLfMAAAAkFMjvrAAAg");
	this.shape_26.setTransform(767.025,154.4718);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#3399CC").s().p("Eh31AXHMAALghIQDJjBDAhVQClg/BfgWQBegVCUAPQCYAMBvASQBlAYBlgkQB0gtCghZQCnheCTgmQCrgyEQBFQEuAwFcijIAkgQQHGjKI0DlQEiBED4iRQB7hHBjAPIAaADQDWAdGTCbQGTCbD/CoQD9CoEBg1QEBg0GkjcQGjjdFggkQFhgjLNFmQLPFoOGoUQOIoQW/OJQKLEvJMn3QJLn5FALYMAAAAkEMjvrAAAg");
	this.shape_27.setTransform(767.025,154.5184);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#3399CC").s().p("Eh31AXHMAALghIQDOjGDDhVQCqhABhgVQBggWCXASQCcANBxAUQBoAbBngkQB2guCkhbQCqhgCXgmQCugyEXBJQE0A0FjioIAlgQQHNjPJBDuQEoBHD9iWQB+hJBlAPIAaADQDUAcGPCaQGPCZD8CnQD7CmD+g0QD/g0GfjaQGfjaFdgjQFegiLFFiQLIFlN9oOQOAoLWvOCQKFEsJGnyQJFn0E9LRMAAAAkFMjvrAAAg");
	this.shape_28.setTransform(767.025,154.5722);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#3399CC").s().p("Eh31AXGMAALghIQDTjKDHhWQCvhBBhgUQBjgVCbAUQCgAPBzAWQBpAdBqglQB4guCohdQCuhiCagmQCwgyEeBMQE6A5FritIAmgRQHUjUJPD4QEuBKECibQCAhMBnAQIAaACQDRAdGLCYQGLCYD6ClQD5CkD7gzQD9g0GbjXQGbjYFZgjQFaghK/FfQLBFhN0oHQN2oFWhN5QJ+EpJAnsQJAnuE5LKMAAAAkEMjvrAAAg");
	this.shape_29.setTransform(767.025,154.6359);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#3399CC").s().p("Eh31AXGMAALghIQDXjODMhXQCzhCBjgUQBkgUCfAVQCkASB1AYQBsAeBsglQB6guCshfQCyhkCdgmQCzgyElBQQFAA9FyiyIAngRQHbjZJcEBQE0BNEHihQCDhOBoAQIAaADQDQAcGHCXQGHCWD3CjQD2CjD5gzQD6gyGXjVQGXjVFWgjQFXghK3FcQK6FeNroCQNun+WRNwQJ4EnI7nnQI5noE2LCMAAAAkFMjvrAAAg");
	this.shape_30.setTransform(767.025,154.6888);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#3399CC").s().p("Eh31AXFMAALghIQDcjTDPhXQC4hDBlgTQBmgTCjAXQCnATB3AaQBvAhBugmQB8guCwhiQC2hlCggnQC2gyErBVQFGBAF6i2IAngSQHjjeJqEKQE5BREMimQCGhRBqARIAZACQDOAcGDCVQGDCVD2CiQDzChD2gzQD4gyGSjSQGTjTFTgiQFUggKwFYQKyFbNin8QNln4WDNoQJxEjI1ngQIznjEzK7MAAAAkFMjvrAAAg");
	this.shape_31.setTransform(767.025,154.7597);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#3399CC").s().p("Eh31AXEMAALghIQDgjXDUhYQC8hDBngTQBogTCmAZQCrAWB6AcQBwAiByglQB+gvCzhkQC6hnCjgnQC5gyEyBYQFLBFGCi7IAogSQHqjkJ4EUQE+BUESirQCIhUBsARIAZADQDMAcF/CTQF/CTDzCgQDxCgDzgyQD2gxGOjQQGPjRFPghQFQggKpFVQKsFYNZn2QNbnyV1NfQJqEhIvnbQItndEwK0MAAAAkEMjvrAAAg");
	this.shape_32.setTransform(767.025,154.8062);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#3399CC").s().p("Eh31AXEMAALghIQDljbDYhZQDAhEBpgSQBqgTCqAbQCvAXB7AeQBzAlB0gmQCAgvC3hmQC+hpCmgnQC8gyE4BcQFSBJGKjAIAogSQHxjpKFEdQFEBXEXiwQCLhWBuARIAZADQDJAbF7CSQF7CSDxCeQDuCeDygxQDzgxGJjOQGLjNFMghQFNgfKiFRQKkFUNQnvQNTnsVlNWQJkEeIpnVQInnYEtKtMAAAAkFMjvrAAAg");
	this.shape_33.setTransform(767.025,154.8597);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#3399CC").s().p("Eh31AXDMAALghIQDpjfDdhaQDEhFBrgRQBrgSCuAdQCzAZB+AgQB1AnB2gnQCCgvC8hoQDBhrCpgnQC/gyE/BgQFXBNGSjFIApgTQH4juKTEnQFJBbEdi2QCMhZBxASIAYACQDIAbF3CRQF3CQDuCdQDsCcDvgxQDwgwGGjLQGHjLFIggQFJgfKbFOQKeFRNHnqQNJnlVXNNQJdEcIjnQQIhnSEqKmMAAAAkEMjvrAAAg");
	this.shape_34.setTransform(767.025,154.9236);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#3399CC").s().p("Eh31AXDMAALghIQDujkDghaQDKhGBsgRQBtgRCyAfQC2AbCAAiQB4AoB4gmQCEgwDAhqQDFhtCsgnQDBgyFGBkQFeBQGZjJIApgTQH/jzKhEwQFPBeEii8QCPhbByASIAZADQDFAbFzCPQF0CODrCbQDqCbDsgwQDugwGBjIQGDjJFFggQFGgeKTFLQKXFNM+njQNBngVHNFQJXEZIdnKQIcnMEmKeMAAAAkFMjvrAAAg");
	this.shape_35.setTransform(767.025,154.9764);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#3399CC").s().p("Eh31AXDMAALghIQDyjoDlhbQDOhHBugQQBvgQC1AgQC6AdCDAkQB5ArB7goQCGgvDEhsQDIhwCwgnQDEgyFMBoQFkBVGhjOIAqgUQIGj4KvE6QFVBhEmjBQCSheB0ATIAYACQDEAbFvCNQFvCNDpCaQDnCYDqgvQDrgvF+jGQF/jGFBgfQFDgeKMFHQKPFKM1ndQM4nZU5M8QJQEWIXnEQIWnHEjKXMAAAAkFMjvrAAAg");
	this.shape_36.setTransform(767.025,154.9859);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#3399CC").s().p("Eh31AXDMAALghIQD3jtDphbQDShIBwgPQBxgQC5AiQC+AfCEAmQB8AtB9goQCJgwDHhuQDMhxCzgnQDHgzFTBtQFqBYGojTIArgUQINj9K8FDQFbBkEsjGQCUhgB2ATIAYACQDBAbFrCLQFsCMDnCYQDkCXDngvQDpguF6jEQF6jEE+geQE/gdKFFEQKJFGMsnXQMvnTUqM0QJJETIRm/QIQnBEgKQMAAAAkFMjvrAAAg");
	this.shape_37.setTransform(767.025,154.9687);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#3399CC").s().p("Eh31AXDMAALghIQD7jxDthcQDXhIBygPQBygPC9AkQDCAhCHAoQB+AvB/goQCLgwDLhxQDQhzC2gnQDKgzFZBxQFwBcGwjYIAsgUQIUkCLKFMQFgBoExjMQCXhjB4ATIAXADQDAAaFnCKQFnCKDlCWQDiCWDlguQDlguF2jBQF3jBE6geQE8gdJ+FBQKBFDMjnRQMmnNUbMrQJDEQILm5QIKm7EdKJMAAAAkEMjvrAAAg");
	this.shape_38.setTransform(767.025,154.9388);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#3399CC").s().p("Eh31AXDMAALghIQEAj1DxhdQDbhJB0gOQB0gPDBAmQDFAjCJAqQCAAxCCgpQCNgwDPhyQDUh2C5gnQDNgyFgB0QF1BgG4jcIAsgVQIckHLYFWQFlBqE3jRQCZhlB6AUIAXACQC+AaFjCJQFjCIDiCVQDgCTDhgtQDkgtFyi/QFyi/E3gdQE5gcJ2E9QJ7FAMZnLQMenHUMMiQI8EOIGmzQIDm2EaKCMAAAAkEMjvrAAAg");
	this.shape_39.setTransform(767.025,154.9165);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#3399CC").s().p("Eh31AXEMAALghIQEFj6D1hdQDfhKB2gOQB2gODFAoQDJAlCKAsQCDAyCEgoQCPgxDTh0QDYh4C8gnQDQgyFmB4QF8BkHAjhIAsgVQIjkNLlFgQFrBuE8jXQCchoB7AUIAXADQC8AZFfCIQFgCGDfCTQDdCSDfgtQDigsFui8QFui9EzgcQE1gbJwE5QJzE9MRnGQMUnAT9MaQI2ELIAmuQH9mwEXJ6MAAAAkFMjvrAAAg");
	this.shape_40.setTransform(767.025,154.8861);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#3399CC").s().p("Eh31AXEMAALghIQEJj+D6heQDjhLB4gNQB4gODIAqQDNAnCNAuQCFA1CGgpQCSgxDWh3QDch5C/goQDSgyFuB8QGBBoHIjlIAtgWQIqkSLzFpQFxBxFAjbQCfhrB9AVIAXACQC6AZFbCGQFbCFDdCRQDbCRDcgsQDggsFpi6QFqi6EwgcQEygbJoE2QJsE6MInAQMLm6TvMRQIvEJH6moQH4mrETJzMAAAAkFMjvrAAAg");
	this.shape_41.setTransform(767.025,154.8554);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#3399CC").s().p("Eh31AXEMAALghIQEOkCD9hfQDphLB5gNQB6gNDMAsQDQApCPAwQCIA2CIgpQCUgxDah5QDgh7DCgoQDVgyF0CAQGIBsHPjqIAugWQIxkXMAFyQF3B0FGjgQCghuCAAVIAWADQC4AZFXCEQFYCEDaCPQDYCPDagsQDdgqFmi4QFli4EtgcQEvgZJhEyQJlE2L+m5QMDm0TgMIQIoEGH0miQHymlEQJsMAAAAkEMjvrAAAg");
	this.shape_42.setTransform(767.025,154.8326);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#3399CC").s().p("Eh31AXEMAALghIQESkGEChgQDthMB7gMQB7gMDQAtQDUArCSAyQCJA4CLgpQCWgyDeh6QDkh+DFgnQDYgzF7CEQGNBxHXjwIAugWQI5kcMOF8QF8B3FLjmQCjhwCCAVIAWADQC2AZFTCCQFTCCDZCOQDUCNDZgrQDagqFhi1QFii1EpgbQErgZJaEvQJeEyL2mzQL5muTRMAQIiEDHumdQHsmfENJlMAAAAkEMjvrAAAg");
	this.shape_43.setTransform(767.025,154.8015);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#3399CC").s().p("Eh31AXFMAALghIQEXkLEGhgQDxhOB9gLQB9gLDUAvQDYAtCTA0QCMA6CNgqQCYgyDih8QDoiADIgoQDbgyGBCIQGUB0Hej0IAvgXQJAkhMcGGQGBB6FQjrQCmhzCEAWIAVACQC0AZFPCBQFQCBDVCMQDTCLDWgqQDYgpFdizQFdizEmgbQEogYJTErQJWEwLtmtQLxmoTCL3QIbEAHomWQHmmaEKJdMAAAAkFMjvrAAAg");
	this.shape_44.setTransform(767.025,154.7702);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#3399CC").s().p("Eh31AXFMAALghIQEbkPEKhgQD2hPB/gLQB/gLDXAyQDcAuCWA3QCOA8CPgrQCagxDmh/QDriCDMgoQDegyGICMQGZB4Hmj5IAwgXQJHkmMpGPQGHB+FWjxQCoh1CFAWIAWACQCyAZFLB/QFMB/DSCLQDRCJDTgpQDWgpFZiwQFZixEigaQElgYJLEoQJQEsLkmnQLnmhSzLuQIVD+HimRQHgmVEHJXMAAAAkEMjvrAAAg");
	this.shape_45.setTransform(767.025,154.7469);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#3399CC").s().p("Eh31AXFMAALghIQEgkUEOhgQD6hQCBgKQCBgKDbAzQDfAwCYA5QCRA+CRgrQCdgyDpiAQDviEDOgoQDigzGOCQQGfB9Huj+IAxgYQJOkrM3GYQGMCBFbj2QCrh3CHAWIAVACQCwAZFHB9QFHB+DRCJQDOCIDRgpQDTgoFViuQFViuEfgaQEhgXJFElQJIEoLbmhQLfmbSkLmQIOD7HcmMQHamOEEJPMAAAAkEMjvrAAAg");
	this.shape_46.setTransform(767.025,154.7152);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#3399CC").s().p("Eh31AXGMAALghIQEkkYEThiQD+hQCDgKQCCgJDfA1QDjAyCbA7QCSBACUgrQCfgzDuiCQDyiGDRgoQDkgzGWCUQGlCAH2kCIAwgYQJWkxNEGiQGTCFFgj8QCth6CJAXIAVACQCuAYFDB8QFDB8DOCHQDMCHDOgpQDRgnFRirQFRisEbgZQEegXI9EiQJBElLSmbQLWmVSVLdQIID4HWmGQHVmJEAJIMAAAAkFMjvrAAAg");
	this.shape_47.setTransform(767.025,154.6834);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#3399CC").s().p("Eh31AXGMAALghIQEpkdEXhiQEChRCFgJQCEgJDjA3QDnA0CcA9QCVBCCWgsQChgyDyiFQD2iHDUgpQDngyGcCYQGrCEH+kHIAxgZQJdk2NSGsQGYCHFlkBQCwh8CLAXIAUACQCsAYFAB7QE+B6DMCGQDKCEDMgoQDOgmFMipQFNipEYgZQEagWI2EeQI7EiLJmVQLNmPSGLVQIBD1HRmAQHOmDD9JAMAAAAkFMjvrAAAg");
	this.shape_48.setTransform(767.025,154.6598);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#3399CC").s().p("Eh31AXGMAALghIQEtkhEbhiQEIhSCGgJQCGgIDmA5QDrA2CeA/QCYBECYgsQCjgzD2iHQD6iJDXgpQDqgzGjCcQGxCJIFkMIAygZQJkk7NfG1QGeCLFqkHQCzh/CNAYIAUACQCqAXE7B5QE7B5DKCEQDHCDDJgnQDMgmFIimQFJinEUgYQEXgVIvEaQIzEfLAmPQLEmJR4LMQH6DyHLl6QHIl+D6I6MAAAAkEMjvrAAAg");
	this.shape_49.setTransform(767.025,154.6276);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#3399CC").s().p("Eh31AXHMAALghIQEyklEfhkQEMhTCIgHQCIgIDqA7QDuA4ChBAQCZBGCbgsQCmgzD5iJQD+iLDagpQDtgzGpCgQG3CNINkRIAzgaQJrlANtG/QGjCOFwkMQC1iCCOAYIAVACQCnAYE3B3QE4B4DHCCQDECBDHgmQDJgmFEikQFFikERgXQEUgVInEXQItEbK2mJQK7mDRpLEQH0DwHFl1QHCl4D3IyMAAAAkFMjvrAAAg");
	this.shape_50.setTransform(767.025,154.5953);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#3399CC").s().p("Eh31AXHMAALghIQE3kqEjhkQEQhTCJgHQCKgIDuA9QDyA6CjBDQCcBHCdgsQCog0D9iKQECiODdgpQDwgyGwCkQG8CQIVkWIAzgZQJzlGN6HIQGpCRF1kQQC3iFCRAZIAUACQCmAXEyB2QE0B2DFCAQDCCADEgmQDHglFAihQFAiiEOgXQEQgUIhETQIlEYKumDQKyl8RaK7QHtDtG/lvQG8lzD0IrMAAAAkFMjvrAAAg");
	this.shape_51.setTransform(767.025,154.5714);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#3399CC").s().p("Eh31AXHMAALghIQE7kuEnhkQEVhVCLgGQCMgHDyA/QD2A8ClBEQCeBKCfgtQCqgzEBiNQEGiQDggpQDzgzG2CoQHDCVIckbIA0gaQJ6lKOIHRQGvCVF5kWQC6iICTAZIATACQCkAXEvB0QEwB1DCB/QDAB+DBglQDFglE8ifQE8ifEKgWQENgUIZEQQIeEVKll9QKpl3RLKzQHoDqG4lpQG2ltDxIkMAAAAkEMjvrAAAg");
	this.shape_52.setTransform(767.025,154.5388);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#3399CC").s().p("Eh31AXHMAALghIQFAkyErhlQEZhVCNgGQCOgGD1BAQD6A+CnBHQChBLChgtQCsg0EFiPQEJiRDkgqQD1gyG+CsQHICYIlkfIA0gbQKBlPOWHbQG0CXF/kbQC8iKCVAaIATACQChAWErBzQEsBzDAB9QC9B8DAgkQDBgkE4icQE4idEHgWQEKgTISENQIXERKbl3QKhlwQ8KqQHhDnGylkQGxlnDtIdMAAAAkEMjvrAAAg");
	this.shape_53.setTransform(767.025,154.5061);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#3399CC").s().p("Eh31AXIMAALghIQFEk3EwhmQEdhWCPgFQCQgGD5BDQD9BACqBIQCiBOCkguQCug0EJiRQENiTDngqQD4gyHECwQHPCcIskkIA1gbQKIlVOjHlQG6CbGEkhQC/iNCWAaIATACQCgAWEnByQEoBxC9B8QC7B6C9gkQC/giE0ibQE0iaEDgVQEGgTILEJQIQEOKTlwQKXlrQuKiQHaDkGsleQGrlhDqIVMAAAAkFMjvrAAAg");
	this.shape_54.setTransform(767.025,154.4819);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#3399CC").s().p("Eh31AXIMAALghIQFJk7E0hmQEihXCQgFQCRgFD+BFQEABBCsBLQClBQCnguQCwg1EMiTQERiVDqgqQD7gyHLCzQHUChI0kpIA1gbQKQlaOxHuQG/CeGKkmQDBiPCXAaIATACQCeAWEkBwQEkBvC7B6QC4B5C6gjQC9giEviYQEwiYEAgVQEDgRIEEFQIJELKJlrQKPlkQeKZQHUDiGmlZQGllcDnIPMAAAAkEMjvrAAAg");
	this.shape_55.setTransform(767.025,154.4491);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#3399CC").s().p("Eh31AXIMAALghIQFNk/E4hnQEnhYCSgEQCTgEEBBGQEFBDCuBNQCnBSCpguQCyg1EQiVQEViYDtgqQD+gyHRC4QHbCkI7ktIA2gcQKXlfO+H3QHFCiGPksQDDiRCaAaIATACQCcAWEfBuQEgBuC5B5QC1B3C4gjQC7ghEriWQEsiVD8gUQEAgSH8EDQICEHKBllQKFldQQKQQHNDfGglTQGflWDkIHMAAAAkEMjvrAAAg");
	this.shape_56.setTransform(767.025,154.4161);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#3399CC").s().p("Eh31AXJMAALghIQFSlEE8hoQErhYCUgEQCVgDEFBIQEIBFCwBPQCpBUCsgvQC0g1EUiXQEZiaDwgqQEBgyHYC8QHgCoJDkyIA3gcQKdllPNIBQHKClGUkxQDGiUCcAbIASACQCaAVEcBtQEcBtC2B2QCzB2C1giQC4ghEoiTQEniTD5gUQD8gQH2D/QH6EDJ4leQJ8lYQBKIQHHDcGblNQGYlRDhIAMAAAAkFMjvrAAAg");
	this.shape_57.setTransform(767.025,154.3917);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#3399CC").s().p("Eh31AXJMAALghIQFWlIFBhpQEvhZCWgDQCXgDEIBKQEMBHCyBRQCsBWCugvQC2g2EYiZQEdibDzgqQEEgzHeDAQHmCsJLk3IA4gcQKklqPaILQHRCnGYk2QDJiWCeAbIASACQCYAVEXBrQEYBrC0B1QCxB0CzghQC1ggEjiRQEkiQD1gTQD5gQHuD7QH0EBJulZQJ0lRPyJ/QHADZGVlHQGSlLDeH4MAAAAkFMjvrAAAg");
	this.shape_58.setTransform(767.025,154.3585);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#3399CC").s().p("Eh31AXJMAALghIQFblMFEhpQE0haCYgDQCYgCENBMQEPBJC1BTQCuBYCwgwQC4g1EdicQEgidD2gqQEGgzHmDEQHsCwJTk8IA3gdQKsluPoIUQHWCrGdk8QDMiZCgAcIARACQCWAUEUBqQEUBqCxBzQCvByCwghQCzgfEfiOQEfiODygTQD1gPHoD4QHsD9JmlSQJqlMPkJ3QG5DWGPlBQGNlGDaHyMAAAAkEMjvrAAAg");
	this.shape_59.setTransform(767.025,154.3252);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#3399CC").s().p("Eh31AXJMAALghIQFflQFJhqQE4hbCagCQCagCEQBOQEUBLC2BVQCxBaCygwQC7g2EgidQEkigD5gqQEJgzHsDIQHyC0JblAIA4gdQKzl0P2IdQHbCuGjlAQDNicCiAcIASACQCUAUEPBoQERBpCvBxQCrBxCuggQCxgfEaiMQEciMDugRQDygPHgD0QHlD6JdlMQJilFPUJtQGzDUGJk8QGHlADXHrMAAAAkEMjvrAAAg");
	this.shape_60.setTransform(767.025,154.3006);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#3399CC").s().p("Eh31AXKMAALghIQFklVFNhrQE8hcCcgBQCcgBEUBQQEXBNC5BXQCyBbC1gwQC9g2EkifQEoiiD8gqQEMgzHzDMQH4C4JilFIA5geQK6l5QDInQHhCyGolGQDQifCkAdIARABQCSAVEMBmQEMBnCtBwQCpBuCrgfQCugeEXiJQEXiJDrgSQDvgOHZDxQHeD3JTlHQJZk/PGJmQGsDRGDk3QGBk6DUHjMAAAAkFMjvrAAAg");
	this.shape_61.setTransform(767.025,154.2672);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#3399CC").s().p("Eh31AXKMAALghIQFplZFRhrQFBhdCdAAQCegBEXBSQEbBPC7BZQC1BdC3gwQC/g3EoihQErikEAgqQEPgzH5DQQH+C8JqlKIA6geQLBl+QRIwQHlC1GulMQDTihCmAdIARACQCQAUEHBlQEJBlCqBvQCnBtCogfQCsgeESiGQETiHDogRQDrgOHSDuQHXDzJLlAQJQk5O2JdQGmDOF9kwQF7k1DRHcMAAAAkEMjvrAAAg");
	this.shape_62.setTransform(767.025,154.2416);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#3399CC").s().p("Eh31AXKMAALghIQFtleFVhrQFGheCfAAQCfAAEcBUQEeBRC+BbQC3BfC5gwQDBg3EsijQEvimEDgrQESgyH/DTQIFDBJxlPIA6gfQLJmDQeI5QHrC5G0lRQDVikCoAeIAQABQCOAUEEBkQEEBjCoBtQCkBrCngeQCpgdEOiEQEPiEDkgRQDogNHKDrQHRDvJBk6QJHkzOoJVQGfDLF3krQF1kvDOHVMAAAAkEMjvrAAAg");
	this.shape_63.setTransform(767.025,154.208);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#3399CC").s().p("Eh31AXLMAALghIQFyliFZhsQFKhfChABQChAAEfBWQEjBSC/BeQC6BhC7gxQDEg3EvilQEzioEGgrQEVgzIGDYQIKDEJ5lTIA7gfQLQmIQsJCQHxC8G4lWQDYimCpAdIARACQCMAUEABhQEABiClBrQCiBqCkgdQCngdEKiBQEKiCDhgQQDlgMHDDnQHJDsI4k0QI/ktOYJMQGZDJFxkmQFvkpDLHNMAAAAkFMjvrAAAg");
	this.shape_64.setTransform(767.025,154.1833);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#3399CC").s().p("Eh31AXLMAALghIQF2lmFehtQFOhfCjABQCjABEjBXQEmBVDCBfQC7BkC+gyQDGg3EzinQE3iqEJgrQEXgzINDcQIRDIKBlYIA7ggQLXmNQ6JMQH2C/G+lbQDaipCrAeIAQACQCKATD8BgQD9BhCiBpQCgBoChgdQCkgbEGiAQEHh/DdgPQDhgMG8DjQHCDpIwkuQI1kmOKJDQGSDGFrkgQFqkkDHHHMAAAAkEMjvrAAAg");
	this.shape_65.setTransform(767.025,154.1495);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#3399CC").s().p("Eh31AXLMAALghIQF7lrFhhtQFThgClACQClABEmBaQEqBWDEBiQC+BlDAgyQDIg3E3iqQE7isEMgrQEagyIUDfQIWDNKJleIA8ggQLemSRHJWQH8DCHDlhQDdirCtAeIAQACQCIATD4BfQD4BeChBoQCcBmCfgcQCigaECh9QECh9DagPQDegLG1DgQG7DmImkpQItkgN7I7QGLDDFlkaQFkkeDEG/MAAAAkEMjvrAAAg");
	this.shape_66.setTransform(767.025,154.1158);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#3399CC").s().p("Eh31AXMMAALghIQF/lvFmhuQFXhiCnADQCmACErBcQEtBYDGBjQDBBoDCgzQDKg3E7isQE/iuEPgrQEdgyIaDjQIcDQKRliIA8ggQLmmXRVJfQIBDFHIlmQDgiuCvAfIAPABQCGATD0BeQD1BdCeBmQCaBkCcgbQCggaD9h7QD/h6DWgOQDagLGuDdQG0DiIdkiQIkkaNsIyQGFDAFgkUQFdkZDBG4MAAAAkFMjvrAAAg");
	this.shape_67.setTransform(767.025,154.0909);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#3399CC").s().p("Eh31AXMMAALghIQGEl0FqhuQFbhiCpADQCoADEuBdQEyBaDIBmQDCBpDFgzQDMg4E/itQFDiwESgsQEggyIhDoQIiDUKYlnIA9ghQLtmcRhJoQIIDJHOlsQDhiwCyAfIAPACQCEASDwBcQDwBcCcBkQCYBjCZgbQCegZD5h4QD6h5DTgNQDXgKGnDZQGsDfIVkcQIakUNeIpQF+C+FakOQFXkTC+GwMAAAAkFMjvrAAAg");
	this.shape_68.setTransform(767.025,154.057);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#3399CC").s().p("Eh31AXMMAALghIQGIl4FvhvQFghjCqAEQCqAEEyBfQE1BcDKBnQDFBrDHgyQDPg5FCivQFHiyEVgsQEjgyInDrQIoDZKglsIA+ghQL0miRvJyQIODMHSlxQDkizCzAgIAPABQCCATDsBaQDtBaCZBjQCVBhCYgaQCagZD2h2QD2h1DPgNQDUgKGfDWQGmDcILkWQISkONOIhQF4C7FUkJQFRkOC7GqMAAAAkEMjvrAAAg");
	this.shape_69.setTransform(767.025,154.023);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#3399CC").s().p("Eh31AXNMAALghIQGNl9FyhvQFlhkCsAEQCsAEE2BhQE4BfDNBpQDHBtDJgzQDRg5FGixQFLi0EYgsQEmgyIuDvQIuDcKnlwIA/ghQL7mnR8J7QIUDPHYl2QDmi2C1AgIAPACQCAASDoBZQDpBYCWBhQCTBgCVgaQCYgYDxhzQDyhzDMgNQDQgIGZDSQGeDYIDkQQIIkHNAIYQFxC4FOkDQFLkIC4GiMAAAAkFMjvrAAAg");
	this.shape_70.setTransform(767.025,153.998);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#3399CC").s().p("Eh31AXNMAALghIQGRmBF3hwQFphlCuAFQCtAFE6BjQE8BgDPBrQDKBvDLgzQDTg5FLi0QFNi2EcgrQEogzI1D0QI0DgKwl1IA+giQMDmsSKKFQIZDSHdl8QDpi4C3AhIAPABQB+ASDkBXQDkBXCUBgQCRBdCSgZQCWgXDthxQDuhxDIgLQDNgJGRDPQGYDVH5kKQIAkBMxIPQFqC2FIj+QFGkCC0GbMAAAAkFMjvrAAAg");
	this.shape_71.setTransform(767.025,153.9639);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#3399CC").s().p("Eh31AXNMAALghIQGWmFF7hxQFthlCwAFQCvAGE+BkQFABjDRBtQDLBxDOg0QDVg5FPi2QFRi4EfgsQErgyI8D3QI6DlK3l6IA/gjQMKmxSYKPQIeDVHimBQDsi7C5AhIAOACQB8ARDgBWQDhBVCSBeQCOBcCPgYQCUgXDphuQDphuDFgMQDKgHGKDLQGQDSHwkEQH3j7MiIHQFkCyFCj4QFAj8CxGUMAAAAkEMjvrAAAg");
	this.shape_72.setTransform(767.025,153.9298);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#3399CC").s().p("Eh31AXNMAALghIQGbmJF+hyQFyhmCxAGQCyAGFBBnQFEBkDTBvQDOBzDQg0QDXg5FTi4QFVi6EigsQEugzJCD8QJADoK/l/IBAgiQMRm3SlKYQIkDZHomGQDui+C7AiIANABQB7ARDcBUQDcBUCQBdQCLBaCNgYQCRgWDlhsQDlhsDCgKQDGgHGDDIQGJDOHoj+QHuj1MTH+QFdCwE8jyQE6j3CuGNMAAAAkEMjvrAAAg");
	this.shape_73.setTransform(767.025,153.9047);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#3399CC").s().p("Eh31AXOMAALghIQGfmOGDhyQF2hnCzAHQC0AGFFBoQFHBmDWByQDQB1DSg1QDag5FWi6QFZi8ElgsQExgzJJEAQJFDsLHmEIBBgjQMYm7SzKhQIpDcHtmLQDxjAC8AhIAOACQB4ARDYBSQDZBTCNBaQCJBZCLgXQCOgWDhhpQDhhqC+gKQDDgGF8DFQGCDKHej3QHljvMEH1QFXCuE2jtQE0jxCrGFMAAAAkFMjvrAAAg");
	this.shape_74.setTransform(767.025,153.8705);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#3399CC").s().p("Eh31AXOMAALghIQGkmSGHhzQF7hoC0AIQC1AHFJBqQFLBoDYB0QDTB3DUg1QDcg6Fai8QFdi+EogsQE0gzJPEDQJMDxLOmJIBBgjQMgnBTAKrQIwDfHymQQDzjDC+AiIAOABQB2ARDUBRQDVBRCKBZQCHBXCIgWQCMgVDchnQDdhnC7gKQDAgGF0DBQF7DIHVjyQHcjoL2HtQFQCqEwjnQEujsCoF/MAAAAkEMjvrAAAg");
	this.shape_75.setTransform(767.025,153.8363);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#3399CC").s().p("Eh31AXOMAALghIQGomWGMh0QF/hoC2AIQC3AHFNBsQFPBqDZB2QDVB5DXg2QDeg6Fei+QFhjAErgsQE3gzJWEIQJRD0LWmNIBCgkQMnnGTOK1QI1DiH3mWQD2jFDAAiIANACQB0AQDQBPQDRBQCIBXQCEBVCGgVQCKgVDYhkQDZhlC3gJQC8gFFtC+QF1DEHMjsQHTjiLnHkQFJCoErjhQEnjmClF3MAAAAkEMjvrAAAg");
	this.shape_76.setTransform(767.025,153.8111);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#3399CC").s().p("Eh31AXPMAALghIQGtmbGPh0QGEhqC4AJQC5AIFQBuQFTBsDcB4QDXB6DZg1QDgg7FijAQFljBEugtQE5gzJdEMQJYD4LemSIBCgkQMunLTbK+QI7DlH8mbQD5jIDCAjIANABQByAQDMBOQDNBOCFBWQCCBTCDgVQCHgTDVhiQDUhiC0gJQC5gFFmC7QFtDBHDjmQHKjcLYHbQFDClEljbQEijhChFwMAAAAkFMjvrAAAg");
	this.shape_77.setTransform(767.025,153.7767);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#3399CC").s().p("Eh31AXPMAALghIQGxmfGUh1QGIhqC6AJQC7AJFUBwQFWBuDeB5QDaB9Dbg2QDjg7FljCQFpjDExgtQE8gzJkEQQJdD8LmmXIBDglQM0nQTqLIQJADoICmgQD6jLDFAkIAMABQBwAQDIBMQDJBMCDBUQCABSCAgUQCFgTDQhgQDRhfCwgIQC1gEFfC3QFmC9G6jfQHCjXLJHUQE8CiEfjWQEcjbCeFpMAAAAkEMjvrAAAg");
	this.shape_78.setTransform(767.025,153.7424);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#3399CC").s().p("Eh31AXPMAALghIQG2mjGYh1QGMhsC8AKQC8AJFYByQFaBwDhB8QDbB+Deg2QDlg7FpjEQFsjGE1gtQE/gzJqEUQJjEALumbIBDglQM8nWT3LRQJGDsIHmmQD9jNDGAkIANABQBuAQDEBKQDFBLCBBTQB8BQB/gUQCCgSDMhdQDMheCtgHQCygDFYCzQFfC6GxjZQG4jQK6HKQE2CgEZjRQEWjVCbFiMAAAAkEMjvrAAAg");
	this.shape_79.setTransform(767.025,153.7171);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#3399CC").s().p("Eh31AXQMAALghIQG6moGch2QGRhsC+AKQC+AKFcB0QFeByDiB9QDeCBDgg3QDng7FtjGQFwjIE4gtQFCgzJxEYQJpEEL1mgIBEgmQNDnaUFLaQJMDvILmrQEAjQDIAlIAMABQBsAPDBBJQDBBKB+BQQB6BPB8gTQB/gSDIhbQDJhaCpgHQCvgDFQCwQFYC3GojUQGwjJKrHBQEvCdETjKQEQjQCYFaMAAAAkFMjvrAAAg");
	this.shape_80.setTransform(767.025,153.6827);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#3399CC").s().p("Eh31AXQMAALghIQG/msGgh2QGVhuDAALQDAALFfB2QFiBzDlCAQDgCDDjg3QDog8FxjIQF0jKE7gtQFFgzJ3EcQJvEIL9mlQAigSAjgUQNKngUTLkQJRDzIRmxQECjSDKAkIAMABQBqAQC8BHQC9BIB8BPQB4BNB5gTQB9gRDEhYQDEhYCmgGQCrgDFKCtQFQCzGgjNQGmjEKcG6QEpCaENjFQEKjKCVFTMAAAAkEMjvrAAAg");
	this.shape_81.setTransform(767.025,153.6482);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#3399CC").s().p("Eh31AXQMAALghIQHDmwGlh3QGahuDBALQDCAMFjB3QFlB2DnCBQDjCFDlg4QDqg7F1jKQF4jME+guQFIgyJ+EfQJ1EMMEmqIBGgmQNRnlUgLuQJXD1IWm2QEFjVDMAlIALACQBoAPC5BGQC5BGB5BNQB2BLB2gSQB7gQC/hWQDBhWCigFQCogCFCCpQFKCwGWjHQGei9KNGwQEiCXEHi/QEEjECSFMMAAAAkEMjvrAAAg");
	this.shape_82.setTransform(767.025,153.6229);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#3399CC").s().p("Eh31AXRMAALghIQHIm1Gph4QGehvDDANQDDALFnB6QFpB3DqCEQDkCHDog4QDtg8F4jMQF8jOFBguQFKgzKFEkQJ7EQMMmvIBGgmQNYnqUvL3QJcD4Icm7QEHjXDOAlIALABQBmAPC0BEQC1BFB3BMQBzBJB0gRQB5gPC7hUQC8hTCfgGQClgBE7CmQFCCtGNjBQGVi4J/GoQEbCVEBi6QD/i+COFEMAAAAkFMjvrAAAg");
	this.shape_83.setTransform(767.025,153.5883);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#3399CC").s().p("Eh31AXRMAALghIQHNm5Gsh5QGjhwDFANQDFANFrB7QFtB5DrCGQDnCJDqg4QDvg9F9jOQF/jQFEgtQFNgzKMEnQKBEUMUmzIBGgnQNfnvU8MAQJiD8IhnAQEKjaDPAlIALABQBkAPCxBDQCxBDB1BKQBwBIBygRQB1gPC4hRQC3hRCcgEQChgBE0CjQE7CpGFi7QGLixJwGfQEVCSD7i0QD5i5CLE9MAAAAkFMjvrAAAg");
	this.shape_84.setTransform(767.025,153.5537);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#3399CC").s().p("Eh31AXRMAALghIQHRm9Gxh5QGnhxDHAOQDHANFvB9QFwB7DtCIQDqCKDsg4QDxg9GBjQQGDjSFHguQFQgyKSErQKHEYMcm4IBHgnQNmn1VKMKQJnD/ImnGQENjcDRAmIALABQBiAOCsBCQCuBBByBJQBuBGBvgQQBzgOCzhPQC0hPCYgEQCeABEtCeQE0CnF7i2QGDirJhGXQEOCPD2iuQDyizCIE2MAAAAkEMjvrAAAg");
	this.shape_85.setTransform(767.025,153.5284);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#3399CC").s().p("Eh31AXSMAALghIQHWnCG1h6QGrhxDJAOQDJAOFyB/QF0B9DwCKQDrCMDvg5QDzg8GFjTQGHjUFKguQFTgyKZEvQKMEcMkm9IBIgoQNtn5VYMTQJtEDIrnMQEOjfDUAnIAKABQBhAOCoBAQCpBABwBGQBrBFBtgQQBxgNCvhMQCvhMCVgEQCbABElCbQEtCjFyivQF6ilJSGOQEICNDwipQDsiuCFEvMAAAAkFMjvrAAAg");
	this.shape_86.setTransform(767.025,153.4937);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#3399CC").s().p("Eh31AXSMAALghIQHanHG5h6QGwhyDLAPQDLAOF2CBQF4B/DxCMQDuCODxg5QD2g9GIjUQGLjWFNguQFWgzKfEzQKTEgMrnBIBIgpQN1n+VlMdQJzEFIwnQQERjiDWAnIAKABQBeAOClA+QClA+BtBFQBpBDBqgOQBvgNCqhKQCshKCRgDQCXACEfCYQEmCfFpipQFxifJDGGQEBCJDqiiQDmipCCEoMAAAAkFMjvrAAAg");
	this.shape_87.setTransform(767.025,153.4709);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#3399CC").s().p("Eh31AXSMAALghIQHfnKG9h7QG0hzDNAPQDMAPF6CDQF8CBD0COQDwCQDzg6QD4g9GMjWQGOjYFRguQFZgzKmE3QKYEkMznGIBJgpQN8oDVzMmQJ4EJI2nWQETjlDYAoIAJABQBdANCgA9QChA9BrBDQBnBBBngOQBsgMCnhHQCnhICOgCQCUACEXCVQEfCcFgijQFoiZI1F9QD6CHDkidQDgijB/EhMAAAAkEMjvrAAAg");
	this.shape_88.setTransform(767.025,153.4455);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#3399CC").s().p("Eh31AXSMAALghIQHjnPHCh7QG5h0DOAQQDOAPF+CFQF/CDD2CQQDzCSD1g6QD6g9GQjZQGSjaFUguQFbgzKtE7QKfEoM6nLQAlgTAlgWQODoIWAMvQJ+EMI7nbQEWjnDZAoIAKABQBaANCdA7QCdA8BoBBQBkBABmgOQBpgLCjhFQCjhFCKgCQCRADEPCRQEYCZFXidQFgiTIlF1QD0CEDeiYQDbidB7EaMAAAAkEMjvrAAAg");
	this.shape_89.setTransform(767.025,153.4108);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#3399CC").s().p("Eh31AXTMAALghIQHonUHGh8QG9h1DQARQDQAQGBCHQGDCFD5CSQD0CUD4g6QD8g+GUjbQGWjcFXguQFegzKzE/QKlEsNCnQIBLgpQOKoOWOM5QKDEQJAnhQEZjqDbApIAJAAQBZANCYA6QCaA6BmBAQBhA+BjgNQBngLCehCQCfhDCHgBQCNADEJCOQERCVFOiXQFWiMIXFsQDtCBDYiSQDViXB4ESMAAAAkFMjvrAAAg");
	this.shape_90.setTransform(767.025,153.376);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#3399CC").s().p("Eh31AXTMAALghIQHsnYHKh9QHCh1DSARQDSARGFCIQGHCHD6CUQD3CWD6g7QD+g+GYjcQGajeFagvQFhgzK6FEQKrEwNKnVIBKgqQOSoTWbNDQKKESJFnmQEbjsDdApIAJABQBWAMCVA4QCVA5BkA+QBfA8BggMQBlgKCahAQCbhACDgBQCKAEEBCKQEKCSFFiRQFOiFIHFjQDnB+DSiMQDPiSB1ELMAAAAkFMjvrAAAg");
	this.shape_91.setTransform(767.025,153.3505);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#3399CC").s().p("Eh31AXTMAALghIQHxncHOh9QHGh3DUASQDTARGJCLQGLCJD9CWQD5CYD8g7QEBg/GbjeQGejgFdgvQFkgzLAFHQKxE1NSnaIBLgqQOZoYWpNMQKPEVJKnrQEejvDfApIAJABQBUANCQA2QCSA3BhA9QBdA6BdgLQBigKCWg9QCXg+CAAAQCGAED7CHQEDCPE8iLQFEiAH5FbQDgB8DMiHQDJiMByEEMAAAAkEMjvrAAAg");
	this.shape_92.setTransform(767.025,153.3157);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#3399CC").s().p("Eh31AXUMAALghIQH1nhHTh+QHKh3DWASQDVASGNCNQGOCKD/CYQD8CbD+g8QEDg+GfjhQGijiFggvQFngzLHFLQK2E4NaneIBMgrQOgodW3NWQKUEZJQnxQEgjxDhApIAIABQBSAMCNA1QCNA1BfA8QBaA4BbgLQBggJCSg7QCTg7B8ABQCDAFDzCDQD8CMEziFQE7h6HrFSQDaB5DFiBQDDiGBvD8MAAAAkFMjvrAAAg");
	this.shape_93.setTransform(767.025,153.2809);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#3399CC").s().p("Eh31AXUMAALghIQH6nlHWh/QHPh4DYATQDXATGQCOQGSCMEBCbQD+CcEBg8QEFg/GjjjQGmjkFjgvQFqgyLNFPQK9E8NhnjIBNgrQOnojXENfQKaEcJVn2QEijzDjApIAIABQBRAMCIA0QCKAzBcA6QBYA3BZgLQBdgICNg4QCPg5B5ABQCAAGDsCAQD0CIEqh/QEzh0HbFKQDUB2DAh7QC8iBBsD1MAAAAkFMjvrAAAg");
	this.shape_94.setTransform(767.025,153.2554);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#3399CC").s().p("Eh31AXUMAALghIQH+npHbh/QHUh5DYATQDaAUGUCQQGWCOEDCcQEACeEDg8QEHg/GnjlQGqjmFmgvQFsgzLVFTQLCFBNpnoIBMgsQOwonXSNoQKfEgJan8QElj2DlAqIAIABQBOAMCFAxQCFAzBaA3QBWA2BWgKQBagHCKg3QCKg2B2ACQB8AGDlB8QDuCFEhh5QEphtHNFBQDNBzC6h1QC3h7BoDuMAAAAkEMjvrAAAg");
	this.shape_95.setTransform(767.025,153.2205);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#3399CC").s().p("Eh31AXVMAALghIQIDnuHfiAQHYh5DaAUQDbATGYCSQGaCREFCeQEDCgEFg8QEJhAGsjnQGsjoFqgvQFvgzLbFXQLJFENvnsQAngVAngXQO3otXfNyQKlEjJgoBQEnj5DnArIAIABQBMALCBAwQCBAxBYA2QBSA0BUgJQBYgHCGg0QCGg0ByACQB5AHDeB5QDmCCEYhzQEhhnG9E4QDHBxC0hwQCxh2BlDnMAAAAkFMjvrAAAg");
	this.shape_96.setTransform(767.025,153.1856);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#3399CC").s().p("Eh31AXVMAALghIQIInyHjiAQHch7DcAUQDdAVGcCUQGdCSEICgQEECiEIg9QEMg/GvjpQGwjqFtgwQFygyLiFbQLOFIN4nyQAngVAngXQO+oyXtN8QKrEmJkoGQEqj8DpArIAHABQBKALB9AvQB+AvBVA0QBQAyBRgIQBWgGCBgyQCCgxBvADQB2AHDWB2QDfB+EPhtQEYhhGvEwQDABuCuhqQCrhxBiDgMAAAAkFMjvrAAAg");
	this.shape_97.setTransform(767.025,153.1601);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#3399CC").s().p("Eh31AXVMAALghIQIMn2HniBQHhh8DeAWQDfAVGfCVQGhCVEKCiQEHCkEKg9QEOhAGzjrQG0jsFwgwQF1gyLoFfQLVFMN/n2IBPgtQPFo3X6OFQKxEpJqoMQEsj+DrAsIAHAAQBIALB5AuQB5AtBTAzQBOAwBOgIQBUgFB9gvQB+gvBrADQByAIDQBzQDYB6EGhmQEPhbGgEnQC5BrCohkQClhrBfDZMAAAAkEMjvrAAAg");
	this.shape_98.setTransform(767.025,153.1251);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#3399CC").s().p("Eh31AXWMAALghIQIRn7HriBQHlh9DgAWQDhAWGjCXQGlCWEMClQEJCmEMg+QEQhAG3jtQG4juFzgwQF4gzLvFjQLaFQOHn6IBPguQPMo8YJOPQK2EsJvoRQEvkADsArIAHABQBGALB1ArQB2AsBQAyQBLAuBMgHQBRgFB5gsQB6gtBoAEQBvAJDIBvQDRB3D9hhQEGhUGREeQCzBoCiheQCfhlBcDRMAAAAkFMjvrAAAg");
	this.shape_99.setTransform(767.025,153.0901);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#3399CC").s().p("Eh31AXWMAALghIQIVn/HwiCQHph+DiAXQDiAWGnCZQGpCZEOCmQEMCoEOg+QEShAG7jvQG8jxF2gvQF7gzL1FnQLgFUOPoAIBQgtQPTpCYXOYQK7EwJ0oWQEykEDuAtIAHAAQBEALBxAqQBxAqBOAwQBJAtBKgHQBOgEB1gqQB2gqBkAEQBsAKDBBrQDKB0DzhbQD+hOGCEWQCsBlCchZQCZhfBZDKMAAAAkFMjvrAAAg");
	this.shape_100.setTransform(767.025,153.0646);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#3399CC").s().p("Eh31AXWMAALghIQIaoDH0iDQHth+DkAXQDkAXGrCbQGsCaEQCpQEOCqERg/QEVhAG+jxQHAjzF5gwQF9gyL9FrQLmFYOWoFIBRguQPapGYkOhQLBEzJ6obQE0kGDwAsIAGABQBDAKBsApQBuApBLAtQBHAsBHgGQBMgEBxgnQBxgoBhAFQBoAKC6BoQDDBwDrhUQD0hIFzENQCmBjCWhUQCUhZBVDDMAAAAkEMjvrAAAg");
	this.shape_101.setTransform(767.025,153.0296);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#3399CC").s().p("Eh31AXXMAALghIQIeoIH4iDQHzh/DlAXQDmAYGvCdQGvCcETCqQEQCsETg+QEXhBHCjzQHEj1F8gwQGAgzMDFvQLsFcOeoJIBSguQPhpMYyOrQLHE2J+ogQE3kJDyAtIAGABQBAAJBpAnQBqAoBJAsQBEAqBEgFQBKgDBsgmQBuglBeAGQBkAKCzBlQC7BtDihOQDrhCFlEEQCfBgCQhOQCOhUBSC8MAAAAkFMjvrAAAg");
	this.shape_102.setTransform(767.025,152.9945);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#3399CC").s().p("Eh31AXXMAALghIQIjoMH8iEQH3iADnAYQDoAYGyCfQG0CeEUCtQETCtEVg+QEZhCHGj1QHIj2F/gwQGDgzMKFzQLyFgOmoOIBRgvQPppRY/O1QLNE5KDomQE6kLD0AtIAFABQA/AJBlAmQBlAmBHAqQBBAoBCgEQBHgDBpgiQBpgjBbAGQBhALCrBhQC1BqDZhIQDig8FVD8QCZBdCLhIQCHhOBPC0MAAAAkFMjvrAAAg");
	this.shape_103.setTransform(767.025,152.9595);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#3399CC").s().p("Eh31AXXMAALghIQInoQIBiFQH7iBDpAZQDpAZG3ChQG3CgEXCuQEVCwEYg/QEahCHKj3QHMj4GCgwQGGgzMQF3QL4FkOuoTIBSgvQPwpWZNO+QLSE8KJorQE7kOD3AuIAFAAQA8AKBhAkQBiAkBEApQA/AmBAgEQBEgBBlghQBlggBXAHQBdALCkBeQCuBnDQhDQDZg1FHDzQCSBaCFhCQCBhJBMCuMAAAAkEMjvrAAAg");
	this.shape_104.setTransform(767.025,152.9339);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#3399CC").s().p("Eh31AXYMAALghIQIsoVIEiFQIAiCDrAaQDrAZG6CjQG7CiEZCwQEXCyEahAQEdhCHOj5QHPj6GGgxQGJgyMXF6QL+FpO1oYQApgXAqgZQP3pbZaPIQLYE/KOowQE+kRD4AvIAFAAQA7AJBdAjQBdAiBCAoQA9AkA9gDQBCgBBggeQBhgdBTAHQBbAMCdBaQCmBjDHg8QDRgwE4DrQCLBYB/g9QB7hDBJCmMAAAAkFMjvrAAAg");
	this.shape_105.setTransform(767.025,152.8988);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#3399CC").s().p("Eh31AXYMAALghIQIwoZIJiGQIEiDDtAaQDtAaG+ClQG+CkEcCyQEZC0EdhAQEfhCHRj7QHTj9GJgwQGMgzMdF/QMEFsO9ocIBUgxQP+pgZoPRQLdFDKUo2QFAkTD6AvIAFAAQA4AJBZAhQBaAhA/AmQA6AjA7gDQBAAABcgcQBcgbBRAIQBWANCWBWQCgBgC+g2QDHgpEpDiQCFBVB5g3QB1g+BGCfMAAAAkFMjvrAAAg");
	this.shape_106.setTransform(767.025,152.8637);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#3399CC").s().p("Eh31AXYMAALghIQI1odINiHQIIiDDvAbQDvAaHBCnQHDCmEdC0QEcC2EfhBQEhhCHVj9QHXj/GMgwQGOgzMlGDQMJFwPFohIBUgxQQGplZ2PaQLiFGKZo7QFDkWD8AvIAEABQA3AJBVAfQBWAfA9AkQA3AiA4gCQA9AABYgZQBZgZBNAJQBTANCPBTQCYBdC1gwQC/gkEaDaQB+BSBzgxQBwg4BCCYMAAAAkEMjvrAAAg");
	this.shape_107.setTransform(767.025,152.8381);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#3399CC").s().p("Eh31AXYMAALghIQI6ohIRiIQIMiEDxAcQDwAbHGCoQHGCoEgC2QEdC4EihBQEjhCHakAQHakAGPgxQGRgzMrGHQMQF0PMomQArgXAqgaQQNpqaDPkQLpFJKdpBQFGkYD+AwIAEAAQA0AIBRAeQBSAeA7AjQA1AfA1gBQA7ABBUgXQBUgWBKAJQBQAOCHBQQCSBZCrgqQC2gdELDRQB4BPBtgsQBqgyA/CRMAAAAkEMjvrAAAg");
	this.shape_108.setTransform(767.025,152.8029);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#3399CC").s().p("Eh31AXZMAALghIQI+omIViIQISiFDyAcQDyAbHJCrQHKCpEiC5QEgC6EkhBQElhDHekCQHekCGSgxQGUgzMyGLQMVF4PVorQAqgXArgaQQUpwaRPuQLuFMKjpGQFIkaEAAvIADABQAzAIBNAcQBOAdA4AgQAzAeAzgBQA4ACBPgUQBRgUBGAKQBMAOCBBNQCKBVCjgkQCtgXD8DJQBxBMBnglQBkgtA8CJMAAAAkFMjvrAAAg");
	this.shape_109.setTransform(767.025,152.7678);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#3399CC").s().p("Eh31AXZMAALghIQJDoqIZiJQIWiGD0AdQD0AcHNCtQHNCrEkC7QEjC7EmhBQEnhDHikEQHikEGUgxQGYgzM4GPQMcF8PcowIBVgxQQcp1aeP3QL0FPKopLQFLkdEBAwIAEAAQAwAIBJAbQBKAbA2AfQAwAcAxAAQA2ACBLgRQBMgSBDAKQBJAPB5BKQCDBSCageQCkgRDuDAQBqBKBhggQBegnA5CCMAAAAkEMjvrAAAg");
	this.shape_110.setTransform(767.025,152.7421);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#3399CC").s().p("Eh31AXZMAALghIQJHovIeiJQIaiGD2AdQD2AdHQCuQHSCtEmC9QElC9EohBQEqhEHlkFQHmkGGXgyQGbgzM+GTQMhGAPlo0IBWgyQQjp6asQAQL5FTKupQQFNkgEDAwIADABQAvAHBFAZQBGAaAzAdQAuAbAuAAQAzADBIgPQBIgPA/AKQBGAQByBGQB8BPCQgYQCbgLDfC4QBkBHBbgbQBYghA2B7MAAAAkEMjvrAAAg");
	this.shape_111.setTransform(767.025,152.7188);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#3399CC").s().p("Eh31AXaMAALghIQJMozIhiKQIfiID4AeQD3AeHVCwQHVCvEoC/QEnC/ErhCQEshEHpkHQHqkIGagyQGegzNFGXQMnGEPso5QArgYAsgbQQqp+a5QJQL/FWKzpWQFPkiEGAxIADAAQAsAIBCAXQBCAYAwAcQAsAZArABQAxAEBDgNQBEgNA8ALQBCARBrBCQB1BMCIgSQCSgFDQCvQBdBEBWgVQBRgbAzBzMAAAAkFMjvrAAAg");
	this.shape_112.setTransform(767.025,152.6836);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#3399CC").s().p("Eh31AXaMAALghIQJQo4ImiKQIjiID6AeQD5AeHYCyQHZCxErDBQEpDBEthCQEuhEHtkKQHtkKGegyQGggyNMGaQMtGIP0o9IBYgzQQxqEbHQTQMEFZK4pbQFSklEIAxIADABQAqAHA9AWQA+AWAvAaQAoAXApACQAvAEA/gKQBAgKA4ALQA/ARBkA/QBtBJB/gMQCJACDBCmQBXBBBQgPQBMgWAvBsMAAAAkFMjvrAAAg");
	this.shape_113.setTransform(767.025,152.6579);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#3399CC").s().p("Eh31AXaMAALghIQJVo8IqiLQIniJD8AfQD7AfHcC0QHcCzEtDDQEsDDEvhDQEwhEHxkMQHxkMGhgyQGjgzNTGfQMyGMP8pCIBZg0QQ4qJbVQdQMKFcK9pgQFUkoEKAyIACAAQApAHA5AUQA6AVAsAZQAmAVAnADQAsAFA6gIQA8gIA1AMQA8ASBcA7QBnBFB2gGQCAAICyCeQBQA/BKgKQBGgRAsBmMAAAAkEMjvrAAAg");
	this.shape_114.setTransform(767.025,152.6227);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#3399CC").s().p("Eh31AXbMAALghIQJZpAIviMQIsiKD9AgQD9AfHfC2QHhC1EvDEQEtDGEyhDQEyhFH1kNQH1kPGkgyQGmgzNZGjQM5GQQDpHQAtgZAsgbQRAqObiQmQMQFfLCplQFXkrELAzIACAAQAnAGA1ATQA2AUAqAWQAkAUAkADQApAGA3gGQA4gFAxANQA4ASBVA4QBgBCBtAAQB3AOCkCVQBJA8BEgEQBAgLApBeMAAAAkFMjvrAAAg");
	this.shape_115.setTransform(767.025,152.5874);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#3399CC").s().p("Eh31AXbMAALghIQJepFIyiMQIxiLD/AgQD+AgHkC4QHkC3ExDHQEwDHE0hEQE1hEH4kQQH5kQGngyQGpgzNgGmQM+GUQMpMQAsgZAtgbQRHqTbwQvQMVFjLHprQFaktENAzIACAAQAkAGAyASQAyARAnAWQAhASAiADQAnAHAzgDQAzgDAuANQA1ATBOA0QBZA/BjAGQBvAUCUCNQBDA5A+ACQA6gGAmBXMAAAAkFMjvrAAAg");
	this.shape_116.setTransform(767.025,152.5617);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#3399CC").s().p("Eh31AXbMAALghIQJipJI3iMQI1iMEBAhQEAAgHoC6QHnC5E0DIQEyDKE2hEQE3hFH8kSQH9kSGqgzQGsgyNmGqQNFGYQTpRQAtgZAtgbQROqZb9Q5QMbFmLNpwQFckwEPA0IACAAQAiAGAtAQQAvAQAkATQAfARAfAEQAlAHAugBQAwAAAqAOQAxATBHAxQBSA7BbANQBlAaCGCEQA8A2A4AIQA0AAAjBQMAAAAkEMjvrAAAg");
	this.shape_117.setTransform(767.025,152.5265);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#3399CC").s().p("Eh31AXcMAALghIQJnpNI7iOQI5iNECAiQEDAhHrC7QHrC7E2DLQE1DLE4hEQE5hFIAkUQIBkUGtgzQGvgzNtGvQNKGcQbpWQAtgZAugcQRVqdcLRCQMgFqLSp2QFfkyERAzIABAAQAhAGApAOQAqAPAiASQAdAPAcAFQAjAHAqACQArACAnAPQAuAUBAAtQBKA4BSASQBdAhB2B7QA2A0AyANQAuAGAgBIMAAAAkFMjvrAAAg");
	this.shape_118.setTransform(767.025,152.4912);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#3399CC").s().p("Eh31AXcMAALghIQJspSI+iOQI+iNEEAiQEFAhHvC+QHvC8E3DNQE3DNE7hEQE7hGIEkVQIFkXGwgyQGxgzN0GyQNRGgQipaIBbg1QRcqjcZRMQMnFsLXp7QFhk0ETAzIABABQAeAFAmANQAmANAgAQQAZANAbAGQAfAIAmAEQAnAFAkAPQArAUA4ArQBEA0BIAYQBUAnBoBzQAvAxAsASQApAMAcBBMAAAAkFMjvrAAAg");
	this.shape_119.setTransform(767.025,152.4655);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#3399CC").s().p("Eh31AXcMAALghIQJwpWJDiOQJCiPEGAjQEGAiHzC/QHzC/E6DPQE5DPE9hFQE+hFIIkYQIIkZGzgyQG0gzN7G2QNWGkQqpfIBcg2QRjqocnRWQMsFwLcqBQFkk3EUA0IABAAQAdAFAhAMQAjALAdAPQAXALAYAGQAdAJAiAHQAjAHAgAQQAnAVAyAnQA8AxBAAeQBKAtBZBqQApAuAmAYQAjASAZA6MAAAAkEMjvrAAAg");
	this.shape_120.setTransform(767.025,152.4302);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#3399CC").s().p("Eh31AXdMAALghIQJ1pbJHiPQJGiPEIAjQEIAjH3DBQH2DBE8DRQE8DRE/hFQFAhGIMkaQILkbG3gzQG3gyOBG6QNcGoQypkQAugaAvgcQRqqtc1RfQMxFzLhqGQFmk6EXA1IABAAQAaAFAeAKQAeAKAbAMQAVAKAVAHQAbAKAeAJQAeAJAdAQQAkAWAqAjQA1AuA3AlQBCAzBKBhQAiArAhAfQAcAWAWAzMAAAAkFMjvrAAAg");
	this.shape_121.setTransform(767.025,152.3949);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#3399CC").s().p("Eh31AXdMAALghIQJ5pfJMiQQJLiQEJAkQEKAjH6DDQH6DDE/DTQE+DTFBhGQFChGIQkcQIPkcG6gzQG6gzOIG+QNiGsQ6poIBcg3QRyqydCRoQM3F3LnqMQFok8EZA1IAAAAQAZAFAZAIQAbAIAYAMIAlAPIAyAWQAbAMAZARQAhAWAjAgIBbBVQA5A5A8BZQAbAoAbAkQAWAdATArMAAAAkFMjvrAAAg");
	this.shape_122.setTransform(767.025,152.3692);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,2.2,1534.1,300.3);


(lib.ocean_gr = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3399CC").s().p("Eh31AXdMAALghIQJ+pjJPiQQJQiRELAkQEMAkH+DFQH+DFFADVQFADVFEhGQFEhHIUkeQITkeG9gzQG9gzOOHCQOOHDR5q3QR5q4dQRyQM8F6LsqRQLsqRGVObMAAAAkEg");
	this.shape.setTransform(767.025,152.3338);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3399CC").s().p("Eh31AXbMAALghIQBThQBThFIBihOQAwglAxgiQA4gnA1gjIBTg0QA7gnA8gkQBEgpBCgiQBhgyBkgjQCTg4CSgnIAWgFQEKhEDSgSQCQgQBxgGQA6gDAxAEIAiADQEJAkH6DEQH6DDE+DTQE+DTFBhFQFChGIPkcQIQkcG5gyQG5gyOIG/QOGG/RxqxQRwqxdARpQM2F3LmqLQLmqMGSOUMAAAAkEMjvrAAAg");
	this.shape_1.setTransform(767.025,152.5189);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3399CC").s().p("Eh31AXaMAALghIQBYhUBXhGIBohPQAxgkA1ggIB0hGQAsgYArgbIB9hNQBIgrBFgiQBkgzBqgfQCagzCagsIAWgFQERhKDfgIQCXgNB1gLQA9gGAzAFIAhADQEIAkH2DBQH2DCE8DSQE7DRE/hEQE/hGILkZQILkZG2gyQG2gyOAG8QOAG7RnqrQRnqrcyRhQMvF0LgqFQLgqGGPOMMAAAAkFMjvrAAAg");
	this.shape_2.setTransform(767.025,152.6957);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3399CC").s().p("Eh31AXYMAALghIQBchZBbhGIBvhPQAzgkA5geIB5hCQAugWAugbICDhQQBLgtBJgiQBngyBxgbIFBhgIAWgGQEZhPDtABQCcgJB6gRQBAgIA1AFIAhADQEFAkHyDAQHyDAE6DQQE4DQE9hEQE8hFIHkXQIIkXGygxQGzgxN4G4QN5G4ReqkQRfqlcjRYQMoFxLbp/QLZqBGMOFMAAAAkFMjvrAAAg");
	this.shape_3.setTransform(767.025,152.8904);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3399CC").s().p("Eh31AXWMAALghIQBhhdBfhHIB1hPQA1gkA8gcICAg9QAwgUAwgcICJhSQBPgvBMgjQBqgyB3gXQClgrCqg1IAXgHQEghUD7ALQChgGCAgXQBCgLA2AGIAhADQEEAjHuC/QHuC/E3DOQE2DOE6hDQE6hEIDkUQIDkVGvgxQGvgwNxG0QNyG1RWqeQRVqfcURPQMiFvLVp6QLTp6GJN9MAAAAkFMjvrAAAg");
	this.shape_4.setTransform(767.025,153.0636);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3399CC").s().p("Eh31AXUMAALghIQBlhhBkhIIB7hPQA3gjBAgaICFg6QAzgSAygcICPhUQBTgxBPgjQBsgyB/gTQCrgoCxg5IAYgHQEnhZEIAUQCngDCFgcQBFgNA4AGIAhADQEBAjHrC9QHqC9E0DNQE0DME3hDQE4hDH/kSQH/kSGrgwQGsgwNqGxQNrGyRMqZQRMqYcGRHQMbFrLPp0QLOp1GFN3MAAAAkEMjvrAAAg");
	this.shape_5.setTransform(767.025,153.2327);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3399CC").s().p("Eh31AXUMAALghIQBqhmBohIICAhQQA5giBEgYICLg2QA2gQA1gdQBFgnBPgvQBXgzBSgjQBvgyCFgPQCxgkC5g+IAZgIQEuheEWAeQCsAACLghQBHgQA6AGIAgAEQEAAiHmC8QHmC7EyDLQExDLE1hCQE2hCH6kQQH7kQGogvQGpgwNiGuQNkGvRDqTQREqTb2Q/QMVFpLJpvQLIpvGCNvMAAAAkFMjvrAAAg");
	this.shape_6.setTransform(767.025,153.2932);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3399CC").s().p("Eh31AXTMAALghIQBvhqBrhJICHhQQA7giBIgWICRgyQA3gOA4gdQBHgoBTgxQBbg1BVgjQBygyCMgLQC3gfDAhEIAagIQE1hjEjAnQCzAECPgnQBKgSA8AHIAgADQD+AiHiC6QHiC6EvDJQEvDKEzhCQEyhCH3kNQH2kNGlgvQGlgvNcGrQNcGrQ7qNQQ6qMboQ1QMOFnLDppQLCpqF/NoMAAAAkFMjvrAAAg");
	this.shape_7.setTransform(767.025,153.3539);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3399CC").s().p("Eh31AXSMAALghIQBzhuBwhKICNhQQA9ghBMgUICWguQA6gMA6geQBKgoBWgzQBfg3BYgjQB1gyCSgHQC9gbDJhJIAZgIQE9hoExAwQC4AHCUgsQBMgVA/AHIAgAEQD7AiHeC4QHfC4EtDIQEsDIEwhBQEwhBHzkLQHykLGhguQGigvNUGnQNWGoQxqGQQyqHbYQuQMIFjK9pjQK8pkF8NhMAAAAkEMjvrAAAg");
	this.shape_8.setTransform(767.025,153.4125);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3399CC").s().p("Eh31AXSMAALghIQB4hzB0hKQBWgwA9ggQA/ghBPgSICdgqQA8gLA8gdQBMgpBag0QBjg6BbgjQB4gyCZgDQDDgYDQhNIAagIQFEhuE+A6QC+AKCagxQBOgYBAAIIAgADQD5AiHbC3QHaC3ErDGQEpDGEuhBQEuhAHukIQHukJGeguQGegtNNGjQNPGlQoqBQQpqAbKQlQMBFgK3pdQK2peF5NZMAAAAkFMjvrAAAg");
	this.shape_9.setTransform(767.025,153.475);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#3399CC").s().p("Eh31AXRMAALghIQB8h3B4hKQBbgxA/ggQBAggBUgRICiglQA+gJA/geQBOgpBfg2QBmg8BegjQB7gyCfABQDJgUDYhSIAbgJQFLhyFMBDQDDANCfg2QBRgaBCAIIAfADQD4AhHWC2QHXC1EoDEQEnDFErhAQEshAHqkFQHqkGGaguQGbgtNGGgQNIGhQfp6QQgp6a7QcQL6FeKxpYQKwpZF2NTMAAAAkEMjvrAAAg");
	this.shape_10.setTransform(767.025,153.5323);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3399CC").s().p("Eh31AXRMAALghIQCBh8B8hLQBfgxBBggQBCgfBXgPICpgiQBAgGBBgfQBQgoBjg5QBpg+BigjQB9gyCnAFQDOgQDghWIAbgKQFTh4FaBNQDIARClg8QBTgdBEAIIAfAEQD2AhHSC0QHSCzEmDDQElDDEog/QEphAHmkDQHmkDGXgtQGYgtM+GdQNBGeQWp1QQXpzasQTQL1FbKqpSQKrpTFyNLMAAAAkFMjvrAAAg");
	this.shape_11.setTransform(767.025,153.5885);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#3399CC").s().p("Eh31AXQMAALghIQCFiACBhLQBjgzBDgeQBEggBbgMQBggSBOgMQBDgEBDgfQBSgpBng7QBthABlgjQCAgyCtAIQDVgLDnhbIAcgLQFah9FnBXQDOATCqhBQBWgfBGAJIAfADQDzAhHPCyQHOCzEjDBQEjDAEmg+QEmg/HikAQHikCGTgsQGUgrM4GZQM5GaQOpvQQOptadQLQLuFYKlpMQKkpNFvNDMAAAAkFMjvrAAAg");
	this.shape_12.setTransform(767.025,153.65);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#3399CC").s().p("Eh31AXPMAALghIQCKiECFhMQBngzBFgfQBGgeBegLQBlgPBQgLQBFgCBFgfQBVgqBqg9QBxhBBogkQCDgyC0ANQDagIDvhgIAdgKQFhiCF1BgQDUAXCuhHQBZgiBIAJIAeAEQDyAgHKCxQHLCxEhC/QEfC/Ekg+QEkg9Hej/QHdj+GQgsQGRgrMwGVQMzGXQEpoQQFpnaOQCQLoFWKfpHQKepIFsM9MAAAAkEMjvrAAAg");
	this.shape_13.setTransform(767.025,153.7058);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#3399CC").s().p("Eh31AXPMAALghIQCOiJCJhNQBsg0BHgdQBHgeBjgJQBogNBSgJQBHgBBIgfQBXgqBug/QB1hDBrgkQCGgyC6ARQDhgED2hlIAegKQFoiHGCBpQDaAaC0hMQBbglBJAKIAfADQDvAhHHCvQHGCvEfC+QEdC9Ehg9QEig9HZj8QHaj8GMgsQGOgqMpGSQMrGUP7piQP8phaAP5QLhFTKZpBQKYpCFpM1MAAAAkFMjvrAAAg");
	this.shape_14.setTransform(767.025,153.7686);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#3399CC").s().p("Eh31AXOMAALghIQCTiNCNhNQBxg1BIgdQBJgdBmgHQBsgMBUgGQBKABBKggQBZgqByhBQB5hFBugkQCJgyDAAUQDnABD/hqIAdgLQFviMGRBzQDfAdC5hRQBegnBLAKIAeADQDuAgHCCuQHDCtEcC8QEbC8Eeg8QEfg9HWj5QHVj6GJgrQGKgqMiGPQMkGRPzpdQPzpbZxPxQLaFQKTo7QKSo9FmMvMAAAAkEMjvrAAAg");
	this.shape_15.setTransform(767.025,153.824);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#3399CC").s().p("Eh31AXOMAALghIQCXiRCShPQB1g1BKgdQBLgcBqgFQBvgKBXgFQBMAEBMggQBbgrB2hDQB9hHBxgkQCMgyDHAYQDtAFEGhvIAegLQF2iRGeB8QDlAgC+hWQBggqBOALIAeADQDrAfG/CtQG+CsEaC6QEYC6Ecg8QEdg8HRj3QHSj3GFgqQGGgpMcGLQMdGNPppWQPqpVZiPoQLUFOKNo2QKMo3FjMnMAAAAkFMjvrAAAg");
	this.shape_16.setTransform(767.025,153.894);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#3399CC").s().p("Eh31AXNMAALghIQCciVCVhPQB6g3BMgbQBNgcBtgEQB0gHBYgDQBPAFBOggQBdgrB6hFQCBhJB0gkQCOgyDOAcQDzAJEOh0IAfgLQF9iXGsCGQDqAjDEhbQBigtBQALIAdADQDqAgG6CrQG7CqEXC5QEWC4Eag7QEag7HNj1QHNj1GCgpQGDgpMUGIQMWGKPgpRQPipOZTPgQLNFKKHowQKHoxFfMgMAAAAkEMjvrAAAg");
	this.shape_17.setTransform(767.025,153.941);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#3399CC").s().p("Eh31AXNMAALghIQChiaCZhQQB+g3BOgbQBOgbBygCQB3gGBbAAQBQAHBRghQBggqB9hIQCFhLB3gkQCRgzDVAhQD4AMEWh4IAggMQGEibG6CPQDwAnDIhhQBlgvBSALIAdADQDnAfG3CpQG3CpEUC3QEUC3EXg6QEYg7HIjyQHJjzGAgpQF+goMOGFQMPGGPXpKQPYpIZEPXQLHFIKBorQKBosFcMZMAAAAkFMjvrAAAg");
	this.shape_18.setTransform(767.025,153.9957);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#3399CC").s().p("Eh31AXMMAALghIQClieCehRQCCg4BQgaQBQgbB1AAQB7gDBdABQBTAJBTghQBigrCBhJQCIhNB7glQCUgyDbAkQD/AREdh9IAggNQGMigHHCYQD2AqDOhmQBngyBTAMIAdADQDmAfGyCoQGzCnESC2QERC1EVg6QEVg6HFjwQHFjwF7goQF8goMGGBQMIGDPOpEQPQpCY1POQLAFGJ7olQJ7omFZMRMAAAAkFMjvrAAAg");
	this.shape_19.setTransform(767.025,154.0589);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#3399CC").s().p("Eh31AXLMAALghIQCqiiCihRQCGg5BSgaQBSgaB5ACQB+gCBgAEQBVALBVgiQBkgrCFhLQCMhPB+glQCXgyDiAoQEEAVEliCIAhgNQGTimHVCiQD7AuDThsQBqg0BVAMIAdADQDjAfGvCmQGvClEQC0QEOC0ESg6QETg5HBjtQHAjuF4goQF4gnL/F+QMBGAPFo+QPHo8YnPGQK5FCJ1ofQJ1ohFWMLMAAAAkEMjvrAAAg");
	this.shape_20.setTransform(767.025,154.1134);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#3399CC").s().p("Eh31AXLMAALghIQCuinCmhSQCLg6BUgZQBUgZB8AEQCDAABhAGQBXANBYgiQBmgsCJhNQCQhRCBglQCagyDoAsQELAZEtiHIAhgNQGairHiCrQEBAxDYhxQBtg3BXANIAcACQDiAfGrClQGqCkEOCyQEMCyEPg5QERg5G8jqQG9jrFzgoQF2gmL4F6QL6F8O8o4QO+o2YXO+QKzE/JwoZQJuobFTMDMAAAAkFMjvrAAAg");
	this.shape_21.setTransform(767.025,154.1834);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#3399CC").s().p("Eh31AXKMAALghIQCzirCqhSQCQg7BVgZQBVgYCBAGQCGACBkAHQBZAPBagiQBogsCOhPQCThTCEglQCdgzDvAxQEQAcE1iLIAigOQGhiwHwC1QEGA0Deh2QBvg6BZANIAcADQDfAeGnCjQGnCjELCxQEKCwENg4QEOg4G4jpQG4joFxgnQFygmLwF3QLzF5OzoyQO1owYJO1QKsE9JqoUQJooVFQL8MAAAAkEMjvrAAAg");
	this.shape_22.setTransform(767.025,154.2301);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#3399CC").s().p("Eh31AXKMAALghIQC3iwCvhTQCUg7BXgYQBXgYCFAIQCJADBmAKQBcARBcgiQBrgtCRhRQCXhVCHgmQCfgyD2A1QEXAgE8iQIAigOQGpi1H9C+QEMA3Djh7QByg8BbANIAbADQDeAeGjChQGjChEICvQEHCvELg4QELg3G0jmQG1jmFtgmQFugmLqF0QLrF2OrosQOroqX6OsQKmE6JkoOQJjoQFML1MAAAAkFMjvrAAAg");
	this.shape_23.setTransform(767.025,154.2842);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#3399CC").s().p("Eh31AXJMAALghIQC8i0CyhTQCZg9BZgXQBZgYCIAKQCNAGBoAMQBfATBegjQBtgsCVhUQCbhXCKgmQCigyD9A5QEcAkFEiVIAjgOQGwi7ILDIQESA7DoiBQB0g/BdAOIAbACQDcAeGeCgQGfCgEGCtQEFCtEIg3QEJg3GwjjQGwjkFqgmQFrgkLiFwQLlFyOhomQOjojXrOjQKfE4JeoJQJdoKFJLuMAAAAkEMjvrAAAg");
	this.shape_24.setTransform(767.025,154.3477);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#3399CC").s().p("Eh31AXIMAALghIQDAi4C3hUQCdg9BbgXQBbgXCMAMQCRAHBqAOQBgAVBhgjQBvgtCZhWQCfhZCNglQClgzEDA9QEiAoFMiZIAkgPQG3jAIZDSQEXA9DtiGQB2hBBfAOIAbADQDaAdGbCeQGbCeEDCsQEDCrEFg2QEHg2GsjhQGsjhFmglQFogkLbFsQLdFvOYogQOaodXcObQKZE1JYoDQJXoFFGLnMAAAAkEMjvrAAAg");
	this.shape_25.setTransform(767.025,154.4017);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#3399CC").s().p("Eh31AXIMAALghIQDFi9C7hVQChg+BdgWQBcgWCQANQCVAKBsAQQBjAXBjgkQBxgtCdhYQCjhbCQglQCogzEKBBQEoAsFTieIAlgQQG+jEImDbQEdBADyiLQB5hEBhAPIAbACQDYAeGWCcQGXCdECCqQD/CpEDg1QEEg2GojeQGnjfFkglQFkgjLUFpQLXFsOPoaQORoXXNOSQKSEyJSn9QJRn/FDLfMAAAAkFMjvrAAAg");
	this.shape_26.setTransform(767.025,154.4718);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#3399CC").s().p("Eh31AXHMAALghIQDJjBDAhVQClg/BfgWQBegVCUAPQCYAMBvASQBlAYBlgkQB0gtCghZQCnheCTgmQCrgyEQBFQEuAwFcijIAkgQQHGjKI0DlQEiBED4iRQB7hHBjAPIAaADQDWAdGTCbQGTCbD/CoQD9CoEBg1QEBg0GkjcQGjjdFggkQFhgjLNFmQLPFoOGoUQOIoQW/OJQKLEvJMn3QJLn5FALYMAAAAkEMjvrAAAg");
	this.shape_27.setTransform(767.025,154.5184);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#3399CC").s().p("Eh31AXHMAALghIQDOjGDDhVQCqhABhgVQBggWCXASQCcANBxAUQBoAbBngkQB2guCkhbQCqhgCXgmQCugyEXBJQE0A0FjioIAlgQQHNjPJBDuQEoBHD9iWQB+hJBlAPIAaADQDUAcGPCaQGPCZD8CnQD7CmD+g0QD/g0GfjaQGfjaFdgjQFegiLFFiQLIFlN9oOQOAoLWvOCQKFEsJGnyQJFn0E9LRMAAAAkFMjvrAAAg");
	this.shape_28.setTransform(767.025,154.5722);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#3399CC").s().p("Eh31AXGMAALghIQDTjKDHhWQCvhBBhgUQBjgVCbAUQCgAPBzAWQBpAdBqglQB4guCohdQCuhiCagmQCwgyEeBMQE6A5FritIAmgRQHUjUJPD4QEuBKECibQCAhMBnAQIAaACQDRAdGLCYQGLCYD6ClQD5CkD7gzQD9g0GbjXQGbjYFZgjQFaghK/FfQLBFhN0oHQN2oFWhN5QJ+EpJAnsQJAnuE5LKMAAAAkEMjvrAAAg");
	this.shape_29.setTransform(767.025,154.6359);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#3399CC").s().p("Eh31AXGMAALghIQDXjODMhXQCzhCBjgUQBkgUCfAVQCkASB1AYQBsAeBsglQB6guCshfQCyhkCdgmQCzgyElBQQFAA9FyiyIAngRQHbjZJcEBQE0BNEHihQCDhOBoAQIAaADQDQAcGHCXQGHCWD3CjQD2CjD5gzQD6gyGXjVQGXjVFWgjQFXghK3FcQK6FeNroCQNun+WRNwQJ4EnI7nnQI5noE2LCMAAAAkFMjvrAAAg");
	this.shape_30.setTransform(767.025,154.6888);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#3399CC").s().p("Eh31AXFMAALghIQDcjTDPhXQC4hDBlgTQBmgTCjAXQCnATB3AaQBvAhBugmQB8guCwhiQC2hlCggnQC2gyErBVQFGBAF6i2IAngSQHjjeJqEKQE5BREMimQCGhRBqARIAZACQDOAcGDCVQGDCVD2CiQDzChD2gzQD4gyGSjSQGTjTFTgiQFUggKwFYQKyFbNin8QNln4WDNoQJxEjI1ngQIznjEzK7MAAAAkFMjvrAAAg");
	this.shape_31.setTransform(767.025,154.7597);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#3399CC").s().p("Eh31AXEMAALghIQDgjXDUhYQC8hDBngTQBogTCmAZQCrAWB6AcQBwAiByglQB+gvCzhkQC6hnCjgnQC5gyEyBYQFLBFGCi7IAogSQHqjkJ4EUQE+BUESirQCIhUBsARIAZADQDMAcF/CTQF/CTDzCgQDxCgDzgyQD2gxGOjQQGPjRFPghQFQggKpFVQKsFYNZn2QNbnyV1NfQJqEhIvnbQItndEwK0MAAAAkEMjvrAAAg");
	this.shape_32.setTransform(767.025,154.8062);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#3399CC").s().p("Eh31AXEMAALghIQDljbDYhZQDAhEBpgSQBqgTCqAbQCvAXB7AeQBzAlB0gmQCAgvC3hmQC+hpCmgnQC8gyE4BcQFSBJGKjAIAogSQHxjpKFEdQFEBXEXiwQCLhWBuARIAZADQDJAbF7CSQF7CSDxCeQDuCeDygxQDzgxGJjOQGLjNFMghQFNgfKiFRQKkFUNQnvQNTnsVlNWQJkEeIpnVQInnYEtKtMAAAAkFMjvrAAAg");
	this.shape_33.setTransform(767.025,154.8597);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#3399CC").s().p("Eh31AXDMAALghIQDpjfDdhaQDEhFBrgRQBrgSCuAdQCzAZB+AgQB1AnB2gnQCCgvC8hoQDBhrCpgnQC/gyE/BgQFXBNGSjFIApgTQH4juKTEnQFJBbEdi2QCMhZBxASIAYACQDIAbF3CRQF3CQDuCdQDsCcDvgxQDwgwGGjLQGHjLFIggQFJgfKbFOQKeFRNHnqQNJnlVXNNQJdEcIjnQQIhnSEqKmMAAAAkEMjvrAAAg");
	this.shape_34.setTransform(767.025,154.9236);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#3399CC").s().p("Eh31AXDMAALghIQDujkDghaQDKhGBsgRQBtgRCyAfQC2AbCAAiQB4AoB4gmQCEgwDAhqQDFhtCsgnQDBgyFGBkQFeBQGZjJIApgTQH/jzKhEwQFPBeEii8QCPhbByASIAZADQDFAbFzCPQF0CODrCbQDqCbDsgwQDugwGBjIQGDjJFFggQFGgeKTFLQKXFNM+njQNBngVHNFQJXEZIdnKQIcnMEmKeMAAAAkFMjvrAAAg");
	this.shape_35.setTransform(767.025,154.9764);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#3399CC").s().p("Eh31AXDMAALghIQDyjoDlhbQDOhHBugQQBvgQC1AgQC6AdCDAkQB5ArB7goQCGgvDEhsQDIhwCwgnQDEgyFMBoQFkBVGhjOIAqgUQIGj4KvE6QFVBhEmjBQCSheB0ATIAYACQDEAbFvCNQFvCNDpCaQDnCYDqgvQDrgvF+jGQF/jGFBgfQFDgeKMFHQKPFKM1ndQM4nZU5M8QJQEWIXnEQIWnHEjKXMAAAAkFMjvrAAAg");
	this.shape_36.setTransform(767.025,154.9859);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#3399CC").s().p("Eh31AXDMAALghIQD3jtDphbQDShIBwgPQBxgQC5AiQC+AfCEAmQB8AtB9goQCJgwDHhuQDMhxCzgnQDHgzFTBtQFqBYGojTIArgUQINj9K8FDQFbBkEsjGQCUhgB2ATIAYACQDBAbFrCLQFsCMDnCYQDkCXDngvQDpguF6jEQF6jEE+geQE/gdKFFEQKJFGMsnXQMvnTUqM0QJJETIRm/QIQnBEgKQMAAAAkFMjvrAAAg");
	this.shape_37.setTransform(767.025,154.9687);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#3399CC").s().p("Eh31AXDMAALghIQD7jxDthcQDXhIBygPQBygPC9AkQDCAhCHAoQB+AvB/goQCLgwDLhxQDQhzC2gnQDKgzFZBxQFwBcGwjYIAsgUQIUkCLKFMQFgBoExjMQCXhjB4ATIAXADQDAAaFnCKQFnCKDlCWQDiCWDlguQDlguF2jBQF3jBE6geQE8gdJ+FBQKBFDMjnRQMmnNUbMrQJDEQILm5QIKm7EdKJMAAAAkEMjvrAAAg");
	this.shape_38.setTransform(767.025,154.9388);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#3399CC").s().p("Eh31AXDMAALghIQEAj1DxhdQDbhJB0gOQB0gPDBAmQDFAjCJAqQCAAxCCgpQCNgwDPhyQDUh2C5gnQDNgyFgB0QF1BgG4jcIAsgVQIckHLYFWQFlBqE3jRQCZhlB6AUIAXACQC+AaFjCJQFjCIDiCVQDgCTDhgtQDkgtFyi/QFyi/E3gdQE5gcJ2E9QJ7FAMZnLQMenHUMMiQI8EOIGmzQIDm2EaKCMAAAAkEMjvrAAAg");
	this.shape_39.setTransform(767.025,154.9165);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#3399CC").s().p("Eh31AXEMAALghIQEFj6D1hdQDfhKB2gOQB2gODFAoQDJAlCKAsQCDAyCEgoQCPgxDTh0QDYh4C8gnQDQgyFmB4QF8BkHAjhIAsgVQIjkNLlFgQFrBuE8jXQCchoB7AUIAXADQC8AZFfCIQFgCGDfCTQDdCSDfgtQDigsFui8QFui9EzgcQE1gbJwE5QJzE9MRnGQMUnAT9MaQI2ELIAmuQH9mwEXJ6MAAAAkFMjvrAAAg");
	this.shape_40.setTransform(767.025,154.8861);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#3399CC").s().p("Eh31AXEMAALghIQEJj+D6heQDjhLB4gNQB4gODIAqQDNAnCNAuQCFA1CGgpQCSgxDWh3QDch5C/goQDSgyFuB8QGBBoHIjlIAtgWQIqkSLzFpQFxBxFAjbQCfhrB9AVIAXACQC6AZFbCGQFbCFDdCRQDbCRDcgsQDggsFpi6QFqi6EwgcQEygbJoE2QJsE6MInAQMLm6TvMRQIvEJH6moQH4mrETJzMAAAAkFMjvrAAAg");
	this.shape_41.setTransform(767.025,154.8554);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#3399CC").s().p("Eh31AXEMAALghIQEOkCD9hfQDphLB5gNQB6gNDMAsQDQApCPAwQCIA2CIgpQCUgxDah5QDgh7DCgoQDVgyF0CAQGIBsHPjqIAugWQIxkXMAFyQF3B0FGjgQCghuCAAVIAWADQC4AZFXCEQFYCEDaCPQDYCPDagsQDdgqFmi4QFli4EtgcQEvgZJhEyQJlE2L+m5QMDm0TgMIQIoEGH0miQHymlEQJsMAAAAkEMjvrAAAg");
	this.shape_42.setTransform(767.025,154.8326);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#3399CC").s().p("Eh31AXEMAALghIQESkGEChgQDthMB7gMQB7gMDQAtQDUArCSAyQCJA4CLgpQCWgyDeh6QDkh+DFgnQDYgzF7CEQGNBxHXjwIAugWQI5kcMOF8QF8B3FLjmQCjhwCCAVIAWADQC2AZFTCCQFTCCDZCOQDUCNDZgrQDagqFhi1QFii1EpgbQErgZJaEvQJeEyL2mzQL5muTRMAQIiEDHumdQHsmfENJlMAAAAkEMjvrAAAg");
	this.shape_43.setTransform(767.025,154.8015);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#3399CC").s().p("Eh31AXFMAALghIQEXkLEGhgQDxhOB9gLQB9gLDUAvQDYAtCTA0QCMA6CNgqQCYgyDih8QDoiADIgoQDbgyGBCIQGUB0Hej0IAvgXQJAkhMcGGQGBB6FQjrQCmhzCEAWIAVACQC0AZFPCBQFQCBDVCMQDTCLDWgqQDYgpFdizQFdizEmgbQEogYJTErQJWEwLtmtQLxmoTCL3QIbEAHomWQHmmaEKJdMAAAAkFMjvrAAAg");
	this.shape_44.setTransform(767.025,154.7702);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#3399CC").s().p("Eh31AXFMAALghIQEbkPEKhgQD2hPB/gLQB/gLDXAyQDcAuCWA3QCOA8CPgrQCagxDmh/QDriCDMgoQDegyGICMQGZB4Hmj5IAwgXQJHkmMpGPQGHB+FWjxQCoh1CFAWIAWACQCyAZFLB/QFMB/DSCLQDRCJDTgpQDWgpFZiwQFZixEigaQElgYJLEoQJQEsLkmnQLnmhSzLuQIVD+HimRQHgmVEHJXMAAAAkEMjvrAAAg");
	this.shape_45.setTransform(767.025,154.7469);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#3399CC").s().p("Eh31AXFMAALghIQEgkUEOhgQD6hQCBgKQCBgKDbAzQDfAwCYA5QCRA+CRgrQCdgyDpiAQDviEDOgoQDigzGOCQQGfB9Huj+IAxgYQJOkrM3GYQGMCBFbj2QCrh3CHAWIAVACQCwAZFHB9QFHB+DRCJQDOCIDRgpQDTgoFViuQFViuEfgaQEhgXJFElQJIEoLbmhQLfmbSkLmQIOD7HcmMQHamOEEJPMAAAAkEMjvrAAAg");
	this.shape_46.setTransform(767.025,154.7152);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#3399CC").s().p("Eh31AXGMAALghIQEkkYEThiQD+hQCDgKQCCgJDfA1QDjAyCbA7QCSBACUgrQCfgzDuiCQDyiGDRgoQDkgzGWCUQGlCAH2kCIAwgYQJWkxNEGiQGTCFFgj8QCth6CJAXIAVACQCuAYFDB8QFDB8DOCHQDMCHDOgpQDRgnFRirQFRisEbgZQEegXI9EiQJBElLSmbQLWmVSVLdQIID4HWmGQHVmJEAJIMAAAAkFMjvrAAAg");
	this.shape_47.setTransform(767.025,154.6834);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#3399CC").s().p("Eh31AXGMAALghIQEpkdEXhiQEChRCFgJQCEgJDjA3QDnA0CcA9QCVBCCWgsQChgyDyiFQD2iHDUgpQDngyGcCYQGrCEH+kHIAxgZQJdk2NSGsQGYCHFlkBQCwh8CLAXIAUACQCsAYFAB7QE+B6DMCGQDKCEDMgoQDOgmFMipQFNipEYgZQEagWI2EeQI7EiLJmVQLNmPSGLVQIBD1HRmAQHOmDD9JAMAAAAkFMjvrAAAg");
	this.shape_48.setTransform(767.025,154.6598);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#3399CC").s().p("Eh31AXGMAALghIQEtkhEbhiQEIhSCGgJQCGgIDmA5QDrA2CeA/QCYBECYgsQCjgzD2iHQD6iJDXgpQDqgzGjCcQGxCJIFkMIAygZQJkk7NfG1QGeCLFqkHQCzh/CNAYIAUACQCqAXE7B5QE7B5DKCEQDHCDDJgnQDMgmFIimQFJinEUgYQEXgVIvEaQIzEfLAmPQLEmJR4LMQH6DyHLl6QHIl+D6I6MAAAAkEMjvrAAAg");
	this.shape_49.setTransform(767.025,154.6276);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#3399CC").s().p("Eh31AXHMAALghIQEyklEfhkQEMhTCIgHQCIgIDqA7QDuA4ChBAQCZBGCbgsQCmgzD5iJQD+iLDagpQDtgzGpCgQG3CNINkRIAzgaQJrlANtG/QGjCOFwkMQC1iCCOAYIAVACQCnAYE3B3QE4B4DHCCQDECBDHgmQDJgmFEikQFFikERgXQEUgVInEXQItEbK2mJQK7mDRpLEQH0DwHFl1QHCl4D3IyMAAAAkFMjvrAAAg");
	this.shape_50.setTransform(767.025,154.5953);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#3399CC").s().p("Eh31AXHMAALghIQE3kqEjhkQEQhTCJgHQCKgIDuA9QDyA6CjBDQCcBHCdgsQCog0D9iKQECiODdgpQDwgyGwCkQG8CQIVkWIAzgZQJzlGN6HIQGpCRF1kQQC3iFCRAZIAUACQCmAXEyB2QE0B2DFCAQDCCADEgmQDHglFAihQFAiiEOgXQEQgUIhETQIlEYKumDQKyl8RaK7QHtDtG/lvQG8lzD0IrMAAAAkFMjvrAAAg");
	this.shape_51.setTransform(767.025,154.5714);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#3399CC").s().p("Eh31AXHMAALghIQE7kuEnhkQEVhVCLgGQCMgHDyA/QD2A8ClBEQCeBKCfgtQCqgzEBiNQEGiQDggpQDzgzG2CoQHDCVIckbIA0gaQJ6lKOIHRQGvCVF5kWQC6iICTAZIATACQCkAXEvB0QEwB1DCB/QDAB+DBglQDFglE8ifQE8ifEKgWQENgUIZEQQIeEVKll9QKpl3RLKzQHoDqG4lpQG2ltDxIkMAAAAkEMjvrAAAg");
	this.shape_52.setTransform(767.025,154.5388);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#3399CC").s().p("Eh31AXHMAALghIQFAkyErhlQEZhVCNgGQCOgGD1BAQD6A+CnBHQChBLChgtQCsg0EFiPQEJiRDkgqQD1gyG+CsQHICYIlkfIA0gbQKBlPOWHbQG0CXF/kbQC8iKCVAaIATACQChAWErBzQEsBzDAB9QC9B8DAgkQDBgkE4icQE4idEHgWQEKgTISENQIXERKbl3QKhlwQ8KqQHhDnGylkQGxlnDtIdMAAAAkEMjvrAAAg");
	this.shape_53.setTransform(767.025,154.5061);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#3399CC").s().p("Eh31AXIMAALghIQFEk3EwhmQEdhWCPgFQCQgGD5BDQD9BACqBIQCiBOCkguQCug0EJiRQENiTDngqQD4gyHECwQHPCcIskkIA1gbQKIlVOjHlQG6CbGEkhQC/iNCWAaIATACQCgAWEnByQEoBxC9B8QC7B6C9gkQC/giE0ibQE0iaEDgVQEGgTILEJQIQEOKTlwQKXlrQuKiQHaDkGsleQGrlhDqIVMAAAAkFMjvrAAAg");
	this.shape_54.setTransform(767.025,154.4819);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#3399CC").s().p("Eh31AXIMAALghIQFJk7E0hmQEihXCQgFQCRgFD+BFQEABBCsBLQClBQCnguQCwg1EMiTQERiVDqgqQD7gyHLCzQHUChI0kpIA1gbQKQlaOxHuQG/CeGKkmQDBiPCXAaIATACQCeAWEkBwQEkBvC7B6QC4B5C6gjQC9giEviYQEwiYEAgVQEDgRIEEFQIJELKJlrQKPlkQeKZQHUDiGmlZQGllcDnIPMAAAAkEMjvrAAAg");
	this.shape_55.setTransform(767.025,154.4491);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#3399CC").s().p("Eh31AXIMAALghIQFNk/E4hnQEnhYCSgEQCTgEEBBGQEFBDCuBNQCnBSCpguQCyg1EQiVQEViYDtgqQD+gyHRC4QHbCkI7ktIA2gcQKXlfO+H3QHFCiGPksQDDiRCaAaIATACQCcAWEfBuQEgBuC5B5QC1B3C4gjQC7ghEriWQEsiVD8gUQEAgSH8EDQICEHKBllQKFldQQKQQHNDfGglTQGflWDkIHMAAAAkEMjvrAAAg");
	this.shape_56.setTransform(767.025,154.4161);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#3399CC").s().p("Eh31AXJMAALghIQFSlEE8hoQErhYCUgEQCVgDEFBIQEIBFCwBPQCpBUCsgvQC0g1EUiXQEZiaDwgqQEBgyHYC8QHgCoJDkyIA3gcQKdllPNIBQHKClGUkxQDGiUCcAbIASACQCaAVEcBtQEcBtC2B2QCzB2C1giQC4ghEoiTQEniTD5gUQD8gQH2D/QH6EDJ4leQJ8lYQBKIQHHDcGblNQGYlRDhIAMAAAAkFMjvrAAAg");
	this.shape_57.setTransform(767.025,154.3917);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#3399CC").s().p("Eh31AXJMAALghIQFWlIFBhpQEvhZCWgDQCXgDEIBKQEMBHCyBRQCsBWCugvQC2g2EYiZQEdibDzgqQEEgzHeDAQHmCsJLk3IA4gcQKklqPaILQHRCnGYk2QDJiWCeAbIASACQCYAVEXBrQEYBrC0B1QCxB0CzghQC1ggEjiRQEkiQD1gTQD5gQHuD7QH0EBJulZQJ0lRPyJ/QHADZGVlHQGSlLDeH4MAAAAkFMjvrAAAg");
	this.shape_58.setTransform(767.025,154.3585);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#3399CC").s().p("Eh31AXJMAALghIQFblMFEhpQE0haCYgDQCYgCENBMQEPBJC1BTQCuBYCwgwQC4g1EdicQEgidD2gqQEGgzHmDEQHsCwJTk8IA3gdQKsluPoIUQHWCrGdk8QDMiZCgAcIARACQCWAUEUBqQEUBqCxBzQCvByCwghQCzgfEfiOQEfiODygTQD1gPHoD4QHsD9JmlSQJqlMPkJ3QG5DWGPlBQGNlGDaHyMAAAAkEMjvrAAAg");
	this.shape_59.setTransform(767.025,154.3252);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#3399CC").s().p("Eh31AXJMAALghIQFflQFJhqQE4hbCagCQCagCEQBOQEUBLC2BVQCxBaCygwQC7g2EgidQEkigD5gqQEJgzHsDIQHyC0JblAIA4gdQKzl0P2IdQHbCuGjlAQDNicCiAcIASACQCUAUEPBoQERBpCvBxQCrBxCuggQCxgfEaiMQEciMDugRQDygPHgD0QHlD6JdlMQJilFPUJtQGzDUGJk8QGHlADXHrMAAAAkEMjvrAAAg");
	this.shape_60.setTransform(767.025,154.3006);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#3399CC").s().p("Eh31AXKMAALghIQFklVFNhrQE8hcCcgBQCcgBEUBQQEXBNC5BXQCyBbC1gwQC9g2EkifQEoiiD8gqQEMgzHzDMQH4C4JilFIA5geQK6l5QDInQHhCyGolGQDQifCkAdIARABQCSAVEMBmQEMBnCtBwQCpBuCrgfQCugeEXiJQEXiJDrgSQDvgOHZDxQHeD3JTlHQJZk/PGJmQGsDRGDk3QGBk6DUHjMAAAAkFMjvrAAAg");
	this.shape_61.setTransform(767.025,154.2672);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#3399CC").s().p("Eh31AXKMAALghIQFplZFRhrQFBhdCdAAQCegBEXBSQEbBPC7BZQC1BdC3gwQC/g3EoihQErikEAgqQEPgzH5DQQH+C8JqlKIA6geQLBl+QRIwQHlC1GulMQDTihCmAdIARACQCQAUEHBlQEJBlCqBvQCnBtCogfQCsgeESiGQETiHDogRQDrgOHSDuQHXDzJLlAQJQk5O2JdQGmDOF9kwQF7k1DRHcMAAAAkEMjvrAAAg");
	this.shape_62.setTransform(767.025,154.2416);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#3399CC").s().p("Eh31AXKMAALghIQFtleFVhrQFGheCfAAQCfAAEcBUQEeBRC+BbQC3BfC5gwQDBg3EsijQEvimEDgrQESgyH/DTQIFDBJxlPIA6gfQLJmDQeI5QHrC5G0lRQDVikCoAeIAQABQCOAUEEBkQEEBjCoBtQCkBrCngeQCpgdEOiEQEPiEDkgRQDogNHKDrQHRDvJBk6QJHkzOoJVQGfDLF3krQF1kvDOHVMAAAAkEMjvrAAAg");
	this.shape_63.setTransform(767.025,154.208);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#3399CC").s().p("Eh31AXLMAALghIQFyliFZhsQFKhfChABQChAAEfBWQEjBSC/BeQC6BhC7gxQDEg3EvilQEzioEGgrQEVgzIGDYQIKDEJ5lTIA7gfQLQmIQsJCQHxC8G4lWQDYimCpAdIARACQCMAUEABhQEABiClBrQCiBqCkgdQCngdEKiBQEKiCDhgQQDlgMHDDnQHJDsI4k0QI/ktOYJMQGZDJFxkmQFvkpDLHNMAAAAkFMjvrAAAg");
	this.shape_64.setTransform(767.025,154.1833);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#3399CC").s().p("Eh31AXLMAALghIQF2lmFehtQFOhfCjABQCjABEjBXQEmBVDCBfQC7BkC+gyQDGg3EzinQE3iqEJgrQEXgzINDcQIRDIKBlYIA7ggQLXmNQ6JMQH2C/G+lbQDaipCrAeIAQACQCKATD8BgQD9BhCiBpQCgBoChgdQCkgbEGiAQEHh/DdgPQDhgMG8DjQHCDpIwkuQI1kmOKJDQGSDGFrkgQFqkkDHHHMAAAAkEMjvrAAAg");
	this.shape_65.setTransform(767.025,154.1495);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#3399CC").s().p("Eh31AXLMAALghIQF7lrFhhtQFThgClACQClABEmBaQEqBWDEBiQC+BlDAgyQDIg3E3iqQE7isEMgrQEagyIUDfQIWDNKJleIA8ggQLemSRHJWQH8DCHDlhQDdirCtAeIAQACQCIATD4BfQD4BeChBoQCcBmCfgcQCigaECh9QECh9DagPQDegLG1DgQG7DmImkpQItkgN7I7QGLDDFlkaQFkkeDEG/MAAAAkEMjvrAAAg");
	this.shape_66.setTransform(767.025,154.1158);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#3399CC").s().p("Eh31AXMMAALghIQF/lvFmhuQFXhiCnADQCmACErBcQEtBYDGBjQDBBoDCgzQDKg3E7isQE/iuEPgrQEdgyIaDjQIcDQKRliIA8ggQLmmXRVJfQIBDFHIlmQDgiuCvAfIAPABQCGATD0BeQD1BdCeBmQCaBkCcgbQCggaD9h7QD/h6DWgOQDagLGuDdQG0DiIdkiQIkkaNsIyQGFDAFgkUQFdkZDBG4MAAAAkFMjvrAAAg");
	this.shape_67.setTransform(767.025,154.0909);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#3399CC").s().p("Eh31AXMMAALghIQGEl0FqhuQFbhiCpADQCoADEuBdQEyBaDIBmQDCBpDFgzQDMg4E/itQFDiwESgsQEggyIhDoQIiDUKYlnIA9ghQLtmcRhJoQIIDJHOlsQDhiwCyAfIAPACQCEASDwBcQDwBcCcBkQCYBjCZgbQCegZD5h4QD6h5DTgNQDXgKGnDZQGsDfIVkcQIakUNeIpQF+C+FakOQFXkTC+GwMAAAAkFMjvrAAAg");
	this.shape_68.setTransform(767.025,154.057);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#3399CC").s().p("Eh31AXMMAALghIQGIl4FvhvQFghjCqAEQCqAEEyBfQE1BcDKBnQDFBrDHgyQDPg5FCivQFHiyEVgsQEjgyInDrQIoDZKglsIA+ghQL0miRvJyQIODMHSlxQDkizCzAgIAPABQCCATDsBaQDtBaCZBjQCVBhCYgaQCagZD2h2QD2h1DPgNQDUgKGfDWQGmDcILkWQISkONOIhQF4C7FUkJQFRkOC7GqMAAAAkEMjvrAAAg");
	this.shape_69.setTransform(767.025,154.023);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#3399CC").s().p("Eh31AXNMAALghIQGNl9FyhvQFlhkCsAEQCsAEE2BhQE4BfDNBpQDHBtDJgzQDRg5FGixQFLi0EYgsQEmgyIuDvQIuDcKnlwIA/ghQL7mnR8J7QIUDPHYl2QDmi2C1AgIAPACQCAASDoBZQDpBYCWBhQCTBgCVgaQCYgYDxhzQDyhzDMgNQDQgIGZDSQGeDYIDkQQIIkHNAIYQFxC4FOkDQFLkIC4GiMAAAAkFMjvrAAAg");
	this.shape_70.setTransform(767.025,153.998);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#3399CC").s().p("Eh31AXNMAALghIQGRmBF3hwQFphlCuAFQCtAFE6BjQE8BgDPBrQDKBvDLgzQDTg5FLi0QFNi2EcgrQEogzI1D0QI0DgKwl1IA+giQMDmsSKKFQIZDSHdl8QDpi4C3AhIAPABQB+ASDkBXQDkBXCUBgQCRBdCSgZQCWgXDthxQDuhxDIgLQDNgJGRDPQGYDVH5kKQIAkBMxIPQFqC2FIj+QFGkCC0GbMAAAAkFMjvrAAAg");
	this.shape_71.setTransform(767.025,153.9639);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#3399CC").s().p("Eh31AXNMAALghIQGWmFF7hxQFthlCwAFQCvAGE+BkQFABjDRBtQDLBxDOg0QDVg5FPi2QFRi4EfgsQErgyI8D3QI6DlK3l6IA/gjQMKmxSYKPQIeDVHimBQDsi7C5AhIAOACQB8ARDgBWQDhBVCSBeQCOBcCPgYQCUgXDphuQDphuDFgMQDKgHGKDLQGQDSHwkEQH3j7MiIHQFkCyFCj4QFAj8CxGUMAAAAkEMjvrAAAg");
	this.shape_72.setTransform(767.025,153.9298);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#3399CC").s().p("Eh31AXNMAALghIQGbmJF+hyQFyhmCxAGQCyAGFBBnQFEBkDTBvQDOBzDQg0QDXg5FTi4QFVi6EigsQEugzJCD8QJADoK/l/IBAgiQMRm3SlKYQIkDZHomGQDui+C7AiIANABQB7ARDcBUQDcBUCQBdQCLBaCNgYQCRgWDlhsQDlhsDCgKQDGgHGDDIQGJDOHoj+QHuj1MTH+QFdCwE8jyQE6j3CuGNMAAAAkEMjvrAAAg");
	this.shape_73.setTransform(767.025,153.9047);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#3399CC").s().p("Eh31AXOMAALghIQGfmOGDhyQF2hnCzAHQC0AGFFBoQFHBmDWByQDQB1DSg1QDag5FWi6QFZi8ElgsQExgzJJEAQJFDsLHmEIBBgjQMYm7SzKhQIpDcHtmLQDxjAC8AhIAOACQB4ARDYBSQDZBTCNBaQCJBZCLgXQCOgWDhhpQDhhqC+gKQDDgGF8DFQGCDKHej3QHljvMEH1QFXCuE2jtQE0jxCrGFMAAAAkFMjvrAAAg");
	this.shape_74.setTransform(767.025,153.8705);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#3399CC").s().p("Eh31AXOMAALghIQGkmSGHhzQF7hoC0AIQC1AHFJBqQFLBoDYB0QDTB3DUg1QDcg6Fai8QFdi+EogsQE0gzJPEDQJMDxLOmJIBBgjQMgnBTAKrQIwDfHymQQDzjDC+AiIAOABQB2ARDUBRQDVBRCKBZQCHBXCIgWQCMgVDchnQDdhnC7gKQDAgGF0DBQF7DIHVjyQHcjoL2HtQFQCqEwjnQEujsCoF/MAAAAkEMjvrAAAg");
	this.shape_75.setTransform(767.025,153.8363);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#3399CC").s().p("Eh31AXOMAALghIQGomWGMh0QF/hoC2AIQC3AHFNBsQFPBqDZB2QDVB5DXg2QDeg6Fei+QFhjAErgsQE3gzJWEIQJRD0LWmNIBCgkQMnnGTOK1QI1DiH3mWQD2jFDAAiIANACQB0AQDQBPQDRBQCIBXQCEBVCGgVQCKgVDYhkQDZhlC3gJQC8gFFtC+QF1DEHMjsQHTjiLnHkQFJCoErjhQEnjmClF3MAAAAkEMjvrAAAg");
	this.shape_76.setTransform(767.025,153.8111);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#3399CC").s().p("Eh31AXPMAALghIQGtmbGPh0QGEhqC4AJQC5AIFQBuQFTBsDcB4QDXB6DZg1QDgg7FijAQFljBEugtQE5gzJdEMQJYD4LemSIBCgkQMunLTbK+QI7DlH8mbQD5jIDCAjIANABQByAQDMBOQDNBOCFBWQCCBTCDgVQCHgTDVhiQDUhiC0gJQC5gFFmC7QFtDBHDjmQHKjcLYHbQFDClEljbQEijhChFwMAAAAkFMjvrAAAg");
	this.shape_77.setTransform(767.025,153.7767);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#3399CC").s().p("Eh31AXPMAALghIQGxmfGUh1QGIhqC6AJQC7AJFUBwQFWBuDeB5QDaB9Dbg2QDjg7FljCQFpjDExgtQE8gzJkEQQJdD8LmmXIBDglQM0nQTqLIQJADoICmgQD6jLDFAkIAMABQBwAQDIBMQDJBMCDBUQCABSCAgUQCFgTDQhgQDRhfCwgIQC1gEFfC3QFmC9G6jfQHCjXLJHUQE8CiEfjWQEcjbCeFpMAAAAkEMjvrAAAg");
	this.shape_78.setTransform(767.025,153.7424);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#3399CC").s().p("Eh31AXPMAALghIQG2mjGYh1QGMhsC8AKQC8AJFYByQFaBwDhB8QDbB+Deg2QDlg7FpjEQFsjGE1gtQE/gzJqEUQJjEALumbIBDglQM8nWT3LRQJGDsIHmmQD9jNDGAkIANABQBuAQDEBKQDFBLCBBTQB8BQB/gUQCCgSDMhdQDMheCtgHQCygDFYCzQFfC6GxjZQG4jQK6HKQE2CgEZjRQEWjVCbFiMAAAAkEMjvrAAAg");
	this.shape_79.setTransform(767.025,153.7171);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#3399CC").s().p("Eh31AXQMAALghIQG6moGch2QGRhsC+AKQC+AKFcB0QFeByDiB9QDeCBDgg3QDng7FtjGQFwjIE4gtQFCgzJxEYQJpEEL1mgIBEgmQNDnaUFLaQJMDvILmrQEAjQDIAlIAMABQBsAPDBBJQDBBKB+BQQB6BPB8gTQB/gSDIhbQDJhaCpgHQCvgDFQCwQFYC3GojUQGwjJKrHBQEvCdETjKQEQjQCYFaMAAAAkFMjvrAAAg");
	this.shape_80.setTransform(767.025,153.6827);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#3399CC").s().p("Eh31AXQMAALghIQG/msGgh2QGVhuDAALQDAALFfB2QFiBzDlCAQDgCDDjg3QDog8FxjIQF0jKE7gtQFFgzJ3EcQJvEIL9mlQAigSAjgUQNKngUTLkQJRDzIRmxQECjSDKAkIAMABQBqAQC8BHQC9BIB8BPQB4BNB5gTQB9gRDEhYQDEhYCmgGQCrgDFKCtQFQCzGgjNQGmjEKcG6QEpCaENjFQEKjKCVFTMAAAAkEMjvrAAAg");
	this.shape_81.setTransform(767.025,153.6482);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#3399CC").s().p("Eh31AXQMAALghIQHDmwGlh3QGahuDBALQDCAMFjB3QFlB2DnCBQDjCFDlg4QDqg7F1jKQF4jME+guQFIgyJ+EfQJ1EMMEmqIBGgmQNRnlUgLuQJXD1IWm2QEFjVDMAlIALACQBoAPC5BGQC5BGB5BNQB2BLB2gSQB7gQC/hWQDBhWCigFQCogCFCCpQFKCwGWjHQGei9KNGwQEiCXEHi/QEEjECSFMMAAAAkEMjvrAAAg");
	this.shape_82.setTransform(767.025,153.6229);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#3399CC").s().p("Eh31AXRMAALghIQHIm1Gph4QGehvDDANQDDALFnB6QFpB3DqCEQDkCHDog4QDtg8F4jMQF8jOFBguQFKgzKFEkQJ7EQMMmvIBGgmQNYnqUvL3QJcD4Icm7QEHjXDOAlIALABQBmAPC0BEQC1BFB3BMQBzBJB0gRQB5gPC7hUQC8hTCfgGQClgBE7CmQFCCtGNjBQGVi4J/GoQEbCVEBi6QD/i+COFEMAAAAkFMjvrAAAg");
	this.shape_83.setTransform(767.025,153.5883);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#3399CC").s().p("Eh31AXRMAALghIQHNm5Gsh5QGjhwDFANQDFANFrB7QFtB5DrCGQDnCJDqg4QDvg9F9jOQF/jQFEgtQFNgzKMEnQKBEUMUmzIBGgnQNfnvU8MAQJiD8IhnAQEKjaDPAlIALABQBkAPCxBDQCxBDB1BKQBwBIBygRQB1gPC4hRQC3hRCcgEQChgBE0CjQE7CpGFi7QGLixJwGfQEVCSD7i0QD5i5CLE9MAAAAkFMjvrAAAg");
	this.shape_84.setTransform(767.025,153.5537);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#3399CC").s().p("Eh31AXRMAALghIQHRm9Gxh5QGnhxDHAOQDHANFvB9QFwB7DtCIQDqCKDsg4QDxg9GBjQQGDjSFHguQFQgyKSErQKHEYMcm4IBHgnQNmn1VKMKQJnD/ImnGQENjcDRAmIALABQBiAOCsBCQCuBBByBJQBuBGBvgQQBzgOCzhPQC0hPCYgEQCeABEtCeQE0CnF7i2QGDirJhGXQEOCPD2iuQDyizCIE2MAAAAkEMjvrAAAg");
	this.shape_85.setTransform(767.025,153.5284);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#3399CC").s().p("Eh31AXSMAALghIQHWnCG1h6QGrhxDJAOQDJAOFyB/QF0B9DwCKQDrCMDvg5QDzg8GFjTQGHjUFKguQFTgyKZEvQKMEcMkm9IBIgoQNtn5VYMTQJtEDIrnMQEOjfDUAnIAKABQBhAOCoBAQCpBABwBGQBrBFBtgQQBxgNCvhMQCvhMCVgEQCbABElCbQEtCjFyivQF6ilJSGOQEICNDwipQDsiuCFEvMAAAAkFMjvrAAAg");
	this.shape_86.setTransform(767.025,153.4937);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#3399CC").s().p("Eh31AXSMAALghIQHanHG5h6QGwhyDLAPQDLAOF2CBQF4B/DxCMQDuCODxg5QD2g9GIjUQGLjWFNguQFWgzKfEzQKTEgMrnBIBIgpQN1n+VlMdQJzEFIwnQQERjiDWAnIAKABQBeAOClA+QClA+BtBFQBpBDBqgOQBvgNCqhKQCshKCRgDQCXACEfCYQEmCfFpipQFxifJDGGQEBCJDqiiQDmipCCEoMAAAAkFMjvrAAAg");
	this.shape_87.setTransform(767.025,153.4709);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#3399CC").s().p("Eh31AXSMAALghIQHfnKG9h7QG0hzDNAPQDMAPF6CDQF8CBD0COQDwCQDzg6QD4g9GMjWQGOjYFRguQFZgzKmE3QKYEkMznGIBJgpQN8oDVzMmQJ4EJI2nWQETjlDYAoIAJABQBdANCgA9QChA9BrBDQBnBBBngOQBsgMCnhHQCnhICOgCQCUACEXCVQEfCcFgijQFoiZI1F9QD6CHDkidQDgijB/EhMAAAAkEMjvrAAAg");
	this.shape_88.setTransform(767.025,153.4455);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#3399CC").s().p("Eh31AXSMAALghIQHjnPHCh7QG5h0DOAQQDOAPF+CFQF/CDD2CQQDzCSD1g6QD6g9GQjZQGSjaFUguQFbgzKtE7QKfEoM6nLQAlgTAlgWQODoIWAMvQJ+EMI7nbQEWjnDZAoIAKABQBaANCdA7QCdA8BoBBQBkBABmgOQBpgLCjhFQCjhFCKgCQCRADEPCRQEYCZFXidQFgiTIlF1QD0CEDeiYQDbidB7EaMAAAAkEMjvrAAAg");
	this.shape_89.setTransform(767.025,153.4108);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#3399CC").s().p("Eh31AXTMAALghIQHonUHGh8QG9h1DQARQDQAQGBCHQGDCFD5CSQD0CUD4g6QD8g+GUjbQGWjcFXguQFegzKzE/QKlEsNCnQIBLgpQOKoOWOM5QKDEQJAnhQEZjqDbApIAJAAQBZANCYA6QCaA6BmBAQBhA+BjgNQBngLCehCQCfhDCHgBQCNADEJCOQERCVFOiXQFWiMIXFsQDtCBDYiSQDViXB4ESMAAAAkFMjvrAAAg");
	this.shape_90.setTransform(767.025,153.376);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#3399CC").s().p("Eh31AXTMAALghIQHsnYHKh9QHCh1DSARQDSARGFCIQGHCHD6CUQD3CWD6g7QD+g+GYjcQGajeFagvQFhgzK6FEQKrEwNKnVIBKgqQOSoTWbNDQKKESJFnmQEbjsDdApIAJABQBWAMCVA4QCVA5BkA+QBfA8BggMQBlgKCahAQCbhACDgBQCKAEEBCKQEKCSFFiRQFOiFIHFjQDnB+DSiMQDPiSB1ELMAAAAkFMjvrAAAg");
	this.shape_91.setTransform(767.025,153.3505);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#3399CC").s().p("Eh31AXTMAALghIQHxncHOh9QHGh3DUASQDTARGJCLQGLCJD9CWQD5CYD8g7QEBg/GbjeQGejgFdgvQFkgzLAFHQKxE1NSnaIBLgqQOZoYWpNMQKPEVJKnrQEejvDfApIAJABQBUANCQA2QCSA3BhA9QBdA6BdgLQBigKCWg9QCXg+CAAAQCGAED7CHQEDCPE8iLQFEiAH5FbQDgB8DMiHQDJiMByEEMAAAAkEMjvrAAAg");
	this.shape_92.setTransform(767.025,153.3157);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#3399CC").s().p("Eh31AXUMAALghIQH1nhHTh+QHKh3DWASQDVASGNCNQGOCKD/CYQD8CbD+g8QEDg+GfjhQGijiFggvQFngzLHFLQK2E4NaneIBMgrQOgodW3NWQKUEZJQnxQEgjxDhApIAIABQBSAMCNA1QCNA1BfA8QBaA4BbgLQBggJCSg7QCTg7B8ABQCDAFDzCDQD8CMEziFQE7h6HrFSQDaB5DFiBQDDiGBvD8MAAAAkFMjvrAAAg");
	this.shape_93.setTransform(767.025,153.2809);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#3399CC").s().p("Eh31AXUMAALghIQH6nlHWh/QHPh4DYATQDXATGQCOQGSCMEBCbQD+CcEBg8QEFg/GjjjQGmjkFjgvQFqgyLNFPQK9E8NhnjIBNgrQOnojXENfQKaEcJVn2QEijzDjApIAIABQBRAMCIA0QCKAzBcA6QBYA3BZgLQBdgICNg4QCPg5B5ABQCAAGDsCAQD0CIEqh/QEzh0HbFKQDUB2DAh7QC8iBBsD1MAAAAkFMjvrAAAg");
	this.shape_94.setTransform(767.025,153.2554);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#3399CC").s().p("Eh31AXUMAALghIQH+npHbh/QHUh5DYATQDaAUGUCQQGWCOEDCcQEACeEDg8QEHg/GnjlQGqjmFmgvQFsgzLVFTQLCFBNpnoIBMgsQOwonXSNoQKfEgJan8QElj2DlAqIAIABQBOAMCFAxQCFAzBaA3QBWA2BWgKQBagHCKg3QCKg2B2ACQB8AGDlB8QDuCFEhh5QEphtHNFBQDNBzC6h1QC3h7BoDuMAAAAkEMjvrAAAg");
	this.shape_95.setTransform(767.025,153.2205);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#3399CC").s().p("Eh31AXVMAALghIQIDnuHfiAQHYh5DaAUQDbATGYCSQGaCREFCeQEDCgEFg8QEJhAGsjnQGsjoFqgvQFvgzLbFXQLJFENvnsQAngVAngXQO3otXfNyQKlEjJgoBQEnj5DnArIAIABQBMALCBAwQCBAxBYA2QBSA0BUgJQBYgHCGg0QCGg0ByACQB5AHDeB5QDmCCEYhzQEhhnG9E4QDHBxC0hwQCxh2BlDnMAAAAkFMjvrAAAg");
	this.shape_96.setTransform(767.025,153.1856);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#3399CC").s().p("Eh31AXVMAALghIQIInyHjiAQHch7DcAUQDdAVGcCUQGdCSEICgQEECiEIg9QEMg/GvjpQGwjqFtgwQFygyLiFbQLOFIN4nyQAngVAngXQO+oyXtN8QKrEmJkoGQEqj8DpArIAHABQBKALB9AvQB+AvBVA0QBQAyBRgIQBWgGCBgyQCCgxBvADQB2AHDWB2QDfB+EPhtQEYhhGvEwQDABuCuhqQCrhxBiDgMAAAAkFMjvrAAAg");
	this.shape_97.setTransform(767.025,153.1601);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#3399CC").s().p("Eh31AXVMAALghIQIMn2HniBQHhh8DeAWQDfAVGfCVQGhCVEKCiQEHCkEKg9QEOhAGzjrQG0jsFwgwQF1gyLoFfQLVFMN/n2IBPgtQPFo3X6OFQKxEpJqoMQEsj+DrAsIAHAAQBIALB5AuQB5AtBTAzQBOAwBOgIQBUgFB9gvQB+gvBrADQByAIDQBzQDYB6EGhmQEPhbGgEnQC5BrCohkQClhrBfDZMAAAAkEMjvrAAAg");
	this.shape_98.setTransform(767.025,153.1251);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#3399CC").s().p("Eh31AXWMAALghIQIRn7HriBQHlh9DgAWQDhAWGjCXQGlCWEMClQEJCmEMg+QEQhAG3jtQG4juFzgwQF4gzLvFjQLaFQOHn6IBPguQPMo8YJOPQK2EsJvoRQEvkADsArIAHABQBGALB1ArQB2AsBQAyQBLAuBMgHQBRgFB5gsQB6gtBoAEQBvAJDIBvQDRB3D9hhQEGhUGREeQCzBoCiheQCfhlBcDRMAAAAkFMjvrAAAg");
	this.shape_99.setTransform(767.025,153.0901);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#3399CC").s().p("Eh31AXWMAALghIQIVn/HwiCQHph+DiAXQDiAWGnCZQGpCZEOCmQEMCoEOg+QEShAG7jvQG8jxF2gvQF7gzL1FnQLgFUOPoAIBQgtQPTpCYXOYQK7EwJ0oWQEykEDuAtIAHAAQBEALBxAqQBxAqBOAwQBJAtBKgHQBOgEB1gqQB2gqBkAEQBsAKDBBrQDKB0DzhbQD+hOGCEWQCsBlCchZQCZhfBZDKMAAAAkFMjvrAAAg");
	this.shape_100.setTransform(767.025,153.0646);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#3399CC").s().p("Eh31AXWMAALghIQIaoDH0iDQHth+DkAXQDkAXGrCbQGsCaEQCpQEOCqERg/QEVhAG+jxQHAjzF5gwQF9gyL9FrQLmFYOWoFIBRguQPapGYkOhQLBEzJ6obQE0kGDwAsIAGABQBDAKBsApQBuApBLAtQBHAsBHgGQBMgEBxgnQBxgoBhAFQBoAKC6BoQDDBwDrhUQD0hIFzENQCmBjCWhUQCUhZBVDDMAAAAkEMjvrAAAg");
	this.shape_101.setTransform(767.025,153.0296);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#3399CC").s().p("Eh31AXXMAALghIQIeoIH4iDQHzh/DlAXQDmAYGvCdQGvCcETCqQEQCsETg+QEXhBHCjzQHEj1F8gwQGAgzMDFvQLsFcOeoJIBSguQPhpMYyOrQLHE2J+ogQE3kJDyAtIAGABQBAAJBpAnQBqAoBJAsQBEAqBEgFQBKgDBsgmQBuglBeAGQBkAKCzBlQC7BtDihOQDrhCFlEEQCfBgCQhOQCOhUBSC8MAAAAkFMjvrAAAg");
	this.shape_102.setTransform(767.025,152.9945);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#3399CC").s().p("Eh31AXXMAALghIQIjoMH8iEQH3iADnAYQDoAYGyCfQG0CeEUCtQETCtEVg+QEZhCHGj1QHIj2F/gwQGDgzMKFzQLyFgOmoOIBRgvQPppRY/O1QLNE5KDomQE6kLD0AtIAFABQA/AJBlAmQBlAmBHAqQBBAoBCgEQBHgDBpgiQBpgjBbAGQBhALCrBhQC1BqDZhIQDig8FVD8QCZBdCLhIQCHhOBPC0MAAAAkFMjvrAAAg");
	this.shape_103.setTransform(767.025,152.9595);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#3399CC").s().p("Eh31AXXMAALghIQInoQIBiFQH7iBDpAZQDpAZG3ChQG3CgEXCuQEVCwEYg/QEahCHKj3QHMj4GCgwQGGgzMQF3QL4FkOuoTIBSgvQPwpWZNO+QLSE8KJorQE7kOD3AuIAFAAQA8AKBhAkQBiAkBEApQA/AmBAgEQBEgBBlghQBlggBXAHQBdALCkBeQCuBnDQhDQDZg1FHDzQCSBaCFhCQCBhJBMCuMAAAAkEMjvrAAAg");
	this.shape_104.setTransform(767.025,152.9339);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#3399CC").s().p("Eh31AXYMAALghIQIsoVIEiFQIAiCDrAaQDrAZG6CjQG7CiEZCwQEXCyEahAQEdhCHOj5QHPj6GGgxQGJgyMXF6QL+FpO1oYQApgXAqgZQP3pbZaPIQLYE/KOowQE+kRD4AvIAFAAQA7AJBdAjQBdAiBCAoQA9AkA9gDQBCgBBggeQBhgdBTAHQBbAMCdBaQCmBjDHg8QDRgwE4DrQCLBYB/g9QB7hDBJCmMAAAAkFMjvrAAAg");
	this.shape_105.setTransform(767.025,152.8988);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#3399CC").s().p("Eh31AXYMAALghIQIwoZIJiGQIEiDDtAaQDtAaG+ClQG+CkEcCyQEZC0EdhAQEfhCHRj7QHTj9GJgwQGMgzMdF/QMEFsO9ocIBUgxQP+pgZoPRQLdFDKUo2QFAkTD6AvIAFAAQA4AJBZAhQBaAhA/AmQA6AjA7gDQBAAABcgcQBcgbBRAIQBWANCWBWQCgBgC+g2QDHgpEpDiQCFBVB5g3QB1g+BGCfMAAAAkFMjvrAAAg");
	this.shape_106.setTransform(767.025,152.8637);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#3399CC").s().p("Eh31AXYMAALghIQI1odINiHQIIiDDvAbQDvAaHBCnQHDCmEdC0QEcC2EfhBQEhhCHVj9QHXj/GMgwQGOgzMlGDQMJFwPFohIBUgxQQGplZ2PaQLiFGKZo7QFDkWD8AvIAEABQA3AJBVAfQBWAfA9AkQA3AiA4gCQA9AABYgZQBZgZBNAJQBTANCPBTQCYBdC1gwQC/gkEaDaQB+BSBzgxQBwg4BCCYMAAAAkEMjvrAAAg");
	this.shape_107.setTransform(767.025,152.8381);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#3399CC").s().p("Eh31AXYMAALghIQI6ohIRiIQIMiEDxAcQDwAbHGCoQHGCoEgC2QEdC4EihBQEjhCHakAQHakAGPgxQGRgzMrGHQMQF0PMomQArgXAqgaQQNpqaDPkQLpFJKdpBQFGkYD+AwIAEAAQA0AIBRAeQBSAeA7AjQA1AfA1gBQA7ABBUgXQBUgWBKAJQBQAOCHBQQCSBZCrgqQC2gdELDRQB4BPBtgsQBqgyA/CRMAAAAkEMjvrAAAg");
	this.shape_108.setTransform(767.025,152.8029);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#3399CC").s().p("Eh31AXZMAALghIQI+omIViIQISiFDyAcQDyAbHJCrQHKCpEiC5QEgC6EkhBQElhDHekCQHekCGSgxQGUgzMyGLQMVF4PVorQAqgXArgaQQUpwaRPuQLuFMKjpGQFIkaEAAvIADABQAzAIBNAcQBOAdA4AgQAzAeAzgBQA4ACBPgUQBRgUBGAKQBMAOCBBNQCKBVCjgkQCtgXD8DJQBxBMBnglQBkgtA8CJMAAAAkFMjvrAAAg");
	this.shape_109.setTransform(767.025,152.7678);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#3399CC").s().p("Eh31AXZMAALghIQJDoqIZiJQIWiGD0AdQD0AcHNCtQHNCrEkC7QEjC7EmhBQEnhDHikEQHikEGUgxQGYgzM4GPQMcF8PcowIBVgxQQcp1aeP3QL0FPKopLQFLkdEBAwIAEAAQAwAIBJAbQBKAbA2AfQAwAcAxAAQA2ACBLgRQBMgSBDAKQBJAPB5BKQCDBSCageQCkgRDuDAQBqBKBhggQBegnA5CCMAAAAkEMjvrAAAg");
	this.shape_110.setTransform(767.025,152.7421);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#3399CC").s().p("Eh31AXZMAALghIQJHovIeiJQIaiGD2AdQD2AdHQCuQHSCtEmC9QElC9EohBQEqhEHlkFQHmkGGXgyQGbgzM+GTQMhGAPlo0IBWgyQQjp6asQAQL5FTKupQQFNkgEDAwIADABQAvAHBFAZQBGAaAzAdQAuAbAuAAQAzADBIgPQBIgPA/AKQBGAQByBGQB8BPCQgYQCbgLDfC4QBkBHBbgbQBYghA2B7MAAAAkEMjvrAAAg");
	this.shape_111.setTransform(767.025,152.7188);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#3399CC").s().p("Eh31AXaMAALghIQJMozIhiKQIfiID4AeQD3AeHVCwQHVCvEoC/QEnC/ErhCQEshEHpkHQHqkIGagyQGegzNFGXQMnGEPso5QArgYAsgbQQqp+a5QJQL/FWKzpWQFPkiEGAxIADAAQAsAIBCAXQBCAYAwAcQAsAZArABQAxAEBDgNQBEgNA8ALQBCARBrBCQB1BMCIgSQCSgFDQCvQBdBEBWgVQBRgbAzBzMAAAAkFMjvrAAAg");
	this.shape_112.setTransform(767.025,152.6836);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#3399CC").s().p("Eh31AXaMAALghIQJQo4ImiKQIjiID6AeQD5AeHYCyQHZCxErDBQEpDBEthCQEuhEHtkKQHtkKGegyQGggyNMGaQMtGIP0o9IBYgzQQxqEbHQTQMEFZK4pbQFSklEIAxIADABQAqAHA9AWQA+AWAvAaQAoAXApACQAvAEA/gKQBAgKA4ALQA/ARBkA/QBtBJB/gMQCJACDBCmQBXBBBQgPQBMgWAvBsMAAAAkFMjvrAAAg");
	this.shape_113.setTransform(767.025,152.6579);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#3399CC").s().p("Eh31AXaMAALghIQJVo8IqiLQIniJD8AfQD7AfHcC0QHcCzEtDDQEsDDEvhDQEwhEHxkMQHxkMGhgyQGjgzNTGfQMyGMP8pCIBZg0QQ4qJbVQdQMKFcK9pgQFUkoEKAyIACAAQApAHA5AUQA6AVAsAZQAmAVAnADQAsAFA6gIQA8gIA1AMQA8ASBcA7QBnBFB2gGQCAAICyCeQBQA/BKgKQBGgRAsBmMAAAAkEMjvrAAAg");
	this.shape_114.setTransform(767.025,152.6227);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#3399CC").s().p("Eh31AXbMAALghIQJZpAIviMQIsiKD9AgQD9AfHfC2QHhC1EvDEQEtDGEyhDQEyhFH1kNQH1kPGkgyQGmgzNZGjQM5GQQDpHQAtgZAsgbQRAqObiQmQMQFfLCplQFXkrELAzIACAAQAnAGA1ATQA2AUAqAWQAkAUAkADQApAGA3gGQA4gFAxANQA4ASBVA4QBgBCBtAAQB3AOCkCVQBJA8BEgEQBAgLApBeMAAAAkFMjvrAAAg");
	this.shape_115.setTransform(767.025,152.5874);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#3399CC").s().p("Eh31AXbMAALghIQJepFIyiMQIxiLD/AgQD+AgHkC4QHkC3ExDHQEwDHE0hEQE1hEH4kQQH5kQGngyQGpgzNgGmQM+GUQMpMQAsgZAtgbQRHqTbwQvQMVFjLHprQFaktENAzIACAAQAkAGAyASQAyARAnAWQAhASAiADQAnAHAzgDQAzgDAuANQA1ATBOA0QBZA/BjAGQBvAUCUCNQBDA5A+ACQA6gGAmBXMAAAAkFMjvrAAAg");
	this.shape_116.setTransform(767.025,152.5617);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#3399CC").s().p("Eh31AXbMAALghIQJipJI3iMQI1iMEBAhQEAAgHoC6QHnC5E0DIQEyDKE2hEQE3hFH8kSQH9kSGqgzQGsgyNmGqQNFGYQTpRQAtgZAtgbQROqZb9Q5QMbFmLNpwQFckwEPA0IACAAQAiAGAtAQQAvAQAkATQAfARAfAEQAlAHAugBQAwAAAqAOQAxATBHAxQBSA7BbANQBlAaCGCEQA8A2A4AIQA0AAAjBQMAAAAkEMjvrAAAg");
	this.shape_117.setTransform(767.025,152.5265);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#3399CC").s().p("Eh31AXcMAALghIQJnpNI7iOQI5iNECAiQEDAhHrC7QHrC7E2DLQE1DLE4hEQE5hFIAkUQIBkUGtgzQGvgzNtGvQNKGcQbpWQAtgZAugcQRVqdcLRCQMgFqLSp2QFfkyERAzIABAAQAhAGApAOQAqAPAiASQAdAPAcAFQAjAHAqACQArACAnAPQAuAUBAAtQBKA4BSASQBdAhB2B7QA2A0AyANQAuAGAgBIMAAAAkFMjvrAAAg");
	this.shape_118.setTransform(767.025,152.4912);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#3399CC").s().p("Eh31AXcMAALghIQJspSI+iOQI+iNEEAiQEFAhHvC+QHvC8E3DNQE3DNE7hEQE7hGIEkVQIFkXGwgyQGxgzN0GyQNRGgQipaIBbg1QRcqjcZRMQMnFsLXp7QFhk0ETAzIABABQAeAFAmANQAmANAgAQQAZANAbAGQAfAIAmAEQAnAFAkAPQArAUA4ArQBEA0BIAYQBUAnBoBzQAvAxAsASQApAMAcBBMAAAAkFMjvrAAAg");
	this.shape_119.setTransform(767.025,152.4655);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#3399CC").s().p("Eh31AXcMAALghIQJwpWJDiOQJCiPEGAjQEGAiHzC/QHzC/E6DPQE5DPE9hFQE+hFIIkYQIIkZGzgyQG0gzN7G2QNWGkQqpfIBcg2QRjqocnRWQMsFwLcqBQFkk3EUA0IABAAQAdAFAhAMQAjALAdAPQAXALAYAGQAdAJAiAHQAjAHAgAQQAnAVAyAnQA8AxBAAeQBKAtBZBqQApAuAmAYQAjASAZA6MAAAAkEMjvrAAAg");
	this.shape_120.setTransform(767.025,152.4302);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#3399CC").s().p("Eh31AXdMAALghIQJ1pbJHiPQJGiPEIAjQEIAjH3DBQH2DBE8DRQE8DRE/hFQFAhGIMkaQILkbG3gzQG3gyOBG6QNcGoQypkQAugaAvgcQRqqtc1RfQMxFzLhqGQFmk6EXA1IABAAQAaAFAeAKQAeAKAbAMQAVAKAVAHQAbAKAeAJQAeAJAdAQQAkAWAqAjQA1AuA3AlQBCAzBKBhQAiArAhAfQAcAWAWAzMAAAAkFMjvrAAAg");
	this.shape_121.setTransform(767.025,152.3949);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#3399CC").s().p("Eh31AXdMAALghIQJ5pfJMiQQJLiQEJAkQEKAjH6DDQH6DDE/DTQE+DTFBhGQFChGIQkcQIPkcG6gzQG6gzOIG+QNiGsQ6poIBcg3QRyqydCRoQM3F3LnqMQFok8EZA1IAAAAQAZAFAZAIQAbAIAYAMIAlAPIAyAWQAbAMAZARQAhAWAjAgIBbBVQA5A5A8BZQAbAoAbAkQAWAdATArMAAAAkFMjvrAAAg");
	this.shape_122.setTransform(767.025,152.3692);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,2.2,1534.1,300.3);


(lib.man = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("ADGxzIBvBSIBtAfQA8ASAkAsQBaASBIAqQCrCSBUDGQCKEkC7ELQACABABACIAQARQAVBiAwBAIAgB2QAhAyAAAgQA9BRgiAhQASAqgSAhQgNAsgtAVAlbxzIgLAGIgyAYQgxgHgyBGIiRA1Ig3AoQiEA2guA3Qg5AmgGAmQgIAGgIAHQhZBHgBBOQhOBVguCDQgEAMgEAMQgFAJgEAKIhMDCQgBADgBADQgPAwgNAwIg3BEQAFAOADAOQgEAEgEAEQg9BCgOBVQgRBtAvBfQgwAkACAoIAjAuIAACPIAWAAIAXAAAlbxzIAPAAIISAAQgOgwhChKQgGgGgHgHImSAAgAlmxtIAagGAyamGIgRArQgsBhggBhAs7jBQATANAZAHIAAgbIAhAAIAdCBQg1DMAWDFQgDC7gYBbQg1hdhQAQQh0g2idAEQhUAjgyA9Qg3BLAXCbIgGgFAs7jBIgJAfQgtCcgoAbQAlBMgRAWQgjAWACAkQgKBDg9AqQgMBDg1ALIAAAhQhPAcgkA4AtxkYQAPA7AnAcAKhJGQh7Axh0BmIieBUIhrAWQiRgXiaA3QiGhFi1gHQg9gmg0gaQhygah2AcIALh9A1EAtQATBQgbBPA2EISIAkAvQAgAKAZgKA1XMZQAEAEAFAEIABABQAlAkAKAyQAdBTBbAfQBPBhB5AmQBEBGCCgIQL+CuLtjhQBnAQBngmQDyh9Csj9QAgg4ADg5A1uKhQgSAqA5BcAouLbQhegwhFgKArRhHQgICBAuBsQA/CfBqCfAUtHyQAxBAAEBJAPxG1QDUgNBoBKAWBF9QgUBLhAAqAPxG1QgmgQgGghQg4gSgahFQgKglg1gmQgciUihi9QAHBLgdBSIA6FdQAtB+gZA4QgHACgHADQBNAKAygyQAThBC+gog");
	this.shape.setTransform(144.8077,203.5567);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#663333").s().p("AshFYQiDAIhDhGQh5gmhPhhQhbgfgdhTQgLgxglgkIAGAFQgWibA3hLQAyg9BTgjQCdgEB1A2QBPgQA2BdIgLB9QB1gcByAaQA1AaA8AmQC2AHCGBEQCag2CRAXIBqgWICehUQB0hmB8gxQBNAKAygyQAThBC+goQDUgNBnBKQAxBAAEBJQgDA5ggA4QirD8jyB9QhnAmhogQQmnB/mrAAQlKAAlOhMg");
	this.shape_1.setTransform(145.7734,289.0658);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC99").s().p("A1/BOIAWAAIgWAAIgWAAIAAiNIAjAvQAgAKAagKQg3BJAWCcQg4hcASgrgAUbhfQBAgqAVhLQA8BRgiAhQASApgSAiQgNArgtAUQgEhHgxhAg");
	this.shape_2.setTransform(146.5866,263);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9999CC").s().p("AmqPlQg8gmg1gaQhegwhEgKQBEAKBeAwQhygah1AcIALh8QAYhcADi6QgXjGA2jNIgdiAIghAAIAAAaQgZgGgTgOQgngbgPg6QAPA6AnAbIgJAfQguCcgnAdQAkBLgQAWQgjAWABAkQgJBDg+AqQgMBDg0ALIAAAhQhPAcglA5QhTAigyA9QgaALgggLIgjgvIgkguQgCgoAxgjQgwhgAShtQANhUA9hDIAIgIQAIAhAAAhQAAAvgQAuQAQguAAgvQAAghgIghQgDgOgFgOIA4hFQAMgwAQgvIACgHIBMjBIAIgTIAIgYQAuiCBOhWQAChOBYhHIARgNQAGgmA4gmQAvg2CDg3IA4goICQg1QAyhGAyAIIAxgZIAbgGIISAAIBvBSIBtAfQA8ATAjArQBaASBIArQCrCRBVDHQCJEjC8EKIADAEIAPARQAVBiAwBAIAgB2QAhAyABAhQgVBKhAAqQhnhJjUAMQgngQgGghQg3gSgbhEQgKgmg0gmQgdiTigi+QAGBKgcBTIA5FdQAtB+gZA4IgNAGQh8Awh0BmIieBUIhqAWQiRgWiaA2QiGhEi2gIgAqYFwQBACfBpCfQhpifhAifQgnhbAAhqIACgpIgCApQAABqAnBbgAsnAIIAAAAgAk4upIgPAAIAyiHIGSAAIAMAOQBDBJAOAwg");
	this.shape_3.setTransform(142.871,183.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(2,1,1).p("ADazSIAAgxQAKhug0iJIg6goQgbgqhCgEQgVgphIADQhpACgRAiQhgAWguBAQgnAoABBAQgHBZArBZQgQBNAkBNQACAIACAIQgBgbABgiQgfguAHg/QhoANAtBQQALBKAeAIQAdAHAPAQQgCgNAAgPQAEARADARQAOASACAjQACAlgLA4QAAADgBADIgyCHIgLAGIgyAZQgxgIgyBGIiRA1Ig3AoQiEA3guA2Qg5AmgGAmQgIAHgIAGQhZBHgBBOQhOBWguCCIgRAqIhMDCQgBADgBAEQgPAwgNAwIg3BFQAFAOADAOQATBPgbBPADGr3IBvBSIBtAfQA8ATAkAsQBaARBIArQCrCSBUDGQCKEiC7EMQACABABACIAQARQAVBiAwBAIAgB3QAhAxAAAhQA9BRgiAgQASAqgSAiQgNArgtAVAChwkQBDgNAKg7QAwhxhEALAk0wcQACADADADQAEAWADAUQgJgQgDgggAB0vOQg6gciEA7Qh9ADgohCQgfAbgRgOQgFgEgEgHAlbr3IAPAAIISAAAlmrxIAagGAB2twQgGgHgHgHImSAAAB0vOQgIAiAKA8QBCBJAOAwAChwkQACgQACgUIA1iKAB0vOQAggEANhSAyagKQgEALgEAMQgFAKgEAJQgsBhggBhAs7C6IgJAfQgtCdgoAcQAlBLgRAXQgjAVACAkQgKBEg9ApQgMBEg1AKIAAAhQhPAcgkA5QhUAjgyA8Qg3BLAXCcIgGgGQAlAkAKAzQAdBSBbAfQBPBhB5AnQBEBGCCgIQL+CtLtjgQBnAQBngmQDyh9Csj9QAgg5ADg5AtxBkQAPA6AnAcQATAOAZAGIAAgaIAhAAIAdCBQg1DNAWDFQgDC6gYBcQg1hdhQAPQh0g1idAEAKhPDQh7Awh0BmIieBVIhrAWQiRgXiaA2QiGhEi1gIQg9glg0gbQhygZh2AbIALh8A1EGqQgEAEgEAEQg9BCgOBUQgRBtAvBgQgwAjACAoIAjAvIAkAuQAgALAZgLA2EOPIAACOIAWAAIAXAAA1XSVQAEAEAFAEIABABA1uQdQgSArA5BcAouRXQhegvhFgLArRE1QgICCAuBrQA/CfBqCfAUtNuQAxBBAEBIAPxMxQDUgMBoBJAWBL6QgUBLhAApAPxMxQgmgQgGggQg4gTgahEQgKgmg1gmQgciTihi+QAHBKgdBTIA6FdQAtB+gZA4QgHADgHADQBNAJAygyQAThAC+gpg");
	this.shape_4.setTransform(144.8077,165.5244);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFCC99").s().p("A1/Q9IAWAAIgWAAIgWAAIAAiPIAjAvQAgAKAagKQg3BLAWCbQg4hcASgqgAUbOOQBAgqAVhLQA8BRgiAhQASAqgSAhQgNAsgtAVQgEhJgxhAgABYteImSAAIABgHQAKg3gCglQASAOAfgbQAoBBB8gDQCEg7A6AcQgIAiAKA8IgMgNgAlywUQgegIgKhKQgthPBngNQgFAXAAAYQAAA1AZA1IAEAQIACAdQgOgRgegHgACTwpIA2iKQBDgLgvBxQgLA7hDAOIAEglgAlIwZIAAAAgAlMwpQgZg1AAg1QAAgYAFgXQgHA+AgAuQgCAiABAbIgEgQg");
	this.shape_5.setTransform(146.5866,162.375);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AijElQgfAbgRgOQgCgjgOgSIAHAqQgJgQgDggIAFAGIgHgiQgBgbABgiQgfguAHg/QgrhYAHhZQgBhAAngoQAuhABggWQARgiBogCQBJgDAVApQBCAEAbAqIA6AoQA0CJgKBtIAAAxIg1CKIgEAkQgNBSggAEQg6gciFA7IgKAAQhzAAgng/gAjcEnIgHgqQAOASACAjQgFgEgEgHgAjoD3IgCgcIAHAiIgFgGg");
	this.shape_6.setTransform(137.2239,35.5493);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_6},{t:this.shape_3},{t:this.shape_5},{t:this.shape_1},{t:this.shape_4}]},44).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,291.6,333.1);


(lib.kid = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("Ak9opQAqgBARgFIA6AAIBFgZQAUg5BHg6QA+AjAIipQA+h6gciMQg/ibiUgmQhIgzgvALQhtgfhtAfQg4AYgOAQQgrAJgtBdQhRC1BRCLQgNBnA8AWQgBBYA0BIIAQAZAg3mNQAxhVipg1QhCARhMgjAuYk2QghirBAhOQBMhRDXBRQAlACAhABQCMAGBHgDAvaOuQgggzAJgzQgQgPAyh5QAIg6gIhkQgfgtAfhLQgZhdAZiBIgbjKQgOggApg6QgTh6BKhkQADA4A1A5IAsAAQAGBLBRA6QA4AWC8h2QDDjeDvgPQDbBCBUCKIBACBQgZBYAwBfQAbBcggBhQAcAugXA7QANAxgoA5QAbBWgbBWQhUBfhnhfQg2gsgBg7QAMhcABhiQg0A9gKC5QAdBKgCBUAhJBNQBhAjAqBDQANBxAABqAKERVQARAlgRAdIgfAoIGugaQgrgTgTg7QALhmgogiQgPgyAAgeQh5jEjOADQhTACggAkQhogLgrAjQh9AyizgMAvaRFQAIgOCeBKQCtAoCsgUQCqgHBug5QBdhKCPgdQA2hPgzh9AIsSGQjJBlkWAvQiRAzjHgQQgKgBgLgBIgkgCQhrATiBgkIiyAXIiUgVQAPAHAQAGAvaOuIgkAjQgrB3AvgVIgUAzQANBMAwA2QAkAnA3AbAvaOuIAACXIAAAEQgohBAxDgAKERVQBshdA6iGAKERVQgqAaguAXQCAh0BAh0");
	this.shape.setTransform(104.3535,134.4945);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6666CC").s().p("AkLE+IgVgCIgkgDQhrATiBgkIiyAYIiUgWQg3gbgkgnQglitAPAAQADAAAHAKIAAAAIABACIABABIAAABIABABIAAgEIAAAEIgBgBIAAgBIgBgBIgBgCIAAAAQgHgKgDAAQgPAAAlCtQgwg1gNhMIAUgzQgvAVArh2IAkgkIAACXQAIgOCeBJQCtAoCsgUQCqgGBug6QBdhKCPgbQA2hPgzh+QCzAMB9gxQArgjBoAKQAggjBTgDQDOgDB5DEQAAAeAPAzQAoAigLBkQATA8ArASImuAbIAfgoQARgegRglQBshcA6iGQg6CGhsBcQgqAaguAXQCAhzBAhzQhABziABzQjJBlkWAwQhuAniPAAQgsAAgvgEgAIsCGIAAAAg");
	this.shape_1.setTransform(104.3535,236.8047);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AnmNfQifhJgIAOIAAiYQgfgzAJgzQgRgOAyh5QAJg6gJhkQgfgtAfhLQgZheAZh/IgajLQgOggAog7QgTh6BLhkQgiiqBBhPQBMhQDXBQIBGAEQCMAFBFgCQBMAjBCgRQCqA0gyBVQjvAQjBDeIgCABIgDACIgEACIAAAAIgEADIgCABIgFADIgDACQiDBPg9AGIgBAAIAAAAIgIAAIAAAAQgLAAgIgDIgBAAIgBAAQhQg6gGhMIgtAAQg0g4gDg5QADA5A0A4IAtAAQAGBMBQA6IABAAIABAAQAIADALAAIAAAAIAIAAIAAAAIABAAQA9gGCDhPIADgCIAFgDIACgBIAEgDIAAAAIAEgCIADgCIACgBQDBjeDvgQQDcBDBVCKIBACBQgZBYAvBgQAbBbgfBhQAbAtgXA7QAOAygoA5QAbBWgbBVQhVBghmhgQg3grgBg7QANhcAAhiIAAgHQAAhmgNhtQgphEhjgiQBjAiApBEQANBtAABmIAAAHQgzA8gLC5QAdBLgCBTQAzB+g1BPQiRAchdBKQhtA6iqAGQg5AHg6AAQhyAAhzgbg");
	this.shape_2.setTransform(71.0434,163.4208);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#663333").s().p("AjeGIIgRgaQgzhHAAhZQg7gVAMhnQhQiKBQi2QAthdArgJQAPgQA3gYQBtgeBsAeQAwgKBIAyQCUAnA/CaQAcCMg9B6QgJCog+gjQhIA6gTA6IhFAYIg6AAQgSAFgpACIgzABQg/AAhggEg");
	this.shape_3.setTransform(73.8255,39.6016);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,210.7,271);


(lib.fish_gr_inside = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AICAJQgPgaglgRQhABCAwBHIAlgJIAkgJQAMgtgRgfQhBgIAiBdAGfiYQCEA1AACgQB7BxitCNQh3BRhlgHAAwFeQB1jJBeAaQA3AWglDAAAFhsQgLAJgOAHQhVAzgnA4QjQjRj1BDQFaFNkTCFQAnA/Cwg/QBjglBGhGAAFhsQBlhThDkXQE0AeBEEgAAwFeQgHBfBbATQBsAfAlhqAAwFeQhzgmhHhKQgCgDgCgDQhFh3BDhiAAFhsQEUh3CGBL");
	this.shape.setTransform(59.8099,47.0858);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AARgpQARAfgMAsIgkAJQgihcBBAIg");
	this.shape_1.setTransform(109.5924,52.197);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF9933").s().p("ACEHQQhbgTAHhfQhzgmhHhKIgEgGQgjg9AAg3QAAg1AhgwQAng4BVgzQAOgHALgJQBlhThDkXQE0AeBEEgQCEA1AACgQB7BxitCNQh3BRhlgHQAPhOAAgyQAAhJghgNIgBAAQgKgDgKAAIAAAAIgBAAQhTABhkCnIgDAFIgCADIgBACIABgCIACgDIADgFQBkinBTgBIABAAIAAAAQAKAAAKADIABAAQAhANAABJQAAAygPBOQgcBShHAAQgVAAgZgHgAG+BnIAlgJIAkgJQAMgtgRgfQgPgaglgRQhABCAwBHgAAFhsIAIgDIABgBIAFgCQCghDBvAAIAAAAIAAAAQBHAAAyAbIACABIAAAAIACABIgCgBIAAAAIgCgBQgygbhHAAIAAAAIAAAAQhvAAigBDIgFACIgBABIgIADgAoOFTQETiFlalNQD1hDDQDRQghAwAAA1QAAA3AjA9QhGBGhjAlQhYAfg2AAQg1AAgUgfgAiQAPIAAAAg");
	this.shape_2.setTransform(59.8099,47.0858);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("AgHhEQAkARAPAbQhAgIAhBcIgkAJQgwhGBAhDg");
	this.shape_3.setTransform(106.8168,50.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,121.6,96.2);


(lib.father_head_gr = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AkTAPQhtkkD9hHQCPhRBaBRQBFAJAdApIA8AqQA7CWgXCFQBLAYg1BeQgfBdgtglQgBBrg1ADAkTAPQhgAPAwBfQAPBYAlgMQAUAHAHAGQAFAGgEAFQAIBAAYAJQABA5gVAiIGjgEQgMglAMglAj0DWIABALAjTEqQARAGAZgVQAeBDB+gFQB9g7BMAZAkTAPQgMBkArBjAEoAbQg2BrAABD");
	this.shape.setTransform(33.974,38.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC99").s().p("AjTBgQARAGAZgVQAeBDB+gFQB9g7BMAZQgMAlAMAlImjAEQAVgjgBg4gAkPAAQglAKgPhWQgwhfBggPQgMBjArBjQgHgGgUgGgADyAAQAAhDA2hrQBLAYg1BeQgWBBgeAAQgLAAgNgJg");
	this.shape_1.setTransform(33.974,59.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AimExQgZAVgRgGQgYgJgIhAQAEgFgFgGQgrhjAMhkQhtkkD9hHQCPhRBaBRQBFAJAdApIA8AqQA7CWgXCFQg2BrAABDQgBBrg1ADQhMgZh9A7IgRAAQhvAAgcg+g");
	this.shape_2.setTransform(33.671,36.7424);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,70,79.9);


(lib.___Camera___ = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// cameraBoundary
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(2,1,1,3,true).p("EAq+AfQMhV7AAAMAAAg+fMBV7AAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-641,-361,1282,722);


(lib.sun = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol1();
	this.instance.setTransform(91.5,91.5,1,1,0,0,0,91.5,91.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF6600").ss(0.1,1,1).p("AjvClQGWgRBJk4");
	this.shape.setTransform(122,139.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFF66").ss(7.6,1,1).p("AOTAAQAAF7kMEMQkMEMl7AAQl6AAkMkMQkMkMAAl7QAAl6EMkMQEMkMF6AAQF7AAEMEMQEMEMAAF6g");
	this.shape_1.setTransform(91.5,91.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC00").s().p("AqGKHQkMkMAAl7QAAl6EMkMQEMkMF6AAQF7AAEMEMQEMEMAAF6QAAF7kMEMQkMEMl7AAQl6AAkMkMgABBKGQGXgRBJk6QhJE6mXARg");
	this.shape_2.setTransform(91.5,91.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:8.3721,x:91.45},0).wait(1).to({rotation:16.7442},0).wait(1).to({rotation:25.1163,y:91.55},0).wait(1).to({rotation:33.4884},0).wait(1).to({rotation:41.8605,x:91.5,y:91.5},0).wait(1).to({rotation:50.2326,y:91.55},0).wait(1).to({rotation:58.6047,x:91.45,y:91.5},0).wait(1).to({rotation:66.9767,x:91.5,y:91.55},0).wait(1).to({rotation:75.3488,y:91.5},0).wait(1).to({rotation:83.7209,x:91.45},0).wait(1).to({rotation:92.093},0).wait(1).to({rotation:100.4651},0).wait(1).to({rotation:108.8372,y:91.45},0).wait(1).to({rotation:117.2093,x:91.5},0).wait(1).to({rotation:125.5814},0).wait(1).to({rotation:133.9535},0).wait(1).to({rotation:142.3256},0).wait(1).to({rotation:150.6977,x:91.45,y:91.5},0).wait(1).to({rotation:159.0698},0).wait(1).to({rotation:167.4419,x:91.5},0).wait(1).to({rotation:175.814,x:91.45},0).wait(1).to({rotation:184.186,x:91.5,y:91.45},0).wait(1).to({rotation:192.5581,y:91.5},0).wait(1).to({rotation:200.9302,y:91.45},0).wait(1).to({rotation:209.3023},0).wait(1).to({rotation:217.6744,x:91.45,y:91.5},0).wait(1).to({rotation:226.0465},0).wait(1).to({rotation:234.4186},0).wait(1).to({rotation:242.7907},0).wait(1).to({rotation:251.1628,y:91.45},0).wait(1).to({rotation:259.5349,x:91.5},0).wait(1).to({rotation:267.907},0).wait(1).to({rotation:276.2791},0).wait(1).to({rotation:284.6512,y:91.5},0).wait(1).to({rotation:293.0233,x:91.55},0).wait(1).to({rotation:301.3953,x:91.5,y:91.45},0).wait(1).to({rotation:309.7674,x:91.55,y:91.5},0).wait(1).to({rotation:318.1395,x:91.5},0).wait(1).to({rotation:326.5116,x:91.55,y:91.45},0).wait(1).to({rotation:334.8837},0).wait(1).to({rotation:343.2558,x:91.5},0).wait(1).to({rotation:351.6279},0).wait(1).to({rotation:360,y:91.5},0).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.1,-4.1,191.2,191.2);


(lib.Scene_1_ים4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// ים4
	this.instance = new lib.ocean_gr4("synched",0);
	this.instance.setTransform(616.7,758.9,1.5932,1,0,0,0,767,152.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(600));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_ים3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// ים3
	this.instance = new lib.ocean_gr3("synched",39);
	this.instance.setTransform(610.05,673,1.4607,1,0,0,0,767,152.3);
	this.instance.filters = [new cjs.ColorFilter(0.6, 0.6, 0.6, 1, 0, 0, 0, 0)];
	this.instance.cache(-2,0,1538,304);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(600));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_ים2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// ים2
	this.instance = new lib.ocean_gr2("synched",19);
	this.instance.setTransform(590.7,595.9,1.3107,1,0,0,0,767,152.3);
	this.instance.filters = [new cjs.ColorFilter(0.8, 0.8, 0.8, 1, 0, 0, 0, 0)];
	this.instance.cache(-2,0,1538,304);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(600));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_ים1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// ים1
	this.instance = new lib.ocean_gr1("synched",9);
	this.instance.setTransform(648.55,493.95,1.2043,1,0,0,0,766.9,152.3);
	this.instance.filters = [new cjs.ColorFilter(0.9, 0.9, 0.9, 1, 0, 0, 0, 0)];
	this.instance.cache(-2,0,1538,304);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(600));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_ים = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// ים
	this.instance = new lib.ocean_gr("synched",0);
	this.instance.setTransform(610.9,419.4,1.0267,0.7966,0,0,0,766.8,150.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(600));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_ילד = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// ילד
	this.instance = new lib.kid("synched",0);
	this.instance.setTransform(434.05,332.25,1,1,0,0,0,104.4,134.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(600));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_שמש = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// שמש
	this.instance = new lib.sun();
	this.instance.setTransform(124.55,113.5,1,1,0,0,0,91.5,91.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(600));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_רפסודה = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// רפסודה
	this.instance = new lib.wraph("synched",0);
	this.instance.setTransform(644.45,579,1.2723,0.8236,-0.1879,0,0,286.1,173.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(600));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_ראש_אב = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// ראש_אב
	this.instance = new lib.father_head_gr("synched",0);
	this.instance.setTransform(713.4,179.85,0.95,1,0,0,0,34,38.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(600));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_קרני_שמש = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// קרני_שמש
	this.instance = new lib.sun_keren_gr();
	this.instance.setTransform(176.75,163.05,1,1,0,0,0,164.2,147);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(600));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_ציפור = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// ציפור
	this.instance = new lib.נird("synched",0);
	this.instance.setTransform(1327.4,218.15,1,1,0,0,0,30.6,22.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:24.8,x:1317,y:217.45,startPosition:1},0).wait(1).to({x:1312.45,y:216.7,startPosition:2},0).wait(1).to({x:1307.8,y:215.9,startPosition:3},0).wait(1).to({x:1303.2,y:215.1,startPosition:4},0).wait(1).to({x:1298.5,y:214.25,startPosition:5},0).wait(1).to({x:1293.8,y:213.4,startPosition:6},0).wait(1).to({x:1289.05,y:212.45,startPosition:7},0).wait(1).to({x:1284.3,y:211.5,startPosition:8},0).wait(1).to({x:1279.5,y:210.5,startPosition:9},0).wait(1).to({x:1274.7,y:209.45,startPosition:10},0).wait(1).to({x:1269.85,y:208.35,startPosition:11},0).wait(1).to({x:1264.95,y:207.25,startPosition:12},0).wait(1).to({x:1260.05,y:206.1,startPosition:0},0).wait(1).to({x:1255.1,y:204.9,startPosition:1},0).wait(1).to({x:1250.15,y:203.7,startPosition:2},0).wait(1).to({x:1245.15,y:202.45,startPosition:3},0).wait(1).to({x:1240.1,y:201.1,startPosition:4},0).wait(1).to({x:1235.05,y:199.8,startPosition:5},0).wait(1).to({x:1229.95,y:198.4,startPosition:6},0).wait(1).to({x:1224.85,y:197,startPosition:7},0).wait(1).to({x:1219.7,y:195.55,startPosition:8},0).wait(1).to({x:1214.5,y:194.05,startPosition:9},0).wait(1).to({x:1209.3,y:192.5,startPosition:10},0).wait(1).to({x:1204.05,y:190.95,startPosition:11},0).wait(1).to({x:1198.8,y:189.35,startPosition:12},0).wait(1).to({x:1193.5,y:187.7,startPosition:0},0).wait(1).to({x:1188.15,y:186,startPosition:1},0).wait(1).to({x:1182.8,y:184.3,startPosition:2},0).wait(1).to({x:1177.4,y:182.5,startPosition:3},0).wait(1).to({x:1172,y:180.75,startPosition:4},0).wait(1).to({x:1166.55,y:178.9,startPosition:5},0).wait(1).to({x:1161.1,y:177,startPosition:6},0).wait(1).to({x:1155.6,y:175.1,startPosition:7},0).wait(1).to({x:1150.05,y:173.15,startPosition:8},0).wait(1).to({x:1144.5,y:171.2,startPosition:9},0).wait(1).to({x:1138.9,y:169.15,startPosition:10},0).wait(1).to({x:1133.25,y:167.1,startPosition:11},0).wait(1).to({x:1127.6,y:165,startPosition:12},0).wait(1).to({x:1121.9,y:162.85,startPosition:0},0).wait(1).to({x:1116.2,y:160.7,startPosition:1},0).wait(1).to({x:1110.45,y:158.45,startPosition:2},0).wait(1).to({x:1104.7,y:156.2,startPosition:3},0).wait(1).to({x:1098.9,y:153.95,startPosition:4},0).wait(1).to({x:1093.05,y:151.6,startPosition:5},0).wait(1).to({x:1087.2,y:149.25,startPosition:6},0).wait(1).to({x:1081.3,y:146.85,startPosition:7},0).wait(1).to({x:1075.4,y:144.4,startPosition:8},0).wait(1).to({x:1069.45,y:141.95,startPosition:9},0).wait(1).to({x:1063.45,y:139.4,startPosition:10},0).wait(1).to({x:1057.45,y:136.85,startPosition:11},0).wait(1).to({x:1051.4,y:134.25,startPosition:12},0).wait(1).to({x:1045.35,y:131.65,startPosition:0},0).wait(1).to({x:1039.25,y:128.95,startPosition:1},0).wait(1).to({x:1033.1,y:126.25,startPosition:2},0).wait(1).to({x:1026.95,y:123.5,startPosition:3},0).wait(1).to({x:1020.75,y:120.75,startPosition:4},0).wait(1).to({x:1014.55,y:117.95,startPosition:5},0).wait(1).to({x:1008.3,y:115.05,startPosition:6},0).wait(1).to({x:1002,y:112.2,startPosition:7},0).wait(1).to({x:995.7,y:109.25,startPosition:8},0).wait(1).to({x:989.35,y:106.25,startPosition:9},0).wait(1).to({x:983,y:103.25,startPosition:10},0).wait(1).to({x:976.6,y:100.2,startPosition:11},0).wait(1).to({x:970.15,y:97.15,startPosition:12},0).wait(1).to({x:963.7,y:94,startPosition:0},0).wait(1).to({x:957.2,y:90.85,startPosition:1},0).wait(1).to({x:950.7,y:87.65,startPosition:2},0).wait(1).to({x:944.15,y:84.45,startPosition:3},0).wait(1).to({x:937.6,y:81.15,startPosition:4},0).wait(1).to({x:930.95,y:77.85,startPosition:5},0).wait(1).to({x:924.35,y:74.5,startPosition:6},0).wait(1).to({x:917.65,y:71.1,startPosition:7},0).wait(1).to({x:910.95,y:67.7,startPosition:8},0).wait(1).to({x:904.25,y:64.2,startPosition:9},0).wait(1).to({x:897.5,y:60.7,startPosition:10},0).wait(1).to({x:890.7,y:57.2,startPosition:11},0).wait(1).to({x:883.9,y:53.6,startPosition:12},0).wait(1).to({x:877.05,y:50,startPosition:0},0).wait(1).to({x:870.15,y:46.35,startPosition:1},0).wait(1).to({x:863.25,y:42.65,startPosition:2},0).wait(1).to({x:856.3,y:38.9,startPosition:3},0).wait(1).to({x:849.35,y:35.15,startPosition:4},0).wait(1).to({x:842.35,y:31.35,startPosition:5},0).wait(1).to({x:835.3,y:27.5,startPosition:6},0).wait(1).to({x:828.25,y:23.65,startPosition:7},0).wait(1).to({x:821.15,y:19.75,startPosition:8},0).wait(1).to({x:814.05,y:15.8,startPosition:9},0).wait(1).to({x:806.9,y:11.8,startPosition:10},0).wait(1).to({x:799.75,y:7.75,startPosition:11},0).wait(1).to({x:792.5,y:3.7,startPosition:12},0).wait(1).to({x:785.3,y:-0.4,startPosition:0},0).wait(1).to({x:778,y:-4.55,startPosition:1},0).wait(1).to({x:770.7,y:-8.75,startPosition:2},0).wait(1).to({x:763.4,y:-12.95,startPosition:3},0).wait(1).to({x:756.05,y:-17.2,startPosition:4},0).wait(1).to({x:748.65,y:-21.5,startPosition:5},0).wait(1).to({x:741.2,y:-25.85,startPosition:6},0).wait(1).to({x:733.75,y:-30.25,startPosition:7},0).wait(1).to({x:726.3,y:-34.65,startPosition:8},0).wait(1).to({x:718.8,y:-39.1,startPosition:9},0).wait(1).to({x:711.25,y:-43.6,startPosition:10},0).wait(1).to({x:703.65,y:-48.1,startPosition:11},0).wait(1).to({x:696.05,y:-52.65,startPosition:12},0).wait(1).to({x:688.45,y:-57.3,startPosition:0},0).wait(1).to({x:680.8,y:-61.9,startPosition:1},0).wait(1).to({x:673.1,y:-66.6,startPosition:2},0).wait(1).to({x:665.35,y:-71.3,startPosition:3},0).wait(1).to({x:657.6,y:-76.05,startPosition:4},0).wait(1).to({x:649.85,y:-80.85,startPosition:5},0).wait(1).to({x:642,y:-85.7,startPosition:6},0).wait(1).to({x:634.2,y:-90.6,startPosition:7},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_חכה = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// חכה
	this.instance = new lib.rod_gr("synched",0);
	this.instance.setTransform(538.5,258.05,0.6829,1,0,0,0,173.6,99);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(600));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_דג = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// דג
	this.instance = new lib.fish_gr_inside("synched",0);
	this.instance.setTransform(127.6,449.45,1,1,-14.9983,0,0,59.8,47.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(116).to({_off:false},0).wait(1).to({scaleX:1.0045,rotation:-14.9989,x:135.75,y:446.8},0).wait(1).to({scaleX:1.009,x:143.95,y:444.2},0).wait(1).to({scaleX:1.0134,x:152.1,y:441.55},0).wait(1).to({scaleX:1.0179,scaleY:0.9999,x:160.3,y:438.95},0).wait(1).to({scaleX:1.0224,x:168.45,y:436.35},0).wait(1).to({scaleX:1.0268,x:176.6,y:433.7},0).wait(1).to({scaleX:1.0313,x:184.8,y:431.1},0).wait(1).to({scaleX:1.0358,x:193,y:428.45},0).wait(1).to({scaleX:1.0403,x:201.15,y:425.85},0).wait(1).to({scaleX:1.0447,scaleY:0.9998,x:209.3,y:423.25},0).wait(1).to({scaleX:1.0492,x:217.5,y:420.6},0).wait(1).to({scaleX:1.0537,x:225.65,y:418},0).wait(1).to({scaleX:1.0581,x:233.8,y:415.35},0).wait(1).to({scaleX:1.0626,x:242.05,y:412.75},0).wait(1).to({scaleX:1.0671,x:250.2,y:410.15},0).wait(1).to({scaleX:1.0716,scaleY:0.9997,x:258.35,y:407.55},0).wait(1).to({scaleX:1.076,x:266.55,y:404.95},0).wait(1).to({scaleX:1.0805,x:274.7,y:402.35},0).wait(1).to({scaleX:1.085,x:282.85,y:399.7},0).wait(1).to({scaleX:1.0894,x:291.05,y:397.1},0).wait(1).to({scaleX:1.0939,x:299.25,y:394.45},0).wait(1).to({scaleX:1.0984,x:307.4,y:391.85},0).wait(1).to({scaleX:1.1029,scaleY:0.9996,x:315.55,y:389.25},0).wait(1).to({scaleX:1.1073,x:323.75,y:386.6},0).wait(1).to({scaleX:1.1118,x:332.2,y:385.4},0).wait(1).to({scaleX:1.1163,x:340.7,y:384.2},0).wait(1).to({scaleX:1.1207,x:349.15,y:382.95},0).wait(1).to({scaleX:1.1252,x:357.6,y:381.75},0).wait(1).to({scaleX:1.1297,scaleY:0.9995,x:366.1,y:380.5},0).wait(1).to({scaleX:1.1342,x:374.55,y:379.3},0).wait(1).to({scaleX:1.1386,x:383,y:378.1},0).wait(1).to({scaleX:1.1431,x:391.5,y:376.85},0).wait(1).to({scaleX:1.1476,x:399.95,y:375.65},0).wait(1).to({scaleX:1.152,x:408.45,y:374.45},0).wait(1).to({scaleX:1.1565,scaleY:0.9994,x:416.9,y:373.25},0).wait(1).to({scaleX:1.161,x:425.35,y:372.05},0).wait(1).to({scaleX:1.1655,x:433.8,y:370.8},0).wait(1).to({scaleX:1.1699,x:442.3,y:369.6},0).wait(1).to({scaleX:1.1744,x:450.8,y:368.4},0).wait(1).to({scaleX:1.1789,x:459.25,y:367.15},0).wait(1).to({scaleX:1.1834,scaleY:0.9993,x:467.7,y:366},0).wait(1).to({scaleX:1.1878,x:476.15,y:364.75},0).wait(1).to({scaleX:1.1923,x:484.6,y:363.55},0).wait(1).to({scaleX:1.1968,x:493.15,y:362.35},0).wait(1).to({scaleX:1.2012,x:493.1,y:362.3},0).wait(1).to({scaleX:1.2057,y:362.35},0).wait(1).to({scaleX:1.2102,scaleY:0.9992,y:362.3},0).wait(1).to({scaleX:1.2147,y:362.35},0).wait(1).to({scaleX:1.2191},0).wait(1).to({scaleX:1.2236,x:493.15,y:362.3},0).wait(1).to({scaleX:1.2281,x:493.1,y:362.35},0).wait(1).to({scaleX:1.2073,scaleY:0.9993,y:362.3},0).wait(1).to({scaleX:1.1866,y:362.35},0).wait(1).to({scaleX:1.1659,scaleY:0.9994,y:362.3},0).wait(1).to({scaleX:1.1451,scaleY:0.9995,y:362.35},0).wait(1).to({scaleX:1.1244,scaleY:0.9996,y:362.3},0).wait(1).to({scaleX:1.1037,y:362.35},0).wait(1).to({scaleX:1.0829,scaleY:0.9997},0).wait(1).to({scaleX:1.0622,scaleY:0.9998},0).wait(1).to({scaleX:1.0415,scaleY:0.9999},0).wait(1).to({scaleX:1.0207},0).wait(1).to({scaleX:1,scaleY:1,x:493.05},0).wait(1).to({scaleX:0.9866,scaleY:0.9999,x:493.1},0).wait(1).to({scaleX:0.9732},0).wait(1).to({scaleX:0.9597,scaleY:0.9998},0).wait(1).to({scaleX:0.9463},0).wait(1).to({scaleX:0.9329,scaleY:0.9997},0).wait(1).to({scaleX:0.9194},0).wait(1).to({scaleX:0.906,scaleY:0.9996,y:362.4},0).wait(1).to({scaleX:0.8926,scaleY:0.9995,y:362.35},0).wait(1).to({scaleX:0.8792},0).wait(1).to({scaleX:0.8657,scaleY:0.9994},0).wait(1).to({scaleX:0.8523,y:362.3},0).wait(1).to({scaleX:0.8389,scaleY:0.9993},0).wait(1).to({scaleX:0.8255,scaleY:0.9992,y:362.35},0).wait(1).to({scaleX:0.812},0).wait(1).to({scaleX:0.8318,scaleY:0.9991},0).wait(1).to({scaleX:0.8516,y:362.3},0).wait(1).to({scaleX:0.8714,scaleY:0.999,y:362.35},0).wait(1).to({scaleX:0.8911,x:493.05},0).wait(1).to({scaleX:0.9109,scaleY:0.9989,x:493.1},0).wait(1).to({scaleX:0.9307,scaleY:0.9988},0).wait(1).to({scaleX:0.9505,x:493.05},0).wait(1).to({scaleX:0.9703,scaleY:0.9987},0).wait(1).to({scaleX:0.99,y:362.4},0).wait(1).to({scaleX:1.0098,scaleY:0.9986,y:362.35},0).wait(1).to({scaleX:1.0296},0).wait(1).to({scaleX:1.0494,scaleY:0.9985},0).wait(1).to({scaleX:1.0692,y:362.3},0).wait(1).to({scaleX:1.0889,scaleY:0.9984},0).wait(1).to({scaleX:1.1087,scaleY:0.9983,y:362.35},0).wait(1).to({scaleX:1.0911,y:362.3},0).wait(1).to({scaleX:1.0735,scaleY:0.9982,y:362.35},0).wait(1).to({scaleX:1.0559,y:362.3},0).wait(1).to({scaleX:1.0383,scaleY:0.9981,y:362.35},0).wait(1).to({scaleX:1.0207},0).wait(1).to({scaleX:1.0031,scaleY:0.998},0).wait(1).to({scaleX:0.9855},0).wait(1).to({scaleX:0.9679,scaleY:0.9979,y:362.3},0).wait(1).to({scaleX:0.9503,y:362.35},0).wait(1).to({scaleX:0.9327,scaleY:0.9978,x:493.1},0).wait(1).to({scaleX:0.9151,x:493.05},0).wait(1).to({scaleX:0.8975,scaleY:0.9977},0).wait(1).to({scaleX:0.8799,y:362.4},0).wait(1).to({scaleX:0.8623,scaleY:0.9976,y:362.35},0).wait(1).to({scaleX:0.8447,y:362.4},0).wait(1).to({scaleX:0.8271,scaleY:0.9975,x:493.1,y:362.35},0).wait(1).to({scaleX:0.8451,scaleY:0.9974,x:493.05},0).wait(1).to({scaleX:0.8631,y:362.4},0).wait(1).to({scaleX:0.8812,scaleY:0.9973,y:362.3},0).wait(1).to({scaleX:0.8992,x:493.1,y:362.35},0).wait(1).to({scaleX:0.9172,scaleY:0.9972,y:362.3},0).wait(1).to({scaleX:0.9352,x:493.05,y:362.35},0).wait(1).to({scaleX:0.9532,scaleY:0.9971},0).wait(1).to({scaleX:0.9712,scaleY:0.997,y:362.3},0).wait(1).to({scaleX:0.9892,x:493.1,y:362.35},0).wait(1).to({scaleX:1.0073,scaleY:0.9969},0).wait(1).to({scaleX:1.0253,x:493.05},0).wait(1).to({scaleX:1.0433,scaleY:0.9968},0).wait(1).to({scaleX:1.0613,scaleY:0.9967,x:493.1},0).wait(1).to({scaleX:1.0793},0).wait(1).to({scaleX:1.064,scaleY:0.9966,x:493.05},0).wait(1).to({scaleX:1.0487},0).wait(1).to({scaleX:1.0333,scaleY:0.9965,x:493.1},0).wait(1).to({scaleX:1.018},0).wait(1).to({scaleX:1.0027,scaleY:0.9964,x:493.05,y:362.4},0).wait(1).to({scaleX:0.9874,x:493.1,y:362.35},0).wait(1).to({scaleX:0.972,scaleY:0.9963},0).wait(1).to({scaleX:0.9567,scaleY:0.9962,x:493.05},0).wait(1).to({scaleX:0.9414},0).wait(1).to({scaleX:0.926,scaleY:0.9961,x:493.1,y:362.3},0).wait(1).to({scaleX:0.9107},0).wait(1).to({scaleX:0.8954,scaleY:0.996,x:493.05,y:362.35},0).wait(1).to({scaleX:0.88,x:493.1},0).wait(1).to({scaleX:0.8647,scaleY:0.9959,y:362.3},0).wait(1).to({scaleX:0.8494,x:493.05,y:362.35},0).wait(1).to({scaleX:0.8765,scaleY:0.9958,x:493.1},0).wait(1).to({scaleX:0.9037},0).wait(1).to({scaleX:0.9308,x:493.05},0).wait(1).to({scaleX:0.9579,scaleY:0.9957,x:493.1},0).wait(1).to({scaleX:0.9851},0).wait(1).to({scaleX:1.0122,x:493.05},0).wait(1).to({scaleX:1.0393,scaleY:0.9956,x:493.1},0).wait(1).to({scaleX:1.0665},0).wait(1).to({scaleX:1.0936},0).wait(1).to({scaleX:1.1207,scaleY:0.9955},0).wait(1).to({scaleX:1.1479},0).wait(1).to({scaleX:1.175},0).wait(1).to({scaleX:1.2021,scaleY:0.9954},0).wait(1).to({scaleX:1.2293,y:362.4},0).wait(1).to({scaleX:1.2564,y:362.35},0).wait(1).to({scaleX:1.2446,scaleY:0.9955,x:493.05},0).wait(1).to({scaleX:1.2328,scaleY:0.9956,x:492.95},0).wait(1).to({scaleX:1.221,x:492.9},0).wait(1).to({scaleX:1.2092,scaleY:0.9957,x:492.85},0).wait(1).to({scaleX:1.1974,scaleY:0.9958,x:492.75,y:362.3},0).wait(1).to({scaleX:1.1856,scaleY:0.9959,x:492.7,y:362.35},0).wait(1).to({scaleX:1.1738,scaleY:0.996,x:492.65},0).wait(1).to({scaleX:1.162,scaleY:0.9961,x:492.55,y:362.3},0).wait(1).to({scaleX:1.1502,scaleY:0.9962,x:492.5},0).wait(1).to({scaleX:1.1383,x:492.4,y:362.35},0).wait(1).to({scaleX:1.1265,scaleY:0.9963,x:492.35},0).wait(1).to({scaleX:1.1147,scaleY:0.9964,x:492.3},0).wait(1).to({scaleX:1.1029,scaleY:0.9965,x:492.2,y:362.4},0).wait(1).to({scaleX:1.0911,scaleY:0.9966,x:492.15,y:362.35},0).wait(1).to({scaleX:1.0793,scaleY:0.9967,x:492.1},0).wait(1).to({scaleX:0.8219,scaleY:0.9966,y:362.4},0).wait(1).to({scaleX:0.5645,scaleY:0.9965,x:492.05,y:362.35},0).wait(1).to({scaleX:0.3071,scaleY:0.9964,y:362.4},0).wait(1).to({scaleX:0.0497,scaleY:0.9963,x:492,y:362.35},0).wait(1).to({scaleX:0.2078,scaleY:0.9962,rotation:0,skewX:-14.9989,skewY:165.0011,x:492.05,y:362.3},0).wait(1).to({scaleX:0.4652,scaleY:0.9961,y:362.35},0).wait(1).to({scaleX:0.7226,scaleY:0.996,x:492},0).wait(1).to({scaleX:0.98,scaleY:0.9959},0).wait(1).to({x:474.55,y:364.15},0).wait(1).to({x:457.15,y:365.95},0).wait(1).to({x:439.7,y:367.75},0).wait(1).to({x:422.25,y:369.5},0).wait(1).to({x:404.8,y:371.3},0).wait(1).to({x:387.4,y:373.1},0).wait(1).to({x:369.95,y:374.9},0).wait(1).to({x:361.25,y:377.8},0).wait(1).to({x:352.55,y:380.7},0).wait(1).to({x:343.8,y:383.6},0).wait(1).to({x:335.1,y:386.5},0).wait(1).to({x:326.4,y:389.4},0).wait(1).to({x:317.7,y:392.3},0).wait(1).to({x:308.95,y:395.2},0).wait(1).to({x:300.25,y:398.1},0).wait(1).to({x:291.55,y:401},0).wait(1).to({x:276.45,y:427.6},0).wait(1).to({x:261.35,y:454.15},0).wait(1).to({x:246.2,y:480.75},0).wait(1).to({x:231.1,y:507.3},0).wait(1).to({x:216,y:533.9},0).wait(1).to({scaleX:0.9663,scaleY:0.9958,x:216.1,y:533.8},0).wait(1).to({scaleX:0.9526,x:216.2,y:533.7},0).wait(1).to({scaleX:0.9389,x:216.25,y:533.65},0).wait(1).to({scaleX:0.9252,x:216.4,y:533.5},0).wait(1).to({scaleX:0.9114,x:216.5,y:533.4},0).wait(1).to({scaleX:0.8977,x:216.6,y:533.35},0).wait(1).to({scaleX:0.884,x:216.7,y:533.25},0).wait(1).to({scaleX:0.8703,x:216.8,y:533.1},0).wait(1).to({scaleX:0.8566,x:216.85,y:533},0).wait(1).to({scaleX:0.8429,x:216.95,y:532.95},0).wait(1).to({scaleX:0.8292,scaleY:0.9957,x:217.05,y:532.85},0).wait(1).to({scaleX:0.8154,x:217.2,y:532.7},0).wait(1).to({scaleX:0.8017,x:217.3,y:532.65},0).wait(1).to({scaleX:0.788,x:217.4,y:532.55},0).wait(1).to({scaleX:0.7743,x:217.5,y:532.45},0).wait(1).to({scaleX:0.7606,x:217.55,y:532.3},0).wait(1).to({scaleX:0.7469,x:217.65,y:532.25},0).wait(1).to({scaleX:0.7332,x:217.75,y:532.15},0).wait(1).to({scaleX:0.7194,x:217.85,y:532.05},0).wait(1).to({scaleX:0.7057,scaleY:0.9956,x:218,y:531.95},0).wait(1).to({scaleX:0.692,x:218.1,y:531.85},0).wait(1).to({scaleX:0.6783,x:218.15,y:531.75},0).wait(1).to({scaleX:0.6646,x:218.25,y:531.65},0).wait(1).to({scaleX:0.6509,x:218.35,y:531.55},0).wait(1).to({scaleX:0.6372,x:218.45,y:531.45},0).wait(1).to({scaleX:0.6234,x:218.55,y:531.35},0).wait(1).to({scaleX:0.6097,x:218.7,y:531.3},0).wait(1).to({scaleX:0.596,x:218.75,y:531.15},0).wait(1).to({scaleX:0.5823,x:218.85,y:531.05},0).wait(1).to({scaleX:0.5686,scaleY:0.9955,x:218.95,y:530.95},0).wait(1).to({scaleX:0.5549,x:219.05,y:530.9},0).wait(1).to({scaleX:0.5412,x:219.15,y:530.75},0).wait(1).to({scaleX:0.5274,x:219.25,y:530.65},0).wait(1).to({scaleX:0.5137,x:219.35,y:530.6},0).wait(1).to({scaleX:0.5,x:219.45,y:530.5},0).wait(1).to({scaleX:0.4863,x:219.55,y:530.4},0).wait(1).to({scaleX:0.4726,x:219.65,y:530.25},0).wait(1).to({scaleX:0.4589,x:219.75,y:530.2},0).wait(1).to({scaleX:0.4452,x:219.85,y:530.1},0).wait(1).to({scaleX:0.4314,scaleY:0.9954,x:219.95,y:530},0).wait(1).to({scaleX:0.4177,x:220,y:529.9},0).wait(1).to({scaleX:0.404,x:220.15,y:529.8},0).wait(1).to({scaleX:0.3903,x:220.25,y:529.7},0).wait(1).to({scaleX:0.3766,x:220.35,y:529.6},0).wait(1).to({scaleX:0.3629,x:220.45,y:529.5},0).wait(1).to({scaleX:0.3492,x:220.55,y:529.4},0).wait(1).to({scaleX:0.3354,x:220.6,y:529.3},0).wait(1).to({scaleX:0.3217,x:220.7,y:529.2},0).wait(1).to({scaleX:0.308,scaleY:0.9953,x:220.8,y:529.1},0).wait(1).to({scaleX:0.2943,x:220.95,y:529},0).wait(1).to({scaleX:0.2806,x:221.05,y:528.9},0).wait(1).to({scaleX:0.2669,x:221.15,y:528.85},0).wait(1).to({scaleX:0.2532,x:221.25,y:528.7},0).wait(1).to({scaleX:0.2394,x:221.3,y:528.6},0).wait(1).to({scaleX:0.2257,x:221.4,y:528.5},0).wait(1).to({scaleX:0.212,x:221.5,y:528.45},0).wait(1).to({scaleX:0.1983,x:221.6,y:528.3},0).wait(1).to({scaleX:0.1846,x:221.75,y:528.2},0).wait(1).to({scaleX:0.1709,scaleY:0.9952,x:221.85,y:528.15},0).wait(1).to({scaleX:0.1572,x:221.9,y:528.05},0).wait(1).to({scaleX:0.1434,x:222,y:527.9},0).wait(1).to({scaleX:0.1297,x:222.1,y:527.8},0).wait(1).to({scaleX:0.116,x:222.2,y:527.75},0).wait(1).to({scaleX:0.1023,x:222.3,y:527.65},0).wait(1).to({scaleX:0.0886,x:222.45,y:527.5},0).wait(1).to({scaleX:0.0749,x:222.55,y:527.4},0).wait(1).to({scaleX:0.0612,x:222.6,y:527.3},0).wait(1).to({scaleX:0.0474,scaleY:0.9951,x:222.7,y:527.2},0).wait(1).to({scaleX:0.0337,x:222.8,y:527.05},0).wait(1).to({scaleX:0.02,x:222.9,y:527},0).wait(1).to({scaleX:0.0063,x:223,y:526.9},0).wait(1).to({scaleX:0.0074,rotation:-14.9989,skewX:0,skewY:0,x:223.1,y:526.8},0).wait(1).to({scaleX:0.0211,x:223.2,y:526.7},0).wait(1).to({scaleX:0.0348,x:223.3,y:526.6},0).wait(1).to({scaleX:0.0486,x:223.4,y:526.5},0).wait(1).to({scaleX:0.0623,x:223.5,y:526.4},0).wait(1).to({scaleX:0.076,x:223.6,y:526.3},0).wait(1).to({scaleX:0.0897,scaleY:0.995,x:223.7,y:526.2},0).wait(1).to({scaleX:0.1034,x:223.75,y:526.1},0).wait(1).to({scaleX:0.1171,x:223.85,y:526.05},0).wait(1).to({scaleX:0.1308,x:224,y:525.95},0).wait(1).to({scaleX:0.1446,x:224.1,y:525.8},0).wait(1).to({scaleX:0.1583,x:224.2,y:525.7},0).wait(1).to({scaleX:0.172,x:224.3,y:525.65},0).wait(1).to({scaleX:0.1857,x:224.4,y:525.55},0).wait(1).to({scaleX:0.1994,x:224.45,y:525.4},0).wait(1).to({scaleX:0.2131,scaleY:0.9949,x:224.55,y:525.35},0).wait(1).to({scaleX:0.2268,x:224.7,y:525.25},0).wait(1).to({scaleX:0.2406,x:224.8,y:525.15},0).wait(1).to({scaleX:0.2543,x:224.9,y:525},0).wait(1).to({scaleX:0.268,x:225,y:524.95},0).wait(1).to({scaleX:0.2817,x:225.05,y:524.85},0).wait(1).to({scaleX:0.2954,x:225.15,y:524.75},0).wait(1).to({scaleX:0.3091,x:225.25,y:524.6},0).wait(1).to({scaleX:0.3228,x:225.35,y:524.55},0).wait(1).to({scaleX:0.3366,x:225.5,y:524.45},0).wait(1).to({scaleX:0.3503,scaleY:0.9948,x:225.6,y:524.35},0).wait(1).to({scaleX:0.364,x:225.65,y:524.25},0).wait(1).to({scaleX:0.3777,x:225.75,y:524.15},0).wait(1).to({scaleX:0.3914,x:225.85,y:524.05},0).wait(1).to({scaleX:0.4051,x:225.95,y:523.95},0).wait(1).to({scaleX:0.4188,x:226.05,y:523.85},0).wait(1).to({scaleX:0.4326,x:226.2,y:523.75},0).wait(1).to({scaleX:0.4463,x:226.3,y:523.65},0).wait(1).to({scaleX:0.46,x:226.35,y:523.6},0).wait(1).to({scaleX:0.4737,x:226.45,y:523.45},0).wait(1).to({scaleX:0.4874,scaleY:0.9947,x:226.55,y:523.35},0).wait(1).to({scaleX:0.5011,x:226.65,y:518.6},0).wait(1).to({scaleX:0.5148,x:226.75,y:513.85},0).wait(1).to({scaleX:0.5286,x:226.8,y:509.05},0).wait(1).to({scaleX:0.5423,x:226.9,y:504.3},0).wait(1).to({scaleX:0.556,x:227,y:499.6},0).wait(1).to({scaleX:0.5697,x:227.1,y:494.85},0).wait(1).to({scaleX:0.5834,x:227.2,y:490.05},0).wait(1).to({scaleX:0.5971,x:227.3,y:485.3},0).wait(1).to({scaleX:0.6108,scaleY:0.9946,x:227.4,y:480.55},0).wait(1).to({scaleX:0.6246,x:227.45,y:475.8},0).wait(1).to({scaleX:0.6383,x:227.55,y:471},0).wait(1).to({scaleX:0.652,x:227.7,y:466.25},0).wait(1).to({scaleX:0.6657,x:227.8,y:461.5},0).wait(1).to({scaleX:0.6794,x:227.9,y:456.75},0).wait(1).to({scaleX:0.6931,x:228,y:451.95},0).wait(1).to({scaleX:0.7068,x:228.1,y:447.25},0).wait(1).to({scaleX:0.7206,x:228.15,y:442.5},0).wait(1).to({scaleX:0.7343,x:228.25,y:437.75},0).wait(1).to({scaleX:0.748,scaleY:0.9945,x:228.4,y:432.95},0).wait(1).to({scaleX:0.7617,x:228.5,y:428.2},0).wait(1).to({scaleX:0.7754,x:228.6,y:423.45},0).wait(1).to({scaleX:0.7891,x:228.7,y:418.7},0).wait(1).to({scaleX:0.8028,x:228.75,y:413.95},0).wait(1).to({scaleX:0.8166,x:228.85,y:409.15},0).wait(1).to({scaleX:0.8303,x:228.95,y:404.4},0).wait(1).to({scaleX:0.844,x:229.05,y:399.65},0).wait(1).to({scaleX:0.8577,x:229.2,y:394.9},0).wait(1).to({scaleX:0.8714,scaleY:0.9944,x:229.3,y:390.15},0).wait(1).to({scaleX:0.8851,x:229.4,y:385.4},0).wait(1).to({scaleX:0.8896,x:232.5,y:386.5},0).wait(1).to({scaleX:0.894,scaleY:0.9945,x:235.55,y:387.6},0).wait(1).to({scaleX:0.8985,x:238.65,y:388.75},0).wait(1).to({scaleX:0.903,x:241.75,y:389.9},0).wait(1).to({scaleX:0.9074,x:244.85,y:390.95},0).wait(1).to({scaleX:0.9119,x:247.95,y:392.1},0).wait(1).to({scaleX:0.9163,x:251.1,y:393.2},0).wait(1).to({scaleX:0.9208,x:258.65,y:392.05},0).wait(1).to({scaleX:0.9252,x:266.2,y:390.9},0).wait(1).to({scaleX:0.9297,x:273.75,y:389.7},0).wait(1).to({scaleX:0.9341,scaleY:0.9946,x:281.35,y:388.5},0).wait(1).to({scaleX:0.9386,x:288.9,y:387.3},0).wait(1).to({scaleX:0.9431,x:296.45,y:386.15},0).wait(1).to({scaleX:0.9475,x:304.1,y:385},0).wait(1).to({scaleX:0.952,x:314.6,y:380.65},0).wait(1).to({scaleX:0.9564,x:325.15,y:376.3},0).wait(1).to({scaleX:0.9609,x:335.7,y:372},0).wait(1).to({scaleX:0.9653,x:346.2,y:367.6},0).wait(1).to({scaleX:0.9698,x:356.75,y:363.3},0).wait(1).to({scaleX:0.9743,x:367.35,y:358.9},0).wait(1).to({scaleX:0.9787,scaleY:0.9947,x:377.6,y:359.45},0).wait(1).to({scaleX:0.9832,x:387.9,y:359.95},0).wait(1).to({scaleX:0.9876,x:398.15,y:360.4},0).wait(1).to({scaleX:0.9921,x:408.45,y:360.9},0).wait(1).to({scaleX:0.9965,x:418.7,y:361.4},0).wait(1).to({scaleX:1.001,x:429,y:361.85},0).wait(1).to({scaleX:1.0055,x:441.1,y:363.8},0).wait(1).to({scaleX:1.0099,x:453.15,y:365.75},0).wait(1).to({scaleX:1.0144,x:465.15,y:367.7},0).wait(1).to({scaleX:1.0188,scaleY:0.9948,x:477.2,y:369.7},0).wait(1).to({scaleX:1.0233,x:485.35,y:371.6},0).wait(1).to({scaleX:1.0277,x:493.55,y:373.6},0).wait(1).to({scaleX:1.0322,x:501.7,y:375.55},0).wait(1).to({scaleX:1.0367,x:509.95,y:377.5},0).wait(1).to({scaleX:1.0411,x:518.15,y:379.45},0).wait(1).to({scaleX:1.0456,x:526.3,y:381.35},0).wait(1).to({scaleX:1.05,x:525.6,y:377.5},0).wait(1).to({scaleX:1.0545,x:524.85,y:373.6},0).wait(1).to({scaleX:1.0589,x:524.15,y:369.65},0).wait(1).to({scaleX:1.0634,scaleY:0.9949,x:523.45,y:365.8},0).wait(1).to({scaleX:1.0678,x:522.8,y:361.85},0).wait(1).to({scaleX:1.0723,x:522.05,y:357.95},0).wait(1).to({scaleX:1.0768,x:521.35,y:354.1},0).wait(1).to({scaleX:1.0812,x:521.15,y:351.75},0).wait(1).to({scaleX:1.0857,x:520.95,y:349.45},0).wait(1).to({scaleX:1.0901,x:520.8,y:347.15},0).wait(1).to({scaleX:1.0946,x:520.65,y:344.8},0).wait(1).to({scaleX:1.099,x:520.45,y:342.5},0).wait(1).to({scaleX:1.1035,x:520.25,y:340.15},0).wait(1).to({scaleX:1.108,scaleY:0.995,x:520.05,y:337.9},0).wait(1).to({scaleX:1.1124,x:518.2,y:339.5},0).wait(1).to({scaleX:1.1169,x:516.35,y:341.05},0).wait(1).to({scaleX:1.1213,x:514.5,y:342.7},0).wait(1).to({scaleX:1.1258,x:512.7,y:344.3},0).wait(1).to({scaleX:1.1302,x:510.85,y:345.85},0).wait(1).to({scaleX:1.1347,x:509,y:347.5},0).wait(1).to({scaleX:1.0859,scaleY:0.9949},0).wait(1).to({scaleX:1.0371,scaleY:0.9948},0).wait(1).to({scaleX:0.9882,scaleY:0.9947,x:508.95},0).wait(1).to({scaleX:0.9394,scaleY:0.9946},0).wait(1).to({scaleX:0.8906,scaleY:0.9945},0).wait(1).to({scaleX:0.8418,scaleY:0.9944},0).wait(1).to({scaleX:0.793,scaleY:0.9943,y:347.55},0).wait(1).to({scaleX:0.7441,scaleY:0.9942},0).wait(1).to({scaleX:0.7864,scaleY:0.9941},0).wait(1).to({scaleX:0.8287,scaleY:0.994,y:347.45},0).wait(1).to({scaleX:0.8711,scaleY:0.9939},0).wait(1).to({scaleX:0.9134,scaleY:0.9938},0).wait(1).to({scaleX:0.9557,y:347.5},0).wait(1).to({scaleX:0.998,scaleY:0.9937},0).wait(1).to({scaleX:1.0403,scaleY:0.9936,x:509},0).wait(1).to({scaleX:1.0826,scaleY:0.9935},0).wait(1).to({scaleX:1.1249,scaleY:0.9934},0).wait(1).to({scaleX:1.1672,scaleY:0.9933,x:508.95},0).wait(1).to({scaleX:1.1308},0).wait(1).to({scaleX:1.0943,scaleY:0.9932},0).wait(1).to({scaleX:1.0579,scaleY:0.9931,y:347.55},0).wait(1).to({scaleX:1.0215,scaleY:0.993},0).wait(1).to({scaleX:0.985,scaleY:0.9929,x:509,y:347.45},0).wait(1).to({scaleX:0.9486,scaleY:0.9928},0).wait(1).to({scaleX:0.9121,y:347.5},0).wait(1).to({scaleX:0.8757,scaleY:0.9927},0).wait(1).to({scaleX:0.8392,scaleY:0.9926},0).wait(1).to({scaleX:0.8028,scaleY:0.9925,x:508.95},0).wait(1).to({scaleX:0.8362,scaleY:0.9924},0).wait(1).to({scaleX:0.8697,scaleY:0.9923,x:509},0).wait(1).to({scaleX:0.9031,x:508.95},0).wait(1).to({scaleX:0.9366,scaleY:0.9922,x:509},0).wait(1).to({scaleX:0.97,scaleY:0.9921},0).wait(1).to({scaleX:1.0034,scaleY:0.992},0).wait(1).to({scaleX:1.0369,scaleY:0.9919},0).wait(1).to({scaleX:1.0703,scaleY:0.9918,x:508.95},0).wait(1).to({scaleX:1.1037,x:509,y:347.45},0).wait(1).to({scaleX:1.1372,scaleY:0.9917,y:347.5},0).wait(1).to({scaleX:1.1177,scaleY:0.9916},0).wait(1).to({scaleX:1.0983,scaleY:0.9915},0).wait(1).to({scaleX:1.0788},0).wait(1).to({scaleX:1.0594,scaleY:0.9914},0).wait(1).to({scaleX:1.0399},0).wait(1).to({scaleX:1.0204,scaleY:0.9913},0).wait(1).to({scaleX:1.001,scaleY:0.9912},0).wait(1).to({scaleX:0.9815},0).wait(1).to({scaleX:0.9621,scaleY:0.9911,x:508.95},0).wait(1).to({scaleX:0.9426,scaleY:0.991,x:509},0).wait(1).to({scaleX:0.9232,x:508.95},0).wait(1).to({scaleX:0.9037,scaleY:0.9909,x:509},0).wait(1).to({scaleX:0.8842,scaleY:0.9908,x:508.95},0).wait(1).to({scaleX:0.9028,x:509},0).wait(1).to({scaleX:0.9214,scaleY:0.9907},0).wait(1).to({scaleX:0.94,scaleY:0.9906,x:508.95},0).wait(1).to({scaleX:0.9586,y:347.45},0).wait(1).to({scaleX:0.9771,scaleY:0.9905,y:347.5},0).wait(1).to({scaleX:0.9957,scaleY:0.9904},0).wait(1).to({scaleX:1.0143},0).wait(1).to({scaleX:1.0329,scaleY:0.9903},0).wait(1).to({scaleX:1.0515,x:509},0).wait(1).to({scaleX:1.07,scaleY:0.9902,x:508.95},0).wait(1).to({scaleX:1.0886,scaleY:0.9901,x:509},0).wait(1).to({scaleX:1.1072,x:508.95},0).wait(1).to({scaleX:1.1258,scaleY:0.99,x:509,y:347.55},0).wait(1).to({scaleX:1.1108,scaleY:0.9899,x:508.95,y:347.5},0).wait(1).to({scaleX:1.0959},0).wait(1).to({scaleX:1.0809,scaleY:0.9898,x:509},0).wait(1).to({scaleX:1.066,x:508.95},0).wait(1).to({scaleX:1.051,scaleY:0.9897,y:347.55},0).wait(1).to({scaleX:1.0361,y:347.45},0).wait(1).to({scaleX:1.0211,scaleY:0.9896,x:509,y:347.5},0).wait(1).to({scaleX:1.0062,x:508.95},0).wait(1).to({scaleX:0.9912,scaleY:0.9895,y:347.45},0).wait(1).to({scaleX:0.9763,scaleY:0.9894,y:347.5},0).wait(1).to({scaleX:0.9614,x:509,y:347.45},0).wait(1).to({scaleX:0.9464,scaleY:0.9893,x:508.95,y:347.5},0).wait(1).to({scaleX:0.9315},0).wait(1).to({scaleX:0.9165,scaleY:0.9892,x:509},0).wait(1).to({scaleX:0.9016},0).wait(1).to({scaleX:0.9138,scaleY:0.9891},0).wait(1).to({scaleX:0.926},0).wait(1).to({scaleX:0.9382,scaleY:0.989,x:508.95},0).wait(1).to({scaleX:0.9505},0).wait(1).to({scaleX:0.9627,scaleY:0.9889},0).wait(1).to({scaleX:0.9749},0).wait(1).to({scaleX:0.9872,scaleY:0.9888},0).wait(1).to({scaleX:0.9994,x:509,y:347.55},0).wait(1).to({scaleX:1.0116,scaleY:0.9887,y:347.5},0).wait(1).to({scaleX:1.0238},0).wait(1).to({scaleX:1.0361,scaleY:0.9886},0).wait(1).to({scaleX:1.0483},0).wait(1).to({scaleX:1.0605,scaleY:0.9885,x:508.95},0).wait(1).to({scaleX:1.0727},0).wait(1).to({scaleX:1.085,scaleY:0.9884,y:347.45},0).wait(1).to({scaleX:1.0972,x:509},0).wait(1).to({scaleX:1.1094,scaleY:0.9883,y:347.5},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_אבא = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// אבא
	this.instance = new lib.man("synched",0);
	this.instance.setTransform(721,307.85,1,1,0,0,0,144.8,165.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(600));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


// stage content:
(lib.ocean = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [599];
	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.numChildren - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// timeline functions:
	this.frame_599 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(599).call(this.frame_599).wait(1));

	// Camera
	this.___camera___instance = new lib.___Camera___();
	this.___camera___instance.name = "___camera___instance";
	this.___camera___instance.setTransform(640,360);
	this.___camera___instance.depth = 0;
	this.___camera___instance.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.___camera___instance).wait(121).to({scaleX:0.9948,scaleY:0.9948},0).wait(1).to({scaleX:0.9897,scaleY:0.9897},0).wait(1).to({scaleX:0.9845,scaleY:0.9845},0).wait(1).to({scaleX:0.9793,scaleY:0.9793},0).wait(1).to({scaleX:0.9742,scaleY:0.9742},0).wait(1).to({scaleX:0.969,scaleY:0.969},0).wait(1).to({scaleX:0.9639,scaleY:0.9639},0).wait(1).to({scaleX:0.9587,scaleY:0.9587},0).wait(1).to({scaleX:0.9535,scaleY:0.9535},0).wait(1).to({scaleX:0.9484,scaleY:0.9484},0).wait(1).to({scaleX:0.9432,scaleY:0.9432},0).wait(1).to({scaleX:0.938,scaleY:0.938},0).wait(1).to({scaleX:0.9329,scaleY:0.9329},0).wait(1).to({scaleX:0.9277,scaleY:0.9277},0).wait(1).to({scaleX:0.9226,scaleY:0.9226},0).wait(1).to({scaleX:0.9174,scaleY:0.9174},0).wait(1).to({scaleX:0.9122,scaleY:0.9122},0).wait(1).to({scaleX:0.9071,scaleY:0.9071},0).wait(1).to({scaleX:0.9019,scaleY:0.9019},0).wait(1).to({scaleX:0.8967,scaleY:0.8967},0).wait(1).to({scaleX:0.8916,scaleY:0.8916},0).wait(1).to({scaleX:0.8864,scaleY:0.8864},0).wait(1).to({scaleX:0.8812,scaleY:0.8812},0).wait(1).to({scaleX:0.8761,scaleY:0.8761},0).wait(1).to({scaleX:0.8709,scaleY:0.8709},0).wait(1).to({scaleX:0.8658,scaleY:0.8658},0).wait(1).to({scaleX:0.8606,scaleY:0.8606},0).wait(1).to({scaleX:0.8554,scaleY:0.8554},0).wait(1).to({scaleX:0.8503,scaleY:0.8503},0).wait(1).to({scaleX:0.8451,scaleY:0.8451},0).wait(1).to({scaleX:0.8399,scaleY:0.8399},0).wait(1).to({scaleX:0.8348,scaleY:0.8348},0).wait(1).to({scaleX:0.8296,scaleY:0.8296},0).wait(1).to({scaleX:0.8245,scaleY:0.8245},0).wait(1).to({scaleX:0.8193,scaleY:0.8193},0).wait(1).to({scaleX:0.8141,scaleY:0.8141},0).wait(1).to({scaleX:0.809,scaleY:0.809},0).wait(1).to({scaleX:0.8038,scaleY:0.8038},0).wait(1).to({scaleX:0.7986,scaleY:0.7986},0).wait(1).to({scaleX:0.7935,scaleY:0.7935},0).wait(1).to({scaleX:0.7883,scaleY:0.7883},0).wait(1).to({scaleX:0.7832,scaleY:0.7832},0).wait(1).to({scaleX:0.778,scaleY:0.778},0).wait(1).to({scaleX:0.7728,scaleY:0.7728},0).wait(1).to({scaleX:0.7677,scaleY:0.7677},0).wait(1).to({scaleX:0.7625,scaleY:0.7625},0).wait(1).to({scaleX:0.7573,scaleY:0.7573},0).wait(1).to({scaleX:0.7522,scaleY:0.7522},0).wait(1).to({scaleX:0.747,scaleY:0.747},0).wait(1).to({scaleX:0.7418,scaleY:0.7418},0).wait(1).to({scaleX:0.7367,scaleY:0.7367},0).wait(1).to({scaleX:0.7315,scaleY:0.7315},0).wait(1).to({scaleX:0.7264,scaleY:0.7264},0).wait(1).to({scaleX:0.7212,scaleY:0.7212},0).wait(1).to({scaleX:0.716,scaleY:0.716},0).wait(1).to({scaleX:0.7109,scaleY:0.7109},0).wait(1).to({scaleX:0.7057,scaleY:0.7057},0).wait(1).to({scaleX:0.7005,scaleY:0.7005},0).wait(1).to({scaleX:0.6954,scaleY:0.6954},0).wait(1).to({scaleX:0.6902,scaleY:0.6902},0).wait(420));

	// ציפור_obj_
	this.ציפור = new lib.Scene_1_ציפור();
	this.ציפור.name = "ציפור";
	this.ציפור.setTransform(1327.4,218.2,1,1,0,0,0,1327.4,218.2);
	this.ציפור.depth = 0;
	this.ציפור.isAttachedToCamera = 0
	this.ציפור.isAttachedToMask = 0
	this.ציפור.layerDepth = 0
	this.ציפור.layerIndex = 0
	this.ציפור.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.ציפור).wait(1).to({regX:977.9,regY:63.8,x:977.9,y:63.8},0).wait(110).to({_off:true},1).wait(488));

	// ילד_obj_
	this.ילד = new lib.Scene_1_ילד();
	this.ילד.name = "ילד";
	this.ילד.setTransform(434,332.3,1,1,0,0,0,434,332.3);
	this.ילד.depth = 0;
	this.ילד.isAttachedToCamera = 0
	this.ילד.isAttachedToMask = 0
	this.ילד.layerDepth = 0
	this.ילד.layerIndex = 1
	this.ילד.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.ילד).wait(600));

	// ראש_אב_obj_
	this.ראש_אב = new lib.Scene_1_ראש_אב();
	this.ראש_אב.name = "ראש_אב";
	this.ראש_אב.setTransform(713.4,179.8,1,1,0,0,0,713.4,179.8);
	this.ראש_אב.depth = 0;
	this.ראש_אב.isAttachedToCamera = 0
	this.ראש_אב.isAttachedToMask = 0
	this.ראש_אב.layerDepth = 0
	this.ראש_אב.layerIndex = 2
	this.ראש_אב.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.ראש_אב).wait(600));

	// אבא_obj_
	this.אבא = new lib.Scene_1_אבא();
	this.אבא.name = "אבא";
	this.אבא.setTransform(721,345.9,1,1,0,0,0,721,345.9);
	this.אבא.depth = 0;
	this.אבא.isAttachedToCamera = 0
	this.אבא.isAttachedToMask = 0
	this.אבא.layerDepth = 0
	this.אבא.layerIndex = 3
	this.אבא.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.אבא).wait(600));

	// קרני_שמש_obj_
	this.קרני_שמש = new lib.Scene_1_קרני_שמש();
	this.קרני_שמש.name = "קרני_שמש";
	this.קרני_שמש.setTransform(177.2,163.1,1,1,0,0,0,177.2,163.1);
	this.קרני_שמש.depth = 0;
	this.קרני_שמש.isAttachedToCamera = 0
	this.קרני_שמש.isAttachedToMask = 0
	this.קרני_שמש.layerDepth = 0
	this.קרני_שמש.layerIndex = 4
	this.קרני_שמש.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.קרני_שמש).wait(600));

	// שמש_obj_
	this.שמש = new lib.Scene_1_שמש();
	this.שמש.name = "שמש";
	this.שמש.setTransform(124.5,113.5,1,1,0,0,0,124.5,113.5);
	this.שמש.depth = 0;
	this.שמש.isAttachedToCamera = 0
	this.שמש.isAttachedToMask = 0
	this.שמש.layerDepth = 0
	this.שמש.layerIndex = 5
	this.שמש.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.שמש).wait(600));

	// רפסודה_obj_
	this.רפסודה = new lib.Scene_1_רפסודה();
	this.רפסודה.name = "רפסודה";
	this.רפסודה.setTransform(643.2,578.8,1,1,0,0,0,643.2,578.8);
	this.רפסודה.depth = 0;
	this.רפסודה.isAttachedToCamera = 0
	this.רפסודה.isAttachedToMask = 0
	this.רפסודה.layerDepth = 0
	this.רפסודה.layerIndex = 6
	this.רפסודה.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.רפסודה).wait(600));

	// ים4_obj_
	this.ים4 = new lib.Scene_1_ים4();
	this.ים4.name = "ים4";
	this.ים4.setTransform(616.8,758.9,1,1,0,0,0,616.8,758.9);
	this.ים4.depth = 0;
	this.ים4.isAttachedToCamera = 0
	this.ים4.isAttachedToMask = 0
	this.ים4.layerDepth = 0
	this.ים4.layerIndex = 7
	this.ים4.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.ים4).wait(600));

	// ים3_obj_
	this.ים3 = new lib.Scene_1_ים3();
	this.ים3.name = "ים3";
	this.ים3.setTransform(610.1,675.6,1,1,0,0,0,610.1,675.6);
	this.ים3.depth = 0;
	this.ים3.isAttachedToCamera = 0
	this.ים3.isAttachedToMask = 0
	this.ים3.layerDepth = 0
	this.ים3.layerIndex = 8
	this.ים3.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.ים3).wait(600));

	// ים2_obj_
	this.ים2 = new lib.Scene_1_ים2();
	this.ים2.name = "ים2";
	this.ים2.setTransform(590.7,597.6,1,1,0,0,0,590.7,597.6);
	this.ים2.depth = 0;
	this.ים2.isAttachedToCamera = 0
	this.ים2.isAttachedToMask = 0
	this.ים2.layerDepth = 0
	this.ים2.layerIndex = 9
	this.ים2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.ים2).wait(600));

	// ים1_obj_
	this.ים1 = new lib.Scene_1_ים1();
	this.ים1.name = "ים1";
	this.ים1.setTransform(648.7,495.1,1,1,0,0,0,648.7,495.1);
	this.ים1.depth = 0;
	this.ים1.isAttachedToCamera = 0
	this.ים1.isAttachedToMask = 0
	this.ים1.layerDepth = 0
	this.ים1.layerIndex = 10
	this.ים1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.ים1).wait(600));

	// חכה_obj_
	this.חכה = new lib.Scene_1_חכה();
	this.חכה.name = "חכה";
	this.חכה.setTransform(538.5,282.7,1,1,0,0,0,538.5,282.7);
	this.חכה.depth = 0;
	this.חכה.isAttachedToCamera = 0
	this.חכה.isAttachedToMask = 0
	this.חכה.layerDepth = 0
	this.חכה.layerIndex = 11
	this.חכה.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.חכה).wait(600));

	// דג_obj_
	this.דג = new lib.Scene_1_דג();
	this.דג.name = "דג";
	this.דג.depth = 0;
	this.דג.isAttachedToCamera = 0
	this.דג.isAttachedToMask = 0
	this.דג.layerDepth = 0
	this.דג.layerIndex = 12
	this.דג.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.דג).wait(117).to({regX:328.3,regY:434.9,x:328.3,y:434.9},0).wait(483));

	// ים_obj_
	this.ים = new lib.Scene_1_ים();
	this.ים.name = "ים";
	this.ים.setTransform(611.1,421.2,1,1,0,0,0,611.1,421.2);
	this.ים.depth = 0;
	this.ים.isAttachedToCamera = 0
	this.ים.isAttachedToMask = 0
	this.ים.layerDepth = 0
	this.ים.layerIndex = 13
	this.ים.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.ים).wait(600));

	// שמיים_obj_
	this.שמיים = new lib.Scene_1_שמיים();
	this.שמיים.name = "שמיים";
	this.שמיים.setTransform(640.2,219.3,1,1,0,0,0,640.2,219.3);
	this.שמיים.depth = 0;
	this.שמיים.isAttachedToCamera = 0
	this.שמיים.isAttachedToMask = 0
	this.שמיים.layerDepth = 0
	this.שמיים.layerIndex = 14
	this.שמיים.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.שמיים).wait(600));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(34.8,264,1804,645.1);
// library properties:
lib.properties = {
	id: 'B4510F465C27BD479DF00E205CD26859',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['B4510F465C27BD479DF00E205CD26859'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}

p._getProjectionMatrix = function(container, totalDepth) {	var focalLength = 528.25;
	var projectionCenter = { x : lib.properties.width/2, y : lib.properties.height/2 };
	var scale = (totalDepth + focalLength)/focalLength;
	var scaleMat = new createjs.Matrix2D;
	scaleMat.a = 1/scale;
	scaleMat.d = 1/scale;
	var projMat = new createjs.Matrix2D;
	projMat.tx = -projectionCenter.x;
	projMat.ty = -projectionCenter.y;
	projMat = projMat.prependMatrix(scaleMat);
	projMat.tx += projectionCenter.x;
	projMat.ty += projectionCenter.y;
	return projMat;
}
p._handleTick = function(event) {
	var cameraInstance = exportRoot.___camera___instance;
	if(cameraInstance !== undefined && cameraInstance.pinToObject !== undefined)
	{
		cameraInstance.x = cameraInstance.pinToObject.x + cameraInstance.pinToObject.pinOffsetX;
		cameraInstance.y = cameraInstance.pinToObject.y + cameraInstance.pinToObject.pinOffsetY;
		if(cameraInstance.pinToObject.parent !== undefined && cameraInstance.pinToObject.parent.depth !== undefined)
		cameraInstance.depth = cameraInstance.pinToObject.parent.depth + cameraInstance.pinToObject.pinOffsetZ;
	}
	stage._applyLayerZDepth(exportRoot);
}
p._applyLayerZDepth = function(parent)
{
	var cameraInstance = parent.___camera___instance;
	var focalLength = 528.25;
	var projectionCenter = { 'x' : 0, 'y' : 0};
	if(parent === exportRoot)
	{
		var stageCenter = { 'x' : lib.properties.width/2, 'y' : lib.properties.height/2 };
		projectionCenter.x = stageCenter.x;
		projectionCenter.y = stageCenter.y;
	}
	for(child in parent.children)
	{
		var layerObj = parent.children[child];
		if(layerObj == cameraInstance)
			continue;
		stage._applyLayerZDepth(layerObj, cameraInstance);
		if(layerObj.layerDepth === undefined)
			continue;
		if(layerObj.currentFrame != layerObj.parent.currentFrame)
		{
			layerObj.gotoAndPlay(layerObj.parent.currentFrame);
		}
		var matToApply = new createjs.Matrix2D;
		var cameraMat = new createjs.Matrix2D;
		var totalDepth = layerObj.layerDepth ? layerObj.layerDepth : 0;
		var cameraDepth = 0;
		if(cameraInstance && !layerObj.isAttachedToCamera)
		{
			var mat = cameraInstance.getMatrix();
			mat.tx -= projectionCenter.x;
			mat.ty -= projectionCenter.y;
			cameraMat = mat.invert();
			cameraMat.prependTransform(projectionCenter.x, projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
			cameraMat.appendTransform(-projectionCenter.x, -projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
			if(cameraInstance.depth)
				cameraDepth = cameraInstance.depth;
		}
		if(layerObj.depth)
		{
			totalDepth = layerObj.depth;
		}
		//Offset by camera depth
		totalDepth -= cameraDepth;
		if(totalDepth < -focalLength)
		{
			matToApply.a = 0;
			matToApply.d = 0;
		}
		else
		{
			if(layerObj.layerDepth)
			{
				var sizeLockedMat = stage._getProjectionMatrix(parent, layerObj.layerDepth);
				if(sizeLockedMat)
				{
					sizeLockedMat.invert();
					matToApply.prependMatrix(sizeLockedMat);
				}
			}
			matToApply.prependMatrix(cameraMat);
			var projMat = stage._getProjectionMatrix(parent, totalDepth);
			if(projMat)
			{
				matToApply.prependMatrix(projMat);
			}
		}
		layerObj.transformMatrix = matToApply;
	}
}
an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}

// Virtual camera API : 

an.VirtualCamera = new function() {
var _camera = new Object();
function VC(timeline) {
	this.timeline = timeline;
	this.camera = timeline.___camera___instance;
	this.centerX = lib.properties.width / 2;
	this.centerY = lib.properties.height / 2;
	this.camAxisX = this.camera.x;
	this.camAxisY = this.camera.y;
	if(timeline.___camera___instance == null || timeline.___camera___instance == undefined ) {
		timeline.___camera___instance = new cjs.MovieClip();
		timeline.___camera___instance.visible = false;
		timeline.___camera___instance.parent = timeline;
		timeline.___camera___instance.setTransform(this.centerX, this.centerY);
	}
	this.camera = timeline.___camera___instance;
}

VC.prototype.moveBy = function(x, y, z) {
z = typeof z !== 'undefined' ? z : 0;
	var position = this.___getCamPosition___();
	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	this.camAxisX = this.camAxisX - x;
	this.camAxisY = this.camAxisY - y;
	var posX = position.x + offX;
	var posY = position.y + offY;
	this.camera.x = this.centerX - posX;
	this.camera.y = this.centerY - posY;
	this.camera.depth += z;
};

VC.prototype.setPosition = function(x, y, z) {
	z = typeof z !== 'undefined' ? z : 0;

	const MAX_X = 10000;
	const MIN_X = -10000;
	const MAX_Y = 10000;
	const MIN_Y = -10000;
	const MAX_Z = 10000;
	const MIN_Z = -5000;

	if(x > MAX_X)
	  x = MAX_X;
	else if(x < MIN_X)
	  x = MIN_X;
	if(y > MAX_Y)
	  y = MAX_Y;
	else if(y < MIN_Y)
	  y = MIN_Y;
	if(z > MAX_Z)
	  z = MAX_Z;
	else if(z < MIN_Z)
	  z = MIN_Z;

	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	
	this.camAxisX = this.centerX - x;
	this.camAxisY = this.centerY - y;
	this.camera.x = this.centerX - offX;
	this.camera.y = this.centerY - offY;
	this.camera.depth = z;
};

VC.prototype.getPosition = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camAxisX;
	loc['y'] = this.centerY - this.camAxisY;
	loc['z'] = this.camera.depth;
	return loc;
};

VC.prototype.resetPosition = function() {
	this.setPosition(0, 0);
};

VC.prototype.zoomBy = function(zoom) {
	this.setZoom( (this.getZoom() * zoom) / 100);
};

VC.prototype.setZoom = function(zoom) {
	const MAX_zoom = 10000;
	const MIN_zoom = 1;
	if(zoom > MAX_zoom)
	zoom = MAX_zoom;
	else if(zoom < MIN_zoom)
	zoom = MIN_zoom;
	this.camera.scaleX = 100 / zoom;
	this.camera.scaleY = 100 / zoom;
};

VC.prototype.getZoom = function() {
	return 100 / this.camera.scaleX;
};

VC.prototype.resetZoom = function() {
	this.setZoom(100);
};

VC.prototype.rotateBy = function(angle) {
	this.setRotation( this.getRotation() + angle );
};

VC.prototype.setRotation = function(angle) {
	const MAX_angle = 180;
	const MIN_angle = -179;
	if(angle > MAX_angle)
		angle = MAX_angle;
	else if(angle < MIN_angle)
		angle = MIN_angle;
	this.camera.rotation = -angle;
};

VC.prototype.getRotation = function() {
	return -this.camera.rotation;
};

VC.prototype.resetRotation = function() {
	this.setRotation(0);
};

VC.prototype.reset = function() {
	this.resetPosition();
	this.resetZoom();
	this.resetRotation();
	this.unpinCamera();
};
VC.prototype.setZDepth = function(zDepth) {
	const MAX_zDepth = 10000;
	const MIN_zDepth = -5000;
	if(zDepth > MAX_zDepth)
		zDepth = MAX_zDepth;
	else if(zDepth < MIN_zDepth)
		zDepth = MIN_zDepth;
	this.camera.depth = zDepth;
}
VC.prototype.getZDepth = function() {
	return this.camera.depth;
}
VC.prototype.resetZDepth = function() {
	this.camera.depth = 0;
}

VC.prototype.pinCameraToObject = function(obj, offsetX, offsetY, offsetZ) {

	offsetX = typeof offsetX !== 'undefined' ? offsetX : 0;

	offsetY = typeof offsetY !== 'undefined' ? offsetY : 0;

	offsetZ = typeof offsetZ !== 'undefined' ? offsetZ : 0;
	if(obj === undefined)
		return;
	this.camera.pinToObject = obj;
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
};

VC.prototype.setPinOffset = function(offsetX, offsetY, offsetZ) {
	if(this.camera.pinToObject != undefined) {
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
	}
};

VC.prototype.unpinCamera = function() {
	this.camera.pinToObject = undefined;
};
VC.prototype.___getCamPosition___ = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camera.x;
	loc['y'] = this.centerY - this.camera.y;
	loc['z'] = this.depth;
	return loc;
};

this.getCamera = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	if(_camera[timeline] == undefined)
	_camera[timeline] = new VC(timeline);
	return _camera[timeline];
}

this.getCameraAsMovieClip = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	return this.getCamera(timeline).camera;
}
}


// Layer depth API : 

an.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;