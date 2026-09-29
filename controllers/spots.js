import { pool } from '../config/database.js'

const getSpots = async (req, res) => {
    try {
        const results = await pool.query(
            'SELECT * FROM spots ORDER BY id ASC'
        )

        res.status(200).json(results.rows)
    }
    catch (error) {
        res.status(409).json({
            error: error.message
        })
    }
}
const getSpotBySlug = async (req, res) => {
  try {
    const results = await pool.query(
      'SELECT * FROM spots WHERE slug = $1',
      [req.params.slug]
    )

    if (results.rows.length === 0) {
      return res.status(404).json({
        error: 'Study spot not found'
      })
    }

    res.status(200).json(results.rows[0])
  }
  catch (error) {
    res.status(409).json({
      error: error.message
    })
  }
}

export default {
    getSpots,
    getSpotBySlug
}
