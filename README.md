# [Quality Assurance Projects - American / British Translator](https://www.freecodecamp.org/learn/quality-assurance/quality-assurance-projects/american-british-translator)







## This project part of free code camp quality assurance module, i learned mocha-chai for testing.  
### live demo [here](https://american-to-britishtranslatorFCCproject.karanmj.repl.co)
  
 
 <br>
 <details>
    <summary>User Stories:</summary>

- All logic can go into /components/translator.js
- Complete the /api/translate route in /routes/api.js
- Create all of the unit/functional tests in tests/1_unit-tests.js and tests/2_functional-tests.js
- See the JavaScript files in /components for the different spelling and terms your application should translate
- To run the tests on Replit, set NODE_ENV to test without quotes in the .env file
- To run the tests in the console, use the command npm run test. To open the Replit console, press Ctrl+Shift+P (Cmd if on a Mac) and type "open shell"
- Write the following tests in tests/1_unit-tests.js:
 
- Translate Mangoes are my favorite fruit. to British English
- Translate I ate yogurt for breakfast. to British English
- Translate We had a party at my friend's condo. to British English
- Translate Can you toss this in the trashcan for me? to British English
- Translate The parking lot was full. to British English
- Translate Like a high tech Rube Goldberg machine. to British English
- Translate To play hooky means to skip class or work. to British English
- Translate No Mr. Bond, I expect you to die. to British English
- Translate Dr. Grosh will see you now. to British English
- Translate Lunch is at 12:15 today. to British English
- Translate We watched the footie match for a while. to American English
- Translate Paracetamol takes up to an hour to work. to American English
- Translate First, caramelise the onions. to American English
- Translate I spent the bank holiday at the funfair. to American English
- Translate I had a bicky then went to the chippy. to American English
- Translate I've just got bits and bobs in my bum bag. to American English
- Translate The car boot sale at Boxted Airfield was called off. to American English
- Translate Have you met Mrs Kalyani? to American English
- Translate Prof Joyner of King's College, London. to American English
- Translate Tea time is usually around 4 or 4.30. to American English
- Highlight translation in Mangoes are my favorite fruit.
- Highlight translation in I ate yogurt for breakfast.
- Highlight translation in We watched the footie match for a while.
- Highlight translation in Paracetamol takes up to an hour to work.
- Write the following tests in tests/2_functional-tests.js:

- Translation with text and locale fields: POST request to /api/translate
- Translation with text and invalid locale field: POST request to /api/translate
- Translation with missing text field: POST request to /api/translate
- Translation with missing locale field: POST request to /api/translate
- Translation with empty text: POST request to /api/translate
- Translation with text that needs no translation: POST request to /api/translate
</details>
 <br>

# Technology used to build this project

![](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
<!-- ![](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white) -->



## 🛠️ Installation Steps

1. Clone the repository

```bash
git clone https://github.com/KMJ-007/american-to-british_translator_FCC_project.git
```

2. Change the working directory

```bash
cd american-to-british_translator_FCC_project.
```

3. Install dependencies

```bash
npm install
```

4. Create `.env` file in root and add your variables

5. Run the app

```bash
npm run dev
```

You are all set! Open [localhost:3000](http://localhost:3000/) to see the app.


