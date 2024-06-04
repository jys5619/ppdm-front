export interface QueryFormSqlEntityProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: any;
  controlName: string;
  index: number;
  onUp: () => void;
  onDown: () => void;
  onRemove: () => void;
}
