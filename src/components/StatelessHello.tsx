import * as React from 'react';
import { getExclamationMarks } from '../helpers/lib';

export interface Props {
  name: string;
  enthusiasmLevel?: number;
}

function StatelessHello({ name, enthusiasmLevel = 1 }: Props) {
  if (enthusiasmLevel <= 0) {
    throw new Error('You could be a little more enthusiastic.');
  }

  return (
    <div className="hello">
      <div className="greeting">
        <h1>Hello {name + getExclamationMarks(enthusiasmLevel)}</h1>
      </div>
    </div>
  )
}

export default StatelessHello;