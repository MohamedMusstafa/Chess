$(document).ready(function(){

	//Chess Part Properties (PartName, pictureUrl, className, Coordinates(x, y))
	//set postion for each (x,y) with numbers and vowels
	//set defualt positioning for each Chess part from by numbers and vowels that you have set before
	//specify movment abilities
	//specify killing abilities
	

	

	Coords = {
			    'A' : {
			    	1:['703px', '-529px'],
			    	2:['703px', '-462px'],
			    	3:['703px', '-395px'],
			    	4:['703px', '-329px'],
			    	5:['703px', '-263px'],
			    	6:['703px', '-196px'],
			    	7:['703px', '-130px'],
			    	8:['703px', '-63px']
				},
			   'B'  : {	
					1:['638px', '-529px'],
			    	2:['638px', '-462px'],
			    	3:['638px', '-395px'],
			    	4:['638px', '-329px'],
			    	5:['638px', '-263px'],
			    	6:['638px', '-196px'],
			    	7:['638px', '-130px'],
			    	8:['638px', '-63px']
				},
				'C' : {
					1:['570px', '-529px'],
			    	2:['570px', '-462px'],
			    	3:['570px', '-395px'],
			    	4:['570px', '-329px'],
			    	5:['570px', '-263px'],
			    	6:['570px', '-196px'],
			    	7:['570px', '-130px'],
			    	8:['570px', '-63px']
				},
				'D' : {
					1:['503px', '-529px'],
			    	2:['503px', '-462px'],
			    	3:['503px', '-395px'],
			    	4:['503px', '-329px'],
			    	5:['503px', '-263px'],
			    	6:['503px', '-196px'],
			    	7:['503px', '-130px'],
			    	8:['503px', '-63px']
				},
				'E' : {
					1:['438px', '-529px'],
			    	2:['438px', '-462px'],
			    	3:['438px', '-395px'],
			    	4:['438px', '-329px'],
			    	5:['438px', '-263px'],
			    	6:['438px', '-196px'],
			    	7:['438px', '-130px'],
			    	8:['438px', '-63px']
				},
				'F' : {
					1:['370px', '-529px'],
			    	2:['370px', '-462px'],
			    	3:['370px', '-395px'],
			    	4:['370px', '-329px'],
			    	5:['370px', '-263px'],
			    	6:['370px', '-196px'],
			    	7:['370px', '-130px'],
			    	8:['370px', '-63px']
				},
				'G' : {
					1:['303px', '-529px'],
			    	2:['303px', '-462px'],
			    	3:['303px', '-395px'],
			    	4:['303px', '-329px'],
			    	5:['303px', '-263px'],
			    	6:['303px', '-196px'],
			    	7:['303px', '-130px'],
			    	8:['303px', '-63px']
				},
				'H' : {
					1:['238px', '-529px'],
			    	2:['238px', '-462px'],
			    	3:['238px', '-395px'],
			    	4:['238px', '-329px'],
			    	5:['238px', '-263px'],
			    	6:['238px', '-196px'],
			    	7:['238px', '-130px'],
			    	8:['238px', '-63px']
				}

			};

	ChessPieces = {

		'BlackQueen' : {
			'Coords' 	:  getPieceCoord('D', 8),
			'Color'  	: 'Black',
			'image'	 	: 'images/bQ.svg',
			'ClassName' : 'blackQueen'
		},
		'BlackKing' : {
			'Coords' 	:  getPieceCoord('E', 8),
			'Color'  	: 'Black',
			'image'	 	: 'images/bK.svg',
			'ClassName' : 'blackKing'
		},
		'RightBlackRook' : {
			'Coords' 	:  getPieceCoord('A', 8),
			'Color'  	: 'Black',
			'image'	 	: 'images/bR.svg',
			'ClassName' : 'BlackRook'
		},
		'LeftBlackRook' : {
			'Coords' 	:  getPieceCoord('H', 8),
			'Color'  	: 'Black',
			'image'	 	: 'images/bR.svg',
			'ClassName' : 'LeftBlackRook'
		},
		'RightBlackNight' : {
			'Coords' 	:  getPieceCoord('B', 8),
			'Color'  	: 'Black',
			'image'	 	: 'images/bN.svg',
			'ClassName' : 'RightBlackNight'
		},
		'LeftBlackKnight' : {
			'Coords' 	:  getPieceCoord('G', 8),
			'Color'  	: 'Black',
			'image'	 	: 'images/bN.svg',
			'ClassName' : 'LeftBlackKnight'
		},
		'RightBlackBiShop' : {
			'Coords' 	:  getPieceCoord('F', 8),
			'Color'  	: 'Black',
			'image'	 	: 'images/bB.svg',
			'ClassName' : 'RightBlackBiShop'
		},
		'LeftBlackBiShop' : {
			'Coords' 	:  getPieceCoord('C', 8),
			'Color'  	: 'Black',
			'image'	 	: 'images/bB.svg',
			'ClassName' : 'LeftBlackBiShop'
		},
		'PawnBlack1' : {
			'Coords' 	:  getPieceCoord('A', 7),
			'Color'  	: 'Black',
			'image'	 	: 'images/bP.svg',
			'ClassName' : 'PawnBlack1'
		},
		'PawnBlack2' : {
			'Coords' 	:  getPieceCoord('B', 7),
			'Color'  	: 'Black',
			'image'	 	: 'images/bP.svg',
			'ClassName' : 'PawnBlack2'
		},
		'PawnBlack3' : {
			'Coords' 	:  getPieceCoord('C', 7),
			'Color'  	: 'Black',
			'image'	 	: 'images/bP.svg',
			'ClassName' : 'PawnBlack3'
		},
		'PawnBlack4' : {
			'Coords' 	:  getPieceCoord('E', 7),
			'Color'  	: 'Black',
			'image'	 	: 'images/bP.svg',
			'ClassName' : 'PawnBlack4'
		},
		'PawnBlack5' : {
			'Coords' 	:  getPieceCoord('D', 7),
			'Color'  	: 'Black',
			'image'	 	: 'images/bP.svg',
			'ClassName' : 'PawnBlack5'
		},
		'PawnBlack6' : {
			'Coords' 	:  getPieceCoord('F', 7),
			'Color'  	: 'Black',
			'image'	 	: 'images/bP.svg',
			'ClassName' : 'PawnBlack6'
		},
		'PawnBlack7' : {
			'Coords' 	:  getPieceCoord('G', 7),
			'Color'  	: 'Black',
			'image'	 	: 'images/bP.svg',
			'ClassName' : 'PawnBlack7'
		},
		'PawnBlack8' : {
			'Coords' 	:  getPieceCoord('H', 7),
			'Color'  	: 'Black',
			'image'	 	: 'images/bP.svg',
			'ClassName' : 'PawnBlack8'
		}
	};

	function setChessPieceDefaultPosition()
	{
		$.each(ChessPieces, function( PieceName, PieceProperty ) {
		  	$('.pieces').append('<div class="'+PieceProperty.ClassName+'"><img src="'+ PieceProperty.image +'"></div>');
		  	$('.'+PieceProperty.ClassName).css('transform','translate('+PieceProperty.Coords[0]+', '+PieceProperty.Coords[1]+')');
		});
	}

	function getPieceCoord(CoordLetter, CoordNumber)
	{
		return Coords[CoordLetter][CoordNumber];
	}

	setChessPieceDefaultPosition();

	// console.log(ChessPieces);

});