import { Bitmap } from '../../src/classes/bitmap';
import { Pixel } from '../../src/classes/pixel'
// import { Helper } from '../helper';

const testBitmap = (): Bitmap => {
  const pixels: Pixel[] = [new Pixel(0, 0, 1), new Pixel(0, 1, 0), new Pixel(1, 0, 0), new Pixel(1, 1, 1)];
  const bitmap: Bitmap = new Bitmap(2, 2, pixels);
  return bitmap;
}

describe('Test Bitmap Class', () => {
  const bitmap: Bitmap = testBitmap();
  describe('getRowSize', () => {
    it('should return line size of the bitmap', () => {
      expect(bitmap.getRowSize()).toEqual(2);
    });
  });

  describe('getColumnSize', () => {
    it('should return column size of the bitmap', () => {
      expect(bitmap.getColumnSize()).toEqual(2);
    });
  });

  describe('getBitmapPixels', () => {
    it('should return pixels of the bitmap', () => {
      expect(bitmap.getBitmapPixels()).toHaveLength(4);
    });
  });
});