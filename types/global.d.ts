declare type Recordable<T = any> = Record<string, T>
declare namespace NodeJS {
  interface Process {
    env: {
      NODE_ENV: 'production' | 'development'
    }
  }
}
