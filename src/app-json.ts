import Ajv from "ajv"

import { Frog } from './generated/openapi/models';
import * as FrogSchema from "./generated/json-schema/FrogSchema.json"

const ajv = new Ajv()
const frogValidator = ajv.compile<Frog>(FrogSchema)
console.log(FrogSchema)


// Valid, mandatory and optional fields
let frogFrederic = {
    "id": 13,
    "name": "frederic",
    "tag": "a073c2ca-de53-11ee-a428-1ff4f4b06787",
    "color": "light green"
}
console.log("\nfrogFrederic: "  + frogFrederic)
console.log("frogFrederic.name: "  + frogFrederic.name)
console.log("is valid: " + frogValidator(frogFrederic))


// Valid, mandatory fields
let frogBernardo = {
    "id": 18,
    "name": "bernardo",
    "color": "green"
}
console.log("\nfrogBernardo: "  + frogBernardo)
console.log("frogBernardo.name: "  + frogBernardo.name)
console.log("is valid: " + frogValidator(frogBernardo))


// Invalid, missing mandatory field
let frogFernando = {
    "id": 18,
    "name": "fernando",
}
console.log("\nfrogFernando: "  + frogFernando)
console.log("frogFernando.name: "  + frogFernando.name)
console.log("is valid: " + frogValidator(frogFernando))


// Invalid, mandatory fields plus extra fields
let frogFelicitas = {
    "id": 18,
    "name": "felicitas",
    "color": "green",
    "friends": ["fernando", "frederic"]
}
console.log("\nfrogFelicitas: "  + frogFelicitas)
console.log("frogFelicitas.name: "  + frogFelicitas.name)
// FIXME: False if "additionalProperties": false is added to the frog schema manually. This
// The generator is called with --additional-properties false, this should work... ?
console.log("is valid: " + frogValidator(frogFelicitas))


// Invalid, one field with invalid type
let frogHenry = {
    "id": "23",
    "name": "henry",
    "color": "green"
}
console.log("\nfrogHenry: "  + frogHenry)
console.log("frogHenry.name: "  + frogHenry.name)
console.log("is valid: " + frogValidator(frogHenry))
