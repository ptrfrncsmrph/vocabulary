const example = require("./vocab")
const assert = require("assert")

const requiredFields = [
  "name",
  "definition",
  "example",
  "description",
  "relevant-links"
]

const validateEntry = entry => {
  // Make sure that the entry contains at least all the required fields
  requiredFields.forEach(field => {
    assert(entry[field], `Missing required field: ${field}`)
  })
  // Check that there are no additional fields (not sure if you want to do that)
  Object.keys(entry).forEach(key => {
    assert(requiredFields.includes(key), `Additional field found: ${key}`)
  })
  console.log(`All tests passing!`)
}

validateEntry(example)
//-> This validates the example from "./vocabulary.json"
// and logs "All tests passing!"

validateEntry({
  "name": "Template Literals",
  "example": "`string text ${expression} string text`",
  "description": "Template literals are enclosed by the back-tick (` `)  (grave accent) character instead of double or single quotes. Template literals can contain placeholders. These are indicated by the dollar sign and curly braces (${expression}).",
  "relevant-links": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals"
})
//-> Throws an error: "Missing required field: definition"

validateEntry({
  "name": "Template Literals",
  "definition": "Template literals are string literals allowing embedded expressions.",
  "example": "`string text ${expression} string text`",
  "description": "Template literals are enclosed by the back-tick (` `)  (grave accent) character instead of double or single quotes. Template literals can contain placeholders. These are indicated by the dollar sign and curly braces (${expression}).",
  "relevant-links": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals",
  "extra-stuff": "Stuff you don't want"
})
//-> Throws an error: "Additional field found: extra-stuff"
