document.addEventListener('DOMContentLoaded', () => {

    // --- NARRATIVE DATA ---
    const narrativeTree = {
        '1': {
            type: 'Normal',
            narrations: [
                { text: "It's lunchtime at Brookfield High, and the cafeteria buzzes with students." },
                { text: "You notice Alice standing awkwardly with her tray, scanning the room for a place to sit." },
                { text: "Tom and Emma are nearby, watching her with amused smirks." }
            ],
            dialogues: [
                { character: 'alice', text: "Do you… mind if I sit here?", position: 'left' }
            ],
            choices: [
                { text: "Welcome Alice warmly and offer to chat", target: '2a' },
                { text: "Ignore Alice and focus on your lunch", target: '2b' }
            ]
        },
        '2a': {
            type: 'Normal',
            narrations: [
                { text: "You nod and gesture to the empty seat across from you." },
                { text: "Alice lets out a breath she was holding and sets her tray down." },
                { text: "Emma whispers to Tom, rolling her eyes at your gesture." }
            ],
            dialogues: [
                { character: 'player', text: "Go ahead. Don't worry about them.", position: 'right' },
                { character: 'alice', text: "Thanks… I really appreciate it.", position: 'left' },
                { character: 'emma', text: "Why bother helping her? So pathetic.", position: 'right' }
            ],
            choices: [
                { text: "Stand up to Tom and defend Alice", target: '3a' },
                { text: "Stay silent and let it pass", target: '3b' }
            ]
        },
        '2b': {
            type: 'Normal',
            narrations: [
                { text: "You look down at your food, pretending not to hear her." },
                { text: "Alice stands frozen for a moment, her face flushing with embarrassment." },
                { text: "Tom smirks, clearly enjoying the rejection." }
            ],
            dialogues: [
                { character: 'alice', text: "Oh… okay.", position: 'left' },
                { character: 'tom', text: "Finally, nobody cares about you.", position: 'right' },
                { character: 'emma', text: "Ha! Pathetic.", position: 'right' }
            ],
            choices: [
                { text: "Feel guilty and approach Alice later", target: '3c' },
                { text: "Ignore her completely", target: '3d' },
                { text: "Laugh and join the teasing (Verbal)", target: '3e' },
                { text: "Knock her tray over (Physical)", target: '3f' }
            ]
        },
        '3a': {
            type: 'Normal',
            narrations: [
                { text: "Tom looks surprised as you stand up, creating a small pause in the cafeteria chatter." },
                { text: "Alice's eyes widen with gratitude, feeling a spark of hope." }
            ],
            dialogues: [
                { character: 'player', text: "Leave her alone, Tom. That’s enough.", position: 'right' },
                { character: 'tom', text: "Oh really? You think you can stop me?", position: 'right' },
                { character: 'alice', text: "Th-thank you…", position: 'left' }
            ],
            choices: [
                { text: "Invite Alice to join an after-school club", target: '4a' },
                { text: "Finish lunch and walk away", target: '4b' }
            ]
        },
        '3b': {
            type: 'Normal',
            narrations: [
                { text: "Alice hugs her lunch tray, feeling completely alone." },
                { text: "The teasing continues, and the room feels heavier for her." }
            ],
            dialogues: [
                { character: 'tom', text: "Looks like she’s invisible.", position: 'right' },
                { character: 'emma', text: "Guess nobody cares.", position: 'right' },
                { character: 'alice', text: "Why… why me?", position: 'left' }
            ],
            choices: [
                { text: "Offer comfort later", target: '4c' },
                { text: "Ignore everything", target: '4d' }
            ]
        },
        '3c': {
            type: 'Normal',
            narrations: [
                { text: "Alice looks conflicted, unsure if she can trust anyone after being ignored." }
            ],
            dialogues: [
                { character: 'player', text: "Hey, you okay?", position: 'right' },
                { character: 'alice', text: "I… I guess…", position: 'left' },
                { character: 'emma', text: "Ignore her, she’s pathetic.", position: 'right' }
            ],
            choices: [
                { text: "Encourage her gently", target: '4e' },
                { text: "Walk away, leaving her alone", target: '4d' }
            ]
        },
        '3d': {
            type: 'Normal',
            narrations: [
                { text: "Alice feels abandoned, hopeless, and overwhelmed." }
            ],
            dialogues: [
                { character: 'tom', text: "Good, nobody to save her.", position: 'right' },
                { character: 'alice', text: "…", position: 'left' },
                { character: 'emma', text: "Pathetic.", position: 'right' }
            ],
            choices: [
                { text: "Try a late intervention", target: '4f' },
                { text: "Leave her to face it alone", target: '4g' }
            ]
        },
        '3e': {
            type: 'Normal',
            narrations: [
                { text: "You decide to fit in with the cool crowd, adding your voice to the mockery." }
            ],
            dialogues: [
                { character: 'player', text: "Yeah, seriously. Who sits alone like that?", position: 'right' },
                { character: 'alice', text: "I...", position: 'left' },
                { character: 'tom', text: "Nice one! She needed to hear that.", position: 'right' },
                { character: 'emma', text: "Finally, you have a sense of humor.", position: 'right' }
            ],
            next: '4h' // Transitions directly to outcome
        },
        '3f': {
            type: 'Normal',
            narrations: [
                { text: "You walk past Alice and deliberately shove her tray, sending food flying everywhere." },
                { text: "The cafeteria goes silent. Alice stands up, trembling and humiliated." }
            ],
            dialogues: [
                { character: 'player', text: "Oops. My bad.", position: 'right' },
                { character: 'tom', text: "Classic! Look at her!", position: 'right' },
                { character: 'alice', text: "...", position: 'left' }
            ],
            next: '4i' // Transitions directly to outcome
        },
        '4a': { 
            type: 'Outcome', 
            title: 'Alice Finds a Friend', 
            summary: 'Your support helps Alice gain confidence. She joins school clubs and slowly overcomes bullying, building lasting friendships.', 
            moral: 'Moral: Steady support empowers others and changes lives.', 
            advice: 'Advice: Consistently offer help; small gestures accumulate into meaningful change.' 
        },
        '4b': { 
            type: 'Outcome', 
            title: 'Temporary Comfort', 
            summary: 'Alice feels slightly reassured, but without continued support, she still faces bullying and struggles alone.', 
            moral: 'Moral: One-time help is good, but sustained care is stronger.', 
            advice: 'Advice: Follow through; support matters most when continuous.' 
        },
        '4c': { 
            type: 'Outcome', 
            title: 'Delayed Support', 
            summary: 'Alice slowly begins to trust you. Bullying continues, but your encouragement gives her some coping strategies.', 
            moral: 'Moral: Better late than never, but early support is more effective.', 
            advice: 'Advice: Even if hesitant, offering help later still has a positive impact.' 
        },
        '4d': { 
            type: 'Outcome', 
            title: 'Neglected', 
            summary: 'Alice feels abandoned and vulnerable. Bullying escalates, causing long-term emotional distress.', 
            moral: 'Moral: Ignoring problems can worsen suffering.', 
            advice: 'Advice: Inaction can have serious consequences—your presence matters.' 
        },
        '4e': { 
            type: 'Outcome', 
            title: 'Small Encouragement', 
            summary: 'Alice gains minor confidence, but without direct intervention, the bullying continues.', 
            moral: 'Moral: Encouragement is a start, but sometimes action is needed.', 
            advice: 'Advice: Support is valuable, but don’t underestimate direct help.' 
        },
        '4f': { 
            type: 'Outcome', 
            title: 'Late Intervention', 
            summary: 'Your late help assists Alice partially, but the prolonged bullying has caused lasting effects.', 
            moral: 'Moral: Timing matters; early action prevents deeper harm.', 
            advice: 'Advice: Intervene promptly to minimize suffering.' 
        },
        '4g': { 
            type: 'Outcome', 
            title: 'Isolation Deepens', 
            summary: 'Alice feels utterly alone. Bullying intensifies, and her emotional state worsens significantly.', 
            moral: 'Moral: Absence of help can be as damaging as the cruelty itself.', 
            advice: 'Advice: Your engagement is critical; don’t underestimate the impact of ignoring someone in need.' 
        },
        '4h': { 
            type: 'Outcome', 
            title: 'The Accomplice', 
            summary: 'You gained Tom’s approval, but Alice is now terrified of coming to school. You sacrificed kindness to fit in.', 
            moral: 'Moral: Words leave invisible scars that last longer than bruises.', 
            advice: 'Advice: Don’t trade your integrity for cheap popularity.' 
        },
        '4i': { 
            type: 'Outcome', 
            title: 'The Aggressor', 
            summary: 'Alice is traumatized and likely won\'t return to this school. You may face suspension. You became exactly what she feared.', 
            moral: 'Moral: Physical aggression is a cycle of violence that destroys trust and safety.', 
            advice: 'Advice: Strength is used to protect others, not to humiliate them.' 
        }
    };

    const characterNames = { alice: 'Alice', player: 'You', tom: 'Tom', emma: 'Emma' };

    // --- DOM ELEMENTS ---
    const mainMenu = document.getElementById('main-menu');
    const startButton = document.getElementById('start-game-button');
    const bgm = document.getElementById('bgm-music');
    const sfxClick = document.getElementById('sfx-click');

    const charLeft = document.getElementById('char-left');
    const charRight = document.getElementById('char-right');
    const dialogueBox = document.getElementById('dialogue-box');
    const charName = document.getElementById('char-name');
    const dialogueText = document.getElementById('dialogue-text');
    const dialogueNextBtn = document.getElementById('dialogue-next-button');
    
    const narrationBox = document.getElementById('narration-box');
    const narrationText = document.getElementById('narration-text');
    const nextButton = document.getElementById('next-button');
    
    const choicesBox = document.getElementById('choices-box');
    const outcomeScreen = document.getElementById('outcome-screen');
    const restartButton = document.getElementById('restart-button');
    const menuButton = document.getElementById('menu-button');

    // --- GAME STATE ---
    let gameState = {
        currentNodeId: null,
        contentIndex: 0,
        mode: 'narration' 
    };

    // --- FUNCTIONS ---

    function playSound(audioElement) {
        if(audioElement) {
            audioElement.currentTime = 0;
            audioElement.play().catch(e => console.log("Audio play prevented:", e));
        }
    }

    function hideAllUI() {
        narrationBox.classList.remove('visible');
        dialogueBox.classList.remove('visible');
        choicesBox.classList.remove('visible');
        outcomeScreen.classList.remove('visible');
    }

    function hideAllCharacters() {
        charLeft.classList.remove('active', 'inactive');
        charRight.classList.remove('active', 'inactive');
    }

    function showCharacter(characterId, position) {
        const sprite = position === 'left' ? charLeft : charRight;
        const imagePath = `images/node${gameState.currentNodeId}/${characterId}.png`;

        if (sprite.src.includes(imagePath)) {
            sprite.classList.add('active');
            sprite.classList.remove('inactive');
        } else {
            sprite.classList.remove('active');
            
            sprite.onload = () => {
                sprite.classList.add('active');
                sprite.classList.remove('inactive');
                sprite.onload = null;
            };
            
            sprite.onerror = () => {
                console.warn(`Failed to load: ${imagePath}`);
                sprite.classList.add('active');
                sprite.onload = null;
            };

            sprite.src = imagePath;
        }
    }

    function typeWriter(text, element, callback) {
        let i = 0;
        element.innerHTML = "";
        nextButton.disabled = true; 

        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, 25); 
            } else {
                nextButton.disabled = false;
                if (callback) callback();
            }
        }
        type();
    }

    function startGame(nodeId) {
        gameState.currentNodeId = nodeId;
        gameState.contentIndex = 0;
        const node = narrativeTree[nodeId];

        if (node.type === 'Outcome' && node.target) {
            startGame(node.target);
            return;
        }

        hideAllUI();

        if (node.type === 'Outcome') {
            gameState.mode = 'outcome_summary';
            narrationBox.classList.add('visible');
            hideAllCharacters();
            showCharacter('alice', 'left'); 
            typeWriter(node.summary, narrationText);
        } else {
            gameState.mode = (node.narrations && node.narrations.length > 0) ? 'narration' : 'dialogue';
            processNodeContent();
        }
    }

    function processNodeContent() {
        const node = narrativeTree[gameState.currentNodeId];

        if (gameState.mode === 'narration') {
            hideAllCharacters();
            narrationBox.classList.add('visible');
            dialogueBox.classList.remove('visible');

            if (gameState.contentIndex < node.narrations.length) {
                typeWriter(node.narrations[gameState.contentIndex].text, narrationText);
                gameState.contentIndex++;
            } else {
                gameState.mode = 'dialogue';
                gameState.contentIndex = 0;
                processNodeContent();
            }

        } else if (gameState.mode === 'dialogue') {
            narrationBox.classList.remove('visible');
            
            if (node.dialogues && gameState.contentIndex < node.dialogues.length) {
                dialogueBox.classList.add('visible');
                const dia = node.dialogues[gameState.contentIndex];
                
                hideAllCharacters(); 
                showCharacter(dia.character, dia.position);

                dialogueBox.className = 'ui-box visible'; 
                dialogueBox.classList.add(`dialogue-${dia.character}`);
                dialogueBox.classList.add(`pos-${dia.position}`);

                charName.textContent = characterNames[dia.character];

                const newText = dia.text;
                dialogueText.innerHTML = "";
                dialogueNextBtn.style.display = 'none';

                let i = 0;
                function typeDia() {
                    if(i < newText.length) {
                        dialogueText.innerHTML += newText.charAt(i);
                        i++;
                        setTimeout(typeDia, 20); 
                    } else {
                        dialogueNextBtn.style.display = 'block';
                    }
                }
                typeDia();

            } else {
                // Dialogue finished, check for choices or auto-transition
                if (node.choices) {
                    gameState.mode = 'choice';
                    displayChoices();
                } else if (node.next) {
                    startGame(node.next);
                }
            }
        }
    }

    function displayChoices() {
        const node = narrativeTree[gameState.currentNodeId];
        hideAllUI();
        hideAllCharacters(); 
        
        choicesBox.innerHTML = "";
        node.choices.forEach(choice => {
            const btn = document.createElement('button');
            btn.textContent = choice.text;
            btn.onclick = () => {
                playSound(sfxClick);
                startGame(choice.target);
            };
            choicesBox.appendChild(btn);
        });
        choicesBox.classList.add('visible');
    }

    function showFinalOutcomeBox() {
        const node = narrativeTree[gameState.currentNodeId];
        hideAllUI();
        hideAllCharacters(); 
        document.getElementById('outcome-title').textContent = node.title;
        document.getElementById('outcome-moral').textContent = node.moral;
        document.getElementById('outcome-advice').textContent = node.advice;
        outcomeScreen.classList.add('visible');
    }

    // --- EVENT LISTENERS ---

    startButton.addEventListener('click', () => {
        playSound(sfxClick);
        if(bgm) bgm.play().catch(e => console.log("BGM Error", e));
        
        mainMenu.classList.add('hidden');
        setTimeout(() => {
            startGame('1');
        }, 800);
    });

    nextButton.addEventListener('click', () => {
        playSound(sfxClick);
        if (gameState.mode === 'outcome_summary') {
            showFinalOutcomeBox();
        } else if (gameState.mode === 'narration') {
            const node = narrativeTree[gameState.currentNodeId];
            if (gameState.contentIndex < node.narrations.length) {
                typeWriter(node.narrations[gameState.contentIndex].text, narrationText);
                gameState.contentIndex++;
            } else {
                gameState.mode = 'dialogue';
                gameState.contentIndex = 0;
                processNodeContent();
            }
        }
    });

    dialogueNextBtn.addEventListener('click', () => {
        playSound(sfxClick);
        gameState.contentIndex++;
        processNodeContent();
    });

    restartButton.addEventListener('click', () => {
        playSound(sfxClick);
        outcomeScreen.classList.remove('visible');
        startGame('1');
    });

    menuButton.addEventListener('click', () => {
        playSound(sfxClick);
        outcomeScreen.classList.remove('visible');
        mainMenu.classList.remove('hidden');
        hideAllUI();
    });

});