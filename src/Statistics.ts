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
 * A class for performing statistical operations on Grid items.
 */
 class Statistics {
    /**
     * Create a new Statistics.
     * @param private grid - The Grid to perform operations on.
     */
    constructor(private grid: Grid<number>) {}

    /**
     * Calculate the average of all items in the Grid.
     * @return The average of all items in the Grid.
     */
    average(): number {
        let total = 0;
        let count = 0;
        this.grid.forEach(item => {
            total += item;
            count++;
        });
        return total / count;
    }

    /**
     * Find the maximum item in the Grid.
     * @return The maximum item in the Grid.
     */
    max(): number {
        let max = -Infinity;
        this.grid.forEach(item => {
            if (item > max) {
                max = item;
            }
        });
        return max;
    }

    /**
     * Find the minimum item in the Grid.
     * @return The minimum item in the Grid.
     */
    min(): number {
        let min = Infinity;
        this.grid.forEach(item => {
            if (item < min) {
                min = item;
            }
        });
        return min;
    }
}
