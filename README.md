
# Catalan Number Calculator in JavaScript, Python, and Java

This project implements a function to compute **Catalan numbers**, which count the number of **well-formed parentheses combinations**.

## 🤔 What Are Well-Formed Parentheses?

Valid arrangements of parentheses where:
- Every `(` has a corresponding `)`
- All pairs are correctly nested

### Examples:
- `n = 1`: `()`
- `n = 2`: `()()`, `(())`
- `n = 3`: `((()))`, `(()())`, `(())()`, `()(())`, `()()()`

This is a classic problem often solved using **Catalan numbers**.

---

## 📘 Catalan Number Formula

\[
C(n) = \frac{1}{n+1} \binom{2n}{n}
\]

---

## 📂 Project Structure

countParenthesis/
│
├── js/ # JavaScript implementation & tests
├── python/ # Python implementation & tests
├── java/ # Java implementation & tests
└── README.md