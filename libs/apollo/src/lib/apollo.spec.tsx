import { render } from '@testing-library/react';

import Apollo from './apollo';

describe('Apollo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Apollo />);
    expect(baseElement).toBeTruthy();
  });
});
