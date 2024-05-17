const express = require('express')
const fetch = require('node-fetch')

const app = express()
const api_key = '9a1d8a66f7b8a9db899f27a7d8ce2ba4'
const api_token = 'ATTAf7676537f755429e0212ac4cf468acfb140b5a685574c682deee3d2149220784B98F381D'


const get_board = (board_id) => {
    console.log(board_id)
    return new Promise((resolve, reject) => {
        fetch(`https://api.trello.com/1/boards/${board_id}?key=${api_key}&token=${api_token}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            console.log(
            `Response: ${response.status} ${response.statusText}`
            );
            return response.text();
        })
        .then(text => resolve(text))
        .catch(err => reject(err));
    })
}

const create_board = (board_name) => {
    return new Promise((resolve, reject) => {
        fetch(`https://api.trello.com/1/boards/?name=${board_name}&key=${api_key}&token=${api_token}`, {
            method: 'POST'
        })
        .then(response => {
            console.log(
            `Response: ${response.status} ${response.statusText}`
            );
            return response.text();
        })
        .then(text => resolve(text))
        .catch(err => reject(err))
    })
}

const get_lists = (board_id) => {
    return new Promise((resolve, reject) => {
        fetch(`https://api.trello.com/1/boards/${board_id}/lists?key=${api_key}&token=${api_token}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            console.log(
            `Response: ${response.status} ${response.statusText}`
            );
            return response.text();
        })
        .then(text => resolve(text))
        .catch(err => reject(err));
    })
}

const create_list = (board_id, list_name) => {
    return new Promise((resolve, reject) => {
        fetch(`https://api.trello.com/1/boards/${board_id}/lists?name=${list_name}&key=${api_key}&token=${api_token}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            console.log(
            `Response: ${response.status} ${response.statusText}`
            );
            return response.text();
        })
        .then(text => resolve(text))
        .catch(err => reject(err));
    })
}

const get_cards = (list_id) => {
    return new Promise((resolve, reject) => {
        fetch(`https://api.trello.com/1/lists/${list_id}/cards?key=${api_key}&token=${api_token}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            console.log(
            `Response: ${response.status} ${response.statusText}`
            );
            return response.text();
        })
        .then(text => resolve(text))
        .catch(err => reject(err));
    })
}

const create_card = (list_id) => {
    return new Promise((resolve, reject) => {
        fetch(`https://api.trello.com/1/cards?idList=${list_id}&key=${api_key}&token=${api_token}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            console.log(
            `Response: ${response.status} ${response.statusText}`
            );
            return response.text();
        })
        .then(text => resolve(text))
        .catch(err => reject(err));
    })
}

const get_all_cards = (board_id) => {
    return new Promise((resolve, reject) => {
        fetch(`https://api.trello.com/1/boards/${board_id}/cards?key=${api_key}&token=${api_token}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            console.log(
            `Response: ${response.status} ${response.statusText}`
            );
            return response.text();
        })
        .then(text => resolve(text))
        .catch(err => reject(err));
    })
}

app.get('/board/:board_id', (req, res) => {
    const board_id = req.params.board_id
    get_board(board_id).then(data => {
        res.json(data)
    }).catch(err => {
        res.json({
            'error': err
        })
    })
})


app.post('/board/:board_name', (req, res) => {
    const board_name = req.params.board_name
    create_board(board_name).then(data => {
        res.json(data)
    }).catch(err => {
        res.json({
            'error': err
        })
    })
})


app.get('/list/:board_id', (req, res) => {
    const board_id = req.params.board_id
    get_lists(board_id).then(data => {
        res.json(data)
    }).catch(err => {
        res.json({
            'error': err
        })
    })
})


app.post('/list/:board_id/:list_name', (req, res) => {
    const board_id = req.params.board_id
    const list_name = req.params.list_name
    create_list(board_id, list_name).then(data => {
        res.json(data)
    }).catch(err => {
        res.json({
            'error': err
        })
    })
})


app.get('/card/:list_id', (req, res) => {
    const list_id = req.params.list_id
    get_cards(list_id).then(data => {
        res.json(data)
    }).catch(err => {
        res.json({
            'error': err
        })
    })
})


app.post('/card/:list_id', (req, res) => {
    const list_id = req.params.list_id
    create_card(list_id).then(data => {
        res.json(data)
    }).catch(err => {
        res.json({
            'error': err
        })
    })
})


app.get('/cards/:board_id', (req, res) => {
    const board_id = req.params.board_id
    get_all_cards(board_id).then(data => {
        res.json(data)
    }).catch(err => {
        res.json({
            'error': err
        })
    })
})


app.listen(5000, err => {
    console.log('listening at port 5000')
})