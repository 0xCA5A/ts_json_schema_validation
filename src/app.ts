import Ajv from "ajv"

import { Frog } from './generated/openapi/models';
import * as FrogSchema from "./generated/json-schema/FrogSchema.json"

const ajv = new Ajv()
const frogValidator = ajv.compile<Frog>(FrogSchema)
console.log(FrogSchema)

let frogFrederic: Frog = {
    id: 13,
    name: "frederic",
    tag: "a073c2ca-de53-11ee-a428-1ff4f4b06787",
    color: "light green"
}
console.log("frogFrederic: "  + frogFrederic)
console.log("frogFrederic.name: "  + frogFrederic.name)
console.log("is valid: " + frogValidator(frogFrederic))

let frogFernando: Frog = {
    id: 18,
    name: "fernando",
    color: "green"
}
console.log("frogFernando: "  + frogFernando)
console.log("frogFernando.name: "  + frogFernando.name)
console.log("is valid: " + frogValidator(frogFernando))

let frogFelix = {
    "id": 18,
    "name": "felix"
}
console.log("frogFelix: "  + frogFelix)
console.log("frogFelix.name: "  + frogFelix.name)
console.log("is valid: " + frogValidator(frogFelix))
