module.exports = {
    apps: [
      {
        name: "bim-frontend-mini",         // Название вашего приложения
        script: "node_modules/next/dist/bin/next", // путь к бинарнику next
        args: "start -p 3010",        // запуск команды `next start` на порту 3010
        instances: "max",             // можно указать число экземпляров или "max" для кластерного режима
        exec_mode: "cluster",         // режим запуска (cluster или fork)
        env: {
          NODE_ENV: "production",
        },
      },
    ],
  };