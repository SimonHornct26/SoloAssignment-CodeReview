nach dem Entpacken: 
npm isntall
npm run dev 
Dann die angezeigte URL öffnen

Die Logik liegt im Composable useNotes.js, damit App.vue übersichtlich bleibt und sich die Notizfunktionen wie Erstellen, Löschen und Suchen wiederverwenden lassen. Dadurch sind Darstellung und Logik getrennt und der Code ist leichter zu verstehen und zu testen.

Fragen:
1. Warum darf NoteCard die Notiz-Prop nicht selbst verändern?

Props sollen in Vue nicht direkt von der Kind-Komponente verändert werden. NoteCard bekommt die Notiz von App.vue. Wenn sie etwas ändern möchte, schickt sie stattdessen mit emit() ein Event an App.vue. Dort wird die Änderung durchgeführt.

2. Was passiert, wenn zwei Komponenten dasselbe useNotes() aufrufen?

In meinem Code würden sie nicht automatisch dieselben Notizen teilen. Jeder Aufruf von useNotes() erstellt seine eigene notes-Referenz. Allerdings greifen beide auf denselben localStorage-Eintrag zu, sodass die Daten beim erneuten Laden wieder aus demselben Speicher kommen.

3. Wozu dient das Note-Interface?

Das Note-Interface beschreibt, wie eine Notiz aufgebaut sein soll: id, title, content und tags. Dadurch hilft TypeScript, Fehler früh zu erkennen und den Code verständlicher zu machen. Die App würde auch ohne das Interface laufen, weil es zur Laufzeit nicht benötigt wird.
