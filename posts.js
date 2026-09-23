// posts.js — Part 1 of 2
// Each post: slug, title, description, keywords, category, tags, readTime, date,
// content (HTML string), cta.

const commonCta = (lang, label) => ({
  heading: 'Ready to Practice with Timmy?',
  text: 'Timmy can help you practice these phrases with real conversation and instant feedback.',
  buttonText: `Start Learning ${label} →`,
  buttonLink: `/app?lang=${lang}`
});

module.exports = [

  // ============ 1. YORUBA GREETINGS FOR IN-LAWS ============
  {
    slug: 'yoruba-greetings-in-laws',
    title: "5 Yoruba Greetings for Meeting Your In-Laws (Timmy's Guide)",
    description: "Master proper Yoruba greetings for meeting your in-laws. Learn Ẹ káàrọ̀, Ẹ kú ilé, and more with pronunciation, cultural context, and Timmy's personal tips.",
    keywords: "Yoruba greetings, how to greet Yoruba in-laws, Ẹ káàrọ̀, Yoruba respect greetings, meeting Nigerian in-laws, Yoruba phrases for family, learn Yoruba greetings, Yoruba culture etiquette",
    category: "Yoruba • Culture",
    tags: "Family • Greetings • Etiquette",
    readTime: "9 min read",
    date: "2026-09-01",
    content: `
<p><em>Look, I've been there. Standing at the door, sweating through my agbada, trying to remember if it's "Ẹ káàrọ̀" or "Ẹ káàsán." The struggle is real, but I've got you covered. Here's exactly what to say — and why it matters.</em></p>

<p>Meeting your Yoruba in-laws for the first time is not just a social event. In Yoruba culture, it's a test of <em>ọmọlúàbí</em> — good character, proper upbringing, respect for elders. And the entire assessment begins with a single greeting. Get that wrong and you spend the rest of the visit recovering. Get it right and doors open.</p>

<div class="timmy-tip-box">
<h4>🤓 Timmy's First Tip</h4>
<p>In Yoruba culture, greeting elders isn't just polite — it's a fundamental expression of <em>ọmọlúàbí</em> (good character). Using the proper Yoruba greeting signals that you respect not just your in-laws, but the entire cultural heritage they represent. <span class="nigerian-slang">No pressure o!</span></p>
</div>

<h2>1. Ẹ káàrọ̀ o — Good morning (respectful)</h2>
<div class="phrase-box">
  <div class="phrase-item">
    <span class="phrase-native">Ẹ káàrọ̀ o</span>
    <span class="phrase-translation">Good morning (respectful)</span>
    <span class="phrase-pronunciation">Eh-kah-roh oh</span>
  </div>
</div>
<p>The <strong>"Ẹ"</strong> prefix is the key. It's the plural, respectful form. Using "O" (singular, informal) with an elder would be considered disrespectful. The trailing "o" softens the greeting and makes it more polite. Together, "Ẹ káàrọ̀ o" is the safest, most respectful way to open any morning conversation.</p>
<p><strong>When to use it:</strong> Any time before noon. Pair it with a slight bow or curtsy — for women, a knee bend (<em>ikunlẹ</em>) is traditional, but a respectful bow works too.</p>

<div class="timmy-tip-box">
<h4>🤓 Timmy Says:</h4>
<p>"My first time meeting my wife's parents, I practiced 'Ẹ káàrọ̀ o' in the mirror for twenty minutes. Still messed up the tone. But they appreciated the effort! <span class="nigerian-slang">Small small!</span>"</p>
</div>

<h2>2. Ẹ kú ilé o — Greetings to the household</h2>
<div class="phrase-box">
  <div class="phrase-item">
    <span class="phrase-native">Ẹ kú ilé o</span>
    <span class="phrase-translation">Greetings to the household</span>
    <span class="phrase-pronunciation">Eh-koo ee-leh oh</span>
  </div>
</div>
<p>This greeting acknowledges the home itself and everyone in it. It signals that you recognize the home as a place of honor and the elders as its custodians. Use it when you enter for the first time, especially if the parents live in the family home.</p>

<h2>3. Ẹ ṣé o — Thank you (respectful)</h2>
<div class="phrase-box">
  <div class="phrase-item">
    <span class="phrase-native">Ẹ ṣé o</span>
    <span class="phrase-translation">Thank you (respectful)</span>
    <span class="phrase-pronunciation">Eh sheh oh</span>
  </div>
</div>
<p>You will use this constantly. When you are offered food, water, a seat, or anything else, respond with "Ẹ ṣé o." It is simple, but the respectful "Ẹ" carries weight. Family members notice when a visiting in-law says thank you correctly and often.</p>

<h2>4. Ẹ kú iṣẹ́ o — Well done for your work</h2>
<div class="phrase-box">
  <div class="phrase-item">
    <span class="phrase-native">Ẹ kú iṣẹ́ o</span>
    <span class="phrase-translation">Well done / greetings for your work</span>
    <span class="phrase-pronunciation">Eh-koo ee-sheh oh</span>
  </div>
</div>
<p>This greeting acknowledges someone's effort and labor. Even on a weekend, it recognizes their life's work and contributions to the family. Elders love this one because it shows you see them as more than just "the parents" — you see them as people with a lifetime of achievement.</p>

<h2>5. A dúpẹ́ — We give thanks</h2>
<div class="phrase-box">
  <div class="phrase-item">
    <span class="phrase-native">A dúpẹ́</span>
    <span class="phrase-translation">We give thanks</span>
    <span class="phrase-pronunciation">Ah doo-peh</span>
  </div>
</div>
<p>Use this when you are leaving. It expresses gratitude for the hospitality, the time, and the welcome. It leaves a lasting impression of humility and appreciation — the two qualities Yoruba families are most looking for in an in-law.</p>

<h2>What NOT to say</h2>
<p>Avoid <em>"Báwo ni?"</em> ("How are you?") as your first greeting to an elder. Among peers it is normal, but to an elder it can feel too casual, almost abrupt. Let them ask you first, then respond with "Dáadáa ni, ẹ ṣé o" — "Fine, thank you."</p>

<h2>Bonus: three etiquette rules nobody tells you</h2>
<ul>
  <li><strong>Greet before you talk business.</strong> In Yoruba culture, greetings come first. Never open with a question or request before exchanging greetings.</li>
  <li><strong>Greet the eldest first.</strong> Order matters. Greet from the oldest down.</li>
  <li><strong>Do not refuse food.</strong> If offered food, accept it, even a small amount. Refusing is read as rejection of the family.</li>
</ul>

<div class="timmy-tip-box">
<h4>🤓 Timmy's Final Wisdom</h4>
<p>"Here's the thing — they don't expect perfection. They expect effort. If you walk in, bow slightly, and say 'Ẹ káàrọ̀ o' with a smile, you've already won half the battle. The other half? Don't refuse food. Just don't. <span class="nigerian-slang">Oya</span>, you've got this!"</p>
</div>
`,
    cta: commonCta('yoruba', 'Yoruba')
  },

  // ============ 2. IGBO WEDDING PHRASES ============
  {
    slug: 'igbo-wedding-phrases',
    title: "Igbo Wedding Traditions: Phrases That Will Make You the Favorite In-Law",
    description: "Navigate Igba Nkwu with confidence. Learn the essential Igbo phrases for the knocking ceremony, wine-carrying, and meeting your Igbo in-laws.",
    keywords: "Igbo wedding phrases, Igba Nkwu, Igbo traditional wedding, Igbo in-laws, learn Igbo for wedding, Nnọọ, Daalụ, Igbo wedding vocabulary, wine carrying ceremony",
    category: "Igbo • Culture",
    tags: "Weddings • Igba Nkwu • Family",
    readTime: "11 min read",
    date: "2026-09-02",
    content: `
<p><em>I've been to more Igbo weddings than I can count. From the knocking ceremony to the wine-carrying, I've seen it all — including that one uncle who drinks too much palm wine and starts giving unsolicited marriage advice. Here's how to navigate <strong>Igba Nkwu</strong> like a pro.</em></p>

<div class="timmy-tip-box">
<h4>🤓 Timmy's First Tip</h4>
<p>The Igbo traditional wedding, <em>Igba Nkwu</em> (wine-carrying ceremony), is not just a party — it is a legal and spiritual binding of two families. The bride's family must formally give her away, and the groom's family must demonstrate they can care for her. <span class="nigerian-slang">No small thing o!</span></p>
</div>

<h2>Essential Igbo wedding vocabulary</h2>
<div class="phrase-box">
  <div class="phrase-item"><span class="phrase-native">Igba Nkwu</span><span class="phrase-translation">Traditional wedding ceremony</span><span class="phrase-pronunciation">Ig-bah N-kwoo</span></div>
  <div class="phrase-item"><span class="phrase-native">Umunna</span><span class="phrase-translation">Extended family / kindred</span><span class="phrase-pronunciation">Oo-moo-nah</span></div>
  <div class="phrase-item"><span class="phrase-native">Iku Aka</span><span class="phrase-translation">Knocking ceremony (introduction)</span><span class="phrase-pronunciation">Ee-koo Ah-kah</span></div>
  <div class="phrase-item"><span class="phrase-native">Nwunye</span><span class="phrase-translation">Wife</span><span class="phrase-pronunciation">Nwoo-nyeh</span></div>
  <div class="phrase-item"><span class="phrase-native">Di</span><span class="phrase-translation">Husband</span><span class="phrase-pronunciation">Dee</span></div>
</div>

<h2>1. Nnọọ — Welcome</h2>
<p>You will hear this constantly as the bride's family welcomes the groom's family. The drawn-out "ọọ" sound matters. A short "nno" is casual. The elongated vowel makes it formal, warm, and ceremonial.</p>

<h2>2. Ị bịa la ụlọ — You have come home</h2>
<p>This phrase welcomes the groom's family and acknowledges the union of two families. It is not just a greeting — it is a statement of acceptance. When an elder says this to you, they are telling you that you belong here.</p>

<h2>3. Anyị anabatala gị — We have received you</h2>
<p>Used during the formal welcome speeches. It signals that the groom's family has been officially accepted and the ceremonies can proceed. If you hear this as a groom or groom's representative, breathe. You passed the introduction.</p>

<h2>4. Ị chọtala nwunye gị — You have found your wife</h2>
<p>Said after the groom identifies his bride, often from a line of veiled women. It is a moment of joy and confirmation. The whole compound erupts.</p>

<h2>5. Daalụ — Thank you</h2>
<p>Simple but essential. Use it when offered kola nut, palm wine, or food. Gratitude is the cornerstone of Igbo hospitality, and saying "Daalụ" correctly and often earns you real goodwill.</p>

<h2>The wine-carrying moment — what it means</h2>
<p>The climax of <em>Igba Nkwu</em> is when the bride searches the crowd, finds her groom, and offers him a cup of palm wine. If he drinks, he accepts her as his wife. The phrase you'll hear is:</p>
<div class="phrase-box">
  <div class="phrase-item"><span class="phrase-native">Ọ chọtala di ya</span><span class="phrase-translation">She has found her husband</span><span class="phrase-pronunciation">Or chor-tah-lah dee yah</span></div>
</div>

<h2>Kola nut etiquette — do not skip this</h2>
<p>The kola nut (<em>ọjị</em>) is presented early in the ceremony. It symbolizes welcome and communion. You will be offered one. Accept it, hold it briefly, and say "Daalụ." Never refuse it. In some families, the groom is expected to break it — if you are the groom, ask your bride's brothers beforehand who breaks the kola nut in their family.</p>

<h2>Gifts that impress — what to bring</h2>
<p>Traditional Igbo weddings involve a list called the <em>ime ego</em> (bride price items). Your fiancée's family will provide the list, but common items include:</p>
<ul>
  <li>Kola nuts (ọjị) — symbol of welcome</li>
  <li>Palm wine — for the wine-carrying ceremony</li>
  <li>Yams — symbol of prosperity</li>
  <li>Bags of rice, salt, and honey</li>
  <li>Clothing for the bride's parents</li>
  <li>Cash in a decorated envelope</li>
</ul>
<p>Do not wing this. Ask your fiancée to review the list with you weeks in advance.</p>

<div class="timmy-tip-box">
<h4>🤓 Timmy's Final Wisdom</h4>
<p>"Igbo weddings are long. Like, really long. Bring snacks. Bring patience. And when that palm wine comes around, sip it slowly — you don't want to be the 'uncle who danced too much' in everyone's WhatsApp status tomorrow. <span class="nigerian-slang">Daalụ</span> for reading!"</p>
</div>
`,
    cta: commonCta('igbo', 'Igbo')
  },

  // ============ 3. HAUSA FOR TRAVELERS ============
  {
    slug: 'hausa-phrases-for-travelers',
    title: "Essential Hausa Phrases for Travelers (No Wahala Edition)",
    description: "Traveling to Kano, Kaduna, or Abuja? Learn the essential Hausa phrases for greetings, markets, and bargaining — with pronunciation and cultural tips.",
    keywords: "Hausa phrases, learn Hausa, Hausa for travelers, Kano travel, Nigerian languages, Sannu, Nagode, Hausa greetings, Northern Nigeria travel",
    category: "Hausa • Travel",
    tags: "Travel • Greetings • Market",
    readTime: "8 min read",
    date: "2026-09-03",
    content: `
<p><em>Traveling to Kano, Kaduna, or Abuja? Let me save you from the awkward silence when someone greets you and you just blink. These essential Hausa phrases will help you navigate like a local — or at least like someone who tried.</em></p>

<div class="timmy-tip-box">
<h4>🤓 Timmy's First Tip</h4>
<p>Greetings are elaborate in Hausa culture. Do not rush to the point of your visit. Exchange at least three or four greetings before discussing business. Asking "How is your family?" and "How is your work?" shows proper respect. <span class="nigerian-slang">No be small thing!</span></p>
</div>

<h2>1. Sannu — Hello / Sorry to disturb</h2>
<div class="phrase-box">
  <div class="phrase-item"><span class="phrase-native">Sannu</span><span class="phrase-translation">Hello (literally "sorry to disturb")</span><span class="phrase-pronunciation">San-noo</span></div>
</div>
<p>The universal greeting. But here is the nuance: <em>Sannu</em> literally means "sorry to disturb you." It is inherently humble. The response is "Yawwa" (fine / okay) or "Sannu kadai" (hello to you alone).</p>

<h2>2. Ina kwana? / Ina wuni? — Good morning / Good afternoon</h2>
<div class="phrase-box">
  <div class="phrase-item"><span class="phrase-native">Ina kwana?</span><span class="phrase-translation">Good morning (How did you sleep?)</span><span class="phrase-pronunciation">Ee-nah kwa-nah</span></div>
  <div class="phrase-item"><span class="phrase-native">Ina wuni?</span><span class="phrase-translation">Good afternoon (How was the day?)</span><span class="phrase-pronunciation">Ee-nah woo-nee</span></div>
</div>
<p>Use <em>Ina kwana</em> before noon, <em>Ina wuni</em> after. The proper response is "Lafiya lau" — fine, in peace.</p>

<h2>3. Nagode — Thank you</h2>
<div class="phrase-box">
  <div class="phrase-item"><span class="phrase-native">Nagode</span><span class="phrase-translation">Thank you</span><span class="phrase-pronunciation">Nah-goh-deh</span></div>
</div>
<p>Simple and essential. To emphasize, say "Nagode sosai" — thank you very much.</p>

<h2>4. Nawa ne? — How much is this?</h2>
<div class="phrase-box">
  <div class="phrase-item"><span class="phrase-native">Nawa ne?</span><span class="phrase-translation">How much is this?</span><span class="phrase-pronunciation">Nah-wah neh</span></div>
</div>
<p>Essential for market bargaining. Knowing Hausa numbers helps, but vendors often write prices or use fingers.</p>

<h2>5. Ka rage mini — Reduce it for me</h2>
<div class="phrase-box">
  <div class="phrase-item"><span class="phrase-native">Ka rage mini</span><span class="phrase-translation">Reduce it for me</span><span class="phrase-pronunciation">Kah rah-geh mee-nee</span></div>
</div>
<p>The bargaining phrase. Said with a smile, it shows you know the game. Expect a counter-offer. Bargaining is expected and part of market culture.</p>

<h2>6. Ba na jin Hausa sosai — I don't understand Hausa very well</h2>
<div class="phrase-box">
  <div class="phrase-item"><span class="phrase-native">Ba na jin Hausa sosai</span><span class="phrase-translation">I don't understand Hausa very well</span><span class="phrase-pronunciation">Bah nah jeen How-sah soh-sai</span></div>
</div>
<p>Honesty is appreciated. People will switch to English or simplified Hausa to help you.</p>

<h2>7. Sai anjima — See you later</h2>
<div class="phrase-box">
  <div class="phrase-item"><span class="phrase-native">Sai anjima</span><span class="phrase-translation">See you later / Until later</span><span class="phrase-pronunciation">Sigh ahn-jee-mah</span></div>
</div>
<p>The standard farewell. Not a permanent goodbye, but an optimistic "until we meet again."</p>

<h2>Numbers 1–10 (essential for markets)</h2>
<div class="phrase-box">
  <div class="phrase-item"><span class="phrase-native">ɗaya</span><span class="phrase-translation">One</span><span class="phrase-pronunciation">dah-yah</span></div>
  <div class="phrase-item"><span class="phrase-native">biyu</span><span class="phrase-translation">Two</span><span class="phrase-pronunciation">bee-yoo</span></div>
  <div class="phrase-item"><span class="phrase-native">uku</span><span class="phrase-translation">Three</span><span class="phrase-pronunciation">oo-koo</span></div>
  <div class="phrase-item"><span class="phrase-native">huɗu</span><span class="phrase-translation">Four</span><span class="phrase-pronunciation">hoo-doo</span></div>
  <div class="phrase-item"><span class="phrase-native">biyar</span><span class="phrase-translation">Five</span><span class="phrase-pronunciation">bee-yar</span></div>
  <div class="phrase-item"><span class="phrase-native">shida</span><span class="phrase-translation">Six</span><span class="phrase-pronunciation">shee-dah</span></div>
  <div class="phrase-item"><span class="phrase-native">bakwai</span><span class="phrase-translation">Seven</span><span class="phrase-pronunciation">bah-kwai</span></div>
  <div class="phrase-item"><span class="phrase-native">takwas</span><span class="phrase-translation">Eight</span><span class="phrase-pronunciation">tah-kwas</span></div>
  <div class="phrase-item"><span class="phrase-native">tara</span><span class="phrase-translation">Nine</span><span class="phrase-pronunciation">tah-rah</span></div>
  <div class="phrase-item"><span class="phrase-native">goma</span><span class="phrase-translation">Ten</span><span class="phrase-pronunciation">goh-mah</span></div>
</div>

<div class="timmy-tip-box">
<h4>🤓 Timmy's Final Wisdom</h4>
<p>"Hausa people appreciate effort. Even if your pronunciation is <span class="nigerian-slang">wahala</span>, they'll smile and help you. Just don't be that person who shouts 'Sannu!' at everyone like you're running for office. Small, humble, respectful. <span class="nigerian-slang">Sai anjima!</span>"</p>
</div>
`,
    cta: commonCta('hausa', 'Hausa')
  },

  // ============ 4. YORUBA TONES GUIDE ============
  {
    slug: 'yoruba-tones-guide',
    title: 'Mastering Yoruba Tones: Timmy\'s "Don\'t Overthink It" Guide',
    description: "Yoruba is a tonal language — but you don't need to panic. Learn the three Yoruba tones (high, mid, low) with simple analogies and real examples.",
    keywords: "Yoruba tones, Yoruba tonal language, learn Yoruba tones, Yoruba pronunciation, Yoruba high tone, Yoruba mid tone, Yoruba low tone, how to speak Yoruba",
    category: "Yoruba • Tips",
    tags: "Pronunciation • Tones • Beginner",
    readTime: "10 min read",
    date: "2026-09-04",
    content: `
<p><em>Let me guess — someone told you Yoruba is a tonal language and now you're panicking. Relax. I've seen people master tones in weeks and others still struggling after years. The difference? The ones who succeed don't overthink it. Here's my simple guide.</em></p>

<div class="timmy-tip-box">
<h4>🤓 Timmy's First Tip</h4>
<p>Yoruba has three tones: high ( ́), mid ( ̄), and low ( ̀). Change the tone, change the meaning. <em>Owó</em> (money) is not the same as <em>Òwò</em> (a town in Ondo State). <span class="nigerian-slang">No pressure o!</span></p>
</div>

<h2>The three tones explained (simply)</h2>

<h3>High tone ( ́) — your "surprised" voice</h3>
<p>Imagine someone jumps out and scares you. The pitch of your voice when you say "AH!" — that's the high tone. It's sharp and stays high.</p>
<div class="phrase-box">
  <div class="phrase-item"><span class="phrase-native">Owó</span><span class="phrase-translation">Money</span><span class="phrase-pronunciation">Oh-WOH (high-high)</span></div>
</div>

<h3>Mid tone ( ̄) — your "normal" voice</h3>
<p>This is just your regular speaking voice. No drama. No ups or downs. Just chill.</p>
<div class="phrase-box">
  <div class="phrase-item"><span class="phrase-native">Oko</span><span class="phrase-translation">Farm / Husband</span><span class="phrase-pronunciation">Oh-koh (mid-mid)</span></div>
</div>

<h3>Low tone ( ̀) — your "disappointed" voice</h3>
<p>Think of when your food falls on the floor. That deep, falling "oh no…" — that's the low tone.</p>
<div class="phrase-box">
  <div class="phrase-item"><span class="phrase-native">Òwò</span><span class="phrase-translation">Owo (a town in Ondo State)</span><span class="phrase-pronunciation">Oh-woh (low-low)</span></div>
</div>

<h2>The classic example everyone uses</h2>
<div class="phrase-box">
  <div class="phrase-item"><span class="phrase-native">Igba</span><span class="phrase-translation">Calabash / Garden egg (mid-mid)</span><span class="phrase-pronunciation">Eeg-bah</span></div>
  <div class="phrase-item"><span class="phrase-native">Igbá</span><span class="phrase-translation">Locust bean (mid-high)</span><span class="phrase-pronunciation">Eeg-BAH</span></div>
  <div class="phrase-item"><span class="phrase-native">Ìgbà</span><span class="phrase-translation">Time / Season (low-low)</span><span class="phrase-pronunciation">Eeg-bah (low)</span></div>
</div>
<p>Same spelling. Three different meanings. Welcome to Yoruba.</p>

<h2>Timmy's three rules for not overthinking tones</h2>

<h3>Rule 1: Context saves you 90% of the time</h3>
<p>If you're at a market and say "Mo fẹ́ ra <em>igba</em>" (I want to buy calabash) but accidentally use the tone for "time," nobody will hand you a wristwatch. They'll see you pointing at calabashes and understand. Context is your safety net.</p>

<h3>Rule 2: Listen more than you speak</h3>
<p>Your ears will learn tones faster than your brain. Listen to Yoruba music, watch Nollywood with subtitles, or just eavesdrop on conversations (respectfully). Your brain will start pattern-matching without you noticing.</p>

<h3>Rule 3: Record yourself and laugh</h3>
<p>Record yourself saying words, then compare to a native speaker. You'll cringe. That's good. That's learning. Timmy in the app can help you practice pronunciation with instant feedback.</p>

<h2>Why Yoruba has tones at all</h2>
<p>Yoruba is a Niger-Congo language, and tone is a core feature of the language family. Unlike English, where tone changes only express emotion (rising pitch = question), in Yoruba the tone is part of the word's identity. Take away the tone and the word loses meaning.</p>

<h2>A trick that actually works</h2>
<p>Read every Yoruba word like you're singing a two- or three-note melody. High tone = high note. Mid tone = middle note. Low tone = low note. Don't read them as words. Sing them. Your brain will retain the melody.</p>

<div class="timmy-tip-box">
<h4>🤓 Timmy's Final Wisdom</h4>
<p>"I once told my auntie I wanted to buy 'time' instead of 'calabash.' She laughed for five minutes straight. Now it's a family joke. You'll make mistakes. It's fine. <span class="nigerian-slang">Small small</span>, your ear will catch the tones. Just don't give up."</p>
</div>
`,
    cta: commonCta('yoruba', 'Yoruba')
  },

  // ============ 5. NIGERIAN PIDGIN 101 ============
  {
    slug: 'nigerian-pidgin-101',
    title: 'Nigerian Pidgin 101: How to Sound Like You Never Left',
    description: "Learn Nigerian Pidgin with Timmy — essential phrases, when to use them, and when NOT to. Sound like a local in markets, taxis, and family gatherings.",
    keywords: "Nigerian Pidgin, learn Pidgin, Naija Pidgin phrases, Nigerian slang, How far, Wahala, Abeg, Pidgin for diaspora, Nigerian culture",
    category: "Culture • Tips",
    tags: "Pidgin • Slang • Culture",
    readTime: "9 min read",
    date: "2026-09-05",
    content: `
<p><em>If you want to truly connect in Nigeria, you need Pidgin. It's the unofficial lingua franca — spoken in markets, on the streets, in music, and increasingly in business. Here's your starter pack, curated by yours truly.</em></p>

<div class="timmy-tip-box">
<h4>🤓 Timmy's First Tip</h4>
<p>Pidgin is informal. Don't use it with elders unless they use it first. It's perfect for friends, market vendors, and casual situations. <span class="nigerian-slang">You hear?</span></p>
</div>

<h2>Essential Pidgin phrases</h2>
<div class="phrase-box">
  <div class="phrase-item"><span class="phrase-native">How far?</span><span class="phrase-translation">Hello / What's up?</span><span class="phrase-pronunciation">How fah?</span></div>
  <div class="phrase-item"><span class="phrase-native">I dey</span><span class="phrase-translation">I'm fine / I'm here</span><span class="phrase-pronunciation">Ee day</span></div>
  <div class="phrase-item"><span class="phrase-native">Abeg</span><span class="phrase-translation">Please</span><span class="phrase-pronunciation">Ah-beg</span></div>
  <div class="phrase-item"><span class="phrase-native">Wahala</span><span class="phrase-translation">Trouble / Problem</span><span class="phrase-pronunciation">Wah-hah-lah</span></div>
  <div class="phrase-item"><span class="phrase-native">No wahala</span><span class="phrase-translation">No problem</span><span class="phrase-pronunciation">No wah-hah-lah</span></div>
  <div class="phrase-item"><span class="phrase-native">Oya</span><span class="phrase-translation">Let's go / Hurry up</span><span class="phrase-pronunciation">Oh-yah</span></div>
  <div class="phrase-item"><span class="phrase-native">Na so?</span><span class="phrase-translation">Is that so? / Really?</span><span class="phrase-pronunciation">Nah so?</span></div>
  <div class="phrase-item"><span class="phrase-native">I no sabi</span><span class="phrase-translation">I don't know</span><span class="phrase-pronunciation">Ee no sah-bee</span></div>
  <div class="phrase-item"><span class="phrase-native">You don try</span><span class="phrase-translation">You've tried / Well done</span><span class="phrase-pronunciation">You don try</span></div>
  <div class="phrase-item"><span class="phrase-native">Chop</span><span class="phrase-translation">Eat / Food</span><span class="phrase-pronunciation">Chop</span></div>
</div>

<h2>Putting it together</h2>
<div class="phrase-box">
  <div class="phrase-item"><span class="phrase-native">How far? I dey o.</span><span class="phrase-translation">What's up? I'm good.</span></div>
  <div class="phrase-item"><span class="phrase-native">Abeg, no give me wahala.</span><span class="phrase-translation">Please, don't give me trouble.</span></div>
  <div class="phrase-item"><span class="phrase-native">Oya make we chop!</span><span class="phrase-translation">Let's go eat!</span></div>
  <div class="phrase-item"><span class="phrase-native">I no sabi wetin you dey talk.</span><span class="phrase-translation">I don't know what you're saying.</span></div>
</div>

<h2>When NOT to use Pidgin</h2>
<ul>
  <li><strong>With elders (unless they initiate):</strong> Stick to formal greetings in Yoruba, Igbo, Hausa, or English.</li>
  <li><strong>In formal business meetings:</strong> Unless everyone is clearly using Pidgin, default to English.</li>
  <li><strong>At traditional ceremonies:</strong> Weddings, funerals, and title-taking events call for more formal language.</li>
</ul>

<h2>Why Pidgin matters more than you think</h2>
<p>Nigerian Pidgin has over 75 million speakers and is the most widely spoken language in Nigeria. It crosses ethnic lines — a Yoruba person and an Igbo person may default to Pidgin to communicate. It is not "broken English." It is its own language with its own grammar and rhythm. Learning it means you can talk to almost anyone in Nigeria.</p>

<h2>Three mistakes newcomers make</h2>
<ol>
  <li><strong>Overusing slang.</strong> Pidgin is not just slang. It has structure. Learn the structure first, then add the slang.</li>
  <li><strong>Using Pidgin with elders.</strong> See above. Read the room.</li>
  <li><strong>Being shy about it.</strong> Nigerians love when diaspora folks try. Nobody is judging your grammar — they're celebrating your effort.</li>
</ol>

<div class="timmy-tip-box">
<h4>🤓 Timmy's Final Wisdom</h4>
<p>"Pidgin is the glue that holds Nigeria together. It crosses ethnic lines and makes everyone feel like family. Use it with confidence, but read the room. And remember — <span class="nigerian-slang">you don try</span> for learning! <span class="nigerian-slang">Oya</span>, go practice!"</p>
</div>
`,
    cta: commonCta('pidgin', 'Pidgin')
  }

  // ⬇️ PART 2 CONTINUES IN NEXT MESSAGE ⬇️
];  ,

  // ============ 6. TEACHING DIASPORA KIDS ============
  {
    slug: 'teaching-diaspora-kids-nigerian-languages',
    title: "Teaching Your Diaspora Kids Nigerian Languages (Without the Tears)",
    description: "Practical strategies for teaching Yoruba, Igbo, or Hausa to diaspora kids. No pressure, no tears — just real methods that work for busy families.",
    keywords: "teach kids Yoruba, diaspora kids Nigerian language, raise bilingual kids, heritage language learning, teach Igbo to children, teach Hausa to kids, Nigerian parenting abroad",
    category: "Family • Tips",
    tags: "Parenting • Diaspora • Family",
    readTime: "10 min read",
    date: "2026-09-06",
    content: `
<p><em>I've seen it too many times — parents stressed because their kids won't speak Yoruba, Igbo, or Hausa at home. The kids feel pressured, the parents feel like they've failed. Let's reset. Here's what actually works, from someone who's worked with hundreds of diaspora families.</em></p>

<div class="timmy-tip-box">
<h4>🤓 Timmy's First Tip</h4>
<p>Your goal isn't to raise a professor of Yoruba linguistics. Your goal is <strong>connection</strong>. If your child can greet grandma properly and understand family jokes, that's a massive win. <span class="nigerian-slang">Small small!</span></p>
</div>

<h2>1. Make it fun, not a chore</h2>
<p>If language learning feels like homework, kids will resist. Instead:</p>
<ul>
  <li><strong>Play Nigerian music in the car.</strong> Burna Boy, Wizkid, Asa, Fela — let them absorb the sounds naturally.</li>
  <li><strong>Watch Nollywood with subtitles.</strong> Make it family movie night. Pause and explain phrases.</li>
  <li><strong>Cook Nigerian food together and name ingredients.</strong> "This is <em>ata</em> (pepper). This is <em>eja</em> (fish)."</li>
  <li><strong>Video calls with grandma.</strong> Even a five-minute call weekly where they only say greetings builds real habit.</li>
</ul>

<h2>2. The "one parent, one language" rule</h2>
<p>If one parent is fluent, have that parent speak <strong>only</strong> the Nigerian language at home. Kids will associate that parent with the language and switch naturally. Consistency is key. The other parent can speak English. Do not translate — let the child work it out. They will.</p>

<h2>3. Celebrate tiny wins</h2>
<p>When your child says "Ẹ káàrọ̀" correctly, celebrate like they won an award. Positive reinforcement works better than correction. Correct by modeling, not by criticizing. If they say it wrong, you repeat it right in your next sentence — don't make them repeat it as punishment.</p>

<h2>4. Connect language to identity</h2>
<p>Kids need to know <strong>why</strong> they're learning. Share stories about your childhood, your parents, your village. When they understand that language is the key to understanding their grandparents and their heritage, motivation shifts from external to internal. Take them to Nigeria if you can. Nothing accelerates language learning like standing in the middle of a family gathering where nobody speaks English.</p>

<h2>5. Don't force it at family gatherings</h2>
<p>Nothing kills confidence faster than being put on the spot: "Tell Auntie what you learned!" Let them warm up. Let them hear you speaking first. They'll join when ready. The more pressure, the more resistance.</p>

<h2>6. Use Timmy as a judgment-free practice partner</h2>
<p>Kids are often more comfortable practicing with an AI than with parents (who might correct them). Timmy's warm sarcasm never shames, and his celebrations feel genuine. Let them build confidence with Timmy before family gatherings. Ten minutes a day with Timmy beats one intense hour with a tutor every Sunday.</p>

<h2>7. Track progress without tracking it publicly</h2>
<p>Kids hate the "you should know this by now" comparison. Instead, track privately: how many new words this week? How many full sentences? Celebrate the trend, not the milestone. A child who learns 3 words a week learns 150 words a year. That's fluency territory in three years.</p>

<h2>What not to do</h2>
<ul>
  <li><strong>Don't mock their accent.</strong> Ever. They'll stop speaking entirely.</li>
  <li><strong>Don't compare them to cousins in Nigeria.</strong> Different context, different pace.</li>
  <li><strong>Don't make it about you.</strong> The goal is their connection to heritage, not your validation.</li>
  <li><strong>Don't give up.</strong> Kids who resist at 8 often embrace at 16. Keep the door open.</li>
</ul>

<div class="timmy-tip-box">
<h4>🤓 Timmy's Final Wisdom</h4>
<p>"I didn't speak Yoruba fluently until I was 25. My parents worried. But when I finally connected with the language, it was on my terms. Your kids will find their path too. Just keep the door open, keep it fun, and trust the process. <span class="nigerian-slang">You don try</span>, truly."</p>
</div>
`,
    cta: commonCta('yoruba', 'Yoruba')
  },

  // ============ 7. YORUBA FOR IN-LAWS, ADVANCED ============
  {
    slug: 'yoruba-phrases-for-wedding-inlaws',
    title: "Yoruba Phrases Every In-Law Should Know Before the Traditional Wedding",
    description: "Preparing for a Yoruba traditional wedding? Learn the phrases that will earn respect from the family — from knocking on the door to the final blessing.",
    keywords: "Yoruba wedding phrases, Yoruba traditional wedding, Yoruba in-laws, Yoruba engagement, Yoruba bride price, Yoruba wedding etiquette, learn Yoruba for wedding",
    category: "Yoruba • Culture",
    tags: "Weddings • Family • Etiquette",
    readTime: "11 min read",
    date: "2026-09-07",
    content: `
<p><em>Yoruba traditional weddings are not just ceremonies — they are negotiations wrapped in poetry, wrapped in respect, wrapped in <em>oríkì</em> (praise poetry). If you're marrying into a Yoruba family, you need more than greetings. You need the phrases that unlock the entire event.</em></p>

<div class="timmy-tip-box">
<h4>🤓 Timmy's First Tip</h4>
<p>The Yoruba wedding isn't one event. It's two — the <strong>engagement</strong> (ìgbéyàwó) and the <strong>traditional wedding</strong> proper. Each stage has its own vocabulary. Learn both before the day arrives. <span class="nigerian-slang">No room for guessing o!</span></p>
</div>

<h2>Stage 1: The introduction (Ìfẹ́núkan)</h2>
<p>This is when the groom's family formally visits the bride's family to state their intentions. You will hear:</p>
<div class="phrase-box">
  <div class="phrase-item"><span class="phrase-native">Ẹ jọ̀ọ́</span><span class="phrase-translation">Please (very polite)</span><span class="phrase-pronunciation">Eh joh-oh</span></div>
  <div class="phrase-item"><span class="phrase-native">Ẹ jẹ́ ká wọlé</span><span class="phrase-translation">Please let us enter</span><span class="phrase-pronunciation">Eh jeh kah woh-leh</span></div>
  <div class="phrase-item"><span class="phrase-native">Àwa wá fẹ́ ọmọ yín</span><span class="phrase-translation">We have come to seek your daughter</span><span class="phrase-pronunciation">Ah-wah wah feh oh-moh yeen</span></div>
  <div class="phrase-item"><span class="phrase-native">Ẹ ṣé fún ààyè yín</span><span class="phrase-translation">Thank you for your time</span><span class="phrase-pronunciation">Eh sheh foon ah-ah-yeh yeen</span></div>
</div>

<h2>Stage 2: The bride price negotiation (Ìdáná)</h2>
<p>This is where the families negotiate the traditional list of items. It's a formal back-and-forth, and the language is ritualistic:</p>
<div class="phrase-box">
  <div class="phrase-item"><span class="phrase-native">Kí ni ìdílé yín fẹ́?</span><span class="phrase-translation">What does your family require?</span><span class="phrase-pronunciation">Kee nee ee-dee-leh yeen feh</span></div>
  <div class="phrase-item"><span class="phrase-native">A ti mú ètò wa wá</span><span class="phrase-translation">We have brought our list</span><span class="phrase-pronunciation">Ah tee moo eh-toh wah wah</span></div>
  <div class="phrase-item"><span class="phrase-native">Ó dára</span><span class="phrase-translation">It is good / It is acceptable</span><span class="phrase-pronunciation">Oh dah-rah</span></div>
  <div class="phrase-item"><span class="phrase-native">Ẹ kú àárọ̀, àwa ti dé</span><span class="phrase-translation">Good morning, we have arrived (formally)</span><span class="phrase-pronunciation">Eh koo ah-ah-roh, ah-wah tee deh</span></div>
</div>

<h2>Stage 3: The blessing (Ìbùkún)</h2>
<p>The elders bless the couple. You will hear:</p>
<div class="phrase-box">
  <div class="phrase-item"><span class="phrase-native">Ẹ kú orí ire</span><span class="phrase-translation">Congratulations on a good destiny</span><span class="phrase-pronunciation">Eh koo oh-ree ee-reh</span></div>
  <div class="phrase-item"><span class="phrase-native">Kí ẹ lọ́mọ</span><span class="phrase-translation">May you have children</span><span class="phrase-pronunciation">Kee eh loh-moh</span></div>
  <div class="phrase-item"><span class="phrase-native">Kí ẹ pẹ́</span><span class="phrase-translation">May you live long</span><span class="phrase-pronunciation">Kee eh peh</span></div>
  <div class="phrase-item"><span class="phrase-native">Kí ẹ rí ire</span><span class="phrase-translation">May you see goodness</span><span class="phrase-pronunciation">Kee eh ree ee-reh</span></div>
  <div class="phrase-item"><span class="phrase-native">Àmín</span><span class="phrase-translation">Amen</span><span class="phrase-pronunciation">Ah-meen</span></div>
</div>

<h2>Stage 4: The prostration (Ìdọ̀bálẹ̀)</h2>
<p>The groom and his friends traditionally prostrate (lie flat) before the bride's family. As the groom, this is the moment you say:</p>
<div class="phrase-box">
  <div class="phrase-item"><span class="phrase-native">Ẹ kú iṣẹ́ ọwọ́</span><span class="phrase-translation">Well done for the work of your hands</span><span class="phrase-pronunciation">Eh koo ee-sheh oh-woh</span></div>
  <div class="phrase-item"><span class="phrase-native">Mo dúpẹ́ lọ́wọ́ yín</span><span class="phrase-translation">I am grateful to you</span><span class="phrase-pronunciation">Moh doo-peh loh-woh yeen</span></div>
  <div class="phrase-item"><span class="phrase-native">Ẹ gbà mí</span><span class="phrase-translation">Please accept me</span><span class="phrase-pronunciation">Eh gbah mee</span></div>
</div>

<h2>Stage 5: The celebration</h2>
<p>Once you've done the formal parts, the party begins. Phrases you'll need:</p>
<div class="phrase-box">
  <div class="phrase-item"><span class="phrase-native">Ẹ ṣé</span><span class="phrase-translation">Thank you</span><span class="phrase-pronunciation">Eh sheh</span></div>
  <div class="phrase-item"><span class="phrase-native">Ó dàbọ̀</span><span class="phrase-translation">Goodbye / Well done</span><span class="phrase-pronunciation">Oh dah-boh</span></div>
  <div class="phrase-item"><span class="phrase-native">Ẹ kú àjọ̀</span><span class="phrase-translation">Well done for attending the gathering</span><span class="phrase-pronunciation">Eh koo ah-joh</span></div>
  <div class="phrase-item"><span class="phrase-native">Ẹ kú ìgbéyàwó</span><span class="phrase-translation">Congratulations on the wedding</span><span class="phrase-pronunciation">Eh koo ee-gbeh-yah-woh</span></div>
</div>

<h2>Three things that matter more than words</h2>
<ol>
  <li><strong>Posture.</strong> Bow when greeting. Prostrate when the ritual calls for it. Physical humility speaks louder than perfect pronunciation.</li>
  <li><strong>Presence.</strong> Don't hover at the edges. Sit with the elders. Listen. Pour the palm wine. Being seen participating matters.</li>
  <li><strong>Dress.</strong> Wear agbada or aso-oke if the family provides it. Matching fabrics signal unity.</li>
</ol>

<div class="timmy-tip-box">
<h4>🤓 Timmy's Final Wisdom</h4>
<p>"The Yoruba traditional wedding is a marathon, not a sprint. You will be tired. You will be confused. You will smile until your jaw aches. But if you bow, greet, and say thank you in Yoruba — the family will remember. <span class="nigerian-slang">Small small, ẹ ṣé!</span>"</p>
</div>
`,
    cta: commonCta('yoruba', 'Yoruba')
  },

  // ============ 8. HOW TO SAY THANK YOU IN YORUBA ============
  {
    slug: 'how-to-say-thank-you-in-yoruba',
    title: "How to Say Thank You in Yoruba: 6 Different Ways (And When to Use Each)",
    description: "Learn how to say thank you in Yoruba — from Ẹ ṣé to A dúpẹ́, O ṣé, and more. Includes pronunciation, context, and cultural notes from Timmy.",
    keywords: "how to say thank you in Yoruba, Ẹ ṣé, Yoruba thank you, Yoruba gratitude, Yoruba phrases, learn Yoruba, Yoruba basics, Yoruba for beginners",
    category: "Yoruba • Basics",
    tags: "Phrases • Gratitude • Beginner",
    readTime: "7 min read",
    date: "2026-09-08",
    content: `
<p><em>You'd think "thank you" is simple. In Yoruba, it's a whole system. Get it wrong and you sound foreign. Get it right and elders will nod approvingly. Here's the complete guide.</em></p>

<div class="timmy-tip-box">
<h4>🤓 Timmy's First Tip</h4>
<p>Yoruba gratitude is layered. There's a "thank you" for peers, a "thank you" for elders, a "thank you" for a gift, and a "thank you" for effort. Learn them all. <span class="nigerian-slang">Small thing, big impression!</span></p>
</div>

<h2>1. Ẹ ṣé — Thank you (respectful)</h2>
<div class="phrase-box">
  <div class="phrase-item"><span class="phrase-native">Ẹ ṣé</span><span class="phrase-translation">Thank you (respectful)</span><span class="phrase-pronunciation">Eh sheh</span></div>
</div>
<p>The universal respectful "thank you." Use this with anyone older than you, anyone in authority, or anyone you don't know well. This is your default. When in doubt, use Ẹ ṣé.</p>
<p>Add "o" at the end to soften it: <strong>Ẹ ṣé o</strong>. This is what you'll hear in markets, homes, and formal settings.</p>

<h2>2. O ṣé — Thank you (informal)</h2>
<div class="phrase-box">
  <div class="phrase-item"><span class="phrase-native">O ṣé</span><span class="phrase-translation">Thank you (informal, to a peer)</span><span class="phrase-pronunciation">Oh sheh</span></div>
</div>
<p>Use only with peers — same age, close friends, younger siblings. Never with an elder. If you accidentally say "O ṣé" to a Yoruba parent, you'll get a look. Trust me.</p>

<h2>3. Ẹ ṣé gan-an — Thank you very much</h2>
<div class="phrase-box">
  <div class="phrase-item"><span class="phrase-native">Ẹ ṣé gan-an</span><span class="phrase-translation">Thank you very much</span><span class="phrase-pronunciation">Eh sheh gan-an</span></div>
</div>
<p><em>Gan-an</em> means "very" or "really." Add it when someone has done something significant — a gift, a favor, a meal. Use this when Ẹ ṣé isn't enough.</p>

<h2>4. A dúpẹ́ — We give thanks</h2>
<div class="phrase-box">
  <div class="phrase-item"><span class="phrase-native">A dúpẹ́</span><span class="phrase-translation">We give thanks</span><span class="phrase-pronunciation">Ah doo-peh</span></div>
</div>
<p>Literally "we give thanks." This is a communal thank you — used when leaving someone's home, ending a visit, or thanking a whole family. It includes your people, not just you. Use it when leaving an elder's presence.</p>

<h2>5. Ẹ ṣé fún ọjọ́ — Thank you for the day</h2>
<div class="phrase-box">
  <div class="phrase-item"><span class="phrase-native">Ẹ ṣé fún ọjọ́</span><span class="phrase-translation">Thank you for the day (gratitude for someone's time)</span><span class="phrase-pronunciation">Eh sheh foon oh-joh</span></div>
</div>
<p>This is gratitude for someone's time. Use it when someone has spent a whole day helping you, hosting you, or working with you. It acknowledges that time is the most valuable thing anyone can give.</p>

<h2>6. Ẹ ṣé púpọ̀ — Thank you plenty</h2>
<div class="phrase-box">
  <div class="phrase-item"><span class="phrase-native">Ẹ ṣé púpọ̀</span><span class="phrase-translation">Thank you very much (abundant gratitude)</span><span class="phrase-pronunciation">Eh sheh poo-poh</span></div>
</div>
<p><em>Púpọ̀</em> means "plenty" or "abundant." This is the heartfelt thanks. Use it when someone has gone above and beyond — paid your school fees, supported your business, blessed your marriage.</p>

<h2>Bonus: What about "You're welcome"?</h2>
<p>Yoruba doesn't have a direct "you're welcome" equivalent. The typical response to Ẹ ṣé is:</p>
<div class="phrase-box">
  <div class="phrase-item"><span class="phrase-native">Kò tọ́ pẹ̀</span><span class="phrase-translation">It's nothing / Don't mention it</span><span class="phrase-pronunciation">Koh toh peh</span></div>
  <div class="phrase-item"><span class="phrase-native">Ó dàbọ̀</span><span class="phrase-translation">It's fine / No problem</span><span class="phrase-pronunciation">Oh dah-boh</span></div>
</div>

<h2>The cultural rule</h2>
<p>In Yoruba culture, gratitude is not just polite — it is considered a moral obligation. Children are taught to say Ẹ ṣé from a very young age. Adults who don't express gratitude are seen as arrogant. So overuse it. Nobody in Yoruba culture has ever complained that someone said "thank you" too many times.</p>

<div class="timmy-tip-box">
<h4>🤓 Timmy's Final Wisdom</h4>
<p>"I once forgot to say Ẹ ṣé after a plate of àmàlà. My auntie waited. She didn't say anything. But her eyes said everything. I never forgot again. <span class="nigerian-slang">Ẹ ṣé</span> is not optional. Learn it. Use it. Always."</p>
</div>
`,
    cta: commonCta('yoruba', 'Yoruba')
  },

  // ============ 9. IGBO GREETINGS GUIDE ============
  {
    slug: 'igbo-greetings-guide',
    title: "Igbo Greetings Guide: How to Greet Anyone in Igbo (Correctly)",
    description: "Learn Igbo greetings for every situation — morning, afternoon, evening, elders, peers, and strangers. With pronunciation and cultural context from Timmy.",
    keywords: "Igbo greetings, how to greet in Igbo, Igbo phrases, Kedu, Igbo language, learn Igbo, Igbo for beginners, Igbo culture",
    category: "Igbo • Basics",
    tags: "Greetings • Beginner • Etiquette",
    readTime: "9 min read",
    date: "2026-09-09",
    content: `
<p><em>Igbo greetings are deceptively simple. You'll hear "Kedu?" everywhere and think "oh, I've got this." Then someone greets you with a phrase you've never heard and you freeze. Let's fix that.</em></p>

<div class="timmy-tip-box">
<h4>🤓 Timmy's First Tip</h4>
<p>In Igbo culture, greetings are about acknowledging the person, not just exchanging words. Take your time. Ask about family. Ask about work. Rush the greeting and you rush the relationship. <span class="nigerian-slang">No wahala, take your time!</span></p>
</div>

<h2>1. Kedu? — How are you?</h2>
<div class="phrase-box">
  <div class="phrase-item"><span class="phrase-native">Kedu?</span><span class="phrase-translation">How are you?</span><span class="phrase-pronunciation">Keh-doo</span></div>
</div>
<p>The most common Igbo greeting. Simple, direct, universal. Use it any time of day with anyone. The response is:</p>
<div class="phrase-box">
  <div class="phrase-item"><span class="phrase-native">Ọ dị mma</span><span class="phrase-translation">I am fine</span><span class="phrase-pronunciation">Oh dee mm-mah</span></div>
</div>

<h2>2. Ụtụtụ ọma — Good morning</h2>
<div class="phrase-box">
  <div class="phrase-item"><span class="phrase-native">Ụtụtụ ọma</span><span class="phrase-translation">Good morning</span><span class="phrase-pronunciation">Oo-too-too oh-mah</span></div>
</div>
<p>The polite morning greeting. Use it before noon. Note the double "ụ" sound at the start — take it slow.</p>

<h2>3. Ehihie ọma — Good afternoon</h2>
<div class="phrase-box">
  <div class="phrase-item"><span class="phrase-native">Ehihie ọma</span><span class="phrase-translation">Good afternoon</span><span class="phrase-pronunciation">Eh-hee-hee-eh oh-mah</span></div>
</div>
<p>Afternoon greeting. Same structure as morning. Ndi Igbo love this one — it shows you know the time-based greetings, not just "Kedu."</p>

<h2>4. Mgbede ọma — Good evening</h2>
<div class="phrase-box">
  <div class="phrase-item"><span class="phrase-native">Mgbede ọma</span><span class="phrase-translation">Good evening</span><span class="phrase-pronunciation">Mm-gbeh-deh oh-mah</span></div>
</div>
<p>Evening greeting. The "mgb" combination is tricky for English speakers. Practice: <em>mm-gbeh</em>.</p>

<h2>5. Nnọọ — Welcome</h2>
<div class="phrase-box">
  <div class="phrase-item"><span class="phrase-native">Nnọọ</span><span class="phrase-translation">Welcome</span><span class="phrase-pronunciation">N-noh-oh</span></div>
</div>
<p>When a visitor arrives at your home or office, "Nnọọ" is the warmest greeting you can offer. Elongate the "ọọ" to make it warmer. A short "nno" is casual; a long "nnọọọ" is heartfelt.</p>

<h2>6. Ị bịara? — Have you arrived?</h2>
<div class="phrase-box">
  <div class="phrase-item"><span class="phrase-native">Ị bịara?</span><span class="phrase-translation">Have you arrived? (Welcome to someone who just came)</span><span class="phrase-pronunciation">Ee bee-ah-rah</span></div>
</div>
<p>Technically "have you come?" — but it's used as a warm welcome to someone who has just arrived. Respond with "Ee, abịara m" — "Yes, I have arrived."</p>

<h2>7. Kọdị — Greetings to someone working</h2>
<div class="phrase-box">
  <div class="phrase-item"><span class="phrase-native">Kọdị</span><span class="phrase-translation">Greetings (to someone actively working)</span><span class="phrase-pronunciation">Koh-dee</span></div>
</div>
<p>This is a special greeting for someone you find working — cooking, sweeping, farming. It acknowledges their labor. The response is "Ọ dị" — "It is well."</p>

<h2>8. Ndeewo — Hello (to a group)</h2>
<div class="phrase-box">
  <div class="phrase-item"><span class="phrase-native">Ndeewo</span><span class="phrase-translation">Hello (to multiple people)</span><span class="phrase-pronunciation">Ndeh-eh-woh</span></div>
</div>
<p>Use this when greeting a group — a room full of people, a family gathering. It signals that you see everyone, not just one person.</p>

<h2>How to greet elders in Igbo</h2>
<p>Elders in Igbo culture are greeted first and greeted with extra respect. If you're entering a room with multiple people, greet the eldest first, then work your way down. Use the "ọma" greetings (morning/afternoon/evening) rather than just "Kedu" with elders — it's more formal.</p>

<h2>Response etiquette</h2>
<p>Always respond to a greeting before asking for anything. If someone says "Kedu?" and you launch into a request, you've skipped a step. Greetings come first, business comes second. This is non-negotiable in Igbo culture.</p>

<div class="timmy-tip-box">
<h4>🤓 Timmy's Final Wisdom</h4>
<p>"I once said 'Kedu' to an elder and he just looked at me. Then he said, 'Ụtụtụ ọma, nwa m.' That's when I learned — greet the time of day first, then ask how they are. <span class="nigerian-slang">Small small,</span> you go learn!"</p>
</div>
`,
    cta: commonCta('igbo', 'Igbo')
  },

  // ============ 10. YORUBA FOR BUSINESS ============
  {
    slug: 'yoruba-for-business-negotiations',
    title: "Yoruba for Business: Phrases That Win Deals in Lagos Markets",
    description: "Learn business Yoruba for negotiations, meetings, and market deals. Phrases that show respect, build trust, and get you better prices in Lagos.",
    keywords: "business Yoruba, Yoruba for business, Lagos market negotiation, Yoruba negotiation phrases, Yoruba for professionals, business in Nigeria, Yoruba market vocabulary",
    category: "Yoruba • Business",
    tags: "Business • Negotiation • Lagos",
    readTime: "10 min read",
    date: "2026-09-10",
    content: `
<p><em>Business in Lagos runs on relationships. And relationships in Yoruba culture start with respect — respect expressed through language. If you want to negotiate like a local, you need more than "how much?" You need the phrases that open doors.</em></p>

<div class="timmy-tip-box">
<h4>🤓 Timmy's First Tip</h4>
<p>In Yoruba business culture, the greeting <strong>is</strong> the negotiation. Before price, before terms, before anything, you greet. Skip the greeting and you've already lost. <span class="nigerian-slang">No rushing o!</span></p>
</div>

<h2>Opening a meeting</h2>
<div class="phrase-box">
  <div class="phrase-item"><span class="phrase-native">Ẹ káàrọ̀</span><span class="phrase-translation">Good morning</span><span class="phrase-pronunciation">Eh kah-oh-roh</span></div>
  <div class="phrase-item"><span class="phrase-native">Ẹ kú iṣẹ́</span><span class="phrase-translation">Well done for your work</span><span class="phrase-pronunciation">Eh koo ee-sheh</span></div>
  <div class="phrase-item"><span class="phrase-native">Ṣé àlàáfíà ni?</span><span class="phrase-translation">Is there peace? (Are things well?)</span><span class="phrase-pronunciation">Sheh ah-lah-ah-fee-ah nee</span></div>
  <div class="phrase-item"><span class="phrase-native">Àlàáfíà ni</span><span class="phrase-translation">There is peace (things are well)</span><span class="phrase-pronunciation">Ah-lah-ah-fee-ah nee</span></div>
</div>
<p>Start every business meeting with a greeting. Ask about peace, family, and health. Wait to be asked before stating your business.</p>

<h2>Asking for the price</h2>
<div class="phrase-box">
  <div class="phrase-item"><span class="phrase-native">Èló ni?</span><span class="phrase-translation">How much is it?</span><span class="phrase-pronunciation">Eh-loh nee</span></div>
  <div class="phrase-item"><span class="phrase-native">Èló ni èyí?</span><span class="phrase-translation">How much is this one?</span><span class="phrase-pronunciation">Eh-loh nee eh-yee</span></div>
  <div class="phrase-item"><span class="phrase-native">Kí ni iye rẹ̀?</span><span class="phrase-translation">What is its price?</span><span class="phrase-pronunciation">Kee nee ee-yeh reh</span></div>
</div>

<h2>Negotiating the price</h2>
<div class="phrase-box">
  <div class="phrase-item"><span class="phrase-native">Dín owó kù</span><span class="phrase-translation">Reduce the price</span><span class="phrase-pronunciation">Deen oh-woh koo</span></div>
  <div class="phrase-item"><span class="phrase-native">Ṣe é fún mi</span><span class="phrase-translation">Do it for me (give me a better deal)</span><span class="phrase-pronunciation">Sheh eh foon mee</span></div>
  <div class="phrase-item"><span class="phrase-native">Ẹ jọ̀ọ́, dín in kù</span><span class="phrase-translation">Please reduce it</span><span class="phrase-pronunciation">Eh joh-oh, deen in koo</span></div>
  <div class="phrase-item"><span class="phrase-native">Owó mi kò tó</span><span class="phrase-translation">My money is not enough</span><span class="phrase-pronunciation">Oh-woh mee koh toh</span></div>
</div>
<p>The tone matters here. Say it with a smile. Negotiation is a dance — aggressive tone shuts doors, playful tone opens them.</p>

<h2>Closing the deal</h2>
<div class="phrase-box">
  <div class="phrase-item"><span class="phrase-native">Mo gbà</span><span class="phrase-translation">I accept</span><span class="phrase-pronunciation">Moh gbah</span></div>
  <div class="phrase-item"><span class="phrase-native">Ó dára</span><span class="phrase-translation">It is good</span><span class="phrase-pronunciation">Oh dah-rah</span></div>
  <div class="phrase-item"><span class="phrase-native">Ẹ ṣé</span><span class="phrase-translation">Thank you</span><span class="phrase-pronunciation">Eh sheh</span></div>
  <div class="phrase-item"><span class="phrase-native">Ó dàbọ̀</span><span class="phrase-translation">Goodbye / Well done</span><span class="phrase-pronunciation">Oh dah-boh</span></div>
  <div class="phrase-item"><span class="phrase-native">A ó rìí ara wa</span><span class="phrase-translation">We will see each other again</span><span class="phrase-pronunciation">Ah oh ree-ee ah-rah wah</span></div>
</div>

<h2>Trust-building phrases</h2>
<p>Yoruba business culture values relationships over transactions. Say these to build trust:</p>
<div class="phrase-box">
  <div class="phrase-item"><span class="phrase-native">Mo gbẹ́kẹ̀lé yín</span><span class="phrase-translation">I trust you</span><span class="phrase-pronunciation">Moh gbeh-keh-leh yeen</span></div>
  <div class="phrase-item"><span class="phrase-native">Ẹ ṣe é fún mi lọ́wọ́</span><span class="phrase-translation">Please do it for me personally</span><span class="phrase-pronunciation">Eh sheh eh foon mee loh-woh</span></div>
  <div class="phrase-item"><span class="phrase-native">Àwa jẹ́ ọ̀rẹ́</span><span class="phrase-translation">We are friends</span><span class="phrase-pronunciation">Ah-wah jeh oh-reh</span></div>
</div>

<h2>The three rules of Yoruba business</h2>
<ol>
  <li><strong>Greet before business.</strong> Always. Even if you're in a hurry. Even if the deal is urgent.</li>
  <li><strong>Negotiate with warmth.</strong> Aggression = disrespect. Smile, joke, keep it light.</li>
  <li><strong>Follow up personally.</strong> A phone call the next day beats an email. A visit beats a phone call.</li>
</ol>

<div class="timmy-tip-box">
<h4>🤓 Timmy's Final Wisdom</h4>
<p>"I watched a Yoruba trader close a deal once that no foreigner could have closed. He greeted the buyer's family, asked about their mother, mentioned he'd heard about their daughter's wedding, then quoted a price 30% higher than the market — and the buyer paid it happily. Why? Because the greeting built more value than the discount. <span class="nigerian-slang">That's business o!</span>"</p>
</div>
`,
    cta: commonCta('yoruba', 'Yoruba')
  }

];