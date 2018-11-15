import { Router } from 'express';
import Table from '../table';
let router = Router();

let blogsTable = new Table('blogs');

router.get('/:id?', (req, res) => {
    if(req.params.id) {
        blogsTable.getOne(req.params.id)
            .then(results => res.send(results))
            .catch(e => res.send(e));
    } else {
        blogsTable.getAll()
            .then(results => res.send(results))
            .catch(e => res.send(e));
    };
});

router.post('/', (req,res) => {
    
    blogsTable.insert(req.body)
    .then(results => res.send(results))
    console.log(results)
    .catch(e => res.send(e));
})

export default router;