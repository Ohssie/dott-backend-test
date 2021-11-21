
export class Pixel {
  private i: number; // the i-axis of the pixel (row)
  private j: number; // the j-axis of the pixel (column)
  private color: number; // the color of the pixel (whether white(1) or black(0))

  constructor(i: number, j: number, color: number) {
    this.i = i;
    this.j = j;
    this.color = color;
  }

  /**
   * Returns the row index of the pixel.
   * @returns {number} i - An integer
   * @example -> pixel.getRowIndex();
   */
  public getRowIndex(): number {
    return this.i;
  }

  /**
   * Returns the column index of the pixel.
   * @returns {number} j - An integer
   * @example -> pixel.getColumnIndex();
   */
  public getColumnIndex(): number {
    return this.j;
  }

  /**
   * Returns the color of the pixel.
   * @returns {number} j - An integer
   * @example -> pixel.getPixelColor();
   */
  public getPixelColor(): number {
    return this.color;
  }

  /**
   * Sets the color of the pixel.
   * @param {number} color - An integer
   * @example -> pixel.setPixelColor(1);
   * where white => 1 && black => 0.
   */
  public setPixelColor(color: number): void {
    this.color = color;
  }

}