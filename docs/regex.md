---
sidebar_position: 3
---

# Regular Expressions

## Quantifiers

| Symbol  | Description  |
| ------- | ------------ |
| \*      | 0 or more    |
| \{5\}   | Exactly 5    |
| +       | 1 or more    |
| \{5,\}  | 5 or more    |
| ?       | 0 or 1       |
| \{4,7\} | 4, 5, 6 or 5 |

## Groups and Ranges

| Symbol | Description                  |
| ------ | ---------------------------- |
| .      | Any character except newline |
| ( )    | Group                        |
| [ ]    | Range                        |
| [a-z]  | Lowercase letter             |
| [A-Z]  | Uppercase letter             |
| [0-9]  | Digit                        |
| [^ ]   | Not                          |
| [ABC]  | A, B or C                    |
| [^ABC] | Not A, B nor C               |
| (?: )  | Non-capturing group          |

## Pattern Modifiers

| Symbol | Description      |
| ------ | ---------------- |
| g      | Global search    |
| i      | Case-insensitive |
| m      | Multi-line       |
| s      | Single-line      |

## Anchors

| Symbol | Description                               |
| ------ | ----------------------------------------- |
| ^      | Start of line                             |
| $      | End of line                               |
| \b     | Word boundary                             |
| \B     | Not word boundary                         |
| \A     | Start of string                           |
| \Z     | End of string                             |
| \z     | End of string, except when newline at end |
| \<     | Start of word                             |
| \>     | End of word                               |

## Character Classes

| Symbol | Description                  |
| ------ | ---------------------------- |
| .      | Any character except newline |
| \d     | Digit                        |
| \D     | Not digit                    |
| \w     | Word                         |
| \W     | Not word                     |
| \s     | Whitespace                   |
| \S     | Not whitespace               |
| \x     | Hexadecimal digit            |
| \O     | Octal digit                  |
| \c     | Control character            |

## Special Characters

| Symbol | Description       |
| ------ | ----------------- |
| \      | Escape            |
| \n     | Newline           |
| \r     | Carriage return   |
| \t     | Tab               |
| \v     | Vertical tab      |
| \f     | Form feed         |
| \xxx   | Octal character   |
| \xhh   | Hex character     |
| \uhhhh | Unicode character |
