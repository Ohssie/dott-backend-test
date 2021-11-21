import { Pixel } from './pixel';

export class Bitmap {
  private rowSize: number;
  private columnSize: number;
  private pixels: Pixel[];

  constructor(rowSize: number, columnSize: number, pixels: Pixel[]) {
    this.rowSize = rowSize;
    this.columnSize = columnSize;
    this.pixels = pixels;
  }

  public getRowSize(): number {
    return this.rowSize;
  }

  public getColumnSize(): number {
    return this.columnSize;
  }

  /**
   * Return the associated Bitmap's Pixels
   * @returns { Pixels[] } which is an array of Pixels
   */
  public getBitmapPixels(): Pixel[] {
    return this.pixels;
  }

  public setPixelColor(pixel: Pixel, color: number): void {
    const pixelIndex = this.pixels.findIndex((pix) => pix.getRowIndex() === pixel.getRowIndex() && pix.getColumnIndex() === pixel.getColumnIndex());
    this.pixels[pixelIndex].setPixelColor(color);
  }
}