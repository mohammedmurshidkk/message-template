import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import MessageList from './pages/template-list';
import TemplateUpdate from './pages/template-update';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'>
      <Route path='/message-template'>
        <Route index element={<MessageList />} />
        <Route path='add' element={<TemplateUpdate />} />
      </Route>
      <Route path='*' element={<>Page Notfound</>} />
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
