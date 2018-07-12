import { Noticia } from './noticia.abstract.model';

export class FullNoticia extends Noticia {
  protected content: string;
  constructor() {
    super();
  }
}
