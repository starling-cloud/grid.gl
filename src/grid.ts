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
 * A class representing a two-dimensional grid of items.
 */
 class Grid<T> {
    private grid: T[][];

    /**
     * Create a new grid.
     * @param rows - The number of rows in the grid.
     * @param columns - The number of columns in the grid.
     * @param initialFill - An optional initial value to fill the grid with.
     */
    constructor(private rows: number, private columns: number, initialFill?: T) {
        this.grid = Array.from({ length: rows }, () => Array(columns).fill(initialFill));
    }

    /**
     * Add an item to the grid at a specific location.
     * @param row - The row to add the item to.
     * @param column - The column to add the item to.
     * @param item - The item to add.
     */
    addItem(row: number, column: number, item: T): void {
        this.validateIndex(row, column);
        this.grid[row][column] = item;
    }

    /**
     * Get an item from the grid at a specific location.
     * @param row - The row to get the item from.
     * @param column - The column to get the item from.
     * @return The item at the specified location.
     */
    getItem(row: number, column: number): T {
        this.validateIndex(row, column);
        return this.grid[row][column];
    }

    /**
     * Remove an item from the grid at a specific location.
     * @param row - The row to remove the item from.
     * @param column - The column to remove the item from.
     */
    removeItem(row: number, column: number): void {
        this.validateIndex(row, column);
        delete this.grid[row][column];
    }

    /**
     * Resize the grid.
     * @param newRows - The new number of rows.
     * @param newColumns - The new number of columns.
     */
     resizeGrid(newRows: number, newColumns: number): void {
        let newGrid = Array.from({ length: newRows }, () => Array(newColumns).fill(undefined));
        let copyRows = Math.min(newRows, this.rows);
        let copyColumns = Math.min(newColumns, this.columns);

        for (let row = 0; row < copyRows; row++) {
            for (let column = 0; column < copyColumns; column++) {
                newGrid[row][column] = this.grid[row][column];
            }
        }

        this.grid = newGrid;
        this.rows = newRows;
        this.columns = newColumns;
    }

    /**
     * Clear the grid by removing all items.
     */
    clearGrid(): void {
        for (let row = 0; row < this.rows; row++) {
            for (let column = 0; column < this.columns; column++) {
                delete this.grid[row][column];
            }
        }
    }

    /**
     * Print the grid to the console.
     */
    printGrid(): void {
        console.log(this.grid.map(row => row.join(' ')).join('\n'));
    }

    /**
     * Validate a row and column index.
     * @param row - The row index to validate.
     * @param column - The column index to validate.
     * @throws {Error} If the row or column index is out of bounds.
     */
    private validateIndex(row: number, column: number): void {
        if (row < 0 || row >= this.rows || column < 0 || column >= this.columns) {
            throw new Error('Index out of bounds');
        }
    }

    /**
     * Execute a function on each item in the grid.
     * @param callback - The function to execute.
     */
    forEach(callback: (item: T, row: number, column: number) => void): void {
        for (let row = 0; row < this.rows; row++) {
            for (let column = 0; column < this.columns; column++) {
                callback(this.grid[row][column], row, column);
            }
        }
    }

    /**
     * Create a new grid with the results of calling a provided function on every element in the existing one.
     * @param callback - The function to call on every element.
     * @return A new grid with the transformed elements.
     */
    map<U>(callback: (item: T, row: number, column: number) => U): Grid<U> {
        let newGrid = new Grid<U>(this.rows, this.columns);
        this.forEach((item, row, column) => newGrid.addItem(row, column, callback(item, row, column)));
        return newGrid;
    }

    /**
     * Fill all grid cells with a value.
     * @param value - The value to fill the grid with.
     */
    fill(value: T): void {
        this.forEach((_, row, column) => this.addItem(row, column, value));
    }

    /**
     * Find a specific item in the grid.
     * @param callback - A function that defines the condition to find the item.
     * @return The found item, or undefined if not found.
     */
    find(callback: (
        item: T,
        row: number,
        column: number
    ) => boolean): T | undefined {
        for (let row = 0; row < this.rows; row++) {
            for (let column = 0; column < this.columns; column++) {
                if (callback(this.grid[row][column], row, column)) {
                    return this.grid[row][column];
                }
            }
        }
        return undefined;
    }

    /**
     * Rotate the grid 90 degrees clockwise.
     */
     rotate(): void {
        let newGrid = Array.from(
            { length: this.columns }, () => Array(this.rows).fill(undefined)
        );

        this.forEach((item, row, column) => {
            newGrid[column][this.rows - row - 1] = item;
        });

        this.grid = newGrid;
        [this.rows, this.columns] = [this.columns, this.rows];
    }

}
