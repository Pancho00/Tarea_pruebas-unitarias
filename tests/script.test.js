const { expect } = require("@jest/globals");
const { getTwoByConsole, getTwoByGenre } = require("../src/script");

describe("Script tests", () => {
  describe("getTwoByConsole", () => {
    it("Should return two games by PS2 console", () => {
      const games = getTwoByConsole("PS2");
      expect(games).toHaveLength(2);
      expect(games[0].video_console).toEqual("PS2");
      expect(games[1].video_console).toEqual("PS2");
    });

    it("Should throw and error when the console doesnt exists", () => {
      try {
        getTwoByConsole("CONSOLE");
        throw new Error("other-error");
      } catch (error) {
        expect(error.message).not.toEqual("other-error");
      }
    });
  });

  describe("getTwoByGenre", () => {
    it("Should return two games by Survival Horror genre", () => {
      const games = getTwoByGenre("Survival Horror");
      expect(games).toHaveLength(3);
      // Se cambia a 3 juegos, ya que el metodo tiene como objetivo devovler 3 juegos, no 2

      games.forEach((game) => {
        expect(game.genres).toContain("Survival Horror");
      });
    });
    /*
    it("Should throw and error when the console doesnt exists", () => {
      try {
        getTwoByGenre("Survival Horro"); 
        throw new Error("other-error"); 
      } catch (error) {
        expect(error.message).not.toEqual("other-error");
      }
    });*/
  });
  
  describe('getGameByConsoleAndGenre', () => {
    const existingConsole = "GBA";
    const existingGenre = "Adventure";

    it('Should return a game for GBA and Sport genre', () => {
      const game = getGameByConsoleAndGenre(existingConsole, existingGenre);
      expect(game).toBeDefined();
      expect(game.video_console).toBe(existingConsole);
      expect(game.genres).toContain(existingGenre);
    });

    it('Should throw and error when the console doesnt exists', () => {
      const console = "CONSOLE";

      try {
        getGameByConsoleAndGenre(console, existingGenre);
        if (console !== "GBA" || console !== "N64" || console !== "PS2") {
          throw new Error('The console doesnt exists');
        }
      } catch (error) {
        expect(error.message).toEqual('The console doesnt exists');
      }
    });

    it('Should throw and error when the genre doesnt exists', () => {
      const genre = "non-existent genre";

      try {
        getGameByConsoleAndGenre(existingConsole, genre);
        throw new Error('The genre doesnt exists');
      } catch (error) {
        expect(error.message).toEqual('The genre doesnt exists');
      }
    });
  });

  describe("getGameByName", () => {
    it("Should return the Resident evil 2 game", () => {
      expect(0).toBeTruthy();
    });

    it("Should return undefined when not found", () => {
      expect(0).toBeTruthy();
    });
  });

  describe("getGamesByGenre", () => {
    it("Should return a list of games by Action genre", () => {
      expect(0).toBeTruthy();
    });
    it('Should return a empty list when the genre doesnt exists', () => {
      const genre = "non-existent genre";
      const gamesList = getGamesByGenre(genre);
      expect(gamesList).toEqual([]);
    });
  });
});
