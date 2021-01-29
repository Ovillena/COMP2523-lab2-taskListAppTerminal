export default class Tag {
  constructor(private _tag: string) {}
  getTag(): string {
    return this._tag;
  }

  setTag(newTag: string): string {
    return (this._tag = newTag);
  }
}
