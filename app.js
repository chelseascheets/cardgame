(function () {

    var items = ['Rock', 'Paper', 'Scissors'];
    var computerItem;

    document.getElementById('btnRock').oneclick = playRock;
    document.getElementById('btnPaper').oneclick = playPaper;
    document.getElementById('btnScissors').oneclick = playScissors;
    
    var computerChoice = Math.floor((Math.random() * 3) + 1);
    var computerItem = items [computerChoice - 1];


    var items = ['Rock', 'Paper', 'Scissors'];
    var computerItem;


    var items = ['Rock', 'Paper', 'Scissors'];
    var computerItem;


    document.getElementById('Rock').onclick = playRock;
    document.getElementById('Paper').onclick = playPaper;
    document.getElementById('Scissors').onclick = playScissors;
    document.getElementById('PlayAgain').onclick = playAgain;

    chooseComputerItem();

    function playAgain() {
        chooseComputerItem();
        setCaption('Pick an Item!');
    }

    function chooseComputerItem() {
        var computerChoice = Math.floor((Math.random() * 3) + 1);
        computerItem = items[computerChoice - 1];
        console.log('Computer Item: ' + computerItem);
    }
    function playRock() {
        play('Rock');
    }
    function playPaper() {
        play('Paper');
    }
    function playScissors() {
        play('Scissors');
    }
    function setCaption(caption) {
        document.getElementById('caption').innerHTML = caption;
    }

    function showComputerItem() {
        item = item || computerItem;
        document.getElementById('computerItem').innerHTML = item;
    }

    function play(myItem) {



    
    console.log(computerItem);
    
    console.log(computerItem);
    
   function play() {


        switch (computerItem) {
            case 'Rock':
                if (myItem === 'Rock') {
                    setCaption("Oh no, it's a tie!");
                }
                else if (myItem === 'Paper') {
                    setCaption("You lose!");
                }
                else {
                    setCaption("Wow, you kinda suck at this!");
                }
                break;
            case “Paper”:
                if (myItem === Paper) {
                    setCaption("You win!");
                }
                else if (myItem ==='Paper') {
                    setCaption("It's a tie!");
                }
                else {
                    setCaption("You lose!");
             
                }
                break;
            case 'Scissors':
                if (myItem === 'Rock') {
                    setCaption("You win!");
                }
                else if (myItem === 'Paper') {
                    setCaption("Computer wins!");
                }
                else {
                    setCaption("It's a tie!");
                }
                break;
        }
    }

            }

        }


            }

            }

    }
})();

