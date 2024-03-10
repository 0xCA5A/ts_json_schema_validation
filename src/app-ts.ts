import { Frog } from './generated/openapi/models';


// Valid, mandatory and optional fields
let frogFrederic: Frog = {
    id: 13,
    name: "frederic",
    tag: "a073c2ca-de53-11ee-a428-1ff4f4b06787",
    color: "light green"
}
console.log("\nfrogFrederic: "  + frogFrederic)
console.log("frogFrederic.name: "  + frogFrederic.name)


// Valid, mandatory fields
let frogBernardo: Frog = {
    id: 18,
    name: "bernardo",
    color: "green"
}
console.log("\nfrogBernardo: "  + frogBernardo)
console.log("frogBernardo.name: "  + frogBernardo.name)


// // Invalid, missing mandatory field
// let frogFernando: Frog = {
//     id: 18,
//     name: "fernando",
// }
// console.log("\nfrogFernando: "  + frogFernando)
// console.log("frogFernando.name: "  + frogFernando.name)
//
// src/app-ts.ts:25:5 - error TS2741: Property 'color' is missing in type '{ id: number; name: string; }' but required in type 'Frog'.
//
// 25 let frogFernando: Frog = {
//        ~~~~~~~~~~~~
//
//   src/generated/openapi/models/Frog.ts:45:5
//     45     color: string;
//            ~~~~~
//     'color' is declared here.


// // Invalid, mandatory fields plus extra fields
// let frogFelicitas: Frog = {
//     id: 18,
//     name: "felicitas",
//     color: "green",
//     friends: ["fernando", "frederic"]
// }
// console.log("\frogFelicitas: "  + frogFelicitas)
// console.log("frogFelicitas.name: "  + frogFelicitas.name)
//
// TSError: ⨯ Unable to compile TypeScript:
// src/app.ts:37:5 - error TS2353: Object literal may only specify known properties, and 'friends' does not exist in type 'Frog'.
//
// 37     friends: ["fernando", "frederic"]
//        ~~~~~~~
//


// // Invalid, one field with invalid type
// let frogHenry: Frog = {
//     id: "23",
//     name: "henry",
//     color: "green"
// }
// console.log("\frogHenry: "  + frogHenry)
// console.log("frogHenry.name: "  + frogHenry.name)
//
// src/app-ts.ts:63:5 - error TS2322: Type 'string' is not assignable to type 'number'.
//
// 63     id: "23",
//        ~~
//
//   src/generated/openapi/models/Frog.ts:27:5
//     27     id: number;
//            ~~
//     The expected type comes from property 'id' which is declared here on type 'Frog'
//
