const express = require("express")
const path = require("path")
const app = express()

const port = process.env.PORT || 8080

app.use(express.static(path.join(__dirname, "build")))

app.get("/", (res, req) => {
    res.sendFile(
        path.resolve(__dirname, "build", "index.html")
    )
})

app.listen(port, () => {
    console.log(`server is listening on ${port}`)
})