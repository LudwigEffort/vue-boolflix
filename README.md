
# Table of Contents

-   [Lecture Info](#orga219e11)
1.  [API The Movie DB](#orged22075)
    1.  [Richiesta API](#orgb6ec1af)
        1.  [Richiesta GET Movies or TV](#org86dc4c0)
        2.  [Richiesta GET Search](#orge258e1f)
    2.  [Fare una richiesta API tramite AXIOS](#orgbe7e45e)
2.  [Coding Boolflix](#orga3830f2)
    1.  [Sommario sviluppo](#org8b1bcce)
        1.  [Schema applicazione](#org90439a9)
        2.  [Schema applicazione con Props e $Emit](#org42c509a)
        3.  [Schema apllicazione con il codice](#org9015a70)
        4.  [Todo list](#org87c3cfa)
    2.  [Milestone 1](#orga26087c)
        1.  [Creazione componenti](#org2df1cbc)
        2.  [Script form e richiesta Axios (TODO)](#orgc752f8a)
        3.  [Milestone 2](#org88e15cf)
        4.  [Milestone 3](#org14a9823)
        5.  [Mileston 4](#org71f1a93)



<a id="orga219e11"></a>

# Lecture Info


<a id="orged22075"></a>

# API The Movie DB


<a id="orgb6ec1af"></a>

## Richiesta API

Dopo la registrazione al sito otteniamo il link per fare le richieste API. Con questo link [Documentation TMDB](https://developers.themoviedb.org/3/getting-started/introduction), accediamo alla documentazione dell&rsquo;API.


<a id="org86dc4c0"></a>

### Richiesta GET Movies or TV

Per fare una richiesta GET per i dettagli dei film, andiamo nella documentazione, nealla sezione **movies** e selezioniamo la voce **try it out**.

![img](./img/tmdv_movies.png "Questa è una richiesta GET per i films.")
La chiave che ci interessa è **/movie/{movie<sub>id</sub>}**, dove **movie** è la risora del sito che ci permette di restringere il campo nei film. I parametri che vengono dopo il punto interrogativo sono le query string.


<a id="orge258e1f"></a>

### Richiesta GET Search

Per fare una ricerca bisogna inserire la chiave **/search/movie**, e dobbiamo passare la stringa di ricerca tramite una **query string**. Possiamo inserire più parametri, come la lingua di output, seguendo la relativa documentazione di **TMDB**.

![img](./img/tmdb_search.png "Richiesta GET per ricerca.")


<a id="orgbe7e45e"></a>

## Fare una richiesta API tramite AXIOS

In un progetto VUE, per fare una richiesta API possiamo usare la libreria [Axios.](https://axios-http.com/docs/intro)
Dopo l&rsquo;installazione tramite nodejs, possiamo usare Axios in due modi:

1.  Modo
    
        let searchStr = 'ciao';
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=b935f03551ba44af8b30664391480eca&query=${searchStr}`)
2.  Modo
    
        let searchStr = 'ciao';
        axios.get('https://api.themoviedb.org/3/search/movie', {
            params: {
                api_key: '{personal api key}',
                query: searchStr,
                language: 'it-IT',
            }
        })


<a id="orga3830f2"></a>

# Coding Boolflix


<a id="org8b1bcce"></a>

## Sommario sviluppo


<a id="org90439a9"></a>

### Schema applicazione

Inserire schema app da driagrams.net


<a id="org42c509a"></a>

### Schema applicazione con Props e $Emit

![img](./img/Boolflix.jpg "Vue Booflix con Props e $Emit")


<a id="org9015a70"></a>

### Schema apllicazione con il codice

Inserire schama app con il codice come ha fatto Henri


<a id="org87c3cfa"></a>

### Todo list

-   [-] Installare librerie
    -   Installare Vue.cli
    -   Installare Axios
    -   Installare Bootstrap
    -   [ ] Installare vue-lang-code-flags
    -   [ ] Installare font per valutazione con stelle
-   Milestone 1
-   Milestone 2
-   Milestone 3
-   Milestone 4
-   [ ] Milestone 5 (opzionale)
-   [ ] Milestone 6 (opzionale)


<a id="orga26087c"></a>

## Milestone 1


<a id="org2df1cbc"></a>

### Creazione componenti

Come primo passo dobbiamo creare i componenti principali della nostra applicazione, in questo caso sarranno due:

-   **Header**, con dentro il logo, il form di ricerca e il select con i generi.
-   **Main**, dove si stamperanno le varie card con i dati dei film e delle serie TV, (inserire card come componenti?).


<a id="orgc752f8a"></a>

### Script form e richiesta Axios (TODO)

Il **form**, ogni volta che premiamo invio o clicciamo il tasto cerca, passerà la stringa all&rsquo;**App** tramite **$emit**, l&rsquo;**App** è il componente che farà la richiesta **GET** tramite **Axios** e passera i dati al **main** tramite **props**.
Iniziamo scriptando il form dentro l&rsquo;header.

![img](./img/emit_form_header.png "Script form")
Lo script funziona in questo modo:

1.  Con la stringa **1**, leghiamo il **form** con l&rsquo;**emit**, il **prevent** serve per prevenire il normale comportamento del **form**. L&rsquo;**emit** è composto dal nome dell&rsquo;evento (in questo caso &rsquo;querySearch&rsquo;) e dal valore da passare al genitore (in questo caso la **queryString**).
2.  Con la stringa **2**, leghiamo il **form** con l&rsquo;**input** tramite un **v-model** che va a salvare i dati dentro i **data** della stringa **3**.
3.  Ora dobbiamo legare l&rsquo;**emit** del **form** con il genitore (**App**) tramite la stringa **4**, con questa stringa **JS** quando ciama l&rsquo;evento **search**, riceve i dati dall&rsquo;**emit** dell&rsquo;**header** (in questo caso la **queryString**). Per raccogliere il dato intercettato lo dobbiamo inserire dentro il parametro della funzione **search** dei **methods** ovvero il blocco codice **5** (come parametro possiamo inserire qualsiasi nome, non importa perché l&rsquo;**emit** ha passato tutti i dati).
4.  Dopo aver collegato l&rsquo;emit dell&rsquo;header con il suo genitore, dobbiao fare la richiesta **API** dentro il metodo **search**, blocco codice **6**.
5.  Installiamo e importiamo axios, stringa **6**.

Ora analizziamo il blocco codice **7**:

1.  Il blocco


<a id="org88e15cf"></a>

### Milestone 2

Installiamo la libreria delle bandire (inserire link libreria) e creiamo un nuovo componente **ItemCard**.


<a id="org14a9823"></a>

### Milestone 3

Inseriamo le stelline


<a id="org71f1a93"></a>

### Mileston 4

Usiamo l&rsquo;esempio di w3schools per creare una card che flippa con l&rsquo;hover ed lo integriamo con Bootstrap.

