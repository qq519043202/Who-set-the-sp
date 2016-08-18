var set_items = function(){
	w = suf_img.length;
    h = suf_img[0].length;
	num = w * h;
	position = Math.floor(Math.random()*num);
	Y = Math.floor(position/w);
	X = position%w;
	//todo:item放置的要是什么逻辑嘞。。
	if(!Math.round(suf_img[X][Y]._strength)){
		if (Math.round(Math.random())){
			suf_img[X][Y].image("./res/item0.png");
		}
		else{
			suf_img[X][Y].image("./res/item1.png");
		}
	}
	else{

	}


};

var trigger_item0 = function(i,j){
    w = suf_img.length;
    h = suf_img[0].length;
	// 范围
	Crafty.audio.play("boom");
	if(i+3 > w-1) x_end = w-1; else x_end = i+3;
	if (i-3 < 0) x_start = 0; else x_start = i-3;

	if(j+3 > h-1) y_end = h-1; else y_end = j+3;
	if (j-3 < 0) y_start = 0; else y_start = j-3;

	for (var x = x_start; x <= x_end; x++) {
	    for (var y = y_start; y <= y_end ; y++) {
	        suf_img[x][y].color('#000', 0);
	    }
	 }
};
// status 0:左,1:上,2:右
var trigger_item1 = function(k,b,status){
	Crafty.audio.play("fanshe");

	        if (status == 0) {
	        	k = -k;
	        }
	        else if (status == 1) {
	        	k = -k;
	        	b = -b;
	        }
	        else{
	        	yo = main_img.w * k + b;
	        	console.log(yo);
	        	k = -k;
	        	b = yo - k*main_img.w;
	        	// b = -b;
	        	// k = -k;
	        	console.log(k);
	        	console.log(b);
	        }

    for (var i = 0; i < w; i++) {
	    for (var j = 0; j < h; j++) {
	        // console.log(i);
	        // console.log(j);
	        center_point = get_center(suf_img[i][j]);


	        d = get_distance(center_point, k, b);

	        if (d < r) {
	            suf_img[i][j].color('#000', 0);
	        }
    	}
    }

};

//以下测试使用。。
$('#func').click(function(){
	// main_img._z = 2;
	main_img._globalZ = 3;
	main_img.rotation = 0.1;
	main_img.rotation = 0;
});

$('#func2').click(function(){
	// suf_img[0][0]._z = 1;
	// suf_img[0][0]._globalZ = 3;
	// suf_img[0][0].rotation = 0.1;
	// suf_img[0][0].rotation = 0;
	suf_img[8][0].image("./res/item1.png");
	suf_img[0][0].image("./res/item1.png");
    suf_img[17][13].image("./res/item1.png");

});