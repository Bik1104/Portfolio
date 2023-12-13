(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Задание A_atlas_1", frames: [[0,0,1092,462],[1094,112,32,32],[1094,146,32,32],[144,474,8,16],[0,482,8,16],[10,482,8,16],[20,482,8,16],[1094,444,16,16],[1094,462,16,16],[144,464,16,8],[0,464,16,16],[1094,418,16,24],[1094,180,16,32],[1094,214,16,32],[1094,248,16,32],[1094,282,16,32],[1094,316,16,32],[1094,350,16,32],[18,464,16,16],[36,464,16,16],[54,464,16,16],[72,464,16,16],[90,464,16,16],[108,464,16,16],[1094,384,16,32],[126,464,16,16],[1094,0,64,110]]}
];


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



(lib.Background = function() {
	this.initialize(ss["Задание A_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Block = function() {
	this.initialize(ss["Задание A_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Block_hit = function() {
	this.initialize(ss["Задание A_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Coin_1 = function() {
	this.initialize(ss["Задание A_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Coin_2 = function() {
	this.initialize(ss["Задание A_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Coin_3 = function() {
	this.initialize(ss["Задание A_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Coin_4 = function() {
	this.initialize(ss["Задание A_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Gumba_1 = function() {
	this.initialize(ss["Задание A_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Gumba_2 = function() {
	this.initialize(ss["Задание A_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Gumba_death = function() {
	this.initialize(ss["Задание A_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Mario_grow_1 = function() {
	this.initialize(ss["Задание A_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Mario_grow_2 = function() {
	this.initialize(ss["Задание A_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Mario_grow_3 = function() {
	this.initialize(ss["Задание A_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Mario_idle = function() {
	this.initialize(ss["Задание A_atlas_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.Mario_jump = function() {
	this.initialize(ss["Задание A_atlas_1"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.Mario_run_1 = function() {
	this.initialize(ss["Задание A_atlas_1"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.Mario_run_2 = function() {
	this.initialize(ss["Задание A_atlas_1"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.Mario_run_3 = function() {
	this.initialize(ss["Задание A_atlas_1"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.Mario_small_idle = function() {
	this.initialize(ss["Задание A_atlas_1"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.Mario_small_jump = function() {
	this.initialize(ss["Задание A_atlas_1"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.Mario_small_run_1 = function() {
	this.initialize(ss["Задание A_atlas_1"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.Mario_small_run_2 = function() {
	this.initialize(ss["Задание A_atlas_1"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.Mario_small_run_3 = function() {
	this.initialize(ss["Задание A_atlas_1"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.Mario_small_stop = function() {
	this.initialize(ss["Задание A_atlas_1"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.Mario_stop = function() {
	this.initialize(ss["Задание A_atlas_1"]);
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.Mushroom = function() {
	this.initialize(ss["Задание A_atlas_1"]);
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.Pump = function() {
	this.initialize(ss["Задание A_atlas_1"]);
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();
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


(lib.Mario_small_run = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_5
	this.instance = new lib.Mario_small_run_3();
	this.instance.setTransform(-18,-16,2,2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({_off:false},0).wait(4));

	// Слой_4
	this.instance_1 = new lib.Mario_small_run_2();
	this.instance_1.setTransform(-17,-16,2,2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).to({_off:true},4).wait(4));

	// Слой_1
	this.instance_2 = new lib.Mario_small_run_1();
	this.instance_2.setTransform(-16,-16,2,2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},4).wait(8));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18,-16,34,32);


(lib.Mario_run = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_3
	this.instance = new lib.Mario_run_3();
	this.instance.setTransform(-13,-32,2,2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({_off:false},0).wait(1).to({_off:true},1).wait(1).to({_off:false},0).wait(1));

	// Слой_2
	this.instance_1 = new lib.Mario_run_2();
	this.instance_1.setTransform(-13,-32,2,2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).to({_off:true},4).wait(4));

	// Слой_1
	this.instance_2 = new lib.Mario_run_1();
	this.instance_2.setTransform(-16,-32,2,2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},4).wait(8));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,-32,35,64);


(lib.Mario_grow = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_3
	this.instance = new lib.Mario_grow_3();
	this.instance.setTransform(-15,-48,2,2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({_off:false},0).wait(5));

	// Слой_2
	this.instance_1 = new lib.Mario_grow_2();
	this.instance_1.setTransform(-15,-33,2,2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({_off:false},0).to({_off:true},5).wait(5));

	// Слой_1
	this.instance_2 = new lib.Mario_grow_1();
	this.instance_2.setTransform(-16,-16,2,2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},5).wait(10));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,-48,33,64);


(lib.Gumba_walk = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_2
	this.instance = new lib.Gumba_2();
	this.instance.setTransform(-16,-16,2,2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({_off:false},0).wait(8));

	// Слой_1
	this.instance_1 = new lib.Gumba_1();
	this.instance_1.setTransform(-16,-16,2,2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(7).to({_off:true},1).wait(8));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,-16,32,32);


(lib.Coin_run = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_4
	this.instance = new lib.Coin_4();
	this.instance.setTransform(-8,-16,2,2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12).to({_off:false},0).wait(4));

	// Слой_3
	this.instance_1 = new lib.Coin_3();
	this.instance_1.setTransform(-9,-16,2,2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(8).to({_off:false},0).to({_off:true},4).wait(4));

	// Слой_2
	this.instance_2 = new lib.Coin_2();
	this.instance_2.setTransform(-8,-17,2,2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off:false},0).to({_off:true},4).wait(8));

	// Слой_1
	this.instance_3 = new lib.Coin_1();
	this.instance_3.setTransform(-8,-16,2,2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},4).wait(12));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9,-17,17,33);


(lib.Block_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Block();
	this.instance.setTransform(-16,-16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,-16,32,32);


(lib.Символ3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Block();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(0,0,32,32), null);


(lib.Символ2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Block();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(0,0,32,32), null);


(lib.Символ1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Block();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(0,0,32,32), null);


(lib.Анимация15 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Mario_idle();
	this.instance.setTransform(-16,-32,2,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,-32,32,64);


(lib.Анимация14 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Mario_stop();
	this.instance.setTransform(-16,-32,2,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,-32,32,64);


(lib.Анимация13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Mario_jump();
	this.instance.setTransform(-16,-32,2,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,-32,32,64);


(lib.Анимация12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Mario_stop();
	this.instance.setTransform(16,-32,2,2,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,-32,32,64);


(lib.Анимация11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Mario_jump();
	this.instance.setTransform(16,-32,2,2,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,-32,32,64);


(lib.Анимация9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Mario_jump();
	this.instance.setTransform(16,-32,2,2,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,-32,32,64);


(lib.Анимация8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Mario_stop();
	this.instance.setTransform(16,-32,2,2,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,-32,32,64);


(lib.Анимация7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Mushroom();
	this.instance.setTransform(-16,-16,2,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,-16,32,32);


(lib.Анимация6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Mario_small_stop();
	this.instance.setTransform(-16,-16,2,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,-16,32,32);


(lib.Анимация5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Mario_small_jump();
	this.instance.setTransform(-16,-16,2,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,-16,32,32);


(lib.Анимация4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Mario_small_jump();
	this.instance.setTransform(-16,-16,2,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,-16,32,32);


(lib.Анимация3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Gumba_death();
	this.instance.setTransform(-16,-8,2,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,-8,32,16);


(lib.Анимация2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Mario_small_jump();
	this.instance.setTransform(-16,-16,2,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,-16,32,32);


(lib.Анимация1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Mario_small_stop();
	this.instance.setTransform(-16,-16,2,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,-16,32,32);


// stage content:
(lib.ЗаданиеA = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Block_4_hit
	this.instance = new lib.Block_hit();
	this.instance.setTransform(704,160);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(200).to({_off:false},0).wait(50));

	// Block_4
	this.instance_1 = new lib.Символ3();
	this.instance_1.setTransform(720,177,1,1,0,0,0,16,16);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(192).to({y:173.85},0).wait(1).to({y:170.7},0).wait(1).to({y:167.55},0).wait(1).to({y:164.4},0).wait(1).to({y:167.25},0).wait(1).to({y:170.15},0).wait(1).to({y:173},0).wait(1).to({y:175.9},0).wait(51));

	// Coin_3
	this.instance_2 = new lib.Coin_run("synched",0);
	this.instance_2.setTransform(720.25,145);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(191).to({_off:false},0).to({_off:true},17).wait(42));

	// Block_3_hit
	this.instance_3 = new lib.Block_hit();
	this.instance_3.setTransform(736,288);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(144).to({_off:false},0).wait(106));

	// Block_3
	this.instance_4 = new lib.Символ2();
	this.instance_4.setTransform(752,304,1,1,0,0,0,16,16);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(136).to({y:300.2},0).wait(1).to({y:296.45},0).wait(1).to({y:292.65},0).wait(1).to({y:288.9},0).wait(1).to({y:292.65},0).wait(1).to({y:296.45},0).wait(1).to({y:300.2},0).wait(1).to({y:304},0).wait(107));

	// Coin_2
	this.instance_5 = new lib.Coin_run("synched",0);
	this.instance_5.setTransform(752,272);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(135).to({_off:false},0).to({_off:true},17).wait(98));

	// Block_2_hit
	this.instance_6 = new lib.Block_hit();
	this.instance_6.setTransform(673,288);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(74).to({_off:false},0).wait(176));

	// Block_2
	this.instance_7 = new lib.Символ1();
	this.instance_7.setTransform(689,304,1,1,0,0,0,16,16);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(66).to({y:300.75},0).wait(1).to({y:297.55},0).wait(1).to({y:294.35},0).wait(1).to({y:291.15},0).wait(1).to({y:294.35},0).wait(1).to({y:297.55},0).wait(1).to({y:300.75},0).wait(1).to({y:304},0).wait(177));

	// Block_1_hit
	this.instance_8 = new lib.Block_hit();
	this.instance_8.setTransform(512,288);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(58).to({_off:false},0).wait(192));

	// Block_1
	this.instance_9 = new lib.Block_1("synched",0);
	this.instance_9.setTransform(528,304);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({y:299.5833},0).wait(1).to({y:295.1667},0).wait(1).to({y:290.75},0).wait(1).to({y:294.0625},0).wait(1).to({y:297.375},0).wait(1).to({y:300.6875},0).wait(1).to({y:304},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// Coin_1
	this.instance_10 = new lib.Coin_run("synched",0);
	this.instance_10.setTransform(528,272);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(50).to({_off:false},0).to({_off:true},17).wait(183));

	// Pump
	this.instance_11 = new lib.Pump();
	this.instance_11.setTransform(897,352);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(250));

	// Mushroom
	this.instance_12 = new lib.Mushroom();
	this.instance_12.setTransform(673,256,2,2);

	this.instance_13 = new lib.Анимация7("synched",0);
	this.instance_13.setTransform(689,272);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_12}]},65).to({state:[{t:this.instance_13}]},9).to({state:[{t:this.instance_13}]},9).to({state:[{t:this.instance_13}]},11).to({state:[{t:this.instance_13}]},5).to({state:[]},1).wait(150));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(74).to({_off:false},0).to({x:784.55},9).to({x:876.8,y:399.8},11).to({x:851,y:402},5).to({_off:true},1).wait(150));

	// Gumba
	this.instance_14 = new lib.Gumba_walk("synched",0);
	this.instance_14.setTransform(861,401);

	this.instance_15 = new lib.Анимация3("synched",0);
	this.instance_15.setTransform(528,409);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({x:528,startPosition:7},47).to({_off:true,y:409,startPosition:0},1).wait(202));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(47).to({_off:false},1).to({rotation:180,x:586,y:474},6).to({_off:true},1).wait(195));

	// Mario
	this.instance_16 = new lib.Mario_small_idle();
	this.instance_16.setTransform(65,385,2,2);

	this.instance_17 = new lib.Mario_small_run("synched",0);
	this.instance_17.setTransform(81,401);
	this.instance_17._off = true;

	this.instance_18 = new lib.Анимация1("synched",0);
	this.instance_18.setTransform(392,401);
	this.instance_18._off = true;

	this.instance_19 = new lib.Анимация2("synched",0);
	this.instance_19.setTransform(455,404);
	this.instance_19._off = true;

	this.instance_20 = new lib.Анимация4("synched",0);
	this.instance_20.setTransform(506,373);
	this.instance_20._off = true;

	this.instance_21 = new lib.Анимация5("synched",0);
	this.instance_21.setTransform(640,400);
	this.instance_21._off = true;

	this.instance_22 = new lib.Анимация6("synched",0);
	this.instance_22.setTransform(788,402);
	this.instance_22._off = true;

	this.instance_23 = new lib.Mario_grow("synched",0);
	this.instance_23.setTransform(819,402);

	this.instance_24 = new lib.Mario_run("synched",0);
	this.instance_24.setTransform(820,383.9,1,1,0,0,180);
	this.instance_24._off = true;

	this.instance_25 = new lib.Анимация8("synched",0);
	this.instance_25.setTransform(773,384);
	this.instance_25._off = true;

	this.instance_26 = new lib.Mario_idle();
	this.instance_26.setTransform(768,353,2,2,0,0,180);
	this.instance_26._off = true;

	this.instance_27 = new lib.Анимация9("synched",0);
	this.instance_27.setTransform(752,385);
	this.instance_27._off = true;

	this.instance_28 = new lib.Анимация11("synched",0);
	this.instance_28.setTransform(862,385);
	this.instance_28._off = true;

	this.instance_29 = new lib.Анимация12("synched",0);
	this.instance_29.setTransform(737,255);
	this.instance_29._off = true;

	this.instance_30 = new lib.Анимация13("synched",0);
	this.instance_30.setTransform(784,256);
	this.instance_30._off = true;

	this.instance_31 = new lib.Анимация14("synched",0);
	this.instance_31.setTransform(910,320);
	this.instance_31._off = true;

	this.instance_32 = new lib.Анимация15("synched",0);
	this.instance_32.setTransform(930,321);
	this.instance_32._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_16,p:{x:65,y:385}}]}).to({state:[{t:this.instance_17}]},11).to({state:[{t:this.instance_17}]},27).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_18}]},4).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},3).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},6).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_17}]},6).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},7).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_17}]},5).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_22}]},3).to({state:[{t:this.instance_16,p:{x:803,y:386}}]},1).to({state:[{t:this.instance_16,p:{x:803,y:386}}]},19).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},15).to({state:[{t:this.instance_24}]},5).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_25}]},3).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},5).to({state:[{t:this.instance_27}]},5).to({state:[{t:this.instance_27}]},5).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_24}]},5).to({state:[{t:this.instance_24}]},10).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_28}]},4).to({state:[{t:this.instance_28}]},3).to({state:[{t:this.instance_28}]},3).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_24}]},8).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_29}]},3).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},5).to({state:[{t:this.instance_27}]},5).to({state:[{t:this.instance_27}]},5).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_24}]},5).to({state:[{t:this.instance_24}]},7).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_30}]},3).to({state:[{t:this.instance_30}]},3).to({state:[{t:this.instance_30}]},3).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_31}]},4).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_32}]},5).to({state:[{t:this.instance_32}]},19).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(11).to({_off:false},0).to({x:384.95,startPosition:3},27).to({_off:true,x:392,startPosition:0},1).wait(15).to({_off:false,regX:-1,guide:{path:[575.1,404.1,575.1,404.1,575.1,404.1]}},1).to({x:638,startPosition:6},6).to({_off:true,regX:0,x:640,y:400,startPosition:0},1).wait(7).to({_off:false,regX:-1,guide:{path:[730.1,402.1,730.1,402.1,730.1,402.1]}},1).to({x:790,startPosition:5},5).to({_off:true,regX:0,x:788,startPosition:0},1).wait(174));
	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(38).to({_off:false},1).to({x:448},4).to({_off:true,x:455,y:404},1).wait(206));
	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(43).to({_off:false},1).to({guide:{path:[455,404,482.8,318.7,508.4,367.8]}},3).to({_off:true,x:506,y:373},1).wait(202));
	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(47).to({_off:false},1).to({guide:{path:[506,373,507,370.1,508.1,367.4,541.5,283,575,404]}},6).to({_off:true,regX:-1},1).wait(195));
	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(61).to({_off:false},1).to({guide:{path:[640,400,652.4,365.6,665.4,347.9,678.1,330.8,690.2,331.2,702.2,331.5,712.3,349.3,722.7,367.5,730,402]}},7).to({_off:true,regX:-1,guide:{path:[730.1,402.1,730.1,402.1,730.1,402.1]}},1).wait(180));
	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(75).to({_off:false},1).to({x:816},3).to({_off:true,scaleX:2,scaleY:2,x:803,y:386},1).wait(170));
	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(115).to({_off:false},0).to({x:774.5,startPosition:5},5).to({_off:true,skewY:0,x:773,y:384,startPosition:0},1).wait(25).to({_off:false,regX:1.5,x:752.6,y:385},0).to({x:862.6,startPosition:4},10).to({_off:true,regX:0,x:862,startPosition:0},1).wait(10).to({_off:false,regX:1.5,skewY:180,x:781.65,y:255.4},1).to({x:736.15,startPosition:11},8).to({_off:true,regX:0,skewY:0,x:737,y:255,startPosition:0},1).wait(25).to({_off:false,regX:1.5,x:720.5,y:256},0).to({x:779.5,startPosition:7},7).to({_off:true,regX:0,x:784,startPosition:0},1).wait(40));
	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(120).to({_off:false},1).to({x:752.75},3).to({_off:true,scaleX:2,scaleY:2,skewY:180,x:768,y:353},1).wait(125));
	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(124).to({_off:false},1).to({_off:true},5).wait(10).to({_off:false},1).to({_off:true},5).wait(34).to({_off:false,x:736,y:223},1).to({_off:true},5).wait(10).to({_off:false,y:224},1).to({_off:true},5).wait(22).to({_off:false,skewY:0,x:914,y:289},1).to({_off:true},5).wait(20));
	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(130).to({_off:false},0).to({y:350.85},5).to({y:383.75},5).to({_off:true,scaleX:2,scaleY:2,skewY:180,x:768,y:353},1).wait(45).to({_off:false,scaleX:1,scaleY:1,skewY:0,x:720.4,y:255.4,mode:"synched",startPosition:0},0).to({y:223.8},5).to({y:256.7},5).to({_off:true,scaleX:2,scaleY:2,skewY:180,x:736,y:224},1).wait(53));
	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(156).to({_off:false},1).to({x:848.75,y:304.75},4).to({x:828.5,y:268.05},3).to({x:782.95,y:255.4},3).to({_off:true,regX:1.5,skewY:180,x:781.65},1).wait(82));
	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(176).to({_off:false},1).to({x:720.55},3).to({_off:true,scaleX:2,scaleY:2,skewY:180,x:736,y:223},1).wait(69));
	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(209).to({_off:false},1).to({x:839.35,y:244.3},3).to({x:887.7,y:265.15},3).to({x:914,y:319.95},3).to({_off:true,x:910,y:320},1).wait(30));
	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(219).to({_off:false},1).to({x:931},4).to({_off:true,scaleX:2,scaleY:2,x:914,y:289},1).wait(25));
	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(230).to({_off:false},0).to({y:425},19).wait(1));

	// Background
	this.instance_33 = new lib.Background();

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(250));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(546,231,546,251);
// library properties:
lib.properties = {
	id: '0B590BC86584B3429550C05489C93A8A',
	width: 1092,
	height: 462,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Задание A_atlas_1.png", id:"Задание A_atlas_1"}
	],
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
an.compositions['0B590BC86584B3429550C05489C93A8A'] = {
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
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;