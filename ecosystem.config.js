module.exports = {
  apps: [
    {
      name: 'unleash', // App name that shows in `pm2 ls`
      exec_mode: 'cluster', // enables clustering
      instances: 'max', // or an integer
      cwd: '/var/www/unleash/current', // only if using a subdirectory
      script: 'yarn', // The magic key
      args: 'start:dev',
      watch: true,
      time: true,
      env: {
          NODE_ENV: 'production',
          UNLEASH_DATABASE_USER: 'drinkscodb',
          UNLEASH_DATABASE_PASSWORD: 'v7GgSj4Z3khg3Vr4',
          UNLEASH_DATABASE_URL: 'lecave-rds.c9vskqx90rhx.eu-west-1.rds.amazonaws.com',
          UNLEASH_DATABASE_NAME: 'unleash'
      },
    },
  ],
}
