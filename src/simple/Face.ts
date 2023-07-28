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
 * A class representing a face.
 */
 class Face {
    constructor(public vertices: Vertex[]) {
        if (vertices.length !== 3) {
            throw new Error('A face of an Icosahedron should have exactly 3 vertices.');
        }
    }

    /**
     * Returns the area of this face.
     */
    area(): number {
        // TODO: Implement the calculation of the area of the face.
        return 0;
    }

    /**
     * Returns the normal of this face.
     */
    normal(): Vertex {
        // TODO: Implement the calculation of the normal of the face.
        return new Vertex(0, 0, 0);
    }
}