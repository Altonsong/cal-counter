const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// 连接到MongoDB
mongoose.connect('mongodb://localhost:27017/todayDishDB', { useNewUrlParser: true, useUnifiedTopology: true });

// 创建数据模型
const dishSchema = new mongoose.Schema({
    name: String,
    image: String,
    serve: Number,
    calories: Number,
    time: String
});

const Dish = mongoose.model('Dish', dishSchema);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// API端点：获取所有今天的菜品
app.get('/api/today', async (req, res) => {
    try {
        const dishes = await Dish.find();
        res.json(dishes);
    } catch (error) {
        res.status(500).send(error);
    }
});

// API端点：添加新的菜品到今天的列表
app.post('/api/today', async (req, res) => {
    const { name, image, serve, calories, time } = req.body;
    const newDish = new Dish({ name, image, serve, calories, time });

    try {
        await newDish.save();
        res.status(201).send(newDish);
    } catch (error) {
        res.status(500).send(error);
    }
});

// API端点：删除指定的菜品
app.delete('/api/today/:id', async (req, res) => {
    try {
        await Dish.findByIdAndDelete(req.params.id);
        res.status(200).send({ message: 'Dish deleted' });
    } catch (error) {
        res.status(500).send(error);
    }
});

// 启动服务器
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
