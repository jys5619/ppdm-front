import { ChangeEvent } from "react";

export interface QueryFormInputEntityProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: any;
  controlName: string;
  index: number;
  watchType: string;
  onChangeType: (event: ChangeEvent<HTMLSelectElement>) => void;
  onUp: () => void;
  onDown: () => void;
  onRemove: () => void;
}
