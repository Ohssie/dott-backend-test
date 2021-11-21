import { Pixel } from './classes/pixel';
import { Bitmap } from './classes/bitmap'
import { invalidTestCase, invalidBitmapSize } from './errors';

interface BitmapDefinition {
  rowSize: number;
  columnSize: number;
  pixels: string;
}

export class Solver {
  public bitmapDefinitions: Array<BitmapDefinition>;
  public noOfTestCases: undefined | number;

  constructor() {
    this.bitmapDefinitions = [];
  }

  /**
   * 
   * @param line { string } // eg. '1001'
   */
  public testBitmapRow(line: string): null {
    // Check to make sure a number of testcases is specified in the input. This should fall within "The number of test cases t (1≤t≤1000)"
    if (!this.noOfTestCases) {
      if (!(Number(line) >= 1 && Number(line) <= 1000)) {
        // console.log('There is no valid number of test cases!');
        throw invalidTestCase();
      }
      this.noOfTestCases = Number(line)
      return null;
    }
    // Check that the line being read isn't empty
    if (line === '') return null;

    // if the line has space between then it is the row and column definition and would be used to define the bitmap we are working with.
    if (line.includes(' ')) {
      const [rowSize, columnSize] = line.split(' ');
      if (!(Number(rowSize) >= 1 && Number(rowSize) <= 182) || !(Number(columnSize) >= 1 && Number(columnSize) <= 182)) {
        // console.log('There is an invalid bitmap size value provided!')
        throw invalidBitmapSize();
      }

      // Bitmap definition with the values from the above checks.
      const newBitmapDefinition: BitmapDefinition = {
        rowSize: Number(rowSize),
        columnSize: Number(columnSize),
        pixels: ''
      };

      this.bitmapDefinitions.push(newBitmapDefinition);
      return null;
    } else {
      // check to see if the bitmap definition is empty then assign the new line else concatenate it.
      if (this.bitmapDefinitions[this.bitmapDefinitions.length - 1].pixels === '') {
        this.bitmapDefinitions[this.bitmapDefinitions.length - 1].pixels = line;
      } else {
        this.bitmapDefinitions[this.bitmapDefinitions.length - 1].pixels += ',' + line;
      }
      return null;
    }
  }

  public createNewBitmap(): Bitmap[] {
    const bitmaps: Bitmap[] = [];
    this.bitmapDefinitions.forEach((bitmapDefinition: BitmapDefinition) => {
      const { rowSize, columnSize, pixels: stringPixels } = bitmapDefinition;
      const pixels: Pixel[] = [];
      const lines = stringPixels.split(',');

      for (let i = 0; i < rowSize; i++) {
        for (let j = 0; j < columnSize; j++) {
          const pixel = new Pixel(i, j, Number(lines[i].charAt(j)));
          pixels.push(pixel);
        }
      }
      bitmaps.push(new Bitmap(rowSize, columnSize, pixels));
    });
    return bitmaps;
  }
}