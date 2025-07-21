const game = document.querySelector('.game-btn')
const music = document.querySelector('.music-btn')
const tech = document.querySelector('.tech-btn')

const buttons = [game, music, tech]

function bg(element) {
    const isActive = element.classList.contains('is-toggle')
    buttons.forEach((btn)=>btn.classList.remove('is-toggle'))
    if (!isActive) {
        element.classList.add('is-toggle')

    }
}

music.addEventListener('click', () => bg(music))
game.addEventListener('click', () => bg(game))
tech.addEventListener('click', () => bg(tech))


        
        

   
 
                                                                          