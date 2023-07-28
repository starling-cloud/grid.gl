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
 * A class representing an edge.
 */
 class Edge {
    constructor(public vertex1: Vertex, public vertex2: Vertex) {}

    /**
     * Returns the length of this edge.
     */
    length(): number {
        const dx = this.vertex2.x - this.vertex1.x;
        const dy = this.vertex2.y - this.vertex1.y;
        const dz = this.vertex2.z - this.vertex1.z;
        return Math.sqrt(dx * dx + dy * dy + dz * dz);
    }
}