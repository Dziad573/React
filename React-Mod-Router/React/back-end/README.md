Ten folder zawiera prosty serwer, dzięki któremu będziemy mogli odczytać listę folderów oraz notatek. Umożliwia on też tworzenie nowych folderów i notatek oraz edycje już isniejących notatek.

Żeby uruchomić server wywołaj w terminalu na poziomie folderu `back-end` komendy:

```command
npm i
npm run dev
```

Możesz również wywołać te same komendy folder wyżej - wtedy uruchomisz jednocześnie server i projekt frontendowy.

### Model danych

#### Foldery

Elementy zwracane i zapisywane do serwera mają następujące pola:

```json
{
    "id": 1,
    "name": "Folder nr. 1"
}
```

#### Notatki

Elementy zwracane i zapisywane do serwera mają następujące pola:

```json
{
    "id": 1,
    "title": "Tytuł notatki nr. 1",
    "body": "Treść notatki nr. 1"
}
```

### Opis endpointów

| Ścieżka             | Metoda   | Jak działa?                                                                                                                    |
| ------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------ |
| /folders            | `GET`    | Pobiera wszystkie foldery                                                                                                      |
| /folders            | `POST`   | Dodaje nowy folder. Wymagania przesłania body z danymi nowego folderu, np: `{name: 'Nowy folder'}`                             |
| /notes?folderId=XYZ | `GET`    | Pobiera notatki z folderu o ID `XYZ`                                                                                           |
| /notes              | `POST`   | Dodaje nową notatkę. Wymagania przesłania body z danymi nowej notatki, np: `{title: 'Nowa notatka', body: 'Treść notatki'}`    |
| /notes/XYZ          | `GET`    | Pobiera notatkę o ID XYZ.                                                                                                      |
| /notes/XYZ          | `PATCH`  | Aktualizuje notatkę o ID `XYZ`. Wymagania przesłania body nowymi danymi notaki np: `{title: 'Nowy tytuł', body: 'Nowa treść'}` |
| /notes/XYZ          | `DELETE` | Kasuje notatkę o ID `XYZ`                                                                                                      |

### Przykłady użycia

<details>
 <summary> [GET] - <i>/folders</i>  </summary>
<br>
Wywołanie:

```js
fetch('http://localhost:3000/folders`)
    .then(res => res.json())
    .console.log(res => res.json());
```

Konsola:

```js
[
    {
        id: 1,
        name: "Folder nr. 1",
    },
    {
        id: 2,
        name: "Folder nr. 2",
    },
];
```

</details>
<details>
 <summary> [POST] - <i>/folders</i>  </summary>
<br>
Wywołanie:

```js
fetch("http://localhost:3000/folders", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: "Nowy folder" }),
})
    .then((res) => res.json())
    .console.log((res) => res.json());
```

Konsola:

```js
[
    {
        id: 1,
        name: "Nowy folder",
    },
];
```

</details>

<details>
 <summary> [GET] - <i>/notes?folderId=XYZ</i>  </summary>
<br>
Wywołanie:

```js
    fetch('http://localhost:3000/notes?folderId=1`)
        .then(res => res.json())
        .console.log(res => res.json());
```

Konsola:

```js
[
    {
        id: 1,
        title: "Tytuł notatki nr. 1",
        body: "Treść notatki nr. 1",
    },
    {
        id: 2,
        title: "Tytuł notatki nr. 2",
        body: "Treść notatki nr. 2",
    },
];
```

</details>

<details>
 <summary> [POST] - <i>/notes</i>  </summary>
<br>
Wywołanie:

```js
fetch("http://localhost:3000/notes", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        title: "Tytuł nowej notatki",
        body: "Treść nowej notatki",
    }),
})
    .then((res) => res.json())
    .console.log((res) => res.json());
```

Konsola:

```js
{
    "title": "Tytuł nowej notatki",
    "body": "Treść nowej notatki"
}
```

</details>

<details>
 <summary> [GET] - <i>/notes/XYZ</i>  </summary>
<br>
Wywołanie:

```js
fetch("http://localhost:3000/notes/1")
    .then((res) => res.json())
    .console.log((res) => res.json());
```

Konsola:

```js
{
    "id": 1,
    "title": "Tytuł notatki nr. 1",
    "body": "Treść notatki nr. 1"
}
```

</details>

<details>
 <summary> [PATCH] - <i>/notes/XYZ</i>  </summary>
<br>
Wywołanie:

```js
fetch("http://localhost:3000/notes/1", {
    method: "PATCH",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        title: "Zaktualizowany tytuł",
        body: "Zaktualizowana treść",
    }),
})
    .then((res) => res.json())
    .console.log((res) => res.json());
```

Konsola:

```js
{
    "id": 1,
    "title": "Zaktualizowany tytuł",
    "body": "Zaktualizowana treść"
}
```

</details>
