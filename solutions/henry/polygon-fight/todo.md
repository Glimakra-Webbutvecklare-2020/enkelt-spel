# General

-   [] Användaren ska kunna starta ett spel
-   [] Spelaren ska kunna skapa en karaktär
-   [] Användaren ska kunna starta om ett spel utan att ladda om sidan.
-   [] Användaren ska kunna ha olika speldrag.
-   [] Användaren ska få en fördröjd feedback efter speldrag om spelet tillstånd.
-   [] Dator-motståndarens motdrag ska bero på ett random värde.
-   [] Dator-motståndarens karaktärs properties ska slumpas för varje spelrunda.

# Character

-   [] Karaktären ska minst ha tre properties
-   [] “Health”, när en karaktär har 0 Health har spelaren förlorat
-   [] “Attack Power”, ska tillsammans med en slumpad faktor göra skada med förmågan Attack.
-   [] “Defence Power”, ska tillsammans med en slumpad faktor öka chansen att förmågan Evade undviker motståndarens attack
-   [] Karaktären ska ha minst två förmågor

# Mechanics

-   [] Attack, ger skada på en annan karaktär enligt karaktärens “Attack Power” och en random faktor mellan 0.0 - 1.0.
-   [] Evade, Nästa gång en attack kommer mot spelaren så finns det en chans att motspelarens attack inte gör skada. Den chansen ska bestämmas med Defence Power och en random faktor mellan 0.0 - 1.0.
-   [] Användaren ska kunna fördela sin styrka på properties. T.ex 7 poäng i Attack Power och 3 poäng i Defence Power.
