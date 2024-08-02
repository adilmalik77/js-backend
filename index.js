require('dotenv').config()

const express = require('express')

const app = express()

const port = 3000

const githubData = {
        "login": "adilmalik77",
        "id": 164936849,
        "node_id": "U_kgDOCdS8kQ",
        "avatar_url": "https://avatars.githubusercontent.com/u/164936849?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/adilmalik77",
        "html_url": "https://github.com/adilmalik77",
        "followers_url": "https://api.github.com/users/adilmalik77/followers",
        "following_url": "https://api.github.com/users/adilmalik77/following{/other_user}",
        "gists_url": "https://api.github.com/users/adilmalik77/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/adilmalik77/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/adilmalik77/subscriptions",
        "organizations_url": "https://api.github.com/users/adilmalik77/orgs",
        "repos_url": "https://api.github.com/users/adilmalik77/repos",
        "events_url": "https://api.github.com/users/adilmalik77/events{/privacy}",
        "received_events_url": "https://api.github.com/users/adilmalik77/received_events",
        "type": "User",
        "site_admin": false,
        "name": "Adil Malik",
        "company": null,
        "blog": "",
        "location": null,
        "email": null,
        "hireable": null,
        "bio": null,
        "twitter_username": null,
        "public_repos": 2,
        "public_gists": 0,
        "followers": 0,
        "following": 0,
        "created_at": "2024-03-25T19:27:10Z",
        "updated_at": "2024-07-21T18:52:49Z"
}
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/instagram', (req, res) => {
    res.send('adilmalik-g786')
})

app.get('/login', (req, res) => {
    res.send('<h1> please login my instagram id</h1>')
})

app.get('/youtube', (req, res) => {
    res.send('<h2>Chai aur code</h2>')
})

app.get('/github', (req, res) => {
    res.json(githubData)
})
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})
