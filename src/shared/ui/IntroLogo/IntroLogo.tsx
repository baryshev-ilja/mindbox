import styled from 'styled-components';

import { Icon } from '../Icon';
import { Text } from '../Text';

import MindboxLogo from '@/shared/assets/mindbox.svg?react';

const IntroWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

const LogoInner = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

const LogoMindbox = styled(Icon)`
    margin-bottom: 5px;
`;

export const IntroLogo = () => {
    return (
        <IntroWrapper>
            <LogoInner>
                <Text isTitle>todos</Text>
                <LogoMindbox
                    Svg={MindboxLogo}
                    width={246}
                    height={49}
                />
            </LogoInner>
            <Text
                size="sizeL"
                align="center"
            >
                Удобный планировщик задач и целей
            </Text>
        </IntroWrapper>
    );
};
