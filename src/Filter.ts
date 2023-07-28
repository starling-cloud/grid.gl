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
 * A class providing functionality to filter Grid items.
 */
 class Filter<T> {
    /**
     * Create a new Filter.
     * @param private grid - The Grid to filter.
     */
    constructor(private grid: Grid<T>) {}

    /**
     * Filter the Grid items based on a criterion.
     * @param criterion - A function that takes a Grid item and returns a boolean.
     * @return A new Grid containing only the items for which the criterion function returned true.
     */
    filter(criterion: (item: T) => boolean): Grid<T> {
        let newGrid = new Grid<T>(this.grid.rows, this.grid.columns);
        this.grid.forEach((item, row, column) => {
            if (criterion(item)) {
                newGrid.addItem(row, column, item);
            }
        });
        return newGrid;
    }
}
