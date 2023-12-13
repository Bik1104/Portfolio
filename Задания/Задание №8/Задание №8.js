(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Задание №8_atlas_1", frames: [[1053,429,516,420],[953,889,451,486],[1406,851,415,233],[0,0,485,508],[0,1348,487,467],[572,420,479,467],[489,1348,462,479],[1059,0,542,427],[0,930,552,416],[0,510,570,418],[487,0,570,418],[0,1817,261,101],[953,1377,471,341]]},
		{name:"Задание №8_atlas_2", frames: [[0,0,582,1196],[584,502,678,484],[759,1443,631,460],[1264,502,734,427],[0,1198,757,558],[584,0,749,500],[1468,931,578,519],[1335,0,691,424],[1392,1452,514,564],[759,988,707,453]]}
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



(lib.CachedBmp_3 = function() {
	this.initialize(ss["Задание №8_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(img.CachedBmp_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2563,1440);


(lib.CachedBmp_1 = function() {
	this.initialize(img.CachedBmp_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2560,1440);


(lib.Рубка_01 = function() {
	this.initialize(ss["Задание №8_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Рубка_02 = function() {
	this.initialize(ss["Задание №8_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Рубка_03 = function() {
	this.initialize(ss["Задание №8_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Рубка_04 = function() {
	this.initialize(ss["Задание №8_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Рубка_05 = function() {
	this.initialize(ss["Задание №8_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Рубка_06 = function() {
	this.initialize(ss["Задание №8_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Рубка_07 = function() {
	this.initialize(ss["Задание №8_atlas_2"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Рубка_08 = function() {
	this.initialize(ss["Задание №8_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Axe = function() {
	this.initialize(ss["Задание №8_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Pinguin_1 = function() {
	this.initialize(ss["Задание №8_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Pinguin_2 = function() {
	this.initialize(ss["Задание №8_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Pinguin_3 = function() {
	this.initialize(ss["Задание №8_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Pinguin_4 = function() {
	this.initialize(ss["Задание №8_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Pinguin_Oh_No_01 = function() {
	this.initialize(ss["Задание №8_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Pinguin_Oh_No_02 = function() {
	this.initialize(ss["Задание №8_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Pinguin_Oh_No_03 = function() {
	this.initialize(ss["Задание №8_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Pinguin_Oh_No_04 = function() {
	this.initialize(ss["Задание №8_atlas_2"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Pinguin_Oh_No_05 = function() {
	this.initialize(ss["Задание №8_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Pinguin_Oh_No_1 = function() {
	this.initialize(ss["Задание №8_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Pinguin_Oh_No_2 = function() {
	this.initialize(ss["Задание №8_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Pinguin_Oh_No_3 = function() {
	this.initialize(ss["Задание №8_atlas_2"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Pinguin_Oh_No_4 = function() {
	this.initialize(ss["Задание №8_atlas_2"]);
	this.gotoAndStop(9);
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


(lib.Treesvg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// _Слой_2
	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,291,598);


(lib.Pinguin_Oh_No_2_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Pinguin_Oh_No_2
	this.instance = new lib.Pinguin_Oh_No_01();
	this.instance.setTransform(-230,-142.2,0.666,0.666);

	this.instance_1 = new lib.Pinguin_Oh_No_02();
	this.instance_1.setTransform(-230,-135.2,0.6667,0.6667);

	this.instance_2 = new lib.Pinguin_Oh_No_03();
	this.instance_2.setTransform(-230,-137.2,0.6667,0.6666);

	this.instance_3 = new lib.Pinguin_Oh_No_04();
	this.instance_3.setTransform(-230,-140.2,0.6657,0.6657);

	this.instance_4 = new lib.Pinguin_Oh_No_05();
	this.instance_4.setTransform(-230,-137.2,0.6667,0.6666);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-230,-142.2,460,284.4);


(lib.Pinguin_Рубка = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Pinguin
	this.instance = new lib.Рубка_01();
	this.instance.setTransform(-102.5,-162.35,0.6667,0.6666);

	this.instance_1 = new lib.Рубка_02();
	this.instance_1.setTransform(-100.5,-145.35,0.6656,0.6656);

	this.instance_2 = new lib.Рубка_03();
	this.instance_2.setTransform(-101.5,-123.35,0.6667,0.6667);

	this.instance_3 = new lib.Рубка_04();
	this.instance_3.setTransform(-302.5,-126.35,0.6662,0.6662);

	this.instance_4 = new lib.Рубка_05();
	this.instance_4.setTransform(-349.5,-208.35,0.6658,0.6658);

	this.instance_5 = new lib.Рубка_06();
	this.instance_5.setTransform(-326.5,-149.35,0.6662,0.6662);

	this.instance_6 = new lib.Рубка_07();
	this.instance_6.setTransform(-212.5,-137.35,0.6661,0.6661);

	this.instance_7 = new lib.Рубка_08();
	this.instance_7.setTransform(-108.5,-159.35,0.6652,0.6652);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-349.5,-208.3,699,416.70000000000005);


(lib.Backgroundsvg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// _Слой_2
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(0,0,0.4994,0.4994);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1280,719.2);


(lib.Background_2svg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// _Слой_2
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


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
	this.instance = new lib.Axe();
	this.instance.setTransform(0,0,0.665,0.665);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(0,0,276,155), null);


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
	this.instance = new lib.Axe();
	this.instance.setTransform(0,0,0.665,0.665);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(0,0,276,155), null);


// stage content:
(lib.Задание8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,8,16,24,32,40,48,56,64,72,80,88,96,104,112,155,173];
	// timeline functions:
	this.frame_0 = function() {
		playSound("impactaxehitwoodpannel01");
		playSound("screaminggoat");
	}
	this.frame_8 = function() {
		playSound("impactaxehitwoodpannel01");
	}
	this.frame_16 = function() {
		playSound("impactaxehitwoodpannel01");
	}
	this.frame_24 = function() {
		playSound("impactaxehitwoodpannel01");
	}
	this.frame_32 = function() {
		playSound("impactaxehitwoodpannel01");
		playSound("screaminggoat");
	}
	this.frame_40 = function() {
		playSound("impactaxehitwoodpannel01");
	}
	this.frame_48 = function() {
		playSound("impactaxehitwoodpannel01");
	}
	this.frame_56 = function() {
		playSound("impactaxehitwoodpannel01");
	}
	this.frame_64 = function() {
		playSound("impactaxehitwoodpannel01");
		playSound("screaminggoat");
	}
	this.frame_72 = function() {
		playSound("impactaxehitwoodpannel01");
	}
	this.frame_80 = function() {
		playSound("impactaxehitwoodpannel01");
	}
	this.frame_88 = function() {
		playSound("impactaxehitwoodpannel01");
	}
	this.frame_96 = function() {
		playSound("impactaxehitwoodpannel01");
		playSound("screaminggoat");
	}
	this.frame_104 = function() {
		playSound("impactaxehitwoodpannel01mp3копия");
	}
	this.frame_112 = function() {
		playSound("cartoonboing01");
	}
	this.frame_155 = function() {
		playSound("cartoonbubblepop01");
	}
	this.frame_173 = function() {
		playSound("ohnomuj");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8).call(this.frame_8).wait(8).call(this.frame_16).wait(8).call(this.frame_24).wait(8).call(this.frame_32).wait(8).call(this.frame_40).wait(8).call(this.frame_48).wait(8).call(this.frame_56).wait(8).call(this.frame_64).wait(8).call(this.frame_72).wait(8).call(this.frame_80).wait(8).call(this.frame_88).wait(8).call(this.frame_96).wait(8).call(this.frame_104).wait(8).call(this.frame_112).wait(43).call(this.frame_155).wait(18).call(this.frame_173).wait(43));

	// Pinguin_Oh_No_2
	this.instance = new lib.Pinguin_Oh_No_2_1("synched",0);
	this.instance.setTransform(230,578.2);

	this.instance_1 = new lib.Pinguin_Oh_No_02();
	this.instance_1.setTransform(0,443,0.6667,0.6667);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},179).to({state:[{t:this.instance_1}]},21).wait(16));

	// Pinguin_Oh_No
	this.instance_2 = new lib.Pinguin_Oh_No_1();
	this.instance_2.setTransform(0,653,0.6667,0.6668);

	this.instance_3 = new lib.Pinguin_Oh_No_2();
	this.instance_3.setTransform(0,493,0.6667,0.6667);

	this.instance_4 = new lib.Pinguin_Oh_No_3();
	this.instance_4.setTransform(0,345,0.6654,0.6653);

	this.instance_5 = new lib.Pinguin_Oh_No_4();
	this.instance_5.setTransform(0,418,0.6662,0.6662);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},173).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},2).to({state:[]},2).wait(37));

	// Splash
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AIBC5QgHgEAAgHQAAgJAMgIQAHgFARgHQAQgHAIgGQAAgGAGgHIAMgMQAGgHAAgHIgEgPQgCgGgCgKIgEgQQgDgMgIgOQgGgNgHgHQgIgIgQgIQgOgJgJABIgNADQgIABgFgGQgGgGACgHQACgKAMgEQAVgIAlASQASAJAHAIIAMAQQATAfADAOIAFAWIAHAZQADAOgDALQgCAJgLAMIgQAVIgFAJIgLAGQgKAHgFACIgMAEQgOAJgIACIgEAAQgFAAgEgDgAMNC6QgGgCgBgFQgDgHAJgMIAQgWQAIgLACgGQAFgNgDgRQgDgOgGgMIgJgUQgBgGADgFQACgGAFgCQAHgCAHAGQAGAEAEAJQAHAOAFAPQAKAggHAXQgFARgWAbQgLANgHACIgGABIgGgBgAgXCIQgfgCgtgLQhegXhVgkQgTAAgOgBIi0AHQADAEAAAFQAAAGgEAFQgEAFgGAAQgEAAgLgGIgPgFQgKgCgFgDIgJgIIgfABIgoABQgXAAgRADQgQADgcAIQgdAIgOADQgVADgEgLQgDgHAHgGQAFgGAIgDQAqgRA7gGIAmgDIgPgLIgqABQgdAAgNgCIgGgBQg2ALgYALQgTAJgIgEQgGgEAAgJQAAgHAEgHQAHgIATgGIAcgHQgJgFgGgBIgQgDQgJgDgCgGQgEgIAIgIQAIgHAKABQAMAAAQAJIAcAPQAHADAKACIA4gJIgIgKIgFgPIgGgUQgFgSAGgIQAEgDAFgBQAFgBAEADQAGADADAMIAMAgIAHAMIAHAJIADAAQA9gIAcgDQAygDAnAFQAmAEAtAPQAaAHA1AUIAYAJIAIAAIAqAAQAWgFAMgIQAIgGAJgLIAPgTQAYgeAkgPQANgFAIABQAOADAAAMQAAAKgWAJQgUAJgRAQIgZAdIgJALQBXABBWAGQAeACAAARQgBALgMAEQgGABgQgBQhXgLh5AAIACABQBGAbAnAIQA+AOAwgNQASgDAGABQAGABAEAEQAFAFgBAGQgBAJgPAFQgbALghAAIgOAAgAngAdIhWABIABABIAQAHIBOgDIA4gCIgDAAQgTgEgeAAIgNAAgAphhZQgDgGADgJIAIgNQAMgRgBgXIAAgOQAAgIAEgEQAEgEAGAAQAGAAAEAEQAFAFABANQADAwgUAXQgHAJgIACIgGABQgIAAgDgHg");
	this.shape.setTransform(752.2941,419.2427);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("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");
	this.shape_1.setTransform(757.9022,407.6575);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("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");
	this.shape_2.setTransform(761.1115,406.408);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("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");
	this.shape_3.setTransform(759.2583,385.7587);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("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");
	this.shape_4.setTransform(759.7498,401.8143);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AA2JnQhhgBiSgGQjFgJjFgMQhmgGg0gHQhVgLhBgXQgfgKgNgCQgQgBgEgFQgGgGAEgJQAEgJAJgDQALgDAXAIQBIAbBdAOQA8AIBvAHQDLALCiAIQC7AIBcABICngBIMxgGIA7gBQAggCAagGQAQgDApgNQAkgLAVgDQAKgCAHADQAIADABAHQACALgUAHQhVAdgpAGQgnAGhQABIs5AGIhlABIhIgBgAdWGBQgMgIgEgHQgEgJABgRQABgZADgMQAEgMAGgGQAKgIAaAAIAgAAQANAAAEAEQAFAEABAMQACAmgMAWQgHAOgMAJQgNAJgPAAQgOAAgPgIgEglEAD4QgHgJAHgSIANgaQAKgSAIgKIAHgLQACgEABgHIADgLQABgFAFgGIAHgLIAKgZIAGgSQASgqAYgMQAMgGAIADQAFABAEAFQADAEAAAFQgBAFgFAFIgKAHQgNAIgHAKQgEAGgDAKQgJAcgGAOQgEAJgFAIIgHAMIgDAKQgDAIgGAMIgkA8QgFAJgEACQgEACgDAAQgFAAgEgEgEAj7ADFQgIgHAGgMQACgFAKgKQAQgPAIgLQALgQABgPQABgPgHgUQgIgWgJgTQgJgUgLgKQgFgGgJgGIgQgLQgJgHgLgMIgTgVQgXgXgagTQgOgLgEgIQgCgGACgHQADgHAGgBQAGgBAJAGQAhAXAPAOIAUAWIAVAVQALAKAXAQQATAQAJAOQAFAGAGAQIANAiQALAdABAPQABAZgPAaQgLATgVAWQgJAJgGACIgIACQgFAAgEgEgAOgBRQgHgDgHgIQgOgNgCgMQgBgFAAgIIABgNIgBgPQABgHADgFQAGgIARgBQAQgBAPADQATADAJAKQAJAIABAPQABAPgHAMIgHAQQgCAIgCADQgFAJgSAAQgTAAgGgDgAkGiSQgPgCgLgNQgKgMAAgPQABgQASgbQALgMAFgDQAIgEANACQAVACAdAPQANAGAEAHQAEAGAAAMQABAXgJAKQgHAJgPADIgRACIgWAFQgKACgIAAIgEAAgADOnIQh4gIhHhFQgIgIgCgKQgEgLAHgHQAEgFAOgCIJGgiQBsgHA1AFQBaAIA+AnQAHAEADAFQABAHgHAFQgGAEgJABInvBCQhDALglAEQglADggAAIgkgBg");
	this.shape_5.setTransform(746.4443,419.6958);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},155).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[]},1).wait(55));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_150 = new cjs.Graphics().p("EhZcAmYMgA5hN2MCzyABHMAA5BN2g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(150).to({graphics:mask_graphics_150,x:391.675,y:165.975}).wait(66));

	// Axe_2
	this.instance_6 = new lib.Символ2();
	this.instance_6.setTransform(9,238.5,1,1,0,0,0,138,77.5);
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(150).to({_off:false},0).wait(1).to({rotation:82.4553,x:232.5,y:134.5},0).wait(1).to({rotation:147.909,x:439.1,y:177.15},0).wait(1).to({rotation:267.9097,x:563,y:242.65},0).wait(1).to({rotation:378.121,x:659.8,y:303.95},0).wait(1).to({rotation:468.121,x:756.65,y:426},0).to({_off:true},1).wait(60));

	// Axe
	this.instance_7 = new lib.Символ1();
	this.instance_7.setTransform(1028,271.5,1,1,0,0,0,138,77.5);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(112).to({_off:false},0).wait(1).to({rotation:60.0152,x:1116.2,y:203.9},0).wait(1).to({rotation:150.007,x:1262.25,y:168.15},0).wait(1).to({rotation:225,x:1330.65,y:158.25},0).to({_off:true},1).wait(100));

	// Pinguin_Рубка
	this.instance_8 = new lib.Pinguin_Рубка("synched",0);
	this.instance_8.setTransform(678.5,402.35);

	this.instance_9 = new lib.Pinguin_1();
	this.instance_9.setTransform(578,222,0.666,0.6659);

	this.instance_10 = new lib.Pinguin_2();
	this.instance_10.setTransform(577,251,0.6653,0.6653);

	this.instance_11 = new lib.Pinguin_3();
	this.instance_11.setTransform(580,249,0.666,0.666);

	this.instance_12 = new lib.Pinguin_4();
	this.instance_12.setTransform(582,242,0.6667,0.6667);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8}]}).to({state:[{t:this.instance_9}]},112).to({state:[{t:this.instance_10}]},2).to({state:[{t:this.instance_11}]},15).to({state:[{t:this.instance_12}]},2).to({state:[]},13).wait(72));

	// Tree
	this.instance_13 = new lib.Treesvg("synched",0);
	this.instance_13.setTransform(354.55,300.6,1,1,0,0,0,145.4,299);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({_off:true},144).wait(72));

	// Background
	this.instance_14 = new lib.Backgroundsvg("synched",0);
	this.instance_14.setTransform(640,360,1,1.0012,0,0,0,640,359.6);

	this.instance_15 = new lib.Background_2svg("synched",0);
	this.instance_15.setTransform(640,359.95,1,1,0,0,0,640,360);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14}]}).to({state:[{t:this.instance_14},{t:this.instance_15}]},144).wait(72));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(511,347.6,972,372.79999999999995);
// library properties:
lib.properties = {
	id: 'B413789896549E46B9B39A863F05D6B1',
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedBmp_2.png?1681288364519", id:"CachedBmp_2"},
		{src:"images/CachedBmp_1.png?1681288364519", id:"CachedBmp_1"},
		{src:"images/Задание №8_atlas_1.png?1681288364456", id:"Задание №8_atlas_1"},
		{src:"images/Задание №8_atlas_2.png?1681288364456", id:"Задание №8_atlas_2"},
		{src:"sounds/cartoonboing01.mp3?1681288364522", id:"cartoonboing01"},
		{src:"sounds/cartoonbubblepop01.mp3?1681288364522", id:"cartoonbubblepop01"},
		{src:"sounds/impactaxehitwoodpannel01.mp3?1681288364522", id:"impactaxehitwoodpannel01"},
		{src:"sounds/impactaxehitwoodpannel01mp3копия.mp3?1681288364522", id:"impactaxehitwoodpannel01mp3копия"},
		{src:"sounds/ohnomuj.mp3?1681288364522", id:"ohnomuj"},
		{src:"sounds/screaminggoat.mp3?1681288364522", id:"screaminggoat"}
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
an.compositions['B413789896549E46B9B39A863F05D6B1'] = {
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