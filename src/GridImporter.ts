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
 * A class for importing a Grid from various formats.
 */
 class GridImporter<T> {
    /**
     * Import the grid from JSON format.
     * @param json - A string containing the grid in JSON format.
     * @return A new Grid instance with the imported data.
     */
    static fromJSON(json: string): Grid<T> {
        let importData = JSON.parse(json);
        let grid = new Grid<T>(importData.length, importData[0].length);

        importData.forEach((row: any, rowIndex: number) => {
            row.forEach((item: T, columnIndex: number) => {
                grid.addItem(rowIndex, columnIndex, item);
            });
        });

        return grid;
    }

    /**
     * Import the grid from CSV format.
     * @param csv - A string containing the grid in CSV format.
     * @return A new Grid instance with the imported data.
     */
    static fromCSV(csv: string): Grid<T> {
        let rows = csv.split('\n');
        let grid = new Grid<T>(rows.length, rows[0].split(',').length);

        rows.forEach((row: string, rowIndex: number) => {
            let items = row.split(',');
            items.forEach((item: any, columnIndex: number) => {
                grid.addItem(rowIndex, columnIndex, item);
            });
        });

        return grid;
    }
}
