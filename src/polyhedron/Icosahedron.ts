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
 * A class representing an icosahedron.
 */
 class Icosahedron {
    public vertices: Vertex[] = [];
    public edges: Edge[] = [];
    public faces: Face[] = [];

    constructor() {
        // Populate vertices, edges and faces according to the structure of an icosahedron.
        this.initialize();
    }

    /**
     * Initializes the icosahedron with the vertices, edges and faces.
     */
    private initialize(): void {
        // TODO: Initialize the vertices, edges and faces according to the structure of an icosahedron.
    }

    /**
     * Adds a vertex to the icosahedron.
     * @param vertex - The vertex to add.
     */
    addVertex(vertex: Vertex): void {
        this.vertices.push(vertex);
    }

    /**
     * Adds an edge to the icosahedron.
     * @param edge - The edge to add.
     */
    addEdge(edge: Edge): void {
        this.edges.push(edge);
    }

    /**
     * Adds a face to the icosahedron.
     * @param face - The face to add.
     */
    addFace(face: Face): void {
        this.faces.push(face);
    }

    /**
     * Translates the icosahedron by a given offset.
     * @param dx - The offset in the x-direction.
     * @param dy - The offset in the y-direction.
     * @param dz - The offset in the z-direction.
     */
    translate(dx: number, dy: number, dz: number): void {
        this.vertices.forEach(vertex => vertex.translate(dx, dy, dz));
    }

    /**
     * Rotates the icosahedron around the origin.
     * @param angleX - The rotation angle around the x-axis, in radians.
     * @param angleY - The rotation angle around the y-axis, in radians.
     * @param angleZ - The rotation angle around the z-axis, in radians.
     */
    rotate(angleX: number, angleY: number, angleZ: number): void {
        this.vertices.forEach(vertex => vertex.rotate(angleX, angleY, angleZ));
    }

    /**
     * Scales the icosahedron by a given factor.
     * @param factor - The scaling factor.
     */
    scale(factor: number): void {
        this.vertices.forEach(vertex => vertex.scale(factor));
    }

    /**
     * Returns the volume of the icosahedron.
     */
    volume(): number {
        // TODO: Implement the calculation of the volume of the icosahedron.
        return 0;
    }
}
