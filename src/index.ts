import readline from 'readline';
import { Bitmap } from './classes/bitmap';
import { Pixel } from './classes/pixel'
import { Solver } from './solver';

/**
 * for each pixel, computes the distance to the nearest white;
 * @param bitmap  - the bitmap to be worked with
 * @param pixel  - the bitmap pixel to be calculated
 *        pixel colors => (white = 1, black = 0)
 */
function calculatePixelDistance(bitmap: Bitmap, pixel: Pixel): number {
  if (pixel.getPixelColor() === 1) return 0;
  
  const bMap = bitmap.getBitmapPixels().filter((pixel) => pixel.getPixelColor() === 1);
  return bMap.reduce((distance: number, current: Pixel) => {
    const newDistance: number = Math.abs(current.getRowIndex() - pixel.getRowIndex()) + Math.abs(current.getColumnIndex() - pixel.getColumnIndex());
    return Math.min(distance, newDistance)
  }, Math.max(bitmap.getRowSize(), bitmap.getColumnSize()));
}

async function index(): Promise<void> {
  const rLine = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
  });

  const bitmapSolver = new Solver();
  rLine.on('line', (row) => {
    try {
      bitmapSolver.testBitmapRow(row.trim());
    } catch (error) {
      throw new Error('Line parsing error: ' + error);
    }
  });

  rLine.on('close', () => {
    const bitmaps = bitmapSolver.createNewBitmap();
    bitmaps.forEach((bMap) => {
      const pixels = bMap.getBitmapPixels();

      for (let x = 0; x < bMap.getRowSize(); x++) {
        const pxLines = pixels.filter((pixel) => pixel.getRowIndex() === x);
        const result = pxLines.map((px) => {
          return calculatePixelDistance(bMap, px)
        }).join(' ');
        process.stdout.write(result + '\n');
      }
      process.stdout.write('\n');
    })
    process.stdout.write('\n');
  })

}

(async () => { await index() })();