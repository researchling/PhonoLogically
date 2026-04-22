# PhonoLogically
## *Think like a linguist, play like a pro.*

**Version 1.0.0**


## Overview

PhonoLogically is a Wordle-inspired (Wardl, 2021) browser-based word-guessing game built for learners of the International Phonetic Alphabet (IPA). Players have 6 attempts to guess one English word by entering IPA symbols instead of standard orthography. IPA transcriptions are based on Received Pronunciation and General American standards, cross-referenced with standard pronunciation dictionaries (Wells, 2008; Jones, 2011).

The current edition is designed for students of the *English Phonetics and Phonology courses* at the University of Bamberg which is why the word list features 119 challenging words they are required to learn. 


## How to Use

1. Download the entire `PhonoLogically` folder from this repository.
2. Open `index.html` in a web browser.
3. That's it! /trænˈskraɪb/ & have fun!


## Core Features

### Basic Gameplay Mechanics
**6-attempt guessing game** following Wordle (Wardle 2021) conventions with **colour-coded feedback**:
   - 🟩 Green: Correct phoneme in correct position
   - 🟨 Yellow: Correct phoneme in wrong position
   - ⬛ Grey: Phoneme not in target word
- **High contrast mode**: Alternative colour scheme using blue/orange instead of green/yellow for improved accessibility
- **Statistics**: Played, won, wins by attempt

### Added Gameplay Mechanics
- **Enhanced colour-coded feedback**:
   - Individual components of diphthongs, long vowels, and affricates (e.g., 'o' or 'ʊ' in 'oʊ') receive semi-transparent colour feedback when the phoneme combination is in the target word
   - on-screen keyboard keys dynamically colour-coded based on phoneme status and variety
- **Enhanced statistics section**:
   - additional streak count (*current* and *best*)
- **Dynamic word length**: Game board adjusts to the phonemic length of each target word
- **Automatic phoneme combination**: Characters merge intelligently as you type (long vowels, diphthongs, affricates)
- **Smart overflow handling**: When all tiles are filled, combining characters can still merge with the last phoneme to form long vowels, diphthongs, or affricates
- **Variant sensitivity**: Multiple variants (e.g., "decline": /dɪˈklaɪn/ or /dəˈklaɪn/) are accepted as long as they have the same number of phonemes
- **Modes**:
   - **Adaptable to variety**
     - **RP**: Received Pronunciation
     - **GA**: General American
   - **Adaptable to multiple keyboards**
     - **DE**: QWERTZ
     - **UK**: QWERTY
     - **FR**: AZERTY
   - **Adaptable difficulty**
     - **Easy Mode**: Accepts any valid phoneme combination of correct length
     - **Difficult Mode**: Only accepts real words from the curated word list
- **Background**: Option to add individual backgrounds by including photos in the assets/img folder and commenting in the respective code segments
- **Support**
   - **Rules section**: Explains the basic game principle using example tiles and includes further relevant notes
   - **Phoneme Inventory section**: Offers example words with transcriptions for every phoneme (RP and GA specific)
   - **Tip button**: Reveals first phoneme of the transcription
- **Solution reveal**: IPA transcriptions with stress marks and standard orthography are shown at the end of the game
- **Performance-based feedback**: Win messages vary depending on success and attempt count
- **Anywhere, anytime**: Can be played offline and unlimited times


## Educational Value

**Target Audience**: English linguistics students, phonetics and phonology enthusiasts, and anyone studying the IPA or the ambiguous grapheme-phoneme correspondence of English

**Learning Objectives**:
- Reinforce IPA symbol recognition and recall
- Practice the transcription of specific difficult to pronounce words
- Develop awareness of pronunciation variants and differences in the phoneme inventories of RP and GA
- Implicitly learn phonotactic rules of English

## Create Your Own PhonoLogically
If you would like to adjust this game for your own purposes, you can add new words as described below. In case your ideas are more complex, you can contact me and I would be delighted to create a version adapted to your needs.

Edit `assets/js/words.js` and add entries to the `WORDS` array:

```javascript
{ ipa: 'ˈækʃən', ortho: 'action' },                                     // transcription and orthographic representation                   
{ rp: 'ænəˈlɪtɪk', ga: 'ænəˈlɪt̬ɪk', ortho: 'analytic' },                // with different RP and GA variants
{ ipa: ['vɪˈveɪʃəs', 'vaɪˈveɪʃəs'], ortho: 'vivacious' },               // multiple variants
```

## Future Endeavors
- check entries against an enormous, yet to be compiled list of correct English transcriptions in order to add an intermediary level of difficulty
- include sound samples for the keyboard keys so that sounds and symbols can be perceived and learned together (if you are a native speaker and would like to lend your voice to this game, please feel free to contact me)
- another potential feature supporting the distinctions between varieties could be to introduce an additional coding system (e.g., through shading): it could indicate symbols that are not possible (e.g., ɝː in RP)
- calculate the ideal number of rows depending on word length and number of possible phonemes to adapt the attempts adequately, i.e. a dynamic attempt design instead of always 6 attempts

---

## Acknowledgments

This project benefited from contributions and support from:

- **L.M.** - Technical infrastructure and web hosting support
- **J.H.** - Critical feedback and improvements to the code
- **L.P.** - Naming decision, beta testing, and critical feedback on user experience design
- **D.W.** - Critical feedback on user experience design

Game mechanics inspired by Wordle by Josh Wardle (2021).

Many thanks to Katharine W. for kindly lending her voice to this project.

Special thanks to the Chair of English Linguistics at the University of Bamberg for the curated word list which is part of the curriculum for the English Phonetics and Phonology courses.

---

## License

[![CC BY-NC-SA 4.0](https://licensebuttons.net/l/by-nc-sa/4.0/88x31.png)](https://creativecommons.org/licenses/by-nc-sa/4.0/)

This work is licensed under a [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License](https://creativecommons.org/licenses/by-nc-sa/4.0/).

**Copyright © 2026 Waitzmann**

You are free to share and adapt this material for non-commercial purposes, provided you give appropriate credit and distribute your contributions under the same license. See [LICENSE.md](LICENSE.md) for full details.
