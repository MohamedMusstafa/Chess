$(document).ready(function(){

	//Chess Part Properties (PartName, pictureUrl, className, Coordinates(x, y))
	//set postion for each (x,y) with numbers and vowels
	//set defualt positioning for each Chess part from by numbers and vowels that you have set before
	//specify movment abilities
	//specify killing abilities
	

	$('.blackQueen').css('transform','translate(503px, -63px)');

	Coords = {
		
		"A":[
		    
		    {
		    	'A1':['703px', '-529px'],
		    	'A2':['703px', '-462px'],
		    	'A3':['703px', '-395px'],
		    	'A4':['703px', '-329px'],
		    	'A5':['703px', '-263px'],
		    	'A6':['703px', '-196px'],
		    	'A7':['703px', '-130px'],
		    	'A8':['703px', '-63px']
			}
		]
	};

	//A8 703px, 

	console.log(Coords);

});