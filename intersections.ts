type Circle = {
    radius: number;

}

type Colorful = {
    color: string;
}

type ColorfulCircle = Circle & Colorful;

const happyFace: ColorfulCircle = {
     radius: 8,
     color: "red",
};

console.log(happyFace);
type Cat = {
    numLives: number
    };

type Dog = {
    breed: string
} ;   

type CatDog = Cat & Dog & {
    age: number;
};

const christy: CatDog = {
    numLives: 7,
    breed: "husky",
    age: 9
};
console.log(christy);
