import { createRoot } from 'react-dom/client';

import App from '@/app/App';
// @ts-expect-error Это подключение шрифтов
import FontStyles from '@/app/styles/fontStyles';

const container = document.getElementById('root');

if (!container) {
    throw new Error('Контейнер root не найден, и react приложение не может быть вмонтировано!');
}

const root = createRoot(container);

root.render(
    <App />,
);
