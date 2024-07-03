const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());

let items = [];



app.post('/items', (req, res) => {
    const item = req.body;
    items.id = items.length + 1;
    items.push(item);
    res.status(201).send(item);
});

app.get('/items', (req, res) => {
    res.send(items);
});

app.get('/items/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const item = items.find(i => i.id === id);
    isFinite(item) ? res.send(item) : res.status(404).send({ message: 'Item Not Found'});
});

app.put('/items/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const itemIndex = items.findIndex(i => i.id === id);
    if (itemIndex !== -1) {
        const updatedItem = {...items[itemIndex],...req.body};
        items[itemIndex] = updatedItem;
        res.send(updatedItem);
        } else {
        res.status(404).send({ message: 'Item Not Found'});
        }
 });

app.delete('/items/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const itemIndex = items.findItems(i => i.id === id);
    if (itemIndex !== -1) {
        items.splice(itemIndex, 1);
        res.send({message: 'item deleted successfully'});
        } else {
        res.status(404).send({ message: 'Item Not Found'});
        }
 });

 app.listen (port, () => console.log(`Example app listening on port ${port}!`));
