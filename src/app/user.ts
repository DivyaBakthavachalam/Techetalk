import { StringMap } from '@angular/core/src/render3/jit/compiler_facade_interface';

export class User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  vote: string;
  answers: string;
  tags: StringMap;
  topic: string;
  view: string;
}
