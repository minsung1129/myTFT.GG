import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import axios from 'axios';

const port = 4000;
const app = express();

app.use(cors());
app.use(bodyParser.json());

const api_key = 'RGAPI-8432be2f-88d6-4693-93d0-7eef2c210f03'
const url = `https://kr.api.riotgames.com/tft/league/v1/challenger?api_key=${api_key}`

app.use('/result', async (req, res) => {
    const { data } = await axios.get(url);
    res.json(data);
})


app.listen(port, () => {
    console.log(`express is running on ${port}`);
})