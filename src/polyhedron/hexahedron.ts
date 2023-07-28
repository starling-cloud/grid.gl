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
 * Provides Hexahedron Class
 * Regular unit cube.
 */
 import { Polyhedron } from "./polyhedron"; // Adjust this import path to your actual file structure

 type Num = number;
 
 class Hexahedron extends Polyhedron {
     static vertices(): Num[][] {
         const vertices: Num[][] = [
             [-1, -1, -1],
             [-1, -1, 1],
             [-1, 1, 1],
             [-1, 1, -1],
             [1, -1, -1],
             [1, -1, 1],
             [1, 1, 1],
             [1, 1, -1],
         ];
         return vertices;
     }
 
     static getUnitFaces(): Num[][] {
         const faces: Num[][] = [
             [0, 1, 2, 3],
             [4, 5, 6, 7],
             [0, 1, 4, 5],
             [2, 3, 6, 7],
             [0, 3, 4, 7],
             [1, 2, 5, 6],
         ];
         return faces;
     }
 
     static calcArea(a: Num): Num {
         const area: Num = 6 * a * a;
         return area;
     }
 
     static calcVolume(a: Num): Num {
         const volume: Num = a * a * a;
         return volume;
     }
 
     static calcFaceDiagonal(a: Num): Num {
         const faceDiagonal: Num = Math.sqrt(a * a);
         return faceDiagonal;
     }
 
     static calcSpaceDiagonal(a: Num): Num {
         const spaceDiagonal: Num = Math.sqrt(a * a * a);
         return spaceDiagonal;
     }
 
     static calcRadiusCircumsphere(a: Num): Num {
         const radius: Num = a * 0.5 * Math.sqrt(3);
         return radius;
     }
 
     static calcRadiusInsphere(a: Num): Num {
         const radius: Num = a / 2;
         return radius;
     }
 
     static calcRadiusMidsphere(a: Num): Num {
         const radius: Num = a * 0.5 * Math.sqrt(2);
         return radius;
     }
 
     static calcFaceAngles(): Num {
         const faceAngles: Num = Math.PI / 2;
         return faceAngles;
     }
 
     static calcAngleSolidFace(): Num {
         const angle: Num = (2 * Math.PI) / 3;
         return angle;
     }
 
     static calcAngleSolidVertex(): Num {
         const angle: Num = Math.PI / 2;
         return angle;
     }
 
     static calcAngleDihedral(): Num {
         const angle: Num = Math.PI / 2;
         return angle;
     }
 
     static calcAngleSubtended(): Num {
         const angle: Num = Math.acos(1 / 3);
         return angle;
     }
 }
 
 export { Hexahedron };
 