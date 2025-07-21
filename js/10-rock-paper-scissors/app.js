const jsResult = document.querySelector('.js-result')
        const jsWL = document.querySelector('.js-w-or-l')
        const jsMove = document.querySelector('.js-move')



        // const normal=JSON.parse(localStorage.getItem('score'));
        // console.log(normal);

        let count = JSON.parse(localStorage.getItem('score')) || {
            wins: 0,
            loses: 0,
            tie: 0
        };//default operator
        /*if(count===null){
            count={
                wins:0,
                loses:0,
                tie:0
            };
        }*/
        // if(!score)//null=true
        updateScore()


        function game(playermov) {
            const move = rand();
            let res = '';
            if (playermov === 'Scissors') {
                if (move === 'rock') {
                    res = 'you lose';
                }
                else if (move === 'paper') {
                    res = 'you win';
                }
                else if (move === 'scissors') {
                    res = 'tie';
                }
            }

            else if (playermov === 'Paper') {
                if (move === 'rock') {
                    res = 'you win';
                }
                else if (move === 'paper') {
                    res = 'tie';
                }
                else if (move === 'scissors') {
                    res = 'you lose';
                }
            }

            else if (playermov === 'Rock') {
                if (move === 'rock') {
                    res = 'tie';
                }
                else if (move === 'paper') {
                    res = 'you lose';
                }
                else if (move === 'scissors') {
                    res = 'you won';
                }
            }

            if (res === 'you lose') {
                count.loses += 1;
            }
            else if (res === 'you win') {
                count.wins += 1;
            }
            else if (res === 'tie') {
                count.tie += 1;
            }
            const stringvalue = JSON.stringify(count);
            localStorage.setItem('score', stringvalue)

            //             alert(`computer pick ${move}.${res}
            // winss:${count.wins},loses:${count.loses},tie:${count.tie}`)

            updateScore()

            jsWL.innerHTML = res
            jsMove.innerHTML = `you : ${playermov} and computer : ${move}`



        }


        function updateScore() {
            jsResult.innerHTML = ` winss:${count.wins},loses:${count.loses},tie:${count.tie}`

        }

        //let move='';
        function rand() {
            const no = Math.random();
            let move = '';

            if (no >= 0 && no <= 1 / 3) {
                move = 'rock';
            }
            else if (no > 1 / 3 && no <= 2 / 3) {
                move = 'paper';
            }
            else if (no >= 2 / 3 && no <= 1) {
                move = 'scissors';
            }
            return move;
        }