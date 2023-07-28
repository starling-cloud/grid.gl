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
 * A class providing iteration over a Grid.
 */
 class GridIterator<T> {
    private currentRow = 0;
    private currentColumn = 0;

    /**
     * Create a new GridIterator.
     * @param private grid - The Grid to iterate over.
     */
    constructor(private grid: Grid<T>) {}

    /**
     * Get the next cell in the iteration.
     * @return The next Cell in the iteration, or undefined if the iteration is complete.
     */
    next(): Cell<T> | undefined {
        if (this.currentRow >= this.grid.rows) {
            return undefined;
        }
        
        let cell = new Cell<T>(this.currentRow, this.currentColumn, this.grid.getItem(this.currentRow, this.currentColumn));
        
        if (++this.currentColumn >= this.grid.columns) {
            this.currentColumn = 0;
            this.currentRow++;
        }
        
        return cell;
    }
}
