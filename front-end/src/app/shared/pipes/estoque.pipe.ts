import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'estoque'
})
export class EstoquePipe implements PipeTransform {

  transform(value: String): String {

    switch(value) {

      case 'estoque 1' : return 'code';
      case 'estoque 2' : return 'computer';
    }

    return 'code';

  }

}
