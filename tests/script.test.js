const { expect } = require('@jest/globals');
const { getTwoByConsole } = require('../src/script');
const { getGameByName } = require('../src/script');

describe('Script tests', () => {
  describe('getTwoByConsole', () => {
    it('Should return two games by PS2 console', () => {
      const games = getTwoByConsole('PS2');
      expect(games).toHaveLength(2);
      expect(games[0].video_console).toEqual('PS2');
      expect(games[1].video_console).toEqual('PS2');
    });

    it('Should throw and error when the console doesnt exists', () => {
      try {
        getTwoByConsole('CONSOLE');
        throw new Error('other-error');
      } catch (error) {
        expect(error.message).not.toEqual('other-error');
      }
    });
  });

  describe('getTwoByGenre', () => {
    it('Should return two games by Survival Horror genre', () => {
      expect(0).toBeTruthy();
    });
    it('Should throw and error when the console doesnt exists', () => {
      expect(0).toBeTruthy();
    });
  });

  describe('getGameByConsoleAndGenre', () => {
    it('Should return a game for GBA and Sport genre', () => {
      expect(0).toBeTruthy();
    });

    it('Should throw and error when the console doesnt exists', () => {
      expect(0).toBeTruthy();
    });

    it('Should throw and error when the genre doesnt exists', () => {
      expect(0).toBeTruthy();
    });
  });

  describe('getGameByName', () => {
    it('Should return the Resident evil 2 game', () => {
      const name = 'Resident Evil 2';
      expect(getGameByName(name).name.toLowerCase()).toEqual(name.toLowerCase());
    });

    it('Should return undefined when not found', () => {
      expect(getGameByName('juego que no existe')).toEqual(undefined);
    });
  });

  describe('getGamesByGenre', () => {
    it('Should return a list of games by Action genre', () => {
      expect(0).toBeTruthy();
    });
    it('Should return a empty list when the genre doesnt exists', () => {
      expect(0).toBeTruthy();
    });
  });
});
