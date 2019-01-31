# vocabulary
A place to share vocabulary definitions and learning resources.

I would like to get a sheet of vocabulary words and definitions together to look back on and help everyone study. I feel that as we start going through the interview process, being able to explain concepts in a succinct manner, using the proper terminology will help us stand out from other candidates. 

If you are interested in contributing please just submit a PR and I will merge into master once I have verified that the format is correct so we have some uniformity. I will also try to format the items in a document that is more readable for study as well.

Please submit your Pull Requests to the `vocab.json` file.

Your submission should be in this format.
```
vocabulary word {
definition: "",
example: "",
comments: "",
relevant-links: "",
};
```
// EXAMPLE
```
string {
definition: "Template literals are string literals allowing embedded expressions.",
example: "`string text ${expression} string text`",
description: "Template literals are enclosed by the back-tick (` `)  (grave accent) character instead of double or single quotes. Template literals can contain placeholders. These are indicated by the dollar sign and curly braces (${expression}).",
relevant-links: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals",
};
```
