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
 * A class for performing transformation operations on a Grid.
 */
 class Transformer<T> {
    /**
     * Create a new Transformer.
     * @param private grid - The Grid to perform operations on.
     */
    constructor(private grid: Grid<T>) {}

    /**
     * Flip the Grid horizontally.
     */
    flipHorizontal(): void {
        let newGrid = new Grid<T>(this.grid.rows, this.grid.columns);

        this.grid.forEach((item, row, column) => {
            newGrid.addItem(row, this.grid.columns - column - 1, item);
        });

        this.grid = newGrid;
    }

    /**
     * Flip the Grid vertically.
     */
    flipVertical(): void {
        let newGrid = new Grid<T>(this.grid.rows, this.grid.columns);

        this.grid.forEach((item, row, column) => {
            newGrid.addItem(this.grid
