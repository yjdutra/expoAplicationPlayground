# Como rodar
- 1° Copie o pluggin para raiz
- 2° Copie o oque esta sendo adicionado ao app.json
- 3° Rode npx expo prebuild.

    "plugins": [
      [
        "./plugins/withAndroidMainActivityAttributes",
        {
          "attributes": [
            {
              "android:name": "android.intent.category.HOME"
            },
            {
              "android:name": "android.intent.category.DEFAULT"
            }
          ]
        }
      ]
    ],