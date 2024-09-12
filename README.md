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

---------------

- strongly typed languages - Demand specification of data types!
- TypeScript is strongly typed language / Javascript is loosely typed language.

- Typescript is also STATICALLY typed language - types are checked AT COMPILE TIME! 

- JS is dynamically typed language - types are checked at RUN TIME !

- A few of TS benefits:
  1) self-documenting code
  2) Catch errors during development
  3) Very good for teams
