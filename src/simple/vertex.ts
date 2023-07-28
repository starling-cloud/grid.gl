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
 * A class representing a vertex.
 */
 class Vertex {
    constructor(public x: number, public y: number, public z: number) {}

    /**
     * Translates this vertex by a given offset.
     * @param dx - The offset in the x-direction.
     * @param dy - The offset in the y-direction.
     * @param dz - The offset in the z-direction.
     */
    translate(dx: number, dy: number, dz: number): void {
        this.x += dx;
        this.y += dy;
        this.z += dz;
    }

    /**
     * Rotates this vertex around the origin.
     * @param angleX - The rotation angle around the x-axis, in radians.
     * @param angleY - The rotation angle around the y-axis, in radians.
     * @param angleZ - The rotation angle around the z-axis, in radians.
     */
    rotate(angleX: number, angleY: number, angleZ: number): void {
        // TODO: Implement the rotation of the vertex.
    }

    /**
     * Scales this vertex by a given factor.
     * @param factor - The scaling factor.
     */
    scale(factor: number): void {
        this.x *= factor;
        this.y *= factor;
        this.z *= factor;
    }
}