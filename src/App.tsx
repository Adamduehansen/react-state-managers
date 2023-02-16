import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <header className='container'>
        <hgroup>
          <h1>React State Managements</h1>
          <h2>Choose an implementation below</h2>
        </hgroup>
        <nav>
          <figure>
            <ul>
              {[
                'redux',
                'zustand',
                'jotai',
                'xstate',
                'mobx',
                'vltio',
                'recoil',
              ].map((link) => {
                return (
                  <li key={`nav_${link}`}>
                    <Link to={link} role='button'>
                      {link}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </figure>
        </nav>
      </header>
      <main className='container'>
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
