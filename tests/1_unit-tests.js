const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');

suite('Unit Tests', () => {

suite("american to British translation",()=>{

	test("Translate Mangoes are my favorite fruit. to British English",(done)=>{
		const text = "Mangoes are my favorite fruit.";
		const output="Mangoes are my favourite fruit.";
		const translator = Translator.americanToBritish(text);
		assert.equal(translator,output);
		done();
	})
	test("I ate yogurt for breakfast.",(done)=>{
		const text = "I ate yogurt for breakfast.";
		const output="I ate yoghurt for breakfast.";
		const translator = Translator.americanToBritish(text);
		assert.equal(translator,output);
		done();
	})
	test("We had a party at my friend's condo.",(done)=>{
		const text = "We had a party at my friend's condo.";
		const output="We had a party at my friend's flat.";
		const translator = Translator.americanToBritish(text);
		assert.equal(translator,output);
		done();
	})
	test("Can you toss this in the trashcan for me?",(done)=>{
		const text = "Can you toss this in the trashcan for me?";
		const output="Can you toss this in the bin for me?";
		const translator = Translator.americanToBritish(text);
		assert.equal(translator,output);
		done();
	})
	test("The parking lot was full.",(done)=>{
		const text = "The parking lot was full.";
		const output="The car park was full.";
		const translator = Translator.americanToBritish(text);
		assert.equal(translator,output);
		done();
	})
	test("Like a high tech Rube Goldberg machine.",(done)=>{
		const text = "Like a high tech Rube Goldberg machine.";
		const output="Like a high tech Heath Robinson device.";
		const translator = Translator.americanToBritish(text);
		assert.equal(translator,output);
		done();
	})
	test("To play hooky means to skip class or work.",(done)=>{
		const text = "To play hooky means to skip class or work.";
		const output="To bunk off means to skip class or work.";
		const translator = Translator.americanToBritish(text);
		assert.equal(translator,output);
		done();
	})
	test("No Mr. Bond, I expect you to die.",(done)=>{
		const text = "No Mr. Bond, I expect you to die.";
		const output="No Mr Bond, I expect you to die.";
		const translator = Translator.americanToBritish(text);
		assert.equal(translator,output);
		done();
	})
	test("Dr. Grosh will see you now.",(done)=>{
		const text = "Dr. Grosh will see you now.";
		const output="Dr Grosh will see you now.";
		const translator = Translator.americanToBritish(text);
		assert.equal(translator,output);
		done();
	})
	test("Lunch is at 12:15 today.",(done)=>{
		const text = "Lunch is at 12:15 today.";
		const output="Lunch is at 12.15 today.";
		const translator = Translator.americanToBritish(text);
		assert.equal(translator,output);
		done();
	})
	

})
suite("british to american translation",()=>{

	test("We watched the footie match for a while.",(done)=>{
		const text = "We watched the footie match for a while.";
		const output="We watched the soccer match for a while.";
		const translator = Translator.britishToAmerican(text);
		assert.equal(translator,output);
		done();
	})

	test("Paracetamol takes up to an hour to work.",(done)=>{
		const text = "Paracetamol takes up to an hour to work.";
		const output="Tylenol takes up to an hour to work.";
		const translator = Translator.britishToAmerican(text);
		assert.equal(translator,output);
		done();
	})

	test("First, caramelise the onions.",(done)=>{
		const text = "First, caramelise the onions.";
		const output="First, caramelize the onions.";
		const translator = Translator.britishToAmerican(text);
		assert.equal(translator,output);
		done();
	})

	test("I spent the bank holiday at the funfair.",(done)=>{
		const text = "I spent the bank holiday at the funfair.";
		const output="I spent the public holiday at the carnival.";
		const translator = Translator.britishToAmerican(text);
		assert.equal(translator,output);
		done();
	})

	test("I had a bicky then went to the chippy.",(done)=>{
		const text = "I had a bicky then went to the chippy.";
		const output="I had a cookie then went to the fish-and-chip shop.";
		const translator = Translator.britishToAmerican(text);
		assert.equal(translator,output);
		done();
	})

	test("I've just got bits and bobs in my bum bag.",(done)=>{
		const text = "I've just got bits and bobs in my bum bag.";
		const output="I've just got odds and ends in my fanny pack.";
		const translator = Translator.britishToAmerican(text);
		assert.equal(translator,output);
		done();
	})

	test("The car boot sale at Boxted Airfield was called off.",(done)=>{
		const text = "The car boot sale at Boxted Airfield was called off.";
		const output="The swap meet at Boxted Airfield was called off.";
		const translator = Translator.britishToAmerican(text);
		assert.equal(translator,output);
		done();
	})

	test("Have you met Mrs Kalyani?",(done)=>{
		const text = "Have you met Mrs Kalyani?";
		const output="Have you met Mrs. Kalyani?";
		const translator = Translator.britishToAmerican(text);
		assert.equal(translator,output);
		done();
	})

	test("Prof Joyner of King's College, London.",(done)=>{
		const text = "Prof Joyner of King's College, London.";
		const output="Prof. Joyner of King's College, London.";
		const translator = Translator.britishToAmerican(text);
		assert.equal(translator,output);
		done();
	})

	test("Tea time is usually around 4 or 4.30.",(done)=>{
		const text = "Tea time is usually around 4 or 4.30.";
		const output="Tea time is usually around 4 or 4:30.";
		const translator = Translator.britishToAmerican(text);
		assert.equal(translator,output);
		done();
	})

})

suite("highlight translation",()=>{

test("Mangoes are my favorite fruit.",(done)=>{
		const text = "Mangoes are my favorite fruit.";
		const output='Mangoes are my <span class="highlight">favourite</span> fruit.';
		const translator = Translator.americanToBritish(text,true);
		assert.equal(translator,output);
		done();
	})

test("I ate yogurt for breakfast.",(done)=>{
		const text = "I ate yogurt for breakfast.";
		const output='I ate <span class="highlight">yoghurt</span> for breakfast.';
		const translator = Translator.americanToBritish(text,true);
		assert.equal(translator,output);
		done();
	})

test("We watched the footie match for a while.",(done)=>{
		const text = "We watched the footie match for a while.";
		const output='We watched the <span class="highlight">soccer</span> match for a while.';
		const translator = Translator.britishToAmerican(text,true);
		assert.equal(translator,output);
		done();
	})

test("Paracetamol takes up to an hour to work.",(done)=>{
		const text = "Paracetamol takes up to an hour to work.";
		const output='<span class="highlight">Tylenol</span> takes up to an hour to work.';
		const translator = Translator.britishToAmerican(text,true);
		assert.equal(translator,output);
		done();
	})	
})

});
