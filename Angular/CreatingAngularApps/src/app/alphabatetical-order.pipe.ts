import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'alphabateticalOrder'
})
export class AlphabateticalOrderPipe implements PipeTransform {

    transform(array: string[], order?: string): string[] {
        let sorted = array.sort();
        console.log(array);
        if (order=='desc') {
            return sorted.reverse();
        }
        return sorted;
    }

}
