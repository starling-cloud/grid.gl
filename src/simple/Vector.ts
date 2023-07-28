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
 * A class representing a vector.
 */
 class Vector {
    constructor(public x: number, public y: number, public z: number) {}

    /**
     * Adds another vector to this vector.
     * @param v - The vector to add.
     */
    add(v: Vector): void {
        this.x += v.x;
        this.y += v.y;
        this.z += v.z;
    }

    /**
     * Scales this vector by a given factor.
     * @param factor - The scaling factor.
     */
    scale(factor: number): void {
        this.x *= factor;
        this.y *= factor;
        this.z *= factor;
    }

    /**
     * Computes the Euclidean distance to another vector.
     * @param v - The other vector.
     * @returns The distance.
     */
    distanceTo(v: Vector): number {
        const dx = v.x - this.x;
        const dy = v.y - this.y;
        const dz = v.z - this.z;
        return Math.sqrt(dx * dx + dy * dy + dz * dz);
    }

    /**
     * Computes the dot product with another vector.
     * @param v - The other vector.
     * @returns The dot product.
     */
    dotProduct(v: Vector): number {
        return this.x * v.x + this.y * v.y + this.z * v.z;
    }

    /**
     * Normalizes this vector, making it a unit vector.
     */
    normalize(): void {
        const length = Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
        this.x /= length;
        this.y /= length;
        this.z /= length;
    }

    /**
     * Returns the length (magnitude) of the vector.
     * @returns The length of the vector.
     */
    length(): number {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }

    /**
     * Computes the cross product with another vector.
     * @param v - The other vector.
     * @returns The resulting vector of the cross product.
     */
    crossProduct(v: Vector): Vector {
        return new Vector(
            this.y * v.z - this.z * v.y,
            this.z * v.x - this.x * v.z,
            this.x * v.y - this.y * v.x
        );
    }
}

