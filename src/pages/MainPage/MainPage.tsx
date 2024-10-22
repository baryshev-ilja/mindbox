import styled from 'styled-components';

import { CreateNewTaskForm } from '@/entities/CreateNewTaskForm';
import { TabsFilters } from '@/entities/TabsFilters';
import { TaskList } from '@/entities/TaskList';
import { IntroLogo } from '@/shared/ui/IntroLogo';

const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 80px;
`;

const ContentInner = styled.div`
    display: flex;
    flex-direction: column;
    gap: 36px;
`;

const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 18px;
`;

export const MainPage = () => {
    return (
        <MainWrapper>
            <IntroLogo />
            <ContentInner>
                <FormWrapper>
                    <CreateNewTaskForm />
                    <TabsFilters />
                </FormWrapper>
                <TaskList data-testid="taskList" />
            </ContentInner>
        </MainWrapper>
    );
};
