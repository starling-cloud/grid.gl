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
 * A class for identifying and working with a cell's neighboring cells in a Grid.
 */
 class Neighborhood<T> {
    /**
     * Create a new Neighborhood.
     * @param private grid - The Grid to find a neighborhood in.
     * @param private row - The row coordinate of the cell.
     * @param private column - The column coordinate of the cell.
     */
    constructor(private grid: Grid<T>, private row: number, private column: number) {}

    /**
     * Get all neighboring cells of the given cell.
     * @return An array of neighboring Cells, or an empty array if the cell has no neighbors.
     */
    getNeighbors(): Cell<T>[] {
        let neighbors = [];

        for (let i = Math.max(0, this.row - 1); i <= Math.min(this.grid.rows - 1, this.row + 1); i++) {
            for (let j = Math.max(0, this.column - 1); j <= Math.min(this.grid.columns - 1, this.column + 1); j++) {
                if (i !== this.row || j !== this.column) {
                    neighbors.push(new Cell<T>(i, j, this.grid.getItem(i, j)));
                }
            }
        }

        return neighbors;
    }
}
