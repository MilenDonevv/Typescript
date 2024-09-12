# Typescript

Is is my playground for learning and trying out different typescript functionalities.

----------------------

1. tsc --init   
2. tsconfig.json
   -    "module": "commonjs",  
   -    "noEmitOnError": true, 
        "rootDir": "./src", 
        "outDir": "./build/js",
          "include": [           
    "src"
  ]

  --> this last one is added at the bottom to ignore any ts files outside of the src directory

tsc --noEmitOnError -w (watch flag)