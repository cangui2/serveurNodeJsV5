const { createManga, getManga, getMangas, updateManga, deleteManga, getLastTenMangas } = require('function/function'); // Supposons que vous ayez défini vos fonctions CRUD dans mangaFunctions.js

exports.createManga = async (req, res) => {
    try {
        const manga = await createManga(req.body);
        res.status(201).json(manga);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.getManga = async (req, res) => {
    try {
        const manga = await getManga(req.params.id);
        res.status(200).json(manga);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
exports.getMangas = async (req, res) => {
    try {
        const mangas = await getMangas();
        res.status(200).json(mangas);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.updateManga = async (req, res) => {
    try {
        const updatedManga = await updateManga(req.params.id, req.body);
        res.status(200).json(updatedManga);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.deleteManga = async (req, res) => {
    try {
        const deletedManga = await deleteManga(req.params.id);
        res.status(200).json(deletedManga);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.getLastTenMangas = async (req, res) => {
    try {
        const mangas = await getLastTenMangas();
        res.status(200).json(mangas);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
