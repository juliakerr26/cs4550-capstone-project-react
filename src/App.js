import Home from './home';
import Search from './search';
import BookDetails from './shared/book-details.js';
import BookGroup from './book-group';
import CreateBookClub from './book-group/create-book-club.js';
import BookList from './book-group/book-list.js';
import Profile from './profile';
import Login from './login';
import NavBar from './shared/nav-bar';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router';
import { Provider } from 'react-redux';
import CurrentUserContext from './redux/current-user-context';
import store from './redux/store';
import UsersSearch from './search/users-search';
import Register from "./create-profile";
import EditProfile from "./create-profile/edit-profile";

function App() {
  return (
    <Provider store={store}>
      <CurrentUserContext>
        <BrowserRouter>
          <div className="container">
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<Search />} />
              <Route path="/search/:query" element={<Search />} />
              <Route path="search/users" element={<UsersSearch />} />
              <Route path="search/users/:query" element={<UsersSearch />} />
              <Route path="/book-details/:id" element={<BookDetails />} />
              <Route path="/book-clubs" element={<BookGroup />} />
              <Route path="/book-clubs/create" element={<CreateBookClub />} />
              <Route path="/book-clubs/edit/:id" element={<CreateBookClub />} />
              <Route path="/book-clubs/update/:id" element={<BookGroup />} />
              <Route path="/book-clubs/:id" element={<BookList />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/profile/:username" element={<Profile />} />
              <Route path="/login" element={<Login />} />
              <Route path="/create-profile" element={<Register />} />
              <Route path="/profile/edit" element={<EditProfile />} />
            </Routes>
          </div>
        </BrowserRouter>
      </CurrentUserContext>
    </Provider>
  );
}

export default App;
