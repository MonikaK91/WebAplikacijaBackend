import express from 'express';
//import cors from 'cors';

const app = express();
const port = 3000;

//app.use(cors());
app.use(express.json());

app.post('/signup', (req, res) => { 
	res.json({});
});
app.post('/login', (req, res) => {
	res.json({});
});
//dohvat svih recepta
app.get('/recepti', (req, res) => { 
	res.json({})
}); 
//kreiranje novog recepta
app.post('/recepti', (req, res) => {
	res.json({})
}); 
//dohvat jednog recepta
app.get('/recepti/:id', (req, res) => {
	res.json({})
});
//dohvat svih recepta određenog korisnika
app.get('/recepti/:username', (req, res) => {
	res.json({})
});
//dohvat svih komentara nekog recepta
app.get('/recepti/:id/komentari', (req, res) => {
	res.json({})
});
//kreiranje novog komentara na recept
app.post('/recepti/:id/komentari', (req, res) => {
	res.json({})
});
//kreiranje nove ocjene na recept
app.post('/recepti/:id/ocjene', (req, res) => {
	res.json({})
});
//dohvat svih recepta po odabranim opcijama od strane korisnika
app.get('/recepti/:filteri', (req, res) => {
	res.json({});
});
//brisanje recepta
app.delete('/recepti/:id', (req, res) => {
	res.json({});
});
//brisanje komentara 
app.delete('/recepti/:id/komentari/:id_komentara', (req, res) => {
	res.json({});
});
//mijenjanje lozinke
app.patch('/korisnici/:id_korisnika', (req, res) => {
    res.json({});
});
//mijenjanje osobnih podataka
app.put('/korisnici/:id_korisnika', (req, res) => {
    res.json({});
});


app.listen(port, () => console.log(`Slušam na portu ${port}!`))