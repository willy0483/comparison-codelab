
// variabler du skal bruge i din kode...
const A = 10;
const B = 30;
const C = '30';
const D = 10;
const E = 40;
const F = 50;
// Opgave 1: skriv et expression der viser true når A er lig med B eller A er lig med D.

if ( A == B || A == D) {
    console.log('statement true!');
}


//opgave 2: skrive en If then statement der bliver TRUE når  A er større end B og A er mindre end E.

if (A >= B && A <= E) {
    console.log('statement true!');
}


//opgave 3: Skriv en If then statement med  && og  || der kun er sand når alle expressions er sande.

if ((A <= B && A <= D) || (D >= E && A <= D)) {
    console.log('statement true!');
}




//opgave 4: Skriv en If then statement der kan finde ud af om F er "undefined" eller har en værdi, ved at bruge !.

if (!F) {
    console.log('statement true!');
}