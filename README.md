### ! UPDATE !

Przed wejsciem na strone lepiej wylaczyc nie ktore adblocki, zauwazylem ze blokuja one pobieranie danych z unsplasha

## Zadanie rekrutacyjne

Strona hostowna na netlify

[DEMO](https://nifty-ramanujan-483d98.netlify.app/)

## Instalacja

npm install

w pliku .env znajduje się już klucz, aby przyspieszyć instalacje

```javascript
REACT_APP_UNSPLASH_KEY = "Access Key";
```

## uruchomienie

npm start

## produkcja

npm run build

### Co nie co o stronie

- Na stronie głównej mamy wyszukiwarke, po wpisaniu min. 3 znaków wyszukiwarka pokazuje podpowiedzi.
- Pobrane pliki przekonwerowałem do pliku json -> data/keywords.json
- Użyłem wersji [list](https://github.com/unsplash/datasets), większość podpowiedzi jest po angielsku.
- W plik pages/Results.js sa zakomentowane pobieranie kafelekow (podobnych hasel), niestety dopiero bo drugim wyszukaniu pojawiaja sie kafelki. Oczywiście nie dodwałem do nich żadnego efektu.
- Dodatkowo używałem axiosa, styled-components, react-autosuggest

## dodatkowo

- chcialem dodac historie wyszukiwan, ktora zapisywal bym w localStorage,
- Dodac poprawnie kafelki na podstronie /results bezposrednia pod inputem
