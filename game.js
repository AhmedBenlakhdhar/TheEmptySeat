document.addEventListener('DOMContentLoaded', () => {

    // --- NARRATIVE DATA ---
	const narrativeTree = {
		'1': {
			type: 'Normal',
			narrations: [
				{ text: "It's lunchtime at Brookfield High, and the cafeteria buzzes with students." },
				{ text: "You notice Alice, sitting alone at a corner table, looking anxious." },
				{ text: "Tom and Emma, known for teasing others, are nearby, laughing among themselves." }
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
				{ text: "Alice smiles faintly, relieved by your kindness." },
				{ text: "Emma whispers to Tom, rolling her eyes, clearly annoyed by your support." }
			],
			dialogues: [
				{ character: 'player', text: "Of course, you can join me.", position: 'right' },
				{ character: 'player', text: "Don't worry about them. Sit and relax.", position: 'right' },
				{ character: 'alice', text: "Thanks… that means a lot.", position: 'left' },
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
				{ text: "Alice's cheeks burn; she feels invisible and embarrassed." },
				{ text: "Tom smirks, clearly enjoying the moment." }
			],
			dialogues: [
				{ character: 'alice', text: "Oh… okay.", position: 'left' },
				{ character: 'tom', text: "Finally, nobody cares about you.", position: 'right' },
				{ character: 'emma', text: "Ha! Pathetic.", position: 'right' }
			],
			choices: [
				{ text: "Approach Alice later to offer support", target: '3c' },
				{ text: "Ignore her completely", target: '3d' }
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
		}
	};

    // --- ASSET PRELOADING LOGIC ---
    function preloadAssets() {
        // 1. Start the safety timer IMMEDIATELY. 
        // If anything fails below, this guarantees the game starts in 3 seconds.
        const safetyTimer = setTimeout(() => {
            console.warn("Preloader timed out or crashed. Forcing game start.");
            if (loadingScreen) loadingScreen.style.display = 'none';
        }, 3000);

        try {
            const assets = new Set();
            
            // Add Background
            assets.add('backgrounds/cafeteria.png');

            // Safely Scan Tree
            if (typeof narrativeTree !== 'undefined') {
                Object.keys(narrativeTree).forEach(nodeId => {
                    const node = narrativeTree[nodeId];
                    // Safety check: ensure dialogues exist before looping
                    if (node.dialogues && Array.isArray(node.dialogues)) {
                        node.dialogues.forEach(d => {
                            if (d.character) {
                                assets.add(`images/node${nodeId}/${d.character}.png`);
                            }
                        });
                    }
                    // Outcome check
                    if (node.type === 'Outcome') {
                        assets.add(`images/node${nodeId}/alice.png`);
                    }
                });
            }

            const assetsArray = Array.from(assets);
            let loadedCount = 0;
            const total = assetsArray.length;

            // If no assets found, stop timer and hide immediately
            if (total === 0) {
                clearTimeout(safetyTimer);
                hideLoader();
                return;
            }

            // Load each asset
            assetsArray.forEach(src => {
                const img = new Image();
                
                const handleLoad = () => {
                    loadedCount++;
                    // Update text safely
                    if (loadingText) {
                        const percent = Math.floor((loadedCount / total) * 100);
                        loadingText.textContent = `Loading Assets... ${percent}%`;
                    }

                    if (loadedCount >= total) {
                        clearTimeout(safetyTimer); // All good, cancel failsafe
                        setTimeout(hideLoader, 500);
                    }
                };

                img.onload = handleLoad;
                img.onerror = handleLoad; // Count errors as loaded so we don't get stuck
                img.src = src;
            });

        } catch (error) {
            console.error("Preloader error:", error);
            // The safetyTimer above will handle the cleanup
        }
    }

    function hideLoader() {
        if (!loadingScreen) return;
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }


    function hideLoader() {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }

    // --- GAME STATE ---
    let gameState = {
        currentNodeId: null,
        contentIndex: 0,
        mode: 'narration' 
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

        // Check if the sprite is already displaying this exact image
        // (We check .includes because sprite.src is an absolute URL)
        if (sprite.src.includes(imagePath)) {
            // It's the same character, just make sure they are visible
            sprite.classList.add('active');
            sprite.classList.remove('inactive');
        } else {
            // It's a new character! 
            
            // 1. Ensure the sprite is hidden immediately so the old character doesn't flash
            sprite.classList.remove('active');

            // 2. Define what happens when the new image is ready
            sprite.onload = () => {
                sprite.classList.add('active');
                sprite.classList.remove('inactive');
                sprite.onload = null; // Clean up the listener
            };
            
            // 3. Handle errors (e.g., missing image) so the game doesn't break
            sprite.onerror = () => {
                console.warn(`Failed to load sprite: ${imagePath}`);
                // Show it anyway (as a broken icon) or handle gracefully
                sprite.classList.add('active'); 
                sprite.onload = null;
            };

            // 4. Finally, switch the source. This triggers the load.
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
				gameState.mode = 'choice';
				displayChoices();
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

    // 1. Start Game
    startButton.addEventListener('click', () => {
        playSound(sfxClick);
        // Try playing background music (user interaction required)
        if(bgm) bgm.play().catch(e => console.log("BGM Error", e));
        
        mainMenu.classList.add('hidden');
        setTimeout(() => {
            startGame('1');
        }, 800);
    });

    // 2. Narrative "Next" Button
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

    // 3. Dialogue "Next" Button
    dialogueNextBtn.addEventListener('click', () => {
        playSound(sfxClick);
        gameState.contentIndex++;
        processNodeContent();
    });

    // 4. Restart Button
    restartButton.addEventListener('click', () => {
        playSound(sfxClick);
        outcomeScreen.classList.remove('visible');
        startGame('1');
    });

    // 5. Menu Button
    menuButton.addEventListener('click', () => {
        playSound(sfxClick);
        outcomeScreen.classList.remove('visible');
        mainMenu.classList.remove('hidden');
        hideAllUI();
    });

});