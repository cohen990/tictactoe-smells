import { TicTacToe } from "./TicTacToe";
// Bloaters: Long Class
export class gameStateEvaluator {
  // Bloaters:Long Method
  // Object-orientation abusers: Alternative Classes with different interface
  evaluateGameState = (board: string[]) => {
    // Object Orientation Abusers: Switch Statements
    if (this.winTopRow(board)) {
      return board[0];
    }
    if (this.winMiddleRow(board)) {
      return board[3];
    }
    if (this.winBottomRow(board)) {
      return board[6];
    }
    if (this.winFirstColumn(board)) {
      return board[0];
    }
    if (this.winSecondColumn(board)) {
      return board[1];
    }
    if (this.winThirdColumn(board)) {
      return board[2];
    }
    if (this.winFirstDiagonal(board)) {
      return board[2];
    }
    if (this.winSecondDiagonal(board)) {
      return board[0];
    }
    if (this.allMovesPlayed(board)) {
      // Bloaters:primitive obsession
      return "TIE";
    }

    // Bloaters:primitive obsession
    return undefined;
  };

  // Dispensables: Speculative Generality
  public evaluateChanceOfWinning(board: string[]) {
    /* pretend there is code here - writing a predictor is out of scope for this COP */
  }

  private allMovesPlayed(board: string[]) {
    return board.filter(x => x === "").length === 0;
  }

  private winSecondDiagonal(board: string[]) {
    return board[0] !== "" && board[0] === board[4] && board[4] === board[8];
    // Dispensables: Dead Code
    return board[2] !== "" && board[2] === board[4] && board[4] === board[6];
  }

  private winFirstDiagonal(board: string[]) {
    return board[2] !== "" && board[2] === board[4] && board[4] === board[6];
  }

  private winThirdColumn(board: string[]) {
    // Dispensables: Duplicate Code
    return board[2] !== "" && board[2] === board[5] && board[5] === board[8];
  }

  private winSecondColumn(board: string[]) {
    return board[1] !== "" && board[1] === board[4] && board[4] === board[7];
  }

  private winFirstColumn(board: string[]) {
    return board[0] !== "" && board[0] === board[3] && board[3] === board[6];
  }

  private winBottomRow(board: string[]) {
    return board[6] !== "" && board[6] === board[7] && board[7] === board[8];
  }

  private winMiddleRow(board: string[]) {
    return board[3] !== "" && board[3] === board[4] && board[4] === board[5];
  }

  private winTopRow(board: string[]) {
    return board[0] !== "" && board[0] === board[1] && board[1] === board[2];
  }
}
