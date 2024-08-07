export interface Position {
  x: number;
  y: number;
}

export interface Size {
  width: number;
  height: number;
}

export interface WindowInterface {
  id: number;
  title: string;
}

export interface WindowState {
  size: Size;
  position: Position;
}
