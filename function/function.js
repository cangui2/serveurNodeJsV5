const bcrypt = require('bcryptjs');
const User = require('models/users.model');  // Assuming User.js is in the same directory
const Book = require('models/book.model');
const Manga = require('models/manga.model');
const Magazine = require('models/magazine.model');
const CategorieManga = require('models/categorie.model');
const Episode = require('models/episode.model');

//************************************User**********************************************************//
async function createUser(data) {
    data.password = await bcrypt.hash(data.password, 10);
    return User.create(data);
}
// Get one user
async function getUser(id) {
    return User.findById(id);
}

// Get all users
async function getUsers() {
    return User.find({ is_deleted: false });
}
async function updateUser(id, data) {
    if (data.password) {
        data.password = await bcrypt.hash(data.password, 10);
    }
    return User.findByIdAndUpdate(id, data, { new: true });
}
async function deleteUser(id) {
    return User.findByIdAndUpdate(id, { is_deleted: true }, { new: true });
}

//******************************************Book****************************************************//

function createBook(data) {
    return Book.create(data);
}
// Get one book
function getBook(id) {
    return Book.findById(id);
}

// Get all books
function getBooks() {
    return Book.find({ is_active: true });
}
function deleteBook(id) {
    return Book.findByIdAndUpdate(id, { is_active: false }, { new: true });
}
function getLastTenBook() {
    return Book.find({ is_active: true })
        .sort({ createdAt: -1 })
        .limit(10)
        .populate('categories episode');
}
//********************************************************************************************//

function createManga(data) {
    return Manga.create(data);
}
// Get one manga with category and episode populated
function getManga(id) {
    return Manga.findById(id).populate('categories episode');
}

// Get all mangas with category and episode populated
function getMangas() {
    return Manga.find({ is_active: true }).populate('categories episode');
}
function updateManga(id, data) {
    return Manga.findByIdAndUpdate(id, data, { new: true });
}
function deleteManga(id) {
    return Manga.findByIdAndUpdate(id, { is_active: false }, { new: true });
}
// Get the last 10 mangas added
function getLastTenMangas() {
    return Manga.find({ is_active: true })
        .sort({ createdAt: -1 })
        .limit(10)
        .populate('categories episode');
}
//********************************************************************************//

function createMagazine(data) {
    return Magazine.create(data);
}
// Get one magazine
function getMagazine(id) {
    return Magazine.findById(id);
}

// Get all magazines
function getMagazines() {
    return Magazine.find({ is_active: true });
}
function updateMagazine(id, data) {
    return Magazine.findByIdAndUpdate(id, data, { new: true });
}
function deleteMagazine(id) {
    return Magazine.findByIdAndUpdate(id, { is_active: false }, { new: true });
}
// Get the last 10 magazines added
function getLastTenMagazines() {
    return Magazine.find({ is_active: true })
        .sort({ createdAt: -1 })
        .limit(10);
}

//******************************************************************************************//

function createCategorieManga(data) {
    return CategorieManga.create(data);
}

// Get one category
function getCategorieManga(id) {
    return CategorieManga.findById(id);
}

// Get all categories
function getCategorieMangas() {
    return CategorieManga.find({ is_active: true });
}

function updateCategorieManga(id, data) {
    return CategorieManga.findByIdAndUpdate(id, data, { new: true });
}

function deleteCategorieManga(id) {
    return CategorieManga.findByIdAndUpdate(id, { is_active: false }, { new: true });
}

//********************************************************************************************///

function createEpisode(data) {
    return Episode.create(data);
}

// Get one episode with manga populated
function getEpisode(id) {
    return Episode.findById(id).populate('manga');
}

// Get all episodes with manga populated
function getEpisodes() {
    return Episode.find({ is_active: true }).populate('manga');
}

function updateEpisode(id, data) {
    return Episode.findByIdAndUpdate(id, data, { new: true });
}
function deleteEpisode(id) {
    return Episode.findByIdAndUpdate(id, { is_active: false }, { new: true });
}
