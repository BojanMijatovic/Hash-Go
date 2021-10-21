# Hash&GO aplikacija

## Namenjena je za upotrebu plaćanja Bitcoin valutom putem POS terminala.

Zadatak sam izvršio na sledeći način:

### za izradu koristio sam biblioteke i verzije istih:

    "axios": "0.23.0",
    "firebase": "8.10.0",
    "qrcode": "1.4.4",
    "react": "17.0.2",
    "react-dom": "17.0.2",
    "react-router-dom": "5.3.0",

### Proces te tekao na sledeći način:

Prvo sam kreirao komponentu za prijavu korisnika Login.js i implementirao firebase kao backend deo i koristio za autentifikaciju korisnika uz pomoć metoda, i samo odjavljivanje istih.

    auth()
    createUserWithEmailAndPassword
    signOut()

Nakon toga sam implementirao QR code i dodao API sa kojim bih mogao uporediti cenu bitcoina u odnosu na dinare

API -- 'https://bitcoinaverage-global-bitcoin-index-v1.p.rapidapi.com/indices/global/ticker/BTCRSD',
U komponenti Terminal.js sam se poslužio axios bibliotekom kako bih lakše pozvao gore navedeni API.

Zatim sam napravio scenario kako je transakcija bila uspešna.

### Aplikacija je testirana na google i mozilla pretraživačima u svim trenutno koristećim rezolucijama

### od uredjaja testirana je na laptopu , tabletu i mobilnom telefonu

Što se tiče dizajna, bio sam malo slobodniji pa sam improvizovao neki, nije najbolje što sam mogao :)
Koristio sam se scss metodom za pisanje.  
U dizajnu sam gledao da napravim komponente koje bih mogao na više mesta ponovo koristiti. i tako sam i gledao da napravim strukturu.

## Za testiranje možete koristiti

username test@test.com sa šifrom 123456

### sama aplikacija i live na linku https://hash-go-bojanmijatovic.vercel.app/

Za dalje sugestije i pitanja možete mi slobodno pisati na bojan.freelance.jobs@gmail.com
