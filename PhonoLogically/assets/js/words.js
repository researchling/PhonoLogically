/* Word List
   content: difficult words with IPA transcription
   format: { ipa: 'transcription', ortho: 'spelling' }  OR  { rp: 'RP transcription', ga: 'GA transcription', ortho: 'spelling' }

   ipa:   Shared transcription (identical for both RP and GA). String or array of variants.
   rp:    RP-specific transcription (when different from GA). String or array of variants.
   ga:    GA-specific transcription (when different from RP). String or array of variants.
   ortho: Required. Orthographic spelling of the word.

   note: Each entry has EITHER 'ipa' (shared) OR both 'rp' and 'ga' (variety-specific). */

const WORDS = [
    { ipa: 'əˈkʌmpəni', ortho: 'accompany' },
    { ipa: 'ˈækʃən', ortho: 'action' },
    { ipa: 'əˈmʌŋ', ortho: 'among' },
    { rp: 'ænəˈlɪtɪk', ga: 'ænəˈlɪt̬ɪk', ortho: 'analytic' },
    { ipa: 'əˈsɪstənt', ortho: 'assistant' },
    { ipa: 'blest', ortho: 'blessed (p.p.)' },
    { rp: 'blaʊz', ga: 'blaʊs', ortho: 'blouse' },
    { ipa: 'breθ', ortho: 'breath' },
    { ipa: 'briːð', ortho: 'breathe' },
    { ipa: 'brʊk', ortho: 'brook' },
    { ipa: 'ˈberi', ortho: 'bury' },
    { ipa: 'kəˈtæstrəfi', ortho: 'catastrophe' },
    { rp: 'kætəˈstrɒfɪk', ga: 'kæt̬əˈstrɑːfɪk', ortho: 'catastrophic' },
    { rp: 'ˈkwaɪə', ga: 'ˈkwaɪɚ', ortho: 'choir' },
    { rp: 'ˈkrɪsənɪŋ', ga: ['ˈkrɪsənɪŋ', 'ˈkrɪsnɪŋ'], ortho: 'christening' },
    { rp: 'klɔːz', ga: ['klɑːz', 'klɔːz'], ortho: 'clause' },
    { rp: 'klɑːk', ga: 'klɝːk', ortho: 'clerk' },
    { ipa: 'klaɪm', ortho: 'climb' },
    { rp: 'ˈkəʊkəʊ', ga: 'ˈkoʊkoʊ', ortho: 'cocoa' },
    { rp: 'ˈkɜːnəl', ga: ['ˈkɝːnəl', 'ˈkɝːnl'], ortho: 'colonel' },
    { rp: 'ˈkɜːnəl', ga: ['ˈkɝːnəl', 'ˈkɝːnl'], ortho: 'kernel' },
    { rp: 'ˈkɒləm', ga: 'ˈkɑːləm', ortho: 'column' },
    { rp: 'kəʊm', ga: 'koʊm', ortho: 'comb' },
    { ipa: 'tuːm', ortho: 'tomb' },
    { ipa: 'wuːm', ortho: 'womb' },
    { rp: 'ˈkɒmən', ga: 'ˈkɑːmən', ortho: 'common' },
    { rp: 'kɒf', ga: ['kɑːf', 'kɔːf'], ortho: 'cough' },
    { rp: 'kraɪˈtɪəriən', ga: 'kraɪˈtɪriən', ortho: 'criterion' },
    { rp: 'krəʊ', ga: 'kroʊ', ortho: 'crow' },
    { rp: 'ˈkʌbəd', ga: 'ˈkʌbɚd', ortho: 'cupboard' },
    { rp: ['dɪˈklaɪn', 'dəˈklaɪn'], ga: 'dɪˈklaɪn', ortho: 'decline' },
    { rp: ['ˈdiːkriːs', 'dɪˈkriːs', 'diːˈkriːs', 'dəˈkriːs'], ga: 'ˈdiːkriːs', ortho: 'decrease (n.)' },
    { rp: ['dɪˈkriːs', 'diːˈkriːs', 'ˈdiːkriːs', 'dəˈkriːs'], ga: ['dɪˈkriːs', 'ˈdiːkriːs'], ortho: 'decrease (v.)' },
    { rp: 'ˈdezət', ga: 'ˈdezɚt', ortho: 'desert (n.)' },
    { rp: ['dɪˈzɜːt', 'dəˈzɜːt'], ga: 'dɪˈzɝːt', ortho: 'desert (v.)' },
    { rp: ['dɪˈzɜːt', 'dəˈzɜːt'], ga: 'dɪˈzɝːt', ortho: 'dessert' },
    { rp: ['dɪˈzaɪn', 'dəˈzaɪn'], ga: 'dɪˈzaɪn', ortho: 'design' },
    { rp: ['dɪˈtɜːmɪn', 'dəˈtɜːmɪn', 'dɪˈtɜːmən'], ga: 'dɪˈtɝːmɪn', ortho: 'determine' },
    { ipa: 'ˈdaɪəɡræm', ortho: 'diagram' },
    { rp: ['dɪˈzɒlv', 'dɪˈsɒlv'], ga: ['dɪˈzɑːlv', 'dɪˈzɔːlv'], ortho: 'dissolve' },
    { ipa: 'draʊt', ortho: 'drought' },
    { rp: 'drɑːft', ga: 'dræft', ortho: 'draught' },
    { rp: ['ɪˈrəʊniəs', 'erˈəʊniəs'], ga: ['əˈroʊniəs', 'erˈoʊniəs', 'ɪˈroʊniəs'], ortho: 'erroneous' },
    { ipa: 'ɪˈvent', ortho: 'event' },
    { rp: ['ɪɡˈzæmɪn', 'eɡˈzæmɪn', 'ɪkˈsæmɪn', 'ekˈsæmɪn'], ga: ['ɪɡˈzæmɪn', 'eɡˈzæmɪn'], ortho: 'examine' },
    { ipa: 'ˈfriːkwəntsi', ortho: 'frequency' },
    { rp: ['ˈdʒenɪtɪv', 'ˈdʒenətɪv'], ga: 'ˈdʒenət̬ɪv', ortho: 'genitive' },
    { ipa: 'ˈɡɪnipɪɡ', ortho: 'guinea pig' },
    { rp: 'həʊˈtel', ga: 'hoʊˈtel', ortho: 'hotel' },
    { rp: 'məʊˈtel', ga: 'moʊˈtel', ortho: 'motel' },
    { ipa: 'ˈɪnfəməs', ortho: 'infamous' },
    { rp: ['ˈɪntrəstɪŋ', 'ˈɪntrestɪŋ', 'ˈɪntrɪstɪŋ'], ga: ['ˈɪntrɪstɪŋ', 'ˈɪntrəstɪŋ', 'ˈɪntrestɪŋ', 'ˈɪnt̬ɚɪstɪŋ', 'ˈɪnt̬ɚestɪŋ'], ortho: 'interesting' },
    { rp: ['ˈɪntɪməsi', 'ˈɪntəməsi'], ga: ['ˈɪnt̬ɪməsi', 'ˈɪnt̬əməsi'], ortho: 'intimacy' },
    { rp: 'ˈaɪən', ga: ['ˈaɪɚn', 'aɪrn'], ortho: 'iron' },
    { ipa: 'dʒeɪ', ortho: 'j' },
    { ipa: 'waɪ', ortho: 'y' },
    { ipa: 'eks', ortho: 'x' },
    { rp: 'ˈdʒɜːnəl', ga: ['ˈdʒɝːnəl', 'ˈdʒɝːnl'], ortho: 'journal' },
    { rp: 'ˈlɜːnɪd', ga: 'ˈlɝːnɪd', ortho: 'learned (adj.)' },
    { ipa: 'leməˈneɪd', ortho: 'lemonade' },
    { rp: 'ˈmærɪtəl', ga: ['ˈmerɪt̬əl', 'ˈmerɪt̬l', 'ˈmærɪt̬əl', 'ˈmærɪt̬l'], ortho: 'marital' },
    { rp: 'ˈmɑːʃəl', ga: ['ˈmɑːrʃəl', 'ˈmɑːrʃl'], ortho: 'martial' },
    { rp: 'ˈməʊdəl', ga: ['ˈmoʊdəl', 'ˈmoʊdl'], ortho: 'modal' },
    { rp: 'ˈmɒdəl', ga: ['ˈmɑːdəl', 'ˈmɑːdl'], ortho: 'model' },
    { rp: ['əˈblɪɡətri', 'ɒbˈlɪɡətri', 'ɒblɪˈɡeɪtri'], ga: ['əˈblɪɡətɔːri', 'ˈɑːbləɡətɔːri'], ortho: 'obligatory' },
    { rp: 'əˈkɜː', ga: 'əˈkɝː', ortho: 'occur' },
    { rp: 'əˈkʌrənts', ga: ['əˈkɝːənts', 'əˈkɝːəns', 'əˈkɝːnts', 'əˈkɝːns'], ortho: 'occurrence' },
    { ipa: 'ˈʌnjən', ortho: 'onion' },
    { ipa: 'ˈʌvən', ortho: 'oven' },
    { ipa: 'aʊl', ortho: 'owl' },
    { rp: 'pəˈsent', ga: 'pɚˈsent', ortho: 'percent' },
    { rp: ['ˈfəʊtəɡrɑːf', 'ˈfəʊtəɡræf'], ga: ['ˈfoʊt̬oʊɡræf', 'ˈfoʊt̬əɡræf'], ortho: 'photograph' },
    { rp: 'fəˈtɒɡrəfə', ga: 'fəˈtɑːɡrəfɚ', ortho: 'photographer' },
    { rp: 'pɔː', ga: 'pɔːr', ortho: 'pour' },
    { ipa: ['ˈprefɪs', 'ˈprefəs'], ortho: 'preface' },
    { ipa: 'ˈprefərəbəl', ortho: 'preferable' },
    { ipa: 'ˈprezənts', ortho: 'presence' },
    { rp: 'ˈprəʊnaʊn', ga: 'ˈproʊnaʊn', ortho: 'pronoun' },
    { rp: 'ˈsjuːdəʊ', ga: 'ˈsuːdoʊ', ortho: 'pseudo' },
    { ipa: ['rɪˈsiːt', 'rəˈsiːt'], ortho: 'receipt' },
    { ipa: ['ˈresɪpi', 'ˈresəpi'], ortho: 'recipe' },
    { ipa: 'ˈrefərənts', ortho: 'reference' },
    { ipa: ['rɪˈvjuː', 'rəˈvjuː'], ortho: 'review' },
    { ipa: ['rɪˈzʌlt', 'rəˈzʌlt'], ortho: 'result' },
    { rp: ['rəʊˈmænts', 'ˈrəʊmænts'], ga: ['roʊˈmænts', 'ˈroʊmænts'], ortho: 'Romance (languages)' },
    { rp: ['rəʊˈmænts', 'ˈrəʊmænts'], ga: ['roʊˈmænts', 'ˈroʊmænts'], ortho: 'romance' },
    { rp: ['ˈsepərət', 'ˈsepərɪt', 'ˈseprət', 'ˈseprɪt'], ga: ['ˈsepɚɪt', 'ˈseprɪt'], ortho: 'separate (adj.)' },
    { rp: ['ˈsɪəriːz', 'ˈsɪərɪz'], ga: ['ˈsɪriːz', 'ˈsiːriːz'], ortho: 'series' },
    { rp: 'səʊ', ga: 'soʊ', ortho: 'sew' },
    { rp: 'səʊ', ga: 'soʊ', ortho: 'sow (seed)' },
    { ipa: 'saʊ', ortho: 'sow (pig)' },
    { ipa: 'ˈsɪŋɡəl', ortho: 'single' },
    { rp: 'ˈsʌðən', ga: 'ˈsʌðɚn', ortho: 'southern' },
    { ipa: 'spʌndʒ', ortho: 'sponge' },
    { rp: ['ˈsʌbsɪkwənt', 'ˈsʌbsəkwənt'], ga: 'ˈsʌbsɪkwənt', ortho: 'subsequent' },
    { ipa: 'swet', ortho: 'sweat' },
    { rp: 'ˈswetə', ga: 'ˈswet̬ɚ', ortho: 'sweater' },
    { rp: 'sɔːd', ga: 'sɔːrd', ortho: 'sword' },
    { rp: 'θəˈmɒmɪtə', ga: 'θɚˈmɑːmət̬ɚ', ortho: 'thermometer' },
    { ipa: 'ˈθiːsɪs', ortho: 'thesis' },
    { ipa: 'ˈθiːsiːz', ortho: 'theses' },
    { ipa: 'θred', ortho: 'thread' },
    { ipa: 'tʌn', ortho: 'ton' },
    { ipa: 'juːˈniːk', ortho: 'unique' },
    { ipa: 'ˈvɪʃəs', ortho: 'vicious' },
    { ipa: ['vɪˈveɪʃəs', 'vaɪˈveɪʃəs'], ortho: 'vivacious' },
    { rp: ['vɪˈvæsəti', 'vaɪˈvæsəti', 'vɪˈvæsɪti'], ga: ['vɪˈvæsət̬i', 'vaɪˈvæsət̬i'], ortho: 'vivacity' },
    { ipa: 'ˈvaʊəl', ortho: 'vowel' },
    { rp: 'ˈwʌndə', ga: 'ˈwʌndɚ', ortho: 'wonder' },
    { rp: 'ˈwɒndə', ga: 'ˈwɑːndɚ', ortho: 'wander' },
    { ipa: 'wʊl', ortho: 'wool' },
    { rp: 'ˈwʌri', ga: 'ˈwɝːi', ortho: 'worry' },
    { ipa: 'wuːnd', ortho: 'wound (injury)' },
    { ipa: 'waʊnd', ortho: 'wound (past)' },
    { ipa: 'ˈretʃɪd', ortho: 'wretched' },
    { rp: 'jɒt', ga: 'jɑːt', ortho: 'yacht' },
    { rp: 'ˈzɪərəʊ', ga: ['ˈzɪroʊ', 'ˈziːroʊ'], ortho: 'zero' }
];



/* Word validation: checks format and IPA symbols */

// IPA symbols (shared)
const SHARED_SYMBOLS = new Set([
    // Consonants
    'p', 'b', 't', 'd', 'k', 'ɡ', 'f', 'v', 'θ', 'ð', 's', 'z', 'ʃ', 'ʒ', 'h', 'm', 'n', 'ŋ', 'l', 'r', 'j', 'w',
    // Vowels (shared)
    'ɪ', 'e', 'æ', 'ʌ', 'ʊ', 'ə', 'ɜ', 'ɑ', 'ɔ', 'i', 'u', 'a',
    // Modifiers
    'ː',                                     // length mark
    'ˈ', 'ˌ',                                // stress marks
    '(', ')'                                 // optional sound markers
]);

// GA-only symbols (flapped t is dealt with separately)
const GA_ONLY = new Set([
    'ɝ', 'ɚ', 'o'
]);

// RP-only symbols
const RP_ONLY = new Set([
    'ɒ'
]);

// used to catch any unrecognised characters
const ALL_VALID = new Set([...SHARED_SYMBOLS, ...GA_ONLY, ...RP_ONLY]);

// Validates a word entry and returns error messages
function validateWord(word, index) {
    const errors = [];
    const loc = `[entry ${index}]`;

    // return early if the entry is not a valid object
    if (typeof word !== 'object' || word === null) {
        return [`${loc}: not a valid object → use { ipa: '...', ortho: '...' } or { rp: '...', ga: '...', ortho: '...' }`];
    }

    const name = word.ortho ? ` "${word.ortho}"` : '';

    // catch any unrecognised field names (likely typos)
    for (const key of Object.keys(word)) {
        if (!['ipa', 'rp', 'ga', 'ortho'].includes(key)) {
            errors.push(`${loc}${name}: unknown field '${key}' → valid fields: ipa, rp, ga, ortho`);
        }
    }

    // 'ortho' is required and must contain only orthographic characters
    if (!word.ortho) {
        errors.push(`${loc}: 'ortho' is missing → add the word in spelling`);
    } else if (!/^[a-zA-Z\s\-'().,]+$/.test(word.ortho)) {
        const bad = [...word.ortho].filter(c => !/[a-zA-Z\s\-'().,]/.test(c));
        errors.push(`${loc}${name}: 'ortho' contains invalid character(s) ${[...new Set(bad)].join(', ')}`);
    }

    // entries must have either 'ipa' for a shared transcription, or both 'rp' and 'ga' when the varieties differ
    const hasIpa = !!word.ipa;
    const hasRp = !!word.rp;
    const hasGa = !!word.ga;

    if (hasIpa && (hasRp || hasGa)) {
        errors.push(`${loc}${name}: has both 'ipa' and 'rp'/'ga' → use 'ipa' for shared transcriptions or 'rp'+'ga' for variety-specific`);
    } else if (!hasIpa && !hasRp && !hasGa) {
        errors.push(`${loc}${name}: no transcription → add 'ipa' (for shared transcriptions) or both 'rp' and 'ga' (if different)`);
    } else if (hasRp && !hasGa) {
        errors.push(`${loc}${name}: has 'rp' but no 'ga' → variety-specific entries need both`);
    } else if (hasGa && !hasRp) {
        errors.push(`${loc}${name}: has 'ga' but no 'rp' → variety-specific entries need both`);
    }

    // check the actual transcription characters used in each field
    if (hasIpa) {
        // 'ipa' entries should not use variety-specific symbols; if they do, they need to be split into 'rp'/'ga'
        errors.push(...checkIpa(word.ipa, 'SHARED', `${loc}${name}: 'ipa'`));
    }
    if (hasRp) {
        errors.push(...checkIpa(word.rp, 'RP', `${loc}${name}: 'rp'`));
    }
    if (hasGa) {
        errors.push(...checkIpa(word.ga, 'GA', `${loc}${name}: 'ga'`));
    }

    return errors;
}

// Checks IPA value (string or array) for invalid/wrong-variety symbols
function checkIpa(value, variety, loc) {
    const values = Array.isArray(value) ? value : [value];
    const errors = [];

    for (const [i, ipa] of values.entries()) {
        const pos = values.length > 1 ? `${loc}[${i}]` : loc;

        if (typeof ipa !== 'string' || !ipa.trim()) {
            errors.push(`${pos}: empty string → transcription must be non-empty`);
            continue;
        }

        // t̬ consists of two Unicode code points (t + U+032C combining diacritic).
        // A for...of loop would split it, so it can never match as a unit in GA_ONLY.
        // Fix: remove t̬ before the loop and validate it independently.
        const clean = ipa.replace(/t̬/g, '');

        // Check for t̬ in RP or SHARED (a GA-only phoneme)
        if ((variety === 'RP' || variety === 'SHARED') && ipa.includes('t̬')) {
            errors.push(`${pos}: contains t̬ → t̬ is GA-only, move to 'ga'`);
        }

        const unknown = [];
        const wrongVariety = [];

        for (const char of clean) {
            if (!ALL_VALID.has(char)) {
                unknown.push(char);
            } else if (variety === 'RP' && GA_ONLY.has(char)) {
                wrongVariety.push(char);
            } else if (variety === 'GA' && RP_ONLY.has(char)) {
                wrongVariety.push(char);
            } else if (variety === 'SHARED' && (GA_ONLY.has(char) || RP_ONLY.has(char))) {
                // SHARED should not contain variety-specific symbols
                const which = GA_ONLY.has(char) ? 'GA' : 'RP';
                wrongVariety.push(`${char} (${which}-only)`);
            }
        }

        if (unknown.length) {
            errors.push(`${pos}: unrecognised symbol(s) ${[...new Set(unknown)].join(', ')} → not a valid IPA character`);
        }
        if (wrongVariety.length) {
            if (variety === 'SHARED') {
                errors.push(`${pos}: contains variety-specific symbol(s) ${[...new Set(wrongVariety)].join(', ')} → split into 'rp' and 'ga' instead of 'ipa'`);
            } else {
                const other = variety === 'RP' ? 'GA' : 'RP';
                errors.push(`${pos}: contains ${other}-only symbol(s) ${[...new Set(wrongVariety)].join(', ')} → belongs in '${other.toLowerCase()}'`);
            }
        }
    }

    return errors;
}

// Shows errors as red banner on page
function showErrors(errors) {
    const banner = document.createElement('div');
    banner.innerHTML = `
        <div style="position:fixed;top:0;left:0;right:0;background:#dc3545;color:#fff;padding:15px 40px 15px 20px;font:14px monospace;z-index:10000;max-height:50vh;overflow:auto">
            <b>⚠ Word List Errors (${errors.length})</b>
            <ul style="margin:10px 0 0 20px;padding:0">${errors.map(e => `<li>${e}</li>`).join('')}</ul>
            <div style="margin-top:10px;opacity:0.7;font-size:12px">Fix in script (assets/js/words.js) → reload the game</div>
            <button onclick="this.parentElement.parentElement.remove()" style="position:absolute;top:10px;right:10px;background:none;border:none;color:#fff;font-size:20px;cursor:pointer">✕</button>
        </div>
    `;
    document.body.appendChild(banner);
}

function validateAllWords() {
    const errors = WORDS.flatMap((w, i) => validateWord(w, i));

    if (errors.length) {
        console.error('WORD LIST ERRORS:', errors);
        if (document.body) showErrors(errors);
        else document.addEventListener('DOMContentLoaded', () => showErrors(errors));
    }
}

validateAllWords(); // runs automatically on script load