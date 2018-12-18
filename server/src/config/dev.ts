export =  {
  port: 8081,
  db: {
    database: 'tabtracker',
    user: 'tabtracker',
    password: 'tabtracker',
    options: {
      dialect: 'postgres',
      host: 'localhost',
    }
  },
  authentication: {
    jwtSecret: 'd3v-s3cr3t-k3y'
  }
}

// For future reference
/*
  port:  process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'tabtracker',
    user: process.env.DB_USER || 'tabtracker',
    password: process.env.DB_PASS || 'tabtracker',
    options: {
      dialect: process.env.DIALECT || 'postgres',
      host: process.env.HOST || 'localhost',
      define: {
        timestamps: false
      }
    }
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'd3v-s3cr3t-k3y'
  }
*/