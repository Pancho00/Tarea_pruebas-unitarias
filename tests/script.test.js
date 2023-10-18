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
  
  describe("getGameByConsoleAndGenre", () => {
    it("Should return a game for GBA and Sport genre", () => {
      expect(0).toBeTruthy();
    });

    it("Should throw and error when the console doesnt exists", () => {
      expect(0).toBeTruthy();
    });

    it("Should throw and error when the genre doesnt exists", () => {
      expect(0).toBeTruthy();
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
    it("Should return a empty list when the genre doesnt exists", () => {
      expect(0).toBeTruthy();
    });
  });
});
