import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name:'realPipe'
})

export class RealPipe implements PipeTransform{
    transform(value: number, args: string[]): string{
        return "R$ " + value;                            
    }
}