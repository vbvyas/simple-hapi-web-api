simple-hapi-web-api
===================

A simple node.js REST api written in hapi.js versus the popular express.js

Install hapi.js

    npm install hapi --save
    
Try the REST api:

Navigate to [http://localhost:3000](http://localhost:3000)

You'll get the message: 'app is running'

    Request
    ----------------------------
    
    GET /test
    GET /test/1
    POST /test { "data": "test }
    DELETE /test/1
