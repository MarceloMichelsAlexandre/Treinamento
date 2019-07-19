const produto = require("../models/produto");

class ProdutoController {
    
    async findAll(req,res) {
        const registros = await produto.find();
        return res.status(200).json(registros);
    }

    async findById(req, res) {
        const registro = await produto.findById(req.params.id);
        if (registro)  {
            return res.status(200).json(registro);
        } else {
            return res.status(404).send("Not found")
        }
    }

    async store(req, res) {
        const registro = await produto.create(req.body);
        return res.status(201).json(registro);
    }

    async update(req, res) {
        const registro = await produto.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })
        if (registro) {
            return res.status(200).send(registro);
        } else {
            return res.status(404).send("Not found");
        }
    }

    async delete(req, res) {
        const registro = await produto.findByIdAndDelete(req.params.id);
        if (registro) {
            return res.status(200).send("Deleted");
        } else {
            return res.status(404).send("Not found");
        }
    }
}    

module.exports = new ProdutoController();