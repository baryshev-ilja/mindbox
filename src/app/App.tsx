import styled from 'styled-components';

import { TasksProvider } from './provider/StoreProvider';
import GlobalStyles from './styles/globalStyles';

import { MainPage } from '@/pages/MainPage';

const AppStyled = styled.div`
    min-height: 100%;
    display: flex;
    flex-direction: column;
    gap: 80px;
    padding: 70px 0 40px;
    margin: 0 auto;
    width: 649px;
`;

export const App = () => {
    return (
        <TasksProvider>
            <GlobalStyles />
            <AppStyled>
                <MainPage />
            </AppStyled>
        </TasksProvider>
    );
};

export default App;
