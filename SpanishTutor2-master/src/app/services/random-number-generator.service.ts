import { Injectable } from '@angular/core';

@Injectable()
export class RandomNumberGeneratorService {
  index: number;

  constructor() {
    this.index = 0;
  }

  generateRandomNumber( maxNumber: number ) {
    return Math.floor( Math.random() * maxNumber );
  }

  generateRandomNumberArray( arrayLength: number = 5, maxNumber: number, numberArray: number[] ): number[] {
    if( this.index < arrayLength ) {
      let randomNumber: number = this.generateRandomNumber(maxNumber);
      if (numberArray.indexOf(randomNumber) === -1) {
        numberArray.push(randomNumber);
        this.index++;
      }

      return this.generateRandomNumberArray(arrayLength, maxNumber, numberArray);
    } else {
      this.index = 0;
    }
  }
}
