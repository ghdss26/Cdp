import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(value: string): string {

    switch (value) {

      case 'ativo':
        return 'code';

      case 'inativo':
        return 'computer';
    }

    return value;
  }

}
