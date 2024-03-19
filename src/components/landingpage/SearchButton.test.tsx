
import { render, fireEvent, screen } from '@testing-library/react';
import { appTheme, muiTheme } from "../../styles/theme";
import { I18nextProvider } from 'react-i18next';
import i18n from '../../utils/i18next'; 
import SearchButton from './SearchButton';
import { ThemeProvider } from 'styled-components';
import { ThemeProvider as CustomThemeProvider } from "styled-components";
import { GlobalStyle } from "../../styles/globalStyles";
import { Provider } from "react-redux";
import { store } from "../../redux/store";

describe('SearchButton component', () => {
  it('should call onClick function when clicked', () => {
    const onClickMock = () => {};
    render(
        <ThemeProvider theme={muiTheme}>
        <CustomThemeProvider theme={appTheme}>
          <GlobalStyle />
          <Provider store={store}>
            <I18nextProvider i18n={i18n}>
            <SearchButton isDisabled={false} onClick={onClickMock} />
            </I18nextProvider>
          </Provider>
        </CustomThemeProvider>
      </ThemeProvider>
    );

    const button = screen.getByText(/Search/i);
    fireEvent.click(button);
 
    
  });
});



