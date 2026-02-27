export function GameView(container) {
    container.innerHTML = `
        <div class="game-hud">
            <div class="hud-top">
                <div class="player-info">
                    <span class="player-name">Player 1</span>
                    <span class="player-score">Score: 0</span>
                </div>
            </div>
        </div>
    `;
}