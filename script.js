//  VARS DECLARATION

    // Screen
var scr          =   $('#scr'),

    //  1 digit
    power2       =   $('#power2'),
    inv          =   $('#inv'),
    sqr          =   $('#sqr'),
    power        =   $('#power'),
    npow         =   $('#npow'),
    fact         =   $('#fact'),

    // 2 digits
    sum          =   $('#plus'),
    minus        =   $('#minus'),
    mult         =   $('#mult'),
    divide       =   $('#divide'),
	percent      =   $('#percent'),
    csvplus      =   $('#csvplus'),
    csvprod      =   $('#csvprod'),

    // Integer / Equal / Clear / Decimal / Pos-Neg
    int          =   $('#int'),
    equal        =   $('#equal'),
    clear        =   $('#clear'),
    decimal      =   $('#decimal'),
    pos_neg      =   $('#pos-neg'),

    // WILDCARDS FOR 2 DIGITS OPERATIONS
    mem          =   0,
    opt          =   "",
    bk           =   "",

    // WILDCARDS FOR CAPTURE BUTTONS

    // Empty array for buttons from 0 to 9

    bts = [];

    // Loop for capture all buttons and they're stored in 'bts' array
    
    var i;
	for ( i = 0; i <= 9; i++ ) {

        // Capture the botton #num-i and store in i position of array
      
      bts[i] = $('#num-' + i);

    }


// Click on Screen 

scr.on('click',

  function () {

     scr.val("");
     
     scr.attr("placeholder", "0");
     
     mem = 0;
     
     opt = "";

  }

);


// 1 digit Operations

// Number power to square

power2.on('click',

  function () {
     
    var x = scr.val();
    
    scr.val(x * x);

  }
);

// Inverse

inv.on('click',

  function () {
 
	var x = scr.val();
    
    scr.val(1 / x);

  }

);


// Square root

sqr.on('click',

  function () {
	
   var  x = scr.val();
   
   scr.val(Math.sqrt(x));

  }

);


// Power n to square

npow.on('click',

  function () {
	
    var x = scr.val();
    
    var resul =  1;
    
    while ( x !== 0 ) {
    
      resul = resul * 2;
      
      x = x - 1;

  } 
    
    scr.val(resul);

  }

);


// Factorize

fact.on('click',

  function () {
        
	 x = scr.val();
     
     resul = 1;
    
    for ( i = 1; i <= +scr.val(); i++ )
      
      resul *= i;
      
      scr.val(resul);
	
  }
);
       

// Integer

int.on('click',

  function () {
   
	var x = +scr.val();

    if ( x >= 0 ) {
      
      scr.val(Math.floor(x));

    } else {
      
      scr.val(Math.ceil(x));
     
    }

  }

);


// 2 digits operations

// Addition

sum.on('click',

  function () {

     mem = scr.val();
     
     scr.val("");
     
     scr.attr("placeholder", "+");
     
     opt = "+";

  }

);


// Minus

minus.on('click',
  function () {
    
    mem = scr.val();
    
    scr.val("");
    
    scr.attr("placeholder", "-");
    
    opt = "-";
  }
);


// Multiplication

mult.on('click',
  function () {
    
    mem = scr.val();
    
    scr.val("");
    
    scr.attr("placeholder", "X");
    
    opt = "*";
  }
);


// Divide

divide.on('click',
  function () {
    
    mem = scr.val();
    
    scr.val("");
    
    scr.attr("placeholder", "/");
    
    opt = "/";
  }
);


//X power to Y

power.on('click',
  function () {
    
    mem = scr.val();
    
    scr.val("");
    
    scr.attr("placeholder", "power to");
    
    opt = "^";
  }
);

// Percentage

 percent.on('click',
            
  function () {
    
    mem = scr.val();
    
    scr.val("");
    
    scr.attr("placeholder", "%");
    
    opt = "%";
  }
);


// Equal

equal.on('click',

  function () {

    // Addition
     if ( opt === "+" ) { scr.val( +mem + +scr.val() ) };

    // Minus
    if ( opt === "-" ) { scr.val( +mem - +scr.val() ) };

    // Multiplication
    if ( opt === "*" ) { scr.val( +mem * +scr.val() ) };

    // Divide
    if ( opt === "/" ) { scr.val( +mem / +scr.val() ) };

    // X power to Y
    if ( opt === "^" ) { scr.val( Math.pow(+mem, +scr.val()) ) };
	
	// Makes the percentage of the first input number
	if ( opt === "%" ) { scr.val( (+mem * +scr.val())/100) };

  }

);


// CSV

// CSV Summation

csvplus.on('click',

  function () {
    	
	var x = scr;
        
    lst = x.val().split(".");
        
    i = 0;   
    acc = 0;
        
    while (i < lst.length) {
            
      acc += +lst[i];
            
      i++;
    
    }
        
    x.val(acc);

  }

);


// CSV Multiplication

csvprod.on('click',

  function () {
 
    var x = scr;       
	var lst = x.val().split(".");
        
    i = 0;
       
    var acc = 1;
        
    while (i < lst.length) {
            
      acc *= +lst[i];
            
      i++;
    
    }
        
    x.val(acc);

  }

);



//Buttons

// Numb 0

bts[0].on('click',

  function () {
    
    var num_0 = 0;
    
    if ( bk === "." ) {
      
      scr.val( decimal += num_0 );

      bk = "";

    } else { 
        
        var x = scr.val();
        
        scr.val(x + num_0);

      } 

  } 

);


// Numb 1

bts[1].on('click',

  function () {
    
    var num_1 = 1;
    
    if ( bk === "." ) {
      
      scr.val( decimal += num_1 );

      
      bk = "";

    } else { 

     var x = scr.val();

      scr.val(x + num_1);

      } 

  } 

);


// Numb 2

bts[2].on('click',
          
  function () {
    
    var num_2 = 2;
    
    if ( bk === "." ) {
        
      scr.val( decimal += num_2 );
      
      bk = "";
      
    } else {
        
        var x = scr.val();
        
        scr.val(x + num_2);
        
      }
  }
);


// número 3

bts[3].on('click',
          
  function () {
    
    var num_3 = 3;
    
    if ( bk === "." ) {
        
      scr.val( decimal += num_3 );
      
      bk = "";
      
    } else {
        
        var x = scr.val();
        
        scr.val(x + num_3);
        
      }
  }
);


// Numb 4

bts[4].on('click',
          
  function () {
    
    var num_4 = 4;
    
    if ( bk === "." ) {
        
      scr.val( decimal += num_4 );
      
      bk = "";
      
    } else {
        
        var x = scr.val();
        
        scr.val(x + num_4);
        
      }
  }
);


// Numb5

bts[5].on('click',
          
  function () {
    
    var num_5 = 5;
    
    if ( bk === "." ) {
        
      scr.val( decimal += num_5 );
      
      bk = "";
      
    } else {
        
        var x = scr.val();
        
        scr.val(x + num_5);
        
      }
  }
);



// Numb 6

bts[6].on('click',
          
  function () {
    
    var num_6 = 6;
    
    if ( bk === "." ) {
        
      scr.val( decimal += num_6 );
      
      bk = "";
      
    } else {
        
       var x = scr.val();
       
        scr.val(x + num_6);
        
      }
  }
);



// Numb 7

bts[7].on('click',
          
  function () {
    
    var num_7 = 7;
    
    if ( bk === "." ) {
        
      scr.val( decimal += num_7 );
      
      bk = "";
      
    } else {
        
        var x = scr.val();
        
        scr.val(x + num_7);
        
      }
  }
);


// Numb 8

bts[8].on('click',
          
  function () {
    
    var num_8 = 8;
    
    if ( bk === "." ) {
        
      scr.val( decimal += num_8 );
      
      bk = "";
      
    } else {
        
        var x = scr.val();
        
        scr.val(x + num_8);
        
      }
      
  }
);


// Numb 9

bts[9].on('click',
          
  function () {
    
    var num_9 = 9;
    
    if ( bk === "." ) {
        
      scr.val( decimal += num_9 );
      
      bk = "";
      
    } else {
        
        var x = scr.val();
        
        scr.val(x + num_9);
        
      }
  }
);


// Decimal

decimal.on('click',
           
  function () {
     
    decimal = scr.val() + ".";
    
    scr.val("");
  
    scr.attr("placeholder", decimal);
  
    bk = ".";
  }
);



// Positive - Negative

pos_neg.on('click',
  function () {
    
    x = +scr.val();
    
    if ( x === +scr.val() ) {

        scr.val(-x);

    } else {
      
      scr.val(x);

    }
  }
);


// Clear input screen

clear.on('click',
         
  function () {
    
    scr.val("");
    
    scr.attr("placeholder", "0");
    
    mem = 0;
    
    opt = "";
    
  }
  
);