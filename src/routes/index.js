//Layouts
import { HeaderOnly } from '@/components/Layout';

import Following from '@/pages/Following';
import Home from '@/pages/Home';
import Upload from '@/pages/Upload';

const publicRouters = [
    { path: '/', element: Home },
    { path: '/following', element: Following },
    { path: '/upload', element: Upload, layout: HeaderOnly },
];
const privateRouters = [];
export { publicRouters, privateRouters };
