const cor = require("../models/cor");

class CorController {
    
    async findAll(req,res) {
        const registros = await cor.find();
        return res.status(200).json(registros);
    }

    async findById(req, res) {
        const registro = await cor.findById(req.params.id);
        if (registro)  {
            return res.status(200).json(registro);
        } else {
            return res.status(404).send("Not found")
        }
    }

    async store(req, res) {
        const registro = await cor.create(req.body);
        return res.status(201).json(registro);
    }

    async update(req, res) {
        const registro = await cor.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })
        if (registro) {
            return res.status(200).send(registro);
        } else {
            return res.status(404).send("Not found");
        }
    }

    async delete(req, res) {
        const registro = await cor.findByIdAndDelete(req.params.id);
        if (registro) {
            return res.status(200).send("Deleted");
        } else {
            return res.status(404).send("Not found");
        }
    }
}    

module.exports = new.CorController();