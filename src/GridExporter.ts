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
 * A class for exporting a Grid to various formats.
 */
 class GridExporter<T> {
    /**
     * Create a new GridExporter.
     * @param private grid - The Grid to export.
     */
    constructor(private grid: Grid<T>) {}

    /**
     * Export the grid to JSON format.
     * @return A string containing the grid in JSON format.
     */
    toJSON(): string {
        let exportData = this.grid.map((item, row, column) => {
            return {
                row,
                column,
                data: item,
            };
        });

        return JSON.stringify(exportData);
    }

    /**
     * Export the grid to CSV format.
     * @return A string containing the grid in CSV format.
     */
    toCSV(): string {
        let rows = [];
        for (let row = 0; row < this.grid.rows; row++) {
            rows.push(this.grid.columns.map(column => this.grid.getItem(row, column)).join(','));
        }
        return rows.join('\n');
    }
}
