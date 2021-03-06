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


	ArrangeLettersAsNumbers = {

		'A':1,
		'B':2,
		'C':3,
		'D':4,
		'E':5,
		'F':6,
		'G':7,
		'H':8

	}

	ArrangeNumbersAsLetters = {

		1:'A',
		2:'B',
		3:'C',
		4:'D',
		5:'E',
		6:'F',
		7:'G',
		8:'H'

	}
		

	MovmentType = [

		'xMove',
		'knightMove',
		'sideMove',
		'longMove'

	]

	ChessPieces = {

		'BlackQueen' : {
			'Coords' 	:  getPieceCoord('D', 8),
			'Color'  	: 'Black',
			'image'	 	: 'images/bQ.svg',
			'ClassName' : 'blackQueen',
			'PiecePosition' : ['D', 8]
		},
		'BlackKing' : {
			'Coords' 	:  getPieceCoord('E', 8),
			'Color'  	: 'Black',
			'image'	 	: 'images/bK.svg',
			'ClassName' : 'blackKing',
			'PiecePosition' : ['E', 8]
		},
		'RightBlackRook' : {
			'Coords' 	:  getPieceCoord('A', 8),
			'Color'  	: 'Black',
			'image'	 	: 'images/bR.svg',
			'ClassName' : 'BlackRook',
			'PiecePosition' : ['A', 8]
		},
		'LeftBlackRook' : {
			'Coords' 	:  getPieceCoord('H', 8),
			'Color'  	: 'Black',
			'image'	 	: 'images/bR.svg',
			'ClassName' : 'LeftBlackRook',
			'PiecePosition' : ['H', 8]
		},
		'RightBlackNight' : {
			'Coords' 	:  getPieceCoord('E', 5),
			'Color'  	: 'Black',
			'image'	 	: 'images/bN.svg',
			'ClassName' : 'RightBlackNight',
			'PiecePosition' : ['E', 5]
		},
		'LeftBlackKnight' : {
			'Coords' 	:  getPieceCoord('G', 8),
			'Color'  	: 'Black',
			'image'	 	: 'images/bN.svg',
			'ClassName' : 'LeftBlackKnight',
			'PiecePosition' : ['G', 8]
		},
		'RightBlackBiShop' : {
			'Coords' 	:  getPieceCoord('F', 8),
			'Color'  	: 'Black',
			'image'	 	: 'images/bB.svg',
			'ClassName' : 'RightBlackBiShop',
			'PiecePosition' : ['F', 8]
		},
		'LeftBlackBiShop' : {
			'Coords' 	:  getPieceCoord('C', 8),
			'Color'  	: 'Black',
			'image'	 	: 'images/bB.svg',
			'ClassName' : 'LeftBlackBiShop',
			'PiecePosition' : ['C', 8]
		},
		'PawnBlack1' : {
			'Coords' 	:  getPieceCoord('A', 7),
			'Color'  	: 'Black',
			'image'	 	: 'images/bP.svg',
			'ClassName' : 'PawnBlack1',
			'PiecePosition' : ['A', 7]
		},
		'PawnBlack2' : {
			'Coords' 	:  getPieceCoord('B', 7),
			'Color'  	: 'Black',
			'image'	 	: 'images/bP.svg',
			'ClassName' : 'PawnBlack2',
			'PiecePosition' : ['B', 7]
		},
		'PawnBlack3' : {
			'Coords' 	:  getPieceCoord('C', 7),
			'Color'  	: 'Black',
			'image'	 	: 'images/bP.svg',
			'ClassName' : 'PawnBlack3',
			'PiecePosition' : ['C', 7]
		},
		'PawnBlack4' : {
			'Coords' 	:  getPieceCoord('E', 7),
			'Color'  	: 'Black',
			'image'	 	: 'images/bP.svg',
			'ClassName' : 'PawnBlack4',
			'PiecePosition' : ['E', 7]
		},
		// 'PawnBlack5' : {
		// 	'Coords' 	:  getPieceCoord('D', 7),
		// 	'Color'  	: 'Black',
		// 	'image'	 	: 'images/bP.svg',
		// 	'ClassName' : 'PawnBlack5',
		// 	'PiecePosition' : ['D', 7]
		// },
		// 'PawnBlack6' : {
		// 	'Coords' 	:  getPieceCoord('F', 7),
		// 	'Color'  	: 'Black',
		// 	'image'	 	: 'images/bP.svg',
		// 	'ClassName' : 'PawnBlack6',
		// 	'PiecePosition' : ['F', 7]
		// },
		'PawnBlack7' : {
			'Coords' 	:  getPieceCoord('G', 7),
			'Color'  	: 'Black',
			'image'	 	: 'images/bP.svg',
			'ClassName' : 'PawnBlack7',
			'PiecePosition' : ['G', 7]
		},
		'PawnBlack8' : {
			'Coords' 	:  getPieceCoord('H', 7),
			'Color'  	: 'Black',
			'image'	 	: 'images/bP.svg',
			'ClassName' : 'PawnBlack8',
			'PiecePosition' : ['H', 7]
		},
		'WhiteQueen' : {
			'Coords' 	:  getPieceCoord('D', 1),
			'Color'  	: 'White',
			'image'	 	: 'images/wQ.svg',
			'ClassName' : 'WhiteQueen',
			'PiecePosition' : ['D', 1]
		},
		'WhiteKing' : {
			'Coords' 	:  getPieceCoord('E', 1),
			'Color'  	: 'White',
			'image'	 	: 'images/wK.svg',
			'ClassName' : 'WhiteKing',
			'PiecePosition' : ['E', 1]
		},
		'RightWhiteRook' : {
			'Coords' 	:  getPieceCoord('A', 1),
			'Color'  	: 'White',
			'image'	 	: 'images/wR.svg',
			'ClassName' : 'WhiteRook',
			'PiecePosition' : ['A', 1]
		},
		'LeftWhiteRook' : {
			'Coords' 	:  getPieceCoord('H', 1),
			'Color'  	: 'White',
			'image'	 	: 'images/wR.svg',
			'ClassName' : 'LeftWhiteRook',
			'PiecePosition' : ['H', 1]
		},
		'RightWhiteKnight' : {
			'Coords' 	:  getPieceCoord('B', 1),
			'Color'  	: 'White',
			'image'	 	: 'images/wN.svg',
			'ClassName' : 'RightWhiteKnight',
			'PiecePosition' : ['B', 1]
		},
		'LeftWhiteKnight' : {
			'Coords' 	:  getPieceCoord('G', 1),
			'Color'  	: 'White',
			'image'	 	: 'images/wN.svg',
			'ClassName' : 'LeftWhiteKnight',
			'PiecePosition' : ['G', 1],
			'MovmentType' : MovmentType[1]
		},
		'RightWhiteBiShop' : {
			'Coords' 	:  getPieceCoord('F', 1),
			'Color'  	: 'White',
			'image'	 	: 'images/wB.svg',
			'ClassName' : 'RightWhiteBiShop',
			'PiecePosition' : ['F', 1]
		},
		'LeftWhiteBiShop' : {
			'Coords' 	:  getPieceCoord('C', 1),
			'Color'  	: 'White',
			'image'	 	: 'images/wB.svg',
			'ClassName' : 'LeftWhiteBiShop',
			'PiecePosition' : ['C', 1]
		},
		'PawnWhite1' : {
			'Coords' 	:  getPieceCoord('A', 2),
			'Color'  	: 'White',
			'image'	 	: 'images/wP.svg',
			'ClassName' : 'PawnWhite1',
			'PiecePosition' : ['A', 2]
		},
		'PawnWhite2' : {
			'Coords' 	:  getPieceCoord('B', 2),
			'Color'  	: 'White',
			'image'	 	: 'images/wP.svg',
			'ClassName' : 'PawnWhite2',
			'PiecePosition' : ['B', 2]
		},
		'PawnWhite3' : {
			'Coords' 	:  getPieceCoord('C', 2),
			'Color'  	: 'White',
			'image'	 	: 'images/wP.svg',
			'ClassName' : 'PawnWhite3',
			'PiecePosition' : ['C', 2]
		},
		'PawnWhite4' : {
			'Coords' 	:  getPieceCoord('E', 2),
			'Color'  	: 'White',
			'image'	 	: 'images/wP.svg',
			'ClassName' : 'PawnWhite4',
			'PiecePosition' : ['E', 2]
		},
		'PawnWhite5' : {
			'Coords' 	:  getPieceCoord('D', 2),
			'Color'  	: 'White',
			'image'	 	: 'images/wP.svg',
			'ClassName' : 'PawnWhite5',
			'PiecePosition' : ['D', 2]
		},
		'PawnWhite6' : {
			'Coords' 	:  getPieceCoord('F', 2),
			'Color'  	: 'White',
			'image'	 	: 'images/wP.svg',
			'ClassName' : 'PawnWhite6',
			'PiecePosition' : ['F', 2]
		},
		'PawnWhite7' : {
			'Coords' 	:  getPieceCoord('G', 2),
			'Color'  	: 'White',
			'image'	 	: 'images/wP.svg',
			'ClassName' : 'PawnWhite7',
			'PiecePosition' : ['G', 2]
		},
		'PawnWhite8' : {
			'Coords' 	:  getPieceCoord('H', 2),
			'Color'  	: 'White',
			'image'	 	: 'images/wP.svg',
			'ClassName' : 'PawnWhite8',
			'PiecePosition' : ['H', 2]
		}
	};

	function setChessPieceDefaultPosition()
	{
		$.each(ChessPieces, function( PieceName, PieceProperty ) {
		  	$('.pieces').append('<div class="'+PieceProperty.ClassName+'"><img src="'+ PieceProperty.image +'" data-current-coords="'+PieceProperty.PiecePosition+'"></div>');
		  	$('.'+PieceProperty.ClassName).css('transform','translate('+PieceProperty.Coords[0]+', '+PieceProperty.Coords[1]+')');
		});
	}

	function getPieceCoord(CoordLetter, CoordNumber)
	{
		return Coords[CoordLetter][CoordNumber];
	}


	function ConvertCoordLetterToNumber(CoordsLetter)
	{
		return ArrangeLettersAsNumbers[CoordsLetter];
	}

	function ConvertCoordNumberToLetter(CoordsNumber)
	{
		return ArrangeNumbersAsLetters[CoordsNumber];
	}

	setChessPieceDefaultPosition();


	function getPieceAllowedCoords(PieceName, CurrentCoordsLetter, CurrentCoordsNumber)
	{

		switch(PieceName) {

		  	case "RightBlackNight":

		  		KnightLongTopRightNumber = parseInt(CurrentCoordsNumber) - 2;
				KnightLongTopRightLetter = ConvertCoordNumberToLetter(ConvertCoordLetterToNumber(CurrentCoordsLetter) - 1);
		  		
		  		KnightLongTopLeftNumber = parseInt(CurrentCoordsNumber) - 2;
				KnightLongTopLeftLetter = ConvertCoordNumberToLetter(ConvertCoordLetterToNumber(CurrentCoordsLetter)+1);

				KnightLongBottomRightNumber = parseInt(CurrentCoordsNumber) + 2;
				KnightLongBottomRightLetter = ConvertCoordNumberToLetter(ConvertCoordLetterToNumber(CurrentCoordsLetter) - 1);

				KnightLongBottomLeftNumber = parseInt(CurrentCoordsNumber) + 2;
				KnightLongBottomLeftLetter = ConvertCoordNumberToLetter(ConvertCoordLetterToNumber(CurrentCoordsLetter) + 1);


				MovmentAllowed = {

					1:[KnightLongTopRightLetter, KnightLongTopRightNumber],
					2:[KnightLongTopLeftLetter, KnightLongTopLeftNumber],
					3:[KnightLongBottomRightLetter, KnightLongBottomRightNumber],
					4:[KnightLongBottomLeftLetter, KnightLongBottomLeftNumber]

				}

				return MovmentAllowed;

		    break;

		    case "PawnWhite7":
		  	
		  		console.log('Karima');

		  	break;	
		}

		

	}

	function changePxForLeft(CoordsByPx){

		coord = CoordsByPx.match(/\d+/);
		CoordAfterChange =parseInt(coord[0])+51;
		
		return CoordAfterChange+'px';

	}

	console.log(changePxForLeft('503px'));

	function changePxForRight(CoordsByPx){

		coord = CoordsByPx.match(/\d+/);
		CoordAfterChange =parseInt(coord[0])-21;
		
		return '-'+CoordAfterChange+'px';

	}


	function generateCoordsAllowedPointer(AllowedCoordsForSelectedPiece)
	{
		$.each(AllowedCoordsForSelectedPiece, function( Key, Coords ) {
			$('.pointers').append('<div class="'+Coords[0]+'-'+Coords[1]+'"></div>');

			PxByCoords = getPieceCoord(Coords[0], Coords[1]);

			$("."+Coords[0]+"-"+Coords[1]).css('transform','translate('+changePxForLeft(PxByCoords[0])+', '+changePxForRight(PxByCoords[1])+')');
		});
	}

	$(document).on('click', '.pieces div img', function(){
		CurrentCoords =  $(this).attr('data-current-coords');
		PieceName = $(this).parent().attr('class');

		var AllowedCoordsForSelectedPiece =  getPieceAllowedCoords(PieceName, CurrentCoords[0], CurrentCoords[2]);
		
		generateCoordsAllowedPointer(AllowedCoordsForSelectedPiece);

		console.log(AllowedCoordsForSelectedPiece);

	});


});