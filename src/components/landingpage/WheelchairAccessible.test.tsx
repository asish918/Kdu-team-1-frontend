
import { render } from '@testing-library/react';
import WheelchairAccessible from './WheelchairAccessible';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../utils/i18next';

describe('WheelchairAccessible component', () => {
  it('renders without crashing', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <WheelchairAccessible />
      </I18nextProvider>
    );
  });

  it('renders label text based on translation', () => {
    const { getByText } = render(
      <I18nextProvider i18n={i18n}>
        <WheelchairAccessible />
      </I18nextProvider>
    );

    
    expect(getByText('I need an Accessible Room'));
  });
 
  
});


