var headxspeed = 0;
var headyspeed=0;
var snakes=[[50,50,0,0]]; 
var width=1000;
var height=500;
var score=0;
var chicken=[500,400];
function setup(){
    createCanvas(1400,800);
    background('black');
    // Make the border
    stroke(153);
    // line(20, 20, 20, 880);
    // line(20, 20, 880, 20);
    // line(880, 880, 880, 20);
    // line(880, 880, 20, 880);
}
function arrows()
{
    if(key == 'd')
    {
        if(snakes.length>1)
        {
            if(snakes[0][2]<0)
            {
                console.log('You loose');
                headxspeed = 0;
                headyspeed=0;
                snakes=[[50,50,0,0]]; 
                width=1000;
                height=500;
                score=0;
                chicken=[500,400];
                setup();
            }
        }
        console.log("P1 turn right");
            snakes[0][2]=5;
            snakes[0][3]=0;
    }
    else if(key == 'a')
    { 
        if(snakes.length>1)
        {
            if(snakes[0][2]>0)
            {
                console.log('You loose');
                headxspeed = 0;
                headyspeed=0;
                snakes=[[50,50,0,0]]; 
                width=1000;
                height=500;
                score=0;
                chicken=[500,400];
                setup();
            }
        }
        console.log("P1 turn left");
        snakes[0][2]=-5;
        snakes[0][3]=0;
    }
    else if (key== 'w')
    {
        if(snakes.length>1)
        {
            if(snakes[0][3]>0)
            {
                console.log('You loose');
                headxspeed = 0;
                headyspeed=0;
                snakes=[[50,50,0,0]]; 
                width=1000;
                height=500;
                score=0;
                chicken=[500,400];
                setup();
            }
        }
        console.log("P1 turn up");
        snakes[0][3]=-5;
        snakes[0][2]=0;
    }
    else if (key == "s")
    {
        if(snakes.length>1)
        {
            if(snakes[0][3]<0)
            {
                console.log('You loose');
                headxspeed = 0;
                headyspeed=0;
                snakes=[[50,50,0,0]]; 
                width=1000;
                height=500;
                score=0;
                chicken=[500,400];
                setup();
            }
        }
        console.log("P1 turn down");
        snakes[0][3]=5;
        snakes[0][2]=0;
    }
}
function draw()
{
    setup();
    count=0;
    // Turn functions
   arrows();
   


    // food and adding length to the snake
    // For one chain
    if(chicken[0]>=snakes[0][0] && chicken[0]<=(snakes[0][0]+25) )
    if(chicken[1]>=snakes[0][1] && chicken[1]<=(snakes[0][1]+15))
    {
        console.log('Ate somethin');
        chicken[0]=Math.floor(Math.random()*1400);
        chicken[1]=Math.floor(Math.random()*800);

        if(snakes[snakes.length-1][3]>0)
        {
            snakes[snakes.length]=[snakes[snakes.length-1][0],snakes[snakes.length-1][1]-15,snakes[snakes.length-1][2],snakes[snakes.length-1][3]];
        }
        else if(snakes[snakes.length-1][3]<0)
        {
            snakes[snakes.length]=[snakes[snakes.length-1][0],snakes[snakes.length-1][1]+15,snakes[snakes.length-1][2],snakes[snakes.length-1][3]];
        }
        if(snakes[snakes.length-1][2]>0)
        {
            snakes[snakes.length]=[snakes[snakes.length-1][0]-15,snakes[snakes.length-1][1],snakes[snakes.length-1][2],snakes[snakes.length-1][3]];
        }
        else if(snakes[snakes.length-1][2]<0)
        {
            snakes[snakes.length]=[snakes[snakes.length-1][0]+15,snakes[snakes.length-1][1],snakes[snakes.length-1][2],snakes[snakes.length-1][3]];
        }
        chicken=[Math.floor(Math.random()*width), Math.floor(Math.random()*height)];
        
    }   
    if(snakes[0][0]>= 1400 || snakes[0][1]>= 800 || snakes[0][0]<=0 || snakes[0][1]<=0)
    {
        console.log('You loose');
        headxspeed = 0;
        headyspeed=0;
        snakes=[[50,50,0,0]]; 
        width=1000;
        height=500;
        score=0;
        chicken=[500,400];
        setup();
    }
   
        // End of food functions

        // I gotta put how the "chain effect" gun work. i.e the second block following the first block
        //   Prolly similar to pushing new snake, except using the first snake variable in the array as a reference

    for(var count=1;count<snakes.length;count++)
    {
        
        if(snakes[count-1][3]>0)
        {
            if(snakes[count-1][0]==snakes[count][0])
            {
                snakes[count]=[snakes[count-1][0],snakes[count-1][1]-15,snakes[count-1][2],snakes[count-1][3]];
            }
        }
        else if(snakes[count-1][3]<0)
        {
            if(snakes[count-1][0]==snakes[count][0])
            {
                snakes[count]=[snakes[count-1][0],snakes[count-1][1]+15,snakes[count-1][2],snakes[count-1][3]]; 
            }
        }
        if(snakes[count-1][2]>0)
        {
            if(snakes[count-1][1]==snakes[count][1])
            {
                snakes[count]=[snakes[count-1][0]-15,snakes[count-1][1],snakes[count-1][2],snakes[count-1][3]];
            }
        }
        else if(snakes[count-1][2]<0)
        {
            if(snakes[count-1][1]==snakes[count][1])
            {
                snakes[count]=[snakes[count-1][0]+15,snakes[count-1][1],snakes[count-1][2],snakes[count-1][3]];
            }
        }
    }
    for(var s=0;s<snakes.length;s++)
    {
         snakes[s][0]+=snakes[s][2];
         snakes[s][1]+=snakes[s][3];
    }
    for (var chain =0; chain<snakes.length; chain++)
    {
        fill('blue');
        rect(snakes[chain][0],snakes[chain][1],15,15);
    }

    fill('blue');
    textSize(50);
    text('Score: '+snakes.length,600,150);
    fill('green');
    rect(chicken[0],chicken[1],10,10)
    // stroke(255);
    // strokeWeight(70);
    // line(0,0,0,length);
    // line(0,0,width,0);
    // line(width,0,width,length);
    // line(0,length,width,length);
}
