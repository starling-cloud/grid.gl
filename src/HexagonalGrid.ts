// Copyright 2023 Geoid
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.



/**
 * A class representing a hexagonal grid.
 */
 class HexagonalGrid<T> {
    private grid: T[][][];

    /**
     * Create a new HexagonalGrid.
     * @param private rows - The number of rows in the grid.
     * @param private columns - The number of columns in the grid.
     * @param initialFill - The initial value to fill the grid with.
     */
    constructor(private rows: number, private columns: number, initialFill?: T) {
        this.grid = Array.from({ length: rows }, () => Array.from({ length: columns }, () => Array(2).fill(initialFill)));
    }

    /**
     * Add an item to the hexagonal grid at a specific location.
     * @param row - The row coordinate of the cell.
     * @param column - The column coordinate of the cell.
     * @param index - The index in the hexagonal cell.
     * @param item - The item to add to the cell.
     */
    addItem(row: number, column: number, index: number, item: T): void {
        this.validateIndex(row, column, index);
        this.grid[row][column][index] = item;
    }

    /**
     * Get an item from the hexagonal grid at a specific location.
     * @param row - The row coordinate of the cell.
     * @param column - The column coordinate of the cell.
     * @param index - The index in the hexagonal cell.
     * @return The item at the specified cell, or undefined if the cell is empty.
     */
    getItem(row: number, column: number, index: number): T {
        this.validateIndex(row, column, index);
        return this.grid[row][column][index];
    }

    /**
     * Remove an item from the hexagonal grid at a specific location.
     * @param row - The row coordinate of the cell.
     * @param column - The column coordinate of the cell.
     * @param index - The index in the hexagonal cell.
     */
    removeItem(row: number, column: number, index: number): void {
        this.validateIndex(row, column, index);
        delete this.grid[row][column][index];
    }

    /**
     * Clear the hexagonal grid.
     */
    clearGrid(): void {
        this.grid.forEach((row) => row.forEach((cell) => cell.fill(undefined)));
    }

    /**
     * Execute a function on each item in the hexagonal grid.
     * @param callback - The function to execute on each item.
     */
    forEach(callback: (item: T, row: number, column: number, index: number) => void): void {
        for (let row = 0; row < this.rows; row++) {
            for (let column = 0; column < this.columns; column++) {
                for (let index = 0; index < 2; index++) {
                    callback(this.grid[row][column][index], row, column, index);
                }
            }
        }
    }

    /**
     * Find a specific item in the hexagonal grid.
     * @param callback - A predicate function to execute on each item.
     * @return The first item that makes the predicate function return true, or undefined if no such item is found.
     */
    find(callback: (item: T, row: number, column: number, index: number) => boolean): T | undefined {
        for (let row = 0; row < this.rows; row++) {
            for (let column = 0; column < this.columns; column++) {
                for (let index = 0; index < 2; index++) {
                    if (callback(this.grid[row][column][index], row, column, index)) {
                        return this.grid[row][column][index];
                    }
                }
            }
        }
        return undefined;
    }

    /**
     * Validate the indices.
     * @param row - The row index to validate.
     * @param column - The column index to validate.
     * @param index - The index in the hexagonal cell to validate.
     */
    private validateIndex(row: number, column: number, index: number): void {
        if (row < 0 || row >= this.rows || column < 0 || column >= this.columns || index < 0 || index >= 2) {
            throw new Error('Index out of bounds');
        }
    }

    /**
     * Print the hexagonal grid.
     */
    printGrid(): void {
        this.grid.forEach((row, rowIndex) => {
            let rowStr = rowIndex % 2 === 0 ? ' ' : '';
            rowStr += row.map(cell => cell.join(' ')).join('  ');
            console.log(rowStr);
        });
    }
}
