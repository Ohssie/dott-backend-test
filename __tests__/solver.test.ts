import { Solver } from '../src/solver';
import { Bitmap } from '../src/classes/bitmap';
import { invalidBitmapSize, invalidTestCase } from '../src/errors';

// First bitmap definition
const solverA = new Solver();
solverA.testBitmapRow('1');
solverA.testBitmapRow('');
solverA.testBitmapRow('3 4');
solverA.testBitmapRow('0001');
solverA.testBitmapRow('0011');
solverA.testBitmapRow('0110');

// Second bitmap definition
const solverB = new Solver();
solverB.testBitmapRow('1');
solverB.testBitmapRow('');
solverB.testBitmapRow('5 5');
solverB.testBitmapRow('01010');
solverB.testBitmapRow('00111');
solverB.testBitmapRow('10110');
solverB.testBitmapRow('01110');
solverB.testBitmapRow('10111');

describe('read and test bitmap lines', () => {
  it('should test defined bitmap lines and generate a string of these pixel values', () => {
    // first bitmap (solverA) test
    expect(solverA.noOfTestCases).toEqual(1);
    expect(solverA.bitmapDefinitions[0].rowSize).toEqual(3);
    expect(solverA.bitmapDefinitions[0].columnSize).toEqual(4);
    expect(solverA.bitmapDefinitions[0].pixels).toBe('0001,0011,0110');

    // second bitmap (solverB) test
    expect(solverB.noOfTestCases).toEqual(1);
    expect(solverB.bitmapDefinitions[0].rowSize).toEqual(5);
    expect(solverB.bitmapDefinitions[0].columnSize).toEqual(5);
    expect(solverB.bitmapDefinitions[0].pixels).toBe('01010,00111,10110,01110,10111');
  });

  it('should check and validate the number of invalid test cases => -1', () => {
    const solver = new Solver();

    try {
      solver.testBitmapRow('-1')
    } catch (error) {
      expect(error.message).toBe(invalidTestCase().message)
    }
  });

  it('should check and validate the number of invalid test cases => 0', () => {
    const solver = new Solver();

    try {
      solver.testBitmapRow('0')
    } catch (error) {
      expect(error.message).toBe(invalidTestCase().message)
    }
  });

  it('should test that the bitmap size passed is valid (one that exceeds the 1<=n<=182 constraint)', () => {
    const solver = new Solver();
    solver.testBitmapRow('1');
    solver.testBitmapRow('');

    try {
      solver.testBitmapRow('200 5');
    } catch (error) {
      expect(error.message).toBe(invalidBitmapSize().message)
    }
  });

  it('should test that the bitmap size passed is valid (one that exceeds the 1<=m<=182 constraint)', () => {
    const solver = new Solver();
    solver.testBitmapRow('1');
    solver.testBitmapRow('');

    try {
      solver.testBitmapRow('4 185');
    } catch (error) {
      expect(error.message).toBe(invalidBitmapSize().message)
    }
  });
});

describe('create bitmaps with the data passed.', () => {
  it('should generate a 12 pixel bitmap with a 3x4 input', () => {
    const bitmap: Bitmap[] = solverA.createNewBitmap();
    expect(bitmap[0].getRowSize()).toEqual(3);
    expect(bitmap[0].getColumnSize()).toEqual(4);
    expect(bitmap[0].getBitmapPixels()).toHaveLength(12);
  });

  it('should generate a 25 pixel bitmap with a 5x5 input', () => {
    const bitmap: Bitmap[] = solverB.createNewBitmap();
    expect(bitmap[0].getRowSize()).toEqual(5);
    expect(bitmap[0].getColumnSize()).toEqual(5);
    expect(bitmap[0].getBitmapPixels()).toHaveLength(25);
  });
});