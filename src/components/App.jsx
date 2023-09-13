import { Profile } from 'components/Profile';
import user from 'json/user.json';

import { Statistics } from './Statistics';
import data from 'json/data.json';

import { FriendList } from './FriendList';
import friends from 'json/friends.json';

import { TransactionHistory } from './TransactionHistory';
import transactions from 'json/transactions.json';

import css from './App.module.css';

export const App = () => (
  <div className={css.container}>
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics title="Upload Stats" stats={data} />
    <Statistics stats={data} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
  </div>
);
