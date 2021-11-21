interface SolverError {
  message: string;
}

export const invalidTestCase = (): SolverError => ({
  message: "There is no valid number of test cases!"
})

export const invalidBitmapSize = (): SolverError => ({
  message: 'There is an invalid bitmap size value provided!'
})

