declare namespace NodeJS {
  interface Process {
    env: {
      NODE_ENV: 'production' | 'development'
    }
  }
}
