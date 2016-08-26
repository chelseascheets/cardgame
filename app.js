(function () {
    
    var items = ['Rock','Paper','Scissors'];

    document.getElementById('btnRock').oneclick = playRock;
    document.getElementById('btnPaper').oneclick = playPaper;
    document.getElementById('btnScissors').oneclick = playScissors;
    
    var computerChoice = Math.floor((Math.random() * 3) + 1);
    var computerItem = items [computerChoice - 1];


    function playRock() {
        play ('Rock');
    }
     function playPaper() {
        play ('Paper');
    }
     function playScissors() {
        play ('Scissors');

    }
    function play(myItem) {
        setCaption("It's a Tie!");
    }
    function setCaption(caption) {
        document.getElementById('caption').innerHTML = caption;
    }
    
    console.log(computerItem);
    
   function play() {
        switch (computerItem) {
	        case “Rock”:
                if (myItem = "Rock") {
                    setCaption("It's a tie!");
                }
                else if (myItem = "Paper") {
                    setCaption("Computer wins!");
                }
                else (myItem = "Scissors") {
                    setCaption("Computer wins!");
                } 

                break;
            case “Paper”:
                if (myItem = Paper) {
                    setCaption("You win!");
                }
                else if (paper) {
                    setCaption("It's a tie!");
                }
                else ();
                }
                break;
            case “Scissors”:
                if (rock) {
                    setCaption("It's a tie!");
                }
                else if (paper) {
                    setCaption("Computer wins!");
                }
                else (scissors) {
                    setCaption("Computer wins!");
                }
                break;
        }
    }


})();

