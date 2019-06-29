import React from 'react';
import { Link, Route, Switch, useRoute } from 'wouter';
import { Case1 } from './Case1';
import { Case2 } from './Case2';
import { Case3 } from './Case3';
import { Case4 } from './Case4';
import { Case5 } from './Case5';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <section>
        <nav>
          <center>
            <ActiveLink href="/case-1">Case 1</ActiveLink>
            <ActiveLink href="/case-2">Case 2</ActiveLink>
            <ActiveLink href="/case-3">Case 3</ActiveLink>
            <ActiveLink href="/case-4">Case 4</ActiveLink>
            <ActiveLink href="/case-5">Case 5</ActiveLink>
          </center>
        </nav>
      </section>

      <main>
        <center>
          <Switch>
            <Route path="/case-1" component={Case1} />
            <Route path="/case-2" component={Case2} />
            <Route path="/case-3" component={Case3} />
            <Route path="/case-4" component={Case4} />
            <Route path="/case-5" component={Case5} />
          </Switch>
        </center>
      </main>
    </div>
  );
};

const ActiveLink = props => {
  const [isActive] = useRoute(props.href);

  return (
    <Link {...props}>
      {/* eslint-disable-next-line */}
      <a className={(isActive && 'active') || ''}>{props.children}</a>
    </Link>
  );
};

export default App;
