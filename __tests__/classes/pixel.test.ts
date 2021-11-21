import { Pixel } from '../../src/classes/pixel';

describe('Test Pixel Class', () => {
  const pixel: Pixel = new Pixel(0, 1, 0);

  describe('getRowIndex', () => {
    it('should return the i-axis index of the pixel', () => {
      expect(pixel.getRowIndex()).toEqual(0);
    });
  });

  describe('getColumnIndex', () => {
    it('should return the j-axis index of the pixel', () => {
      expect(pixel.getColumnIndex()).toEqual(1);
    });
  });

  describe('getPixelColor', () => {
    it('should return the color value of the pixel', () => {
      expect(pixel.getPixelColor()).toEqual(0);
    });
  });
  
});
