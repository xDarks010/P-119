function setup(){
    canvas = createCanvas(280, 280);
    canvas.center();
    background("white");
}

function clear(){
    background("white");
}

function updateCanvas(){
    random_no = Math.floor((Math.random()*quick_draw_data_set.length)+1)
    console.log(quick_draw_data_set[random_no]);

    document.getElementById("drawing").innerHTML = "You Have To Draw: " + quick_draw_data_set[random_no];
    timer_counter = "0";
    timer_check =
    drawn_sketch =
    answer_holder = "";
    score = "0";
    sketch = "";

}

function draw() {
strokeWeight(15);
stroke(0);

if (mouseIsPressed) {
line(pmouseX, pmouseY, mouseX, mouseY);
}}

function check_sketch() { 
    timer_counter++; document.getElementById('time').innerHTML = 'Timer: ' + timer_counter; console.log(timer_counter) 
    if(timer_counter > 400) { timer_counter = 0; timer_check = "completed" } 
    if(timer_check =="completed" || answer_holder == "set") 
    { timer_check = ""; answer_holder = ""; updateCanvas(); } }

    function preload(){
        classifier = ml5.imageClassfier('DoodleNet');
    }
    
    function draw(){
    strokeWeight(13);
    
    stroke(0);
    
    if (mouseIsPressed){
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
    
    };
    
    function classifyCanvas(){
        classifier.classify(canvas, gotResult);
    }
    
    function gotResult(error, results){
        if (error){
            console.log(error);
        }
        console.log(results);
        document.getElementById('label').innerHTML = 'Label:' + results[0].label;
    
        document.getElementById('confidence').innerHTML = 'Confidence' + Math.round(results[0].confidence * 100) + "%"
    
        utterThis = new SpeechSynthesisUtterance(results[0].label);
        synth.speak(utterThis);
    }
    





