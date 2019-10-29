// ==========
//  PUERTO
// ==========

process.env.PORT = process.env.PORT || 3000;


// ==========
//  Entorno
// ==========
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


// ==========
//  DDBB
// ==========
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafeDB';
} else {
    urlDB = 'mongodb+srv://elnm-admin:wOUhrqf6sjVs9xOL@cluster-elnm-yan3y.mongodb.net/CAFE?retryWrites=true&w=majority';
}

process.env.URLDB = urlDB;