import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
  // number of matches
  numberOfMatches = 0;

  // the minimum and maximum amount of matches that to generate
  minMatches = 10;
  maxMatches = 30;

  // state of the game
  winner = false;

  // current player
  currentPlayer = 1;

  constructor() { }

  ngOnInit() {
    // random generation of the number of matches
    // by default Math.random() return value between 0 and 1, for that we multiply ==> Math.random() * (this.maxMatches - this.minMatches) + this.minMatches
    this.numberOfMatches = Math.floor(Math.random() * (this.maxMatches - this.minMatches) + this.minMatches);
  }

  launchGame(numberOfMatches) {
    // removal of matches (decrement)
    this.numberOfMatches -= numberOfMatches;

    // check the end condition
    if (this.numberOfMatches <= 0) {
      this.numberOfMatches = 0;
      this.winner = true;
    }

    // Game with 3 players
    if (this.winner === false) {  // end of the round
      this.currentPlayer += 1;   // we increment the number of players until 3
      if (this.currentPlayer > 3) {
        if (this.currentPlayer === 2) {  // if the current player is 2, we increment +1 player
          this.currentPlayer += 1;
        } else { // else we take the first player
          this.currentPlayer = 1;
        }
      }
    }
  }

}
