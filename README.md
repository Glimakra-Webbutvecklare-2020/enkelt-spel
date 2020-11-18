# Ett Enkelt Spel för Javascript
Case 2 för JavaScript

# Introduktion
I detta caset ska vi träna på ett enkelt spel. Denna gången får ni två alternativ hur utmanade det ska vara. Utöver att kraven är uppfyllda så har ni fritt fram att lägga till funktionaliteter.

# Uppgift
Nedan finns två alternativ till ett enkelt spel. Båda två kräver följande:
-  Användaren ska kunna starta ett spel
-  Användaren ska kunna starta om ett spel utan att ladda om sidan.
-  Användaren ska kunna ha olika speldrag.
- Användaren ska få en fördröjd feedback efter speldrag om spelet tillstånd.
- Dator-motståndarens motdrag ska bero på ett random värde.

## Lättare: bag Paper Scissor
- Användaren ska kunna välja **minst tre** olika alternativ
- Varje speldrag ska vinna över ett drag och förlora mot ett annat.

## Svårare: Pokemon fight
- Spelaren ska kunna skapa en karaktär
    - Karaktären ska minst ha tre properties 
        - “Health”, när en karaktär har 0 Health har spelaren förlorat
        - “Attack Power”, ska tillsammans med en slumpad faktor göra skada med förmågan `Attack`.
        - “Defence Power”, ska tillsammans med en slumpad faktor öka chansen att förmågan `Evade` undviker motståndarens attack
    - Karaktären ska ha minst två förmågor
        - `Attack`, ger skada på en annan karaktär enligt karaktärens “Attack Power” och en random faktor mellan 0.0 - 1.0.
        - `Evade`, Nästa gång en attack kommer mot spelaren så finns det en chans att motspelarens attack inte gör skada. Den chansen ska bestämmas med `Defence Power` och en random faktor mellan 0.0 - 1.0.
    - Användaren ska kunna fördela sin styrka på properties. T.ex 7 poäng i `Attack Power` och 3 poäng i `Defence Power`. 
- Dator-motståndarens karaktärs properties ska slumpas för varje spelrunda.

# Inlämning
- Klona GitHub repot.
- Lägg in din mapp i mappen `solutions` med som ska innehålla en html fil `index.html` och en `script.js`
- Länka din `solutions/<DIN-MAPP>/index.html` till  `./index.html`

# Resurser
- [The Js Way](https://github.com/thejsway/thejsway)
- [MSN Web Docs: Math Random](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
- [W3Schools setTimeout](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
- [Henrys setTimeout kod](https://gist.github.com/frozenbanana/ba4998d3903891e3caeb3fb2f087a390)
- [Henrys Math.random kod](https://gist.github.com/frozenbanana/e0207ec20371ade00463013fdcca35b6)


