module.exports = {
  mongodb: {
    url: process.env.DB_CONNECTION,

    options: {
      useNewUrlParser: true 
    }
  },
  migrationsDir: "migrations",
  changelogCollectionName: "changelog",
  migrationFileExtension: ".js",
  useFileHash: false
};