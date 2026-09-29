import { pool } from './database.js'
import './dotenv.js'
import spotData from '../data/spots.json' with { type: 'json' }
const createSpotsTable = async () => {

    const createTableQuery = `
        DROP TABLE IF EXISTS spots;

        CREATE TABLE IF NOT EXISTS spots (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            slug VARCHAR(255) NOT NULL,
            location VARCHAR(255) NOT NULL,
            noiseLevel VARCHAR(50) NOT NULL,
            wifi BOOLEAN NOT NULL,
            bestFor VARCHAR(255) NOT NULL,
            description TEXT NOT NULL,
            image VARCHAR(255) NOT NULL
        )
    `

    try {
        await pool.query(createTableQuery)
        console.log('🎉 spots table created successfully')
    }
    catch (err) {
        console.error('⚠️ error creating spots table', err)
    }
}
const seedSpotsTable = async () => {

    await createSpotsTable()

    spotData.forEach((spot) => {

        const insertQuery = {
            text: `
                INSERT INTO spots
                (name, slug, location, noiseLevel, wifi, bestFor, description, image)
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
            `
        }

        const values = [
            spot.name,
            spot.slug,
            spot.location,
            spot.noiseLevel,
            spot.wifi,
            spot.bestFor,
            spot.description,
            spot.image
        ]

        pool.query(insertQuery, values, (err, res) => {

            if (err) {
                console.error('⚠️ error inserting study spot', err)
                return
            }

            console.log(`✅ ${spot.name} added successfully`)
        })
    })
}
seedSpotsTable()
